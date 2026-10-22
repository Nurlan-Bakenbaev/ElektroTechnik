export const basicsLessons = [
  {
    id: "current",
    number: 1,
    title: "Elektrische Stromstärke",
    german: "Elektrische Stromstärke",
    chapter: "2.1",
    category: "basics",
    duration: 24,
    description:
      "Von der Ladungsbewegung über die Stromstärke und ihre Richtung bis zur richtigen Messung mit dem Amperemeter.",
    objectives: [
      "Erklären, welche Ladungsträger sich im Leiter bewegen und wie ein Strom entsteht.",
      "Stromstärke, Ladung und Zeit berechnen und dabei die Einheiten richtig umrechnen.",
      "Technische Stromrichtung und Elektronenbewegung unterscheiden und ein Amperemeter richtig anschließen.",
    ],
    sections: [
      {
        id: "charge-carriers",
        title: "1. Wie entsteht ein elektrischer Strom?",
        paragraphs: [
          "Denken Sie an eine Batterie, Leitungen, einen Schalter und eine Lampe. Die beweglichen Elektronen sind schon vor dem Einschalten in den Metalldrähten vorhanden. Die positiven Atomrümpfe bleiben im Kristallgitter fest. Ohne äußeres Feld bewegen sich die Elektronen ungeordnet. Im Mittel fließt durch jeden Leiterquerschnitt in beide Richtungen gleich viel Ladung, der Strom ist also null.",
          "Die Quelle trennt Ladungen und erzeugt so die Spannung an ihren Klemmen. Ist der Stromkreis geschlossen, baut sich im Leiter ein elektrisches Feld auf. Dieses Feld übt eine Kraft auf die freien Ladungsträger aus und überlagert der ungeordneten Bewegung eine gerichtete Driftbewegung. Das ist der elektrische Strom. Die Quelle liefert die Energie und hält die Bewegung aufrecht. Das Feld breitet sich dabei sehr viel schneller aus, als sich ein einzelnes Elektron bewegt.",
          "Die elektrische Ladung Q bestimmt die elektrische Wechselwirkung von Teilchen. Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an. Die Einheit ist das Coulomb (C). Ein Elektron trägt die Ladung −e mit e ≈ 1,602 · 10⁻¹⁹ C. Ein Coulomb entspricht daher etwa 6,24 · 10¹⁸ Elementarladungen. In Metallen tragen Elektronen den Strom, in Elektrolyten positive und negative Ionen.",
        ],
        callout: {
          type: "insight",
          title: "Ein stromführender Draht ist nicht aufgeladen",
          text: "Ein Draht bleibt im Stromkreis praktisch elektrisch neutral. Positive und negative Ladungen heben sich auf. Der Strom beschreibt die Ladung, die durch einen Querschnitt transportiert wird, nicht eine Überschussladung im Draht.",
        },
      },
      {
        id: "current-definition",
        title: "2. Stromstärke: Ladung pro Zeit",
        paragraphs: [
          "Die Stromstärke gibt an, wie viel Ladung pro Sekunde durch einen Leiterquerschnitt fließt. Je mehr Ladung in derselben Zeit transportiert wird, desto größer ist die Stromstärke I. Ein Ampere bedeutet: Ein Coulomb fließt in einer Sekunde. Der Vergleich mit Wasser in einem Rohr hilft, hat aber Grenzen: Die Ladungsträger sind im Draht schon vorhanden.",
          "Für Gleichstrom gilt I = Q/t. Bei veränderlichem Strom liefert ΔQ/Δt den Mittelwert, der Augenblickswert ist I = dQ/dt. Hier ist der Strom, wenn nichts anderes steht, konstant. Rechnen Sie zuerst um: Zeit in Sekunden, Ladung in Coulomb. Es gilt 1 min = 60 s und 1 mC = 0,001 C. Außerdem: 1 A = 1000 mA = 1.000.000 µA.",
        ],
        formula: {
          expression: "I = Q / t;  Q = I · t;  t = Q / I",
          legend:
            "I – Stromstärke in A; Q – transportierte Ladung in C; t – Zeit in s.",
          note: "Gilt unmittelbar für Gleichstrom; Q ist hier der Betrag der transportierten Ladung.",
        },
        example: {
          title: "Beispiel: Ladung durch einen Leiter",
          given:
            "In 8 s fließt eine elektrische Ladung von 2,4 Coulomb (C) durch den Leiterquerschnitt. Gesucht ist der Gleichstrom in A und mA.",
          steps: [
            "Alle Werte liegen in SI-Einheiten vor: Q = 2,4 C und t = 8 s.",
            "Wir verwenden die Definition der Stromstärke: I = Q/t.",
            "Einsetzen: I = 2,4/8 = 0,3 A.",
            "Umrechnen: 0,3 A · 1000 = 300 mA. Einheitenprobe: C/s = A.",
          ],
          answer: "Der Strom beträgt 0,3 A oder 300 mA.",
        },
      },
      {
        id: "current-direction",
        title: "3. Stromrichtung und Elektronenbewegung",
        paragraphs: [
          "Per Vereinbarung ist die technische Stromrichtung die Bewegungsrichtung positiver Ladungen. Im äußeren Stromkreis fließt der technische Strom vom Pluspol durch den Verbraucher zum Minuspol. Strompfeile im Schaltplan zeigen in diese Richtung. Die Festlegung stammt aus der Zeit vor der Entdeckung des Elektrons und gilt bis heute.",
          "Im Metall bewegen sich die Elektronen entgegengesetzt, vom Minuspol zum Pluspol. Das ist kein Widerspruch: Negative Ladung nach links wirkt wie positive Ladung nach rechts. Die Driftgeschwindigkeit der Elektronen ist gering, das Feld breitet sich aber sehr schnell aus. Die Lampe leuchtet daher sofort, nicht erst wenn ein Elektron den ganzen Weg zurückgelegt hat.",
        ],
        callout: {
          type: "tip",
          title: "Orientierung im Schaltplan",
          text: "Legen Sie bei Berechnungen zuerst eine Stromrichtung (Zählpfeil) fest. Ein negatives Ergebnis bedeutet, dass der technische Strom entgegen dem Pfeil fließt. Es gibt keine „negative Stromstärke“ im physikalischen Sinn.",
        },
      },
      {
        id: "closed-loop",
        title: "4. Warum braucht man einen geschlossenen Stromkreis?",
        paragraphs: [
          "Ein dauerhafter Gleichstrom braucht bewegliche Ladungsträger, ein aufrechterhaltenes Feld und einen geschlossenen Weg. Er führt von einer Klemme der Quelle über Hinleiter und Verbraucher und über den Rückleiter zur anderen Klemme. Im Inneren der Quelle setzt er sich fort. Schließt man nur einen Pol an die Lampe an, verschieben sich kurz Ladungen, ein stabiler Strom fließt aber nicht.",
          "Außerhalb der Quelle treibt das elektrische Feld die Ladungsträger an. In der Quelle trennen chemische Vorgänge die Ladungen und liefern so die Energie für den Verbraucher. Im Elektrolyten wandern Ionen, an den Elektroden laufen Reaktionen ab. Bei der Entladung wird der Vorrat an chemischer Energie aufgebraucht, nicht der Vorrat an Elektronen. Die Lampe wandelt Energie in Licht und Wärme um. Die Ladung bleibt erhalten.",
          "Ein offener Schalter unterbricht den Stromkreis. Der Strom ist dann null, die Klemmenspannung der Quelle bleibt bestehen. Bei einem Kurzschluss werden die Pole über einen sehr kleinen Widerstand verbunden. Nur der Innenwiderstand der Quelle und der Leitung begrenzen dann den Strom. Es entsteht starke Erwärmung, die Quelle kann beschädigt werden. Untersuchen Sie solche Fälle nur rechnerisch oder im Simulator.",
        ],
        callout: {
          type: "warning",
          title: "Geschlossen heißt nicht kurzgeschlossen",
          text: "Ein normaler Stromkreis enthält einen Verbraucher, der den Strom begrenzt und Energie umwandelt. Verwenden Sie für Übungsaufbauten eine strombegrenzte Kleinspannungsquelle und einen geeigneten Verbraucher.",
        },
      },
      {
        id: "ammeter",
        title: "5. So messen Sie die Stromstärke",
        paragraphs: [
          "Das Amperemeter wird in Reihe geschaltet. Dazu trennen Sie den Stromkreis auf und setzen das Gerät in die Lücke. Dann fließt durch das Gerät derselbe Strom wie durch das Bauelement. Ein ideales Amperemeter hat den Innenwiderstand null, ein reales einen sehr kleinen. Es soll den Strom möglichst wenig beeinflussen. Parallel zur Quelle angeschlossen, wirkt es fast wie ein Kurzschluss.",
          "Stellen Sie am Multimeter Gleichstrom (DC) ein. Verwenden Sie die Buchsen COM und A bzw. mA und einen passenden Messbereich. Verdrahten Sie nur im spannungsfreien Zustand um. Ist der Strom unbekannt, beginnen Sie mit dem größten Bereich. Stecken Sie die Messleitung nach der Messung wieder in die Spannungsbuchse zurück. Diese Hinweise gelten nur für Übungsschaltungen mit Kleinspannung, nicht für Messungen an der Steckdose.",
        ],
        callout: {
          type: "insight",
          title: "Hinweis zur Polarität",
          text: "Fließt der Strom in die rote Buchse hinein und über COM heraus, zeigt das Gerät einen positiven Wert. Ein negativer Wert bei Gleichstrom bedeutet bei richtigem Messbereich: Die Polarität ist vertauscht.",
        },
      },
      {
        id: "charge-conservation",
        title: "6. In der Lampe wird kein Strom verbraucht",
        paragraphs: [
          "Im unverzweigten Stromkreis fließt durch jeden Querschnitt pro Sekunde gleich viel Ladung. Fließen vor der Lampe 20 mA, dann auch danach. Die Lampe nimmt elektrische Energie auf und gibt Licht und Wärme ab. Elektronen verbraucht sie nicht. Der Unterschied zwischen Ladung und Energie ist in der Elektrotechnik grundlegend.",
          "Am Knotenpunkt teilt sich der Strom auf: Die Summe der zufließenden Ströme ist gleich der Summe der abfließenden. Sonst würde sich im Knoten Ladung ansammeln. Beispiel: 90 mA teilen sich in 30 mA und 60 mA. Nach dem Zusammenführen sind es wieder 90 mA. Das ist die Knotenregel (1. Kirchhoffsches Gesetz) und folgt aus der Ladungserhaltung.",
        ],
        formula: {
          expression: "ΣIEingang = ΣIAusgang",
          legend:
            "Die Summe der Ströme, die in einen Knoten fließen, ist gleich der Summe der Ströme, die ihn verlassen.",
          note: "Beachten Sie die gewählten Zählpfeile. Wir betrachten stationäre Zustände ohne Ladungsansammlung im Knoten.",
        },
        example: {
          title: "Beispiel: Ladung in zwei Minuten",
          given:
            "Durch eine LED-Schaltung fließen konstant 30 mA. Welche Ladung wird in 2 Minuten transportiert?",
          steps: [
            "Strom umrechnen: I = 30 mA = 0,030 A.",
            "Zeit umrechnen: t = 2 · 60 = 120 s.",
            "Mit Q = I · t: Q = 0,030 · 120 = 3,6 C.",
            "Diese Ladung durchfließt jeden Querschnitt des unverzweigten Stromkreises. Die LED wandelt Energie um, sie verbraucht keine Ladung.",
          ],
          answer: "Es wurde eine Ladung von 3,6 C transportiert.",
        },
      },
    ],
    terms: [
      {
        term: "Elektrische Ladung",
        german: "elektrische Ladung",
        symbol: "Q",
        unit: "C - Coulomb",
        definition:
          "Physikalische Größe, die die elektrische Wechselwirkung von Teilchen und die transportierte Elektrizitätsmenge beschreibt.",
      },
      {
        term: "Stromstärke",
        german: "Stromstärke",
        symbol: "I",
        unit: "A - Ampere",
        definition:
          "Ladung, die pro Zeit durch den Querschnitt eines Leiters fließt; bei Gleichstrom I = Q/t.",
      },
      {
        term: "Gleichstrom",
        german: "Gleichstrom",
        symbol: "DC",
        unit: "—",
        definition:
          "Strom mit gleichbleibender Richtung. Bei konstantem Gleichstrom bleibt zusätzlich der Betrag gleich; pulsierender Gleichstrom kann sich im Betrag ändern.",
      },
      {
        term: "Ladungsträger",
        german: "Ladungsträger",
        symbol: "—",
        unit: "—",
        definition:
          "Geladenes Teilchen, das Ladung transportiert; in Metallen sind Elektronen die beweglichen Ladungsträger.",
      },
      {
        term: "Amperemeter",
        german: "Amperemeter",
        symbol: "A",
        unit: "A - Ampere",
        definition:
          "Messgerät für die Stromstärke; wird in Reihe zum untersuchten Zweig geschaltet.",
      },
      {
        term: "Knoten",
        german: "Knoten",
        symbol: "—",
        unit: "—",
        definition:
          "Verbindungspunkt mehrerer Zweige; im stationären Zustand ist die Summe der zufließenden gleich der Summe der abfließenden Ströme.",
      },
    ],
    summary: [
      "Ein Strom entsteht, wenn ein elektrisches Feld die vorhandenen Ladungsträger in eine Richtung treibt; in Metallen sind das Elektronen.",
      "Für Gleichstrom gilt I = Q/t; 1 A = 1 C/s.",
      "Der technische Strom fließt im äußeren Stromkreis von Plus nach Minus, die Elektronen im Metall in die Gegenrichtung.",
      "Ein dauerhafter Strom braucht einen geschlossenen Stromkreis mit einer Quelle, die das Feld aufrechterhält und Energie liefert.",
      "Das Amperemeter wird in Reihe geschaltet; im unverzweigten Stromkreis ist die Stromstärke überall gleich.",
      "Der Verbraucher wandelt Energie um; die Ladung bleibt im Stromkreis erhalten.",
    ],
    quiz: [
      {
        id: "current-1",
        type: "choice",
        question: "Welche Aussage zur Stromstärke ist richtig?",
        options: [
          "Energie, die jedes Coulomb Ladung aufnimmt",
          "Ladung, die pro Zeiteinheit durch einen Leiterquerschnitt fließt",
          "Mechanische Kraft auf die Elektronen",
          "Anzahl der Elektronen im gesamten Draht",
        ],
        answer: 1,
        explanation:
          "Die Stromstärke gibt an, wie viel Ladung pro Zeit fließt: I = Q/t bei Gleichstrom. Energie pro Ladung ist die Spannung, Kraft wird in Newton gemessen.",
      },
      {
        id: "current-2",
        type: "numeric",
        question:
          "In 8 s fließt eine Ladung von 24 C durch den Drahtquerschnitt. Wie groß ist die Stromstärke bei Gleichstrom in A?",
        answer: 3,
        unit: "A",
        tolerance: 0.01,
        explanation:
          "Mit I = Q/t: 24 C / 8 s = 3 A. Ein Coulomb pro Sekunde ist ein Ampere.",
      },
      {
        id: "current-3",
        type: "choice",
        question:
          "In welche Richtung wandern die Elektronen im metallischen äußeren Stromkreis einer Batterie?",
        options: [
          "Von Plus nach Minus, wie der technische Strom",
          "Von Minus nach Plus, entgegen dem technischen Strom",
          "Sie ruhen, auch wenn Strom fließt",
          "Nur von der Lampe bis zur nächsten Klemme",
        ],
        answer: 1,
        explanation:
          "Elektronen sind negativ geladen. Sie wandern daher vom Minuspol zum Pluspol, also entgegen der technischen Stromrichtung.",
      },
      {
        id: "current-4",
        type: "choice",
        question:
          "Wie wird ein Amperemeter angeschlossen, um den Strom durch einen Widerstand zu messen?",
        options: [
          "Parallel zur Quelle",
          "Parallel zum Widerstand, ohne den Stromkreis aufzutrennen",
          "In Reihe mit dem Widerstand, wobei beim Aufbau die Spannung abgeschaltet ist",
          "Nur eine Messleitung an den Widerstand",
        ],
        answer: 2,
        explanation:
          "In Reihe fließt der gesamte Widerstandsstrom durch das Gerät. Wegen seines kleinen Innenwiderstands wäre der Parallelanschluss an einer Quelle ein gefährlicher Kurzschluss.",
      },
      {
        id: "current-5",
        type: "numeric",
        question:
          "Die Stromstärke beträgt 25 mA. Welche Ladung in C fließt in 40 s durch den Querschnitt?",
        answer: 1,
        unit: "C",
        tolerance: 0.01,
        explanation:
          "Zuerst umrechnen: 25 mA = 0,025 A. Dann Q = I · t = 0,025 · 40 = 1 C. Milliampere dürfen nicht ohne Umrechnung mit Ampere gemischt werden.",
      },
    ],
  },
  {
    id: "circuits",
    number: 2,
    title: "Stromkreisarten",
    german: "Stromkreisarten",
    chapter: "2.2",
    category: "basics",
    duration: 28,
    description:
      "Schaltpläne lesen, Knotenpunkte und Zweige finden sowie Reihen-, Parallel- und gemischte Schaltungen unterscheiden.",
    objectives: [
      "Die Schaltungsart anhand der Knotenpunkte bestimmen, nicht nach der Lage der Bauteile im Plan.",
      "Die Verteilung von Strömen und Spannungen in Reihen- und Parallelschaltungen erklären.",
      "Gemischte Schaltungen schrittweise vereinfachen und das Ergebnis mit den Kirchhoffschen Gesetzen prüfen.",
    ],
    sections: [
      {
        id: "circuit-language",
        title: "1. Stromkreis, Schaltplan, Knotenpunkt und Zweig",
        paragraphs: [
          "Ein Stromkreis besteht aus verbundenen Bauelementen, durch die Strom fließen kann. Die Quelle liefert Energie, der Verbraucher wandelt sie um, Leitungen verbinden die Teile, und ein Schalter öffnet oder schließt den Stromkreis. Der Schaltplan zeigt die elektrischen Verbindungen, nicht die räumliche Lage. Zwei unterschiedlich gezeichnete Pläne können dieselbe Schaltung darstellen.",
          "Ein Knotenpunkt ist eine gemeinsame Verbindung von Leitern. Alle Punkte eines idealen Leiters haben dasselbe Potenzial. Ein Zweig ist ein Abschnitt zwischen zwei Knotenpunkten, in dem überall derselbe Strom fließt. Ein geschlossener Weg heißt Masche. Kreuzen sich Linien, ist das nicht immer eine Verbindung. Entscheidend sind der Verbindungspunkt und die Zeichenregeln. Hilfreich: Denken Sie sich jeden idealen Leiter auf einen Punkt zusammengezogen.",
        ],
        callout: {
          type: "tip",
          title: "Auf die Verbindungen achten, nicht auf die Zeichnung",
          text: "Zwei nebeneinander gezeichnete Widerstände sind nicht automatisch parallel geschaltet. Prüfen Sie, mit welchen beiden Knotenpunkten jeder Widerstand verbunden ist.",
        },
      },
      {
        id: "series",
        title: "2. Reihenschaltung",
        paragraphs: [
          "Bauelemente liegen in Reihe, wenn derselbe Strom durch sie fließt und dazwischen kein Zweig abgeht. Die Ladung hat keinen anderen Weg. Daher gilt I = I₁ = I₂. Die Quellenspannung teilt sich auf: U = U₁ + U₂. Unterbrechen Sie die Reihenschaltung an einer Stelle, fließt in allen Elementen kein Strom mehr.",
          "Der Gesamtwiderstand ist die Summe der Einzelwiderstände: Req = R₁ + R₂ + …. Der Ersatzwiderstand nimmt bei gleicher Spannung denselben Gesamtstrom auf wie die Schaltung. Je größer ein Widerstand, desto größer ist sein Anteil an der Gesamtspannung. Im Beispiel wird U = I · R verwendet; es wird in der Lektion zum Ohmschen Gesetz genauer behandelt.",
        ],
        formula: {
          expression: "I = I₁ = I₂;  U = U₁ + U₂;  Req = R₁ + R₂",
          legend:
            "I – Zweigstrom in A; U – Gesamtspannung in V; Req – Ersatzwiderstand in Ω.",
          note: "Die Summenformel gilt für Widerstände; gleiche Ströme folgen daraus, dass kein Zweig abgeht.",
        },
        example: {
          title: "Beispiel: zwei Widerstände in Reihe",
          given:
            "R₁ = 2 Ω und R₂ = 4 Ω liegen in Reihe an einer 12-V-Quelle. Gesucht sind der Gesamtstrom und die Spannung an jedem Widerstand.",
          steps: [
            "Widerstände addieren: Req = 2 + 4 = 6 Ω.",
            "Gesamtstrom: I = U/Req = 12/6 = 2 A.",
            "Durch beide Widerstände fließt derselbe Strom: U₁ = I · R₁ = 2 · 2 = 4 V; U₂ = 2 · 4 = 8 V.",
            "Probe: U₁ + U₂ = 4 + 8 = 12 V, das ist die Quellenspannung. Am größeren Widerstand fällt mehr Spannung ab.",
          ],
          answer: "Strom 2 A; an R₁ 4 V, an R₂ 8 V.",
        },
      },
      {
        id: "parallel",
        title: "3. Parallelschaltung",
        paragraphs: [
          "Bauelemente liegen parallel, wenn beide Anschlüsse jedes Elements an denselben zwei Knotenpunkten liegen. Dazwischen herrscht dieselbe Spannung: U = U₁ = U₂. Der Quellenstrom teilt sich im Knotenpunkt auf und addiert sich danach wieder: I = I₁ + I₂. Der Zweig mit dem kleineren Widerstand führt bei gleicher Spannung den größeren Strom.",
          "Jeder zusätzliche Zweig erhöht bei konstanter Spannung den Gesamtstrom. Der Ersatzwiderstand sinkt daher und ist immer kleiner als der kleinste Einzelwiderstand. Öffnet man einen Zweig, arbeiten die übrigen weiter. Deshalb werden Verbraucher im Haushalt parallel an dasselbe Netz angeschlossen. Echte Elektroinstallationen erfordern aber fachgerechte Planung und Schutzmaßnahmen.",
        ],
        formula: {
          expression: "U = U₁ = U₂;  I = I₁ + I₂;  1/Req = 1/R₁ + 1/R₂",
          legend:
            "Für zwei Widerstände: Req = (R₁ · R₂)/(R₁ + R₂). Widerstände in Ω.",
          note: "Produkt durch Summe gilt nur für zwei parallele Widerstände. Bei mehreren addiert man die Leitwerte.",
        },
        example: {
          title: "Beispiel: zwei parallele Zweige",
          given:
            "Die Widerstände 6 Ω und 3 Ω liegen parallel an einer idealen 12-V-Quelle. Gesucht sind die Ströme und der Ersatzwiderstand.",
          steps: [
            "An jedem Zweig liegt dieselbe Spannung: U₁ = U₂ = 12 V.",
            "Zweigströme: I₁ = 12/6 = 2 A; I₂ = 12/3 = 4 A.",
            "Gesamtstrom: I = 2 + 4 = 6 A.",
            "Req = U/I = 12/6 = 2 Ω. Probe mit der zweiten Formel: (6 · 3)/(6 + 3) = 18/9 = 2 Ω.",
            "2 Ω sind kleiner als 3 Ω, wie es bei einer Parallelschaltung sein muss.",
          ],
          answer:
            "Zweigströme 2 A und 4 A, Gesamtstrom 6 A, Ersatzwiderstand 2 Ω.",
        },
      },
      {
        id: "mixed",
        title: "4. Gemischte Schaltung: erst vereinfachen, dann zurückrechnen",
        paragraphs: [
          "Eine gemischte Schaltung enthält Reihen- und Parallelgruppen. Man darf nicht einfach alle Widerstände addieren. Suchen Sie zuerst eine Gruppe, die wirklich in Reihe oder parallel liegt, und ersetzen Sie sie durch einen Ersatzwiderstand. Zeichnen Sie die Schaltung neu und wiederholen Sie das, bis nur noch ein Widerstand bleibt.",
          "Danach rechnen Sie zurück: Gesamtstrom, Spannung an jeder Gruppe, dann die Ströme der einzelnen Elemente. Beispiel: 4 Ω in Reihe mit 6 Ω ∥ 3 Ω. Die Parallelgruppe wird zu 2 Ω, der Gesamtwiderstand ist 6 Ω. Bei 12 V fließen 2 A. An 4 Ω fallen 8 V ab, an der Parallelgruppe bleiben 4 V. Die Ströme sind 4/6 ≈ 0,667 A und 4/3 ≈ 1,333 A. Ihre Summe ist 2 A.",
        ],
        callout: {
          type: "insight",
          title: "Nicht jede Schaltung lässt sich so vereinfachen",
          text: "Brückenschaltungen enthalten oft keine einfachen Reihen- und Parallelgruppen. Dann braucht man die Kirchhoffschen Gesetze. Fassen Sie keine Elemente zusammen, wenn zwischen ihnen ein weiterer Zweig abgeht.",
        },
      },
      {
        id: "sources-and-states",
        title: "5. Quellen schalten und Betriebszustände",
        paragraphs: [
          "Bei Reihenschaltung von Quellen mit gleicher Polarität addieren sich die Spannungen: Zwei ideale Zellen mit je 1,5 V ergeben 3 V. Bei entgegengesetzter Polarität werden sie subtrahiert. Reale Quellen haben einen Innenwiderstand und Grenzen bei Strom und Ladeverfahren. Die Rechnung mit idealen Quellen erlaubt daher nicht jede beliebige Schaltung echter Batterien.",
          "Ideale Quellen mit unterschiedlicher Spannung dürfen nicht parallel geschaltet werden. Sie würden zwischen denselben Knotenpunkten verschiedene Spannungen erzwingen. Bei realen Quellen fließt ein großer Ausgleichsstrom, den nur die Innenwiderstände begrenzen. Auch gleiche Nennspannung garantiert keine Verträglichkeit. Parallelbetrieb ist nur bei dafür vorgesehenen und abgesicherten Quellen zulässig. Im Leerlauf ist der Stromkreis offen, es fließt kein Strom. Im Kurzschluss umgeht ein sehr kleiner Widerstand den Verbraucher.",
        ],
        callout: {
          type: "warning",
          title: "Üben mit Quellen",
          text: "Üben Sie das Schalten von Batterien und Akkus rechnerisch oder mit fertigen Lerngeräten. Schließen Sie Pole nie direkt kurz und bauen Sie keine Parallelpacks ohne passenden Schaltplan.",
        },
      },
      {
        id: "circuit-checks",
        title: "6. Schaltplan lesen und Ergebnis prüfen",
        paragraphs: [
          "Beginnen Sie bei der Quelle und markieren Sie beide Klemmen. Benennen Sie die Knotenpunkte, suchen Sie alle Wege dazwischen und tragen Sie die Zählpfeile der Ströme ein. Fragen Sie bei jeder Gruppe: Ist der Strom gleich, weil kein Zweig abgeht? Oder ist die Spannung gleich, weil beide Enden an denselben Knotenpunkten liegen? Erst dann wählen Sie die Formel. Das Amperemeter liegt in Reihe im Zweig, das Voltmeter parallel zum Bauelement.",
          "Prüfen Sie das Ergebnis: In einer Reihenschaltung ergeben die Teilspannungen die Gesamtspannung. Im Knotenpunkt ergeben die Zweigströme den Gesamtstrom. Der Widerstand einer Reihengruppe ist größer als jeder Einzelwiderstand, der einer Parallelgruppe kleiner als der kleinste. Leitungswiderstand, Innenwiderstand der Quelle und Messgeräte können real leicht von der idealen Rechnung abweichen. Verstehen Sie erst das Modell, dann seine Grenzen.",
        ],
        formula: {
          expression: "Am Knoten: ΣIinput = ΣIoutput; im Stromkreis: ΣU = 0",
          legend:
            "Die Knotenregel folgt aus der Ladungserhaltung, die Maschenregel aus der Energiebilanz pro Ladung.",
          note: "In der Maschengleichung zählen Spannungen mit Vorzeichen entsprechend dem gewählten Umlaufsinn. Wir betrachten Schaltungen ohne sich änderndes Magnetfeld.",
        },
      },
    ],
    terms: [
      {
        term: "Reihenschaltung",
        german: "Reihenschaltung",
        symbol: "—",
        unit: "—",
        definition:
          "Bauelemente ohne Abzweig dazwischen; durch sie fließt derselbe Strom.",
      },
      {
        term: "Parallelschaltung",
        german: "Parallelschaltung",
        symbol: "—",
        unit: "—",
        definition:
          "Bauelemente an demselben Knotenpunktpaar; an ihnen liegt dieselbe Spannung.",
      },
      {
        term: "Gemischte Schaltung",
        german: "gemischte Schaltung",
        symbol: "—",
        unit: "—",
        definition: "Schaltung mit Reihen- und Parallelgruppen.",
      },
      {
        term: "Zweig",
        german: "Zweig",
        symbol: "—",
        unit: "—",
        definition:
          "Abschnitt zwischen zwei Knotenpunkten, in dem überall derselbe Strom fließt.",
      },
      {
        term: "Ersatzwiderstand",
        german: "Ersatzwiderstand",
        symbol: "R_ges",
        unit: "Ω - Ohm",
        definition:
          "Widerstand, der eine Widerstandsgruppe ersetzt und bei gleicher Klemmenspannung denselben Gesamtstrom ergibt.",
      },
      {
        term: "Kurzschluss",
        german: "Kurzschluss",
        symbol: "—",
        unit: "—",
        definition:
          "Verbindung über einen sehr kleinen Widerstand, wodurch ein übermäßig großer Strom fließen kann.",
      },
    ],
    summary: [
      "Die Schaltungsart folgt aus den Knotenpunkten, nicht aus der Lage der Bauteile im Plan.",
      "Reihenschaltung: gleicher Strom; Spannungen und Widerstände addieren sich.",
      "Parallelschaltung: gleiche Spannung; Ströme und Leitwerte addieren sich.",
      "Gemischte Schaltungen erst vereinfachen, dann Ströme und Spannungen zurückrechnen.",
      "Ideale Quellen mit unterschiedlicher Spannung dürfen nicht parallel geschaltet werden.",
      "Prüfen Sie die Knotenregel, die Maschenregel und die Plausibilität des Ersatzwiderstands.",
    ],
    quiz: [
      {
        id: "circuits-1",
        type: "choice",
        question: "Wann sind zwei Widerstände parallel geschaltet?",
        options: [
          "Sie werden horizontal gezeichnet",
          "Ein Anschluss des ersten ist mit einem Anschluss des zweiten verbunden",
          "Beide Widerstände liegen an demselben Knotenpunktpaar",
          "Ihre Widerstände sind gleich",
        ],
        answer: 2,
        explanation:
          "Parallelschaltung bedeutet zwei gemeinsame Knotenpunkte. Dann liegt an beiden Elementen dieselbe Spannung, unabhängig von Widerstandswert oder Lage im Plan.",
      },
      {
        id: "circuits-2",
        type: "numeric",
        question:
          "Die Widerstände 120 Ω und 180 Ω liegen in Reihe. Wie groß ist der Ersatzwiderstand in Ω?",
        answer: 300,
        unit: "Ω",
        tolerance: 0.1,
        explanation:
          "Bei Reihenschaltung gilt Req = R₁ + R₂ = 120 + 180 = 300 Ω. Das Ergebnis ist größer als jeder Einzelwiderstand.",
      },
      {
        id: "circuits-3",
        type: "numeric",
        question:
          "Zwei Widerstände von je 12 Ω liegen parallel. Wie groß ist der Ersatzwiderstand in Ω?",
        answer: 6,
        unit: "Ω",
        tolerance: 0.01,
        explanation:
          "1/Req = 1/12 + 1/12 = 2/12, also Req = 6 Ω. Zwei gleiche parallele Zweige ergeben den halben Einzelwiderstand.",
      },
      {
        id: "circuits-4",
        type: "choice",
        question:
          "Der Gesamtstrom zweier Parallelzweige beträgt 0,8 A. Im ersten Zweig fließen 0,3 A. Wie groß ist der Strom im zweiten Zweig?",
        options: ["1,1 A", "0,5 A", "0,24 A", "0,8 A"],
        answer: 1,
        explanation:
          "Nach der Knotenregel gilt I = I₁ + I₂. Also ist I₂ = 0,8 − 0,3 = 0,5 A. Im stationären Zustand sammelt sich im Knotenpunkt keine Ladung an.",
      },
      {
        id: "circuits-5",
        type: "choice",
        question:
          "Was passiert, wenn ein Zweig einer Parallelschaltung an einer idealen Spannungsquelle ausfällt?",
        options: [
          "In allen anderen Zweigen fällt der Strom zwangsläufig aus",
          "Die Spannung der übrigen Zweige verdoppelt sich zwangsläufig",
          "Die übrigen intakten Zweige liegen weiterhin an derselben Spannung",
          "Der Widerstand der übrigen Widerstände wird null",
        ],
        answer: 2,
        explanation:
          "Die übrigen Zweige liegen weiter an denselben Klemmen. Die ideale Quelle hält die Spannung konstant, der Gesamtstrom sinkt um den Strom des getrennten Zweigs.",
      },
    ],
  },
  {
    id: "voltage",
    number: 3,
    title: "Spannungen",
    german: "Spannungen",
    chapter: "2.3",
    category: "basics",
    duration: 26,
    description:
      "Spannung als Energie pro Ladung, als Potenzialdifferenz zwischen zwei Punkten und ihre richtige Messung.",
    objectives: [
      "Die Spannung mit der übertragenen Energie pro Ladung verknüpfen und von der Stromstärke unterscheiden.",
      "Mit Potenzialen, Polarität, Gleich- und Wechselspannung arbeiten.",
      "Das Voltmeter richtig anschließen und die Klemmenspannung unter Belastung berücksichtigen.",
    ],
    sections: [
      {
        id: "energy-per-charge",
        title: "1. Spannung: Wie viel Energie pro Ladung?",
        paragraphs: [
          "Die Stromstärke sagt, wie viel Ladung pro Sekunde fließt. Die Spannung sagt, wie viel Energie je Ladung zwischen zwei Punkten umgesetzt wird. Gibt jedes Coulomb an den Verbraucher 12 J ab, beträgt die Spannung 12 V. Ein Volt ist ein Joule pro Coulomb. Man kann daher 2 A und 12 V nicht vergleichen. Es sind verschiedene Größen.",
          "Die Quelle wandelt zum Beispiel chemische in elektrische Energie um und trennt Ladungen. Ein Verbraucher wie ein Widerstand wandelt die aufgenommene Energie in Wärme um. Bewegt sich eine positive Ladung durch einen passiven Verbraucher vom höheren zum niedrigeren Potenzial, verrichtet das Feld positive Arbeit. In einfachen Energieaufgaben rechnet man mit positiven Beträgen. Bei der Richtungsanalyse beachtet man die Vorzeichen.",
        ],
        formula: {
          expression: "U = W / Q;  W = U · Q",
          legend:
            "U – Spannung in V; W – übertragene Energie oder Arbeit in J; Q – Ladung in C. 1 V = 1 J/C.",
          note: "Gilt für konstante Spannung. Bei Wechselspannung berechnet man die Energie mit dem zeitlichen Verlauf der Spannung.",
        },
        example: {
          title: "Beispiel: Spannung aus der Energie",
          given:
            "Fließt eine Ladung von 5 C durch den Verbraucher, werden 60 J umgesetzt. Gesucht ist die Spannung.",
          steps: [
            "Definition verwenden: U = W/Q.",
            "Einsetzen: U = 60 J / 5 C = 12 J/C.",
            "Wegen 1 J/C = 1 V ergibt sich 12 V.",
            "Deutung: Jedes Coulomb gibt 12 J ab, nicht 60 J.",
          ],
          answer: "Die Spannung am Verbraucher beträgt 12 V.",
        },
      },
      {
        id: "potential-difference",
        title: "2. Potenzial und Bezugspunkt",
        paragraphs: [
          "Das elektrische Potenzial φ beschreibt die potenzielle Energie einer positiven Einheitsladung an einem Punkt. Im Stromkreis wählt man meist einen Punkt als Bezugspunkt mit dem Potenzial null. Alle anderen Potenziale beziehen sich darauf. Der Zahlenwert hängt vom Bezugspunkt ab, wie eine Höhenangabe vom Nullniveau. Physikalisch entscheidend ist die Potenzialdifferenz zwischen zwei Punkten.",
          "Die Spannung U_AB ist definiert als φ_A − φ_B. Mit φ_A = 9 V und φ_B = 4 V gegenüber demselben Bezugspunkt ist U_AB = 5 V. In umgekehrter Reihenfolge gilt U_BA = −5 V. Ein Bezugspunkt im Schaltplan ist nicht unbedingt mit Erde oder Schutzleiter verbunden. Verwechseln Sie das Bezugspotenzial einer Elektronikschaltung nicht mit dem Schutzleiter einer Installation.",
        ],
        formula: {
          expression: "U_AB = φ_A − φ_B;  U_BA = −U_AB",
          legend:
            "φ_A und φ_B – Potenziale der Punkte A und B in V; U_AB – Spannung von A gegenüber B in V.",
          note: "Das Vorzeichen hängt von der Reihenfolge der Punkte ab. Behalten Sie die gewählte Festlegung in der ganzen Rechnung bei.",
        },
        callout: {
          type: "tip",
          title: "Immer zwei Punkte",
          text: "„5 V an einem Punkt“ bedeutet: 5 V gegenüber dem gewählten Bezugspunkt. Geben Sie den Bezugspunkt immer an.",
        },
      },
      {
        id: "voltage-without-current",
        title: "3. Spannung ohne Strom",
        paragraphs: [
          "An den offenen Klemmen einer Batterie liegt Spannung an, obwohl außen kein Gleichstrom fließt. Die Quelle hält die Potenzialdifferenz aufrecht, es fehlt nur der geschlossene Stromkreis. Ebenso kann an einem geladenen Kondensator Spannung herrschen, ohne dass durch das ideale Dielektrikum ein Strom fließt. Spannung und Strom sind verschiedene Zustände.",
          "Schließt man einen Widerstand an die Batterie an, fließt ein Strom. Er hängt von der Spannung und vom Gesamtwiderstand ab. Eine ideale Spannungsquelle hält ihre Spannung bei jeder Belastung konstant. Im einfachen Innenwiderstandsmodell einer realen Batterie sinkt die Klemmenspannung mit wachsendem Strom. Geregelte Netzteile können ihre Spannung dagegen innerhalb des vorgesehenen Lastbereichs annähernd konstant halten. Ihre Strom- und Leistungsgrenzen gelten trotzdem.",
        ],
        formula: {
          expression: "Uterminale = E − I r",
          legend:
            "E – Quellenspannung (EMK) in V; r – Innenwiderstand in Ω; I – Strom der Quelle in A.",
          note: "Einfaches Modell einer entladenden Quelle mit konstanter EMK und konstantem Innenwiderstand. Die Quelle gibt Energie ab. Beim Laden beachtet man Stromrichtung und Vorzeichen gesondert.",
        },
        example: {
          title: "Beispiel: Klemmenspannung unter Last",
          given:
            "Quellenspannung E = 9 V, Innenwiderstand r = 1 Ω. Die Quelle liefert 0,2 A. Wie groß ist die Klemmenspannung?",
          steps: [
            "Spannungsfall am Innenwiderstand: I · r = 0,2 · 1 = 0,2 V.",
            "Beim Entladen ist die Klemmenspannung kleiner als die EMK: U_Kl = E − I · r.",
            "Einsetzen: U_Kl = 9 − 0,2 = 8,8 V.",
            "Im Leerlauf ist I ≈ 0, die Spannung wäre in diesem Modell etwa 9 V.",
          ],
          answer: "Unter dieser Last liegen an den Klemmen 8,8 V.",
        },
      },
      {
        id: "voltmeter",
        title: "4. Spannung richtig messen",
        paragraphs: [
          "Das Voltmeter wird parallel geschaltet. Die beiden Messleitungen kommen an die zwei Punkte, zwischen denen die Spannung gemessen werden soll. Für die Spannung an einem Widerstand legen Sie die Leitungen an seine Anschlüsse. Den Stromkreis müssen Sie dafür nicht auftrennen. Ein ideales Voltmeter hat unendlich großen Innenwiderstand und nimmt keinen Strom auf. Ein reales Gerät hat einen hohen, aber endlichen Eingangswiderstand und kann hochohmige Schaltungen beeinflussen.",
          "Für Batterien wählen Sie Gleichspannung (DC), die Buchsen COM und V und einen Messbereich über der erwarteten Spannung. Liegt die rote Leitung am höheren Potenzial, ist der Wert positiv. Vertauschen der Leitungen kehrt das Vorzeichen um. Zeigt das Gerät im richtigen Bereich −4,5 V, ist die Polarität umgekehrt wie angenommen. Prüfen Sie vor dem Messen, dass die rote Leitung nicht in der Strombuchse steckt. Der Stromeingang hat einen sehr kleinen Widerstand und darf nicht parallel an einer Quelle liegen.",
        ],
        callout: {
          type: "warning",
          title: "Bedingungen für Übungsmessungen",
          text: "Hier geht es um Kleinspannungs-Übungsquellen. Für Messungen an der Netzspannung brauchen Sie ein geeignetes Gerät mit passender Messkategorie und eine Unterweisung. Diese Lektion ist keine Anleitung für Arbeiten an der Steckdose.",
        },
      },
      {
        id: "dc-ac",
        title: "5. Gleich- und Wechselspannung",
        paragraphs: [
          "Eine Gleichspannung behält ihre Polarität. Bei konstanter Gleichspannung bleibt zusätzlich der Betrag gleich: Im u(t)-Diagramm ist sie eine waagerechte Linie. Eine mit DC gekennzeichnete Quelle liefert eine feste Polarität; beim Entladen kann ihr Spannungsbetrag trotzdem sinken. Eine Wechselspannung wechselt ihre Polarität, in den hier betrachteten Beispielen periodisch. Ein typisches Beispiel ist die Sinusspannung.",
          "Eine Sinusspannung hat Augenblickswert, Scheitelwert Û und Effektivwert U_eff. Der Effektivwert erzeugt an demselben Widerstand dieselbe mittlere Wärmeleistung wie eine gleich große Gleichspannung. Für reinen Sinus gilt U_eff = Û/√2. Beispiel: 12 V Effektivwert entsprechen etwa 16,97 V Scheitelwert. Angaben zur Netzspannung oder zur Sekundärspannung eines Transformators sind meist Effektivwerte.",
        ],
        formula: {
          expression: "u(t) = Û · sin(2πft);  U_eff = Û / √2;  T = 1/f",
          legend:
            "u(t) – Augenblickswert der Spannung in V; Û – Scheitelwert in V; f – Frequenz in Hz; T – Periodendauer in s.",
          note: "Der Faktor √2 gilt für einen Sinus ohne Gleichanteil. Bei anderen Kurvenformen berechnet man den Effektivwert anders.",
        },
      },
      {
        id: "voltage-balance",
        title: "6. Spannungs- und Energiebilanz",
        paragraphs: [
          "Im einfachen Stromkreis erhöht die Quelle die potenzielle Energie der Ladung, der Verbraucher senkt sie. Liefert die Quelle 12 V und fallen an zwei Reihenwiderständen 5 V und 7 V ab, nimmt jedes Coulomb 12 J auf und gibt 5 J und 7 J ab. Die Summen sind gleich. Das ist die Energiebedeutung der Maschenregel, solange sich kein Magnetfeld ändert.",
          "Beim Aufsummieren der Spannungen in einer Masche zählen die Vorzeichen. Durchläuft man die Quelle von Minus nach Plus, steigt die Spannung um +12 V. Bei passiven Widerständen in Stromrichtung fällt sie um −5 V und −7 V: +12 − 5 − 7 = 0. Bei parallelen Elementen addiert man die Spannungen nicht, denn alle liegen an denselben Knotenpunkten. Ergibt sich ein Widerspruch, prüfen Sie zuerst Polarität und Schaltungsart.",
        ],
        callout: {
          type: "insight",
          title: "Drei verwandte, aber verschiedene Größen",
          text: "Ladung Q wird in C gemessen, Stromstärke I in C/s, Spannung U in J/C. U · I ergibt J/s, also Leistung. Daraus folgt später P = U · I.",
        },
      },
    ],
    terms: [
      {
        term: "Elektrische Spannung",
        german: "elektrische Spannung",
        symbol: "U",
        unit: "V - Volt",
        definition:
          "Potenzialdifferenz zwischen zwei Punkten; Energie pro übertragener Ladung.",
      },
      {
        term: "Elektrisches Potenzial",
        german: "elektrisches Potenzial",
        symbol: "φ",
        unit: "V - Volt",
        definition:
          "Potenzielle Energie einer positiven Einheitsladung bezogen auf einen gewählten Bezugspunkt.",
      },
      {
        term: "Elektromotorische Kraft",
        german: "elektromotorische Kraft",
        symbol: "E",
        unit: "V - Volt",
        definition:
          "Arbeit der Quellenkräfte pro Ladung; im einfachen Modell gleich der Leerlaufspannung.",
      },
      {
        term: "Voltmeter",
        german: "Voltmeter",
        symbol: "V",
        unit: "V - Volt",
        definition:
          "Hochohmiges Messgerät, das zur Messung der Potenzialdifferenz zwischen zwei Punkten parallel angeschlossen wird.",
      },
      {
        term: "Effektivwert",
        german: "Effektivwert",
        symbol: "U_eff",
        unit: "V - Volt",
        definition:
          "Wert einer Gleichspannung, die an demselben Widerstand dieselbe mittlere Wärmeleistung erzeugt wie die betrachtete Wechselspannung.",
      },
      {
        term: "Polarität",
        german: "Polarität",
        symbol: "+ / −",
        unit: "—",
        definition:
          "Gibt an, welche von zwei Klemmen bei gewählter Spannungsrichtung das höhere Potenzial hat.",
      },
    ],
    summary: [
      "Spannung hängt mit Energie zusammen: U = W/Q; 1 V = 1 J/C.",
      "Spannung gilt zwischen zwei Punkten: U_AB = φ_A − φ_B.",
      "Eine Batterie im Leerlauf hat Spannung, ohne dass außen Gleichstrom fließt.",
      "Das Voltmeter wird parallel geschaltet und muss hochohmig sein.",
      "Im einfachen Modell einer entladenden realen Quelle gilt U_Kl = E − I · r. Die Quelle gibt dabei Energie an den äußeren Stromkreis ab.",
      "Beim Sinus ist der Effektivwert der Scheitelwert geteilt durch √2.",
    ],
    quiz: [
      {
        id: "voltage-1",
        type: "choice",
        question: "Was bedeuten 6 V an einem Verbraucher?",
        options: [
          "Zwangsläufig fließen 6 A durch ihn",
          "Jedes Coulomb gibt 6 J Energie an ihn ab",
          "Genau 6 Elektronen fließen pro Sekunde hindurch",
          "Sein Widerstand muss 6 Ω betragen",
        ],
        answer: 1,
        explanation:
          "1 V = 1 J/C. 6 V bedeuten 6 J pro 1 C übertragener Ladung. Der Strom hängt zusätzlich vom Verbraucher ab.",
      },
      {
        id: "voltage-2",
        type: "numeric",
        question:
          "Beim Durchlaufen von 4 C werden 36 J auf den Verbraucher übertragen. Wie groß ist die Spannung in V?",
        answer: 9,
        unit: "V",
        tolerance: 0.01,
        explanation:
          "U = W/Q = 36 J / 4 C = 9 V. Ladung durch Energie zu teilen wäre nach Definition und Einheit falsch.",
      },
      {
        id: "voltage-3",
        type: "numeric",
        question:
          "Das Potenzial von A beträgt 3 V, das von B 8 V, jeweils gegenüber demselben Bezugspunkt. Bestimmen Sie U_AB = φ_A − φ_B.",
        answer: -5,
        unit: "V",
        tolerance: 0.01,
        explanation:
          "U_AB = 3 − 8 = −5 V. Das Vorzeichen zeigt, dass A ein niedrigeres Potenzial hat als B. Bei vertauschter Reihenfolge wären es +5 V.",
      },
      {
        id: "voltage-4",
        type: "choice",
        question:
          "Wie wird ein Voltmeter angeschlossen, um die Spannung an einem Widerstand zu messen?",
        options: [
          "Nacheinander den Zweig auftrennen",
          "Parallel zu den beiden Anschlüssen des Widerstands",
          "Beide Messleitungen an dieselbe Klemme",
          "Über die Strombuchse statt des V-Eingangs",
        ],
        answer: 1,
        explanation:
          "Das Voltmeter vergleicht die Potenziale beider Anschlüsse, daher liegt es parallel. Sein hoher Widerstand hält die Rückwirkung auf die Schaltung klein.",
      },
      {
        id: "voltage-5",
        type: "choice",
        question: "Welche Aussage über eine Batterie im Leerlauf ist richtig?",
        options: [
          "Ohne Strom liegt auch keine Spannung an der Batterie an",
          "Spannung liegt nur innerhalb der Lampe vor",
          "An den Batterieklemmen kann Spannung anliegen, obwohl der äußere Strom nahezu null ist",
          "In einem offenen Stromkreis ist der Strom zwangsläufig unendlich groß",
        ],
        answer: 2,
        explanation:
          "Die Batterie hält Ladungstrennung und Potenzialdifferenz aufrecht. Für einen Gleichstrom nach außen braucht es zusätzlich einen geschlossenen Stromkreis.",
      },
    ],
  },
  {
    id: "resistance",
    number: 4,
    title: "Elektrischer Widerstand",
    german: "Elektrischer Widerstand",
    chapter: "2.5",
    category: "basics",
    duration: 28,
    description:
      "Woher der Widerstand kommt, wie Material, Abmessungen und Temperatur ihn beeinflussen und wie man ihn misst.",
    objectives: [
      "Den Widerstand durch die Wechselwirkung der Ladungsträger mit dem Leitermaterial erklären.",
      "Den Widerstand aus Spannung und Strom sowie aus spezifischem Widerstand und Geometrie berechnen.",
      "Temperaturabhängigkeit und Toleranz berücksichtigen und den Widerstand sicher an einem spannungsfreien Bauteil messen.",
    ],
    sections: [
      {
        id: "microscopic-resistance",
        title: "1. Warum begrenzt ein Leiter den Strom?",
        paragraphs: [
          "Im Metall treibt das elektrische Feld die Elektronen in eine Richtung. Sie stoßen dabei mit Gitterschwingungen, Störstellen und Fehlstellen zusammen. Die vom Feld aufgenommene Energie wird als Wärme an das Material abgegeben. Für einen bestimmten Strom braucht man deshalb eine Spannung. Wie stark ein Bauelement den Strom begrenzt, beschreibt der Ohmsche Widerstand R.",
          "Bei gleicher Spannung bedeutet ein größerer Widerstand einen kleineren Strom. Die Einheit ist das Ohm (Ω). Fließt bei 1 V ein Strom von 1 A, ist U/I = 1 Ω. Ein Widerstand ist ein Bauelement mit festgelegtem Widerstandswert. Widerstand als Eigenschaft haben auch Leitungen, Kontakte und Wicklungen. Ladung bleibt dabei nicht im Bauelement hängen, sie fließt im stationären Zustand weiter.",
        ],
        formula: {
          expression: "R = U / I;  1 Ω = 1 V/A",
          legend:
            "R – Widerstand in Ω; U – Spannung am Bauelement in V; I – Strom durch das Bauelement in A.",
          note: "U/I ist der statische Widerstand im gewählten Arbeitspunkt. Nur bei einem ohmschen Bauelement ist er unter konstanten Bedingungen von Strom und Spannung unabhängig.",
        },
        example: {
          title: "Beispiel: Widerstand aus Messwerten",
          given:
            "Am Widerstand werden 6 V gemessen, der Strom beträgt 20 mA. Gesucht ist der Widerstand.",
          steps: [
            "Strom in A umrechnen: 20 mA = 0,020 A.",
            "Mit R = U/I: R = 6/0,020 = 300 Ω.",
            "Probe: U = I · R = 0,020 · 300 = 6 V.",
            "Würde man 20 mA nicht umrechnen, wäre das Ergebnis um den Faktor 1000 zu klein.",
          ],
          answer: "Der Widerstand beträgt 300 Ω.",
        },
      },
      {
        id: "material-and-geometry",
        title: "2. Material, Länge und Querschnittsfläche",
        paragraphs: [
          "Der Widerstand eines homogenen Leiters hängt von Material und Form ab. Je länger der Draht, desto größer der Widerstand: Die Ladungsträger wechselwirken über eine längere Strecke mit dem Material. Je größer die Querschnittsfläche, desto kleiner der Widerstand. In der Formel steht die Fläche, nicht der Durchmesser. Für einen runden Draht gilt S = πd²/4. Doppelter Durchmesser ergibt also die vierfache Fläche.",
          "Das Material beschreibt der spezifische Widerstand ρ. Seine SI-Einheit ist Ω m. Bei Drähten rechnet man bequem in Ω · mm²/m, wenn die Fläche in mm² und die Länge in m angegeben sind. Für Kupfer bei 20 °C nimmt man oft ρ ≈ 0,0175 Ω mm²/m an. Das ist ein Näherungswert, er hängt von Zusammensetzung und Temperatur ab. Bei einer Zweidrahtleitung zählt die Länge von Hin- und Rückleiter: Ein Verbraucher in 10 m Entfernung bedeutet meist 20 m Leitungslänge.",
        ],
        formula: {
          expression: "R = ρ l / S; S = π d² / 4",
          legend:
            "ρ – spezifischer Widerstand; l – Länge in m; S – Querschnittsfläche; d – Durchmesser.",
          note: "Die Formel gilt für einen homogenen Leiter mit konstantem Querschnitt bei gegebener Temperatur. Verwenden Sie zueinander passende Einheiten für Fläche und ρ.",
        },
        example: {
          title: "Beispiel: Widerstand einer Kupferleitung",
          given:
            "Ein Verbraucher ist 10 m von der Quelle entfernt und mit zwei Kupferdrähten von je 1 mm² Querschnitt angeschlossen. Es gilt ρ = 0,0175 Ω mm²/m. Gesucht ist der Widerstand beider Drähte zusammen.",
          steps: [
            "Der Strom fließt über den Hinleiter zum Verbraucher und über den Rückleiter zurück: l = 10 + 10 = 20 m.",
            "Die Fläche S = 1 mm² passt zur Einheit des spezifischen Widerstands.",
            "R_Ltg = ρ · l/S = 0,0175 · 20/1 = 0,35 Ω.",
            "Bei 2 A beträgt der Spannungsfall auf der Leitung U_Ltg = 2 · 0,35 = 0,7 V. Leitungen darf man daher nicht immer als ideal annehmen.",
          ],
          answer:
            "Der Gesamtwiderstand von Hin- und Rückleiter beträgt 0,35 Ω.",
        },
      },
      {
        id: "temperature",
        title: "3. Die Temperatur verändert den Widerstand",
        paragraphs: [
          "Erwärmt man einen Metalleiter, schwingt das Kristallgitter stärker, und der Widerstand steigt meist. In einem kleinen Temperaturbereich ist der Verlauf annähernd linear: R(T) = R₀[1 + α(T − T₀)]. Der Temperaturkoeffizient α gibt die relative Widerstandsänderung je Kelvin an, Einheit K⁻¹. Eine Temperaturdifferenz in °C ist zahlenmäßig gleich der in K.",
          "Für Kupfer nahe 20 °C gilt α ≈ 0,00393 K⁻¹. Hat eine Kupferwicklung bei 20 °C 10 Ω, ergibt das lineare Modell bei 70 °C: 10 · [1 + 0,00393 · 50] ≈ 11,97 Ω. Nicht alle Werkstoffe verhalten sich so: Der Widerstand eines NTC-Thermistors sinkt bei Erwärmung, der eines PTC-Elements steigt. Die lineare Formel gilt nicht ohne Prüfung für beliebige Werkstoffe und große Temperaturbereiche.",
        ],
        formula: {
          expression: "R(T) ≈ R₀ · [1 + α · (T − T₀)]",
          legend:
            "R₀ – Widerstand bei der Temperatur T₀; α – Temperaturkoeffizient in K⁻¹.",
          note: "Die Näherung gilt dort, wo α als konstant angesehen werden kann. Maßgeblich ist die Temperatur des Bauteils selbst, nicht die der Umgebungsluft.",
        },
        callout: {
          type: "insight",
          title: "Warum unterscheidet sich eine kalte von einer heißen Lampe?",
          text: "Der Metallfaden einer Glühlampe hat kalt einen deutlich kleineren Widerstand als im Betrieb. Beim Einschalten ist der Strom kurzzeitig größer als der Dauerstrom. Mit dem Ohmmeter am kalten Faden lässt sich der Betriebsstrom daher nicht vorhersagen.",
        },
      },
      {
        id: "resistors-tolerance",
        title: "4. Nennwert, Toleranz und Belastbarkeit",
        paragraphs: [
          "Bei einem realen Widerstand sind Nennwiderstand und Toleranz angegeben. Ein Widerstand mit 1 kΩ und ±5 % darf einen Wert von 950 bis 1050 Ω haben. Die Toleranz ist die zulässige Fertigungsabweichung, kein Fehler, der zu jeder Messung hinzukommt. Die Nennwerte stammen aus genormten Reihen. Die Kennzeichnung erfolgt mit Ziffern oder Farbringen.",
          "Beachten Sie auch die Verlustleistung. Ein Widerstand erwärmt sich: P = I²R = U²/R. Liegen an 100 Ω 10 V an, beträgt die Leistung 1 W. Ein Widerstand mit 0,25 W Nennleistung ist dafür im Dauerbetrieb ungeeignet, auch wenn der Widerstandswert stimmt. Die zulässige Leistung hängt zudem von Temperatur und Kühlung ab. Planen Sie Reserve ein und beachten Sie die Herstellerangaben.",
        ],
        callout: {
          type: "tip",
          title: "Drei Kenngrößen bei der Auswahl eines Widerstands",
          text: "Prüfen Sie Widerstandswert, Toleranz und Belastbarkeit. Bei kritischen Schaltungen kommen Betriebsspannung, Temperaturkoeffizient und Kühlung hinzu.",
        },
      },
      {
        id: "ohmmeter",
        title: "5. Messen mit dem Ohmmeter und Einfluss der Schaltung",
        paragraphs: [
          "Das Ohmmeter erzeugt selbst einen kleinen Messstrom und bestimmt daraus den Widerstand. Deshalb darf nur in einer spannungsfreien Schaltung gemessen werden. Schalten Sie vorher die Versorgung ab, entladen Sie Energiespeicher auf sichere Weise und prüfen Sie die Spannungsfreiheit. Schließen Sie das Gerät im Ω-Bereich nie an eine eingeschaltete Quelle an. Der Messwert wäre falsch, und das Gerät kann beschädigt werden.",
          "Bleibt der Widerstand in der Schaltung, können parallele Zweige den gemessenen Wert verringern. Meist genügt es, einen Anschluss des Bauteils im spannungsfreien Zustand abzulöten oder abzutrennen. Bei kleinen Widerständen wirken Leitungs- und Übergangswiderstände. Bei sehr großen Widerständen kann Berühren der Messspitzen den Wert verfälschen. „OL“ bedeutet meist Bereichsüberschreitung oder offenen Stromkreis, nicht genau unendlich. Die Bedeutung steht in der Bedienungsanleitung.",
        ],
        callout: {
          type: "warning",
          title: "Auch ein Kondensator kann Restenergie speichern",
          text: "Ein abgeklemmter Akku garantiert keine Spannungsfreiheit: Ein geladener Kondensator kann Spannung speichern. Entladen Sie ihn nicht durch einen Kurzschluss. Nutzen Sie die in der Übungsschaltung vorgesehene Methode.",
        },
      },
      {
        id: "conductance-and-models",
        title: "6. Leitwert und Grenzen des einfachen Modells",
        paragraphs: [
          "Der Kehrwert des Widerstands ist der Leitwert G = 1/R. Die Einheit ist das Siemens (S). Ein Widerstand von 100 Ω hat den Leitwert 0,01 S oder 10 mS. Bei Parallelschaltung addieren sich die Leitwerte: Jeder neue Zweig bietet einen zusätzlichen Weg für die Ladung, also Gges = G₁ + G₂. Verwechseln Sie das Einheitenzeichen S nicht mit dem Formelzeichen S für die Fläche. Der Zusammenhang zeigt, was gemeint ist.",
          "Ein idealer Leiter hat R = 0, eine Unterbrechung hat unendlich großen Widerstand. Das sind nützliche Grenzfälle. Real hat jeder Draht einen Widerstand, und eine Isolierung kann bei zu hoher Spannung durchschlagen. Bei nichtlinearen Bauelementen wie Diode oder Glühlampe ändert sich U/I mit dem Arbeitspunkt. Die nächste Lektion zeigt, wann der Widerstand als konstant gilt und das Ohmsche Gesetz in einfacher Form anwendbar ist.",
        ],
        formula: {
          expression: "G = 1/R;  Gparallel = G₁ + G₂ + …",
          legend: "G – Leitwert in S; R – Widerstand in Ω; 1 S = 1/Ω.",
          note: "Für R > 0 gilt: größerer Widerstand, kleinerer Leitwert. Bei nichtlinearen Bauelementen muss der Arbeitspunkt angegeben werden.",
        },
      },
    ],
    terms: [
      {
        term: "Elektrischer Widerstand",
        german: "elektrischer Widerstand",
        symbol: "R",
        unit: "Ω - Ohm",
        definition:
          "Größe, die Spannung und Strom verknüpft: im Arbeitspunkt R = U/I; bei ohmschen Bauelementen unter konstanten Bedingungen konstant.",
      },
      {
        term: "Spezifischer Widerstand",
        german: "spezifischer Widerstand",
        symbol: "ρ",
        unit: "Ω · m",
        definition:
          "Werkstoffkenngröße in der Formel R = ρl/S für einen homogenen Leiter.",
      },
      {
        term: "Elektrischer Leitwert",
        german: "elektrischer Leitwert",
        symbol: "G",
        unit: "S - Siemens",
        definition: "Kehrwert des Widerstands: G = 1/R.",
      },
      {
        term: "Temperaturkoeffizient",
        german: "Temperaturkoeffizient",
        symbol: "α",
        unit: "K⁻¹",
        definition:
          "Koeffizient der relativen Widerstandsänderung bei Temperaturänderung im gültigen Bereich.",
      },
      {
        term: "Toleranz",
        german: "Toleranz",
        symbol: "± %",
        unit: "%",
        definition:
          "Zulässige Abweichung des Widerstands eines realen Bauelements vom Nennwert.",
      },
      {
        term: "Ohmmeter",
        german: "Ohmmeter",
        symbol: "Ω",
        unit: "Misst Ω",
        definition:
          "Messgerät für den Widerstand eines spannungsfreien Bauelements mit eigenem Messstrom.",
      },
    ],
    summary: [
      "Der Widerstand begrenzt den Strom; im Arbeitspunkt gilt R = U/I, Einheit Ohm.",
      "Für einen homogenen Draht gilt R = ρl/S: Mehr Länge erhöht, mehr Querschnitt verringert den Widerstand.",
      "Bei einer Zweidrahtleitung zählen Hin- und Rückleiter. Die Kreisfläche ist proportional zum Quadrat des Durchmessers.",
      "Der Widerstand von Metallen steigt meist mit der Temperatur; die lineare Formel gilt nur in einem begrenzten Bereich.",
      "Bei der Auswahl eines Widerstands prüfen Sie Nennwert, Toleranz und Belastbarkeit.",
      "Das Ohmmeter wird nur an spannungsfreien Bauteilen verwendet; Parallelzweige und Restladungen verfälschen die Messung oder sind gefährlich.",
    ],
    quiz: [
      {
        id: "resistance-1",
        type: "numeric",
        question:
          "Am Bauelement liegen 12 V an, es fließen 30 mA. Wie groß ist der Widerstand in Ω?",
        answer: 400,
        unit: "Ω",
        tolerance: 0.1,
        explanation:
          "30 mA = 0,030 A. R = U/I = 12/0,030 = 400 Ω. Die Umrechnung von mA in A ist nötig.",
      },
      {
        id: "resistance-2",
        type: "choice",
        question:
          "Wie ändert sich der Widerstand eines homogenen Drahtes, wenn die Länge bei gleicher Fläche und Temperatur verdoppelt wird?",
        options: [
          "Wird halbiert",
          "Bleibt unverändert",
          "Verdoppelt sich",
          "Vervierfacht sich",
        ],
        answer: 2,
        explanation:
          "Aus R = ρl/S folgt: Der Widerstand ist proportional zur Länge. Mit l₂ = 2l₁ und konstanten ρ und S ergibt sich R₂ = 2R₁.",
      },
      {
        id: "resistance-3",
        type: "choice",
        question:
          "Der Durchmesser eines Runddrahtes wird verdoppelt. Material, Länge und Temperatur bleiben gleich. Was geschieht mit dem Widerstand?",
        options: [
          "Sinkt auf ein Viertel",
          "Wird halbiert",
          "Verdoppelt sich",
          "Bleibt unverändert",
        ],
        answer: 0,
        explanation:
          "S = πd²/4: Doppelter Durchmesser ergibt vierfache Fläche. Da R umgekehrt proportional zur Fläche ist, sinkt der Widerstand auf ein Viertel.",
      },
      {
        id: "resistance-4",
        type: "numeric",
        question:
          "Ein Widerstand mit 1000 Ω hat eine Toleranz von ±5 %. Wie groß ist der größte zulässige Widerstand in Ω?",
        answer: 1050,
        unit: "Ω",
        tolerance: 0.1,
        explanation:
          "5 % von 1000 Ω sind 1000 · 0,05 = 50 Ω. Der obere Grenzwert ist 1000 + 50 = 1050 Ω; der untere wäre 950 Ω.",
      },
      {
        id: "resistance-5",
        type: "choice",
        question:
          "Wie misst man den Widerstand eines Widerstands in einer aufgebauten Schaltung richtig?",
        options: [
          "Die Spannung einschalten, um die Messung mit dem Ohmmeter zu erleichtern",
          "Spannung abschalten, Spannungsfreiheit prüfen und bei Parallelzweigen einen Anschluss abtrennen",
          "Strommessbereich einstellen und die Messleitungen parallel anlegen",
          "Zuerst alle Kondensatoren mit einem Metallwerkzeug kurzschließen",
        ],
        answer: 1,
        explanation:
          "Das Ohmmeter nutzt einen eigenen Messstrom und ist für spannungsfreie Objekte gedacht. Parallele Zweige können den Messwert senken, daher trennt man einen Anschluss des Widerstands ab. Restenergie wird nur auf sichere Weise abgeführt.",
      },
    ],
  },
  {
    id: "ohm",
    number: 5,
    title: "Ohmsches Gesetz",
    german: "Ohmsches Gesetz",
    chapter: "2.8",
    category: "basics",
    duration: 30,
    description:
      "Stromstärke, Spannung und Widerstand verknüpfen und Aufgaben mit Einheiten, Kennlinien und realen Einschränkungen lösen.",
    objectives: [
      "U = I · R anwenden und die passende Form der Gleichung wählen.",
      "Die Strom-Spannungs-Kennlinie lesen und prüfen, ob ein Bauelement ohmsch ist.",
      "Widerstandsschaltungen berechnen und das ideale Modell vom realen Verhalten von Quelle und Verbraucher unterscheiden.",
    ],
    sections: [
      {
        id: "ohmic-law",
        title: "1. Was sagt das Ohmsche Gesetz?",
        paragraphs: [
          "Bei einem ohmschen Leiter ist der Strom unter konstanten Bedingungen proportional zur angelegten Spannung. Doppelte Spannung ergibt doppelten Strom, dreifache Spannung dreifachen. Im Zusammenhang I = U/R ist der Proportionalitätsfaktor zwischen Strom und Spannung der Leitwert, also der Kehrwert des Widerstands. Gleichwertig ist U = I · R. Gemeint sind die Spannung an einem Bauelement, der Strom durch dasselbe Bauelement und sein Widerstand.",
          "Die Bedingung konstanter Widerstand ist wesentlich. Temperatur, Material und Geometrie müssen nahezu unverändert bleiben. U/I lässt sich in jedem Arbeitspunkt bilden, beweist aber noch kein ohmsches Verhalten. Ohmsch heißt: Das Verhältnis bleibt bei Spannungsänderung konstant. Diode und stark erhitzter Glühfaden werden nicht über den ganzen Bereich durch ein konstantes R beschrieben.",
        ],
        formula: {
          expression: "U = I · R;  I = U / R;  R = U / I",
          legend: "U – Spannung in V; I – Strom in A; R – Widerstand in Ω.",
          note: "U und I beziehen sich auf dasselbe Bauelement. Ein konstantes R setzt ein ohmsches Bauelement und konstante Bedingungen voraus, vor allem die Temperatur.",
        },
        callout: {
          type: "insight",
          title: "Ein Gesetz, keine allgemeine Definition",
          text: "R = U/I liefert den statischen Widerstand in einem Punkt. Das Ohmsche Gesetz sagt zusätzlich, dass dieses Verhältnis bei einem ohmschen Bauelement unter bestimmten Bedingungen konstant bleibt.",
        },
      },
      {
        id: "solving-with-units",
        title: "2. Lösungsweg ohne Raten",
        paragraphs: [
          "Notieren Sie zuerst, was gegeben und was gesucht ist. Achten Sie darauf, zu welchem Bauelement die Werte gehören. Rechnen Sie in passende Einheiten um und stellen Sie U = I · R nach der Unbekannten um, bevor Sie Zahlen einsetzen. Strom: Spannung durch Widerstand. Widerstand: Spannung durch Strom. Schreiben Sie die Einheit dazu und prüfen Sie, ob die Größenordnung plausibel ist.",
          "Am sichersten rechnet man in V, A und Ω. Passende Vorsätze erleichtern aber manche Rechnung: V/kΩ ergibt mA, und mA · kΩ ergibt V. Beispiel: 5 V / 1 kΩ = 5 mA. Fehler entstehen, wenn aus 1000 Ω unbemerkt 1 Ω oder aus 20 mA 20 A wird. Schreiben Sie die Umrechnung auf: 2,2 kΩ = 2200 Ω; 470 mA = 0,470 A; 250 mV = 0,250 V.",
        ],
        example: {
          title: "Beispiel: Strom durch einen Widerstand von 2,2 kΩ",
          given:
            "Eine ideale 11-V-Quelle liegt an einem ohmschen Widerstand von 2,2 kΩ. Gesucht ist der Strom.",
          steps: [
            "Gegeben: U = 11 V, R = 2,2 kΩ = 2200 Ω. Gesucht: I.",
            "Nach dem Strom umstellen: I = U/R.",
            "Einsetzen: I = 11/2200 = 0,005 A = 5 mA.",
            "Probe: I · R = 0,005 · 2200 = 11 V.",
            "Plausibilität: Einige tausend Ohm an wenigen Volt ergeben einen Strom im Bereich von Milliampere.",
          ],
          answer: "Durch den Widerstand fließen 5 mA.",
        },
      },
      {
        id: "characteristic",
        title: "3. Kennlinie: das Gesetz im Diagramm",
        paragraphs: [
          "Die Strom-Spannungs-Kennlinie zeigt, wie der Strom von der Spannung abhängt. Trägt man U waagerecht und I senkrecht auf, ist sie bei einem ohmschen Widerstand eine Gerade durch den Ursprung. Ihre Steigung ist I/U = 1/R, also der Leitwert. Eine steilere Gerade bedeutet ein kleineres R. Trägt man U(I) auf, ist die Steigung R. Prüfen Sie deshalb immer zuerst die Achsenbeschriftung.",
          "Angenommen, die Messung ergibt 2 V und 10 mA, 4 V und 20 mA, 6 V und 30 mA. Immer ist R = 200 Ω, das passt zum ohmschen Modell. Beträgt der Strom bei 6 V nur 25 mA, ist das Verhältnis schon 240 Ω. Dann muss man Erwärmung, Nichtlinearität oder Messfehler untersuchen. Ein einzelner Punkt beweist die Linearität nicht. Messen Sie nur innerhalb der zulässigen Strom- und Leistungsgrenzen, sonst verändert die Erwärmung das Messobjekt selbst.",
        ],
        formula: {
          expression: "Im I(U)-Diagramm gilt: Steigung = ΔI/ΔU = 1/R",
          legend:
            "ΔI – Stromänderung in A; ΔU – zugehörige Spannungsänderung in V.",
          note: "Bei der linearen Kennlinie eines ohmschen Widerstands ist die Steigung konstant. Bei nichtlinearen Kennlinien sind die örtliche Steigung und das Verhältnis U/I verschiedene Größen.",
        },
        callout: {
          type: "tip",
          title: "Schnelle Plausibilitätsprüfung",
          text: "Bei konstantem R muss mit größerem U auch I größer werden. Bei konstantem U muss mit größerem R der Strom I kleiner werden. Zeigt die Rechnung etwas anderes, sind meist Formel oder Einheiten falsch.",
        },
      },
      {
        id: "design-resistor",
        title: "4. Widerstand auswählen und Erwärmung prüfen",
        paragraphs: [
          "Mit dem Ohmschen Gesetz berechnet man nicht nur den Strom, sondern wählt auch einen Widerstand für einen Betriebspunkt. Sollen bei 15 mA 9 V abfallen, braucht man R = 9/0,015 = 600 Ω. Bei Normreihen und Toleranzen nimmt man den nächstgeeigneten Wert und rechnet nach. Den Widerstand wählt man nie ohne die Leistung: Das Bauteil muss die entstehende Wärme sicher abgeben.",
          "Für einen ohmschen Widerstand gilt: P = U · I = I²R = U²/R. Diese Beziehungen folgen aus der Definition der Leistung und dem Ohmschen Gesetz. Bei festem U steigen mit kleinerem R sowohl Strom als auch Erwärmung. Bei festem I steigt die Erwärmung mit größerem R. Klären Sie vor dem Vergleichen, welche Größe wirklich konstant bleibt.",
        ],
        example: {
          title: "Beispiel: Widerstand für einen bestimmten Strom",
          given:
            "Am Widerstand sollen bei 20 mA 6 V abfallen. Gesucht sind der Widerstand und die Verlustleistung. Beurteilen Sie, ob ein Widerstand mit 0,25 W geeignet ist.",
          steps: [
            "Strom umrechnen: 20 mA = 0,020 A.",
            "Widerstand: R = U/I = 6/0,020 = 300 Ω.",
            "Leistung: P = U · I = 6 · 0,020 = 0,12 W.",
            "Probe mit anderer Form: I²R = 0,020² · 300 = 0,12 W.",
            "0,12 W sind weniger als 0,25 W. Bei geeigneter Temperatur und Kühlung passt diese Nennleistung. Die endgültige Auswahl prüft man mit den Herstellerangaben.",
          ],
          answer:
            "Benötigt wird ein Widerstand von 300 Ω; die Verlustleistung beträgt 0,12 W. Unter geeigneten Bedingungen genügen 0,25 W Nennleistung.",
        },
      },
      {
        id: "whole-circuit",
        title:
          "5. Ohmsches Gesetz für den ganzen Stromkreis und die reale Quelle",
        paragraphs: [
          "Den Gesamtstrom einer Widerstandsschaltung an einer idealen Quelle bestimmen Sie so: Zuerst den Ersatzwiderstand berechnen, dann I = U/Req. Danach gehen Sie zu den Einzelelementen zurück: In der Reihenschaltung ist der Strom bekannt, in der Parallelschaltung die Spannung. Die ganze Quellenspannung darf man nicht durch einen einzelnen Reihenwiderstand teilen, wenn an ihm nur ein Teil der Spannung abfällt.",
          "Bei einer realen Quelle mit EMK E und Innenwiderstand r liegt der äußere Widerstand R in Reihe mit r. Es gilt I = E/(R + r) und für die Klemmenspannung U = I · R = E − I · r. Beispiel: E = 12 V, r = 1 Ω, R = 5 Ω ergibt 2 A und 10 V am Verbraucher. Die fehlenden 2 V fallen am Innenwiderstand ab. Das Modell erklärt den Spannungseinbruch, ersetzt aber nicht die Herstellerangaben zu Strombegrenzung und Schutz.",
        ],
        formula: {
          expression: "I = E / (R + r);  Uload = I R = E − I r",
          legend:
            "E – EMK in V; R – äußerer Lastwiderstand in Ω; r – Innenwiderstand der Quelle in Ω.",
          note: "Betrachtet wird eine entladende Quelle im einfachen stationären Zustand. Für r = 0 erhält man die ideale Spannungsquelle.",
        },
      },
      {
        id: "boundaries-and-review",
        title: "6. Wo das Gesetz nicht in einfacher Form gilt",
        paragraphs: [
          "Glühlampe, Diode, Batterie und elektronische Baugruppen sind nicht unbedingt Widerstände mit konstantem R. Bei der Diode hängt der Strom stark nichtlinear von der Spannung ab. Bei der Glühlampe ändert die Erwärmung den Widerstand. Bei Kondensator und Spule ist der Strom in Ausgleichsvorgängen mit der Änderung von Spannung bzw. Magnetfluss verbunden. Man kann sie nicht durch einen konstanten Widerstand ersetzen. Bei Wechselstrom mit Blindelementen verwendet man die Impedanz.",
          "Praktischer Ablauf: Bauelement und Betriebszustand bestimmen, ein passendes Modell wählen, die Spannung genau an diesem Bauelement ablesen, Einheiten prüfen, rechnen. Danach kontrollieren Sie Knotenregel, Maschenregel und Leistung. Ist das Ergebnis unerwartet groß, probieren Sie es nicht am realen Aufbau aus. Prüfen Sie zuerst Vorsätze, Kurzschlüsse und die Grenzen des Modells. Der unendlich große Strom bei R = 0 an einer idealen Quelle zeigt nur, dass die Idealisierung nicht passt.",
        ],
        callout: {
          type: "insight",
          title: "Eine Formel, drei Fragestellungen",
          text: "Sind U und R gegeben, suchen Sie den Strom. Sind I und R gegeben, suchen Sie die Spannung. Sind U und I gegeben, suchen Sie den Widerstand. Eine gute Lösung beginnt damit, zu klären, was bekannt ist und was konstant bleibt.",
        },
      },
    ],
    terms: [
      {
        term: "Ohmsches Gesetz",
        german: "Ohmsches Gesetz",
        symbol: "U = I · R",
        unit: "V = A · Ω",
        definition:
          "Bei einem ohmschen Bauelement ist der Strom unter konstanten Bedingungen proportional zur Spannung; das Verhältnis ist der konstante Widerstand.",
      },
      {
        term: "Ohmscher Widerstand",
        german: "ohmscher Widerstand",
        symbol: "R",
        unit: "Ω - Ohm",
        definition:
          "Bauelement mit im betrachteten Bereich nahezu konstantem Widerstand.",
      },
      {
        term: "Strom-Spannungs-Kennlinie",
        german: "Strom-Spannungs-Kennlinie",
        symbol: "I(U)",
        unit: "Diagramm A von V",
        definition:
          "Abhängigkeit des Stroms durch ein Bauelement von der Spannung an seinen Klemmen.",
      },
      {
        term: "Arbeitspunkt",
        german: "Arbeitspunkt",
        symbol: "(U, I)",
        unit: "V, A",
        definition:
          "Zusammengehöriges Wertepaar aus Spannung und Strom, das den Betriebszustand des Bauelements beschreibt.",
      },
      {
        term: "Innenwiderstand",
        german: "Innenwiderstand",
        symbol: "r",
        unit: "Ω - Ohm",
        definition:
          "Kenngröße des einfachen Quellenmodells; erklärt Verluste und den Einbruch der Klemmenspannung unter Last.",
      },
      {
        term: "Lineare Kennlinie",
        german: "lineare Kennlinie",
        symbol: "—",
        unit: "—",
        definition:
          "Kennlinie eines ohmschen Widerstands: Gerade durch den Ursprung, der Strom ist proportional zur Spannung.",
      },
    ],
    summary: [
      "Grundformen des Ohmschen Gesetzes: U = I · R, I = U/R, R = U/I.",
      "Ein konstantes R setzt ein ohmsches Bauelement und konstante Bedingungen voraus, vor allem konstante Temperatur.",
      "Verwenden Sie Spannung und Strom desselben Bauelements. Rechnen Sie Vorsätze vor der Rechnung um.",
      "Im I(U)-Diagramm eines ohmschen Widerstands ist die Kennlinie eine Gerade durch den Ursprung mit der Steigung 1/R.",
      "Prüfen Sie nach der Widerstandsberechnung die Leistung P = U · I und die zulässige Erwärmung.",
      "Für eine Quelle mit Innenwiderstand gilt I = E/(R + r); Dioden und Blindelemente brauchen andere Modelle.",
    ],
    quiz: [
      {
        id: "ohm-1",
        type: "numeric",
        question:
          "An einem ohmschen Widerstand von 400 Ω liegen 8 V. Wie groß ist der Strom in mA?",
        answer: 20,
        unit: "mA",
        tolerance: 0.1,
        explanation:
          "I = U/R = 8/400 = 0,020 A. Mit 1000 multipliziert ergeben sich 20 mA. Gefragt ist hier die Einheit mA.",
      },
      {
        id: "ohm-2",
        type: "numeric",
        question:
          "Durch einen Widerstand von 1,5 kΩ fließen 4 mA. Wie groß ist die Spannung in V?",
        answer: 6,
        unit: "V",
        tolerance: 0.01,
        explanation:
          "R = 1500 Ω, I = 0,004 A. U = I · R = 0,004 · 1500 = 6 V. Man kann auch direkt mA · kΩ = V verwenden.",
      },
      {
        id: "ohm-3",
        type: "choice",
        question:
          "Unter welcher Bedingung verdoppelt sich der Strom durch einen ohmschen Widerstand, wenn sich die Spannung verdoppelt?",
        options: [
          "Wenn sein Widerstand konstant bleibt, ändert sich auch die Temperatur praktisch nicht",
          "Für jedes Bauelement, unabhängig von seinen Eigenschaften",
          "Nur wenn sich auch der Widerstand verdoppelt",
          "Nur wenn die Spannung null ist",
        ],
        answer: 0,
        explanation:
          "Bei konstantem R folgt die Proportionalität aus I = U/R. Wird das Bauelement heiß oder ist es nichtlinear, kann sich der Widerstand ändern, und der Strom verdoppelt sich nicht.",
      },
      {
        id: "ohm-4",
        type: "choice",
        question:
          "Im I(U)-Diagramm zweier ohmscher Widerstände ist die erste Gerade steiler als die zweite. Was bedeutet das?",
        options: [
          "Der Widerstand des ersten ist größer",
          "Die Widerstände müssen gleich sein",
          "Der Widerstand des ersten ist kleiner",
          "Der erste Widerstand lässt keinen Strom durch",
        ],
        answer: 2,
        explanation:
          "Bei I senkrecht und U waagerecht ist die Steigung 1/R. Je steiler die Gerade, desto größer der Strom bei gleicher Spannung und desto kleiner der Widerstand.",
      },
      {
        id: "ohm-5",
        type: "choice",
        question:
          "Die Quelle hat E = 12 V und r = 1 Ω, der Verbraucher R = 5 Ω. Welchen Strom liefert das einfache Modell?",
        options: ["12 A", "2,4 A", "2 A", "0,5 A"],
        answer: 2,
        explanation:
          "Innen- und Außenwiderstand liegen in Reihe: R + r = 6 Ω. I = E/(R + r) = 12/6 = 2 A. Mit 12/5 würde man den Innenwiderstand ignorieren.",
      },
    ],
  },
];
