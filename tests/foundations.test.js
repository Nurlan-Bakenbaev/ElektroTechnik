import test from "node:test";
import assert from "node:assert/strict";
import { foundations } from "../src/data/foundations.js";
import { getLesson } from "../src/data/course.js";
import { quantities } from "../src/data/units.js";

test("the eight requested additions have complete explanations, comparisons, examples, checks and valid parent lessons", () => {
  assert.deepEqual(
    foundations.map((guide) => guide.id),
    [
      "current-origin",
      "dc-ac",
      "quantities",
      "fields",
      "capacitors",
      "magnetic-materials",
      "motors",
      "shielding",
    ],
  );
  for (const guide of foundations) {
    assert.ok(getLesson(guide.lessonId));
    assert.ok(guide.related.every((id) => getLesson(id)));
    assert.equal(guide.sections.length, 3);
    for (const section of guide.sections) {
      assert.equal(section.paragraphs.length, 2);
      assert.ok(
        section.paragraphs.every((paragraph) => paragraph.length > 160),
      );
    }
    assert.equal(guide.example.steps.length, 3);
    assert.equal(guide.check.options.length, 3);
    assert.ok(guide.check.correct >= 0 && guide.check.correct < 3);
    assert.ok(guide.check.explanation.length > 80);
    assert.ok(guide.units.every((key) => quantities[key]));
    assert.ok(
      guide.sources.every(
        (source) => new URL(source.url).hostname === "openstax.org",
      ),
    );
  }
});

test("new numerical examples agree with their stated assumptions", () => {
  const byId = Object.fromEntries(
    foundations.map((guide) => [guide.id, guide]),
  );
  assert.ok(
    byId["current-origin"].example.steps
      .join(" ")
      .includes(`${(2 / 4).toLocaleString("de-DE")} A`),
  );
  assert.ok(byId.quantities.example.result.includes(`${5 * 2} W`));
  assert.ok(byId.quantities.example.result.includes(`${5 * 2 * 2} Wh`));
  assert.ok(
    byId.capacitors.example.result.includes(
      `${(0.5 * 100e-6 * 12 ** 2).toFixed(4).replace(".", ",")} J`,
    ),
  );
  assert.ok(
    byId.motors.example.result.includes(
      `${(12 * 0.5 * 0.8).toLocaleString("de-DE")} W`,
    ),
  );
  assert.ok(
    byId.motors.example.result.includes(
      `${(12 * 0.5 * (1 - 0.8)).toFixed(1).replace(".", ",")} W`,
    ),
  );
});
