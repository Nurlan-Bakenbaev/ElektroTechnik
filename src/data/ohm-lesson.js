/** @typedef {{id:string, type:string, title:string, text:string}} LessonStep */

const choice = (id, prompt, options, answer, hint, success) => ({
  id,
  type: "choice",
  prompt,
  options,
  answer,
  hint,
  success,
});
const numeric = (id, prompt, answer, unit, hint, success) => ({
  id,
  type: "numeric",
  prompt,
  answer,
  unit,
  tolerance: 0.001,
  hint,
  success,
});

export const ohmLesson = {
  id: "ohm",
  version: 2,
  title: "Strom verstehen. Mit einem Dreh.",
  subtitle: "Das Ohmsche Gesetz · Labor 05",
  difficulty: "Grundlagen",
  prerequisites: [
    "Spannung in Volt",
    "Stromstärke in Ampere",
    "Widerstand in Ohm",
  ],
  objectives: [
    "Die Stromänderung bei konstantem U vorhersagen und mit Messwerten begründen.",
    "U, I und R am selben Bauteil zuordnen und eine fehlende Größe berechnen.",
    "Milliampere richtig umrechnen und Grenzen des ohmschen Modells erkennen.",
  ],
  assumptions:
    "Virtuelle Gleichstromschaltung: ideale Quelle, ideale Leitungen, lineares R bei konstanter Temperatur. Keine Strombegrenzung und keine Erwärmung im Modell.",
  sources: [
    {
      label: "LEIFIphysik · Ohmsches Gesetz",
      url: "https://www.leifiphysik.de/elektrizitaetslehre/ohmsches-gesetz-kennlinien/grundwissen/ohmsches-gesetz",
    },
    {
      label: "Wikipedia · Ohmsches Gesetz und Formelbild",
      url: "https://de.wikipedia.org/wiki/Ohmsches_Gesetz",
    },
    {
      label: "OpenStax · Ohm’s Law",
      url: "https://openstax.org/books/university-physics-volume-2/pages/9-4-ohms-law",
    },
  ],
  steps: [
    {
      id: "intro",
      type: "intro",
      title: "Die technische Frage",
      text: "Du versorgst einen Widerstand mit 12 V. Was zeigt das Amperemeter, wenn du den Widerstand verdoppelst? Finde es selbst heraus.",
    },
    {
      id: "prior",
      type: "knowledge-check",
      title: "Was weißt du schon?",
      text: "Spannung und Strom sind verschiedene Größen. Prüfe die Grundlagen, bevor du misst.",
    },
    {
      id: "observe",
      type: "measurement-task",
      title: "Den Stromkreis lesen",
      text: "Schließe und öffne den Schalter. Das Amperemeter liegt im Strompfad; das Voltmeter misst parallel zum Widerstand. Lies die Anzeigen ab.",
    },
    {
      id: "predict",
      type: "prediction",
      title: "Erst vermuten",
      text: "Die Quelle bleibt bei 12 V. Du erhöhst den Widerstand von 12 Ω auf 24 Ω. Sage die Stromänderung voraus, bevor du misst.",
    },
    {
      id: "experiment",
      type: "interactive-experiment",
      title: "Messen statt raten",
      text: "Halte U bei 12 V. Stelle mindestens drei verschiedene Widerstände ein und übernimm die Messwerte. Vergleiche Tabelle und Kurve.",
    },
    {
      id: "explain",
      type: "concept-explanation",
      title: "Die Beobachtung erklären",
      text: "Die Quelle stellt Energie pro Ladung bereit. Ein größerer Widerstand lässt bei gleichem Antrieb weniger Ladung pro Sekunde passieren. Die Ladung wird dabei nicht verbraucht: Im geschlossenen Kreis fließt überall derselbe Strom.",
    },
    {
      id: "formula",
      type: "formula-explorer",
      title: "Das Modell verstehen",
      text: "Wähle U, I oder R, um Größe und Einheit zuzuordnen. Die drei Umstellungen im Quellbild beschreiben denselben Zusammenhang.",
    },
    {
      id: "guided",
      type: "guided-calculation",
      title: "Gemeinsam berechnen",
      text: "Ein Widerstand von 8 Ω liegt an 24 V. Berechne den Strom. Bearbeite zuerst die gesuchte Größe, dann den Rechenweg und schließlich das Ergebnis.",
    },
    {
      id: "practice",
      type: "practice",
      title: "Jetzt rechnest du",
      text: "Löse neue Aufgaben selbstständig. Nutze Einheiten und eine Plausibilitätsprüfung. Nach einem Fehler bekommst du eine gezielte Hilfe und kannst es erneut versuchen.",
    },
    {
      id: "check",
      type: "knowledge-check",
      title: "Verständnis überprüfen",
      text: "Prüfe Messgeräte, Einheiten und Modellgrenzen. Es zählt, ob du den Zusammenhang auf eine neue Situation übertragen kannst.",
    },
    {
      id: "reflect",
      type: "summary",
      title: "In eigenen Worten",
      text: "Erkläre, warum der Strom kleiner wird, wenn bei gleicher Spannung der Widerstand steigt. Deine Notiz bleibt auf diesem Gerät gespeichert.",
    },
    {
      id: "transfer",
      type: "real-world-application",
      title: "Vom Labor zur Anwendung",
      text: "Ein Sensor benötigt einen begrenzten Strom. Du kannst einen Vorwiderstand berechnen und anschließend seine Verlustleistung prüfen. Reale LEDs und Glühlampen sind selbst keine konstanten ohmschen Widerstände.",
    },
  ],
  questions: [
    choice(
      "prior",
      "Was beschreibt die elektrische Stromstärke?",
      ["Energie pro Ladung", "Ladung pro Zeit", "Elektrischen Widerstand"],
      1,
      "Denke an den Leiterquerschnitt: Welche Größe erfasst die Ladungsmenge je Sekunde?",
      "Richtig: Ampere entspricht Coulomb pro Sekunde. Spannung ist dagegen Energie pro Ladung.",
    ),
    choice(
      "prediction",
      "Bei gleichem U verdoppelt sich R. Was passiert mit I?",
      ["I verdoppelt sich.", "I bleibt gleich.", "I halbiert sich."],
      2,
      "Der Antrieb bleibt gleich. Ein größerer Widerstand hemmt den Strom stärker. Vergleiche danach die Messungen.",
      "Deine Vorhersage passt: Aus 1 A bei 12 Ω werden 0,5 A bei 24 Ω.",
    ),
    choice(
      "guided-target",
      "Welche Größe ist gesucht? U = 24 V und R = 8 Ω sind gegeben.",
      ["Spannung U", "Stromstärke I", "Widerstand R"],
      1,
      "Die Aufgabenstellung fragt nach dem Strom; dessen Formelzeichen ist I.",
      "Gesucht ist I in Ampere. U und R sind bereits bekannt.",
    ),
    choice(
      "guided-method",
      "Welcher Rechenweg liefert die Stromstärke?",
      [
        "Spannung durch Widerstand teilen",
        "Spannung mit Widerstand multiplizieren",
        "Widerstand durch Spannung teilen",
      ],
      0,
      "Ordne im Formelbild die Umstellung nach I zu. Volt durch Ohm ergibt Ampere.",
      "Du teilst die Spannung durch den Widerstand. Jetzt kannst du die gegebenen Zahlen einsetzen.",
    ),
    numeric(
      "guided-result",
      "Berechne den Strom bei 24 V und 8 Ω.",
      3,
      "A",
      "Teile 24 durch 8. Die Einheit V/Ω entspricht A.",
      "24 geteilt durch 8 ergibt 3 A. Probe: 3 A an 8 Ω ergeben wieder 24 V.",
    ),
    numeric(
      "practice-current",
      "An 24 Ω liegen 12 V. Wie groß ist der Strom?",
      0.5,
      "A",
      "Gesucht ist I: Spannung durch Widerstand. 12 ist kleiner als 24, also muss der Zahlenwert kleiner als 1 A sein.",
      "0,5 A und 500 mA sind gleichwertig. Gegenüber 12 Ω hat sich der Strom halbiert.",
    ),
    numeric(
      "practice-voltage",
      "Durch 20 Ω fließen 0,3 A. Welche Spannung liegt an?",
      6,
      "V",
      "Gesucht ist U. Multipliziere Stromstärke und Widerstand.",
      "Es liegen 6 V an. Ampere mal Ohm ergibt Volt.",
    ),
    numeric(
      "practice-resistance",
      "Ein Bauteil führt bei 10 V einen Strom von 50 mA. Bestimme R.",
      200,
      "Ω",
      "Rechne zuerst 50 mA in Ampere um. Teile dann 10 V durch diesen Strom.",
      "50 mA sind 0,05 A. 10 V geteilt durch 0,05 A ergibt 200 Ω.",
    ),
    choice(
      "meter",
      "Wie wird das Amperemeter angeschlossen?",
      [
        "Parallel zum Widerstand",
        "In Reihe mit dem Widerstand",
        "Direkt an beide Pole der Quelle",
      ],
      1,
      "Es soll derselbe Strom durch Messgerät und Widerstand fließen. Ein Amperemeter direkt an einer Quelle kann einen Kurzschluss verursachen.",
      "In Reihe. Ein Amperemeter hat einen sehr kleinen Innenwiderstand; es gehört in den Strompfad.",
    ),
    {
      id: "symbols",
      type: "matching",
      prompt: "Ordne den Größen ihre Einheiten zu.",
      labels: ["Spannung U", "Stromstärke I", "Widerstand R"],
      options: ["Ampere (A)", "Volt (V)", "Ohm (Ω)"],
      answer: [1, 0, 2],
      hint: "Spannung gehört zu Volt; Stromstärke zu Ampere. Für den Widerstand bleibt Ohm.",
      success:
        "U in Volt, I in Ampere und R in Ohm. So lassen sich die Einheiten im Rechenweg prüfen.",
    },
    {
      id: "limits",
      type: "multiple",
      prompt:
        "Welche Aussagen gehören zu unserem Modell? Wähle alle passenden aus.",
      options: [
        "R bleibt bei konstanter Temperatur gleich.",
        "Die Leitungen haben hier keinen Widerstand.",
        "Jede Diode ist immer ein ohmscher Widerstand.",
      ],
      answer: [0, 1],
      hint: "Das Modell idealisiert Quelle und Leitungen. Eine Diode hat eine nichtlineare Kennlinie.",
      success:
        "R bleibt konstant und die Leitungen sind ideal. Auf eine Diode lässt sich dieses Modell nicht unverändert übertragen.",
    },
    choice(
      "interpret",
      "Messung: 2 V → 0,1 A und 4 V → 0,2 A. Welche Aussage passt?",
      [
        "Die Messwerte passen zu konstanten 20 Ω.",
        "Der Widerstand verdoppelt sich.",
        "Ein einzelner Messwert beweist das Gesetz für alle Bedingungen.",
      ],
      0,
      "Vergleiche Spannung geteilt durch Strom für beide Messpunkte.",
      "Beide Messpunkte ergeben 20 Ω. Sie sind mit dem ohmschen Modell vereinbar; sie beweisen es nicht für jede Temperatur.",
    ),
    choice(
      "error",
      "Jemand rechnet 12 V / 2 kΩ = 6 A. Wo liegt der Fehler?",
      [
        "Die Spannung hätte verdoppelt werden müssen.",
        "kΩ wurden nicht in Ω umgerechnet.",
        "Der Strom muss immer negativ sein.",
      ],
      1,
      "2 kΩ sind 2000 Ω. Der Vorsatz kilo verändert das Ergebnis um den Faktor 1000.",
      "Richtig sind 0,006 A oder 6 mA. Die Einheit mit Vorsatz gehört zur Zahl.",
    ),
  ],
};

export const ohmQuestion = (id) =>
  ohmLesson.questions.find((question) => question.id === id);

/** Fail publication in CI rather than silently accepting incomplete lesson data. */
export function validateLesson(lesson) {
  if (
    !lesson.id ||
    !lesson.version ||
    !lesson.title ||
    !lesson.objectives?.length ||
    !lesson.prerequisites?.length ||
    !lesson.assumptions ||
    !lesson.sources?.length
  )
    throw new Error("Lektion: Pflichtangaben fehlen");
  const types = new Set([
    "intro",
    "knowledge-check",
    "measurement-task",
    "prediction",
    "interactive-experiment",
    "concept-explanation",
    "formula-explorer",
    "guided-calculation",
    "practice",
    "summary",
    "real-world-application",
  ]);
  const ids = new Set();
  for (const step of lesson.steps) {
    if (
      ids.has(step.id) ||
      !step.id ||
      !types.has(step.type) ||
      !step.title ||
      !step.text
    )
      throw new Error("Lernschritt ungültig");
    ids.add(step.id);
  }
  const questionIds = new Set();
  for (const q of lesson.questions) {
    if (!q.id || questionIds.has(q.id) || !q.prompt || !q.hint || !q.success)
      throw new Error("Aufgabe unvollständig");
    questionIds.add(q.id);
    if (q.type === "numeric") {
      if (!Number.isFinite(q.answer) || !(q.tolerance >= 0) || !q.unit)
        throw new Error("Zahlenaufgabe ungültig");
    } else if (
      !["choice", "multiple", "matching"].includes(q.type) ||
      !q.options?.length ||
      (q.type === "choice"
        ? !Number.isInteger(q.answer) || !q.options[q.answer]
        : !Array.isArray(q.answer) ||
          !q.answer.length ||
          q.answer.some((a) => !Number.isInteger(a) || !q.options[a]))
    )
      throw new Error("Antwortoptionen ungültig");
  }
  if (questionIds.size < 10) throw new Error("Aufgabenbank unvollständig");
  return true;
}
