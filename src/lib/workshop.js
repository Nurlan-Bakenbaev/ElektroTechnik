import { evaluate, parse, unit } from "mathjs";
import { z } from "zod";

export const WORKSHOP_KEY = "volt-workshop:v1";
export const WORKSHOP_LIMIT = 1048576;
const unitNames = Object.freeze({
  A: "A",
  mA: "mA",
  kA: "kA",
  µA: "uA",
  V: "V",
  mV: "mV",
  µV: "uV",
  kV: "kV",
  MV: "MV",
  Ω: "ohm",
  Ohm: "ohm",
  kΩ: "kohm",
  mΩ: "mohm",
  MΩ: "Mohm",
  W: "W",
  kW: "kW",
  mW: "mW",
  µW: "uW",
  MW: "MW",
  J: "J",
  Wh: "Wh",
  kWh: "kWh",
  Ws: "W s",
  MWh: "MWh",
  GWh: "GWh",
  s: "s",
  ms: "ms",
  µs: "us",
  min: "min",
  h: "h",
  m: "m",
  mm: "mm",
  cm: "cm",
  km: "km",
  "mm²": "mm^2",
  "cm²": "cm^2",
  "m²": "m^2",
  C: "coulomb",
  mC: "millicoulomb",
  µC: "microcoulomb",
  Ah: "A h",
  mAh: "mA h",
  F: "F",
  mF: "mF",
  µF: "uF",
  nF: "nF",
  pF: "pF",
  T: "T",
  mT: "mT",
  µT: "uT",
  Wb: "Wb",
  mWb: "mWb",
  µWb: "uWb",
  N: "N",
  "A/m": "A/m",
  "A/cm": "A/cm",
  "V/m": "V/m",
  "N/m": "N/m",
  "%": null,
  "€": null,
  "": null,
});

// Arithmetic only: no variables, assignments, property access or user functions.
export function calculate(input) {
  if (
    typeof input !== "string" ||
    input.length > 100 ||
    !/^[\deE\s.,+*/^()×÷−-]+$/u.test(input)
  )
    throw new Error(
      "Nur Zahlen und + − × / ^ sowie Klammern eingeben. Dezimalkomma ist erlaubt.",
    );
  const expression = input
    .replaceAll(",", ".")
    .replaceAll("−", "-")
    .replaceAll("×", "*")
    .replaceAll("÷", "/");
  const tree = parse(expression);
  let nodes = 0;
  tree.traverse((node) => {
    if (
      ++nodes > 50 ||
      !["OperatorNode", "ConstantNode", "ParenthesisNode"].includes(node.type)
    )
      throw new Error("Dieser Ausdruck ist zu komplex.");
    if (
      node.type === "OperatorNode" &&
      !["+", "-", "*", "/", "^"].includes(node.op)
    )
      throw new Error("Diese Rechenart wird nicht unterstützt.");
    if (node.type === "OperatorNode" && node.op === "^") {
      let exponent = node.args[1];
      while (exponent.type === "ParenthesisNode") exponent = exponent.content;
      let sign = 1;
      if (
        exponent.type === "OperatorNode" &&
        exponent.op === "-" &&
        exponent.args.length === 1
      ) {
        sign = -1;
        exponent = exponent.args[0];
      }
      if (
        exponent.type !== "ConstantNode" ||
        Math.abs(sign * Number(exponent.value)) > 12
      )
        throw new Error("Nutze eine einfache Potenz zwischen −12 und 12.");
    }
  });
  const result = tree.evaluate();
  if (typeof result !== "number" || !Number.isFinite(result))
    throw new Error("Das Ergebnis muss eine endliche reelle Zahl sein.");
  return result;
}

export function quantity(input, targetUnit) {
  if (typeof input !== "string" || input.length > 100)
    return {
      valid: false,
      error: "Bitte eine Zahl mit passender Einheit eingeben.",
    };
  const match = input
    .trim()
    .match(/^([+−-]?(?:\d+(?:[.,]\d+)?|[.,]\d+)(?:e[+-]?\d+)?)\s*(.*?)$/iu);
  if (!match)
    return {
      valid: false,
      error:
        "Zum Beispiel 0,5 A oder 500 mA. Keine Tausendertrennzeichen verwenden.",
    };
  const value = Number(match[1].replace(",", ".").replace("−", "-"));
  const entered = (match[2] || targetUnit).replaceAll("μ", "µ");
  if (
    !Number.isFinite(value) ||
    !Object.hasOwn(unitNames, entered) ||
    !Object.hasOwn(unitNames, targetUnit)
  )
    return {
      valid: false,
      error:
        "Zahl oder Einheit wird nicht unterstützt. Nutze die angegebene Zieleinheit.",
    };
  if (entered === targetUnit) return { valid: true, value };
  if (!unitNames[entered] || !unitNames[targetUnit])
    return {
      valid: false,
      error: `Gesucht ist eine Zahl in ${targetUnit || "ohne Einheit"}.`,
    };
  try {
    return {
      valid: true,
      value: unit(value, unitNames[entered]).toNumber(unitNames[targetUnit]),
    };
  } catch {
    return {
      valid: false,
      error: `Die Dimension passt nicht: Gesucht ist ${targetUnit}.`,
    };
  }
}

const choiceSchema = z
  .object({
    type: z.literal("choice"),
    prompt: z.string().min(8),
    options: z.array(z.string()).min(2).max(5),
    answer: z.number().int().nonnegative(),
    hint: z.string().min(8),
    explanation: z.string().min(12),
  })
  .refine((step) => step.answer < step.options.length);
const numberSchema = z.object({
  type: z.literal("numeric"),
  prompt: z.string().min(8),
  answer: z.number().finite(),
  unit: z.string().refine((value) => Object.hasOwn(unitNames, value)),
  tolerance: z.number().positive(),
  hint: z.string().min(8),
  explanation: z.string().min(12),
});
const taskSchema = z.object({
  id: z.string().regex(/^[a-z0-9-]+$/),
  family: z.string(),
  title: z.string(),
  lessonId: z.string(),
  sheet: z.string(),
  text: z.string().min(25),
  teaching: z.array(z.string().min(20)).min(2),
  quantities: z.array(z.string()).min(1),
  formulas: z.array(z.number().int().min(0).max(19)),
  steps: z.array(z.union([choiceSchema, numberSchema])).min(3),
  reflection: z.string().min(15),
  visual: z.string().optional(),
});
export function validateTasks(tasks) {
  const parsed = z.array(taskSchema).parse(tasks);
  if (new Set(parsed.map((task) => task.id)).size !== parsed.length)
    throw new Error("Doppelte Aufgaben-ID");
  return parsed;
}

// Only authored expressions reach evaluate; learner input uses the restricted parser above.
export function authoredResult(expression, scope) {
  const result = evaluate(expression, scope);
  if (typeof result !== "number" || !Number.isFinite(result))
    throw new Error("Ungültiges Aufgabenergebnis");
  return result;
}
export function gradeStep(step, answer) {
  if (step.type === "choice") return answer === String(step.answer);
  const parsed = quantity(answer, step.unit);
  return parsed.valid && Math.abs(parsed.value - step.answer) <= step.tolerance;
}

const attemptSchema = z.object({
  draft: z.string().max(100).default(""),
  reflection: z.string().max(2000).default(""),
  answers: z.array(z.string().max(100)).max(16),
  hints: z.array(z.number().int().min(0).max(15)).max(16),
  solution: z.boolean(),
  submitted: z.boolean(),
});
const saveSchema = z.object({
  version: z.literal(1),
  attempts: z
    .record(z.string().max(60), attemptSchema)
    .refine((attempts) => Object.keys(attempts).length <= 100),
});
export function emptyWorkshop() {
  return { version: 1, attempts: {} };
}
export function newAttempt() {
  return {
    answers: [],
    hints: [],
    solution: false,
    submitted: false,
    draft: "",
    reflection: "",
  };
}
export function restoreWorkshop(raw, tasks) {
  if (!raw) return emptyWorkshop();
  if (raw.length > WORKSHOP_LIMIT)
    throw new Error("Zu große gespeicherte Sitzung");
  const parsed = saveSchema.parse(JSON.parse(raw));
  const attempts = {};
  for (const task of tasks) {
    const attempt = parsed.attempts[task.id];
    if (!attempt) continue;
    const answers = [];
    for (const [index, answer] of attempt.answers.entries()) {
      if (!task.steps[index] || !gradeStep(task.steps[index], answer)) break;
      answers.push(answer);
    }
    attempts[task.id] = {
      draft: attempt.draft,
      reflection: attempt.reflection,
      answers,
      hints: [
        ...new Set(attempt.hints.filter((index) => index < task.steps.length)),
      ],
      solution: attempt.solution,
      submitted: attempt.submitted && answers.length === task.steps.length,
    };
  }
  return { version: 1, attempts };
}
export function taskStatus(task, attempt) {
  if (
    !attempt?.submitted ||
    attempt.answers.length !== task.steps.length ||
    !task.steps.every((step, index) => gradeStep(step, attempt.answers[index]))
  )
    return "open";
  return attempt.solution || attempt.hints.length ? "assisted" : "independent";
}
