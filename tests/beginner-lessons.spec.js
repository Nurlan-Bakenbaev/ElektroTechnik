import { test, expect } from "@playwright/test";
import { lessons } from "../src/data/course.js";
import { lessonBasics } from "../src/data/lesson-basics.js";

async function visit(page, view = "home") {
  const base = new URL(
    process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
  ).pathname.replace(/\/$/, "");
  await page.goto(`${base}/#/${view}`);
  await expect(page.getByRole("main")).toBeVisible();
}

test("all thirteen existing topics present adapted explanations and retain their detailed references", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const lesson of lessons) {
    await visit(page, `lesson/${lesson.id}`);
    if (lesson.id === "ohm") {
      await expect(
        page.getByRole("region", { name: "Ohmsches Gesetz im IT-Alltag" }),
      ).toContainText(lessonBasics.ohm.answer);
      await page
        .getByRole("tab", { name: "Nachschlagen", exact: true })
        .click();
      const section = page.locator(".ohm-reference > details").first();
      await section.locator("summary").first().click();
      await section.locator(".lesson-depth > summary").click();
      await expect(section).toContainText(lesson.sections[0].paragraphs[0]);
    } else {
      await expect(page.locator(".lesson-brief")).toContainText(
        lessonBasics[lesson.id].question,
      );
      await expect(page.locator(".plain-explanation")).toHaveCount(6);
      await expect(page.locator(".textbook-section .lesson-depth")).toHaveCount(
        6,
      );
      const first = page.locator(".textbook-section .lesson-depth").first();
      await expect(first).not.toHaveAttribute("open", "");
      await first.locator("summary").click();
      await expect(first).toContainText(lesson.sections[0].paragraphs[0]);
    }
  }
});

test("coulomb and capacitance explanations are directly accessible in lessons and laboratories", async ({
  page,
}) => {
  await visit(page, "lesson/current");
  const legend = page.locator(".lesson-brief .quantity-legend");
  await expect(legend).toContainText("C = Coulomb");
  await legend
    .getByRole("button", { name: "Was bedeuten die Zeichen?" })
    .click();
  await expect(legend).toContainText("Q");
  await expect(legend).toContainText("C — Coulomb");
  await expect(
    page.locator(".lesson-brief abbr").filter({ hasText: /^C$/ }).first(),
  ).toHaveAttribute("title", /Coulomb/);
  await page.getByRole("tab", { name: "Interaktiv", exact: true }).click();
  await expect(page.locator(".lab .quantity-legend")).toContainText(
    "C = Coulomb",
  );
  await visit(page, "lesson/capacitor");
  const capacitorLegend = page.locator(".lesson-brief .quantity-legend");
  await capacitorLegend
    .getByRole("button", { name: "Was bedeuten die Zeichen?" })
    .click();
  await expect(capacitorLegend).toContainText("F — Farad");
  await expect(capacitorLegend).toContainText("gemessen wird sie in Farad");
});

test("the new course directory preserves category filters, bookmarks and lesson links", async ({
  page,
}) => {
  await visit(page, "curriculum");
  await expect(page.locator(".course-row")).toHaveCount(13);
  await page
    .getByRole("button", { name: "Energie und Effizienz", exact: true })
    .click();
  await expect(page.locator(".course-row")).toHaveCount(3);
  await page.locator(".course-row-bookmark").first().click();
  await expect(page.locator(".course-row-bookmark").first()).toHaveAttribute(
    "aria-pressed",
    "true",
  );
  await page.reload();
  await expect(
    page.locator('.course-row-bookmark[aria-pressed="true"]'),
  ).toHaveCount(1);
  const energy = page
    .locator(".course-row")
    .filter({ hasText: lessonBasics.energy.question });
  await energy.getByRole("link", { name: /öffnen$/ }).click();
  await expect(page).toHaveURL(/#\/lesson\/energy$/);
});

test("the redesigned homepage demonstrates supply capacity without forcing current and fits mobile screens", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await visit(page);
  const demo = page.getByRole("region", { name: "Netzteil ausprobieren" });
  await expect(demo.locator("output").first()).toHaveText("1 A");
  await demo.getByRole("radio", { name: "2 A", exact: true }).check();
  await expect(demo.locator("output").first()).toHaveText("1 A");
  await demo.getByRole("slider", { name: /Strombedarf/ }).press("End");
  await expect(demo.locator(".supply-verdict")).toContainText(
    "reicht die Strombelastbarkeit nicht",
  );
  await demo.getByRole("radio", { name: "3 A", exact: true }).check();
  await expect(demo.locator(".supply-verdict")).toContainText(
    "Für diesen Bedarf ausreichend",
  );
  await page.screenshot({
    path: "docs/screenshots/azubi-home-desktop.png",
    fullPage: true,
  });
  await page.setViewportSize({ width: 375, height: 900 });
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    )
    .toBe(true);
  await page.screenshot({
    path: "docs/screenshots/azubi-home-mobile.png",
    fullPage: true,
  });
  await visit(page, "lesson/current");
  await expect(page.locator(".lesson-brief")).toBeVisible();
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    )
    .toBe(true);
  await page.locator(".lesson-brief").screenshot({
    path: "docs/screenshots/azubi-current-mobile.png",
  });
  expect(errors).toEqual([]);
});
