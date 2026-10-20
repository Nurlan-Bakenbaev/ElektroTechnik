import test from "node:test";
import assert from "node:assert/strict";
import {
  dcCircuit,
  seriesResistance,
  parallelResistance,
  rcVoltage,
  resistanceCurve,
} from "../src/lib/physics.js";
import { parseQuantity, gradeAnswer } from "../src/lib/answers.js";
import { notationParts } from "../src/lib/notation.js";

test("DC measurements agree with Ohm's law and conservation of power", () => {
  for (const [resistance, expected] of [
    [6, 2],
    [12, 1],
    [24, 0.5],
    [48, 0.25],
  ]) {
    const model = dcCircuit({ voltage: 12, resistance });
    assert.equal(model.current, expected);
    assert.equal(model.power, expected * expected * resistance);
    assert.equal(model.loadVoltage, 12);
  }
  assert.equal(dcCircuit({ voltage: 24, resistance: 8 }).current, 3);
});
test("open circuits and zero voltage yield zero current without erasing source voltage", () => {
  assert.deepEqual(dcCircuit({ voltage: 12, resistance: 12, closed: false }), {
    voltage: 12,
    resistance: 12,
    closed: false,
    current: 0,
    power: 0,
    loadVoltage: 0,
  });
  assert.equal(dcCircuit({ voltage: 0, resistance: 6 }).current, 0);
  for (const resistance of [0, -1, NaN, Infinity])
    assert.throws(() => dcCircuit({ voltage: 12, resistance }), RangeError);
  assert.throws(() => dcCircuit({ voltage: -12, resistance: 10 }), RangeError);
});
test("series and parallel equivalents agree with known networks", () => {
  assert.equal(seriesResistance([10, 20, 30]), 60);
  assert.equal(parallelResistance([12, 12]), 6);
  assert.ok(Math.abs(parallelResistance([10, 20]) - 20 / 3) < 1e-12);
  assert.throws(() => parallelResistance([10, 0]));
  assert.throws(() => seriesResistance([]));
});
test("the graph follows the physical model at its endpoints and never increases with R", () => {
  const points = resistanceCurve(12);
  assert.equal(points[0].current, 2);
  assert.equal(points.at(-1).current, 0.25);
  assert.ok(
    points.slice(1).every((point, i) => point.current < points[i].current),
  );
  assert.throws(() => resistanceCurve(12, 0));
});
test("RC charging and discharging have correct initial and one-tau values", () => {
  const model = { source: 10, resistance: 10000, capacitance: 100e-6 };
  assert.equal(rcVoltage({ ...model, time: 0 }), 0);
  assert.equal(rcVoltage({ ...model, time: 0, charging: false }), 10);
  assert.ok(Math.abs(rcVoltage({ ...model, time: 1 }) - 6.321205588) < 1e-8);
  assert.ok(
    Math.abs(rcVoltage({ ...model, time: 1, charging: false }) - 3.678794412) <
      1e-8,
  );
  assert.throws(() => rcVoltage({ ...model, capacitance: 0, time: 1 }));
});
test("German decimals and compatible SI units normalize to the requested unit", () => {
  for (const value of ["0,5 A", "500 mA", "0.5", "5e-1 A"])
    assert.equal(parseQuantity(value, "A").value, 0.5);
  assert.equal(parseQuantity("2,2 kΩ", "Ω").value, 2200);
  assert.equal(parseQuantity("1,2 mC", "µC").value, 1200);
  assert.equal(parseQuantity("1 kWh", "J").value, 3600000);
  for (const value of [
    "Infinity",
    "NaN",
    "",
    "1,2,3",
    "0,5 V",
    "2 MA",
    "<script>",
    "1.000,5 A",
  ])
    assert.equal(parseQuantity(value, "A").valid, false);
});
test("grading supports equivalent units, tolerances, multiple choice and matching", () => {
  const q = { type: "numeric", answer: 0.5, unit: "A", tolerance: 0.001 };
  assert.equal(gradeAnswer(q, "500 mA"), true);
  assert.equal(gradeAnswer(q, "0,5011 A"), false);
  assert.equal(gradeAnswer(q, "0,5 V"), false);
  assert.equal(gradeAnswer({ type: "multiple", answer: [0, 1] }, [1, 0]), true);
  assert.equal(
    gradeAnswer({ type: "multiple", answer: [0, 1] }, [0, 0]),
    false,
  );
  assert.equal(
    gradeAnswer({ type: "matching", answer: [1, 0, 2] }, [1, 0, 2]),
    true,
  );
  assert.equal(
    gradeAnswer({ type: "matching", answer: [1, 0, 2] }, [0, 1, 2]),
    false,
  );
});
test("notation retains subscripts, Greek symbols, German glyphs and surrounding text", () => {
  const input =
    "Änderung: P_ab + P_zu; 4,7 kΩ; 220 µF; φ = 30°; Δ; ä ö ü Ä Ö Ü ß × ÷ ± ≤ ≥";
  const parts = notationParts(input);
  assert.ok(parts.some((p) => p.text === "P" && p.subscript === "ab"));
  assert.equal(
    parts.map((p) => p.text + (p.subscript ? `_${p.subscript}` : "")).join(""),
    input,
  );
});
