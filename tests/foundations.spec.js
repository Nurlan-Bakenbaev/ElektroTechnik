import { test, expect } from "@playwright/test";
import { foundations } from "../src/data/foundations.js";
import {
  STORAGE_KEY,
  createProfile,
  recordLesson,
} from "../src/lib/progress.js";
const base = new URL(
  process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
).pathname.replace(/\/$/, "");

test("all eight additions render their full material and self-checks without awarding course results", async ({
  page,
}) => {
  const saved = recordLesson(createProfile(), "current", 5);
  await page.addInitScript(
    ({ key, profile }) => {
      if (!localStorage.getItem(key))
        localStorage.setItem(key, JSON.stringify(profile));
    },
    { key: STORAGE_KEY, profile: saved },
  );
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const guide of foundations) {
    await page.goto(`${base}/#/fundamentals/${guide.id}`);
    const article = page.locator(".foundation-article");
    await expect(article.locator(":scope > header h2")).toHaveText(guide.title);
    await expect(article.locator(".foundation-section")).toHaveCount(3);
    await expect(article.locator(".foundation-example")).toContainText(
      guide.example.result,
    );
    await expect(page.locator("iframe")).toHaveCount(0);
    const check = article.locator(".foundation-check");
    await check
      .getByRole("radio")
      .nth((guide.check.correct + 1) % 3)
      .check();
    await check.getByRole("button", { name: "Antwort prüfen" }).click();
    await expect(check.getByRole("status")).toContainText("Noch nicht ganz.");
    await check.getByRole("radio").nth(guide.check.correct).check();
    await check.getByRole("button", { name: "Antwort prüfen" }).click();
    await expect(check.getByRole("status")).toContainText("Richtig.");
    await expect(article.locator(".foundation-lesson-link")).toHaveAttribute(
      "href",
      `#/lesson/${guide.lessonId}`,
    );
  }
  const profile = await page.evaluate(
    (key) => JSON.parse(localStorage.getItem(key)),
    STORAGE_KEY,
  );
  expect(profile.results).toEqual(saved.results);
  expect(profile.examResults).toEqual([]);
  expect(errors).toEqual([]);
});

test("DC/AC explorer changes polarity, while constant DC remains positive", async ({
  page,
}) => {
  await page.goto(`${base}/#/fundamentals/dc-ac`);
  const explorer = page.getByRole("region", {
    name: "Gleich- und Wechselspannung vergleichen",
  });
  await expect(explorer.locator("output")).toContainText("5,0 V");
  await explorer
    .getByRole("button", { name: "Wechselspannung AC", exact: true })
    .click();
  const slider = explorer.getByRole("slider", {
    name: "Zeitpunkt im Beispiel",
  });
  await slider.fill("38");
  await expect(explorer.locator("output")).toContainText("negative Halbwelle");
  await slider.fill("25");
  await expect(explorer.locator("output")).toContainText("Nulldurchgang");
  await explorer
    .getByRole("button", { name: "Gleichspannung DC", exact: true })
    .click();
  await expect(explorer.locator("output")).toContainText("5,0 V");
  await page.screenshot({
    path: "docs/screenshots/foundations-dc-ac-desktop.png",
    fullPage: true,
  });
});

test("mobile additions remain readable with large text and link back to their parent lessons", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto(`${base}/#/fundamentals/magnetic-materials`);
  await page
    .getByRole("button", { name: "Großer Text, 22 Pixel", exact: true })
    .click();
  for (const guide of foundations) {
    await page
      .getByRole("combobox", { name: "Zusatzthema wählen", exact: true })
      .selectOption(guide.id);
    await expect(page.locator(".foundation-article > header h2")).toHaveText(
      guide.title,
    );
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    expect(
      await page
        .locator(".foundation-lead")
        .evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
    ).toBe(22);
  }
  await page.screenshot({
    path: "docs/screenshots/foundations-shielding-mobile.png",
  });
  await page.locator(".foundation-lesson-link").click();
  await expect(page).toHaveURL(/#\/lesson\/magnets$/);
});
