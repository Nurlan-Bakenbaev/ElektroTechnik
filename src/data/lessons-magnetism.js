export const magnetismLessons = [
  {
    id: "capacitor",
    number: 10,
    title: "Kondensator",
    german: "Kondensator",
    chapter: "4.2",
    category: "fields",
    duration: 35,
    description:
      "Wie ein elektrisches Feld Energie speichert, wovon die Kapazität abhängt und wie sich ein Kondensator beim Laden und Entladen verhält.",
    objectives: [
      "Beschreiben Sie den Zusammenhang von Ladung, Spannung und Kapazität und berechnen Sie Kondensatorschaltungen.",
      "Erklären Sie das Laden und Entladen über einen Widerstand mit der Zeitkonstanten τ = RC.",
      "Berechnen Sie die gespeicherte Energie und gehen Sie sicher mit geladenen Kondensatoren um.",
    ],
    sections: [
      {
        id: "capacitor-charge",
        title: "1. Zwei Leiter mit einem elektrischen Feld dazwischen",
        paragraphs: [
          "Ein Kondensator besteht aus zwei leitenden Platten, die durch einen Isolator getrennt sind. Eine Quelle verschiebt Elektronen von einer Platte zur anderen: Eine Platte trägt die Ladung −Q, die andere +Q. Insgesamt bleibt der Kondensator elektrisch neutral. Die Energie steckt im elektrischen Feld zwischen den Platten.",
          "Die Kapazität C gibt an, wie viel Ladung Q jede Platte bei einer Spannung U aufnimmt. Das Farad ist eine große Einheit, daher nutzt man meist Teile davon: 1 µF = 10⁻⁶ F, 1 nF = 10⁻⁹ F, 1 pF = 10⁻¹² F.",
          "Für einen idealen Kondensator gilt Q = CU. Q ist der Betrag der Ladung einer Platte. Bei konstanter Spannung fließt im Gleichstromfall kein Strom. Ändert sich die Spannung, fließt ein Strom: Die Quelle lädt oder entlädt die Platten.",
        ],
        formula: {
          expression: "C = Q / U; Q = C · U; i = C · dU/dt",
          legend:
            "C ist die Kapazität in Farad (F); Q ist der Betrag der Ladung einer Platte in Coulomb (C); U ist die Spannung in Volt (V); i ist der Strom in Ampere (A).",
          note: "Die letzte Formel gilt für konstantes C im Verbraucherzählpfeilsystem: Positiver Strom fließt bei positiver Spannung in die Platte hinein.",
        },
        example: {
          title: "Wie viel Ladung speichert ein Kondensator?",
          given: "C = 470 µF, U = 12 V. Gesucht: Q.",
          steps: [
            "Kapazität umrechnen: 470 µF = 470 · 10⁻⁶ F = 0,000470 F.",
            "Mit Q = CU: Q = 0,000470 · 12 = 0,00564 C.",
            "Ergebnis in Millicoulomb: 0,00564 C = 5,64 mC.",
          ],
          answer: "Die Platten tragen die Ladungen +5,64 mC und −5,64 mC.",
        },
      },
      {
        id: "capacitor-geometry",
        title: "2. Geometrie, Dielektrikum und zulässige Spannung",
        paragraphs: [
          "Beim Plattenkondensator wächst die Kapazität mit der Plattenfläche A und sinkt mit dem Plattenabstand d. Zwischen großen, nahen Platten ist das Feld nahezu homogen. Randeffekte sind vernachlässigbar, wenn d viel kleiner ist als die Plattenabmessungen. Das Dielektrikum zwischen den Platten wird polarisiert und erhöht die Kapazität gegenüber Vakuum.",
          "Die relative Permittivität εᵣ kennzeichnet das Material, ε₀ ist die elektrische Feldkonstante (ca. 8,854 · 10⁻¹² F/m). Bei fester Spannung vergrößert ein höheres εᵣ die Ladung Q. Ist der geladene Kondensator von der Quelle getrennt, bleibt Q konstant, und ein Dielektrikum senkt die Spannung. Prüfen Sie daher immer, ob die Quelle angeschlossen ist.",
          "Ein Dielektrikum hält nur eine begrenzte elektrische Feldstärke aus. Wird die zulässige Spannung überschritten, kommt es zum Durchschlag: Der Isolator wird leitend und das Bauteil wird zerstört. Maßgeblich ist die Nennspannung auf dem Gehäuse. Elektrolytkondensatoren sind gepolt; Keramik- und Folienkondensatoren meist nicht.",
        ],
        formula: {
          expression: "C = ε₀ · εᵣ · A / d; E ≈ U / d",
          legend:
            "A ist die Überdeckungsfläche der Platten in m²; d ist der Plattenabstand in m; εᵣ ist die relative Permittivität; E ist die elektrische Feldstärke in V/m.",
          note: "Die Formeln gelten für parallele Platten mit homogenem Dielektrikum und vernachlässigbaren Randeffekten.",
        },
        callout: {
          type: "warning",
          title: "Die Spannung bleibt auch nach dem Abschalten bestehen",
          text: "Ein Kondensator kann eine gefährliche Ladung speichern. Experimentieren Sie nur mit Kleinspannung. Entladen Sie über einen geeigneten Widerstand und kontrollieren Sie die Spannung mit einem Messgerät. Schließen Sie geladene Kondensatoren nie mit einem Schraubendreher kurz und öffnen Sie keine Netzteile.",
        },
      },
      {
        id: "capacitor-networks",
        title: "3. Parallel- und Reihenschaltung",
        paragraphs: [
          "Bei der Parallelschaltung liegen alle Kondensatoren an derselben Spannung, die Ladungen addieren sich: Qges = Q₁ + Q₂. Daher addieren sich auch die Kapazitäten. Das entspricht einer größeren Plattenfläche.",
          "Bei der Reihenschaltung zweier zunächst ungeladener idealer Kondensatoren ist der Mittelpunkt isoliert. Beide Kondensatoren tragen den gleichen Betrag der Ladung, die Spannungen addieren sich. Die Gesamtkapazität ist kleiner als die kleinste Einzelkapazität. Die kleinere Kapazität erhält die größere Spannung.",
          "Bei realen Kondensatoren in Reihe unterscheiden sich Leckströme und Toleranzen. Die Spannung teilt sich daher nicht sicher gleichmäßig auf. In der Praxis prüft man die Spannungsaufteilung und setzt bei Bedarf Symmetrierwiderstände ein.",
        ],
        formula: {
          expression:
            "Parallel dazu: Ctot = C₁ + C₂; nacheinander: 1/Ctot = 1/C₁ + 1/C₂",
          legend:
            "C₁, C₂ und Cges sind Einzel- und Gesamtkapazität in derselben Einheit.",
          note: "Für zwei Kondensatoren in Reihe gilt Cges = C₁C₂ / (C₁ + C₂). Bei Parallelschaltung ist U gleich, bei Reihenschaltung ist der Betrag von Q gleich.",
        },
        example: {
          title: "Warum teilt sich die Spannung nicht gleichmäßig auf?",
          given:
            "C₁ = 10 µF und C₂ = 20 µF liegen in Reihe an einer 12-V-Quelle. Beide sind zu Beginn entladen.",
          steps: [
            "Cges = (10 · 20) / (10 + 20) ≈ 6,67 µF.",
            "Gesamtladung Q = CgesU = 6,67 μF · 12 V ≈ 80 μC.",
            "U₁ = Q/C₁ = 80/10 = 8 V; U₂ = Q/C₂ = 80/20 = 4 V.",
            "Probe: 8 V + 4 V = 12 V. Die kleinere Kapazität erhält die größere Spannung.",
          ],
          answer: "Cges ≈ 6,67 µF; an 10 µF liegen 8 V, an 20 µF liegen 4 V.",
        },
      },
      {
        id: "capacitor-rc",
        title: "4. Laden und Entladen über einen Widerstand",
        paragraphs: [
          "Ein entladener Kondensator wird über einen Widerstand R an eine ideale Quelle U₀ geschaltet. Anfangs ist die Kondensatorspannung null, der Strom beträgt U₀/R. Mit wachsender Ladung steigt die Kondensatorspannung, die Spannung am Widerstand sinkt und der Strom nimmt ab. Die Kondensatorspannung kann sich bei endlichem Strom nicht sprunghaft ändern.",
          "Die Zeitkonstante τ = RC bestimmt die Geschwindigkeit. Nach einem τ hat die Spannung beim Laden etwa 63,2 % des Endwerts erreicht, beim Entladen ist sie auf 36,8 % gesunken. Nach fünf τ ist der Ladevorgang zu ca. 99,3 % abgeschlossen, beim Entladen bleiben ca. 0,67 %. Praktisch genügen oft fünf Zeitkonstanten.",
          "Beim Entladen gibt der Kondensator seine Energie an den Widerstand ab. Die Stromrichtung kehrt sich gegenüber dem Laden um. Ein größeres R oder C verlangsamt beides. Bei mehreren Widerständen ist für τ der Ersatzwiderstand maßgeblich, den der Kondensator sieht, einschließlich der Innenwiderstände der Quellen.",
        ],
        formula: {
          expression:
            "τ = RC; U_C(t) = U₀(1 − e^(−t/τ)); U_C(t) = U_C,0 e^(−t/τ)",
          legend:
            "τ und t sind Zeiten in Sekunden; R ist der Widerstand in Ohm; C ist die Kapazität in Farad; U₀ ist die Quellenspannung; U_C,0 ist die Anfangsspannung beim Entladen.",
          note: "Die Ladeformel gilt für die Anfangsspannung 0 V. Beim Laden gilt i(t) = (U₀/R)e^(−t/τ); beim Entladen hängt das Vorzeichen des Stroms von der gewählten Zählrichtung ab.",
        },
        example: {
          title: "Wie schnell lädt sich ein Kondensator auf?",
          given:
            "R = 10 kOhm, C = 100 µF, U₀ = 5 V. Gesucht: τ und die Spannung nach 1 s.",
          steps: [
            "Einheiten umrechnen: R = 10.000 Ohm; C = 0,000100 F.",
            "τ = RC = 10.000 · 0,000100 = 1 s.",
            "Bei t = τ: U = 5(1 − e⁻¹) ≈ 5 · 0,632 = 3,16 V.",
            "Nach 5 s, also 5τ, beträgt die Spannung etwa 4,97 V.",
          ],
          answer: "τ = 1 s; nach 1 s beträgt die Spannung ca. 3,16 V.",
        },
      },
      {
        id: "capacitor-energy",
        title: "5. Energie des elektrischen Feldes",
        paragraphs: [
          "Jede weitere Ladung auf die bereits geladenen Platten zu bringen, kostet mehr Arbeit, denn die Spannung steigt von null auf U. Die Energie ist daher QU/2 und nicht QU. Bei doppelter Spannung und gleicher Kapazität wächst sie auf das Vierfache.",
          "Lädt man einen entladenen Kondensator über einen Widerstand aus einer idealen Gleichspannungsquelle, gibt die Quelle die Energie CU² ab. Die Hälfte speichert der Kondensator, die andere Hälfte wird im Widerstand in Wärme umgesetzt. Das gilt nur für diese Ladeart; ein Schaltwandler hat eine andere Verlustbilanz.",
          "Kondensatoren geben Energie schnell ab. Man nutzt sie für Blitzlicht, Glättung und die kurzzeitige Versorgung von Schaltungen. Zur langfristigen Speicherung ist ein Akkumulator je Masse meist besser. Vergleichen Sie Bauteile nicht nur nach C, sondern auch nach Nennspannung, zulässigem Strom, Leckstrom und Verlusten.",
        ],
        formula: {
          expression: "W = ½CU² = ½QU = Q²/(2C)",
          legend:
            "W ist die Energie in Joule (J); C ist die Kapazität in F; U ist die Spannung in V; Q ist die Ladung in C.",
          note: "Die Formeln gelten für einen linearen Kondensator mit konstanter Kapazität. Einzusetzen ist die tatsächliche Spannung, nicht die Nennspannung.",
        },
        example: {
          title: "Energiespeicher",
          given: "C = 1000 µF, U = 24 V. Gesucht: Energie des Feldes.",
          steps: [
            "1000 µF = 0,001 F.",
            "W = 0,5 · 0,001 · 24² = 0,288 J.",
            "Bei 12 V beträgt die Energie 0,072 J: viermal weniger.",
          ],
          answer: "Bei 24 V speichert der Kondensator 0,288 J.",
        },
      },
      {
        id: "capacitor-real",
        title: "6. Reales Bauteil und richtiges Prüfen",
        paragraphs: [
          "Ein realer Kondensator hat eine Kapazitätstoleranz, einen Leckstrom, einen Ersatzserienwiderstand (ESR) und eine parasitäre Induktivität. Der Leckstrom entlädt einen isolierten Kondensator mit der Zeit. Der ESR erwärmt das Bauteil bei Wechselstrom. Bei hohen Frequenzen reicht das ideale Modell nicht mehr aus.",
          "Zum Prüfen schalten Sie zuerst spannungsfrei, entladen das Bauteil sicher und messen die Restspannung. Eine Kapazitätsmessung in der Schaltung kann durch Nachbarbauteile verfälscht werden. Beachten Sie die Polung und die Hinweise des Messgeräts. Aufgewölbtes Gehäuse oder ausgetretener Elektrolyt weisen auf einen Defekt hin; ein unauffälliges Aussehen beweist aber keine Funktion.",
          "Bestimmen Sie bei Aufgaben zuerst den Betriebsfall: Gleichstrom nach dem Einschwingen, Ausgleichsvorgang oder Wechselstrom. Wählen Sie dann die Formel: Q = CU für die Ladung, τ = RC für die Zeit, W = CU²/2 für die Energie. Der häufigste Fehler ist der Faktor eine Million durch verwechselte Mikrofarad und Farad. Rechnen Sie Einheiten vorher um.",
        ],
        callout: {
          type: "tip",
          title: "Plausibilitätsprüfung",
          text: "Bei konstantem C bedeuten größeres U ein größeres Q und ein viel größeres W. Bei konstantem R bedeutet größeres C einen langsameren Vorgang. Liefert Ihre Rechnung das Gegenteil, prüfen Sie Formel und Einheiten.",
        },
      },
    ],
    terms: [
      {
        term: "Kondensator",
        german: "Kondensator",
        symbol: "C",
        unit: "F",
        definition:
          "Bauelement aus zwei Leitern mit Isolierung dazwischen, das Energie im elektrischen Feld speichert.",
      },
      {
        term: "Kapazität",
        german: "Kapazität",
        symbol: "C",
        unit: "F",
        definition:
          "Verhältnis des Betrags der Ladung einer Platte zur Spannung zwischen den Platten: C = Q/U.",
      },
      {
        term: "Dielektrikum",
        german: "Dielektrikum",
        symbol: "—",
        unit: "—",
        definition:
          "Isolierstoff, dessen Polarisation das elektrische Feld und die Kapazität beeinflusst.",
      },
      {
        term: "Relative Permittivität",
        german: "relative Permittivität",
        symbol: "εᵣ",
        unit: "dimensionslos",
        definition:
          "Materialkennzahl: Sie gibt im einfachen Plattenmodell an, um welchen Faktor die Kapazität gegenüber Vakuum steigt. Sie bezeichnet eine Eigenschaft des Isolierstoffs, nicht den Stoff selbst.",
      },
      {
        term: "Zeitkonstante",
        german: "Zeitkonstante",
        symbol: "τ",
        unit: "s",
        definition:
          "Kennzeit einer RC-Schaltung: τ = RC. In dieser Zeit sinkt die Abweichung vom Endwert auf den e-ten Teil.",
      },
      {
        term: "Leckstrom",
        german: "Leckstrom",
        symbol: "I_Leck",
        unit: "A",
        definition:
          "Durch unvollkommene Isolation fließt ein kleiner Strom, der die Ladung langsam abbaut.",
      },
      {
        term: "Feldenergie",
        german: "Feldenergie",
        symbol: "W",
        unit: "J",
        definition:
          "Beim Aufbau des Feldes aufgewendete Arbeit; bei konstanter Kapazität W = CU²/2.",
      },
    ],
    summary: [
      "Kapazität verknüpft Ladung und Spannung: Q = CU; 1 F = 1 C/V.",
      "Plattenfläche und Dielektrikum erhöhen die Kapazität, ein größerer Plattenabstand verringert sie.",
      "Bei Parallelschaltung addieren sich die Kapazitäten; bei Reihenschaltung addieren sich die Kehrwerte.",
      "Der RC-Ausgleichsvorgang hat die Zeitkonstante τ = RC; fünf τ sind ein praktischer Richtwert.",
      "Die Energie W = CU²/2 hängt vom Quadrat der Spannung ab.",
      "Nach dem Abschalten kann am Kondensator noch Spannung anliegen.",
    ],
    quiz: [
      {
        id: "capacitor-1",
        type: "choice",
        question:
          "Wie ändert sich die Kapazität eines Plattenkondensators, wenn der Plattenabstand verdoppelt wird (Fläche und Dielektrikum bleiben gleich)?",
        options: [
          "Wird halbiert",
          "Wird sich verdoppeln",
          "Wird sich nicht ändern",
          "Wird sich vervierfachen",
        ],
        answer: 0,
        explanation:
          "Beim Plattenkondensator gilt C = ε₀εᵣA/d. Verdoppelt man d, halbiert sich C.",
      },
      {
        id: "capacitor-2",
        type: "numeric",
        question:
          "Die Kapazität beträgt 200 μF, die Spannung 10 V. Wie groß ist der Betrag der Ladung einer Platte in Millicoulomb?",
        answer: 2,
        unit: "mC",
        tolerance: 0.01,
        explanation: "Q = CU = 200 · 10⁻⁶ · 10 = 0,002 C = 2 mC.",
      },
      {
        id: "capacitor-3",
        type: "choice",
        question:
          "Auf welchen Anteil der Endspannung lädt sich ein entladener Kondensator nach einer Zeitkonstanten RC auf?",
        options: [
          "Ungefähr 36,8 %",
          "Ungefähr 50 %",
          "Ungefähr 63,2 %",
          "Genau 100 %",
        ],
        answer: 2,
        explanation:
          "U(τ)/U₀ = 1 − e⁻¹ ≈ 0,632. Die 36,8 % beschreiben die Restspannung beim Entladen.",
      },
      {
        id: "capacitor-4",
        type: "numeric",
        question:
          "Ein 1000-µF-Kondensator wird auf 10 V aufgeladen. Welche Energie speichert er in Joule?",
        answer: 0.05,
        unit: "J",
        tolerance: 0.001,
        explanation: "1000 µF = 0,001 F. W = ½CU² = 0,5 0,001 100 = 0,05 J.",
      },
      {
        id: "capacitor-5",
        type: "choice",
        question:
          "Zwei zunächst entladene ideale Kondensatoren (10 µF und 20 µF) liegen in Reihe. Welche Aussage ist richtig?",
        options: [
          "Beide müssen die gleiche Spannung haben.",
          "Bei 20 µF ist die Spannung doppelt so hoch",
          "Die Gesamtkapazität beträgt 30 µF",
          "An 10 µF liegt die doppelte Spannung",
        ],
        answer: 3,
        explanation:
          "In der Reihenschaltung ist der Betrag der Ladung gleich, U = Q/C. Am Kondensator mit der kleineren Kapazität liegt die größere Spannung: U₁/U₂ = C₂/C₁ = 2.",
      },
    ],
  },
  {
    id: "magnets",
    number: 11,
    title: "Magnete und magnetische Feldlinien",
    german: "Magnete und magnetische Feldlinien",
    chapter: "5.1",
    category: "magnetism",
    duration: 32,
    description:
      "Magnetpole, Form und Richtung des Feldes, Kraftwirkung auf Strom und bewegte Ladungen – vom Kompass bis zum magnetischen Fluss.",
    objectives: [
      "Lesen Sie magnetische Feldlinien richtig und bestimmen Sie die Feldrichtung mit einem Kompass.",
      "Erklären Sie die Kraftwirkung eines Magnetfeldes auf bewegte Ladungen und stromdurchflossene Leiter.",
      "Unterscheiden Sie die magnetische Flussdichte B vom magnetischen Fluss Φ und beachten Sie die Ausrichtung der Fläche.",
    ],
    sections: [
      {
        id: "magnets-poles",
        title: "1. Nord- und Südpol",
        paragraphs: [
          "Ein Dauermagnet hat einen Nordpol N und einen Südpol S. Gleichnamige Pole stoßen sich ab, ungleichnamige ziehen sich an. Die Wirkung ist an den Enden eines Stabmagneten am stärksten. Das Magnetfeld erfüllt aber den ganzen Raum um und im Magneten.",
          "Bricht man einen Magneten durch, erhält man keinen einzelnen Nord- oder Südpol. Jedes Teilstück ist wieder ein Magnet mit zwei Polen. Magnetische Einzelladungen (Monopole) sind nicht nachgewiesen. Das Magnetfeld hat daher keine Quellen und Senken wie das elektrische Feld.",
          "Ein Dauermagnet behält seine Magnetisierung, weil die magnetischen Momente im Werkstoff geordnet sind. Vereinfacht erklärt man das mit magnetischen Domänen (Weiss-Bezirken), also Bereichen mit gleicher Magnetisierung. Hitze, starke Gegenfelder und mechanische Belastung schwächen den Magneten.",
        ],
        callout: {
          type: "insight",
          title: "Ähnliche Begriffe, unterschiedliche Größen",
          text: "Eine positive elektrische Ladung lässt sich von einer negativen trennen. Einen einzelnen Nordpol erhält man durch Zerteilen nicht: Jedes Stück hat sein eigenes Paar N und S.",
        },
      },
      {
        id: "magnets-lines",
        title: "2. Magnetische Feldlinien lesen",
        paragraphs: [
          "Eine Feldlinie ist eine gedachte Kurve. Ihre Tangente zeigt in jedem Punkt in die Richtung der magnetischen Flussdichte B. Außerhalb eines Stabmagneten verlaufen die Feldlinien von N nach S, im Inneren von S nach N. Sie sind also in sich geschlossen.",
          "Feldlinien schneiden sich nie, sonst hätte B in einem Punkt zwei Richtungen. Dichtere Linien stehen in Zeichnungen für ein stärkeres Feld. Wie viele Linien man zeichnet, ist aber Konvention. Feldlinien sind keine realen Fäden.",
          "In einem nahezu homogenen Feld verlaufen die Linien parallel und im gleichen Abstand. Das gilt etwa im Inneren einer langen Spule oder zwischen passenden Polschuhen, nur in einem begrenzten Bereich. Am Rand ist das Feld gewölbt.",
        ],
        callout: {
          type: "tip",
          title: "Das Feld steht senkrecht zur Zeichenebene",
          text: "Das Symbol ⊙ bedeutet: Der Vektor zeigt auf den Betrachter zu (Pfeilspitze). Das Symbol ⊗ bedeutet: Der Vektor zeigt vom Betrachter weg (Pfeilende). So lassen sich dreidimensionale Aufgaben übersichtlich darstellen.",
        },
      },
      {
        id: "magnets-compass",
        title: "3. Kompass, Erdfeld und Überlagerung von Feldern",
        paragraphs: [
          "Eine kleine Magnetnadel richtet sich nach dem örtlichen Feld aus. Das Nordende der Nadel zeigt in Richtung von B. Der Kompass zeigt dabei das Gesamtfeld aus Erdfeld, Magneten und Strömen. Nahe Stahltischen, Lautsprechern oder Stromleitungen weicht die Anzeige daher stark ab.",
          "Das Nordende der Nadel zeigt ungefähr zum geografischen Norden. Dort liegt magnetisch ein Südpol, der das Nordende der Nadel anzieht. Geografischer und magnetischer Norden stimmen nicht überein; der Winkel dazwischen heißt Missweisung (Deklination). Die Feldlinien des Erdfeldes sind außerdem gegen den Horizont geneigt (Inklination).",
          "Die magnetische Flussdichte ist ein Vektor. Bei Überlagerung addiert man Vektoren, nicht nur Beträge. Zwei gleich große, entgegengesetzte Felder heben sich in einem Punkt auf. Bei senkrechten Feldern ergibt sich die Richtung dazwischen. Beachten Sie: Magnetische Werkstoffe ändern unter dem Gesamtfeld ihren Zustand.",
        ],
        formula: {
          expression:
            "B⃗total = B⃗₁ + B⃗₂; für senkrechte Felder: Btotal = √(B₁² + B₂²)",
          legend:
            "B⃗ ist der Vektor der magnetischen Flussdichte; B ist sein Betrag in Tesla (T).",
          note: "Die einfache Addition der Beträge gilt nur für gleichgerichtete Vektoren.",
        },
        example: {
          title: "Zwei Felder in entgegengesetzter Richtung",
          given:
            "Im betrachteten Punkt zeigt B₁ = 4 mT nach rechts und B₂ = 1,5 mT nach links.",
          steps: [
            "Wir legen die positive Richtung nach rechts fest.",
            "Wir addieren die Komponenten: Bx = 4 − 1,5 = 2,5 mT.",
            "Das positive Vorzeichen bedeutet: Das Gesamtfeld zeigt nach rechts.",
          ],
          answer:
            "Die resultierende magnetische Flussdichte beträgt 2,5 mT und zeigt nach rechts.",
        },
      },
      {
        id: "magnets-force",
        title: "4. Kraft des Magnetfeldes auf bewegte Ladungen",
        paragraphs: [
          "Auf eine bewegte Ladung wirkt der magnetische Anteil der Lorentzkraft. Er hängt von Ladung, Geschwindigkeit, magnetischer Flussdichte und dem Winkel zwischen v und B ab. Ruht die Ladung oder bewegt sie sich entlang des Feldes, ist die Kraft null. Bei Bewegung quer zum Feld ist sie maximal und steht senkrecht zu v und zu B.",
          "Für eine positive Ladung gibt das Kreuzprodukt v × B die Kraftrichtung an (Rechte-Hand-Regel). Bei einer negativen Ladung ist die Richtung umgekehrt. Weil die Kraft senkrecht zur Geschwindigkeit wirkt, verrichtet sie keine Arbeit und ändert die kinetische Energie nicht. Sie lenkt nur ab. Ein elektrisches Feld kann dagegen den Betrag der Geschwindigkeit ändern.",
          "In einem Leiter bewegen sich die Ladungsträger geordnet, daher wirkt das Feld auf den stromdurchflossenen Leiter. Für ein gerades Leiterstück der Länge l in einem homogenen Feld gilt F = BIl sin α. Dabei ist α der Winkel zwischen der technischen Stromrichtung und B. Darauf beruht der Elektromotor.",
        ],
        formula: {
          expression: "F_mag = |q| · v · B · sin α; F_Leiter = B I l sin α",
          legend:
            "F ist die Kraft in N; q ist die Ladung in C; v ist die Geschwindigkeit in m/s; B ist die magnetische Flussdichte in T; I ist der Strom in A; l ist die wirksame Länge in m.",
          note: "Die Leiterformel gilt für ein gerades Leiterstück im homogenen Feld. Vektorform für eine Ladung: F⃗mag = q(v⃗ × B⃗).",
        },
        example: {
          title: "Kraft auf einen Leiter",
          given:
            "B = 0,20 T, I = 3 A, l = 10 cm. Der Leiter steht senkrecht zum Feld.",
          steps: [
            "Länge umrechnen: l = 0,10 m.",
            "Wegen α = 90° ist sin α = 1.",
            "F = BIl = 0,20 · 3 · 0,10 = 0,060 N.",
            "Dreht man den Leiter in Feldrichtung, wird α = 0° und die Kraft null.",
          ],
          answer:
            "Die Kraft beträgt 0,060 N; sie steht senkrecht zu Strom und Feld.",
        },
      },
      {
        id: "magnets-flux",
        title:
          "5. Magnetische Flussdichte und magnetischer Fluss sind verschiedene Größen",
        paragraphs: [
          "Die magnetische Flussdichte B beschreibt das Feld in einem Punkt und wird in Tesla gemessen. Der magnetische Fluss Φ gilt für eine gewählte Fläche. Er hängt von der Flussdichte, der Flächengröße und der Ausrichtung der Fläche ab. Dasselbe Feld liefert daher durch verschiedene Flächen unterschiedliche Flüsse.",
          "Für eine ebene Fläche im homogenen Feld gilt Φ = BA cos α. Dabei ist α der Winkel zwischen B und der Flächennormalen, nicht der Winkel zur Fläche selbst. Durchsetzt das Feld die Fläche senkrecht, ist α = 0° und der Fluss maximal. Verlaufen die Feldlinien in der Flächenebene, ist α = 90° und der Fluss null.",
          "Das Vorzeichen des Flusses hängt von der gewählten Richtung der Normalen ab. Bei einem inhomogenen Feld teilt man die Fläche in kleine Stücke und addiert deren Flüsse. Durch jede geschlossene Fläche ist der Gesamtfluss null: So viele Linien eintreten, so viele treten aus. Das ist eine weitere Formulierung dafür, dass es keine magnetischen Monopole gibt.",
        ],
        formula: {
          expression: "Φ = B · A · cos α; 1 Wb = 1 T m²",
          legend:
            "Φ ist der magnetische Fluss in Weber (Wb); A ist die Fläche in m²; α ist der Winkel zwischen B und der Flächennormalen.",
          note: "Die einfache Formel gilt für eine ebene Fläche im homogenen Feld. Allgemein gilt Φ = ∫ B⃗ · dA⃗.",
        },
        example: {
          title: "Beim Drehen der Leiterschleife ändert sich der Fluss",
          given:
            "B = 0,10 T, A = 20 cm², Winkel zwischen Feld und Normale α = 60°.",
          steps: [
            "Fläche umrechnen: 20 cm² = 20 · 10⁻⁴ m² = 0,002 m².",
            "cos 60° = 0,5.",
            "Φ = 0,10 · 0,002 · 0,5 = 0,0001 Wb.",
            "0,0001 Wb = 0,10 mWb. Bei α = 0° wäre der Fluss doppelt so groß.",
          ],
          answer: "Der magnetische Fluss beträgt 0,10 mWb.",
        },
      },
      {
        id: "magnets-materials",
        title: "6. Welche Werkstoffe reagieren auf Magnete?",
        paragraphs: [
          "Ferromagnetische Werkstoffe wie Eisen, Nickel und Kobalt lassen sich stark magnetisieren. Weichmagnetische Werkstoffe ändern ihre Magnetisierung leicht; sie eignen sich für Kerne von Elektromagneten und Transformatoren. Hartmagnetische Werkstoffe behalten ihre Magnetisierung und werden für Dauermagnete verwendet. „Weich“ und „hart“ beziehen sich hier nicht auf die mechanische Härte.",
          "Nicht jedes Metall wird von einem Dauermagneten angezogen. Kupfer und Aluminium verhalten sich anders als Eisen. Paramagnetische Stoffe verstärken ein äußeres Feld nur schwach, diamagnetische schwächen es nur schwach. Im einfachen Versuch fällt das kaum auf, bei Präzisionsmessungen spielt es eine Rolle.",
          "Stahlteile verändern das Feldbild. Starke Magnete ziehen sich kräftig an und können Finger einklemmen. Für Versuche genügen kleine Magnete, ein Kompass und ungefährliche Ströme. Beachten Sie bei empfindlichen Geräten und medizinischen Implantaten die Herstellerangaben. An der Größe eines Magneten allein lässt sich seine magnetische Wirkung nicht zuverlässig erkennen.",
        ],
        callout: {
          type: "insight",
          title: "Was zeigt der Eisenspäne-Versuch wirklich?",
          text: "Eisenspäne werden im Feld magnetisiert und richten sich aus, sodass das Feldbild sichtbar wird. Sie zeigen die Richtung, messen aber nicht den Wert von B und verändern das Feld etwas.",
        },
      },
    ],
    terms: [
      {
        term: "Magnetfeld",
        german: "Magnetfeld",
        symbol: "B⃗",
        unit: "T",
        definition:
          "Feld, das von bewegten Ladungen und Magnetisierung erzeugt wird und auf bewegte Ladungen und magnetische Momente wirkt.",
      },
      {
        term: "Magnetische Feldlinie",
        german: "Magnetische Feldlinie",
        symbol: "—",
        unit: "—",
        definition:
          "Gedachte Kurve, deren Tangente in Richtung des Vektors der magnetischen Flussdichte zeigt.",
      },
      {
        term: "Magnetische Flussdichte",
        german: "Magnetische Flussdichte",
        symbol: "B",
        unit: "T",
        definition:
          "Vektorgröße, die das Magnetfeld beschreibt und in die Formel der magnetischen Kraft eingeht.",
      },
      {
        term: "Magnetischer Fluss",
        german: "Magnetischer Fluss",
        symbol: "Φ",
        unit: "Wb",
        definition:
          "Fluss des Vektors B durch eine orientierte Fläche; im homogenen Feld Φ = BA cos α.",
      },
      {
        term: "Lorentzkraft",
        german: "Lorentzkraft",
        symbol: "F",
        unit: "N",
        definition:
          "Kraft auf eine Ladung im elektromagnetischen Feld; der magnetische Anteil beträgt q(v × B). In der Gesamtkraft ist auch qE enthalten.",
      },
      {
        term: "Ferromagnetischer Stoff",
        german: "Ferromagnetischer Stoff",
        symbol: "—",
        unit: "—",
        definition:
          "Werkstoff mit starker Magnetisierung, die auf der Ordnung magnetischer Momente und Domänen beruht.",
      },
    ],
    summary: [
      "Ein Magnet hat immer Nord- und Südpol; beim Zerteilen entsteht kein einzelner Pol.",
      "Außerhalb des Magneten verlaufen die Feldlinien von N nach S, innen von S nach N; sie sind geschlossen.",
      "Das Nordende der Kompassnadel zeigt die Richtung des örtlichen Feldes.",
      "Die magnetische Kraft steht senkrecht zur Geschwindigkeit der Ladung; bei Bewegung entlang B ist sie null.",
      "B wird in Tesla gemessen, Φ in Weber; der Fluss hängt von Fläche und Ausrichtung ab.",
      "Bei Φ = BA cos α wird der Winkel zur Flächennormalen gemessen.",
    ],
    quiz: [
      {
        id: "magnets-1",
        type: "choice",
        question:
          "Was geschieht, wenn man einen Stabmagneten in zwei Teile zerbricht?",
        options: [
          "Ein Teil hat nur den Nordpol, der andere nur den Südpol",
          "Die magnetischen Eigenschaften verschwinden vollständig",
          "Jedes Teilstück hat einen Nord- und einen Südpol",
          "Beide Teile haben nur einen Nordpol",
        ],
        answer: 2,
        explanation:
          "Beim Zerteilen eines Magneten entstehen keine Monopole, sondern kleinere Magnete mit zwei Polen.",
      },
      {
        id: "magnets-2",
        type: "choice",
        question:
          "Welche Richtung haben die Feldlinien außerhalb eines Stabmagneten?",
        options: [
          "Von N nach S",
          "Von S nach N",
          "Von der positiven zur negativen Ladung",
          "Immer kreisförmig um den Magneten",
        ],
        answer: 0,
        explanation:
          "Außerhalb des Magneten verlaufen die Feldlinien von N nach S. Im Inneren verlaufen sie von S nach N und sind geschlossen.",
      },
      {
        id: "magnets-3",
        type: "numeric",
        question:
          "Ein 0,20 m langer Leiter führt 2 A und steht senkrecht zu einem homogenen Feld B = 0,50 T. Wie groß ist die Kraft in Newton?",
        answer: 0.2,
        unit: "N",
        tolerance: 0.005,
        explanation: "F = BIl sin 90° = 0,50 2 0,20 = 0,20 N.",
      },
      {
        id: "magnets-4",
        type: "numeric",
        question:
          "Ein Feld B = 0,20 T steht senkrecht zu einer Fläche von 0,01 m². Wie groß ist der magnetische Fluss in Milliweber?",
        answer: 2,
        unit: "mWb",
        tolerance: 0.01,
        explanation:
          "Das Feld ist parallel zur Flächennormalen, also cos α = 1. Φ = BA = 0,20 · 0,01 = 0,002 Wb = 2 mWb.",
      },
      {
        id: "magnets-5",
        type: "choice",
        question:
          "Eine positive Ladung bewegt sich genau entlang eines homogenen Magnetfeldes. Wie groß ist der magnetische Anteil der Lorentzkraft?",
        options: [
          "qvB",
          "qB/v",
          "Sie wirkt immer entgegen der Geschwindigkeit",
          "Null",
        ],
        answer: 3,
        explanation:
          "Fmag = |q|vB sin α. Bei Bewegung entlang des Feldes ist α = 0° und sin α = 0, also entsteht keine magnetische Kraft.",
      },
    ],
  },
  {
    id: "electromagnetism",
    number: 12,
    title: "Elektromagnetismus",
    german: "Elektromagnetismus",
    chapter: "5.3",
    category: "magnetism",
    duration: 38,
    description:
      "Wie Strom ein Magnetfeld erzeugt, warum eine Spule zum Magneten wird und wie eine Änderung des magnetischen Flusses eine Spannung induziert.",
    objectives: [
      "Bestimmen Sie die Richtung des Magnetfeldes von Leiter und Spule aus der Stromrichtung.",
      "Wenden Sie das Induktionsgesetz und die Lenzsche Regel an.",
      "Erklären Sie Selbstinduktion sowie die Funktionsweise von Motor, Generator und Transformator.",
    ],
    sections: [
      {
        id: "electromagnetism-wire",
        title: "1. Strom erzeugt ein Magnetfeld",
        paragraphs: [
          "Ein Magnetfeld gibt es nicht nur bei Dauermagneten. Auch ein stromdurchflossener Leiter erzeugt eins. Um einen langen geraden Draht verlaufen die Feldlinien als konzentrische Kreise in Ebenen senkrecht zum Draht. Der Mittelpunkt liegt auf der Drahtachse.",
          "Die Richtung folgt aus der Rechte-Hand-Regel: Der Daumen zeigt in die technische Stromrichtung, die gekrümmten Finger zeigen die Richtung der Feldlinien. Im Metalldraht wandern die Elektronen entgegen der technischen Stromrichtung, die Regel nutzt aber diese. Kehrt der Strom um, kehrt auch das Feld um.",
          "In Vakuum oder Luft ist B weit entfernt von den Drahtenden proportional zum Strom und umgekehrt proportional zum Abstand von der Achse. Bei doppeltem Abstand halbiert sich das Feld, es sinkt nicht auf ein Viertel. Die Formel gilt für einen idealisierten langen, geraden Draht; benachbarte Leiter erzeugen zusätzliche Felder.",
        ],
        formula: {
          expression: "B = μ₀I / (2πr)",
          legend:
            "B ist die magnetische Flussdichte in T; I ist der Strom in A; r ist der Abstand zur Drahtachse in m; μ₀ ≈ 1,256637 · 10⁻⁶ H/m (magnetische Feldkonstante).",
          note: "Modell eines langen geraden Drahtes im Vakuum; für Luft genügt dieselbe Näherung.",
        },
        example: {
          title: "Feld in der Nähe eines geraden Leiters",
          given: "I = 10 A, Abstand r = 2 cm. Das Medium ist Luft.",
          steps: [
            "r = 0,020 m; wir setzen μ ≈ μ₀.",
            "B = (4π · 10⁻⁷ · 10)/(2π · 0,020) ≈ 1,0 · 10⁻⁴ T.",
            "1,0 · 10⁻⁴ T = 0,10 mT = 100 µT.",
            "Die Richtung in einem Punkt ergibt sich aus der Rechte-Hand-Regel, nicht aus der Formel.",
          ],
          answer: "B ≈ 0,10 mT im Abstand von 2 cm.",
        },
      },
      {
        id: "electromagnetism-coil",
        title: "2. Spule und Elektromagnet",
        paragraphs: [
          "Wickelt man den Draht zu einer Spule, addieren sich die Felder der einzelnen Windungen und verstärken sich im Inneren. Eine lange Spule nennt man Zylinderspule. In ihr ist das Feld nahezu homogen, außen gleicht das Feldbild dem eines Stabmagneten. Die Spule hat einen Nord- und einen Südpol, die von der Stromrichtung abhängen.",
          "Rechte-Hand-Regel für die Spule: Die gekrümmten Finger zeigen in Stromrichtung der Windungen, der Daumen zeigt in Richtung B im Inneren, also zum Nordpol. Blickt man auf ein Spulenende und fließt der Strom dort gegen den Uhrzeigersinn, ist es der Nordpol. Vertauscht man die Anschlüsse, kehren Strom, Feld und Polung um.",
          "Eine größere Durchflutung Θ = NI bedeutet meist eine stärkere magnetische Wirkung. Ein ferromagnetischer Kern erhöht B deutlich, aber nicht bei jedem Strom linear: Es treten Sättigung und Hysterese auf. Luftspalt, Kernform, Streufluss und Erwärmung der Wicklung beeinflussen einen realen Elektromagneten ebenfalls.",
        ],
        formula: {
          expression: "H ≈ NI/l; B ≈ μ₀μᵣNI/l",
          legend:
            "N ist die Windungszahl; I ist der Strom in A; l ist die Länge der Spule in m; H ist die magnetische Feldstärke in A/m; μᵣ ist die relative Permeabilität.",
          note: "Die Formel für B gilt für eine lange Spule und ein homogenes, lineares Medium. Für Luft ist μᵣ ≈ 1; bei Ferromagnetika hängt μᵣ vom Zustand und vom Feld ab.",
        },
        callout: {
          type: "warning",
          title: "Auch die Spule erwärmt sich",
          text: "Die Wicklung hat einen Widerstand. Die Verluste I²R wachsen quadratisch mit dem Strom. Mehr Spannung und damit mehr Strom stärkt den Elektromagneten, wird aber durch zulässigen Strom, Temperatur und Betriebsart begrenzt.",
        },
      },
      {
        id: "electromagnetism-induction",
        title: "3. Flussänderung erzeugt eine Induktionsspannung",
        paragraphs: [
          "Induktion tritt auf, wenn sich der mit einer Leiterschleife verkettete magnetische Fluss zeitlich ändert. Das geschieht, wenn man den Magneten zur Spule bewegt, den Strom einer Nachbarspule ändert, die Schleife dreht oder ihre Fläche ändert. Ein starker, aber konstanter Fluss durch eine ruhende Schleife induziert keine Spannung.",
          "Das Induktionsgesetz verknüpft die Induktionsspannung mit der Änderungsrate der Flussverkettung. Durchsetzt derselbe Fluss Φ alle N Windungen, ist Ψ = NΦ. Je mehr Windungen und je schneller die Änderung, desto größer ist der Betrag der Spannung. Für ein Zeitintervall berechnet man meist den Mittelwert, der Momentanwert erfordert die Ableitung nach der Zeit.",
          "Die Induktionsspannung kann Ladungen in Bewegung setzen. Bei offener Spule liegt sie an den Klemmen an, obwohl kein Strom fließt. Ein Strom entsteht erst im geschlossenen Kreis und hängt vom Gesamtwiderstand ab. Die Aussage „Induktion erzeugt immer einen Strom“ ist daher unvollständig.",
        ],
        formula: {
          expression: "𝓔 = −dΨ/dt = −N · dΦ/dt; |𝓔av| = N |ΔΦ| /Δt",
          legend:
            "𝓔 ist die Induktionsspannung in V; Ψ ist die Flussverkettung in Wb; Φ ist der Fluss durch eine Windung in Wb; N ist die Windungszahl; t ist die Zeit in s.",
          note: "Der Faktor N gilt, wenn alle Windungen vom selben Fluss durchsetzt werden. Das Minuszeichen drückt die Lenzsche Regel aus und hängt von der gewählten Umlaufrichtung und Normalen ab.",
        },
        example: {
          title: "Mittlere Induktionsspannung einer Spule",
          given:
            "N = 200. Der Fluss durch jede Windung sinkt in 0,10 s von 3 mWb auf 1 mWb.",
          steps: [
            "ΔΦ = 0,001 − 0,003 = −0,002 Wb.",
            "Mittlere Änderungsrate des Flusses: ΔΦ/Δt = −0,002/0,10 = −0,020 Wb/s.",
            "Betrag der mittleren Induktionsspannung: |𝓔av| = 200 · 0,020 = 4 V.",
            "Für die Polarität müssen Sie zusätzlich die Richtung des ursprünglichen Feldes und den Wickelsinn kennen.",
          ],
          answer: "Der Betrag der mittleren Induktionsspannung beträgt 4 V.",
        },
      },
      {
        id: "electromagnetism-lenz",
        title: "4. Lenzsche Regel und Energieerhaltung",
        paragraphs: [
          "Lenzsche Regel: Der induzierte Strom ist so gerichtet, dass seine magnetische Wirkung der Flussänderung entgegenwirkt, die ihn verursacht. Sie wirkt nicht zwingend dem ursprünglichen Feld entgegen. Nimmt der Fluss zu, schwächt das induzierte Feld den Anstieg. Nimmt er ab, stützt es den Fluss.",
          "Nähert man den Nordpol eines Magneten einer geschlossenen Spule, wird deren nahes Ende zum Nordpol und stößt den Magneten ab. Entfernt man ihn, wird es zum Südpol und zieht den Magneten an. In beiden Fällen ist Arbeit nötig. Sie wird in elektrische Energie und dann etwa in Wärme umgewandelt. Ohne diese Gegenwirkung gäbe es Energie umsonst.",
          "Gehen Sie zur Richtungsbestimmung schrittweise vor: Richtung des äußeren Flusses festlegen, Zu- oder Abnahme bestimmen, Richtung des induzierten Feldes wählen und mit der Rechte-Hand-Regel den Strom ermitteln. Ein schnelles Raten des Uhrzeigersinns führt oft zu Fehlern, weil er vom Blickwinkel abhängt.",
        ],
        callout: {
          type: "tip",
          title: "Merksatz zur Kontrolle",
          text: "Die Flussänderung wird bekämpft. Nimmt das äußere Feld ab, kann das induzierte Feld dieselbe Richtung haben. Das entspricht genau der Lenzschen Regel.",
        },
      },
      {
        id: "electromagnetism-self-induction",
        title: "5. Selbstinduktion und Energie der Spule",
        paragraphs: [
          "Der Spulenstrom erzeugt ein eigenes Feld. Ändert sich der Strom, ändert sich die Flussverkettung der Spule selbst: Es entsteht eine Selbstinduktionsspannung. Bei einer linearen Spule gilt Ψ = LI mit der Induktivität L. Die Spule widersetzt sich einer schnellen Stromänderung, so wie ein Kondensator einer schnellen Spannungsänderung.",
          "Beim Einschalten eines RL-Kreises steigt der Strom allmählich an. Beim Abschalten will die Spule den Strom beibehalten und kann eine sehr hohe Spannung erzeugen, wenn der Strom keinen anderen Weg hat. Das erklärt Funken an Kontakten und gefährliche Spannungsspitzen an Relais und Elektromagneten. In Gleichstromkreisen setzt man oft eine Freilaufdiode oder eine passende Schutzbeschaltung ein.",
          "Eine ideale lineare Spule speichert im Magnetfeld die Energie W = LI²/2. Eine reale Spule hat Drahtwiderstand und Kernverluste. Bei konstantem Strom fällt am idealen induktiven Anteil keine Spannung ab, der Kupferdraht erwärmt sich aber weiter. Eine gesättigte Spule lässt sich nicht mit einem konstanten L beschreiben.",
        ],
        formula: {
          expression: "𝓔self = −L · dI/dt; W = ½LI²; τRL = L/R",
          legend:
            "L ist die Induktivität in Henry (H); I ist der Strom in A; W ist die Energie in J; R ist der gesamte Reihenwiderstand in Ohm; τRL ist die Zeitkonstante in s.",
          note: "Die Formeln mit konstantem L gelten für eine lineare Spule. Für die Spannung an einer idealen Induktivität gilt uL = L dI/dt; das Vorzeichen der Induktionsspannung wirkt der Stromänderung entgegen.",
        },
        example: {
          title: "Induktionsspannung beim schnellen Abschalten",
          given:
            "L = 0,20 H. Der Strom sinkt in 0,010 s von 2 A auf 0. Gesucht: Betrag der mittleren Selbstinduktionsspannung.",
          steps: [
            "ΔI = 0 − 2 = −2 A.",
            "ΔI/Δt = −2/0,010 = −200 A/s.",
            "|𝓔av| = L |ΔI/Δt| = 0,20 · 200 = 40 V.",
            "Vor dem Abschalten betrug die Feldenergie W = 0,5 · 0,20 · 2² = 0,40 J; sie muss abgebaut oder zurückgespeist werden.",
          ],
          answer:
            "Der Betrag der mittleren Spannung beträgt 40 V; bei noch schnellerer Stromänderung wäre er höher.",
        },
      },
      {
        id: "electromagnetism-machines",
        title: "6. Motor, Generator und Transformator",
        paragraphs: [
          "Ein Elektromotor nutzt die Kraft auf stromdurchflossene Leiter im Magnetfeld. An gegenüberliegenden Seiten einer Schleife wirken entgegengesetzte Kräfte, die ein Drehmoment erzeugen. Damit die Drehung anhält, wird der Strom umgeschaltet oder ein Drehfeld erzeugt. Die Energie stammt aus einer elektrischen Quelle und wird mit Verlusten in mechanische Energie umgewandelt.",
          "Der Generator arbeitet umgekehrt: Mechanische Bewegung ändert die Flussverkettung der Wicklung und induziert eine Spannung. Schließt man einen Verbraucher an, erzeugt der Strom ein Gegenmoment, sodass mechanische Leistung zugeführt werden muss. Bei gleicher Drehzahl ist ein unbelasteter Generator leichter zu drehen als ein belasteter.",
          "Ein Transformator überträgt Energie zwischen Wicklungen über einen sich ändernden magnetischen Fluss. Im idealen Modell entspricht das Spannungsverhältnis dem Windungszahlverhältnis, die Ströme verhalten sich umgekehrt, die Leistung bleibt gleich. Ein Transformator darf nicht an Gleichspannung betrieben werden: Der Fluss ändert sich nach dem Einschalten nicht mehr, und die Primärwicklung kann durch zu hohen Strom und Sättigung überhitzen.",
        ],
        formula: {
          expression: "U₂/U₁ ≈ N₂/N₁; I₂/I₁ ≈ N₁/N₂; U₁I₁ ≈ U₂I₂",
          legend:
            "Die Indizes 1 und 2 stehen für Primär- und Sekundärwicklung; U und I sind Effektivwerte von Spannung und Strom des idealen Transformators.",
          note: "Die Beziehungen gelten für ein idealisiertes Modell im Wechselstrombetrieb. Ein realer Transformator hat Verluste, Magnetisierungsstrom sowie Grenzen bei Frequenz, Spannung und Last.",
        },
        callout: {
          type: "insight",
          title: "Ein System, zwei Richtungen der Energieübertragung",
          text: "Viele elektrische Maschinen arbeiten als Motor und als Generator. Die Betriebsart bestimmt die Richtung des Energieflusses, nicht der Name des Geräts.",
        },
      },
    ],
    terms: [
      {
        term: "Zylinderspule / Solenoid",
        german: "Zylinderspule / Solenoid",
        symbol: "—",
        unit: "—",
        definition:
          "Lange zylindrische Spule, in deren Inneren das Feld als nahezu homogen gelten kann.",
      },
      {
        term: "Windungszahl",
        german: "Windungszahl",
        symbol: "N",
        unit: "dimensionslos",
        definition:
          "Anzahl der Drahtwindungen einer Spule. N ist eine reine Zahl; das Wort Windungen dient zur Verdeutlichung und ist keine eigene SI-Einheit.",
      },
      {
        term: "Elektromagnetische Induktion",
        german: "Elektromagnetische Induktion",
        symbol: "𝓔",
        unit: "V",
        definition:
          "Entstehung einer Spannung durch Änderung der Flussverkettung eines Stromkreises.",
      },
      {
        term: "Flussverkettung",
        german: "Flussverkettung",
        symbol: "Ψ",
        unit: "Wb",
        definition:
          "Summe der magnetischen Flüsse durch die Windungen einer Wicklung; bei gleichem Fluss Ψ = NΦ.",
      },
      {
        term: "Lenzsche Regel",
        german: "Lenzsche Regel",
        symbol: "−",
        unit: "—",
        definition:
          "Der induzierte Strom wirkt mit seinem Magnetfeld der Flussänderung entgegen, die ihn verursacht.",
      },
      {
        term: "Induktivität",
        german: "Induktivität",
        symbol: "L",
        unit: "H",
        definition:
          "Bei einer linearen Spule der Proportionalitätsfaktor zwischen Flussverkettung und Strom: Ψ = LI.",
      },
      {
        term: "Selbstinduktion",
        german: "Selbstinduktion",
        symbol: "𝓔_ind",
        unit: "V",
        definition:
          "Entstehung einer Spannung im Stromkreis durch Änderung des eigenen Stroms und Flusses.",
      },
      {
        term: "Elektromagnet",
        german: "Elektromagnet",
        symbol: "NI",
        unit: "A",
        definition:
          "Gerät, bei dem der Strom in einer Wicklung, oft mit Eisenkern, ein Magnetfeld erzeugt.",
      },
    ],
    summary: [
      "Um einen geraden Draht ist das Feld kreisförmig; die Richtung folgt aus der Rechte-Hand-Regel.",
      "Die Wirkung der Spule hängt von der Durchflutung NI ab; ein Kern verstärkt das Feld, geht aber in Sättigung.",
      "Induktionsgesetz: Eine Änderung der Flussverkettung induziert eine Spannung, 𝓔 = −dΨ/dt.",
      "Nach der Lenzschen Regel wirkt die induzierte Wirkung der Flussänderung entgegen.",
      "Selbstinduktion wirkt Stromänderungen entgegen. Die lineare Spule speichert die Energie LI²/2.",
      "Der Motor wandelt elektrische in mechanische Energie, der Generator mechanische in elektrische.",
    ],
    quiz: [
      {
        id: "electromagnetism-1",
        type: "choice",
        question:
          "Wie bestimmt man die Richtung des Magnetfeldes um einen geraden stromdurchflossenen Draht?",
        options: [
          "Linken Daumen in Richtung der Elektronen halten",
          "Daumen der rechten Hand in Stromrichtung; die gekrümmten Finger zeigen B",
          "Das Feld verläuft immer entlang des Drahtes",
          "Das Feld zeigt immer radial vom Draht weg",
        ],
        answer: 1,
        explanation:
          "Für einen geraden Draht gilt die Rechte-Hand-Regel: Der Daumen zeigt in die technische Stromrichtung, die gekrümmten Finger zeigen die Feldrichtung.",
      },
      {
        id: "electromagnetism-2",
        type: "numeric",
        question:
          "Die Spule hat 100 Windungen. Der Fluss durch jede Windung ändert sich in 0,10 s gleichmäßig um 0,002 Wb. Wie groß ist der Betrag der mittleren Induktionsspannung?",
        answer: 2,
        unit: "V",
        tolerance: 0.01,
        explanation: "|𝓔av| = N|ΔΦ|/Δt = 100 · 0,002/0,10 = 2 V.",
      },
      {
        id: "electromagnetism-3",
        type: "choice",
        question:
          "Der äußere magnetische Fluss durch eine geschlossene Spule nimmt ab. Welche Richtung hat das Feld des induzierten Stroms?",
        options: [
          "Es steht senkrecht zum ursprünglichen Feld",
          "Es ist immer dem ursprünglichen Feld entgegengerichtet",
          "Es versucht, den ursprünglichen Fluss aufrechtzuerhalten",
          "Bei abnehmendem Fluss entsteht kein Feld",
        ],
        answer: 2,
        explanation:
          "Die Lenzsche Regel wirkt der Flussänderung entgegen. Nimmt der äußere Fluss ab, stützt das induzierte Feld den ursprünglichen Fluss.",
      },
      {
        id: "electromagnetism-4",
        type: "numeric",
        question:
          "Eine lineare Spule hat L = 0,50 H und führt I = 2 A. Welche Energie ist in ihrem Feld gespeichert?",
        answer: 1,
        unit: "J",
        tolerance: 0.01,
        explanation: "W = ½LI² = 0,5 · 0,50 · 2² = 1 J.",
      },
      {
        id: "electromagnetism-5",
        type: "choice",
        question:
          "Warum kann beim Öffnen eines Spulenstromkreises eine hohe Spannungsspitze entstehen?",
        options: [
          "Die Spule will den Strom beibehalten und erzeugt eine Selbstinduktionsspannung",
          "Der Widerstand des Kupferdrahtes wird immer null",
          "Der magnetische Fluss muss beim Abschalten sofort unendlich werden",
          "Das geht nur mit einem Dauermagneten",
        ],
        answer: 0,
        explanation:
          "Ein schneller Stromabfall erzeugt eine Selbstinduktionsspannung mit dem Betrag von etwa L|ΔI/Δt|. Die gespeicherte Energie muss abgebaut werden, daher ist eine geeignete Schutzbeschaltung nötig.",
      },
    ],
  },
  {
    id: "magnetic-quantities",
    number: 13,
    title: "Magnetische Größen",
    german: "Magnetische Größen",
    chapter: "5.5",
    category: "magnetism",
    duration: 37,
    description:
      "B, H, Φ, Permeabilität und magnetischer Widerstand: ein zusammenhängendes Größensystem zur Berechnung von Spulen und Magnetkreisen.",
    objectives: [
      "Unterscheiden Sie B, H, Φ und Flussverkettung nach Bedeutung, Einheit und Anwendung.",
      "Berechnen Sie das Feld in einem linearen Magnetkreis und den Fluss durch eine Fläche.",
      "Erklären Sie die Wirkung von Luftspalt, Sättigung und Hysterese im realen Magnetkreis.",
    ],
    sections: [
      {
        id: "magnetic-quantities-map",
        title: "1. B, H und Φ: drei verschiedene Größen",
        paragraphs: [
          "Die magnetische Flussdichte B beschreibt das Magnetfeld in einem Punkt und seine Wirkung auf bewegte Ladungen und stromdurchflossene Leiter. Sie ist ein Vektor in Tesla. Die magnetische Feldstärke H ist ebenfalls ein Vektor, gemessen in Ampere pro Meter. Sie beschreibt die magnetisierende Wirkung der freien Ströme und hängt von der Geometrie des Magnetkreises ab.",
          "Der magnetische Fluss Φ gilt nicht für einen Punkt, sondern für eine Fläche. Er wird in Weber gemessen und berücksichtigt die Normalkomponente von B über die Fläche. Die Flussverkettung Ψ berücksichtigt zusätzlich die Windungen: Durchsetzt derselbe Fluss alle N Windungen, gilt Ψ = NΦ. Die Änderungsrate von Ψ bestimmt die Induktionsspannung der Spule.",
          "Diese Größen sind nicht austauschbar. Zwei Kerne mit gleichem B haben bei verschiedenen Querschnitten unterschiedliche Φ. Dasselbe H ergibt in Luft und in einem Ferromagneten sehr verschiedene B. Bei gleicher Flussänderung ergeben Spulen mit unterschiedlichem N verschiedene Flussverkettungen und Induktionsspannungen.",
        ],
        formula: {
          expression: "B: T; H: A/m; Φ: Wb; Ψ = NΦ: Wb",
          legend:
            "B ist die magnetische Flussdichte; H ist die magnetische Feldstärke; Φ ist der magnetische Fluss; Ψ ist die Flussverkettung.",
          note: "Die Windungszahl ist im SI-System dimensionslos; das Wort „Windung“ wird nur zur Verdeutlichung in Einheiten mitgeführt.",
        },
        callout: {
          type: "tip",
          title: "Eselsbrücke über die Einheiten",
          text: "Tesla gehört zu B in einem Punkt, Weber zum Fluss durch eine Fläche, Ampere pro Meter zu H entlang eines magnetischen Weges. Ist die Einheit der Antwort auf eine Flussfrage Tesla, wurde vermutlich die Fläche vergessen.",
        },
      },
      {
        id: "magnetic-quantities-permeability",
        title: "2. Permeabilität und Grenzen des linearen Modells",
        paragraphs: [
          "Im Vakuum gilt B = μ₀H. In einem homogenen, linearen, isotropen Medium gilt B = μH = μ₀μᵣH. Dabei ist μ die Permeabilität in Henry pro Meter und μᵣ die relative Permeabilität ohne Einheit. Für Luft ist μᵣ nahezu 1, daher rechnet man eine Luftspule meist wie eine Spule im Vakuum.",
          "Ein ferromagnetischer Kern hat nicht in allen Betriebszuständen ein konstantes μᵣ. B hängt nichtlinear von H ab, außerdem von Magnetisierungsvorgeschichte, Temperatur und Frequenz. In der Sättigung bewirkt ein größeres H nur noch einen kleinen Zuwachs von B. Mehr Spulenstrom erhöht dann vor allem die Erwärmung, kaum noch die Flussdichte.",
          "Allgemein gilt B = μ₀(H + M) mit der Magnetisierung M in A/m. Das Feld hängt also von den freien Strömen (H) und von der magnetischen Antwort des Stoffes ab. In Schulaufgaben ist μᵣ oft als konstant vorgegeben; dann darf man innerhalb dieses Modells damit rechnen.",
        ],
        formula: {
          expression:
            "B = μ₀(H + M); in einem linearen Medium: B = μ₀μᵣH; μ = μ₀μᵣ",
          legend:
            "μ₀ ≈ 1,256637 10⁻⁶ H/m; μᵣ ist die relative Permeabilität; M ist die Magnetisierung in A/m.",
          note: "B und H sind nur im isotropen Modell parallel. Für einen nichtlinearen Ferromagneten nutzt man die Kennlinie B(H) statt eines festen μᵣ.",
        },
        example: {
          title: "Feld in Luft",
          given:
            "In einem Luftbereich ist H = 1000 A/m. Gesucht: B mit μᵣ = 1.",
          steps: [
            "Wir nutzen B = μ₀H.",
            "B ≈ 1,256637 · 10⁻⁶ · 1000 = 1,256637 · 10⁻³ T.",
            "Umrechnung in Millitesla: B ≈ 1,26 mT.",
          ],
          answer:
            "B ≈ 1,26 mT. H bleibt 1000 A/m: Es sind verschiedene Größen.",
        },
      },
      {
        id: "magnetic-quantities-flux",
        title: "3. Von der Flussdichte zum Fluss und zur Flussverkettung",
        paragraphs: [
          "In einem Kern mit nahezu homogener Flussdichte und einem Querschnitt senkrecht zu den Feldlinien ist der Fluss BA. Wird der Querschnitt kleiner und der Fluss bleibt gleich, steigt B im engen Teil. Dort tritt zuerst Sättigung ein. Im einfachen unverzweigten Magnetkreis ist der Fluss ohne Streuung in allen Abschnitten gleich.",
          "Bei einer geneigten Fläche projiziert man sie auf eine Ebene senkrecht zum Feld. Gleichwertig nutzt man die Normalkomponente von B. In Φ = BA cos α wird α zur Flächennormalen gemessen. Dreht man die gewählte Normale um, wechselt der Fluss das Vorzeichen, das Feld bleibt gleich.",
          "Bei der Induktion kommt die Windungszahl zum Fluss hinzu. Beträgt der Fluss durch jede von 500 Windungen 0,001 Wb, ist die Flussverkettung 0,5 Wb·Windung. Im Kern liegen aber nicht 0,5 Wb vor: Der Fluss durch den Querschnitt bleibt 0,001 Wb. Der Unterschied ist wichtig für Induktionsspannung und Induktivität.",
        ],
        formula: {
          expression: "Φ = BA cos α; Ψ = NΦ; für eine lineare Spule L = Ψ/I",
          legend:
            "A ist die Fläche in m²; α ist der Winkel zwischen B und der Normalen; N ist die Windungszahl; I ist der Strom in A; L ist die Induktivität in H.",
          note: "Ist das Feld inhomogen, berechnet man den Fluss durch Integration von B über die Fläche. Sind die Flüsse der Windungen verschieden, addiert man sie einzeln.",
        },
        example: {
          title: "Vom Querschnitt zur Induktivität",
          given:
            "B = 0,80 T in einem homogenen Abschnitt A = 4 cm². N = 250 Windungen, I = 2 A. Annahme: lineares Modell und gleicher Fluss in allen Windungen.",
          steps: [
            "A = 4 · 10⁻⁴ m² = 0,0004 m². Das Feld steht senkrecht zum Querschnitt, cos α = 1.",
            "Φ = BA = 0,80 · 0,0004 = 0,00032 Wb = 0,32 mWb.",
            "Ψ = NΦ = 250 · 0,00032 = 0,080 Wb Windung.",
            "L = Ψ/I = 0,080/2 = 0,040 H = 40 mH.",
          ],
          answer:
            "Φ = 0,32 mWb; Ψ = 0,080 Wb; L = 40 mH im angenommenen linearen Modell.",
        },
      },
      {
        id: "magnetic-quantities-circuit",
        title: "4. Durchflutung und magnetischer Widerstand",
        paragraphs: [
          "Eine Wicklung mit N Windungen und dem Strom I erzeugt die Durchflutung Θ = NI (auch magnetische Spannung oder magnetomotorische Kraft genannt). Der Begriff ist historisch: Es ist keine mechanische Kraft in Newton. Die Einheit ist Ampere, oft als Amperewindung angegeben. Für einen geschlossenen Weg setzt das Durchflutungsgesetz die Umlaufspannung von H mit dem umfassten Strom gleich: ∮H · dl = NI.",
          "Für einen homogenen magnetischen Weg der Länge l mit konstantem Querschnitt A gilt der magnetische Widerstand ℛm = l/(μA). Dann ist Φ = Θ/ℛm. Die Analogie zum Ohmschen Gesetz hilft beim Rechnen: Der Fluss entspricht dem Strom, die Durchflutung der Spannung. Der Fluss ist aber kein Stoffstrom, und der magnetische Widerstand verbraucht keine Energie wie ein ohmscher Widerstand.",
          "In hintereinanderliegenden Abschnitten ohne nennenswerte Streuung ist der Fluss gleich, und die magnetischen Spannungsabfälle addieren sich: NI = ΣHᵢlᵢ. Magnetische Widerstände lassen sich addieren, wenn für jeden Abschnitt die Permeabilität bekannt ist. Bei Ferromagnetika rechnet man oft iterativ: Fluss annehmen, B bestimmen, H aus der B(H)-Kennlinie ablesen und die nötige Durchflutung prüfen.",
        ],
        formula: {
          expression: "Θ = NI; ℛm = l/(μA); Φ = Θ/ℛm; NI = ΣHᵢlᵢ",
          legend:
            "Θ ist die Durchflutung in A; ℛm ist der magnetische Widerstand in A/Wb, also der Kehrwert des magnetischen Leitwerts; l ist die Weglänge in m; A ist der Querschnitt in m².",
          note: "Das Modell mit konzentrierten Größen setzt einen bekannten Flussweg und kleine Streuung und Inhomogenitäten voraus. Die Permeabilität gilt für den jeweiligen Betriebspunkt.",
        },
        callout: {
          type: "insight",
          title: "Die nützliche Analogie hat Grenzen",
          text: "Ein großer magnetischer Widerstand verringert den Fluss bei gleichem NI. Es entsteht aber keine Wärme Φ²ℛm. Reale magnetische Verluste entstehen durch Hysterese und Wirbelströme bei wechselndem Feld.",
        },
      },
      {
        id: "magnetic-quantities-gap",
        title: "5. Warum ein kleiner Luftspalt so wichtig ist",
        paragraphs: [
          "Luft hat eine viel kleinere Permeabilität als ein Ferromagnet vor der Sättigung. Schon ein kurzer Luftspalt kann daher den größten Teil des magnetischen Widerstands des Kreises ausmachen. Bei etwa gleichem B in Kern und Spalt braucht der Spalt die magnetische Feldstärke B/μ₀ und damit eine große magnetische Spannung.",
          "Bei einem Magnetkreis mit Luftspalt addiert man die Durchflutung für Kern und Luft. Ist der Kernanteil vernachlässigbar, gilt NI ≈ Bg/μ₀, mit g als Gesamtlänge aller Luftspalte. Bei zwei Spalten zu je 0,5 mm setzt man 1 mm ein. Die Näherung vernachlässigt Randstreuung und Streufluss.",
          "Ein Luftspalt ist nicht immer ein Nachteil. In Speicherdrosseln speichert er Energie und verringert den Einfluss der Kernnichtlinearität auf die Induktivität. Ein großer Teil der Energie liegt im Spaltfeld. Bei Relais und Elektromagneten bestimmt der Spalt dagegen stark den nötigen Strom und die Anzugskraft.",
        ],
        formula: {
          expression:
            "NI = H_K l_K + (B/μ₀)g; wenn der Kern vernachlässigt wird: NI ≈ Bg/μ₀",
          legend:
            "g ist die Gesamtlänge der Luftspalte in Metern (m). l_K ist die Weglänge im Kern in Metern (m), H_K die magnetische Feldstärke im Kern in Ampere pro Meter (A/m). B ist die magnetische Flussdichte in Tesla (T), N die Windungszahl ohne Einheit und I die Stromstärke in Ampere (A). μ₀ ist die magnetische Feldkonstante.",
          note: "Vorausgesetzt werden annähernd gleicher Querschnitt, gleicher Fluss sowie geringe Streuung und Randeffekte. Für eine genaue Auslegung berücksichtigt man diese Effekte gesondert.",
        },
        example: {
          title: "Durchflutung für einen Luftspalt",
          given:
            "Gefordert: B = 0,50 T. Gesamtspalt g = 1 mm, N = 500 Windungen. Der magnetische Widerstand des Kerns und Randeffekte werden vernachlässigt.",
          steps: [
            "g = 0,001 m.",
            "Erforderliche Durchflutung: NI ≈ 0,50 · 0,001 / (1,256637 · 10⁻⁶) ≈ 398 A.",
            "Strom I = 398/500 ≈ 0,796 A.",
            "In einer realen Schaltung braucht auch der Kern Durchflutung, und Streuung und Randeffekte verändern das Ergebnis.",
          ],
          answer:
            "Das vereinfachte Modell erfordert einen Strom von etwa 0,80 A.",
        },
      },
      {
        id: "magnetic-quantities-hysteresis",
        title: "6. Hysterese, Verluste und Feldenergie",
        paragraphs: [
          "Variiert man H eines Ferromagneten zyklisch, bildet B(H) meist eine Hystereseschleife. Kehrt H auf null zurück, bleibt die Remanenzflussdichte Br bestehen. Um B wieder auf null zu bringen, braucht man die entgegengerichtete Koerzitivfeldstärke Hc. Die Werte hängen vom Werkstoff und von den Bedingungen ab.",
          "Die Fläche der Schleife B(H) entspricht der Hystereseverlustenergie je Zyklus und Volumeneinheit. Im leitenden Kern entstehen durch das Wechselfeld zusätzlich Wirbelströme und Wärme. Man senkt diese Verluste mit isolierten dünnen Elektroblechen, Ferriten und anderen geeigneten Werkstoffen. Die Wahl hängt von Frequenz und zulässiger Flussdichte ab.",
          "In einem linearen Medium beträgt die Energiedichte des Magnetfeldes w = BH/2. In Vakuum und Luft kann man B²/(2μ₀) schreiben. Für eine Spule ergibt das W = LI²/2. Bei nichtlinearen und hysteresebehafteten Werkstoffen gelten ein konstantes μ und die Formel BH/2 nicht ohne Einschränkung: Magnetisierungsweg und Verluste spielen eine Rolle.",
        ],
        formula: {
          expression:
            "Für ein lineares Medium: w = ½BH = B²/(2μ); Wcoils = ½LI²",
          legend:
            "w ist die Energiedichte in J/m³; W ist die Gesamtenergie in J; μ ist die Permeabilität; Br ist die Remanenzflussdichte in T; Hc ist die Koerzitivfeldstärke in A/m.",
          note: "Die Formeln mit ½ gelten für lineare Zusammenhänge. Die Verlustenergie je Zyklus und Volumeneinheit entspricht der Schleifenfläche ∮H dB.",
        },
        callout: {
          type: "tip",
          title: "Vorgehen bei der Berechnung eines Magnetkreises",
          text: "Zeichnen Sie den Flussweg und markieren Sie die Luftspalte. Rechnen Sie Längen und Flächen in SI-Einheiten um. Bestimmen Sie B = Φ/A in jedem Abschnitt. Entnehmen Sie H dem linearen Modell oder der Werkstoffkennlinie. Addieren Sie Hl und vergleichen Sie mit NI. Prüfen Sie zuletzt Sättigung, Erwärmung und die Grenzen der Näherungen.",
        },
      },
    ],
    terms: [
      {
        term: "Magnetische Feldstärke",
        german: "Magnetische Feldstärke",
        symbol: "H",
        unit: "A/m",
        definition:
          "Vektorgröße zur Beschreibung der magnetisierenden Wirkung freier Ströme und zur Berechnung von Magnetkreisen.",
      },
      {
        term: "Magnetische Permeabilität",
        german: "Magnetische Permeabilität",
        symbol: "μ",
        unit: "H/m",
        definition:
          "Im linearen isotropen Medium der Faktor zwischen H und B: B = μH; μ = μ₀μᵣ.",
      },
      {
        term: "Magnetische Durchflutung",
        german: "Magnetische Durchflutung",
        symbol: "Θ",
        unit: "A",
        definition:
          "Gesamte Amperewindungszahl, die den Magnetkreis magnetisiert; für eine Wicklung Θ = NI.",
      },
      {
        term: "Magnetischer Widerstand / Reluktanz",
        german: "Magnetischer Widerstand / Reluktanz",
        symbol: "ℛm",
        unit: "A/Wb",
        definition:
          "Im linearen Magnetkreis das Verhältnis von Durchflutung zu Fluss: ℛm = Θ/Φ = l/(μA).",
      },
      {
        term: "Magnetische Sättigung",
        german: "Magnetische Sättigung",
        symbol: "B",
        unit: "T",
        definition:
          "Bereich der Kennlinie eines Ferromagneten, in dem ein größeres H nur noch einen kleinen Zuwachs von B bewirkt.",
      },
      {
        term: "Remanenzflussdichte",
        german: "Remanenzflussdichte",
        symbol: "Br",
        unit: "T",
        definition:
          "Wert der magnetischen Flussdichte, der nach der Magnetisierung bei H = 0 bestehen bleibt.",
      },
      {
        term: "Koerzitivfeldstärke",
        german: "Koerzitivfeldstärke",
        symbol: "Hc",
        unit: "A/m",
        definition:
          "Betrag der entgegengerichteten magnetischen Feldstärke, die B auf dem betreffenden Ast der Hystereseschleife auf null bringt.",
      },
      {
        term: "Hysterese",
        german: "Hysterese",
        symbol: "B(H)",
        unit: "—",
        definition:
          "Abhängigkeit des magnetischen Zustands von der Vorgeschichte; bei zyklischer Ummagnetisierung zeigt sie sich als B(H)-Schleife und als Verluste.",
      },
    ],
    summary: [
      "B ist die magnetische Flussdichte in T, H die magnetische Feldstärke in A/m, Φ der magnetische Fluss in Wb, Ψ die Flussverkettung.",
      "B = μ₀μᵣH gilt im linearen Medium; die Permeabilität eines Ferromagneten ist keine allgemeine Konstante.",
      "Der Fluss durch einen homogenen, senkrechten Querschnitt ist BA; die Flussverkettung bei gleichem Fluss ist NΦ.",
      "Durchflutung Θ = NI; im einfachen linearen Kreis gilt Φ = Θ/ℛm mit ℛm = l/(μA).",
      "Der Luftspalt kann den Großteil der nötigen Durchflutung und der gespeicherten Energie bestimmen.",
      "Sättigung, Hysterese und Wirbelströme begrenzen die Gültigkeit idealer Modelle.",
    ],
    quiz: [
      {
        id: "magnetic-quantities-1",
        type: "choice",
        question: "Welches Paar aus Größe und Einheit ist richtig?",
        options: [
          "Magnetischer Fluss Φ – Tesla",
          "Magnetische Feldstärke H – Ampere pro Meter",
          "Magnetische Flussdichte B – Weber",
          "Relative Permeabilität μᵣ – Henry",
        ],
        answer: 1,
        explanation:
          "H wird in A/m gemessen. B wird in T gemessen, Φ in Wb, und μᵣ ist dimensionslos.",
      },
      {
        id: "magnetic-quantities-2",
        type: "numeric",
        question:
          "Die homogene Flussdichte B = 0,50 T steht senkrecht zum Kernquerschnitt A = 6 cm². Wie groß ist der magnetische Fluss in Milliweber?",
        answer: 0.3,
        unit: "mWb",
        tolerance: 0.005,
        explanation:
          "6 cm² = 6 · 10⁻⁴ m². Φ = BA = 0,50 · 0,0006 = 0,0003 Wb = 0,30 mWb.",
      },
      {
        id: "magnetic-quantities-3",
        type: "choice",
        question:
          "Warum darf man für einen ferromagnetischen Kern nicht bei jedem Strom dasselbe μᵣ verwenden?",
        options: [
          "Die Permeabilität ist immer null",
          "Die Windungszahl ändert sich automatisch mit dem Strom",
          "Weber und Tesla sind dieselbe Einheit",
          "Es gibt Nichtlinearität, Sättigung und Abhängigkeit von der Vorgeschichte",
        ],
        answer: 3,
        explanation:
          "Bei Ferromagneten ist B(H) meist nichtlinear und zeigt Hysterese. Ein konstantes μᵣ ist nur eine Näherung für einen bestimmten Betriebspunkt.",
      },
      {
        id: "magnetic-quantities-4",
        type: "numeric",
        question:
          "Die Spule hat 400 Windungen und führt 0,50 A. Wie groß ist die Durchflutung Θ?",
        answer: 200,
        unit: "A",
        tolerance: 0.5,
        explanation:
          "Θ = NI = 400 · 0,50 = 200 A. Das ist keine mechanische Kraft in Newton.",
      },
      {
        id: "magnetic-quantities-5",
        type: "choice",
        question:
          "Warum kann ein kleiner Luftspalt die erforderliche Durchflutung stark erhöhen?",
        options: [
          "Die Permeabilität von Luft ist klein gegenüber der des ungesättigten Kerns",
          "In Luft ist ein magnetischer Fluss grundsätzlich unmöglich",
          "Der Spalt erhöht immer die Windungszahl",
          "In Luft haben B und H dieselben SI-Zahlenwerte",
        ],
        answer: 0,
        explanation:
          "Magnetischer Widerstand ℛm = l/(μA). In Luft ist μ ≈ μ₀, daher kann schon ein kurzer Spalt einen großen magnetischen Widerstand haben und eine hohe magnetische Spannung Hl erfordern.",
      },
    ],
  },
];
