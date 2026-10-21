import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { createHash } from "node:crypto";
import { lessons } from "../src/data/course.js";
import {
  lessonVideos,
  formatVideoDuration,
  videoUrl,
  VIDEO_METADATA_CHECKED_ON,
} from "../src/data/lesson-videos.js";

const observedMetadata = JSON.parse(
  readFileSync(
    new URL("../docs/video-metadata-2026-10-21.json", import.meta.url),
    "utf8",
  ),
);

test("exactly the thirteen course topics have licensed German local videos below five minutes", () => {
  const expectedIds = lessons.map((lesson) => lesson.id).sort();
  assert.deepEqual(Object.keys(lessonVideos).sort(), expectedIds);
  assert.deepEqual(Object.keys(observedMetadata).sort(), expectedIds);
  for (const [lessonId, video] of Object.entries(lessonVideos)) {
    const observed = observedMetadata[lessonId];
    assert.equal(video.id, lessonId);
    assert.equal(video.language, "de");
    assert.equal(video.file, `/videos/${lessonId}.mp4`);
    assert.equal(video.durationSeconds, Math.ceil(observed.durationSeconds));
    assert.ok(observed.durationSeconds > 0 && observed.durationSeconds <= 300);
    assert.equal(video.license, "CC BY 4.0");
    assert.equal(
      video.licenseUrl,
      "https://creativecommons.org/licenses/by/4.0/",
    );
    assert.equal(video.creator, observed.creator);
    assert.equal(video.edited, observed.edited);
    assert.equal(observed.checkedOn, VIDEO_METADATA_CHECKED_ON);
    assert.match(
      observed.source,
      /^https:\/\/getitdigital\.uni-wuppertal\.de\/sites\/module\//,
    );
    assert.match(observed.licenseEvidence, /site=lizenz$/);
    assert.ok(
      video.title &&
        video.focus &&
        observed.originalTitle &&
        observed.modifications,
    );
    assert.equal(
      videoUrl(video),
      `${process.env.NEXT_PUBLIC_BASE_PATH || ""}${video.file}`,
    );
  }
});

test("delivered MP4 files match the probed duration and provenance manifest by SHA-256", () => {
  for (const observed of Object.values(observedMetadata)) {
    const bytes = readFileSync(
      new URL(`../public${observed.file}`, import.meta.url),
    );
    assert.equal(bytes.length, observed.bytes);
    assert.equal(
      createHash("sha256").update(bytes).digest("hex"),
      observed.sha256,
    );
    assert.equal(bytes.toString("ascii", 4, 8), "ftyp");
    assert.ok(
      bytes.length < 100 * 1024 * 1024,
      "Media fits GitHub's per-file limit",
    );
  }
});

test("video duration is formatted without rounding over the five-minute limit", () => {
  assert.equal(formatVideoDuration(60), "1:00");
  assert.equal(formatVideoDuration(193), "3:13");
  assert.equal(formatVideoDuration(284), "4:44");
  assert.equal(formatVideoDuration(300), "5:00");
});
