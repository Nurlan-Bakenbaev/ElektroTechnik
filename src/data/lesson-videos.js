/** Public YouTube embed metadata checked 2026-10-20; see docs/VIDEO_SOURCES.md. */
export const VIDEO_METADATA_CHECKED_ON = "2026-10-20";

export const lessonVideos = {
  current: {
    id: "-OzDSNHCfB4",
    title: "Stromstärke einfach erklärt",
    channel: "Learning Level Up",
    durationSeconds: 193,
    language: "de",
    focus:
      "Was bedeutet Stromstärke? Achte darauf, wie Ladungsmenge und Zeit zusammenhängen und welche Einheit das Ergebnis hat.",
  },
  circuits: {
    id: "D0Cm8JG5Ibk",
    title: "Reihen- und Parallelschaltung",
    channel: "simplexy",
    durationSeconds: 211,
    language: "de",
    focus:
      "Vergleiche die Wege des Stroms: Was bleibt in Reihe gleich, und was ist bei parallelen Zweigen gleich?",
  },
  voltage: {
    id: "R9Zz6mbCNME",
    title: "Die elektrische Spannung",
    channel: "SMA Solar Technology",
    durationSeconds: 173,
    language: "de",
    focus:
      "Achte auf die Rolle der Spannungsquelle. Spannung beschreibt einen Unterschied zwischen zwei Punkten und ist keine Stromstärke.",
  },
  resistance: {
    id: "CVXN0tLSnNY",
    title: "Der elektrische Widerstand",
    channel: "physikdigital • de",
    durationSeconds: 154,
    language: "de",
    focus:
      "Beobachte, wie ein Widerstand den Ladungsfluss beeinflusst. Welche Größe vergleichst du, wenn die Spannung gleich bleibt?",
  },
  ohm: {
    id: "sPwwKxkaBJE",
    title: "Ohmsches Gesetz mit Übung",
    channel: "Smartelektrik0",
    durationSeconds: 207,
    language: "de",
    focus:
      "Ordne Spannung, Stromstärke und Widerstand ihren Zeichen und Einheiten zu. Überlege vor der Rechnung, welche Größe gesucht ist.",
  },
  energy: {
    id: "ISnVP1jq7qE",
    title: "Elektrische Arbeit und Energie",
    channel: "Physik-Lernvideos",
    durationSeconds: 144,
    language: "de",
    focus:
      "Unterscheide die übertragene Energiemenge von der momentanen Leistung. Welche Rolle spielt die Betriebsdauer?",
  },
  power: {
    id: "Eq2tZdJ7NAM",
    title: "Elektrische Leistung und Arbeit",
    channel: "erklaerung-und-mehr",
    durationSeconds: 183,
    language: "de",
    focus:
      "Achte auf den Unterschied zwischen Watt und einer Energiemenge. Welche Angaben brauchst du für die Leistung an einem Gleichstromanschluss?",
  },
  efficiency: {
    id: "gOXEm2Gh5wc",
    title: "Wirkungsgrad berechnen",
    channel: "Lehrerschmidt",
    durationSeconds: 160,
    language: "de",
    focus:
      "Identifiziere die zugeführte und die nutzbare Energie. Warum wird Nutzenergie durch zugeführte Energie geteilt und nicht umgekehrt?",
  },
  field: {
    id: "YRNarrlYCoQ",
    title: "Das elektrische Feld verstehen",
    channel: "Think Logic",
    durationSeconds: 284,
    language: "de",
    focus:
      "Achte darauf, was Feldlinien darstellen und für welches Ladungsvorzeichen ihre Pfeilrichtung festgelegt ist.",
  },
  capacitor: {
    id: "xyaqZgqhIBc",
    title: "Kondensator: Aufbau, Ladung und Nutzen",
    channel: "Duden Learnattack",
    durationSeconds: 257,
    language: "de",
    focus:
      "Verfolge die Ladungstrennung an den beiden Seiten. Unterscheide Ladungsmenge in Coulomb und Kapazität in Farad.",
  },
  magnets: {
    id: "5FRdulem8c4",
    title: "Magnetfeld und Feldlinien",
    channel: "Lehrerschmidt",
    durationSeconds: 165,
    language: "de",
    focus:
      "Beobachte die Richtung und den Verlauf der magnetischen Feldlinien. Was zeigt ihre Darstellung über das Feld?",
  },
  electromagnetism: {
    id: "CkYO5RMsZuo",
    title: "Elektromagnetische Induktion",
    channel: "physikdigital • de",
    durationSeconds: 226,
    language: "de",
    focus:
      "Hier steht die Induktion im Mittelpunkt: Vergleiche einen ruhenden und einen bewegten Magneten. Entscheidend ist die Änderung des magnetischen Flusses.",
  },
  "magnetic-quantities": {
    id: "P42WB6HbynQ",
    title: "Magnetische Flussdichte und Feldstärke",
    channel: "Studytiger - Physik & E-Technik",
    durationSeconds: 232,
    language: "de",
    focus:
      "Dieses Video vertieft B und H: Welche Größen und Einheiten gehören zusammen, und welche Rolle spielt das Material? Den magnetischen Fluss Φ behandelst du zusätzlich im Unterrichtstext.",
  },
};

export function formatVideoDuration(seconds) {
  return `${Math.floor(seconds / 60)}:${String(seconds % 60).padStart(2, "0")}`;
}
