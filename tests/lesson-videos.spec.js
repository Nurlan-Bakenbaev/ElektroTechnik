import { test, expect } from "@playwright/test";
import { lessons } from "../src/data/course.js";
import {
  lessonVideos,
  formatVideoDuration,
} from "../src/data/lesson-videos.js";

const base = new URL(
  process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
).pathname.replace(/\/$/, "");
async function visit(page, id) {
  await page.goto(`${base}/#/lesson/${id}`);
  await expect(page.locator(".lesson-video")).toBeVisible();
}

test("all thirteen local videos decode metadata on demand without YouTube requests", async ({
  page,
}) => {
  const externalPlayers = [];
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("request", (request) => {
    if (/youtube|ytimg|googlevideo|doubleclick/i.test(request.url()))
      externalPlayers.push(request.url());
  });
  for (const lesson of lessons) {
    await visit(page, lesson.id);
    const selected = lessonVideos[lesson.id];
    const panel = page.locator(".lesson-video");
    await expect(panel).toContainText(selected.creator);
    await expect(panel).toContainText(
      `${formatVideoDuration(selected.durationSeconds)} Min.`,
    );
    await expect(
      panel.getByRole("link", { name: selected.license, exact: true }),
    ).toHaveAttribute("href", selected.licenseUrl);
    await expect(panel.locator("video, iframe")).toHaveCount(0);
    await expect(
      panel.getByRole("link", { name: "Videodatei öffnen" }),
    ).toHaveAttribute("href", `${base}${selected.file}`);
    await panel.getByRole("button", { name: "Video ansehen" }).click();
    const player = panel.locator("video");
    await expect(player).toHaveAttribute("src", `${base}${selected.file}`);
    await expect(player).toHaveAttribute(
      "aria-label",
      `Lernvideo: ${selected.title}`,
    );
    await expect
      .poll(() => player.evaluate((video) => video.readyState))
      .toBeGreaterThanOrEqual(1);
    const metadata = await player.evaluate((video) => ({
      duration: video.duration,
      error: video.error?.code,
      controls: video.controls,
      width: video.videoWidth,
    }));
    expect(Math.ceil(metadata.duration)).toBe(selected.durationSeconds);
    expect(metadata.duration).toBeLessThanOrEqual(300);
    expect(metadata.width).toBeGreaterThan(0);
    expect(metadata.error).toBeUndefined();
    expect(metadata.controls).toBe(true);
    await expect(panel).toContainText(selected.focus);
    if (selected.edited) await expect(panel).toContainText("Gekürzter Auszug");
    await panel.getByRole("button", { name: "Video schließen" }).click();
    await expect(player).toHaveCount(0);
  }
  expect(externalPlayers).toEqual([]);
  expect(errors).toEqual([]);
});

test("native playback advances, uses an 80-percent desktop player and closes on navigation", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await visit(page, "current");
  const panel = page.locator(".lesson-video");
  await panel.getByRole("button", { name: "Video ansehen" }).click();
  const player = panel.locator("video");
  await expect
    .poll(() => player.evaluate((video) => video.readyState))
    .toBeGreaterThanOrEqual(2);
  // Mute in this automated playback check; ordinary playback remains user-controlled.
  await player.evaluate(async (video) => {
    video.muted = true;
    await video.play();
  });
  await expect
    .poll(() => player.evaluate((video) => video.currentTime))
    .toBeGreaterThan(0.25);
  await player.evaluate((video) => video.pause());
  const dimensions = await page
    .locator(".lesson-video-player")
    .evaluate((element) => {
      const parent = element.parentElement;
      const style = getComputedStyle(parent);
      return {
        width: element.getBoundingClientRect().width,
        available:
          parent.clientWidth -
          parseFloat(style.paddingLeft) -
          parseFloat(style.paddingRight),
      };
    });
  expect(dimensions.width / dimensions.available).toBeCloseTo(0.8, 2);
  await panel.screenshot({ path: "docs/screenshots/lesson-video-desktop.png" });
  await page
    .getByRole("link", { name: "Videos nach Themen", exact: true })
    .click();
  await expect(page.locator(".collection-video-list")).toBeVisible();
  await expect(page.locator("video")).toHaveCount(0);
  const cards = page.locator(".collection-video-list > article");
  for (const index of [0, 1]) {
    await cards
      .nth(index)
      .getByRole("button", { name: "Video ansehen" })
      .click();
    await cards
      .nth(index)
      .locator("video")
      .evaluate(async (video) => {
        video.muted = true;
        await video.play();
      });
  }
  await expect
    .poll(() =>
      cards
        .first()
        .locator("video")
        .evaluate((video) => video.paused),
    )
    .toBe(true);
  await expect
    .poll(() =>
      cards
        .nth(1)
        .locator("video")
        .evaluate((video) => video.currentTime),
    )
    .toBeGreaterThan(0);
});

test("mobile native video toggle works with the keyboard and the player fills its available width", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.setViewportSize({ width: 375, height: 900 });
  await visit(page, "voltage");
  const toggle = page.locator(".lesson-video").getByRole("button");
  await toggle.focus();
  await toggle.press("Space");
  await expect(toggle).toHaveAttribute("aria-expanded", "true");
  await expect(toggle).toHaveAccessibleName("Video schließen");
  await expect
    .poll(() => page.locator("video").evaluate((video) => video.readyState))
    .toBeGreaterThanOrEqual(1);
  const dimensions = await page
    .locator(".lesson-video-player")
    .evaluate((element) => {
      const parent = element.parentElement;
      const style = getComputedStyle(parent);
      return {
        width: element.getBoundingClientRect().width,
        height: element.getBoundingClientRect().height,
        available:
          parent.clientWidth -
          parseFloat(style.paddingLeft) -
          parseFloat(style.paddingRight),
      };
    });
  expect(dimensions.width / dimensions.height).toBeCloseTo(16 / 9, 1);
  expect(dimensions.width / dimensions.available).toBeCloseTo(1, 2);
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page
    .locator(".lesson-video")
    .screenshot({ path: "docs/screenshots/lesson-video-mobile.png" });
  await toggle.press("Space");
  await expect(page.locator("video")).toHaveCount(0);
});
