/** Reviewed concept traps and existing formula-image references, confined to the thirteen course topics. */
export const lessonStudy = {
  current: {
    mistake: "Wird der Strom in der Lampe aufgebraucht?",
    explanation:
      "Die Lampe wandelt Energie um. Die Ladung bleibt erhalten: Im unverzweigten Kreis ist die Stromstärke vor und nach der Lampe gleich.",
    formulaSection: "current-definition",
  },
  circuits: {
    mistake: "Teilt sich die Spannung bei parallelen Geräten auf?",
    explanation:
      "An parallelen Zweigen liegt dieselbe Spannung. Die Stromstärke teilt sich auf. In Reihe ist es umgekehrt: gleicher Strom, aufgeteilte Spannung.",
    formulaSection: "parallel",
  },
  voltage: {
    mistake: "Bedeuten vorhandene Volt, dass schon Strom fließt?",
    explanation:
      "Eine Batterie kann an einem offenen Schalter Spannung bereitstellen. Für dauerhaften Strom fehlt dann der geschlossene Weg.",
  },
  resistance: {
    mistake: "Sind Durchmesser und Querschnitt dasselbe?",
    explanation:
      "Der Querschnitt ist eine Fläche. Bei einem runden Draht vervierfacht ein doppelter Durchmesser die Fläche; bei gleichem Material und gleicher Länge sinkt der Widerstand auf ein Viertel.",
    formulaSection: "microscopic-resistance",
  },
  ohm: {
    mistake: "Verhält sich jedes Gerät wie ein fester Widerstand?",
    explanation:
      "Das konstante Widerstandsmodell gilt für ohmsche Bauteile bei gleichbleibenden Bedingungen. Ein PC mit wechselnder Last ist kein fester Widerstand.",
  },
  energy: {
    mistake: "Sind kW und kWh austauschbar?",
    explanation:
      "Kilowatt beschreibt Leistung. Kilowattstunden beschreiben Energie: Erst die Betriebsdauer macht aus einer Leistungsangabe eine Energiemenge.",
    formulaSection: "energy-bill",
  },
  power: {
    mistake: "Verbraucht ein 650-W-Netzteil ständig 650 W?",
    explanation:
      "Sein Nennwert beschreibt eine Abgabeleistungsgrenze. Die tatsächliche Aufnahme hängt vom versorgten Gerät, dessen Betrieb und dem Wirkungsgrad ab.",
    formulaSection: "power-ui",
  },
  efficiency: {
    mistake: "Kann ich 80 % als Zahl 80 einsetzen?",
    explanation:
      "In der Rechnung verwendest du 0,8. Der Wirkungsgrad bezieht sich auf die Aufnahme: 80 W Abgabe bei 80 % benötigen 100 W Aufnahme.",
    formulaSection: "efficiency-balance",
  },
  field: {
    mistake: "Bewegen sich Elektronen in Richtung der Feldpfeile?",
    explanation:
      "Die Pfeile zeigen die Kraft auf eine positive Probeladung. Auf ein negatives Elektron wirkt die Kraft entgegengesetzt. Feldlinien sind außerdem keine Teilchenbahnen.",
  },
  capacitor: {
    mistake: "Bedeutet C immer Coulomb?",
    explanation:
      "Als Formelzeichen bezeichnet C die Kapazität, gemessen in Farad (F). Hinter einer Zahl ist C die Einheit Coulomb für die Ladungsmenge Q.",
    formulaSection: "capacitor-charge",
  },
  magnets: {
    mistake: "Erhalte ich durch Zerteilen einen einzelnen Nordpol?",
    explanation:
      "Beim Zerteilen eines gewöhnlichen Stabmagneten entstehen wieder Magnete mit Nord- und Südpol. Die Feldlinien setzen sich auch im Inneren fort.",
  },
  electromagnetism: {
    mistake: "Induziert ein starker Magnet immer eine Spannung?",
    explanation:
      "Entscheidend ist die zeitliche Änderung des mit der Schleife verketteten Flusses. Ein ruhender Magnet mit unverändertem Fluss reicht nicht; auch Bewegung oder eine Drehung kann den Fluss ändern.",
  },
  "magnetic-quantities": {
    mistake: "Sind B, H und Φ nur andere Namen für dieselbe Größe?",
    explanation:
      "B beschreibt die Flussdichte am Ort in Tesla, H die magnetische Feldstärke in Ampere pro Meter. Φ berücksichtigt zusätzlich eine Fläche und deren Ausrichtung; die Einheit ist Weber.",
    formulaSection: "magnetic-quantities-flux",
  },
};
