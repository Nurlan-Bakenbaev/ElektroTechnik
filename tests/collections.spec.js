import { test, expect } from "@playwright/test";
import { lessons } from "../src/data/course.js";
import {
  STORAGE_KEY,
  createProfile,
  recordLesson,
} from "../src/lib/progress.js";

const base = new URL(
  process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
).pathname.replace(/\/$/, "");
async function visit(page, route) {
  await page.goto(`${base}/#/${route}`);
  await expect(page.getByRole("main")).toBeVisible();
}

test("sidebar collections contain exactly the thirteen requested topics and allow filtering", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  await page.emulateMedia({ reducedMotion: "reduce" });
  await visit(page, "home");
  const navigation = page.getByRole("navigation", {
    name: "Lernsammlungen",
    exact: true,
  });
  await expect(navigation.getByRole("link")).toHaveCount(4);
  await navigation
    .getByRole("link", { name: "Videos nach Themen", exact: true })
    .click();
  await expect(
    navigation.getByRole("link", { name: "Videos nach Themen", exact: true }),
  ).toHaveAttribute("aria-current", "page");
  const videos = page.locator(".collection-video-list > article");
  await expect(videos).toHaveCount(13);
  for (const [index, lesson] of lessons.entries()) {
    await expect(
      videos.nth(index).locator(".collection-topic-line"),
    ).toContainText(lesson.title);
    await expect(
      videos.nth(index).locator(".collection-topic-line"),
    ).toContainText(`§ ${lesson.chapter}`);
  }
  await expect(page.locator("video, iframe")).toHaveCount(0);
  await page
    .getByRole("searchbox", { name: "Thema suchen", exact: true })
    .fill("Wirkungsgrad");
  await expect(videos).toHaveCount(1);
  await videos.getByRole("link", { name: "Zur Lektion", exact: true }).click();
  await expect(page).toHaveURL(/#\/lesson\/efficiency$/);
  await navigation
    .getByRole("link", { name: "Zusammenfassungen", exact: true })
    .click();
  await expect(page.locator(".collection-summary")).toHaveCount(13);
  await expect(page.locator(".collection-summary h2")).toHaveText(
    lessons.map((lesson) => lesson.title),
  );
  await expect(
    page.locator(".collection-summary .quantity-legend"),
  ).toHaveCount(13);
  await page.screenshot({
    path: "docs/screenshots/collections-summaries-desktop.png",
    fullPage: true,
  });
  await page
    .getByRole("searchbox", { name: "Thema suchen", exact: true })
    .fill("kein-treffer-xyz");
  await expect(
    page.getByRole("status").filter({ hasText: "Kein Thema gefunden" }),
  ).toBeVisible();
  await navigation
    .getByRole("link", { name: "Formeln & Einheiten", exact: true })
    .click();
  await expect(page.locator(".reference-formula")).toHaveCount(20);
  await expect(page.locator(".reference-formula .quantity-legend")).toHaveCount(
    20,
  );
  for (const link of await page.locator(".reference-formula > a").all()) {
    const href = await link.getAttribute("href");
    expect(lessons.map((lesson) => `#/lesson/${lesson.id}`)).toContain(href);
  }
  expect(errors).toEqual([]);
});

test("test collection opens ordinary and reference quizzes directly and preserves saved scores", async ({
  page,
}) => {
  await visit(page, "tests");
  const initialProfile = recordLesson(createProfile(), "current", 5);
  await page.evaluate(
    ({ key, profile }) => localStorage.setItem(key, JSON.stringify(profile)),
    { key: STORAGE_KEY, profile: initialProfile },
  );
  await page.reload();
  const cards = page.locator(".collection-test");
  await expect(cards).toHaveCount(13);
  await expect(cards.locator("h2")).toHaveText(
    lessons.map((lesson) => lesson.title),
  );
  await expect(cards.first()).toContainText("Bestes Ergebnis: 5/5 · bestanden");
  await expect(page.locator(".collection-exam")).toContainText(
    "1 von 13 Themen bestanden",
  );
  for (const id of ["current", "ohm"]) {
    const card = cards.filter({
      has: page.getByRole("heading", {
        name: lessons.find((lesson) => lesson.id === id).title,
        exact: true,
      }),
    });
    await card
      .getByRole("link", { name: /Test (starten|wiederholen)/ })
      .click();
    await expect(page).toHaveURL(new RegExp(`#\\/lesson\\/${id}\\?tab=quiz$`));
    await expect(
      page.getByRole("tab", { name: "Wissenstest", exact: true }),
    ).toHaveAttribute("aria-selected", "true");
    await expect(
      page.getByRole("button", { name: "Test starten", exact: true }),
    ).toBeVisible();
    await page.reload();
    await expect(
      page.getByRole("tab", { name: "Wissenstest", exact: true }),
    ).toHaveAttribute("aria-selected", "true");
    await page.getByRole("link", { name: "Alle Tests", exact: true }).click();
  }
  const savedProfile = await page.evaluate(
    (key) => JSON.parse(localStorage.getItem(key)),
    STORAGE_KEY,
  );
  expect(savedProfile.results).toEqual(initialProfile.results);
  expect(savedProfile.name).toBe(initialProfile.name);
  await page
    .getByRole("link", { name: "Voraussetzungen ansehen", exact: true })
    .click();
  await expect(
    page.getByRole("button", { name: "Test starten", exact: true }),
  ).toHaveCount(0);
  await expect(
    page.getByRole("link", { name: "Alle Tests", exact: true }),
  ).toHaveAttribute("aria-current", "page");
});

test("all four collections fit mobile screens and remain reachable through the sidebar", async ({
  page,
}) => {
  await page.setViewportSize({ width: 375, height: 900 });
  await page.emulateMedia({ reducedMotion: "reduce" });
  await visit(page, "home");
  for (const label of [
    "Videos nach Themen",
    "Zusammenfassungen",
    "Formeln & Einheiten",
    "Alle Tests",
  ]) {
    await page
      .getByRole("button", { name: "Menü öffnen", exact: true })
      .click();
    await page
      .getByRole("navigation", { name: "Lernsammlungen", exact: true })
      .getByRole("link", { name: label, exact: true })
      .click();
    await expect(
      page.getByRole("button", { name: "Menü öffnen", exact: true }),
    ).toHaveAttribute("aria-expanded", "false");
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
  }
  await page.screenshot({
    path: "docs/screenshots/collections-tests-mobile.png",
    fullPage: true,
  });
});
