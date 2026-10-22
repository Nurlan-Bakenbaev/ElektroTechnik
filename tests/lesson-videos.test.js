import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { lessons } from "../src/data/course.js";
import {
  lessonVideos,
  formatVideoDuration,
  VIDEO_METADATA_CHECKED_ON,
} from "../src/data/lesson-videos.js";

const observedMetadata = JSON.parse(
  readFileSync(
    new URL("../docs/video-metadata-2026-10-20.json", import.meta.url),
    "utf8",
  ),
);

test("each of the thirteen lessons has a German YouTube video with a verified duration no greater than five minutes", () => {
  assert.deepEqual(
    Object.keys(lessonVideos).sort(),
    lessons.map((lesson) => lesson.id).sort(),
  );
  assert.match(VIDEO_METADATA_CHECKED_ON, /^\d{4}-\d{2}-\d{2}$/);
  const ids = new Set();
  for (const [lessonId, video] of Object.entries(lessonVideos)) {
    assert.match(video.id, /^[A-Za-z0-9_-]{11}$/);
    assert.equal(video.language, "de");
    assert.ok(
      Number.isInteger(video.durationSeconds) &&
        video.durationSeconds > 0 &&
        video.durationSeconds <= 300,
    );
    assert.ok(video.title && video.channel && video.focus);
    const observed = observedMetadata[lessonId];
    assert.equal(video.id, observed.id);
    assert.equal(video.durationSeconds, observed.durationSeconds);
    assert.equal(video.channel, observed.channel);
    assert.equal(observed.previewStatus, "OK");
    assert.equal(observed.embeddingAllowed, true);
    assert.equal(observed.checkedOn, VIDEO_METADATA_CHECKED_ON);
    ids.add(video.id);
  }
  assert.equal(ids.size, 13, "Each topic has its own selected video");
});

test("video duration is formatted without rounding over the five-minute limit", () => {
  assert.equal(formatVideoDuration(60), "1:00");
  assert.equal(formatVideoDuration(193), "3:13");
  assert.equal(formatVideoDuration(284), "4:44");
  assert.equal(formatVideoDuration(300), "5:00");
});
