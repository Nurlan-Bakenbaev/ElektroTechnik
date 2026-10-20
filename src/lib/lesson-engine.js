import { dcCircuit } from "./physics.js";
import { gradeAnswer } from "./answers.js";
import { ohmLesson, ohmQuestion } from "../data/ohm-lesson.js";

export const SESSION_KEY = "volt-academy:lesson:ohm:v2";
export function createLessonSession() {
  return {
    version: 2,
    step: 0,
    completed: [],
    actions: [],
    experiment: { voltage: 12, resistance: 12, closed: true },
    observations: [],
    attempts: {},
    hints: [],
    reflection: "",
  };
}
export function stepSatisfied(state, step = state.step) {
  const passed = (id) =>
    (state.attempts[id] || []).some((attempt) =>
      gradeAnswer(ohmQuestion(id), attempt.value),
    );
  switch (ohmLesson.steps[step]?.id) {
    case "prior":
      return passed("prior");
    case "observe":
      return (
        state.experiment.closed &&
        state.actions.includes("opened") &&
        state.actions.includes("closed")
      );
    case "predict":
      return !!state.attempts.prediction?.length;
    case "experiment":
      return (
        new Set(
          state.observations
            .filter((r) => r.voltage === 12 && r.closed)
            .map((r) => r.resistance),
        ).size >= 3
      );
    case "guided":
      return ["guided-target", "guided-method", "guided-result"].every(passed);
    case "practice":
      return [
        "practice-current",
        "practice-voltage",
        "practice-resistance",
      ].every(passed);
    case "check":
      return ["meter", "symbols", "limits", "interpret", "error"].every(passed);
    case "reflect":
      return state.reflection.trim().length >= 20;
    default:
      return true;
  }
}
function validExperiment(v) {
  return (
    v &&
    Number.isFinite(v.voltage) &&
    v.voltage >= 0 &&
    v.voltage <= 24 &&
    Number.isFinite(v.resistance) &&
    v.resistance >= 6 &&
    v.resistance <= 48 &&
    typeof v.closed === "boolean"
  );
}
function validValue(q, value) {
  if (q.type === "numeric")
    return typeof value === "string" && value.length <= 100;
  if (q.type === "choice")
    return Number.isInteger(value) && value >= 0 && value < q.options.length;
  return (
    Array.isArray(value) &&
    value.length <= q.options.length &&
    value.every((v) => Number.isInteger(v) && v >= 0 && v < q.options.length)
  );
}
export function normalizeLessonSession(saved) {
  if (
    !saved ||
    saved.version !== 2 ||
    !Number.isInteger(saved.step) ||
    saved.step < 0 ||
    saved.step >= ohmLesson.steps.length ||
    !validExperiment(saved.experiment) ||
    !Array.isArray(saved.completed) ||
    !Array.isArray(saved.observations) ||
    saved.observations.length > 24 ||
    !saved.attempts ||
    typeof saved.attempts !== "object" ||
    !Array.isArray(saved.hints) ||
    typeof saved.reflection !== "string" ||
    saved.reflection.length > 2000
  )
    throw new Error("Gespeicherte Lernsitzung ist ungültig.");
  const state = createLessonSession();
  state.step = saved.step;
  state.actions = Array.isArray(saved.actions)
    ? [
        ...new Set(
          saved.actions.filter((action) =>
            ["opened", "closed"].includes(action),
          ),
        ),
      ]
    : [];
  state.experiment = {
    voltage: saved.experiment.voltage,
    resistance: saved.experiment.resistance,
    closed: saved.experiment.closed,
  };
  state.observations = saved.observations.map((row) => {
    if (!validExperiment(row)) throw new Error("Messreihe ist ungültig.");
    return dcCircuit(row); // Recalculate; stored measurements are never trusted as physics.
  });
  for (const q of ohmLesson.questions) {
    const attempts = saved.attempts[q.id];
    if (attempts !== undefined) {
      if (
        !Array.isArray(attempts) ||
        attempts.length > 20 ||
        attempts.some((a) => !a || !validValue(q, a.value))
      )
        throw new Error("Aufgabenversuche sind ungültig.");
      state.attempts[q.id] = attempts.map((a) => ({ value: a.value }));
    }
  }
  state.hints = [...new Set(saved.hints.filter((id) => !!ohmQuestion(id)))];
  state.reflection = saved.reflection;
  // Only rebuild a contiguous completed sequence from satisfied requirements.
  for (let i = 0; i < ohmLesson.steps.length; i++) {
    if (!saved.completed.includes(i) || !stepSatisfied(state, i)) break;
    state.completed.push(i);
  }
  state.step = Math.min(
    state.step,
    state.completed.length,
    ohmLesson.steps.length - 1,
  );
  return state;
}

export function lessonReducer(state, action) {
  switch (action.type) {
    case "hydrate":
      return normalizeLessonSession(action.state);
    case "experiment": {
      const experiment = { ...state.experiment, ...action.patch };
      return validExperiment(experiment)
        ? {
            ...state,
            experiment,
            actions:
              typeof action.patch.closed === "boolean"
                ? [
                    ...new Set([
                      ...state.actions,
                      action.patch.closed ? "closed" : "opened",
                    ]),
                  ]
                : state.actions,
          }
        : state;
    }
    case "measure": {
      const measurement = dcCircuit(state.experiment);
      const duplicate = state.observations.some(
        (row) =>
          row.voltage === measurement.voltage &&
          row.resistance === measurement.resistance &&
          row.closed === measurement.closed,
      );
      return duplicate || state.observations.length >= 24
        ? state
        : { ...state, observations: [...state.observations, measurement] };
    }
    case "clear-measurements":
      return { ...state, observations: [] };
    case "attempt": {
      const q = ohmQuestion(action.id);
      if (!q || !validValue(q, action.value)) return state;
      return {
        ...state,
        attempts: {
          ...state.attempts,
          [q.id]: [
            ...(state.attempts[q.id] || []),
            { value: action.value },
          ].slice(-20),
        },
      };
    }
    case "hint":
      return ohmQuestion(action.id)
        ? { ...state, hints: [...new Set([...state.hints, action.id])] }
        : state;
    case "reflection":
      return { ...state, reflection: String(action.value).slice(0, 2000) };
    case "next": {
      if (!stepSatisfied(state)) return state;
      const completed = [...new Set([...state.completed, state.step])];
      return {
        ...state,
        completed,
        step: Math.min(state.step + 1, ohmLesson.steps.length - 1),
      };
    }
    case "visit":
      return Number.isInteger(action.step) &&
        action.step >= 0 &&
        action.step <=
          Math.min(state.completed.length, ohmLesson.steps.length - 1)
        ? { ...state, step: action.step }
        : state;
    case "reset-experiment":
      return { ...state, experiment: createLessonSession().experiment };
    default:
      return state;
  }
}
