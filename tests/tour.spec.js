import { test, expect } from "@playwright/test";
import { tourSteps } from "../src/data/site-tour.js";
import {
  createProfile,
  recordLesson,
  STORAGE_KEY,
} from "../src/lib/progress.js";
const base = new URL(
  process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
).pathname.replace(/\/$/, "");

test("animated mobile menu keeps its tour highlight aligned and restores the menu trigger", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto(`${base}/#/curriculum`);
  await page.getByRole("button", { name: "Menü öffnen", exact: true }).click();
  await page.getByRole("button", { name: "Website-Tour", exact: true }).click();
  const dialog = page.getByRole("dialog");
  await expect(
    dialog.getByRole("heading", { name: tourSteps[0].title }),
  ).toBeVisible();
  await dialog.getByRole("button", { name: "Weiter", exact: true }).click();
  await expect
    .poll(() =>
      page.evaluate(() => {
        const target = document
          .querySelector('.sidebar .main-nav a[href="#/curriculum"]')
          ?.getBoundingClientRect();
        const highlight = document
          .querySelector(".tour-spotlight")
          ?.getBoundingClientRect();
        return target && highlight && target.left >= 0 && highlight.width > 100
          ? Math.abs(Math.max(8, target.left - 7) - highlight.left) +
              Math.abs(target.top - 7 - highlight.top) +
              Math.abs(Math.min(367, target.right + 7) - highlight.right)
          : 1000;
      }),
    )
    .toBeLessThan(3);
  await dialog.getByRole("button", { name: "Website-Tour schließen" }).click();
  await expect(page).toHaveURL(/#\/curriculum$/);
  await expect(
    page.getByRole("button", { name: "Menü öffnen", exact: true }),
  ).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
});

test("website tour visits actual features, traps focus, preserves progress and returns to its origin", async ({
  page,
}) => {
  const saved = recordLesson(createProfile(), "capacitor", 5);
  await page.addInitScript(
    ({ key, profile }) => {
      if (!localStorage.getItem(key))
        localStorage.setItem(key, JSON.stringify(profile));
    },
    { key: STORAGE_KEY, profile: saved },
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${base}/#/home`);
  const launch = page.getByRole("button", {
    name: "Website-Tour starten",
    exact: true,
  });
  await launch.click();
  const dialog = page.getByRole("dialog");
  await expect(dialog).toBeVisible();
  for (const [index, step] of tourSteps.entries()) {
    await expect(
      dialog.getByRole("heading", { name: step.title, exact: true }),
    ).toBeVisible();
    await expect(page).toHaveURL(
      new RegExp(step.route.replaceAll("/", "\\/") + "$"),
    );
    await expect(dialog.locator(".tour-spotlight")).toBeVisible();
    await expect(dialog.getByRole("status")).toHaveCount(0);
    await expect(page.locator("iframe")).toHaveCount(0);
    if (index === 0) {
      await dialog.getByRole("button", { name: "Weiter", exact: true }).focus();
      await page.keyboard.press("Tab");
      expect(
        await dialog.evaluate((el) => el.contains(document.activeElement)),
      ).toBe(true);
    }
    await dialog
      .getByRole("button", {
        name: index === tourSteps.length - 1 ? "Tour beenden" : "Weiter",
        exact: true,
      })
      .click();
  }
  await expect(dialog).toHaveCount(0);
  await expect(page).toHaveURL(/#\/home$/);
  await expect(launch).toBeFocused();
  expect(
    await page.evaluate(
      (key) => JSON.parse(localStorage.getItem(key)),
      STORAGE_KEY,
    ),
  ).toEqual(saved);
  await launch.click();
  await expect(dialog).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(dialog).toHaveCount(0);
  await expect(launch).toBeFocused();
});

test("mobile tour opens the navigation and closes without blocking the page", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 375, height: 900 });
  await page.goto(`${base}/#/home`);
  await page
    .getByRole("button", { name: "Website-Tour starten", exact: true })
    .click();
  const dialog = page.getByRole("dialog");
  await dialog.getByRole("button", { name: "Weiter", exact: true }).click();
  await expect(page.locator(".sidebar")).toHaveClass(/sidebar-open/);
  await expect(dialog.locator(".tour-spotlight")).toBeVisible();
  await expect
    .poll(
      async () =>
        (await dialog.locator(".tour-spotlight").boundingBox())?.width || 0,
    )
    .toBeGreaterThan(100);
  await page.screenshot({ path: "docs/screenshots/tour-mobile.png" });
  await dialog.getByRole("button", { name: "Zurück", exact: true }).click();
  await expect(
    dialog.getByRole("heading", { name: tourSteps[0].title }),
  ).toBeVisible();
  await dialog.getByRole("button", { name: "Website-Tour schließen" }).click();
  await expect(dialog).toHaveCount(0);
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
  await expect(page.locator(".sidebar-course")).toHaveCount(0);
  await expect(
    page.getByRole("progressbar", { name: "Kursfortschritt" }),
  ).toBeVisible();
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
});
