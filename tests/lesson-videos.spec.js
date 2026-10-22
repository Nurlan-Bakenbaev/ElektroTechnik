import { test, expect } from "@playwright/test";
import { lessons } from "../src/data/course.js";
import {
  lessonVideos,
  formatVideoDuration,
} from "../src/data/lesson-videos.js";

async function visit(page, id) {
  const base = new URL(
    process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
  ).pathname.replace(/\/$/, "");
  await page.goto(`${base}/#/lesson/${id}`);
  await expect(page.locator(".lesson-video")).toBeVisible();
}

test("every lesson offers its selected short video and only creates a player after a click", async ({
  page,
}) => {
  const requests = [];
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  // Test our integration without depending on external player scripts or media.
  await page.route("https://www.youtube-nocookie.com/**", async (route) => {
    requests.push(route.request().url());
    await route.fulfill({
      contentType: "text/html",
      body: "<!doctype html><html lang='de'><body>Player integration test</body></html>",
    });
  });
  for (const [index, lesson] of lessons.entries()) {
    await visit(page, lesson.id);
    const video = lessonVideos[lesson.id];
    const panel = page.locator(".lesson-video");
    await expect(panel).toContainText(video.channel);
    await expect(panel).toContainText(
      `${formatVideoDuration(video.durationSeconds)} Min.`,
    );
    await expect(panel.locator("iframe")).toHaveCount(0);
    expect(requests).toHaveLength(index);
    await panel.getByRole("button", { name: "Video ansehen" }).click();
    await expect(
      panel.getByRole("link", { name: "Auf YouTube öffnen" }),
    ).toHaveAttribute("href", `https://www.youtube.com/watch?v=${video.id}`);
    const iframe = panel.locator("iframe");
    await expect(iframe).toHaveAttribute(
      "src",
      `https://www.youtube-nocookie.com/embed/${video.id}?hl=de&cc_lang_pref=de&rel=0`,
    );
    await expect(iframe).toHaveAttribute(
      "referrerpolicy",
      "strict-origin-when-cross-origin",
    );
    await expect(iframe).toHaveAttribute("title", `Lernvideo: ${video.title}`);
    await expect.poll(() => requests.length).toBe(index + 1);
    await expect(panel).toContainText(video.focus);
    await panel.getByRole("button", { name: "Video schließen" }).click();
    await expect(iframe).toHaveCount(0);
  }
  expect(errors).toEqual([]);
});

test("an open player closes on a topic change and video controls work on mobile with the keyboard", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.route("https://www.youtube-nocookie.com/**", (route) =>
    route.fulfill({
      contentType: "text/html",
      body: "<!doctype html><html lang='de'><body>Player integration test</body></html>",
    }),
  );
  await visit(page, "current");
  await page
    .locator(".lesson-video")
    .getByRole("button", { name: "Video ansehen" })
    .click();
  await expect(page.locator(".lesson-video iframe")).toHaveCount(1);
  await visit(page, "voltage");
  await expect(page.locator(".lesson-video iframe")).toHaveCount(0);
  await page.setViewportSize({ width: 375, height: 900 });
  const toggle = page
    .locator(".lesson-video")
    .getByRole("button");
  await toggle.focus();
  await toggle.press("Space");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(toggle).toHaveAccessibleName("Video schließen");
  await expect
    .poll(() =>
      page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
    )
    .toBe(true);
  const box = await page.locator(".lesson-video-player").boundingBox();
  expect(box.width / box.height).toBeCloseTo(16 / 9, 1);
  await toggle.press("Space");
  await expect(page.locator(".lesson-video iframe")).toHaveCount(0);
  await page
    .locator(".lesson-video")
    .screenshot({ path: "docs/screenshots/lesson-video-mobile.png" });
});
