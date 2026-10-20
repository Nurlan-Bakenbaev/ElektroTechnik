/** SI calculations for an ideal, steady DC model. No animation or UI state. */
function finite(value, name, minimum = 0) {
  if (!Number.isFinite(value) || value < minimum) {
    throw new RangeError(`${name}: ungültiger Wert`);
  }
  return value;
}

export function dcCircuit({ voltage, resistance, closed = true }) {
  finite(voltage, "Spannung");
  finite(resistance, "Widerstand", Number.MIN_VALUE);
  if (typeof closed !== "boolean") throw new TypeError("Schalterzustand fehlt");
  const current = closed ? voltage / resistance : 0;
  const power = voltage * current;
  if (!Number.isFinite(power))
    throw new RangeError("Modellbereich überschritten");
  return {
    voltage,
    resistance,
    closed,
    current,
    power,
    loadVoltage: closed ? voltage : 0,
  };
}

export function seriesResistance(values) {
  if (!Array.isArray(values) || !values.length)
    throw new RangeError("Widerstände fehlen");
  return values.reduce(
    (sum, value) => sum + finite(value, "Widerstand", Number.MIN_VALUE),
    0,
  );
}

export function parallelResistance(values) {
  seriesResistance(values);
  return 1 / values.reduce((sum, value) => sum + 1 / value, 0);
}

export function rcVoltage({
  source,
  resistance,
  capacitance,
  time,
  charging = true,
}) {
  finite(source, "Spannung");
  finite(resistance, "Widerstand", Number.MIN_VALUE);
  finite(capacitance, "Kapazität", Number.MIN_VALUE);
  finite(time, "Zeit");
  const factor = Math.exp(-time / (resistance * capacitance));
  return source * (charging ? 1 - factor : factor);
}

export function resistanceCurve(
  voltage,
  minimum = 6,
  maximum = 48,
  count = 57,
) {
  finite(minimum, "Minimum", Number.MIN_VALUE);
  finite(maximum, "Maximum", minimum);
  if (!Number.isInteger(count) || count < 2 || count > 1000)
    throw new RangeError("Punktanzahl ungültig");
  return Array.from({ length: count }, (_, i) => {
    const resistance = minimum + ((maximum - minimum) * i) / (count - 1);
    return dcCircuit({ voltage, resistance });
  });
}
