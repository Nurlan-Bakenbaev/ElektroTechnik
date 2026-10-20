// Case-sensitive SI prefixes: m (milli) and M (mega) are deliberately distinct.
const units = {
  A: ["current", 1],
  mA: ["current", 1e-3],
  µA: ["current", 1e-6],
  μA: ["current", 1e-6],
  V: ["voltage", 1],
  mV: ["voltage", 1e-3],
  kV: ["voltage", 1e3],
  Ω: ["resistance", 1],
  Ohm: ["resistance", 1],
  kΩ: ["resistance", 1e3],
  MΩ: ["resistance", 1e6],
  W: ["power", 1],
  mW: ["power", 1e-3],
  kW: ["power", 1e3],
  C: ["charge", 1],
  µC: ["charge", 1e-6],
  mC: ["charge", 1e-3],
  J: ["energy", 1],
  Wh: ["energy", 3600],
  kWh: ["energy", 3.6e6],
  s: ["time", 1],
  ms: ["time", 1e-3],
  min: ["time", 60],
  h: ["time", 3600],
  F: ["capacitance", 1],
  µF: ["capacitance", 1e-6],
  nF: ["capacitance", 1e-9],
  T: ["flux-density", 1],
  mT: ["flux-density", 1e-3],
  Wb: ["flux", 1],
  µWb: ["flux", 1e-6],
  "%": ["percent", 1],
};

/** Parse a German decimal, optionally with a compatible unit; return in targetUnit. */
export function parseQuantity(input, targetUnit = "") {
  if (typeof input !== "string" || input.length > 100)
    return { valid: false, error: "Bitte eine Zahl eingeben." };
  const match = input
    .trim()
    .match(/^([+-]?(?:\d+(?:[.,]\d+)?|[.,]\d+)(?:e[+-]?\d+)?)\s*([^\s\d]*)$/i);
  if (!match)
    return {
      valid: false,
      error:
        "Nutze zum Beispiel 0,5 A oder 500 mA; keine Tausendertrennzeichen.",
    };
  const number = Number(match[1].replace(",", "."));
  if (!Number.isFinite(number))
    return { valid: false, error: "Die Zahl muss endlich sein." };
  const enteredUnit = match[2] || targetUnit;
  if (enteredUnit === targetUnit) return { valid: true, value: number };
  const entered = units[enteredUnit];
  const target = units[targetUnit];
  if (!entered || !target || entered[0] !== target[0])
    return {
      valid: false,
      error: `Die Einheit passt nicht. Gesucht ist ${targetUnit || "eine Zahl ohne Einheit"}.`,
    };
  return { valid: true, value: (number * entered[1]) / target[1] };
}

export function gradeAnswer(question, value) {
  if (question.type === "choice") return value === question.answer;
  if (question.type === "multiple")
    return (
      Array.isArray(value) &&
      value.length === question.answer.length &&
      new Set(value).size === value.length &&
      question.answer.every((answer) => value.includes(answer))
    );
  if (question.type === "matching")
    return (
      Array.isArray(value) &&
      value.length === question.answer.length &&
      question.answer.every((answer, i) => value[i] === answer)
    );
  const parsed = parseQuantity(String(value ?? ""), question.unit);
  return (
    parsed.valid &&
    Math.abs(parsed.value - question.answer) <= (question.tolerance ?? 0.001)
  );
}

export function numericFeedback(question, value) {
  const parsed = parseQuantity(String(value ?? ""), question.unit);
  if (!parsed.valid) return parsed.error;
  if (gradeAnswer(question, value)) return question.success;
  if (
    Math.abs(parsed.value - question.answer * 1000) < 0.01 ||
    Math.abs(parsed.value * 1000 - question.answer) < 0.01
  )
    return "Prüfe den Vorsatz: 1 A entspricht 1000 mA und 1 kΩ entspricht 1000 Ω.";
  if (parsed.value < 0)
    return "In dieser Aufgabe sind die Bezugspfeile so gewählt, dass der gesuchte Betrag positiv ist.";
  return question.hint;
}
