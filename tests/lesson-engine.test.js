import test from "node:test";
import assert from "node:assert/strict";
import { ohmLesson, validateLesson } from "../src/data/ohm-lesson.js";
import {
  createLessonSession,
  lessonReducer,
  normalizeLessonSession,
  stepSatisfied,
} from "../src/lib/lesson-engine.js";
import { formulaAssets, formulaImages } from "../src/data/formula-images.js";
import { readdir, readFile } from "node:fs/promises";

test("reference content has validated mandatory blocks and a distinct question bank", () => {
  assert.equal(validateLesson(ohmLesson), true);
  assert.ok(ohmLesson.questions.length >= 10);
  assert.throws(() => validateLesson({ ...ohmLesson, prerequisites: [] }));
  assert.throws(() =>
    validateLesson({
      ...ohmLesson,
      steps: [...ohmLesson.steps, ohmLesson.steps[0]],
    }),
  );
});
test("progress cannot bypass checks and measuring requires three distinct closed DC points", () => {
  let state = lessonReducer(createLessonSession(), { type: "next" });
  assert.equal(state.step, 1);
  assert.equal(lessonReducer(state, { type: "visit", step: 11 }).step, 1);
  assert.equal(lessonReducer(state, { type: "next" }).step, 1);
  state = lessonReducer(state, { type: "attempt", id: "prior", value: 1 });
  state = lessonReducer(state, { type: "next" });
  assert.equal(state.step, 2);
  assert.equal(stepSatisfied(state), false);
  state = lessonReducer(state, {
    type: "experiment",
    patch: { closed: false },
  });
  state = lessonReducer(state, { type: "experiment", patch: { closed: true } });
  assert.equal(stepSatisfied(state), true);
  for (const resistance of [6, 12, 24]) {
    state = lessonReducer(state, { type: "experiment", patch: { resistance } });
    state = lessonReducer(state, { type: "measure" });
  }
  assert.equal(stepSatisfied(state, 4), true);
  state = lessonReducer(state, { type: "measure" });
  assert.equal(state.observations.length, 3);
  assert.deepEqual(
    state.observations.map((r) => r.current),
    [2, 1, 0.5],
  );
});
test("session round-trips state and recalculates untrusted stored readings", () => {
  let state = lessonReducer(createLessonSession(), { type: "next" });
  state = lessonReducer(state, { type: "hint", id: "prior" });
  state = lessonReducer(state, { type: "measure" });
  state = lessonReducer(state, {
    type: "reflection",
    value: "Größerer Widerstand begrenzt den Strom.",
  });
  const saved = JSON.parse(JSON.stringify(state));
  assert.deepEqual(normalizeLessonSession(saved), state);
  saved.observations[0].current = 999;
  assert.equal(normalizeLessonSession(saved).observations[0].current, 1);
  assert.throws(() =>
    normalizeLessonSession({
      ...saved,
      experiment: { ...saved.experiment, resistance: 0 },
    }),
  );
  assert.throws(() => normalizeLessonSession({ ...saved, version: 999 }));
  assert.throws(() =>
    normalizeLessonSession({
      ...saved,
      attempts: { prior: [{ value: "wrong shape" }] },
    }),
  );
});
test("power reference contains power relations, never self-induction", () => {
  const assets = formulaImages["P = U · I; P = I² · R; P = U² / R"].images.map(
    (id) => formulaAssets[id],
  );
  assert.ok(assets.every((asset) => !asset.alt.includes("dI")));
  assert.ok(assets.some((asset) => asset.article === "Elektrische Leistung"));
});

test("source text is valid UTF-8 and contains no known mojibake or replacement characters", async () => {
  const root = new URL("../src/", import.meta.url);
  const files = await readdir(root, { recursive: true });
  for (const file of files.filter((file) => /\.(js|css)$/.test(file))) {
    const content = new TextDecoder("utf-8", { fatal: true }).decode(
      await readFile(new URL(file, root)),
    );
    assert.doesNotMatch(content, /\uFFFD|Ã[¤¶¼„–œŸ]|Â[°µ·]|â€[™“”]/u, file);
  }
});
