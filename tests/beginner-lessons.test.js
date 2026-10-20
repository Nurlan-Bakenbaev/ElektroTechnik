import test from "node:test";
import assert from "node:assert/strict";
import { lessons } from "../src/data/course.js";
import { lessonBasics } from "../src/data/lesson-basics.js";
import {
  quantities,
  unitDefinitions,
  splitUnitText,
} from "../src/data/units.js";
import { dcCircuit } from "../src/lib/physics.js";

test("all thirteen lessons retain their reference material and have a complete beginner explanation", () => {
  assert.deepEqual(
    Object.keys(lessonBasics).sort(),
    lessons.map((lesson) => lesson.id).sort(),
  );
  let sectionCount = 0;
  for (const lesson of lessons) {
    const basics = lessonBasics[lesson.id];
    assert.ok(basics.context && basics.question && basics.answer);
    assert.equal(basics.essentials.length, 3);
    assert.ok(
      basics.example.title && basics.example.given && basics.example.result,
    );
    assert.equal(basics.example.steps.length, 3);
    assert.deepEqual(
      Object.keys(basics.sections).sort(),
      lesson.sections.map((section) => section.id).sort(),
    );
    for (const section of lesson.sections) {
      assert.ok(basics.sections[section.id].length > 60);
      assert.ok(section.paragraphs.length >= 2, "Original reference retained");
      sectionCount++;
    }
    for (const key of basics.units)
      assert.ok(quantities[key] && unitDefinitions[quantities[key].unit]);
    assert.equal(lesson.quiz.length, 5);
  }
  assert.equal(sectionCount, 78);
});

test("legends distinguish charge in coulomb, capacitance in farad, energy and power", () => {
  assert.equal(quantities.charge.symbol, "Q");
  assert.equal(quantities.charge.unit, "C");
  assert.equal(quantities.capacitance.symbol, "C");
  assert.equal(quantities.capacitance.unit, "F");
  assert.equal(unitDefinitions.C.name, "Coulomb");
  assert.equal(unitDefinitions.F.name, "Farad");
  assert.equal(unitDefinitions.kW.name, "Kilowatt");
  assert.equal(unitDefinitions.kWh.name, "Kilowattstunde");
});

test("numeric unit annotations preserve text and do not confuse Celsius with coulomb", () => {
  const text =
    "12 V, 500 mA, 1 kW, 0,5 kWh, 12 C, 100 µF, 25 °C. Größenzeichen C = Kapazität.";
  const parts = splitUnitText(text);
  assert.equal(
    parts.map((part) => part.text + (part.unit || "")).join(""),
    text,
  );
  assert.deepEqual(
    parts.filter((part) => part.unit).map((part) => part.unit),
    ["V", "mA", "kW", "kWh", "C", "µF", "°C"],
  );
  assert.deepEqual(splitUnitText("C bezeichnet die Kapazität"), [
    { text: "C bezeichnet die Kapazität" },
  ]);
});

test("the new IT example results agree with their stated physical assumptions", () => {
  const cases = [
    { id: "current", inputs: ["4 s", "2 C"], expected: 2 / 4, unit: "A" },
    { id: "circuits", inputs: ["1 A", "0,5 A"], expected: 1 + 0.5, unit: "A" },
    {
      id: "resistance",
      inputs: ["12 V", "2 A", "0,5 Ω"],
      expected: 12 - 2 * 0.5,
      unit: "V",
    },
    {
      id: "energy",
      inputs: ["80 W", "8 h"],
      expected: (80 * 8) / 1000,
      unit: "kWh",
    },
    {
      id: "power",
      inputs: ["5 V", "2 A"],
      expected: dcCircuit({ voltage: 5, resistance: 5 / 2 }).power,
      unit: "W",
    },
    {
      id: "efficiency",
      inputs: ["80 W", "80 %"],
      expected: 80 / 0.8,
      unit: "W",
    },
    {
      id: "capacitor",
      inputs: ["100 µF", "12 V"],
      expected: 100 * 12,
      unit: "µC",
    },
    {
      id: "magnetic-quantities",
      inputs: ["20 mT", "1 cm²"],
      expected: 20e-3 * 1e-4 * 1e6,
      unit: "µWb",
    },
  ];
  for (const { id, inputs, expected, unit } of cases) {
    const example = lessonBasics[id].example;
    for (const input of inputs)
      assert.ok(
        example.given.includes(input),
        `${id}: specified input ${input}`,
      );
    assert.ok(
      example.result.includes(
        `${expected.toLocaleString("de-DE", { useGrouping: false, maximumFractionDigits: 6 })} ${unit}`,
      ),
      `${id}: stated result must match independent calculation`,
    );
  }
});
