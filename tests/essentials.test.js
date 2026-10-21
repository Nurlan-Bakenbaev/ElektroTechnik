import test from "node:test";
import assert from "node:assert/strict";
import { quickConcepts } from "../src/data/quick-concepts.js";
import { getLesson } from "../src/data/course.js";
import { quantities } from "../src/data/units.js";

test("all twelve concepts link to real lessons and explain meaning, units, application and a checked answer", () => {
  assert.equal(quickConcepts.length, 12);
  assert.equal(new Set(quickConcepts.map((concept) => concept.id)).size, 12);
  for (const concept of quickConcepts) {
    assert.ok(getLesson(concept.lessonId));
    assert.ok(concept.symbolMeaning && concept.unit);
    assert.equal(concept.explanation.length, 2);
    assert.equal(concept.example.steps.length, 3);
    for (const key of concept.quantities) assert.ok(quantities[key]);
    assert.equal(concept.check.options.length, 3);
    assert.ok(Number.isInteger(concept.check.correct));
    assert.ok(concept.check.correct >= 0 && concept.check.correct < 3);
    assert.ok(concept.check.explanation);
  }
});

test("worked quantities and numerical self-checks agree with independently calculated values", () => {
  const concept = (id) => quickConcepts.find((item) => item.id === id);
  const german = (value) =>
    value.toLocaleString("de-DE", {
      useGrouping: false,
      maximumFractionDigits: 6,
    });
  const examples = [
    ["charge", 2 / 4, "A"],
    ["resistance", 12 - 2 * 0.5, "V"],
    ["resistance", 2 ** 2 * 0.5, "W"],
    ["power", 5 * (2 + 1), "W"],
    ["energy", (80 * 8) / 1000, "kWh"],
    ["kilowatt-hour", (10 / 1000) * 24, "kWh"],
    ["kilowatt-hour", (10 / 1000) * 24 * 0.3 * 100, "Cent"],
    ["efficiency", 80 / 0.8, "W"],
    ["capacitance", 100e-6 * 12 * 1000, "mC"],
  ];
  for (const [id, value, unit] of examples)
    assert.ok(
      concept(id).example.result.includes(`${german(value)} ${unit}`),
      `${id}: ${value} ${unit}`,
    );

  const answers = [
    ["power", 12 * 2, "W"],
    ["energy", 50 * 4, "Wh"],
    ["efficiency", (90 / 100) * 100, "%"],
  ];
  for (const [id, value, unit] of answers) {
    const item = concept(id);
    assert.equal(
      item.check.options[item.check.correct],
      `${german(value)} ${unit}`,
    );
  }
  assert.match(concept("capacitance").symbolMeaning, /Farad.*Coulomb/);
  assert.match(
    concept("magnetic-field").symbolMeaning,
    /B.*Tesla.*H.*Ampere pro Meter/,
  );
});
