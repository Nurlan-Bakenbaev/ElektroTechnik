import { test, expect } from "@playwright/test";
import { quickConcepts } from "../src/data/quick-concepts.js";

async function visit(page, view = "essentials") {
  const base = new URL(
    process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
  ).pathname.replace(/\/$/, "");
  await page.goto(`${base}/#/${view}`);
  await expect(page.getByRole("main")).toBeVisible();
}

test("every foundational explanation has its own accessible navigation, example, definitions and self-check", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await visit(page);
  const nav = page.getByRole("navigation", { name: "Grundbegriff auswählen" });
  await expect(nav.getByRole("button")).toHaveCount(12);
  for (const concept of quickConcepts) {
    const button = nav.getByRole("button", {
      name: new RegExp(`${concept.title}$`),
    });
    await button.click();
    await expect(button).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator("#essential-heading")).toHaveText(concept.title);
    await expect(page.locator(".essential-example")).toContainText(
      concept.example.result,
    );
    await expect(page.locator(".essential-symbol")).toContainText(
      concept.symbolMeaning,
    );
    await expect(page.locator(".quantity-legend dl")).toBeVisible();
    await expect(page.locator(".essential-lesson-link")).toHaveAttribute(
      "href",
      `#/lesson/${concept.lessonId}`,
    );
    await expect(page.locator(".essentials-check legend")).toHaveText(
      concept.check.question,
    );
  }
  expect(errors).toEqual([]);
});

test("self-check explains an incorrect answer, allows correction and resets when switching topics", async ({
  page,
}) => {
  await visit(page);
  await page
    .getByRole("navigation", { name: "Grundbegriff auswählen" })
    .getByRole("button", { name: /Leistung$/ })
    .click();
  const check = page.locator(".essentials-check");
  await expect(
    check.getByRole("button", { name: "Antwort prüfen" }),
  ).toBeDisabled();
  await check.getByRole("radio", { name: "6 W", exact: true }).check();
  await check.getByRole("button", { name: "Antwort prüfen" }).click();
  await expect(check.getByRole("status")).toContainText("Noch nicht richtig");
  await expect(check.getByRole("status")).toContainText("24 W");
  await check.getByRole("radio", { name: "24 W", exact: true }).check();
  await expect(check.getByRole("status")).toHaveCount(0);
  await check.getByRole("button", { name: "Antwort prüfen" }).click();
  await expect(check.getByRole("status")).toContainText("Richtig eingeordnet");
  await page
    .getByRole("button", { name: "Weiter: Energie und Arbeit" })
    .click();
  await expect(page.locator("#essential-heading")).toHaveText(
    "Energie und Arbeit",
  );
  await expect(check.getByRole("radio", { checked: true })).toHaveCount(0);
  await expect(
    check.getByRole("button", { name: "Antwort prüfen" }),
  ).toBeDisabled();
});

test("the current lesson starts with charge carriers, source and closed circuit before calculation", async ({
  page,
}) => {
  await visit(page, "lesson/current");
  const brief = page.locator(".lesson-brief");
  await expect(brief.getByRole("heading", { level: 2 })).toHaveText(
    "Was ist elektrischer Strom, und wie misst man seine Stärke?",
  );
  await expect(brief.locator(".current-primer")).toContainText(
    "Die Quelle liefert Energie",
  );
  await expect(brief.locator(".current-primer")).toContainText("Minus → Plus");
  await expect(brief.locator(".current-primer")).toContainText("Plus → Minus");
  await expect(brief.locator(".quantity-legend dl")).toBeVisible();
  await expect(brief).not.toContainText("Drückt ein 3-A-Netzteil");
  expect(
    await brief.evaluate((el) =>
      Boolean(
        el
          .querySelector(".current-primer")
          .compareDocumentPosition(el.querySelector(".it-worked-example")) &
          Node.DOCUMENT_POSITION_FOLLOWING,
      ),
    ),
  ).toBe(true);
});

test("the expanded essentials page remains readable at desktop and mobile widths", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await visit(page);
  await page.screenshot({
    path: "docs/screenshots/essentials-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 375, height: 900 });
  const nav = page.getByRole("navigation", { name: "Grundbegriff auswählen" });
  for (const title of ["Stromstärke", "Kilowattstunde", "Kapazität"]) {
    await nav.getByRole("button", { name: new RegExp(`${title}$`) }).click();
    await expect
      .poll(() =>
        page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      )
      .toBe(true);
  }
  await expect(page.locator(".essential-symbol")).toContainText("Farad");
  await expect(page.locator(".essential-symbol")).toContainText("Coulomb");
  await page
    .locator(".essential-concept")
    .screenshot({ path: "docs/screenshots/essentials-capacitance-mobile.png" });
  await visit(page, "lesson/current");
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    )
    .toBe(true);
  await page.locator(".current-primer h3").click();
  await page
    .locator(".current-primer")
    .screenshot({ path: "docs/screenshots/current-primer-mobile.png" });
});
