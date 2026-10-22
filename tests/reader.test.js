import test from "node:test";
import assert from "node:assert/strict";
import { normalizeReaderPreferences } from "../src/lib/reader.js";
import { lessonStudy } from "../src/data/lesson-study.js";
import { lessons, getLesson } from "../src/data/course.js";
import { splitUnitText, unitDefinitions } from "../src/data/units.js";

test("reader preferences validate untrusted storage and discard unrelated properties", () => {
  for (const value of [
    null,
    false,
    22,
    "large",
    [],
    { size: "huge", focus: "true" },
  ])
    assert.deepEqual(normalizeReaderPreferences(value), {
      size: "standard",
      focus: false,
    });
  assert.deepEqual(
    normalizeReaderPreferences({
      size: "large",
      focus: true,
      results: { current: 5 },
    }),
    { size: "large", focus: true },
  );
});

test("all thirteen study notes stay within the original lessons and source formula images", () => {
  assert.deepEqual(
    Object.keys(lessonStudy).sort(),
    lessons.map((lesson) => lesson.id).sort(),
  );
  for (const lesson of lessons) {
    const guide = lessonStudy[lesson.id];
    assert.ok(guide.mistake && guide.explanation.length > 70);
    if (guide.formulaSection)
      assert.ok(
        lesson.sections.find((section) => section.id === guide.formulaSection)
          ?.formula,
      );
  }
});

test("reviewed terms distinguish materials, dimensionless counts and electrical units", () => {
  const capacitor = getLesson("capacitor").terms;
  assert.equal(
    capacitor.find((term) => term.term === "Dielektrikum").symbol,
    "—",
  );
  assert.equal(
    capacitor.find((term) => term.term === "Relative Permittivität").symbol,
    "εᵣ",
  );
  const windings = getLesson("electromagnetism").terms.find(
    (term) => term.term === "Windungszahl",
  );
  assert.equal(windings.symbol, "N");
  assert.equal(windings.unit, "dimensionslos");
  assert.equal(
    getLesson("power").terms.find((term) => term.term === "Watt").symbol,
    "W",
  );
});

test("less common lesson units and both micro-prefix spellings have readable names without changing text", () => {
  const text = "3 μC, 3 µC, 0,2 mWb, 40 mH, 6 mN, 3 mm, 0,01 S, 100 µT.";
  const parts = splitUnitText(text);
  assert.equal(
    parts.map((part) => part.text + (part.unit || "")).join(""),
    text,
  );
  assert.equal(parts.filter((part) => part.unit).length, 8);
  assert.equal(unitDefinitions.μC.name, "Mikrocoulomb");
  assert.equal(unitDefinitions.S.name, "Siemens");
});
