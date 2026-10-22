import test from "node:test";
import assert from "node:assert/strict";
import { workshopTasks, workshopFamilies } from "../src/data/workshop-tasks.js";
import {
  calculate,
  quantity,
  gradeStep,
  restoreWorkshop,
  newAttempt,
  taskStatus,
} from "../src/lib/workshop.js";
import { lessons } from "../src/data/course.js";

test("workshop has validated original families, two exercises each, real lesson links and source images", () => {
  for (const family of workshopFamilies) {
    const tasks = workshopTasks.filter((task) => task.family === family.id);
    assert.equal(tasks.length, 2);
    for (const task of tasks) {
      assert.ok(lessons.some((lesson) => lesson.id === task.lessonId));
      assert.ok(task.steps.length >= 3);
      assert.ok(task.teaching.length >= 2);
      for (const step of task.steps)
        assert.ok(gradeStep(step, String(step.answer)), task.id);
    }
  }
});

test("all numerical workshop answers agree with independent reference values", () => {
  const expected = {
    prefixes: [
      [0.3, 0.0006, 3600],
      [0.75, 0.0006, 7200],
    ],
    rearrange: [[0.6], [0.5]],
    current: [[0.3], [0.5]],
    potential: [
      [-2, 2],
      [-6, 6],
    ],
    line: [
      [24, 0.28, 0.56, 11.44],
      [30, 0.35, 1.05, 10.95],
    ],
    energy: [
      [0.75, 0.6, 0.192],
      [0.5, 1, 0.32],
    ],
    power: [
      [0.1, 1],
      [0.05, 0.5],
    ],
    efficiency: [
      [96, 72, 60, 48],
      [160, 120, 60, 80],
    ],
    series: [
      [100, 0.1, 4],
      [300, 0.04, 4],
    ],
    parallel: [
      [0.06, 0.12, 100],
      [0.04, 0.06, 200],
    ],
    mixed: [
      [100, 200, 0.05, 5],
      [50, 100, 0.1, 5],
    ],
    e12: [
      [7, 700, 8.536585365854],
      [10, 1000, 10],
    ],
    divider: [
      [6, 500, 4],
      [6, 666.66666666667, 4.8],
    ],
    bridge: [
      [6, 8, -2],
      [6, 9, -3],
    ],
    source: [
      [1, 10, 2],
      [1, 11, 1],
    ],
    field: [
      [0.003, 4000],
      [0.003, 8000],
    ],
    capacitor: [
      [0.0001, 0.0012, 0.0072],
      [0.0002, 0.0024, 0.0144],
    ],
    rc: [
      [1, 0.5, 6.321205588286],
      [2, 0.5, 6.321205588286],
    ],
    magnetic: [
      [20, 100, 0.0006, 0.0003],
      [40, 200, 0.0006, 0.0003],
    ],
    motor: [
      [0.04, 0.02],
      [0.08, 0.04],
    ],
    induction: [
      [0.02, -0.0004, 2, 0],
      [0.02, -0.0004, 4, 0],
    ],
    graph: [
      [100, 66.666666666667],
      [200, 100],
    ],
    geometry: [
      [0.5, 0.785398163397],
      [1, 3.14159265359],
    ],
    transformer: [
      [0.1, 2],
      [0.2, 4],
    ],
  };
  for (const task of workshopTasks) {
    const numbers = task.steps.filter((step) => step.type === "numeric");
    if (!numbers.length) continue;
    const additions = {
      "source-bank": [
        [4, 0.4, 0.2],
        [6, 0.4, 0.2],
      ],
      "parallel-force": [[0.02], [0.08]],
      angles: [
        [0.001, 0.0002],
        [0.001, 0.0001],
      ],
    };
    const values = (expected[task.family] || additions[task.family])?.[
      Number(task.id.split("-").at(-1)) - 1
    ];
    assert.ok(values, `Independent reference missing for ${task.id}`);
    assert.equal(numbers.length, values.length, task.id);
    numbers.forEach((step, index) =>
      assert.ok(
        Math.abs(step.answer - values[index]) <=
          Math.max(1e-10, Math.abs(values[index]) * 1e-10),
        `${task.id}: ${step.prompt}`,
      ),
    );
  }
});

test("math unit conversions distinguish power, energy, charge, area and magnetic quantities", () => {
  for (const [input, target, value] of [
    ["1000 W", "kW", 1],
    ["1000 Wh", "kWh", 1],
    ["1 kWh", "J", 3600000],
    ["2 Ah", "C", 7200],
    ["6 cm²", "m²", 0.0006],
    ["200 µF", "F", 0.0002],
    ["20 ms", "s", 0.02],
    ["2 A/cm", "A/m", 200],
    ["4 mWb", "Wb", 0.004],
  ])
    assert.ok(Math.abs(quantity(input, target).value - value) < 1e-10);
  for (const [input, target] of [
    ["1 kW", "kWh"],
    ["1 A", "V"],
    ["1 C", "F"],
    ["1 cm", "m²"],
    ["1 T", "Wb"],
    ["1 °C", "C"],
  ])
    assert.equal(quantity(input, target).valid, false);
  assert.equal(quantity("-2 V", "V").value, -2);
});

test("calculator accepts bounded arithmetic and rejects code, variables and unbounded expressions", () => {
  assert.equal(calculate("2 * (30 / 60)"), 1);
  assert.ok(Math.abs(calculate("0,8 * 0,75") - 0.6) < 1e-12);
  assert.equal(calculate("9^0.5"), 3);
  assert.equal(calculate("2 × 3"), 6);
  assert.equal(calculate("1e3"), 1000);
  assert.ok(Math.abs(calculate("10^(-6)") - 0.000001) < 1e-14);
  for (const bad of [
    "import(1)",
    "a=1",
    "a.b",
    "[1,2]",
    "1;2",
    "1/0",
    "2^999999",
    "2^(2^12)",
    "1".repeat(101),
    "sqrt(4)",
  ])
    assert.throws(() => calculate(bad));
});

test("restoration recomputes completion, preserves drafts and separates assisted practice", () => {
  const full = {
    version: 1,
    attempts: Object.fromEntries(
      workshopTasks.map((task) => [
        task.id,
        {
          ...newAttempt(),
          answers: task.steps.map((step) => String(step.answer)),
          submitted: true,
          reflection: "Energie ".repeat(250),
        },
      ]),
    ),
  };
  assert.ok(JSON.stringify(full).length > 100000);
  assert.equal(
    Object.keys(restoreWorkshop(JSON.stringify(full), workshopTasks).attempts)
      .length,
    workshopTasks.length,
  );
  const task = workshopTasks.find((task) => task.id === "energy-1");
  const attempt = {
    ...newAttempt(),
    answers: task.steps.map((step) => String(step.answer)),
    submitted: true,
    reflection: "kW beschreibt die Leistung; kWh beschreibt die Energie.",
  };
  assert.equal(taskStatus(task, attempt), "independent");
  assert.equal(taskStatus(task, { ...attempt, hints: [1] }), "assisted");
  assert.equal(taskStatus(task, { ...attempt, solution: true }), "assisted");
  const raw = JSON.stringify({
    version: 1,
    attempts: { [task.id]: attempt, "unknown-task": attempt },
  });
  const restored = restoreWorkshop(raw, workshopTasks);
  assert.equal(restored.attempts[task.id].reflection, attempt.reflection);
  assert.equal(restored.attempts["unknown-task"], undefined);
  const fake = { ...attempt, answers: ["wrong"], submitted: true };
  const sanitized = restoreWorkshop(
    JSON.stringify({ version: 1, attempts: { [task.id]: fake } }),
    workshopTasks,
  );
  assert.equal(taskStatus(task, sanitized.attempts[task.id]), "open");
  assert.throws(() => restoreWorkshop("{bad", workshopTasks));
  assert.throws(() =>
    restoreWorkshop(
      JSON.stringify({ version: 999, attempts: {} }),
      workshopTasks,
    ),
  );
});
