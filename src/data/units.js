/** Names and meanings, rather than unexplained single-letter badges. */
export const unitDefinitions = {
  V: {
    name: "Volt",
    meaning:
      "Einheit der elektrischen Spannung U: Energie pro Ladung zwischen zwei Punkten.",
  },
  mV: { name: "Millivolt", meaning: "Ein Tausendstel Volt. 1000 mV sind 1 V." },
  A: {
    name: "Ampere",
    meaning: "Einheit der Stromstärke I: elektrische Ladung pro Sekunde.",
  },
  mA: {
    name: "Milliampere",
    meaning: "Ein Tausendstel Ampere. 1000 mA sind 1 A.",
  },
  C: {
    name: "Coulomb",
    meaning:
      "Einheit der Ladungsmenge Q. Hinter einer Zahl bedeutet C Coulomb, nicht Kapazität und nicht Grad Celsius.",
  },
  mC: {
    name: "Millicoulomb",
    meaning: "Ein Tausendstel Coulomb. 1000 mC sind 1 C.",
  },
  µC: {
    name: "Mikrocoulomb",
    meaning: "Ein Millionstel Coulomb; eine kleine Ladungsmenge.",
  },
  Ω: { name: "Ohm", meaning: "Einheit des elektrischen Widerstands R." },
  kΩ: {
    name: "Kiloohm",
    meaning: "1000 Ohm. Das k steht für den Faktor tausend.",
  },
  W: {
    name: "Watt",
    meaning:
      "Einheit der Leistung P: wie schnell Energie umgesetzt wird. 1 W entspricht 1 Joule pro Sekunde.",
  },
  kW: {
    name: "Kilowatt",
    meaning: "1000 Watt. Eine Leistung; noch keine verbrauchte Energiemenge.",
  },
  Wh: {
    name: "Wattstunde",
    meaning:
      "Einheit der Energie. Eine konstante Leistung von 1 W über 1 Stunde ergibt 1 Wh.",
  },
  kWh: {
    name: "Kilowattstunde",
    meaning:
      "1000 Wattstunden. Energieeinheit auf der Stromrechnung; nicht mit kW verwechseln.",
  },
  J: {
    name: "Joule",
    meaning: "Einheit der Energie oder Arbeit. 1 Wh entspricht 3600 J.",
  },
  F: {
    name: "Farad",
    meaning:
      "Einheit der Kapazität eines Kondensators. Die Größe heißt C, ihre Einheit heißt F.",
  },
  µF: {
    name: "Mikrofarad",
    meaning:
      "Ein Millionstel Farad. µ bedeutet mikro; zum Beispiel 100 µF auf einem Kondensator.",
  },
  nF: {
    name: "Nanofarad",
    meaning: "Ein Milliardstel Farad. 1000 nF sind 1 µF.",
  },
  s: { name: "Sekunde", meaning: "Einheit der Zeit t. 60 s sind 1 Minute." },
  h: {
    name: "Stunde",
    meaning: "Zeiteinheit für Verbrauchsrechnungen. 1 h sind 3600 s.",
  },
  "%": {
    name: "Prozent",
    meaning: "Anteil von hundert. 80 % entsprechen dem Faktor 0,8.",
  },
  N: {
    name: "Newton",
    meaning: "Einheit der Kraft F. Nicht mit der Windungszahl N verwechseln.",
  },
  "V/m": {
    name: "Volt pro Meter",
    meaning:
      "Einheit der elektrischen Feldstärke E. Sie ist eine andere Größe als die Spannung U.",
  },
  "N/C": {
    name: "Newton pro Coulomb",
    meaning:
      "Kraft je Ladung; gleichwertige Einheit der elektrischen Feldstärke E.",
  },
  T: {
    name: "Tesla",
    meaning: "Einheit der magnetischen Flussdichte B; nicht die Zeit t.",
  },
  mT: {
    name: "Millitesla",
    meaning: "Ein Tausendstel Tesla. 1000 mT sind 1 T.",
  },
  Wb: {
    name: "Weber",
    meaning: "Einheit des magnetischen Flusses Φ durch eine Fläche.",
  },
  µWb: {
    name: "Mikroweber",
    meaning: "Ein Millionstel Weber; eine kleine magnetische Flussmenge.",
  },
  "A/m": {
    name: "Ampere pro Meter",
    meaning:
      "Einheit der magnetischen Feldstärke H. H und B beschreiben verschiedene Größen.",
  },
  H: {
    name: "Henry",
    meaning:
      "Einheit der Induktivität L einer Spule. Hinter einer Zahl ist H eine Einheit, als Formelzeichen kann H die magnetische Feldstärke bedeuten.",
  },
  Hz: {
    name: "Hertz",
    meaning: "Einheit der Frequenz f: Schwingungen pro Sekunde.",
  },
  m: { name: "Meter", meaning: "Einheit einer Länge oder eines Abstands." },
  cm: {
    name: "Zentimeter",
    meaning: "Ein Hundertstel Meter. 100 cm sind 1 m.",
  },
  "mm²": {
    name: "Quadratmillimeter",
    meaning:
      "Einheit einer Fläche, etwa des Leiterquerschnitts. Das ist kein Durchmesser.",
  },
  "cm²": {
    name: "Quadratzentimeter",
    meaning: "Einheit einer Fläche. 10.000 cm² sind 1 m².",
  },
  "m²": {
    name: "Quadratmeter",
    meaning: "Einheit einer Fläche, etwa der vom Feld durchsetzten Fläche A.",
  },
  "°C": {
    name: "Grad Celsius",
    meaning:
      "Einheit der Temperatur. Das Gradzeichen unterscheidet °C von Coulomb (C).",
  },
};

export const quantities = {
  charge: {
    symbol: "Q",
    name: "Ladungsmenge",
    unit: "C",
    simple:
      "Wie viel elektrische Ladung insgesamt vorbeikommt. C hinter einer Zahl heißt Coulomb.",
  },
  current: {
    symbol: "I",
    name: "Stromstärke",
    unit: "A",
    simple: "Wie viel Ladung pro Sekunde fließt. 0,5 A sind 500 mA.",
  },
  voltage: {
    symbol: "U",
    name: "Spannung",
    unit: "V",
    simple:
      "Der elektrische Antrieb zwischen zwei Punkten. Eine Geräteangabe wie 12 V muss zur Versorgung passen.",
  },
  resistance: {
    symbol: "R",
    name: "Widerstand",
    unit: "Ω",
    simple: "Wie stark ein Bauteil den Strom bei gegebener Spannung begrenzt.",
  },
  power: {
    symbol: "P",
    name: "Leistung",
    unit: "W",
    simple: "Wie schnell Energie umgesetzt wird. 1 kW sind 1000 W.",
  },
  energy: {
    symbol: "E oder W",
    name: "Energie / Arbeit",
    unit: "J",
    simple:
      "Die insgesamt umgesetzte Energiemenge. Für Stromkosten benutzt man meist Wh oder kWh. W als Größenzeichen kann Arbeit bedeuten; W hinter einer Zahl heißt dagegen Watt, die Leistungseinheit.",
  },
  kilowattHour: {
    symbol: "E",
    name: "Energie im IT-Betrieb",
    unit: "kWh",
    simple:
      "Leistung in kW mal Betriebszeit in h. kW und kWh beantworten verschiedene Fragen.",
  },
  time: {
    symbol: "t",
    name: "Zeit",
    unit: "s",
    simple:
      "Wie lange etwas dauert. Für Energieabrechnungen wird die Zeit oft in Stunden angegeben.",
  },
  efficiency: {
    symbol: "η",
    name: "Wirkungsgrad",
    unit: "%",
    simple:
      "η heißt Eta. Es beschreibt, welcher Anteil der aufgenommenen Energie dem gewünschten Zweck dient.",
  },
  field: {
    symbol: "E",
    name: "Elektrische Feldstärke",
    unit: "V/m",
    simple:
      "Wie stark das elektrische Feld an einem Ort auf Ladungen wirkt. In diesem Thema meint E das Feld, nicht Energie.",
  },
  capacitance: {
    symbol: "C",
    name: "Kapazität",
    unit: "F",
    simple:
      "Wie viel Ladung der Kondensator pro Volt aufnehmen kann. C ist hier die Größe; gemessen wird sie in Farad (F), nicht in Coulomb.",
  },
  fluxDensity: {
    symbol: "B",
    name: "Magnetische Flussdichte",
    unit: "T",
    simple: "Beschreibt das Magnetfeld am betrachteten Ort; Einheit Tesla.",
  },
  flux: {
    symbol: "Φ",
    name: "Magnetischer Fluss",
    unit: "Wb",
    simple:
      "Φ heißt Phi. Es berücksichtigt, wie das Feld durch eine Fläche verläuft.",
  },
  magneticField: {
    symbol: "H",
    name: "Magnetische Feldstärke",
    unit: "A/m",
    simple:
      "Beschreibt eine andere Feldgröße als B; im Spulenmodell hängt sie von Strom und Windungszahl ab.",
  },
  inductance: {
    symbol: "L",
    name: "Induktivität",
    unit: "H",
    simple: "Beschreibt die Selbstinduktion einer Spule; Einheit Henry.",
  },
};

const escapedUnits = Object.keys(unitDefinitions)
  .sort((a, b) => b.length - a.length)
  .map((unit) => unit.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
  .join("|");
const numericUnits = new RegExp(
  `([+-]?\\d+(?:[.,]\\d+)?\\s*)(${escapedUnits})(?=$|[\\s.,;:!?)\\]·×/−–])`,
  "gu",
);

export function splitUnitText(value) {
  const text = String(value);
  const result = [];
  let end = 0;
  for (const match of text.matchAll(numericUnits)) {
    if (match.index > end) result.push({ text: text.slice(end, match.index) });
    result.push({ text: match[1], unit: match[2] });
    end = match.index + match[0].length;
  }
  if (end < text.length) result.push({ text: text.slice(end) });
  return result;
}
