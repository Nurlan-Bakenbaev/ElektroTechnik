import { test, expect } from "@playwright/test";
import { lessons } from "../src/data/course.js";
import { READER_KEY } from "../src/lib/reader.js";
import {
  STORAGE_KEY,
  createProfile,
  recordLesson,
} from "../src/lib/progress.js";

async function visit(page, id = "current") {
  const base = new URL(
    process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
  ).pathname.replace(/\/$/, "");
  await page.goto(`${base}/#/lesson/${id}`);
  await expect(
    page.getByRole("region", { name: "Leseeinstellungen" }),
  ).toBeVisible();
}

test("all thirteen lessons offer readable explanations and an explicit concept correction", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const lesson of lessons) {
    await visit(page, lesson.id);
    const pitfall = page.getByRole("complementary", {
      name: "Häufige Verwechslung",
    });
    await expect(pitfall).toBeVisible();
    expect(
      await pitfall
        .locator("p")
        .evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
    ).toBeGreaterThanOrEqual(17);
    const explanation = page.locator(
      lesson.id === "ohm" ? ".ohm-it-context > p" : ".brief-answer",
    );
    expect(
      await explanation.evaluate((element) =>
        parseFloat(getComputedStyle(element).fontSize),
      ),
    ).toBe(19);
    if (lesson.id !== "ohm") {
      await expect(
        page
          .getByRole("navigation", { name: "Abschnitte der Lektion" })
          .getByRole("button"),
      ).toHaveCount(8);
      const formula = page.locator(".brief-formula .formula-image img").first();
      if (await formula.count()) {
        await formula.scrollIntoViewIfNeeded();
        await expect
          .poll(() =>
            formula.evaluate(
              (image) => image.complete && image.naturalWidth > 0,
            ),
          )
          .toBe(true);
      }
    }
  }
  expect(errors).toEqual([]);
});

test("text size and reading focus persist independently of scores and leave navigation usable", async ({
  page,
}) => {
  const saved = recordLesson(createProfile(), "current", 5);
  saved.bookmarks = ["capacitor"];
  await page.addInitScript(
    ({ key, profile }) => {
      if (!localStorage.getItem(key))
        localStorage.setItem(key, JSON.stringify(profile));
    },
    { key: STORAGE_KEY, profile: saved },
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await visit(page);
  const before = await page.evaluate(
    (key) => JSON.parse(localStorage.getItem(key)),
    STORAGE_KEY,
  );
  await page
    .getByRole("button", { name: "Großer Text, 22 Pixel", exact: true })
    .click();
  await page.getByRole("button", { name: "Lesefokus", exact: true }).click();
  await expect(page.locator(".sidebar")).toBeHidden();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Fokus beenden", exact: true }),
  ).toHaveAttribute("aria-pressed", "true");
  expect(
    await page
      .locator(".brief-answer")
      .evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
  ).toBe(22);
  await page
    .getByRole("button", { name: "Fokus beenden", exact: true })
    .click();
  await expect(page.locator(".sidebar")).toBeVisible();
  await page
    .getByRole("link", { name: "Formeln & Einheiten", exact: true })
    .click();
  await expect(page.locator(".reference-formula")).toHaveCount(20);
  await visit(page, "ohm");
  expect(
    await page
      .locator(".ohm-it-context > p")
      .evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
  ).toBe(22);
  const after = await page.evaluate(
    (key) => JSON.parse(localStorage.getItem(key)),
    STORAGE_KEY,
  );
  expect(after.results).toEqual(before.results);
  expect(after.bookmarks).toEqual(before.bookmarks);
  expect(after.examResults).toEqual(before.examResults);
});

test("desktop outline preserves the lesson route, focuses its target and opens the summary", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await visit(page, "voltage");
  const navigation = page.getByRole("navigation", {
    name: "Abschnitte der Lektion",
  });
  const target = navigation.getByRole("button", {
    name: /Spannung ohne Strom/,
  });
  await target.click();
  await expect(page).toHaveURL(/#\/lesson\/voltage$/);
  await expect(
    page.locator("#section-voltage-without-current h2"),
  ).toBeFocused();
  await expect(target).toHaveAttribute("aria-current", "location");
  await navigation.getByRole("button", { name: /Zusammenfassung/ }).click();
  await expect(page.locator("#summary")).toHaveAttribute("open", "");
  await expect(page.locator("#summary h2")).toBeFocused();
  await navigation
    .getByRole("button", { name: /Einstieg und Beispiel/ })
    .click();
  await page
    .getByRole("button", { name: "Im Labor untersuchen", exact: true })
    .click();
  await expect(
    page.getByRole("tab", { name: "Interaktiv", exact: true }),
  ).toHaveAttribute("aria-selected", "true");
  await expect(page.locator("#panel-lab")).toBeFocused();
  expect(
    await page
      .locator("#panel-lab")
      .evaluate((element) => element.getBoundingClientRect().top),
  ).toBeGreaterThan(60);
});

test("large-text mobile reading has a working sticky section selector without overflow at 320px", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 320, height: 900 });
  await visit(page, "capacitor");
  await page
    .getByRole("button", { name: "Großer Text, 22 Pixel", exact: true })
    .click();
  const selector = page.getByRole("combobox", {
    name: "Zum Abschnitt springen",
  });
  await selector.selectOption("section-capacitor-rc");
  await expect(page.locator("#section-capacitor-rc h2")).toBeFocused();
  expect(
    await page
      .locator("#section-capacitor-rc")
      .evaluate((element) => element.getBoundingClientRect().top),
  ).toBeGreaterThan(110);
  for (const width of [320, 375, 768]) {
    await page.setViewportSize({ width, height: 900 });
    const dimensions = await page.evaluate(() => ({
      width: innerWidth,
      scroll: document.documentElement.scrollWidth,
      overflow: Array.from(document.querySelectorAll("main *"))
        .filter(
          (element) => element.getBoundingClientRect().right > innerWidth + 1,
        )
        .slice(0, 12)
        .map((element) => ({
          tag: element.tagName,
          className: element.className,
          right: element.getBoundingClientRect().right,
        })),
    }));
    expect(dimensions.scroll, JSON.stringify(dimensions)).toBeLessThanOrEqual(
      dimensions.width,
    );
  }
  await page.setViewportSize({ width: 375, height: 900 });
  await page.screenshot({ path: "docs/screenshots/reader-mobile.png" });
});

test("invalid or blocked reader storage falls back safely without breaking the lesson", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.addInitScript((key) => {
    localStorage.setItem(key, "{ malformed");
    const original = Storage.prototype.setItem;
    Storage.prototype.setItem = function (name, value) {
      if (name === key) throw new Error("Reader storage denied");
      return original.call(this, name, value);
    };
  }, READER_KEY);
  await visit(page);
  await page
    .getByRole("button", { name: "Großer Text, 22 Pixel", exact: true })
    .click();
  await expect(
    page
      .getByRole("status")
      .filter({ hasText: "Die Leseeinstellung gilt für diese Sitzung" }),
  ).toBeVisible();
  expect(
    await page
      .locator(".brief-answer")
      .evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
  ).toBe(22);
  await page.getByRole("button", { name: "Lesefokus", exact: true }).click();
  await page
    .getByRole("button", { name: "Fokus beenden", exact: true })
    .click();
  await expect(page.locator(".lesson-brief")).toBeVisible();
  expect(errors).toEqual([]);
});
