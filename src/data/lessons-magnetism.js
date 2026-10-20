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
      "Wie ein elektrisches Feld Energie speichert, wovon die Kapazität abhängt und was passiert, wenn ein Kondensator geladen und entladen wird.",
    objectives: [
      "Setzen Sie Ladung, Spannung und Kapazität in Beziehung und berechnen Sie Kondensatorverbindungen.",
      "Erklären Sie das Laden und Entladen über einen Widerstand mithilfe der RC-Zeitkonstante.",
      "Berechnen Sie die gespeicherte Energie und gehen Sie sicher mit geladenen Kondensatoren um.",
    ],
    sections: [
      {
        id: "capacitor-charge",
        title: "1. Zwei Leiter und ein elektrisches Feld zwischen ihnen",
        paragraphs: [
          "Ein Kondensator besteht aus zwei leitenden Platten, die durch einen Isolierspalt getrennt sind. Bei Anschluss an eine Quelle überträgt die Quelle Elektronen von einer Platte auf eine andere: Auf der einen erscheint die Ladung −Q und auf der anderen die Ladung +Q. Beim herkömmlichen Modell bleibt der Kondensator insgesamt elektrisch neutral. Die Energie wird im elektrischen Feld zwischen den Platten gespeichert und nicht in einem kontinuierlichen Ladungsfluss durch den Isolator.",
          "Die elektrische Kapazität C, zu Deutsch Kapazität, gibt an, wie viel Ladung Q jede Platte bei einer gegebenen Spannung U aufnimmt. Große Kapazität bedeutet: Bei gleicher Spannung kann eine größere Ladung geteilt werden. Das Farad ist für viele praktische Teile eine sehr große Einheit, daher werden Mikrofarad, Nanofarad und Picofarad verwendet: 1 µF = 10⁻⁶ F, 1 nF = 10⁻⁹ F, 1 pF = 10⁻¹² F.",
          "Für einen idealen Kondensator mit konstanter Kapazität ist Q = CU. Hier ist Q nicht die Summe der Ladungsmodule der beiden Platten, sondern der Ladungsmodul einer von ihnen. Wenn sich die Spannung nicht ändert, ist der Strom durch einen idealen Kondensator bei stationärem Gleichstrom Null. Wenn sich die Spannung ändert, entsteht Strom: Die Quelle lädt oder entlädt die Platten.",
        ],
        formula: {
          expression: "C = Q / U; Q = C · U; i = C · dU/dt",
          legend:
            "C ist die Kapazität in Farad (F); Q ist der Ladungsmodul einer Platte in Coulomb (C); U - Spannung in Volt (V); i ist der Strom in Ampere (A).",
          note: "Die letzte Formel bezieht sich auf die Konstante C und die gewählte passive Stromrichtung: Positiver Strom tritt mit positiver Spannung in die Platte ein.",
        },
        example: {
          title: "Wie viel Ladung speichert ein Kondensator?",
          given: "C = 470 µF, U = 12 V. Finden Sie Q.",
          steps: [
            "Umrechnung der Kapazität: 470 µF = 470 · 10⁻⁶ F = 0,000470 F.",
            "Wir wenden Q = CU an: Q = 0,000470 · 12 = 0,00564 C.",
            "Wir geben das Ergebnis in Milliculomb an: 0,00564 C = 5,64 mC.",
          ],
          answer: "Die Platten enthalten Ladungen von +5,64 mC und −5,64 mC.",
        },
      },
      {
        id: "capacitor-geometry",
        title: "2. Geometrie, Dielektrikum und zulässige Spannung",
        paragraphs: [
          "Bei einem Flachkondensator nimmt die Kapazität mit der Fläche der Platten A zu und mit zunehmendem Abstand d zwischen ihnen ab. Zwischen großen, nahe beieinander liegenden Platten ist das Feld nahezu gleichmäßig; Randeffekte können vernachlässigt werden, wenn der Spalt deutlich kleiner als die Abmessungen der Platten ist. Das Material zwischen den Platten – das Dielektrikum – wird polarisiert und erhöht in der Regel die Kapazität im Vergleich zum Vakuum.",
          "Die relative Dielektrizitätskonstante εᵣ charakterisiert das Material und ε₀ ist die elektrische Konstante, etwa 8,854 · 10⁻¹² F/m. Bei einer festen Spannung erhöht ein Anstieg von εᵣ die Ladung Q. Wenn der vorgeladene Kondensator von der Quelle getrennt wird, bleibt die Ladung annähernd konstant und die Zugabe eines Dielektrikums verringert die Spannung. Bevor Sie Schlussfolgerungen ziehen, prüfen Sie daher immer, ob der Kondensator an die Quelle angeschlossen ist.",
          "Ein echtes Dielektrikum kann einer begrenzten Feldstärke standhalten. Bei Überschreitung der zulässigen Spannung ist ein Durchschlag möglich: Die Isolierschicht wird leitfähig und das Teil wird beschädigt. Begrenzend ist die Betriebsspannung am Gehäuse, nicht die Spannung, die der Kondensator selbst erzeugt. Elektrolytkondensatoren erfordern normalerweise eine zusätzliche Polarität; Keramik- und Folienteile haben in der Regel keine Polarität.",
        ],
        formula: {
          expression: "C = ε₀ · εᵣ · A / d; E ≈ U / d",
          legend:
            "A ist die Überlappungsfläche der Deckschichten in m²; d – Entfernung in m; εᵣ – relative Dielektrizitätskonstante; E ist die Feldstärke in V/m.",
          note: "Die Formeln beschreiben flache parallele Platten mit einem homogenen Dielektrikum und vernachlässigbaren Kanteneffekten.",
        },
        callout: {
          type: "warning",
          title:
            "Die Spannung bleibt auch nach dem Ausschalten der Stromversorgung bestehen.",
          text: "Der Kondensator kann eine gefährliche Ladung speichern. Verwenden Sie für Trainingsexperimente nur sichere Niederspannung; Entladen Sie sich über einen geeigneten Widerstand und überprüfen Sie die Spannung mit einem Gerät. Schließen Sie einen stark geladenen Kondensator nicht mit einem Schraubendreher kurz und zerlegen Sie keine Netzteile.",
        },
      },
      {
        id: "capacitor-networks",
        title: "3. Parallele und serielle Verbindung",
        paragraphs: [
          "Bei einer Parallelschaltung sind beide Plattenpaare mit denselben zwei Knoten verbunden. Die Spannungen sind gleich, aber die Ladungen addieren sich: Qtot = Q₁ + Q₂. Daher ist die Gesamtkapazität gleich der Summe der Kapazitäten. Diese Verbindung ähnelt einer Vergrößerung der Plattenfläche und wird verwendet, wenn eine größere Kapazität benötigt wird oder unterschiedliche Eigenschaften von Teilen bei unterschiedlichen Frequenzen erforderlich sind.",
          "Wenn zwei zunächst ungeladene ideale Kondensatoren in Reihe geschaltet werden, ist der Zwischenknoten isoliert. Auf den Platten werden identische Lademodule installiert und die Spannungen addiert. Die Gesamtkapazität ist geringer als die kleinste Einzelkapazität. Die Spannung verteilt sich umgekehrt proportional zur Kapazität: Eine kleinere Kapazität empfängt eine größere Spannung.",
          "Bei echten in Reihe geschalteten Kondensatoren unterscheiden sich Leckströme und Toleranzen. Daher kann man nicht automatisch davon ausgehen, dass zwei Kondensatoren mit gleicher Kennzeichnung die Gleichspannung genau halbieren oder die zulässige Spannung sicher verdoppeln. In praktischen Ausführungen wird die Spannungsverteilung überprüft und ggf. Ausgleichswiderstände eingesetzt.",
        ],
        formula: {
          expression:
            "Parallel dazu: Ctot = C₁ + C₂; nacheinander: 1/Ctot = 1/C₁ + 1/C₂",
          legend:
            "C₁, C₂ und Ctot sind separate und gleichwertige Kapazitäten in derselben Einheit.",
          note: "Für zwei Serienkondensatoren ist Ctotal = C₁C₂ / (C₁ + C₂). Bei einer Parallelschaltung ist U gleich, bei einer idealen Reihenschaltung ist das Modul Q gleich.",
        },
        example: {
          title: "Warum werden die Spannungen nicht gleichmäßig aufgeteilt?",
          given:
            "C₁ = 10 µF und C₂ = 20 µF sind in Reihe mit einer 12-V-Quelle geschaltet. Zunächst werden beide entlassen.",
          steps: [
            "Ctotal = 10 20 / (10 + 20) = 6,67 µF.",
            "Gesamtladungsmodul Q = CtotalU = 6,67 μF · 12 V ≈ 80 μC.",
            "U₁ = Q/C₁ = 80/10 = 8 V; U₂ = Q/C₂ = 80/20 = 4 V.",
            "Wir prüfen: 8 V + 4 V = 12 V. Die kleinere Kapazität erhielt eine höhere Spannung.",
          ],
          answer: "Ctotal ≈ 6,67 µF; 10 µF haben 8 V, 20 µF haben 4 V.",
        },
      },
      {
        id: "capacitor-rc",
        title: "4. Laden und Entladen: Warum der RC-Parameter benötigt wird",
        paragraphs: [
          "Verbinden wir den zunächst entladenen Kondensator über einen Widerstand R mit einer idealen Quelle U₀. Unmittelbar nach der Schaltung ist die Spannung am Kondensator Null, sodass der Anfangsstrom gleich U₀/R ist. Wenn sich Ladung ansammelt, steigt die Spannung am Kondensator, die Spannung am Widerstand nimmt ab und der Strom fällt allmählich ab. Die Spannung eines idealen Kondensators kann sich bei einem endlichen Strom nicht abrupt ändern.",
          "Die Zeitkonstante τ = RC bestimmt die Geschwindigkeit des Prozesses. Nach einem τ erreicht die Ladespannung ca. 63,2 % des Endwertes. Bei Entladung in einem τ sinkt er auf 36,8 % des Ausgangswertes. Nach fünf τ ist der Ladevorgang zu ca. 99,3 % abgeschlossen, beim Entladen verbleiben ca. 0,67 %. Mathematisch gesehen erreicht das Exponential seine Grenze nicht in einer endlichen Zeit, für die Praxis reichen jedoch oft fünf Zeitkonstanten aus.",
          "Beim Entladen wird die Quelle ausgeschaltet und der Kondensator überträgt Energie an den Widerstand. Die Richtung des Stroms ändert sich relativ zum Laden. Eine Erhöhung von R oder C verlangsamt beide Prozesse. Bei mehreren Widerständen verwendet τ den Ersatzwiderstand, den der Kondensator im betrachteten Modus sieht, unter Berücksichtigung der Schaltung und der Innenwiderstände der Quellen.",
        ],
        formula: {
          expression:
            "τ = RC; Ucharge(t) = U₀(1 − e^(−t/τ)); Udel(t) = Uinit e^(−t/τ)",
          legend:
            "τ und t – Zeit in Sekunden; R - Widerstand in Ohm; C ist die Kapazität in Farad; U₀ – Quellenspannung; Uinit ist die Anfangsspannung während der Entladung.",
          note: "Die Ladeformel geht von einer Anfangsspannung von 0 V aus. Beim Laden gilt i(t) = (U₀/R)e^(−t/τ); Beim Entladen hängt das Vorzeichen des Stroms von der gewählten Richtung ab.",
        },
        example: {
          title: "Wie schnell lädt sich ein Kondensator auf?",
          given:
            "R = 10 kOhm, C = 100 µF, U₀ = 5 V. Finden Sie τ und Spannung nach 1 s.",
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
        title: "5. Elektrische Feldenergie",
        paragraphs: [
          "Um den nächsten Ladungsanteil auf bereits geladene Platten zu übertragen, ist immer mehr Arbeit erforderlich: Die Spannung steigt von Null auf den Endwert U. Daher ist die Energie nicht gleich QU, sondern gleich QU/2. Das gleiche Ergebnis kann über die Kapazität und das Quadrat der Spannung geschrieben werden. Eine Verdoppelung der Spannung bei gleicher Kapazität erhöht die Energie um das Vierfache.",
          "Beim Laden eines zunächst entladenen Kondensators von einer idealen Konstantspannungsquelle über einen Widerstand gibt die Quelle Energie an die CU² ab. Die Hälfte landet im Kondensator, die andere Hälfte wird in den Stromkreiswiderständen in Wärme umgewandelt. Diese Erklärung gilt speziell für dieses Ladeverfahren; Andere Energieübertragungsmethoden, beispielsweise ein Schaltwandler, können eine andere Verlustbilanz aufweisen.",
          "Ein Kondensator kann schnell Energie abgeben und wird daher für Blitze, Spannungsglättung und kurzfristige Stromversorgung von Schaltkreisen verwendet. Für die langfristige Energiespeicherung ist eine Batterie in der Regel pro Masse energieeffizienter. Es ist notwendig, Geräte nicht nur nach Kapazität C zu vergleichen: Sie müssen die Betriebsspannung, den zulässigen Strom, den Leckstrom und die tatsächlichen Verluste berücksichtigen.",
        ],
        formula: {
          expression: "W = ½CU² = ½QU = Q²/(2C)",
          legend:
            "W ist die Energie in Joule (J); C – Kapazität in F; U ist die Spannung in V; Q - Ladung in C.",
          note: "Die Formeln beziehen sich auf einen linearen Kondensator mit konstanter Kapazität. In die Formel wird die tatsächliche Spannung eingesetzt, nicht die maximale Spannung aus der Markierung.",
        },
        example: {
          title: "Energiereserve",
          given: "C = 1000 µF, U = 24 V. Finden Sie die Feldenergie.",
          steps: [
            "1000 µF = 0,001 F.",
            "W = 0,5 · 0,001 · 24² = 0,288 J.",
            "Reduziert man die Spannung auf 12 V, beträgt die Energie 0,072 J: viermal weniger.",
          ],
          answer: "Bei 24 V speichert der Kondensator 0,288 J.",
        },
      },
      {
        id: "capacitor-real",
        title: "6. Echtes Teil und ordnungsgemäße Prüfung",
        paragraphs: [
          "Ein echter Kondensator weist Kapazitätstoleranz, Leckstrom, äquivalenten Serienwiderstand ESR und parasitäre Induktivität auf. Leckage erklärt, warum ein isolierter, geladener Kondensator mit der Zeit an Spannung verliert. ESR verursacht eine Erwärmung durch den Wechselstrom. Bei hohen Frequenzen beschreibt ein ideales Modell C nicht mehr das gesamte Verhalten des Teils.",
          "Zum Testen schalten Sie zunächst den Strom aus, entladen das Teil sicher und messen die verbleibende Spannung. Die Messung der Kapazität direkt im Stromkreis kann aufgrund benachbarter Komponenten zu einem falschen Ergebnis führen. Beachten Sie die Polarität der Sonden und die Empfehlungen des Gerätes. Blähungen, Elektrolytaustritt und Schäden am Gehäuse sind Anzeichen einer Fehlfunktion, ein normales Aussehen allein ist jedoch kein Beweis für die Funktionsfähigkeit.",
          "Bei der Lösung von Problemen ist es sinnvoll, den Modus nacheinander zu bestimmen: Gleichstrom nach dem Einschwingen, transienter Prozess oder Wechselstrom. Wählen Sie dann den gewünschten Zusammenhang aus: Q = CU für Ladung, τ = RC für Zeit, W = CU²/2 für Energie. Ein Fehler um den Faktor einer Million tritt am häufigsten aufgrund der Ersetzung von Mikrofarad durch Farad auf; Konvertieren Sie Einheiten, bevor Sie Berechnungen durchführen.",
        ],
        callout: {
          type: "tip",
          title: "Überprüfung des gesunden Menschenverstandes",
          text: "Für ein konstantes C bedeutet ein größeres U ein größeres Q und ein viel größeres W. Für ein konstantes R bedeutet ein größeres C langsamer. Wenn die Berechnung das gegenteilige Verhältnis ergibt, überprüfen Sie die Formel und die Einheiten.",
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
          "Ein Element aus zwei Leitern mit einer Isolierung dazwischen, das die Energie eines elektrischen Feldes speichert.",
      },
      {
        term: "Kapazität",
        german: "Kapazität",
        symbol: "C",
        unit: "F",
        definition:
          "Das Verhältnis des Ladungsmoduls einer Platte zur Spannung zwischen den Platten: C = Q/U.",
      },
      {
        term: "Dielektrikum",
        german: "Dielektrikum",
        symbol: "εᵣ",
        unit: "dimensionslos",
        definition:
          "Ein isolierendes Material, dessen Polarisation das elektrische Feld und die Kapazität beeinflusst.",
      },
      {
        term: "Zeitkonstante",
        german: "Zeitkonstante",
        symbol: "τ",
        unit: "s",
        definition:
          "Charakteristische Zeit einer RC-Schaltung: τ = RC. In dieser Zeit verringert sich die Abweichung vom Endwert um das e-fache.",
      },
      {
        term: "Leckstrom",
        german: "Leckstrom",
        symbol: "Iut",
        unit: "A",
        definition:
          "Durch eine unvollständige Isolierung fließt ein kleiner Strom, was zu einem langsamen Ladungsverlust führt.",
      },
      {
        term: "Feldenergie",
        german: "Feldenergie",
        symbol: "W",
        unit: "J",
        definition:
          "Während der Ladungstrennung gespeicherte Arbeit; für konstante Kapazität W = CU²/2.",
      },
    ],
    summary: [
      "Die Kapazität bezieht sich auf Ladung und Spannung: Q = CU; 1 F = 1 C/V.",
      "Die Fläche der Platten und das Dielektrikum erhöhen die Kapazität, der Abstand zwischen den Platten verringert sie.",
      "Die Behälter werden parallel gefaltet; Bei Reihenschaltung addieren sich ihre Umkehrwerte.",
      "Der transiente Prozess RC hat eine Zeitkonstante τ = RC; five τ ist ein praktischer praktischer Leitfaden.",
      "Die Energie W = CU²/2 hängt vom Quadrat der Spannung ab.",
      "Das Ausschalten der Stromversorgung garantiert nicht, dass am Kondensator keine Spannung anliegt.",
    ],
    quiz: [
      {
        id: "capacitor-1",
        type: "choice",
        question:
          "Wie verändert sich die Kapazität eines Flachkondensators, wenn der Abstand zwischen den Platten verdoppelt wird und dabei Fläche und Dielektrikum erhalten bleiben?",
        options: [
          "Wird halbiert",
          "Wird sich verdoppeln",
          "Wird sich nicht ändern",
          "Wird sich vervierfachen",
        ],
        answer: 0,
        explanation:
          "Im Flachkondensatormodell ist C = ε₀εᵣA/d. Durch Erhöhen von d um die Hälfte wird C um die Hälfte reduziert.",
      },
      {
        id: "capacitor-2",
        type: "numeric",
        question:
          "Die Kapazität beträgt 200 μF, die Spannung beträgt 10 V. Ermitteln Sie den Ladungsmodul einer Platte in Milliculomb.",
        answer: 2,
        unit: "mC",
        tolerance: 0.01,
        explanation: "Q = CU = 200 · 10⁻⁶ · 10 = 0,002 C = 2 mC.",
      },
      {
        id: "capacitor-3",
        type: "choice",
        question:
          "Auf welchen Bruchteil der Endspannung wird der zunächst entladene Kondensator nach einer Zeitkonstanten RC aufgeladen?",
        options: [
          "Ungefähr 36,8 %",
          "Ungefähr 50 %",
          "Ungefähr 63,2 %",
          "Genau 100 %",
        ],
        answer: 2,
        explanation:
          "U(τ)/U₀ = 1 − e⁻¹ ≈ 0,632. Der Wert von 36,8 % bezieht sich auf die verbleibende Spannung beim Entladen.",
      },
      {
        id: "capacitor-4",
        type: "numeric",
        question:
          "Ein 1000 uF-Kondensator wird auf 10 V aufgeladen. Wie viel Energie speichert er in Joule?",
        answer: 0.05,
        unit: "J",
        tolerance: 0.001,
        explanation: "1000 µF = 0,001 F. W = ½CU² = 0,5 0,001 100 = 0,05 J.",
      },
      {
        id: "capacitor-5",
        type: "choice",
        question:
          "Zwei zunächst entladene ideale Kondensatoren 10 µF und 20 µF sind in Reihe geschaltet. Welche Aussage ist wahr?",
        options: [
          "Beide müssen die gleiche Spannung haben.",
          "Bei 20 µF ist die Spannung doppelt so hoch",
          "Die Gesamtkapazität beträgt 30 µF",
          "Bei 10 µF ist die Spannung doppelt so hoch",
        ],
        answer: 3,
        explanation:
          "Bei einer Reihenschaltung sind die Ladungsmodule gleich und U = Q/C. Bei einem Kondensator mit kleinerer Kapazität ist die Spannung höher: U₁/U₂ = C₂/C₁ = 2.",
      },
    ],
  },
  {
    id: "magnets",
    number: 11,
    title: "Magnete & magnetische Feldlinien",
    german: "Magnete & magnetische Feldlinien",
    chapter: "5.1",
    category: "magnetism",
    duration: 32,
    description:
      "Magnetische Pole, die Form und Richtung des Feldes, die Wirkung auf den Strom und die Bewegung von Ladungen – vom Kompass bis zum magnetischen Fluss.",
    objectives: [
      "Lesen Sie magnetische Linien richtig ab und bestimmen Sie die Richtung des Feldes mit einem Kompass.",
      "Erklären Sie die Wirkung eines Magnetfeldes auf bewegte Ladungen und einen stromdurchflossenen Leiter.",
      "Unterscheiden Sie zwischen magnetischer Induktion B und magnetischem Fluss Φ und berücksichtigen Sie die Ausrichtung der Oberfläche.",
    ],
    sections: [
      {
        id: "magnets-poles",
        title: "1. Nord- und Südpol",
        paragraphs: [
          "In einem gewöhnlichen Permanentmagneten gibt es einen Nordpol N und einen Südpol S. Gleiche Pole stoßen sich ab, ungleiche Pole ziehen sich an. Die besonders auffällige Wechselwirkung an den Enden eines Stabmagneten bedeutet nicht, dass das Feld nur dort existiert: Das Magnetfeld nimmt den Raum um und im Inneren des Magneten ein.",
          "Wenn Sie einen Magneten zerbrechen, erhalten Sie keinen separaten Nordpol und keinen separaten Südpol. Jedes Fragment wird zu einem Magneten mit zwei Polen. Isolierte magnetische Ladungen oder Monopole werden in der konventionellen Elektrotechnik nicht beobachtet; Ein klassisches Magnetfeld hat keine Quellen und Senken analog zu einzelnen positiven und negativen elektrischen Ladungen.",
          "Ein Permanentmagnet hält die Magnetisierung aufrecht, indem er mikroskopisch kleine magnetische Momente im Material anordnet. Eine einfache Erklärung bezieht dies auf magnetische Domänen – Bereiche mit gleichmäßiger Magnetisierung. Hitze, starke Gegenfelder und mechanische Beanspruchung können den Magneten schwächen; Der spezifische Widerstand hängt vom Material ab.",
        ],
        callout: {
          type: "insight",
          title: "Ähnliche Wörter, unterschiedliche physische Objekte",
          text: "Eine positive elektrische Ladung kann von einer negativen getrennt werden. Ein separater Nordpol eines gewöhnlichen Magneten kann nicht durch Schneiden erhalten werden: Jedes Stück hat sein eigenes Paar aus N und S.",
        },
      },
      {
        id: "magnets-lines",
        title: "2. Wie man magnetische Linien liest",
        paragraphs: [
          "Eine magnetische Linie ist eine imaginäre Kurve, deren Tangente an jedem Punkt die Richtung des magnetischen Induktionsvektors B angibt. Um einen Stabmagneten verläuft die Richtung außen von N nach S und innerhalb des Magneten von S nach N. Somit bilden die Linien geschlossene Konturen und beginnen nicht am Nordpol.",
          "Die Linien eines Feldes schneiden sich nicht: Andernfalls müssten an einem Punkt zwei unterschiedliche Richtungen B zugewiesen werden. Wenn die Linien im gleichen herkömmlichen Diagramm dichter sind, wird das Feld normalerweise als stärker dargestellt. Die Anzahl der gezeichneten Linien wird vom Autor der Zeichnung gewählt: Die Linien selbst sind keine materiellen Fäden und haben keine universelle Größe.",
          "In einem nahezu gleichmäßigen Feld erscheinen die Linien in einer flachen Zeichnung parallel und im gleichen Abstand. Das Feld innerhalb eines langen Magneten oder zwischen geeigneten Polstücken kann über einen begrenzten Bereich als annähernd gleichmäßig angesehen werden. Es ist an den Rändern gewölbt, so dass es unmöglich ist, ein einfaches Modell ungeprüft auf den gesamten Raum zu übertragen.",
        ],
        callout: {
          type: "tip",
          title: "Das Feld steht senkrecht zum Blatt",
          text: "Das Symbol ⊙ bezeichnet den Vektor zum Beobachter: Wir sehen die Spitze eines Pfeils. Das Symbol ⊗ bezeichnet den Vektor vom Beobachter: Wir sehen die Feder des Pfeils. Dies ist eine praktische Richtungsangabe bei dreidimensionalen Problemen.",
        },
      },
      {
        id: "magnets-compass",
        title: "3. Kompass, Erdfeld und Feldüberlagerung",
        paragraphs: [
          "Die kleine Magnetnadel neigt dazu, sich entlang des lokalen Feldes zu drehen. Die Richtung, in die das nördliche Ende des Pfeils zeigt, wird als Richtung B angenommen. In diesem Fall zeigt der Kompass die Richtung des Gesamtfeldes der Erde, benachbarter Magnete und Ströme in Leitern an. Daher kann eine Messung in der Nähe eines Stahltisches, eines Lautsprechers oder eines Stromkabels stark von den Erwartungen abweichen.",
          "Das nördliche Ende des Kompasses zeigt ungefähr auf den geografischen Norden. Im magnetischen Sinne gibt es in der Nähe des geografischen Nordpols der Erde einen Bereich mit südlicher magnetischer Polarität, der das nördliche Ende der Nadel anzieht. Geografische und magnetische Richtungen stimmen nicht genau überein: Der Winkel zwischen ihnen wird magnetische Deklination genannt. Auch die Feldlinien der Erde sind zum Horizont geneigt.",
          "Magnetische Induktion ist ein Vektor. Bei der Überlappung mehrerer Felder werden Vektoren hinzugefügt, nicht nur deren Module. Zwei identische Felder, die in entgegengesetzte Richtungen gerichtet sind, können sich an einem bestimmten Punkt gegenseitig aufheben. Rechtwinklige Felder geben die resultierende Richtung zwischen ihnen an. Das Superpositionsprinzip wird unter Berücksichtigung der Tatsache angewendet, dass magnetische Materialien unter dem Einfluss eines allgemeinen Feldes ihren Zustand ändern können.",
        ],
        formula: {
          expression:
            "B⃗total = B⃗₁ + B⃗₂; für senkrechte Felder: Btotal = √(B₁² + B₂²)",
          legend:
            "B⃗ ist der magnetische Induktionsvektor; B ist sein Modul in Tesla (T).",
          note: "Die herkömmliche arithmetische Modulo-Addition ist nur für gleichgerichtete Vektoren gültig.",
        },
        example: {
          title: "Zwei Felder in entgegengesetzter Richtung",
          given:
            "Am ausgewählten Punkt ist B₁ = 4 mT nach rechts gerichtet, B₂ = 1,5 mT ist nach links gerichtet.",
          steps: [
            "Wir wählen die positive Richtung nach rechts.",
            "Wir addieren die Projektionen: Bx = 4 − 1,5 = 2,5 mT.",
            "Ein positives Ergebnis bedeutet, dass das gesamte Feld nach rechts gerichtet ist.",
          ],
          answer:
            "Die gesamte magnetische Induktion beträgt 2,5 mT und ist nach rechts gerichtet.",
        },
      },
      {
        id: "magnets-force",
        title: "4. Das Magnetfeld beeinflusst die Ladungsbewegung",
        paragraphs: [
          "Eine bewegte Ladung wird durch die magnetische Komponente der Lorentzkraft beeinflusst. Sein Modul hängt von Ladung, Geschwindigkeit, magnetischer Induktion und dem Winkel zwischen Geschwindigkeit und Feld ab. Wenn die Ladung ruht oder sich entlang des Feldes bewegt, ist diese Kraft Null. Bei der Bewegung über das Feld ist die Kraft maximal und steht immer senkrecht sowohl zur Geschwindigkeit als auch zu B.",
          "Für eine positive Ladung ist die Richtung durch das Vektorprodukt v × B gegeben: Sie kann durch die Rechte-Hand-Regel bestimmt werden. Bei einer negativen Ladung ist die Richtung umgekehrt. Da die Magnetkraft senkrecht zur Geschwindigkeit wirkt, verrichtet sie selbst keine Arbeit an einer Punktladung und verändert deren kinetische Energie nicht. Sie ändert die Richtung; Das elektrische Feld hingegen kann seine Geschwindigkeit modulo ändern.",
          "In einem Leiter bewegen sich Ladungsträger geordnet, sodass das Feld auf den stromdurchflossenen Leiter wirkt. Für einen geraden Abschnitt der Länge l in einem gleichmäßigen Feld gilt der Kraftmodul F = BIl sin α, wobei der Winkel α zwischen der Richtung des bedingten positiven Stroms und B gemessen wird. Auf diesem Zusammenspiel basiert das Prinzip des Elektromotors.",
        ],
        formula: {
          expression: "Fmag = |q| · v · B · sin α; Fprov = B I l sin α",
          legend:
            "F – Kraft in N; q ist die Ladung in C; v – Geschwindigkeit in m/s; B – magnetische Induktion in T; I - Strom in A; l - aktive Länge in m.",
          note: "Die Formel für einen Leiter geht von einem geraden Abschnitt in einem gleichmäßigen Feld aus. Vektorform für Ladung: F⃗mag = q(v⃗ × B⃗).",
        },
        example: {
          title: "Kraft auf den Leiter",
          given:
            "B = 0,20 T, I = 3 A, l = 10 cm. Der Leiter steht senkrecht zum Feld.",
          steps: [
            "Länge umrechnen: l = 0,10 m.",
            "Da α = 90°, ist sin α = 1.",
            "F = BIl = 0,20 3 0,10 = 0,060 N.",
            "Wenn der Leiter entlang des Feldes gedreht wird, wird α zu 0° und die Kraft ist Null.",
          ],
          answer:
            "Der Kraftmodul beträgt 0,060 N; seine Richtung ist senkrecht zum Strom und Feld.",
        },
      },
      {
        id: "magnets-flux",
        title:
          "5. Magnetische Induktion und Fluss sind unterschiedliche Größen",
        paragraphs: [
          "Die magnetische Induktion B charakterisiert das Feld an einem bestimmten Punkt und wird in Tesla gemessen. Der magnetische Fluss Φ ist relativ zur gewählten Oberfläche: Er berücksichtigt, wie stark das Feld ist, wie groß die Fläche ist und wie diese Fläche ausgerichtet ist. Daher kann dasselbe Feld unterschiedliche Flüsse durch verschiedene Frames erzeugen.",
          "Für eine ebene Fläche in einem gleichmäßigen Feld gilt Φ = BA cos α. Dabei ist α der Winkel zwischen B und der Normalen, also senkrecht zur Oberfläche, und nicht der Winkel zwischen B und der Stufe selbst. Wenn das Feld den Rahmen senkrecht zu seiner Stufe durchquert, ist α = 0° und der Flussmodul ist maximal. Liegen die Linien in der Rahmenebene, ist α = 90° und der Fluss ist Null.",
          "Der Fluss kann positiv oder negativ sein: Das Vorzeichen hängt von der gewählten Normalenrichtung ab. Bei einem ungleichmäßigen Feld wird die Oberfläche gedanklich in kleine Bereiche unterteilt und die Flüsse durch diese werden aufsummiert. Der gesamte magnetische Fluss durch jede geschlossene Oberfläche ist Null: Wie viele Linien treten ein, so viele treten aus. Dies ist eine weitere Formulierung der Abwesenheit magnetischer Monopole.",
        ],
        formula: {
          expression: "Φ = B · A · cos α; 1 Wb = 1 T m²",
          legend:
            "Φ – magnetischer Fluss in Webers (Wb); A – Fläche in m²; α ist der Winkel zwischen B und der ausgewählten Flächennormalen.",
          note: "Eine einfache Formel gilt für eine ebene Fläche in einem gleichmäßigen Feld. Für den allgemeinen Fall Φ = ∫ B⃗ · dA⃗.",
        },
        example: {
          title: "Durch Drehen des Rahmens ändert sich der Fluss",
          given:
            "B = 0,10 T, A = 20 cm², Winkel zwischen Feld und Normale α = 60°.",
          steps: [
            "Die Fläche übersetzen wir als Quadrat der Länge: 20 cm² = 20 · 10⁻⁴ m² = 0,002 m².",
            "cos 60° = 0,5.",
            "Φ = 0,10 · 0,002 · 0,5 = 0,0001 Wb.",
            "0,0001 Wb = 0,10 mWb. Bei α = 0° wäre der Durchfluss doppelt so groß.",
          ],
          answer: "Der magnetische Fluss beträgt 0,10 mWb.",
        },
      },
      {
        id: "magnets-materials",
        title: "6. Welche Materialien interagieren mit einem Magneten?",
        paragraphs: [
          "Ferromagnetische Materialien wie Eisen, Nickel und Kobalt können unter den richtigen Bedingungen stark magnetisiert werden. In weichmagnetischen Materialien ändert sich die Magnetisierung leicht: Sie eignen sich für die Kerne von Elektromagneten und Transformatoren. Hartmagnetische Materialien behalten die Magnetisierung besser bei und werden in Permanentmagneten verwendet. Die Wörter „weich“ und „hart“ beschreiben hier magnetisches Verhalten, nicht mechanische Härte.",
          "Nicht jedes Metall wird spürbar von einem Permanentmagneten angezogen. Kupfer und Aluminium verhalten sich nicht wie Eisen. Paramagnetische Materialien verstärken das äußere Feld nur schwach, während diamagnetische Materialien es nur schwach schwächen. Diese kleinen Effekte machen sich bei einfachen Unterrichtserfahrungen meist nicht bemerkbar, machen aber bei präzisen Messungen und speziellen Geräten einen Unterschied.",
          "Stahlgegenstände verändern das Feldmuster und starke Magnete können stark voneinander angezogen werden und Finger einklemmen. Für pädagogische Experimente genügen kleine Magnete, ein Kompass und sichere Ströme. Bei empfindlichen Geräten und medizinischen Implantaten müssen die Herstelleranweisungen eingehalten werden. Die Stärke des Magneten kann nicht visuell bestimmt werden.",
        ],
        callout: {
          type: "insight",
          title: "Was zeigen die Erfahrungen mit Sägemehl wirklich?",
          text: "Eisenspäne werden im Feld magnetisiert und ausgerichtet, wodurch ihre Form sichtbar wird. Sie zeigen ein Richtungsmuster, messen jedoch nicht den Wert von B und verändern selbst das Feld geringfügig.",
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
          "Feld, das durch die Bewegung von Ladungen und Magnetisierung entsteht; wirkt auf bewegte Ladungen und magnetische Momente.",
      },
      {
        term: "Magnetische Feldlinie",
        german: "Magnetische Feldlinie",
        symbol: "—",
        unit: "—",
        definition:
          "Eine imaginäre Kurve, deren Tangente entlang des magnetischen Induktionsvektors gerichtet ist.",
      },
      {
        term: "Magnetische Flussdichte",
        german: "Magnetische Flussdichte",
        symbol: "B",
        unit: "T",
        definition:
          "Eine Vektorgröße, die ein Magnetfeld beschreibt und in die Formel für die Magnetkraft eingeht.",
      },
      {
        term: "Magnetischer Fluss",
        german: "Magnetischer Fluss",
        symbol: "Φ",
        unit: "Wb",
        definition:
          "Fluss des Vektors B durch eine orientierte Oberfläche; für ein einheitliches Feld Φ = BA cos α.",
      },
      {
        term: "Lorentzkraft",
        german: "Lorentzkraft",
        symbol: "F",
        unit: "N",
        definition:
          "Kraft auf eine Ladung in einem elektromagnetischen Feld; der magnetische Anteil ist gleich q(v × B). In der Gesamtkraft ist auch qE enthalten.",
      },
      {
        term: "Ferromagnetischer Stoff",
        german: "Ferromagnetischer Stoff",
        symbol: "—",
        unit: "—",
        definition:
          "Ein Material mit starker Magnetisierung, die mit der Ordnung magnetischer Momente und Domänen verbunden ist.",
      },
    ],
    summary: [
      "Ein gewöhnlicher Magnet hat immer Nord- und Südpolarität; Beim Schneiden wird kein separater Pol ausgewählt.",
      "Außerhalb des Magneten verlaufen die Linien B von N nach S, innen von S nach N; Die Leitungen sind geschlossen.",
      "Das nördliche Ende des Kompasses zeigt die Richtung des lokalen Zusammenfassungsfelds an.",
      "Die magnetische Kraft ist senkrecht zur Geschwindigkeit der Ladung; bei Bewegung entlang B ist es gleich Null.",
      "B wird in Tesla gemessen, Φ in Weber; Die Strömung hängt von der Oberfläche und der Ausrichtung ab.",
      "Bei Φ = BA cos α wird der Winkel relativ zur Flächennormalen gemessen.",
    ],
    quiz: [
      {
        id: "magnets-1",
        type: "choice",
        question:
          "Was passiert, wenn ein Stabmagnet in zwei Teile zerschnitten wird?",
        options: [
          "Ein Teil wird nur der Nordpol sein, der andere nur der Südpol",
          "Die magnetischen Eigenschaften werden definitiv vollständig verschwinden",
          "Jedes Stück erhält einen Nord- und einen Südpol",
          "Beide Teile erhalten nur die Nordpole",
        ],
        answer: 2,
        explanation:
          "Durch das Schneiden eines normalen Magneten werden keine magnetischen Monopole freigesetzt. Es entstehen kleinere Magnete mit beiden Polen.",
      },
      {
        id: "magnets-2",
        type: "choice",
        question:
          "Welche Richtung haben die magnetischen Linien auf der Außenseite eines Stabmagneten?",
        options: [
          "Von N nach S",
          "Von S nach N",
          "Von positiver zu negativer Ladung",
          "Immer im Kreis um den Magneten",
        ],
        answer: 0,
        explanation:
          "Außerhalb des Magneten verläuft die Richtung B vom Nord- zum Südpol. Im Inneren verlaufen die Linien von S nach N und bilden geschlossene Konturen.",
      },
      {
        id: "magnets-3",
        type: "numeric",
        question:
          "Ein 0,20 m langer Leiter mit einem Strom von 2 A steht senkrecht zu einem gleichmäßigen Feld B = 0,50 T. Finden Sie die Kraft in Newton.",
        answer: 0.2,
        unit: "N",
        tolerance: 0.005,
        explanation: "F = BIl sin 90° = 0,50 2 0,20 = 0,20 N.",
      },
      {
        id: "magnets-4",
        type: "numeric",
        question:
          "Feld B = 0,20 T senkrecht zur Rahmenebene mit einer Fläche von 0,01 m². Finden Sie das Thread-Modul in Milliwebers.",
        answer: 2,
        unit: "mWb",
        tolerance: 0.01,
        explanation:
          "Das Feld ist parallel zur Normalen, also cos α = 1. Φ = BA = 0,20 · 0,01 = 0,002 Wb = 2 mWb.",
      },
      {
        id: "magnets-5",
        type: "choice",
        question:
          "Die positive Ladung bewegt sich genau entlang eines gleichmäßigen Magnetfeldes. Was ist die magnetische Komponente der Lorentzkraft?",
        options: [
          "qvB",
          "qB/v",
          "Es richtet sich immer gegen die Geschwindigkeit",
          "Null",
        ],
        answer: 3,
        explanation:
          "Fmag = |q|vB sin α. Bei der Bewegung entlang des Feldes gilt α = 0° und sin α = 0, es entsteht also keine magnetische Kraft.",
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
      "Wie Strom ein Feld erzeugt, warum eine Spule zu einem Magneten wird und wie eine Änderung des magnetischen Flusses elektrische Spannung erzeugt.",
    objectives: [
      "Bestimmen Sie die Richtung des Feldes von Leiter und Spule in Stromrichtung.",
      "Wenden Sie das Gesetz der elektromagnetischen Induktion und die Lenzsche Regel an.",
      "Erklären Sie die Selbstinduktion, das Prinzip von Motor, Generator und Transformator.",
    ],
    sections: [
      {
        id: "electromagnetism-wire",
        title: "1. Strom erzeugt ein Magnetfeld",
        paragraphs: [
          "Das Magnetfeld existiert nicht nur um Permanentmagnete herum. Elektrischer Strom in einem Leiter erzeugt ebenfalls ein Feld. Um einen langen geraden Draht verlaufen die Linien B in Form konzentrischer Kreise, die in Ebenen senkrecht zum Draht liegen. Der Mittelpunkt jedes Kreises liegt auf der Achse des Drahtes.",
          "Die Richtung des Feldes lässt sich anhand der Regel der rechten Hand ermitteln: Der Daumen wird entlang des bedingten positiven Stroms geführt, angewinkelte Finger zeigen die Richtung der Magnetlinien an. In einem Metalldraht driften Elektronen entgegengesetzt zum herkömmlichen Strom, die Regeln verwenden hierfür jedoch die Richtung des Stroms. Eine Änderung der Stromrichtung ändert die Richtung des Feldes.",
          "Im Vakuum oder in der Luft, entfernt von den Enden eines langen dünnen Drahtes, ist B proportional zum Strom und umgekehrt proportional zum Abstand zur Achse. Bei doppelter Entfernung ist das Feld doppelt so schwach, nicht viermal schwächer. Die Formel bezieht sich auf einen idealisierten langen geraden Draht und die Punkte außerhalb davon; benachbarte Leiter erzeugen zusätzliche Felder.",
        ],
        formula: {
          expression: "B = μ₀I / (2πr)",
          legend:
            "B – magnetische Induktion in T; I - Strom in A; r ist der Abstand zur Drahtachse in m; μ₀ ≈ 1,256637 · 10⁻⁶ H/m.",
          note: "Modell eines langen geraden Drahtes im Vakuum; für Luft reicht in der Regel die gleiche Näherungsformel aus.",
        },
        example: {
          title: "Feld in der Nähe eines geraden Kabels",
          given: "I = 10 A, Abstand r = 2 cm. Die Umgebung ist Luft.",
          steps: [
            "r = 0,020 m; wir nehmen μ ≈ μ₀.",
            "B = (4π · 10⁻⁷ · 10)/(2π · 0,020) ≈ 1,0 · 10⁻⁴ T.",
            "1,0 · 10⁻⁴ T = 0,10 mT = 100 µT.",
            "Die Richtung am ausgewählten Punkt wird durch die Rechte-Hand-Regel und nicht nur durch eine numerische Formel bestimmt.",
          ],
          answer: "B ≈ 0,10 mT im Abstand von 2 cm.",
        },
      },
      {
        id: "electromagnetism-coil",
        title: "2. Spule und Elektromagnet",
        paragraphs: [
          "Wird der Draht zu einer Spule gerollt, addieren sich die Felder verschiedener Abschnitte und verstärken sich im mittleren Bereich gegenseitig. Viele Windungen bilden eine Spule, und die lange Spule wird Magnetspule genannt. Innerhalb der langen Magnetspule ist das Feld annähernd gleichmäßig; Von außen betrachtet ähnelt das Bild dem Feld eines Stabmagneten. Die Spule hat magnetische Nord- und Südpole, die durch die Richtung des Stroms bestimmt werden.",
          "Die Rechte-Hand-Regel für eine Spule ist wie folgt formuliert: Die gebogenen Finger sind entlang des Stroms in den Windungen gerichtet, der Daumen zeigt B im Inneren der Spule und zeigt auf deren nördliches Ende. Wenn man auf das Ende schaut, zeigt die Strömung gegen den Uhrzeigersinn, dass das Ende nach Norden verläuft. Durch die Neuanordnung der Quellpins werden Strom, Feld und Polarität geändert.",
          "Mehr Amperewindungen NI bedeuten normalerweise eine stärkere Magnetisierungswirkung. Ein ferromagnetischer Kern kann B deutlich erhöhen, aber die Abhängigkeit bleibt bei keinem Strom linear: Es kommt zu Sättigung und Hysterese. Auch Luftspalte, Kernform, Streufluss und Wicklungserwärmung beeinflussen den Betrieb eines echten Elektromagneten.",
        ],
        formula: {
          expression: "H ≈ NI/l; B ≈ μ₀μᵣNI/l",
          legend:
            "N ist die Anzahl der Windungen; I - Strom in A; l ist die Länge des langen Magneten in m; H – magnetische Feldstärke in A/m; μᵣ – relative magnetische Permeabilität.",
          note: "Die Formel für B geht von einem langen Solenoid und einem gleichmäßigen linearen Medium aus. Für einen Luftkern μᵣ ≈ 1; Bei einem Ferromagneten hängt μᵣ vom Zustand und dem Feld ab.",
        },
        callout: {
          type: "warning",
          title: "Auch die Spule wird heiß",
          text: "Die Wicklung hat einen Widerstand. Die thermischen Verluste I²R nehmen mit dem Quadrat des Stroms zu, daher ist die Verstärkung des Elektromagneten durch Spannungserhöhung durch den zulässigen Strom, die Temperatur und die Betriebsart begrenzt.",
        },
      },
      {
        id: "electromagnetism-induction",
        title: "3. Eine Änderung des Flusses erzeugt eine EMF",
        paragraphs: [
          "Elektromagnetische Induktion tritt auf, wenn sich der an einen Stromkreis gekoppelte magnetische Fluss im Laufe der Zeit ändert. Dies kann auf verschiedene Arten erfolgen: Bewegen Sie den Magneten relativ zur Spule, ändern Sie den Strom in einer benachbarten Spule, drehen Sie den Rahmen oder ändern Sie seine Fläche. Das Vorhandensein einer starken, aber konstanten Strömung durch einen stationären Rahmen erzeugt an sich noch keine induzierte EMK.",
          "Das Faradaysche Gesetz setzt die EMK in Beziehung zur Änderungsrate der Flusskopplung. Wenn alle N Windungen vom gleichen Fluss Φ abgedeckt sind, ist die Flussverkettung Ψ = NΦ. Je mehr Windungen und je schneller sich der Fluss ändert, desto größer ist das EMF-Modul. Bei Berechnungen für ein Endintervall wird normalerweise die durchschnittliche EMK ermittelt; Der Momentanwert erfordert eine Ableitung nach der Zeit.",
          "EMF ist ein Aktionsmerkmal, das Ladungen in Bewegung setzen kann. Bei geöffneter Spule kann zwischen den Anschlüssen eine messbare Spannung anliegen, obwohl im Stromkreis kein Strom fließt. Der Strom entsteht, wenn ein Stromkreis geschlossen ist, und hängt von seinem gesamten elektrischen Widerstand und anderen Eigenschaften ab. Daher ist die Formulierung „Induktion erzeugt immer einen Strom“ unvollständig.",
        ],
        formula: {
          expression: "𝓔 = −dΨ/dt = −N · dΦ/dt; |𝓔av| = N |ΔΦ| /Δt",
          legend:
            "𝓔 – EMF in V; Ψ ist die Flussverknüpfung in der Wb-Windung; Φ ist der Fluss durch eine Windung in Wb; N ist die Anzahl der Windungen; t – Zeit in s.",
          note: "Der N-Multiplikator wird verwendet, wenn die Windungen vom gleichen Fluss bedeckt sind. Das Minuszeichen drückt die Lenzsche Regel aus und hängt von der konsequenten Wahl der Richtung der Kontur und der Normalen ab.",
        },
        example: {
          title: "Durchschnittliche Spulen-EMK",
          given:
            "N = 200. Der Fluss durch jede Windung nimmt in 0,10 s von 3 mWb auf 1 mWb ab.",
          steps: [
            "ΔΦ = 0,001 − 0,003 = −0,002 Wb.",
            "Durchschnittliche Flussänderungsrate: ΔΦ/Δt = −0,002/0,10 = −0,020 Wb/s.",
            "Modul der durchschnittlichen EMF: |𝓔av| = 200 · 0,020 = 4 V.",
            "Um die Polarität zu bestimmen, müssen Sie zusätzlich die Richtung des Quellfeldes und die Wicklungsrichtung angeben.",
          ],
          answer: "Das Modul der durchschnittlichen EMF beträgt 4 V.",
        },
      },
      {
        id: "electromagnetism-lenz",
        title: "4. Lenzsche Regel und Energieerhaltung",
        paragraphs: [
          "Lenzsche Regel: Ein induzierter Strom wird so gerichtet, dass seine magnetische Wirkung der Änderung des magnetischen Flusses entgegenwirkt, die den Strom verursacht hat. Es richtet sich nicht unbedingt gegen das ursprüngliche Feld selbst. Wenn die Strömung zunimmt, neigt das induzierte Feld dazu, das Wachstum abzuschwächen. Wenn der Fluss abnimmt, wird er tendenziell aufrechterhalten.",
          "Wenn der Nordpol eines Magneten näher an eine geschlossene Spule gebracht wird, wird sein nahes Ende zum Norden und stößt den Magneten ab. Wenn derselbe Pol entfernt wird, wird das nahe Ende nach Süden ausgerichtet und zieht den ausgehenden Magneten an. In beiden Fällen erfordert Bewegung Arbeit; es wird in elektrische Energie und dann beispielsweise in Wärme umgewandelt. Ohne Widerstand wäre es möglich, Energie kostenlos zu beziehen.",
          "Um die Richtung zu bestimmen, gehen Sie der Reihe nach vor: Stellen Sie die Richtung des externen Flusses ein, bestimmen Sie, ob er zunimmt oder abnimmt, wählen Sie die gewünschte Richtung des induzierten Feldes aus und verwenden Sie dann die rechte Handregel, um den Strom zu ermitteln. Der Versuch, sofort den „Uhrzeigersinn“ zu erraten, führt oft zu einem Fehler, da diese Richtung von der Beobachtungsseite abhängt.",
        ],
        callout: {
          type: "tip",
          title: "Drei Wörter zum Überprüfen",
          text: "Der Strömungsänderung gezielt entgegenwirken. Wenn das äußere Feld geschwächt wird, kann die Richtung des induzierten Feldes mit diesem übereinstimmen. Dies steht voll und ganz im Einklang mit der Lenzschen Regel.",
        },
      },
      {
        id: "electromagnetism-self-induction",
        title: "5. Selbstinduktion und Spulenenergie",
        paragraphs: [
          "Der Spulenstrom erzeugt seinen eigenen Strom. Ändert sich der Strom, ändert sich auch die Flussverkettung der Spule selbst: Es entsteht eine selbstinduktive EMK. Bei einer linearen Spule ist die Flusskopplung proportional zum Strom, Ψ = LI, wobei L die Induktivität ist. Die Spule widersteht einer schnellen Änderung des Stroms, genauso wie ein Kondensator einer schnellen Änderung seiner Spannung widersteht.",
          "Wenn die RL-Schaltung eingeschaltet wird, steigt der Strom allmählich an. Im geöffneten Zustand behält die Spule tendenziell den gleichen Strom bei und kann eine sehr große Spannung erzeugen, wenn es keinen anderen Weg für den Strom gibt. Dies erklärt den Funken an den Kontakten und gefährliche Spannungsstöße an Relais und Elektromagneten. Gleichstromkreise verwenden häufig eine Schutzdiode oder einen geeigneten Begrenzer, der für den jeweiligen Stromkreis entwickelt wurde.",
          "Eine lineare ideale Spule speichert Energie W = LI²/2 in einem Magnetfeld. Eine echte Spule hat sowohl Drahtwiderstand als auch Kernverluste. Sobald ein konstanter Strom hergestellt ist, erzeugt der ideale induktive Teil keinen Spannungsabfall, der Kupferdraht erzeugt jedoch weiterhin Wärme. Eine gesättigte ferromagnetische Spule erfordert eine genauere Beschreibung als eine einzelne Konstante L.",
        ],
        formula: {
          expression: "𝓔self = −L · dI/dt; W = ½LI²; τRL = L/R",
          legend:
            "L - Induktivität in Henry (H); I - Strom in A; W – Energie in J; R ist der gesamte Serienwiderstand in Ohm; τRL ist die Zeitkonstante in s.",
          note: "Formeln mit konstantem L gelten für eine lineare Spule. Für passive Spannung an einer idealen Induktivität uL = L dI/dt; Das Vorzeichen des EMF wird so gewählt, dass es der Stromänderung entgegenwirkt.",
        },
        example: {
          title: "EMF beim schnellen Herunterfahren",
          given:
            "L = 0,20 H. Der Strom sinkt in 0,010 s von 2 A auf 0. Finden Sie den Modul der durchschnittlichen Selbstinduktions-EMK.",
          steps: [
            "ΔI = 0 − 2 = −2 A.",
            "ΔI/Δt = −2/0,010 = −200 A/s.",
            "|𝓔av| = L |ΔI/Δt| = 0,20 200 = 40 V.",
            "Vor der Abschaltung betrug die Feldenergie W = 0,5 · 0,20 · 2² = 0,40 J; es braucht einen Weg der Zerstreuung oder Rückkehr.",
          ],
          answer:
            "Das durchschnittliche EMF-Modul beträgt 40 V; bei einer noch schnelleren Stromänderung wäre sie höher.",
        },
      },
      {
        id: "electromagnetism-machines",
        title: "6. Motor, Generator und Transformator",
        paragraphs: [
          "Ein Elektromotor nutzt Kräfte, die in einem Magnetfeld auf stromdurchflossene Leiter wirken. Am Rahmen wirken auf gegenüberliegende Seiten Kräfte in entgegengesetzter Richtung, die ein Drehmoment erzeugen. Um die Rotation aufrechtzuerhalten, steuert das Design einen Strom oder ein rotierendes Magnetfeld. Energie stammt aus einer elektrischen Quelle und wird unter Verlusten in mechanische Energie umgewandelt.",
          "Der Generator nutzt eine umgekehrte Transformation: Durch mechanische Bewegung wird die Flussverknüpfung der Wicklung verändert und eine EMK erzeugt. Wenn eine Last angeschlossen wird, erzeugt der induzierte Strom ein Gegendrehmoment, sodass mechanische Kraft zugeführt werden muss, um die Rotation aufrechtzuerhalten. Es ist einfacher, einen unbelasteten Generator zu drehen als einen belasteten, wenn man die gleiche Drehzahl vergleicht und Verluste berücksichtigt.",
          "Ein Transformator überträgt Energie zwischen Wicklungen durch einen sich ändernden magnetischen Fluss. In einem idealen Modell sind die Spannungsverhältnisse gleich den Windungsverhältnissen und die Ströme werden umgekehrt, um die Leistung aufrechtzuerhalten. Ein herkömmlicher Transformator ist nicht für den direkten Anschluss an Gleichspannung ausgelegt: Nach dem Übergang ändert sich der Fluss nicht mehr und die Primärwicklung kann aufgrund von übermäßigem Strom und Sättigung überhitzen.",
        ],
        formula: {
          expression: "U₂/U₁ ≈ N₂/N₁; I₂/I₁ ≈ N₁/N₂; U₁I₁ ≈ U₂I₂",
          legend:
            "Die Indizes 1 und 2 beziehen sich auf die Primär- und Sekundärwicklungen; U und I sind die Effektivwerte von Spannung und Strom im angepassten Modus eines idealen Transformators.",
          note: "Die Beziehungen gelten in einem idealisierten Modell mit variablem Modus. Ein echter Transformator weist Verluste, Magnetisierungsströme sowie Einschränkungen hinsichtlich Frequenz, Spannung und Last auf.",
        },
        callout: {
          type: "insight",
          title: "Ein System, zwei Richtungen der Energieübertragung",
          text: "Viele elektrische Maschinen können sowohl als Motor als auch als Generator arbeiten. Der Modus wird durch die Richtung der Energieübertragung und -steuerung bestimmt, nicht nur durch den Namen des Geräts.",
        },
      },
    ],
    terms: [
      {
        term: "Zylinderspule / Solenoid",
        german: "Zylinderspule / Solenoid",
        symbol: "N",
        unit: "drehen",
        definition:
          "Eine lange zylindrische Spule, innerhalb derer das Feld als annähernd gleichmäßig angesehen werden kann.",
      },
      {
        term: "Elektromagnetische Induktion",
        german: "Elektromagnetische Induktion",
        symbol: "𝓔",
        unit: "V",
        definition:
          "Das Auftreten von EMF aufgrund einer Änderung der magnetischen Flussverknüpfung des Stromkreises.",
      },
      {
        term: "Flussverkettung",
        german: "Flussverkettung",
        symbol: "Ψ",
        unit: "Wb",
        definition:
          "Die Summe der magnetischen Flüsse durch die Windungen der Wicklung; für den gleichen Fluss Ψ = NΦ.",
      },
      {
        term: "Lenzsche Regel",
        german: "Lenzsche Regel",
        symbol: "−",
        unit: "—",
        definition:
          "Der induzierte Strom wirkt durch seine magnetische Wirkung der Flussänderung entgegen, die ihn verursacht hat.",
      },
      {
        term: "Induktivität",
        german: "Induktivität",
        symbol: "L",
        unit: "H",
        definition:
          "Für eine lineare Spule beträgt der Proportionalitätskoeffizient zwischen Flusskopplung und Strom: Ψ = LI.",
      },
      {
        term: "Selbstinduktion",
        german: "Selbstinduktion",
        symbol: "𝓔ich selbst",
        unit: "V",
        definition:
          "Das Auftreten von EMF in einem Stromkreis, wenn sich der eigene Strom und der magnetische Fluss ändern.",
      },
      {
        term: "Elektromagnet",
        german: "Elektromagnet",
        symbol: "NI",
        unit: "A",
        definition:
          "Ein Gerät, bei dem durch Strom in einer Wicklung, oft mit einem Magnetkern, eine magnetische Wirkung erzeugt wird.",
      },
    ],
    summary: [
      "Um einen geraden Draht herum ist das Feld kreisförmig gerichtet; Die Richtung wird durch die rechte Hand bestimmt.",
      "Die magnetische Wirkung der Spule hängt von den Amperewindungen NI ab; Der Kern kann das Feld verstärken, ist aber zur Sättigung fähig.",
      "Faradaysches Gesetz: EMF tritt auf, wenn sich die Flusskopplung ändert, 𝓔 = −dΨ/dt.",
      "Nach der Lenzschen Regel verhindert die induzierte Wirkung eine Strömungsänderung.",
      "Die Selbstinduktion verhindert, dass sich der Strom ändert. Die Linearspule speichert LI²/2-Energie.",
      "Der Motor wandelt elektrische Energie in mechanische Energie um, der Generator wandelt mechanische Energie in elektrische Energie um.",
    ],
    quiz: [
      {
        id: "electromagnetism-1",
        type: "choice",
        question:
          "Wie findet man die Richtung des Magnetfeldes um einen geraden, stromdurchflossenen Draht?",
        options: [
          "Führen Sie Ihren linken Daumen entlang der Elektronen",
          "Richten Sie den Daumen Ihrer rechten Hand entlang der Strömung; gebeugte Finger zeigen B",
          "Das Feld ist immer entlang des Drahtes gerichtet",
          "Das Feld ist vom Draht immer radial nach außen gerichtet",
        ],
        answer: 1,
        explanation:
          "Für einen geraden Draht gilt die Regel der rechten Hand: Der Daumen wird entlang des bedingten positiven Stroms geführt, die Finger decken den Draht in Richtung des Feldes ab.",
      },
      {
        id: "electromagnetism-2",
        type: "numeric",
        question:
          "Die Spule hat 100 Windungen. Der Fluss durch jede Windung änderte sich in 0,10 s gleichmäßig um 0,002 Wb. Finden Sie den Modul der durchschnittlichen EMK.",
        answer: 2,
        unit: "V",
        tolerance: 0.01,
        explanation: "|𝓔av| = N|ΔΦ|/Δt = 100 · 0,002/0,10 = 2 V.",
      },
      {
        id: "electromagnetism-3",
        type: "choice",
        question:
          "Der äußere magnetische Fluss durch die geschlossene Spule nimmt ab. Welche Richtung hat das induzierte Stromfeld?",
        options: [
          "Es muss senkrecht zum Original stehen",
          "Es ist immer das Gegenteil des Originals",
          "Ziel ist es, den ursprünglichen Fluss aufrechtzuerhalten",
          "Bei abnehmendem Durchfluss entsteht kein Feld",
        ],
        answer: 2,
        explanation:
          "Die Lenzsche Regel gilt für Strömungsänderungen. Wenn die externe Strömung abnimmt, versucht das induzierte Feld, die Abnahme auszugleichen und die ursprüngliche Strömungsrichtung beizubehalten.",
      },
      {
        id: "electromagnetism-4",
        type: "numeric",
        question:
          "Eine lineare Spule hat L = 0,50 H und einen Strom I = 2 A. Wie viel Energie ist in ihrem Feld gespeichert?",
        answer: 1,
        unit: "J",
        tolerance: 0.01,
        explanation: "W = ½LI² = 0,5 · 0,50 · 2² = 1 J.",
      },
      {
        id: "electromagnetism-5",
        type: "choice",
        question:
          "Warum kann es beim Öffnen des Spulenstromkreises zu einem großen Spannungsstoß kommen?",
        options: [
          "Die Spule ist bestrebt, den Strom aufrechtzuerhalten und erzeugt eine selbstinduktive EMK",
          "Der Widerstand des Kupferdrahtes wird immer Null",
          "Im ausgeschalteten Zustand muss der magnetische Fluss sofort unendlich werden",
          "Dies ist nur mit einem Permanentmagneten möglich",
        ],
        answer: 0,
        explanation:
          "Ein schneller Abfall des Stroms erzeugt eine selbstinduktive EMK, deren Modul ungefähr L|ΔI/Δt| beträgt. Die gespeicherte Energie muss in andere Formen umgewandelt werden, daher ist ein entsprechend konzipierter Schutz erforderlich.",
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
      "Unterscheiden Sie zwischen B, H, Φ und Flussverknüpfung nach Bedeutung, Einheit und Anwendung.",
      "Berechnen Sie das Feld eines linearen Magnetsystems und den Fluss durch eine Oberfläche.",
      "Erklären Sie die Auswirkungen von Luftspalt, Sättigung und Hysterese auf einen realen Magnetkreis.",
    ],
    sections: [
      {
        id: "magnetic-quantities-map",
        title: "1. B, H und Φ: drei verschiedene Fragen",
        paragraphs: [
          "Die magnetische Induktion B beantwortet die Frage, wie sich das Magnetfeld an einem bestimmten Punkt auf bewegte Ladungen und einen stromdurchflossenen Leiter auswirkt. Dies ist eine Vektorgröße in Tesla. Die magnetische Feldstärke H ist eine weitere Vektorgröße, die in Ampere pro Meter gemessen wird; Es eignet sich zur Beschreibung der magnetisierenden Wirkung freier Ströme unter Berücksichtigung der Geometrie des Magnetsystems.",
          "Der magnetische Fluss Φ bezieht sich nicht mehr auf einen Punkt, sondern auf eine ausgewählte Fläche. Sie wird in Weber gemessen und berücksichtigt die Normalkomponente B über die gesamte Fläche. Die Flussverkettung Ψ berücksichtigt zusätzlich Windungen: Wenn jede der N Windungen vom gleichen Fluss bedeckt ist, ist Ψ = NΦ. Es ist die Änderungsrate von Ψ, die die EMK der Spule bestimmt.",
          "Diese Mengen können nicht gegeneinander ausgetauscht werden. Zwei Kerne können das gleiche B, aber aufgrund unterschiedlicher Querschnittsflächen unterschiedliche Φ haben. Das gleiche H kann in Luft und in einem Ferromagneten sehr unterschiedliches B ergeben. Der gleiche Fluss durch eine Windung führt bei derselben Änderung zu unterschiedlichen Flussverknüpfungen und EMKs in Spulen mit unterschiedlichem N.",
        ],
        formula: {
          expression: "B: T; H: A/m; Φ: Wb; Ψ = NΦ: Wb",
          legend:
            "B – magnetische Induktion; H – magnetische Feldstärke; Φ – magnetischer Fluss; Ψ – Flussverknüpfung.",
          note: "Die Windungszahl ist im SI-System dimensionslos; Das Wort „drehen“ wird für eine klare physikalische Bedeutung in Einheiten beibehalten.",
        },
        callout: {
          type: "tip",
          title: "Mnemonik nach Einheiten",
          text: "Tesla beschreibt B an einem Punkt, Weber beschreibt den Fluss durch eine Fläche, Ampere pro Meter – H entlang einer magnetischen Bahn. Wenn sich herausstellt, dass die Antwort auf die Flussfrage Tesla ist, ist der Bereich höchstwahrscheinlich vergessen.",
        },
      },
      {
        id: "magnetic-quantities-permeability",
        title: "2. Permeabilität und die Grenze des linearen Modells",
        paragraphs: [
          "Im Vakuum B = μ₀H. Verwenden Sie in einem homogenen linearen isotropen Medium B = μH = μ₀μᵣH. Dabei ist μ die absolute magnetische Permeabilität in Henry pro Meter und μᵣ die relative Permeabilität ohne Einheit. Bei Luft liegt μᵣ sehr nahe bei 1, sodass die Luftspule normalerweise fast wie eine Vakuumspule konstruiert ist.",
          "Ein ferromagnetischer Kern kann nicht als Medium mit einer Konstante μᵣ in allen Moden betrachtet werden. Sein B hängt nichtlinear von H sowie von der Magnetisierungsgeschichte, Temperatur und Frequenz ab. Bei Sättigung führt ein Anstieg von H zu einem relativ geringen zusätzlichen Anstieg von B. Daher erhöht ein Anstieg des Stroms in der Spule nach der Sättigung die Erwärmung stark, führt jedoch zu einem begrenzten Anstieg der Induktion.",
          "Eine allgemeinere Beziehung hat die Form B = μ₀(H + M), wobei M die Magnetisierung des Materials in A/m ist. Es zeigt, dass das Feld sowohl mit freien Strömen, beschrieben durch H, als auch mit der magnetischen Reaktion der Substanz zusammenhängt. Für Schulrechnungen wird oft die Konstante μᵣ als Bedingung angegeben; es kann innerhalb der Grenzen dieses ausdrücklich akzeptierten Modells verwendet werden.",
        ],
        formula: {
          expression:
            "B = μ₀(H + M); in einem linearen Medium: B = μ₀μᵣH; μ = μ₀μᵣ",
          legend:
            "μ₀ ≈ 1,256637 10⁻⁶ H/m; μᵣ – relative Durchlässigkeit; M ist die Magnetisierung in A/m.",
          note: "B und H sind nur im entsprechenden isotropen Modell parallel. Für einen nichtlinearen Ferromagneten wird die Charakteristik B(H) anstelle einer willkürlichen Konstante μᵣ verwendet.",
        },
        example: {
          title: "Feld in der Luft",
          given:
            "Im Luftbereich H = 1000 A/m. Finden Sie B und nehmen Sie μᵣ = 1.",
          steps: [
            "Wir verwenden B = μ₀H.",
            "B ≈ 1,256637 · 10⁻⁶ · 1000 = 1,256637 · 10⁻³ T.",
            "In Millitesla umrechnen: B ≈ 1,26 mT.",
          ],
          answer:
            "B ≈ 1,26 mT. Der H-Wert bleibt bei 1000 A/m: Das sind unterschiedliche Werte.",
        },
      },
      {
        id: "magnetic-quantities-flux",
        title: "3. Von der Induktion zum Fluss und zur Flussverknüpfung",
        paragraphs: [
          "In einem Kern mit annähernd gleichmäßiger Induktion und einem Querschnitt senkrecht zu den Feldlinien ist der Fluss gleich BA. Wenn der Querschnitt kleiner wird und die Strömung nahezu gleich bleibt, nimmt B im engen Teil zu. Es ist der schmale Abschnitt, der als erster in die Sättigung gelangen kann. In einem einfachen unverzweigten Magnetkreis wird davon ausgegangen, dass der Fluss in verschiedenen Abschnitten gleich ist, wenn die Streuung vernachlässigt wird.",
          "Bei einer geneigten Fläche ist es wichtig, die Fläche auf eine Stufe senkrecht zum Feld zu projizieren. Äquivalent dazu wird die Normalkomponente B verwendet. In der Formel Φ = BA cos α wird der Winkel α zur Normalen gemessen. Wenn die ausgewählte Normale umgedreht wird, ändert sich das Vorzeichen des Flusses, obwohl das physikalische Feld gleich bleibt.",
          "Bei der elektromagnetischen Induktion wird die Anzahl der ineinandergreifenden Windungen zum Fluss addiert. Wenn der Fluss durch jede der 500 Windungen 0,001 Wb beträgt, beträgt die Flusskopplung 0,5 Wb·Windung. Dies bedeutet nicht, dass sich im Kern 0,5 Wb befinden: Der Fluss durch den Querschnitt beträgt immer noch 0,001 Wb. Der Unterschied ist für die Berechnung von EMF und Induktivität von Bedeutung.",
        ],
        formula: {
          expression: "Φ = BA cos α; Ψ = NΦ; für eine lineare Spule L = Ψ/I",
          legend:
            "A – Fläche in m²; α ist der Winkel B mit der Normalen; N ist die Anzahl der Windungen; I - Strom in A; L - Induktivität in H.",
          note: "Wenn das Feld nicht gleichmäßig ist, wird der Fluss durch Integration von B über die Oberfläche berechnet; Wenn die Flüsse verschiedener Windungen nicht gleich sind, werden sie separat addiert.",
        },
        example: {
          title: "Von der Querschnittsfläche bis zur Induktivität",
          given:
            "B = 0,80 T in einem gleichmäßigen Abschnitt A = 4 cm². N = 250 Windungen, I = 2 A. Nehmen Sie ein lineares Modell und den gleichen Fluss in allen Windungen an.",
          steps: [
            "A = 4 · 10⁻⁴ m² = 0,0004 m². Das Feld steht senkrecht zum Schnitt, cos α = 1.",
            "Φ = BA = 0,80 · 0,0004 = 0,00032 Wb = 0,32 mWb.",
            "Ψ = NΦ = 250 · 0,00032 = 0,080 Wb Windung.",
            "L = Ψ/I = 0,080/2 = 0,040 H = 40 mH.",
          ],
          answer:
            "Φ = 0,32 mWb; Ψ = 0,080 Wb-Wende; L = 40 mH im angenommenen linearen Modell.",
        },
      },
      {
        id: "magnetic-quantities-circuit",
        title: "4. Magnetomotorische Kraft und magnetischer Widerstand",
        paragraphs: [
          "Eine Wicklung mit N Windungen und dem Strom I erzeugt eine magnetomotorische Kraft Θ = NI. Der Begriff ist historisch: Es handelt sich nicht um mechanische Kraft in Newton. Die Einheit wird oft als Ampere-Windung geschrieben, obwohl in SI die Anzahl der Windungen dimensionslos ist. Für einen ausgewählten geschlossenen Pfad in der Magnetostatik setzt das Gesamtstromgesetz die Zirkulation H mit dem eingekoppelten Strom in Beziehung: ∮H · dl = NI.",
          "Für einen einfachen homogenen magnetischen Pfad der Länge l und konstanten Querschnitts A wird der magnetische Widerstand ℛm = l/(μA) eingeführt. Dann ist Φ = Θ/ℛm. Eine Analogie zum Ohmschen Gesetz hilft bei der Organisation der Berechnung: Die Rolle des Stroms wird vom Fluss gespielt, die Rolle der Spannung wird von der magnetomotorischen Kraft gespielt. Aber Fluss ist kein Fluss von Materie, und der magnetische Widerstand selbst verbraucht keine Energie wie ein elektrischer Widerstand.",
          "In aufeinanderfolgenden Abschnitten des Magnetkreises ohne merkliche Leckage ist der Fluss derselbe und die Abfälle der magnetomotorischen Kraft summieren sich: NI = ΣHᵢlᵢ. Magnetische Widerstände können hinzugefügt werden, wenn die anwendbare Permeabilität für jeden Abschnitt bekannt ist. In ferromagnetischen Systemen ist die Berechnung oft iterativ: Der Fluss wird angenommen, B wird gefunden, H wird aus der B(H)-Kurve bestimmt und die erforderlichen Amperewindungen werden überprüft.",
        ],
        formula: {
          expression: "Θ = NI; ℛm = l/(μA); Φ = Θ/ℛm; NI = ΣHᵢlᵢ",
          legend:
            "Θ – magnetomotorische Kraft in einer A-Kurve; ℛm – magnetischer Widerstand in A/Wb, derselbe wie Gn⁻¹; l ist die Weglänge in m; A - Abschnitt in m².",
          note: "Das konzentrierte Magnetkreismodell geht von einem bekannten Flusspfad und ausreichend kleinen Leckagen und Diskontinuitäten aus. Die Permeabilität wird für den entsprechenden Modus angenommen.",
        },
        callout: {
          type: "insight",
          title: "Eine nützliche Analogie hat Grenzen",
          text: "Ein hoher magnetischer Widerstand reduziert den Fluss bei gleichem NI. Dies bedeutet jedoch nicht die Freisetzung von Wärme Φ²ℛm. Reale magnetische Verluste sind beispielsweise mit Hysterese und Wirbelströmen bei sich änderndem Feld verbunden.",
        },
      },
      {
        id: "magnetic-quantities-gap",
        title: "5. Warum ein kleiner Luftspalt so wichtig ist",
        paragraphs: [
          "In Luft ist die Permeabilität viel geringer als die eines Ferromagneten vor der Sättigung. Daher kann selbst ein kurzer Luftspalt den größten Teil des magnetischen Widerstands des gesamten Stromkreises bereitstellen. Bei annähernd gleichem B im Kern und Spalt erfordert der Spalt Hzaz = B/μ₀, also eine erhebliche Spannung.",
          "Addieren Sie bei der Berechnung eines Stromkreises mit Lücke die erforderlichen Amperewindungen des Kerns und der Luft. Wenn der Kernwiderstand vernachlässigt werden kann, gilt NI ≈ Bg/μ₀, wobei g die Gesamtlänge aller aufeinanderfolgenden Luftspalte ist. Wenn zwei Lücken von jeweils 0,5 mm vorhanden sind, setzen Sie 1 mm in die Formel ein. Bei dieser Näherung werden Feldausbeulungen an den Rändern und Leckströme außer Acht gelassen.",
          "Ein Luftspalt ist nicht immer ein Nachteil. In Speicherdrosseln hilft es, Energie zu speichern und verringert die Abhängigkeit der Induktivität von der Nichtlinearität des Kerns. Ein erheblicher Teil der Energie befindet sich im Lückenfeld. Bei Relais und Elektromagneten hingegen hat der Spalt großen Einfluss auf den benötigten Strom und die Anziehungskraft.",
        ],
        formula: {
          expression:
            "NI = Hserlser + (B/μ₀)g; wenn der Kern vernachlässigt wird: NI ≈ Bg/μ₀",
          legend:
            "g ist die Gesamtlänge der Luftspalte in m; lser ist die Weglänge entlang des Kerns in m; Hser ist die Spannung im Kern bei ausgewähltem B.",
          note: "Annähernd gleicher Querschnitt, gleicher Durchfluss, geringe Leckage und Randeffekte werden vorausgesetzt. Für eine genaue Auslegung werden diese Effekte gesondert berücksichtigt.",
        },
        example: {
          title: "Ampere-Windungen für Luftspalt",
          given:
            "Bedarf B = 0,50 T. Gesamtspalt g = 1 mm, N = 500 Umdrehungen. Vernachlässigen Sie den magnetischen Kernwiderstand und Kanteneffekte.",
          steps: [
            "g = 0,001 m.",
            "Erforderliche magnetomotorische Kraft: NI ≈ 0,50 · 0,001 / (1,256637 · 10⁻⁶) ≈ 398 A Umdrehung.",
            "Strom I = 398/500 ≈ 0,796 A.",
            "In einer realen Schaltung benötigt der Kern ebenfalls Amperewindungen, und Leckage und Feldknickung verändern das Ergebnis.",
          ],
          answer:
            "Ein vereinfachtes Modell erfordert einen Strom von etwa 0,80 A.",
        },
      },
      {
        id: "magnetic-quantities-hysteresis",
        title: "6. Hysterese, Verluste und Feldenergie",
        paragraphs: [
          "Wenn H eines Ferromagneten zyklisch variiert wird, bildet die B(H)-Abhängigkeit normalerweise eine Hystereseschleife. Nachdem H auf Null zurückgekehrt ist, kann die Induktion Br bestehen bleiben – Restinduktion. Um B in einem bestimmten Zyklus auf Null zu bringen, ist das Gegenteil von Hc erforderlich – die Koerzitivfeldstärke. Die Werte hängen vom verwendeten Material, den Bedingungen und den Eigenschaften ab.",
          "Die Schleifenfläche B(H) entspricht der Energie der Hystereseverluste pro Zyklus pro Volumeneinheit. Im leitfähigen Kern entstehen durch das Wechselfeld zusätzlich Wirbelströme und Erwärmung. Um solche Verluste zu reduzieren, werden isolierte dünne Bleche aus Elektroband, Ferriten und anderen geeigneten Materialien verwendet. Die Auswahl hängt von der Frequenz und der zulässigen Induktion ab.",
          "In einem linearen Medium beträgt die Energiedichte des Magnetfelds w = BH/2. In Vakuum und Luft kann es als B²/(2μ₀) geschrieben werden. Für eine Spule stimmt dies mit W = LI²/2 überein. In nichtlinearen Materialien und Hysteresematerialien können eine Konstante μ und die BH/2-Formel nicht ohne Einschränkung verwendet werden: Der Magnetisierungspfad und die Verluste spielen eine Rolle.",
        ],
        formula: {
          expression:
            "Für ein lineares Medium: w = ½BH = B²/(2μ); Wcoils = ½LI²",
          legend:
            "w – Energiedichte in J/m³; W ist die Gesamtenergie in J; μ – magnetische Permeabilität; Br – Restinduktion in T; Hc ist die Koerzitivfeldstärke in A/m.",
          note: "Energieformeln mit ½ gelten für eine lineare Abhängigkeit. Der Zyklusverlust pro Volumeneinheit hängt mit der Schleifenfläche ∮H dB zusammen.",
        },
        callout: {
          type: "tip",
          title: "Algorithmus zur Berechnung eines Magnetkreises",
          text: "Zeichnen Sie den Fließweg ein und markieren Sie die Lücken. Konvertieren Sie Längen und Flächen in SI. Finden Sie B = Φ/A in jedem Abschnitt. Wählen Sie H aus dem linearen Modell oder der Materialkurve. Addiere Hl und vergleiche mit NI. Überprüfen Sie abschließend die Sättigung, Erwärmung und die Grenzen der akzeptierten Näherungen.",
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
          "Eine vektorielle Größe, die zur Beschreibung der magnetisierenden Wirkung freier Ströme und zur Berechnung magnetischer Kreise verwendet wird.",
      },
      {
        term: "Magnetische Permeabilität",
        german: "Magnetische Permeabilität",
        symbol: "μ",
        unit: "H/m",
        definition:
          "In einem linear isotropen Medium beträgt der Kopplungskoeffizient B = μH; μ = μ₀μᵣ.",
      },
      {
        term: "Magnetische Durchflutung",
        german: "Magnetische Durchflutung",
        symbol: "Θ",
        unit: "A",
        definition:
          "Die gesamten Amperewindungen, die den Magnetkreis magnetisieren; für eine Wicklung Θ = NI.",
      },
      {
        term: "Magnetischer Widerstand / Reluktanz",
        german: "Magnetischer Widerstand / Reluktanz",
        symbol: "ℛm",
        unit: "A/Wb",
        definition:
          "Im linearen Modell eines Magnetkreises beträgt das Verhältnis der magnetomotorischen Kraft zum Fluss: ℛm = Θ/Φ = l/(μA).",
      },
      {
        term: "Magnetische Sättigung",
        german: "Magnetische Sättigung",
        symbol: "B",
        unit: "T",
        definition:
          "Der Charakteristikbereich eines Ferromagneten, in dem ein weiterer Anstieg von H zu einem relativ geringen Anstieg von B führt.",
      },
      {
        term: "Remanenzflussdichte",
        german: "Remanenzflussdichte",
        symbol: "Br",
        unit: "T",
        definition:
          "Der Wert der magnetischen Induktion, der nach einem bestimmten Magnetisierungsprozess bei H = 0 bleibt.",
      },
      {
        term: "Koerzitivfeldstärke",
        german: "Koerzitivfeldstärke",
        symbol: "Hc",
        unit: "A/m",
        definition:
          "Der Modul der entgegengesetzten Spannung, der erforderlich ist, um B auf dem entsprechenden Zweig der Hystereseschleife auf Null zu bringen.",
      },
      {
        term: "Hysterese",
        german: "Hysterese",
        symbol: "B(H)",
        unit: "—",
        definition:
          "Abhängigkeit des magnetischen Zustands von der Vorgeschichte; Bei der zyklischen Magnetisierungsumkehr äußert es sich als B(H)-Schleife und Verluste.",
      },
    ],
    summary: [
      "B ist die Induktion in T, H ist die Spannung in A/m, Φ ist der Fluss in Wb, Ψ ist die Flussverknüpfung.",
      "B = μ₀μᵣH arbeitet unter den akzeptierten Bedingungen eines linearen Mediums; Die Permeabilität eines Ferromagneten ist keine universelle Konstante.",
      "Der Fluss in einem gleichmäßigen senkrechten Abschnitt ist BA; die Flussverkettung gleicher Windungen ist gleich NΦ.",
      "Magnetomotorische Kraft Θ = NI; in einer einfachen linearen Kette Φ = Θ/ℛm und ℛm = l/(μA).",
      "Der Luftspalt kann den Großteil der erforderlichen Amperewindungen und der gespeicherten Energie bestimmen.",
      "Sättigung, Hysterese und Wirbelströme schränken die Anwendbarkeit idealer Modelle ein.",
    ],
    quiz: [
      {
        id: "magnetic-quantities-1",
        type: "choice",
        question: "Welches Mengen-Einheiten-Paar ist richtig?",
        options: [
          "Magnetischer Fluss Φ - Tesla",
          "Spannung H - Ampere pro Meter",
          "Magnetische Induktion B - Weber",
          "Relative Permeabilität μᵣ - Henry",
        ],
        answer: 1,
        explanation:
          "H wird in A/m gemessen. B wird in T gemessen, Φ in Wb und μᵣ ist dimensionslos.",
      },
      {
        id: "magnetic-quantities-2",
        type: "numeric",
        question:
          "Die gleichmäßige Induktion B = 0,50 T steht senkrecht zum Kernquerschnitt A = 6 cm². Finden Sie den magnetischen Fluss in Milliweber.",
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
          "Warum kann für einen ferromagnetischen Kern bei keinem Strom die gleiche Konstante μᵣ verwendet werden?",
        options: [
          "Die Permeabilität ist immer Null",
          "Die Anzahl der Windungen ändert sich automatisch mit der Stromstärke",
          "Weber und Tesla sind die gleichen Einheiten",
          "Es gibt Nichtlinearität, Sättigung und Abhängigkeit von der Geschichte",
        ],
        answer: 3,
        explanation:
          "In einem Ferromagneten ist B(H) normalerweise nichtlinear und weist eine Hysterese auf. Die Konstante μᵣ kann nur eine Näherung für ein gegebenes Regime sein.",
      },
      {
        id: "magnetic-quantities-4",
        type: "numeric",
        question:
          "Die Spule hat 400 Windungen und einen Strom von 0,50 A. Ermitteln Sie die magnetomotorische Kraft Θ.",
        answer: 200,
        unit: "A",
        tolerance: 0.5,
        explanation:
          "Θ = NI = 400 · 0,50 = 200 Eine Umdrehung. Dies ist keine mechanische Kraft in Newton.",
      },
      {
        id: "magnetic-quantities-5",
        type: "choice",
        question:
          "Warum kann ein kleiner Luftspalt die erforderlichen Amperewindungen stark erhöhen?",
        options: [
          "Die Luftdurchlässigkeit ist im Vergleich zur Durchlässigkeit des ungesättigten Kerns gering",
          "In Luft ist ein magnetischer Fluss im Allgemeinen unmöglich",
          "Die Lücke erhöht immer die Anzahl der Windungen",
          "In Luft haben B und H die gleichen SI-Zahlenwerte",
        ],
        answer: 0,
        explanation:
          "Magnetischer Widerstand ℛm = l/(μA). In Luft μ ≈ μ₀ kann daher selbst ein kurzer Spalt einen großen magnetischen Widerstand haben und einen erheblichen Hl-Wert erfordern.",
      },
    ],
  },
];
