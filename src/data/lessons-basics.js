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
      "Von der Bewegung elektrischer Ladungen über die Stärke des Stroms, seine Richtung und die korrekte Messung mit einem Amperemeter.",
    objectives: [
      "Erklären Sie, welche Ladungen sich in einem Leiter bewegen und warum Strom entsteht.",
      "Berechnen Sie Strom, Ladung und Zeit mit korrekter Einheitenumrechnung.",
      "Unterscheiden Sie zwischen der technischen Stromrichtung und der Elektronenbewegung, schließen Sie ein Amperemeter an eine Modellschaltung an.",
    ],
    sections: [
      {
        id: "charge-carriers",
        title: "1. Woher kommt der Strom und warum bewegen sich Elektronen?",
        paragraphs: [
          "Stellen Sie sich eine Batterie, Kabel, einen Schalter und eine Lampe vor. Bewegliche Elektronen befinden sich bereits vor dem Einschalten in den Metalldrähten und Glühfäden der Lampe. Sie gehören zur Substanz der Leiter: Einige Elektronen können sich zwischen Atomen bewegen, und die positiven Ionen des Kristallgitters bleiben in der Nähe ihrer Plätze. Während es keinen gerichteten elektrischen Einfluss gibt, bewegen sich Elektronen chaotisch. Im Durchschnitt fließt in beide Richtungen die gleiche Ladung durch einen imaginären Querschnitt des Drahtes, sodass der resultierende Strom Null ist.",
          "Chemische Reaktionen in einer Batterie sorgen für die Ladungstrennung und die Spannung zwischen ihren Anschlüssen. Wenn ein Stromkreis geschlossen ist, entsteht durch eine leichte Umverteilung der Ladungen entlang der Leiter ein elektrisches Feld im Stromkreis. Das Feld übt eine Kraft auf vorhandene bewegliche Ladungen aus und fügt der chaotischen Bewegung eine kleine Richtungsabweichung hinzu. So entsteht Strom – die gerichtete Bewegung elektrischer Ladungen. Die Batterie versorgt den Stromkreis mit Energie und hält diese Bewegung aufrecht; Es muss nicht zuerst der leere Draht mit neuen Elektronen gefüllt werden. Der elektrische Einfluss breitet sich viel schneller durch einen Stromkreis aus, als ein einzelnes Elektron entlang eines Drahtes wandert.",
          "Elektrische Ladung ist eine Eigenschaft von Teilchen, die ihre elektrische Wechselwirkung bestimmt. Gleiche Ladungen stoßen ab, ungleiche Ladungen ziehen sich an. Die Ladung wird mit Q bezeichnet und in Coulomb C gemessen. Ein Elektron trägt eine Ladung −e, wobei e ≈ 1,602 · 10⁻¹⁹ C. Ein Coulomb entspricht im Absolutwert der Ladung von etwa 6,24 · 10¹⁸ Elektronen. In einem Metall wird der Strom durch Elektronen und in einem Elektrolyten durch positive und negative Ionen transportiert. Daher bezieht sich die allgemeine Definition von Strom auf die Bewegung von Ladungen und ist nicht nur für Metalldrähte geeignet.",
        ],
        callout: {
          type: "insight",
          title:
            "Das stromführende Kabel muss nicht vollständig aufgeladen sein",
          text: "Ein Metalldraht bleibt in einem herkömmlichen Stromkreis nahezu elektrisch neutral: Die negativen und positiven Ladungen in seinem Volumen werden praktisch ausgeglichen. Strom beschreibt die Übertragung von Ladung über einen Abschnitt und nicht die Ansammlung einer großen Ladung im gesamten Draht.",
        },
      },
      {
        id: "current-definition",
        title: "2. Stromstärke: wie viel Ladung pro Sekunde fließt",
        paragraphs: [
          "Die kürzeste Formulierung: Stromstärke – wie viel Ladung pro Sekunde durchläuft. Schneiden wir im Geiste den Draht quer durch und zählen wir die Ladung, die während der ausgewählten Zeit durch diesen Abschnitt fließt. Je mehr Ladung gleichzeitig fließt, desto größer ist der Strom. Die Stromstärke wird mit I bezeichnet. Ein Ampere bedeutet die Übertragung eines Coulombs in einer Sekunde. Der Name „Strom“ ist historisch: Das Ampere misst die Geschwindigkeit des Ladungstransfers, nicht die mechanische Kraft in Newton. Der Vergleich mit der Wasserströmung ist nützlich: Strömung ähnelt der Strömung durch einen Rohrquerschnitt. Die Ladungen sind jedoch bereits im gesamten Draht vorhanden und ihre elektrische Wechselwirkung ist nicht auf die Bewegung von Wasser beschränkt.",
          "Für Gleichstrom ist I = Q/t. Wenn der Strom schwankt, gibt das Verhältnis ΔQ/Δt den durchschnittlichen Strom über das Intervall an; Der Momentanwert wird mathematisch als I = dQ/dt geschrieben. Bei Problemen in diesem Abschnitt wird davon ausgegangen, dass der Strom konstant ist, sofern nicht anders angegeben. Rechnen Sie vor dem Austausch die Zeit in Sekunden und die Ladung in Coulomb um: 1 min = 60 s, 1 mC = 0,001 C. Nützliche Einheiten: 1 A = 1000 mA = 1.000.000 µA.",
        ],
        formula: {
          expression: "I = Q / t;  Q = I · t;  t = Q / I",
          legend:
            "I – Stromstärke, A; Q ist die übertragene Ladung, C; t – Zeit, s.",
          note: "Diese Formen gelten direkt für Gleichstrom; Q ist hier der Modul der übertragenen Ladung.",
        },
        example: {
          title: "Beispiel: Ladung durch einen Leiter",
          given:
            "In 8 s floss eine Ladung von 2,4 C durch den Drahtquerschnitt. Finden Sie den Gleichstrom in Ampere und Milliampere.",
          steps: [
            "Alle Daten sind bereits in SI-Einheiten: Q = 2,4 C und t = 8 s.",
            "Wir wählen die Definition der Stromstärke: I = Q/t.",
            "Ersatz: I = 2,4/8 = 0,3 A.",
            "Umrechnen: 0,3 A · 1000 = 300 mA. Maßkontrolle: C/s = A.",
          ],
          answer: "Der Strom beträgt 0,3 A oder 300 mA.",
        },
      },
      {
        id: "current-direction",
        title: "3. Stromrichtung und Bewegung der Elektronen",
        paragraphs: [
          "In der Elektrotechnik herrschte Einigkeit darüber, dass die Richtung des Stroms die Bewegungsrichtung der positiven Ladung ist. Im Außenkreis einer Konstantspannungsquelle fließt der technische Strom vom Pluspol durch die Last zum Minuspol. In Diagrammen zeigen Strompfeile normalerweise in diese Richtung. Die Regel wurde vor der Entdeckung des Elektrons übernommen und ist bis heute die gebräuchliche Berechnungssprache.",
          "Im Metallteil desselben externen Stromkreises wandern Elektronen in die entgegengesetzte Richtung: vom Minuspol zum Pluspol. Es besteht kein Widerspruch, denn die Bewegung einer negativen Ladung nach links entspricht in Richtung des technischen Stroms der Bewegung einer positiven Ladung nach rechts. Es ist auch wichtig, die langsame Drift einzelner Elektronen von der schnellen Ausbreitung des elektrischen Einflusses entlang des Stromkreises zu unterscheiden: Die Lampe leuchtet nicht auf, nachdem ein Elektron den gesamten Weg von der Batterie zurückgelegt hat.",
        ],
        callout: {
          type: "tip",
          title: "Wie man sich in Diagrammen nicht verwirren lässt",
          text: "Wählen Sie bei Berechnungen immer zuerst die Richtung des technischen Stroms aus. Ein negatives Ergebnis bedeutet, dass der tatsächliche technische Strom entgegen dem ausgewählten Pfeil fließt; es handelt sich nicht um eine „negative Strommenge“.",
        },
      },
      {
        id: "closed-loop",
        title:
          "4. Warum brauchen wir eine Rückleitung und einen geschlossenen Pfad?",
        paragraphs: [
          "Langfristiger Gleichstrom erfordert mobile Ladungsträger, ein aufrechterhaltenes elektrisches Feld und einen geschlossenen Pfad. Im einfachsten Stromkreis verläuft der Pfad von einem Anschluss der Batterie über das Kabel, das Last- und das Rückleitungskabel zum zweiten Anschluss und setzt sich innerhalb der Quelle aufgrund von Prozessen in der Quelle selbst fort. Der Rückleiter wird benötigt, um kontinuierlich Ladung zu übertragen, ohne dass sich diese ständig am gebrochenen Ende ansammelt. Wenn Sie nur einen Pol der Batterie an die Lampe anschließen, kann es zu einer kurzfristigen Umverteilung der Ladungen kommen, es fließt jedoch kein stabiler Strom durch die Lampe.",
          "In einem externen Stromkreis bewirkt ein elektrisches Feld, dass sich Ladungsträger in eine gerichtete Richtung bewegen. Im Inneren der Batterie sorgen chemische Prozesse für die Ladungstrennung und kompensieren so die Energieübertragung auf die Last. Elektronen bewegen sich in den Metallbereichen, und im Elektrolyten finden Ionen und Reaktionen an den Elektroden statt: Sie müssen sich nicht vorstellen, dass dasselbe Elektron die Batterie mit Sicherheit im Kreis umkreist. Bei einer Entladung ist der Vorrat an verfügbarer chemischer Energie erschöpft, nicht jedoch der Vorrat aller Elektronen. Die Lampe nimmt Energie auf und wandelt sie in Licht und Wärme um; die Ladung bleibt erhalten.",
          "Ein offener Schalter unterbricht den leitenden Pfad, sodass im stationären Zustand eines einfachen idealen Stromkreises der Strom Null ist, obwohl die Spannung zwischen den Anschlüssen der Quelle bestehen bleiben kann. Bei einem Kurzschluss sind die Leitungen über einen Pfad mit sehr geringem Widerstand verbunden: Der Strom wird hauptsächlich durch den Innenwiderstand der Quelle und des Drahtes begrenzt. Dies führt zu großer Hitze und kann zur Beschädigung der Quelle führen. Studieren Sie solche Zustände durch Berechnung oder in einem Simulator; Echte Batterien können nicht mit einem Kabel verbunden werden.",
        ],
        callout: {
          type: "warning",
          title:
            "Das Schließen eines Stromkreises bedeutet nicht, dass die Leitungen direkt verbunden werden",
          text: "Ein normaler Stromkreis enthält eine Last, die den Strom begrenzt und Energie umwandelt. Verwenden Sie für Trainingsaufbauten eine sichere, strombegrenzende Niederspannungsquelle und eine geeignete Last.",
        },
      },
      {
        id: "ammeter",
        title: "5. So messen Sie den Strom",
        paragraphs: [
          "Das Amperemeter wird in Reihe geschaltet: Ein Abschnitt des Stromkreises wird unterbrochen und das Gerät in die entstandene Lücke eingeführt. Dann fließt der gleiche Strom durch das Gerät wie durch das untersuchte Element. Ein ideales Amperemeter hat keinen Innenwiderstand, ein echtes hat einen kleinen. Seine Aufgabe besteht darin, den Strom im Stromkreis möglichst wenig zu verändern. Wenn Sie ein Amperemeter parallel zur Quelle anschließen, entsteht fast ein Kurzschluss.",
          "Wählen Sie im Multimeter den Konstantstrommodus für den Stromkreis mit der Batterie, die richtigen COM- und A- oder mA-Buchsen sowie den zulässigen Bereich aus. Die Montage und Neuanordnung der Sonden erfolgt bei ausgeschaltetem Strom. Wenn der erwartete Strom unbekannt ist, beginnen Sie mit einem geeigneten Maximalbereich innerhalb der Gerätespezifikationen. Nach der Messung wird die Sonde wieder von der Stromsteckdose in die Spannungssteckdose zurückgesteckt, um nicht versehentlich den nächsten Stromkreis zu schließen. Diese Übungen gelten für Niederspannungs-Übungsschaltungen und nicht für Steckdosenmessungen.",
        ],
        callout: {
          type: "insight",
          title: "Hinweisschild",
          text: "Wenn Strom in den roten Anschluss des Messgeräts einfließt und über COM austritt, ist der Messwert normalerweise positiv. Ein Negativ auf dem Bildschirm für Gleichstrom zeigt normalerweise die entgegengesetzte Polarität des Anschlusses an, wenn der richtige Modus ausgewählt ist.",
        },
      },
      {
        id: "charge-conservation",
        title: "6. In der Lampe wird kein Strom verbraucht",
        paragraphs: [
          "In einem unverzweigten, etablierten Stromkreis fließt pro Sekunde die gleiche Ladung durch jeden Abschnitt. Wenn vor der Lampe 20 mA fließen, fließen auch 20 mA nach ihr. Die Lampe empfängt elektrische Energie und wandelt diese in Licht und Wärme um, zerstört jedoch keine Elektronen. Diese Unterscheidung zwischen Ladung und Energie hilft, die gesamte Elektrotechnik zu verstehen.",
          "Am Verzweigungsknoten wird der Strom aufgeteilt: Die Summe der eingehenden Ströme ist gleich der Summe der ausgehenden. Andernfalls würde sich die Ladung ständig im Knoten ansammeln. Beispielsweise kann ein Strom von 90 mA in 30 mA und 60 mA aufgeteilt werden. Nach Anschluss der Zweige beträgt der Gesamtstrom wieder 90 mA. Für einen etablierten Stromkreis ist dies die erste Regel von Kirchhoff – eine direkte Folge der Ladungserhaltung.",
        ],
        formula: {
          expression: "ΣIEingang = ΣIAusgang",
          legend:
            "Die Summe der Ströme, die in einen Knoten eintreten, ist gleich der Summe der Ströme, die ihn verlassen.",
          note: "Bei der Berechnung werden die gewählten Stromrichtungen berücksichtigt. Für diesen Kurs werden stationäre Bedingungen ohne Ladungsansammlung im Knoten berücksichtigt.",
        },
        example: {
          title: "Beispiel: Laden in zwei Minuten",
          given:
            "Durch den LED-Kreis fließen ständig 30 mA. Wie viel Ladung wird in 2 Minuten befördert?",
          steps: [
            "Wir übersetzen den Strom: I = 30 mA = 0,030 A.",
            "Rechne die Zeit um: t = 2 · 60 = 120 s.",
            "Wir verwenden Q = I · t: Q = 0,030 · 120 = 3,6 C.",
            "Diese Ladung durchlief jeden Abschnitt der unverzweigten Stromkreises; Die LED wandelt Energie um, anstatt Ladung zu verbrauchen.",
          ],
          answer: "Durch den Stromkreis floss eine Ladung von 3,6 C.",
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
          "Eine physikalische Größe, die die elektrischen Eigenschaften von Partikeln und die Menge der übertragenen Elektrizität charakterisiert.",
      },
      {
        term: "Stromstärke",
        german: "Stromstärke",
        symbol: "I",
        unit: "A - Ampere",
        definition:
          "Ladung, die pro Zeiteinheit durch den Querschnitt eines Leiters fließt; für Gleichstrom I = Q/t.",
      },
      {
        term: "Gleichstrom",
        german: "Gleichstrom",
        symbol: "DC",
        unit: "—",
        definition:
          "Genau genommen ein Strom, dessen Wert und Richtung sich mit der Zeit nicht ändert.",
      },
      {
        term: "Ladungsträger",
        german: "Ladungsträger",
        symbol: "—",
        unit: "—",
        definition:
          "Ein geladenes Teilchen, das eine Ladung tragen kann; In Metallen dienen Elektronen als bewegliche Träger.",
      },
      {
        term: "Amperemeter",
        german: "Amperemeter",
        symbol: "A",
        unit: "A - Ampere",
        definition:
          "Ein Gerät zur Strommessung, das in Reihe mit dem zu untersuchenden Bereich geschaltet ist.",
      },
      {
        term: "Knoten",
        german: "Knoten",
        symbol: "—",
        unit: "—",
        definition:
          "Eine Verbindung von Zweigen, bei der im stationären Zustand ein Ausgleich der eingehenden und ausgehenden Ströme erfolgt.",
      },
    ],
    summary: [
      "Strom entsteht, wenn ein elektrisches Feld eine Richtungsdrift vorhandener Ladungsträger verursacht; in Metallen sind dies Elektronen.",
      "Für Gleichstrom I = Q/t; Ampere ist gleich Coulomb pro Sekunde.",
      "Der herkömmliche Strom im äußeren Stromkreis geht von Plus nach Minus, die Elektronen im Metall gehen in die entgegengesetzte Richtung.",
      "Für Langzeitstrom benötigen Sie einen geschlossenen Pfad mit einem Rückleiter und einer Quelle, die das Feld aufrechterhält und Energie überträgt.",
      "Das Amperemeter ist in Reihe geschaltet; Der Strom in einem unverzweigten Stromkreis ist in allen Abschnitten gleich.",
      "Die Last wandelt Energie um und die Ladung im Stromkreis wird gespeichert.",
    ],
    quiz: [
      {
        id: "current-1",
        type: "choice",
        question: "Welche Definition von Strom ist richtig?",
        options: [
          "Energie, die jedes Coulomb Ladung erhält",
          "Ladung, die pro Zeiteinheit durch einen Leiterquerschnitt fließt",
          "Auf Elektronen wirkende mechanische Kraft",
          "Anzahl der Elektronen im gesamten Draht",
        ],
        answer: 1,
        explanation:
          "Die Stromstärke charakterisiert die Geschwindigkeit des Ladungstransfers: I = Q/t für Gleichstrom. Energie pro Ladungseinheit ist Spannung und mechanische Kraft wird in Newton gemessen.",
      },
      {
        id: "current-2",
        type: "numeric",
        question:
          "Eine Ladung von 24 C durchströmte den Drahtquerschnitt in 8 s. Wie groß ist die Konstantstromstärke in Ampere?",
        answer: 3,
        unit: "A",
        tolerance: 0.01,
        explanation:
          "Wir verwenden I = Q/t. Ersetzen Sie 24 C / 8 s = 3 A. Ein Coulomb pro Sekunde entspricht einem Ampere.",
      },
      {
        id: "current-3",
        type: "choice",
        question:
          "In welche Richtung wandern Elektronen im metallischen Außenkreis einer Batterie?",
        options: [
          "Von Plus nach Minus, wie bei einem herkömmlichen Strom",
          "Von Minus nach Plus, gegen technischen Strom",
          "Sie sind selbst bei Vorhandensein von Strom bewegungslos",
          "Nur von der Lampe bis zum nächstgelegenen Terminal",
        ],
        answer: 1,
        explanation:
          "Elektronen haben eine negative Ladung. Daher ist ihre Drift vom Minuspol zum Pluspol entgegengesetzt zur akzeptierten Richtung des technischen Stroms.",
      },
      {
        id: "current-4",
        type: "choice",
        question:
          "Wie schließe ich ein Amperemeter an, um den Strom durch einen Widerstand zu messen?",
        options: [
          "Parallel zur Quelle",
          "Parallel zum Widerstand, ohne den Stromkreis zu unterbrechen",
          "In Reihe mit einem Widerstand, wenn der Strom während der Montage ausgeschaltet wird",
          "Nur eine Sonde zum Widerstand",
        ],
        answer: 2,
        explanation:
          "Bei Reihenschaltung fließt der gesamte Widerstandsstrom durch das Amperemeter. Aufgrund seines geringen Widerstands stellt der Parallelanschluss an eine Quelle einen gefährlichen Kurzschluss dar.",
      },
      {
        id: "current-5",
        type: "numeric",
        question:
          "Der Strom beträgt 25 mA. Welche Ladung in Coulomb passiert den Querschnitt in 40 s?",
        answer: 1,
        unit: "C",
        tolerance: 0.01,
        explanation:
          "Zuerst rechnen wir 25 mA = 0,025 A um. Dann ist Q = I · t = 0,025 · 40 = 1 C. Milliampere können ohne Umrechnung nicht durch Ampere ersetzt werden.",
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
      "Lernen Sie, ein Diagramm zu lesen, Knoten und Zweige zu finden und zwischen seriellen, parallelen und gemischten Verbindungen zu unterscheiden.",
    objectives: [
      "Bestimmen Sie die Art der Verbindung anhand der Knoten des Diagramms und nicht anhand der externen Position der Teile.",
      "Erklären Sie die Verteilung von Strömen und Spannungen in Reihen- und Parallelschaltungen.",
      "Vereinfachen Sie den gemischten Kreislauf konsequent und überprüfen Sie das Ergebnis anhand von Erhaltungssätzen.",
    ],
    sections: [
      {
        id: "circuit-language",
        title: "1. Stromkreis, Schaltbild, Knoten und Zweig",
        paragraphs: [
          "Ein Stromkreis besteht aus einer Reihe verbundener Elemente, durch die Strom fließen kann. Die Quelle liefert elektrische Energie, die Last wandelt sie um, Drähte verbinden die Elemente und der Schalter steuert den leitenden Pfad. Ein Schaltplan zeigt elektrische Verbindungen und Symbole und nicht den tatsächlichen Abstand zwischen Teilen. Zwei scheinbar unterschiedliche Diagramme können denselben Schaltkreis beschreiben.",
          "Knoten – elektrisch gemeinsame Verbindung von Leitern; Alle Punkte eines idealen Drahtes haben das gleiche Potenzial. Ein Zweig ist ein Abschnitt zwischen Knoten, durch den derselbe Strom fließt. Ein geschlossener Pfad gemäß einem Diagramm wird als Stromkreis bezeichnet. Der Schnittpunkt von Linien bedeutet nicht immer eine Verbindung: Verlassen Sie sich auf den Verbindungspunkt und das akzeptierte Notationssystem. Um die Art der Schaltung zu bestimmen, ist es sinnvoll, einen durchgehenden idealen Draht gedanklich auf einen einzigen Punkt zu reduzieren.",
        ],
        callout: {
          type: "tip",
          title: "Schauen Sie sich die Verbindungen an, nicht die Zeichnung.",
          text: "Werden zwei Widerstände nebeneinander eingezeichnet, bedeutet das nicht, dass es sich um eine Parallelschaltung handelt. Überprüfen Sie, mit welchen zwei Knoten jeder von ihnen verbunden ist.",
        },
      },
      {
        id: "series",
        title: "2. Serielle Verbindung",
        paragraphs: [
          "Elemente werden in Reihe geschaltet, wenn durch sie der gleiche Strom fließt und zwischen ihnen kein Stromzweig besteht. Die Anklage kann keinen anderen Weg wählen. Daher ist I = I₁ = I₂. Die Quellenspannung verteilt sich auf die Elemente: U = U₁ + U₂. Wenn Sie den Stromkreis irgendwo unterbrechen, wird der Strom in allen Elementen dieses Zweigs unterbrochen.",
          "Bei Widerständen ist der Gesamtwiderstand gleich der Summe der Einzelwiderstände: Req = R₁ + R₂ + …. Ein Ersatzwiderstand ist ein Ersatzwiderstand, der bei gleicher externer Spannung den gleichen Gesamtstrom zieht. Je größer der Widerstandswert eines bestimmten Vorwiderstands ist, desto größer ist der Anteil der an ihm anliegenden Gesamtspannung. Das Beispiel verwendet die Beziehung U = I · R, die in der Lektion zum Ohmschen Gesetz ausführlich erläutert wird.",
        ],
        formula: {
          expression: "I = I₁ = I₂;  U = U₁ + U₂;  Req = R₁ + R₂",
          legend:
            "I – Zweigstrom, A; U ist die Gesamtspannung V; Req – Ersatzwiderstand, Ω.",
          note: "Die Widerstandsformel bezieht sich auf Widerstände; Die Gleichheit der Ströme wird durch das Fehlen von Zweigen bestimmt.",
        },
        example: {
          title: "Beispiel: zwei Widerstände in Reihe",
          given:
            "R₁ = 2 Ω und R₂ = 4 Ω sind in Reihe an eine 12-V-Quelle angeschlossen. Ermitteln Sie den Gesamtstrom und die Gesamtspannung an jedem Widerstand.",
          steps: [
            "Addieren Sie die Widerstände: Req = 2 + 4 = 6 Ω.",
            "Wir berechnen den Gesamtstrom: I = U/Req = 12/6 = 2 A.",
            "Durch beide Widerstände fließt der gleiche Strom. U₁ = I · R₁ = 2 · 2 = 4 V; U₂ = 2 · 4 = 8 V.",
            "Wir prüfen: U₁ + U₂ = 4 + 8 = 12 V - Quellenspannung. Bei höherem Widerstand ist der Spannungsabfall größer.",
          ],
          answer: "Strom 2 A; an R₁ - 4 V, an R₂ - 8 V.",
        },
      },
      {
        id: "parallel",
        title: "3. Parallelschaltung",
        paragraphs: [
          "Elemente sind parallel verbunden, wenn beide Enden jedes Elements mit denselben zwei Knoten verbunden sind. Die Potentialdifferenz zwischen diesen Knoten ist gleich, daher sind die Spannungen an den Zweigen gleich: U = U₁ = U₂. Der Quellstrom im Knoten wird in Zweigströme aufgeteilt und nach deren Verbindung wieder addiert: I = I₁ + I₂. Der Zweig mit dem geringeren Widerstand bei gleicher Spannung lässt mehr Strom durch.",
          "Durch das Hinzufügen eines parallel leitenden Zweigs erhöht sich der Gesamtstrom bei konstanter Spannung, sodass der Ersatzwiderstand sinkt. Er ist immer kleiner als der kleinste Widerstand eines einzelnen Zweiges mit positivem Endwiderstand. Wenn ein Zweig geöffnet wird, bleiben die übrigen Pfade geschlossen. Daher sind private Verbraucher für den parallelen Anschluss an dasselbe Netzwerk konzipiert, obwohl tatsächliche Elektroinstallationen eine professionelle Planung und einen professionellen Schutz erfordern.",
        ],
        formula: {
          expression: "U = U₁ = U₂;  I = I₁ + I₂;  1/Req = 1/R₁ + 1/R₂",
          legend:
            "Für zwei Widerstände: Req = (R₁ · R₂)/(R₁ + R₂). Widerstände werden in Ω gemessen.",
          note: "Das durch die Summenformel geteilte Produkt gilt für zwei parallele Widerstände. Für mehrfache Rückfaltwiderstände.",
        },
        example: {
          title: "Beispiel: zwei parallele Zweige",
          given:
            "Die Widerstände 6 Ω und 3 Ω werden parallel an eine ideale 12-V-Quelle angeschlossen. Finden Sie die Ströme und den Ersatzwiderstand.",
          steps: [
            "Jeder Zweig hat eine Spannung: U₁ = U₂ = 12 V.",
            "Zweigströme: I₁ = 12/6 = 2 A; I₂ = 12/3 = 4 A.",
            "Gesamtstrom: I = 2 + 4 = 6 A.",
            "Req = U/I = 12/6 = 2 Ω. Prüfen Sie mit der zweiten Formel: (6 · 3)/(6 + 3) = 18/9 = 2 Ω.",
            "Die resultierenden 2 Ω sind kleiner als 3 Ω, wie es bei einer Parallelschaltung der Fall sein sollte.",
          ],
          answer:
            "Zweigströme 2 A und 4 A, Gesamtstrom 6 A, Ersatzwiderstand 2 Ω.",
        },
      },
      {
        id: "mixed",
        title: "4. Gemischte Schaltung: von komplex zu einfach und zurück",
        paragraphs: [
          "Ein gemischter Stromkreis besteht aus seriellen und parallelen Abschnitten. Sie können nicht alle Widerstände hintereinander hinzufügen, nur weil sie in einem Bild vorhanden sind. Suchen Sie zunächst eine Gruppe, die tatsächlich in Reihe oder parallel geschaltet ist, ersetzen Sie sie durch einen Ersatzwiderstand und zeichnen Sie die vereinfachte Schaltung neu. Wiederholen Sie diesen Vorgang, bis der gesamte Stromkreis einen Widerstand erreicht.",
          "Gehen Sie dann zurück: Ermitteln Sie den Gesamtstrom, die Spannung an jeder vergrößerten Gruppe und die Ströme ihrer ursprünglichen Elemente. Wenn beispielsweise 4 Ω in Reihe mit einem parallelen Paar aus 6 Ω und 3 Ω geschaltet sind, wird dieses Paar durch 2 Ω ersetzt. Gesamtwiderstand 6 Ω; Bei 12 V beträgt der Gesamtstrom 2 A. An 4 Ω fallen 8 V ab und an der Parallelgruppe verbleiben 4 V. Das bedeutet, dass die Ströme darin 4/6 ≈ 0,667 A und 4/3 ≈ 1,333 A betragen; ihre Summe ergibt 2 A.",
        ],
        callout: {
          type: "insight",
          title:
            "Nicht jedes Schema kann auf diese Weise zusammengebrochen werden",
          text: "Brückenschaltungen dürfen keine einfachen Reihen- und Parallelgruppen haben. Dann brauchen wir allgemeine Kirchhoff-Gleichungen. Führen Sie keine Elemente zusammen, wenn zwischen ihnen ein zusätzlicher Zweig besteht.",
        },
      },
      {
        id: "sources-and-states",
        title: "5. Schaltungsquellen und -zustände",
        paragraphs: [
          "Durch Reihenschaltung von Quellen mit übereinstimmender Polarität addieren sich deren Spannungen: Zwei ideale Zellen mit jeweils 1,5 V ergeben 3 V. Bei entgegengesetzter Polarität werden die Spannungen subtrahiert. Echte Quellen haben einen Innenwiderstand, Einschränkungen hinsichtlich Strom, Chemie und Lademodus. Daher erlaubt die Arithmetik idealer Quellen an sich keine beliebige Verbindung realer Batterien.",
          "Ideale Quellen mit unterschiedlichen Spannungen können nicht direkt parallel geschaltet werden: Sie würden gleichzeitig unterschiedliche Spannungen zwischen denselben Knoten erfordern. Echte Quellen haben einen großen Ausgleichsstrom, der durch Innenwiderstände begrenzt wird. Auch die gleiche Nennspannung garantiert keine Kompatibilität. Eine Parallelschaltung ist nur für dafür vorgesehene Quellen mit entsprechender Absicherung zulässig. Ein offener Stromkreis bedeutet, dass kein leitender Pfad vorhanden ist. Ein Kurzschluss bedeutet, dass ein Pfad mit sehr geringem Widerstand die normale Last umgeht.",
        ],
        callout: {
          type: "warning",
          title: "Übe mit Quellen",
          text: "Studieren Sie die Zusammenhänge von Batterien und Akkus anhand von Rechenmodellen oder vorgefertigten Trainingsgeräten. Schließen Sie die Pole nicht direkt an und montieren Sie keine parallelen Batteriepacks ohne zellenspezifisches Diagramm.",
        },
      },
      {
        id: "circuit-checks",
        title: "6. Wie man ein Diagramm liest und die Lösung überprüft",
        paragraphs: [
          "Beginnen Sie mit der Quelle und notieren Sie sich beide Ausgaben. Beschriften Sie dann die Knoten, finden Sie alle Pfade zwischen ihnen und beschriften Sie die ausgewählten Richtungen der Ströme. Stellen Sie für jede Gruppe die Frage: Ist der Strom gleich, weil es keine Gabelung gibt, oder ist die Spannung gleich, weil die Enden mit einem gemeinsamen Knotenpaar verbunden sind? Erst danach wählen Sie eine Formel. Das Amperemeter wird in Reihe in den Zweig eingefügt und das Voltmeter wird zwischen zwei Punkten parallel zum Element angeschlossen.",
          "Überprüfen Sie Ihre Antwort physisch. In einer Reihenschaltung muss die Summe der Spannungsabfälle gleich der Gruppenspannung sein. In einem Knoten muss die Summe der Zweigströme mit dem Gesamtstrom übereinstimmen. Der Widerstand einer Reihengruppe ist größer als jeder Term und einer Parallelgruppe ist kleiner als der kleinste. In einem realen Stromkreis können der Widerstand der Drähte, der Innenwiderstand der Quelle und der Einfluss von Geräten geringfügig von der idealen Berechnung abweichen. Verstehen Sie zunächst das Modell und bewerten Sie dann seine Einschränkungen.",
        ],
        formula: {
          expression: "Am Knoten: ΣIinput = ΣIoutput; im Stromkreis: ΣU = 0",
          legend:
            "Das Gesetz der Ströme hängt mit der Ladungserhaltung zusammen; Spannungsgesetz – mit Energiebilanz pro Ladungseinheit.",
          note: "In der Kontursumme werden Spannungsanstiege und -abfälle mit Vorzeichen in der gewählten Bypass-Richtung erfasst; Hier betrachten wir Schaltkreise ohne sich ändernden magnetischen Fluss.",
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
          "Verbindungselemente ohne Abzweigungen dazwischen; Durch die Elemente fließt der gleiche Strom.",
      },
      {
        term: "Parallelschaltung",
        german: "Parallelschaltung",
        symbol: "—",
        unit: "—",
        definition:
          "Verbindungselemente zwischen demselben Knotenpaar; Die Spannungen der Elemente sind gleich.",
      },
      {
        term: "Gemischte Schaltung",
        german: "gemischte Schaltung",
        symbol: "—",
        unit: "—",
        definition:
          "Eine Schaltung, die sowohl serielle als auch parallele Abschnitte enthält.",
      },
      {
        term: "Zweig",
        german: "Zweig",
        symbol: "—",
        unit: "—",
        definition:
          "Ein Abschnitt eines Stromkreises zwischen Knoten, deren Elemente einen gemeinsamen Strom haben.",
      },
      {
        term: "Ersatzwiderstand",
        german: "Ersatzwiderstand",
        symbol: "Anf",
        unit: "Ω - Ohm",
        definition:
          "Ein Widerstand, der eine Gruppe von Widerständen ersetzt und dabei die Abhängigkeit des Gesamtstroms von der Spannung an seinen Anschlüssen beibehält.",
      },
      {
        term: "Kurzschluss",
        german: "Kurzschluss",
        symbol: "—",
        unit: "—",
        definition:
          "Verbindungspunkte in einem Stromkreis durch sehr geringen Widerstand, der einen übermäßigen Strom verursachen kann.",
      },
    ],
    summary: [
      "Die Art der Verbindung wird durch die Knoten des Diagramms bestimmt und nicht durch die Anordnung der Teile in der Abbildung.",
      "In Reihe: Der Strom ist gleich, die Spannungen und Widerstände addieren sich.",
      "Parallel: Die Spannung ist gleich, die Ströme addieren sich und die Sperrwiderstände addieren sich.",
      "Die gemischte Schaltung wird zunächst vereinfacht, dann auf die Ströme und Spannungen der einzelnen Elemente zurückgeführt.",
      "Ideale Quellen unterschiedlicher Spannung können nicht direkt parallel geschaltet werden.",
      "Überprüfen Sie das Stromgleichgewicht in den Knoten, das Spannungsgleichgewicht in den Schaltkreisen und die Angemessenheit des Ersatzwiderstands.",
    ],
    quiz: [
      {
        id: "circuits-1",
        type: "choice",
        question: "Warum werden zwei Widerstände parallel geschaltet?",
        options: [
          "Sie werden horizontal gezeichnet",
          "Ein P_zu des ersten ist mit einem P_zu des zweiten verbunden",
          "Beide Widerstände sind mit demselben Knotenpaar verbunden",
          "Ihre Widerstände sind gleich",
        ],
        answer: 2,
        explanation:
          "Parallelität wird durch zwei gemeinsame Knoten definiert. Dies gewährleistet die gleiche Spannung an beiden Elementen, unabhängig von deren Widerständen oder Position in der Abbildung.",
      },
      {
        id: "circuits-2",
        type: "numeric",
        question:
          "Widerstände 120 Ω und 180 Ω sind in Reihe geschaltet. Finden Sie den entsprechenden Widerstand in Ohm.",
        answer: 300,
        unit: "Ω",
        tolerance: 0.1,
        explanation:
          "Für Serienwiderstände Req = R₁ + R₂ = 120 + 180 = 300 Ω. Das Ergebnis ist größer als jeder einzelne Widerstand.",
      },
      {
        id: "circuits-3",
        type: "numeric",
        question:
          "Zwei 12 Ω-Widerstände sind parallel geschaltet. Wie groß ist ihr Gesamtwiderstand in Ohm?",
        answer: 6,
        unit: "Ω",
        tolerance: 0.01,
        explanation:
          "1/Req = 1/12 + 1/12 = 2/12, also Reeq = 6 Ω. Zwei identische parallele Zweige ergeben einen Widerstand, der halb so groß ist wie der Widerstand von einem.",
      },
      {
        id: "circuits-4",
        type: "choice",
        question:
          "Der Gesamtstrom zweier Parallelzweige beträgt 0,8 A. Im ersten fließen 0,3 A. Welcher Strom fließt im zweiten?",
        options: ["1,1 A", "0,5 A", "0,24 A", "0,8 A"],
        answer: 1,
        explanation:
          "Nach dem Stromgesetz gilt I = I₁ + I₂. Daher ist I₂ = 0,8 − 0,3 = 0,5 A. Die Ladung im Knoten akkumuliert sich im stationären Zustand nicht.",
      },
      {
        id: "circuits-5",
        type: "choice",
        question:
          "Was passiert, wenn ein Zweig einer Parallelschaltung mit idealer Spannungsquelle ausfällt?",
        options: [
          "In allen anderen Branchen wird der Strom definitiv verschwinden",
          "Die Spannung der verbleibenden Zweige wird sich definitiv verdoppeln",
          "Die verbleibenden betriebsbereiten Zweige werden weiterhin mit der gleichen Spannung betrieben",
          "Der Widerstandswert der verbleibenden Widerstände wird Null",
        ],
        answer: 2,
        explanation:
          "Andere Zweige haben geschlossene Pfade zwischen denselben Quellpins. Eine ideale Quelle hält die Spannung aufrecht und der Gesamtstromverbrauch wird um den Strom des getrennten Zweigs reduziert.",
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
      "Unter Spannung versteht man Energie pro Ladungseinheit, Potenzialdifferenz und die zwischen zwei Punkten gemessene Größe.",
    objectives: [
      "Setzen Sie die Spannung mit der Ladungsübertragungsenergie in Beziehung und unterscheiden Sie sie vom Strom.",
      "Arbeiten Sie mit Potentialen, Polarität, Gleich- und Wechselspannung.",
      "Schließen Sie das Voltmeter richtig an und berücksichtigen Sie die Quellenspannung unter Last.",
    ],
    sections: [
      {
        id: "energy-per-charge",
        title: "1. Spannung beantwortet die Frage „wie viel Energie“",
        paragraphs: [
          "Strom gibt an, wie viel Ladung pro Sekunde fließt. Die Spannung zeigt eine weitere Eigenschaft: wie viel Energie pro Ladungseinheit übertragen wird, wenn sie sich zwischen zwei Punkten bewegt. Wenn jedes Coulomb der Last 12 J Energie zuführt, beträgt die Spannung an der Last 12 V. Ein Volt ist ein Joule pro Coulomb. Daher kann man nicht vergleichen, „was größer ist – 2 A oder 12 V“: Die Werte beschreiben verschiedene Aspekte des Prozesses.",
          "Die Batterie wandelt chemische Energie in elektrische Energie um und sorgt für die Ladungstrennung. Eine Last, beispielsweise ein Widerstand, wandelt die empfangene Energie in Wärme um. Wenn eine positive Ladung durch eine passive Last von einem höheren Potenzial zu einem niedrigeren Potenzial gelangt, ist die vom elektrischen Feld geleistete Arbeit positiv. Bei einfachen Energieproblemen werden positive Werte der übertragenen Energie und Ladung verwendet; Bei der Richtungsanalyse werden Schilder berücksichtigt.",
        ],
        formula: {
          expression: "U = W / Q;  W = U · Q",
          legend:
            "U – Spannung, V; W – übertragene Energie oder Arbeit, J; Q – Ladung, C. 1 V = 1 J/C.",
          note: "Für konstante Spannung und übertragene Ladung; Bei Wechselspannung wird die Energie unter Berücksichtigung der zeitlichen Spannungsänderung berechnet.",
        },
        example: {
          title: "Beispiel: Spannung durch Energie",
          given:
            "Wenn eine Ladung von 5 C durch die Last fließt, werden 60 J auf sie übertragen. Bestimmen Sie die Spannung.",
          steps: [
            "Wir wählen die Definition: U = W/Q.",
            "Wir ersetzen die Daten: U = 60 J / 5 C = 12 J/C.",
            "Da 1 J/C = 1 V ist, erhalten wir 12 V.",
            "Interpretation: Jeder Anhänger überträgt 12 J auf diese Last, nicht 60 J.",
          ],
          answer: "Die Lastspannung beträgt 12 V.",
        },
      },
      {
        id: "potential-difference",
        title: "2. Potenzial und Wahl des Bezugspunkts",
        paragraphs: [
          "Das elektrische Potenzial φ charakterisiert die potentielle Energie einer positiven Einheitsladung an einem Punkt. In einem Stromkreis wird normalerweise ein Punkt als Nullpotential gewählt und der Rest wird relativ dazu ausgedrückt. Die Wahl des Nullpunkts selbst ist bedingt: Wie die Höhe über der ausgewählten Marke hängt auch die absolute Zahl von der Referenz ab. Die physikalische Bedeutung für die Arbeit ist die Potentialdifferenz zwischen zwei Punkten.",
          "Wir definieren die Spannung U_AB als φ_A − φ_B. Wenn φ_A = 9 V und φ_B = 4 V relativ zum gemeinsamen Nullpunkt, dann ist U_AB = 5 V. In umgekehrter Reihenfolge ist U_BA = −5 V. Das Setzen eines gemeinsamen Nullpunkts im Diagramm bedeutet nicht, dass der Punkt unbedingt mit Erde oder einem Schutzleiter verbunden ist. Verwechseln Sie nicht den herkömmlichen gemeinsamen Punkt des elektronischen Schaltkreises mit der Schutzerde der tatsächlichen Installation.",
        ],
        formula: {
          expression: "U_AB = φ_A − φ_B;  U_BA = −U_AB",
          legend:
            "φ_A und φ_B – Potentiale der Punkte A und B, V; U_AB – Spannung von Punkt A relativ zu B, V.",
          note: "Die Bedeutung des Zeichens hängt von der gewählten Reihenfolge der Punkte ab. Die hier gewählte Definition muss während der gesamten Berechnung beibehalten werden.",
        },
        callout: {
          type: "tip",
          title: "Immer zwei Punkte",
          text: "Der Ausdruck „Spannung an einem 5-V-Punkt“ ist die Abkürzung für „die Spannung dieses Punktes relativ zu einem ausgewählten gemeinsamen 5-V-Knoten“. Geben Sie den Referenzpunkt an.",
        },
      },
      {
        id: "voltage-without-current",
        title: "3. Warum kann es Spannung ohne Strom geben?",
        paragraphs: [
          "An den offenen Anschlüssen einer funktionierenden Batterie liegt Spannung an, obwohl von außen praktisch kein Gleichstrom vorhanden ist. Die Quelle hält bereits eine Potentialdifferenz aufrecht, es gibt jedoch keinen geschlossenen Leiterpfad. Ebenso kann zwischen den Platten eines geladenen Kondensators eine Spannung herrschen, ohne dass ein stetiger Strom durch ein ideales Dielektrikum fließt. Das Vorhandensein von Spannung und das Vorhandensein von Strom sind unterschiedliche Aussagen.",
          "Wenn ein Widerstand an eine Batterie angeschlossen wird, wird ein Strom erzeugt, der von der Spannung und dem Widerstand des gesamten Stromkreises abhängt. Eine ideale Spannungsquelle hält bei jeder im Modell zulässigen Last eine bestimmte Spannung aufrecht. Eine echte Quelle hat einen Innenwiderstand und eine Strombegrenzung. Wenn der Strom zunimmt, kann seine Klemmenspannung sinken: Ein Teil der Spannung fällt auf den Innenwiderstand. Daher verspricht die Nennbeschriftung der Batterie keine konstante Spannung unter jeder Belastung.",
        ],
        formula: {
          expression: "Uterminale = E − I r",
          legend:
            "E – Quell-EMK, V; r – Innenwiderstand, Ω; I ist der von der Quelle gelieferte Strom A.",
          note: "Ein einfaches Modell einer Entladequelle mit konstanter EMF und konstantem Innenwiderstand; Beim Laden und in anderen Modi werden die Stromrichtung und die Vorzeichen separat berücksichtigt.",
        },
        example: {
          title: "Beispiel: Batteriespannung unter Last",
          given:
            "Quellen-EMF E = 9 V, Innenwiderstand r = 1 Ω. Es liefert einen Strom von 0,2 A. Wie hoch ist die Spannung an seinen Anschlüssen?",
          steps: [
            "Die Spannung fällt am Innenwiderstand I · r = 0,2 · 1 = 0,2 V ab.",
            "Beim Entladen ist die Klemmenspannung kleiner als die EMK: UKlemmen = E − I · r.",
            "Wir ersetzen: Uterminals = 9 − 0,2 = 8,8 V.",
            "Im Leerlauf ist I ≈ 0, sodass die Spannung in diesem Modell etwa 9 V betragen würde.",
          ],
          answer: "An den Quellanschlüssen unter dieser Last liegen 8,8 V an.",
        },
      },
      {
        id: "voltmeter",
        title: "4. So messen Sie die Spannung richtig",
        paragraphs: [
          "Das Voltmeter ist parallel geschaltet: Seine beiden Sonden sind an zwei Punkte angeschlossen, deren Potentialdifferenz bestimmt werden muss. Um die Spannung an einem Widerstand zu messen, werden Sonden an seinen Anschlüssen angebracht, ohne den Hauptzweig zu unterbrechen. Ein ideales Voltmeter hat einen unendlich hohen Widerstand und verbraucht keinen Strom. Ein reales Gerät hat eine große, aber endliche Eingangsimpedanz und kann Schaltkreise mit hoher Impedanz beeinflussen.",
          "Wählen Sie für die Batterie Gleichspannungsmessung, COM- und V-Buchsen, und der Bereich liegt nicht unter der erwarteten Spannung. Die rote Sonde mit einem höheren Potenzial im Vergleich zur schwarzen ergibt einen positiven Messwert; Durch eine Neuanordnung der Sonden ändert sich das Vorzeichen. Beispielsweise bedeuten −4,5 V im richtigen Modus die entgegengesetzte Polarität zur ausgewählten. Vor der Messung ist es wichtig, sicherzustellen, dass das rote Kabel nicht in der Strombuchse verbleibt: Der Stromeingang hat einen niedrigen Widerstand und ist nicht für den Anschluss über die Stromquelle vorgesehen.",
        ],
        callout: {
          type: "warning",
          title: "Betriebsbedingungen der Trainingsmessung",
          text: "Hier werden Niederspannungs-Trainingsquellen besprochen. Für die Messung der Netzspannung sind ein entsprechendes Gerät, eine entsprechende Sicherheitskategorie und eine Schulung erforderlich; Bei dieser Lektion handelt es sich nicht um eine Anleitung zum Arbeiten in einer Steckdose.",
        },
      },
      {
        id: "dc-ac",
        title: "5. Gleich- und Wechselspannung",
        paragraphs: [
          "Gleichspannung im engeren Sinne behält über die Zeit ihre Größe und Polarität. In einem U(t)-Diagramm ist dies eine horizontale Linie. Eine mit DC gekennzeichnete Quelle unterstützt normalerweise eine Polarität, obwohl die tatsächliche Spannung beim Entladen wellenförmig sein oder sich langsam ändern kann. Wechselspannung ändert periodisch die Polarität; Ein typisches Beispiel ist die Sinusspannung.",
          "Für eine Sinuskurve gibt es einen Momentanwert, eine Amplitude Û und einen Effektivwert Urms. Der Effektivwert ergibt die gleiche durchschnittliche Wärmeleistung am gleichen Widerstand wie eine gleiche konstante Spannung. Für eine reine Sinuskurve ist Uact = Û/√2. Beispielsweise entspricht der Effektivwert von 12 V einer Amplitude von etwa 16,97 V. Die übliche Bezeichnung für die Netzspannung oder Sekundärwicklung eines Transformators gibt in der Regel den Effektivwert und nicht den Amplitudenwert an.",
        ],
        formula: {
          expression: "u(t) = Û · sin(2πft);  Uact = Û / √2;  T = 1/f",
          legend:
            "u(t) – Momentanspannung, V; Û – Amplitude, V; f – Frequenz, Hz; T – Punkt, s.",
          note: "Die Beziehung mit √2 gilt für eine Sinuskurve ohne konstante Komponente; Für andere Wellenformen wird der Effektivwert anders berechnet.",
        },
      },
      {
        id: "voltage-balance",
        title: "6. Spannungs- und Energiebilanz",
        paragraphs: [
          "In einem einfachen geschlossenen Stromkreis erhöht die Quelle die potentielle Energie der Ladung und die Last verringert sie. Wenn die Quelle 12 V liefert und zwei Reihenwiderstände Spannungsabfälle von 5 V und 7 V aufweisen, erhält ein Anhänger 12 J von der Quelle und gibt 5 J und 7 J an die Lasten ab. Die Summe ist gleich. Dies ist die energetische Bedeutung der Kirchhoffschen Spannungsregel für Stromkreise ohne sich ändernden magnetischen Fluss.",
          "Beim Summieren von Spannungen entlang einer geschlossenen Schleife müssen Sie die Vorzeichen berücksichtigen. Beim Umgehen der Quelle von Minus nach Plus kommt es zu einem Anstieg von +12 V, und beim Passieren passiver Widerstände in Stromrichtung kommt es zu einem Abfall von -5 V und -7 V: +12 - 5 - 7 = 0. Bei parallelen Elementen können Spannungen nicht summiert werden: Sie sind bereits zwischen identischen Knoten verbunden und haben die gleiche Spannung. Wenn das Ergebnis gegen diese Regeln verstößt, überprüfen Sie zunächst die Polaritäten und die Anschlussart.",
        ],
        callout: {
          type: "insight",
          title: "Drei verwandte, aber unterschiedliche Größen",
          text: "Ladung Q wird in C gemessen, Strom I in C/s, Spannung U in J/C. Ihre Kombination U · I ergibt J/s, also Leistung. Daraus ergibt sich später die Formel P = U · I.",
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
          "Möglicher Unterschied zwischen zwei Punkten; charakterisiert die Energie pro Einheit übertragener Ladung.",
      },
      {
        term: "Elektrisches Potenzial",
        german: "elektrisches Potenzial",
        symbol: "φ",
        unit: "V - Volt",
        definition:
          "Potenzielle Energie einer positiven Einheitsladung relativ zu einem ausgewählten Referenzniveau.",
      },
      {
        term: "Elektromotorische Kraft",
        german: "elektromotorische Kraft",
        symbol: "E",
        unit: "V - Volt",
        definition:
          "Arbeit externer Quellkräfte pro Ladungseinheit; In einem einfachen Modell ist sie gleich der Leerlaufspannung.",
      },
      {
        term: "Voltmeter",
        german: "Voltmeter",
        symbol: "V",
        unit: "V - Volt",
        definition:
          "Ein hochohmiges Gerät, das zwischen zwei Punkten angeschlossen ist, um die Potenzialdifferenz zu messen.",
      },
      {
        term: "Effektivwert",
        german: "Effektivwert",
        symbol: "Uakt",
        unit: "V - Volt",
        definition:
          "Der Wert einer konstanten Spannung, die am gleichen Widerstand die gleiche durchschnittliche Wärmeleistung wie die zu prüfende Spannung erzeugt.",
      },
      {
        term: "Polarität",
        german: "Polarität",
        symbol: "+ / −",
        unit: "—",
        definition:
          "Zeigt an, welcher der beiden Anschlüsse für die gewählte Spannungsrichtung das höhere Potenzial hat.",
      },
    ],
    summary: [
      "Die Spannung hängt mit der Energie zusammen: U = W/Q, ein Volt entspricht einem Joule pro Coulomb.",
      "Die Spannung wird zwischen zwei Punkten bestimmt; U_AB = φ_A − φ_B.",
      "Eine Batterie mit offenem Stromkreis kann Spannung ohne externen Gleichstrom haben.",
      "Das Voltmeter ist parallel geschaltet; Es muss eine hohe Eingangsimpedanz haben.",
      "Für eine reale Entladequelle gilt in einem einfachen Modell Uterminals = E − I · r.",
      "Bei einer Sinuskurve ist die effektive Spannung gleich der Amplitude geteilt durch √2.",
    ],
    quiz: [
      {
        id: "voltage-1",
        type: "choice",
        question: "Was bedeuten 6 V an einer Last?",
        options: [
          "6 A fließt zwangsläufig durch ihn hindurch",
          "Jeder Anhänger überträgt 6 J Energie auf sie",
          "Genau 6 Elektronen passieren es pro Sekunde.",
          "Sein Widerstand muss 6 Ω betragen",
        ],
        answer: 1,
        explanation:
          "1 V = 1 J/C. Eine Spannung von 6 V bedeutet 6 J pro 1 C übertragener Ladung. Der Strom hängt auch von den Eigenschaften der Last ab.",
      },
      {
        id: "voltage-2",
        type: "numeric",
        question:
          "Beim Durchlaufen von 4 °C werden 36 J auf die Last übertragen. Wie groß ist die Spannung in Volt?",
        answer: 9,
        unit: "V",
        tolerance: 0.01,
        explanation:
          "U = W/Q = 36 J / 4 C = 9 V. Ladung durch Energie zu teilen wäre per Definition und Dimension falsch.",
      },
      {
        id: "voltage-3",
        type: "numeric",
        question:
          "Das Potenzial A beträgt 3 V und das Potenzial B beträgt 8 V relativ zu einer Null. Finden Sie U_AB = φ_A − φ_B.",
        answer: -5,
        unit: "V",
        tolerance: 0.01,
        explanation:
          "U_AB = 3 − 8 = −5 V. Das Vorzeichen zeigt, dass Punkt A ein niedrigeres Potenzial hat als B. Wenn die Reihenfolge der Punkte geändert würde, wäre es +5 V.",
      },
      {
        id: "voltage-4",
        type: "choice",
        question:
          "Wie schließe ich ein Voltmeter richtig an, um die Spannung an einem Widerstand zu messen?",
        options: [
          "Konsequenterweise den Ast brechen",
          "Parallel zu zwei Widerstandsklemmen",
          "Beide Sonden an ein Terminal",
          "Über Strombuchse statt V-Eingang",
        ],
        answer: 1,
        explanation:
          "Das Voltmeter vergleicht die Potentiale der beiden Anschlüsse des Elements, sodass es parallel geschaltet ist. Sein hoher Widerstand reduziert den Einfluss auf den zu prüfenden Stromkreis.",
      },
      {
        id: "voltage-5",
        type: "choice",
        question:
          "Welche Aussage über einen offenen Stromkreis bei einer Batterie ist wahr?",
        options: [
          "Wenn kein Strom vorhanden ist, liegt auch keine Spannung an der Batterie an.",
          "Spannung liegt nur innerhalb der Lampe vor",
          "Möglicherweise liegt an den Batterieklemmen Spannung an, obwohl der externe Strom nahezu Null ist",
          "In einem offenen Stromkreis ist der Strom notwendigerweise unendlich",
        ],
        answer: 2,
        explanation:
          "Die Batterie hält die Ladungstrennung und den Potentialunterschied aufrecht. Für externen Gleichstrom ist zusätzlich eine geschlossene Leiterbahn erforderlich.",
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
      "Verstehen Sie, woher der Widerstand kommt, wie er durch Material, Größe und Temperatur beeinflusst wird und wie man ihn misst.",
    objectives: [
      "Erklären Sie den Widerstand durch die Wechselwirkung von Ladungsträgern mit einem Material.",
      "Berechnen Sie den Widerstand anhand von Spannung und Strom sowie spezifischem Widerstand und Geometrie.",
      "Berücksichtigen Sie die Temperaturabhängigkeit und -toleranz. Es ist sicher, den Widerstand eines stromlosen Teils zu messen.",
    ],
    sections: [
      {
        id: "microscopic-resistance",
        title: "1. Warum verhindert ein Leiter den Stromfluss?",
        paragraphs: [
          "In einem Metall verursacht ein elektrisches Feld eine gerichtete Elektronendrift, sie interagieren jedoch mit Schwingungen des Kristallgitters, Verunreinigungen und Defekten im Material. Die vom Feld empfangene Energie wird häufig in Form von Wärme auf die Substanz übertragen. Um einen bestimmten Strom durch einen realen Leiter aufrechtzuerhalten, ist daher normalerweise eine Spannung ungleich Null erforderlich. Die Fähigkeit eines Elements, den Strom zu begrenzen, wird durch den elektrischen Widerstand R charakterisiert.",
          "Bei gleicher angelegter Spannung entspricht ein höherer Widerstand einem niedrigeren Strom. Der Widerstand wird in Ohm gemessen, Symbol Ω. Wenn bei einer Spannung von 1 V ein Strom von 1 A durch das Element fließt, beträgt das U/I-Verhältnis 1 Ω. Ein Widerstand ist ein speziell angefertigtes Element mit einem bestimmten Widerstandswert; Widerstand ist eine physikalische Größe, die auch Drähte, Kontakte, Wicklungen und andere Geräte haben. In diesem Fall bleibt die Ladung nicht „für immer hängen“: Im etablierten Stromkreis fließt sie weiterhin durch das Element.",
        ],
        formula: {
          expression: "R = U / I;  1 Ω = 1 V/A",
          legend:
            "R – Widerstand, Ω; U ist die Spannung am Element, V; I ist der Strom durch ihn, A.",
          note: "Das U/I-Verhältnis bestimmt den statischen Widerstand im gewählten Betriebspunkt. Nur für ein ohmsches Element ist es unter konstanten Bedingungen unabhängig von Strom und Spannung.",
        },
        example: {
          title: "Beispiel: Widerstand durch Messung",
          given:
            "Am Widerstand werden 6 V gemessen, der Strom durch ihn beträgt 20 mA. Finden Sie Widerstand.",
          steps: [
            "Rechnen Sie den Strom in Ampere um: 20 mA = 0,020 A.",
            "Wir verwenden R = U/I: R = 6/0,020 = 300 Ω.",
            "Wir prüfen: Bei 300 Ω und 0,020 A beträgt die Spannung U = I · R = 6 V.",
            "Wenn Milliampere durch 20 ersetzt würde, würde die Antwort fälschlicherweise um den Faktor Tausend reduziert.",
          ],
          answer: "Der Widerstandswert des Widerstands beträgt 300 Ω.",
        },
      },
      {
        id: "material-and-geometry",
        title: "2. Material, Länge und Querschnittsfläche",
        paragraphs: [
          "Der Widerstand eines homogenen Leiters hängt vom Material und der Form ab. Je länger der Draht, desto größer der Widerstand: Bei gleichem Strom erfolgt die Wechselwirkung von Ladungsträgern mit dem Material über einen längeren Weg. Je größer die Querschnittsfläche, desto geringer ist der Widerstand: Ladung kann über eine größere Fläche übertragen werden. Die Formel bezieht sich auf die Fläche, nicht auf den Durchmesser. Für einen runden Draht ist S = πd²/4, d. h. eine Verdoppelung des Durchmessers vervierfacht die Fläche.",
          "Die Materialeigenschaft wird durch den spezifischen Widerstand ρ charakterisiert. Seine SI-Einheit ist Ω m. Für Drähte ist es zweckmäßig, Ω · mm²/m zu verwenden, wenn die Fläche in mm² und die Länge in m ersetzt wird. Beispielsweise wird für Kupfer bei 20 °C häufig ρ ≈ 0,0175 Ω mm²/m angenommen. Dies ist ein ungefährer Lehrwert in Abhängigkeit von Zusammensetzung und Temperatur. Bei einer Zweidrahtleitung wird die Gesamtlänge der Hin- und Rückleitungen berücksichtigt: Eine Belastung von 10 m von der Quelle bedeutet in der Regel 20 m leitende Strecke.",
        ],
        formula: {
          expression: "R = ρ l / S;  Kreis = π d² / 4",
          legend:
            "ρ – spezifischer Widerstand; l – Länge, m; S – Querschnittsfläche; d – Durchmesser.",
          note: "Die Formel geht von einem homogenen Leiter mit konstantem Querschnitt und gegebener Temperatur aus. Verwenden Sie konsistente Flächen- und ρ-Einheiten.",
        },
        example: {
          title: "Beispiel: Kupferleitungswiderstand",
          given:
            "Die Last befindet sich 10 m von der Quelle entfernt und ist über zwei Kupferdrähte mit einem Querschnitt von 1 mm² angeschlossen. Nehmen Sie ρ = 0,0175 Ω mm²/m. Ermitteln Sie den Widerstand beider Drähte zusammen.",
          steps: [
            "Der Strom fließt durch die Vorwärtsleitung zur Last und durch die Rückwärtsleitung zurück: l = 10 + 10 = 20 m.",
            "Die Fläche S = 1 mm² entspricht der Einheit des spezifischen Widerstands.",
            "Wir berechnen Rlines = ρ · l/S = 0,0175 · 20/1 = 0,35 Ω.",
            "Bei einem Strom von 2 A würde der Spannungsabfall auf dieser Leitung UNetz = 2 · 0,35 = 0,7 V betragen. Dies zeigt, warum die Leitungen nicht immer als ideal angesehen werden können.",
          ],
          answer:
            "Der Gesamtwiderstand der Hin- und Rückleitungen beträgt 0,35 Ω.",
        },
      },
      {
        id: "temperature",
        title: "3. Temperatur verändert den Widerstand",
        paragraphs: [
          "Wenn ein gewöhnlicher Metallleiter erhitzt wird, verstärken sich die Schwingungen des Kristallgitters und sein Widerstand erhöht sich normalerweise. In einem kleinen Temperaturbereich kann die Abhängigkeit durch eine Gerade angenähert werden: R(T) = R₀[1 + α(T − T₀)]. Der Koeffizient α charakterisiert die relative Widerstandsänderung pro Grad und hat die Einheit K⁻¹. Der Temperaturunterschied in Grad Celsius entspricht numerisch dem Unterschied in Kelvin.",
          "Für Kupfer nahe 20 °C können wir α ≈ 0,00393 K⁻¹ annehmen. Wenn die Kupferwicklung bei 20 °C 10 Ω hätte, dann ergibt das lineare Modell bei 70 °C 10 [1 + 0,00393 50] ≈ 11,97 Ω. Nicht alle Materialien verhalten sich gleich: Der Widerstand eines NTC-Thermistors nimmt bei Erwärmung ab, während der eines PTC-Elements zunimmt. Die lineare Formel kann ohne Überprüfung nicht auf beliebige Materialien und einen großen Temperaturbereich erweitert werden.",
        ],
        formula: {
          expression: "R(T) ≈ R₀ · [1 + α · (T − T₀)]",
          legend:
            "R₀ – Widerstand bei Temperatur T₀; α ist der Temperaturkoeffizient K⁻¹.",
          note: "Die Näherung ist in dem Bereich anwendbar, in dem α als konstant angesehen werden kann. Die Temperatur muss die Temperatur des Elements selbst sein, nicht nur die der Luft um es herum.",
        },
        callout: {
          type: "insight",
          title: "Warum unterscheidet sich eine kalte Lampe von einer heißen?",
          text: "Der Metallfaden einer Glühlampe hat einen Kältewiderstand, der deutlich geringer ist als der Arbeitswiderstand. Beim Einschalten ist der Strom kurzzeitig höher als der Dauerstrom. Daher lässt sich durch die Messung eines kalten Filaments mit einem Ohmmeter kein Betriebsstrom vorhersagen, ohne dass die Wärme berücksichtigt wird.",
        },
      },
      {
        id: "resistors-tolerance",
        title: "4. Nennleistung, Toleranz und zulässige Leistung",
        paragraphs: [
          "Bei einem realen Widerstand werden der Nennwiderstand und die Toleranz eingestellt. Ein Nennwert von 1 kΩ mit einer Toleranz von ±5 % bedeutet, dass ein funktionsfähiges Element unter bestimmten Bedingungen einen Widerstand von 950 bis 1050 Ω haben kann. Bei der Toleranz handelt es sich um die zulässige Abweichung bei der Herstellung und nicht um einen Fehler, der zu jedem Messwert hinzugefügt werden muss. Die Nennwerte werden aus Standardserien ausgewählt und die Markierungen können numerisch oder farbig sein.",
          "Es ist wichtig, die Leistung des Widerstands zu berücksichtigen. Wenn Strom fließt, erwärmt er sich: P = I²R = U²/R für einen ohmschen Widerstand. Wenn an 100 Ω 10 V angelegt werden, beträgt die Leistung 1 W. Ein Widerstand mit einer zulässigen Nennleistung von 0,25 W ist für einen solchen Langzeitbetrieb nicht geeignet, auch wenn sein Widerstand richtig gewählt ist. Die zulässige Leistung hängt auch von den Temperatur- und Kühlbedingungen ab; eine angemessene Marge und Angaben des Herstellers sind erforderlich.",
        ],
        callout: {
          type: "tip",
          title: "Drei Parameter bei der Auswahl eines Widerstands",
          text: "Widerstand, Toleranz und zulässige Leistung prüfen. Bei kritischeren Stromkreisen werden zusätzlich Betriebsspannung, Temperaturkoeffizient und Kühlbedingungen berücksichtigt.",
        },
      },
      {
        id: "ohmmeter",
        title: "5. Messung mit einem Ohmmeter und Einfluss der Schaltung",
        paragraphs: [
          "Das Ohmmeter liefert ein eigenes kleines Messsignal und ermittelt anhand der Reaktion den Widerstand. Daher kann der Widerstand nur an einem stromlosen Stromkreis gemessen werden. Vor der Messung wird die externe Stromversorgung abgeschaltet und die Energiespeicher entsprechend der vorgesehenen Schaltung sicher entladen, anschließend wird die Spannungsfreiheit überprüft. Schließen Sie den Ω-Modus nicht an eine eingeschaltete Quelle an: Der Messwert ist falsch und das Gerät kann beschädigt werden.",
          "Bleibt der Widerstand im Stromkreis, können die Parallelpfade den gemessenen Widerstand verringern. Um ein bestimmtes Teil zu messen, reicht es normalerweise aus, eine seiner Leitungen bei ausgeschaltetem Strom abzutrennen. Der Widerstand der Sonden und Kontakte macht sich bei der Messung kleiner Widerstände bemerkbar und das Berühren beider Leitungen mit den Fingern kann die Messung sehr großer Widerstände verfälschen. Die OL-Angabe bedeutet oft Bereichsüberschreitung oder Lücke und nicht den genauen Wert von Unendlich; Die Bedeutung des Symbols ist in der Geräteanleitung angegeben.",
        ],
        callout: {
          type: "warning",
          title: "Der Kondensator ist auch eine Quelle für Restenergie",
          text: "Das Abklemmen der Batterie garantiert nicht, dass im Stromkreis keine Spannung anliegt: Ein geladener Kondensator kann sie speichern. Entladen Sie es nicht durch versehentlichen Kurzschluss; Verwenden Sie die für das Trainingsschema vorgesehene Methode.",
        },
      },
      {
        id: "conductance-and-models",
        title: "6. Leitfähigkeit und Grenzen eines einfachen Modells",
        paragraphs: [
          "Der Kehrwert des Widerstands wird als elektrische Leitfähigkeit G = 1/R bezeichnet. Seine Einheit ist Siemens, S. Ein 100-Ω-Widerstand hat eine Leitfähigkeit von 0,01 S oder 10 mS. Bei Parallelwiderständen ist es praktisch, die Leitfähigkeiten zu addieren: Jeder neue Zweig fügt die Möglichkeit der Ladungsübertragung hinzu, also Geq = G₁ + G₂. Verwechseln Sie das Symbol S der Siemens-Einheit nicht mit dem Buchstaben S für Fläche in einer geometrischen Formel: Die Bedeutung wird durch den Kontext bestimmt.",
          "Bei idealen Drähten wird angenommen, dass R = 0 ist und der Bruch einen unendlich großen Widerstand hat. Dies sind nützliche Begrenzungsmodelle. In Wirklichkeit hat der Draht einen Widerstand, aber die Isolierung kann auslaufen und zusammenbrechen, wenn die Spannung zu hoch ist. Darüber hinaus ändert sich das U/I-Verhältnis von Diode, Heizlampe und anderen nichtlinearen Elementen mit dem Arbeitspunkt. Die folgende Lektion erklärt, wann der Widerstand als konstant angesehen werden kann und wann das Ohmsche Gesetz in seiner einfachsten Form angewendet werden kann.",
        ],
        formula: {
          expression: "G = 1/R;  Gparallel = G₁ + G₂ + …",
          legend: "G – Leitfähigkeit, S; R – Widerstand, Ω; 1 S = 1/Ω.",
          note: "Wenn R > 0, bedeutet mehr Widerstand weniger Leitfähigkeit. Bei nichtlinearen Elementen muss der Arbeitspunkt angegeben werden.",
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
          "Eine Größe, die Spannung und Strom in Beziehung setzt; im Betriebspunkt R = U/I und für ein ohmsches Element unter konstanten Bedingungen konstant.",
      },
      {
        term: "Spezifischer Widerstand",
        german: "spezifischer Widerstand",
        symbol: "ρ",
        unit: "Ω · m",
        definition:
          "Charakteristisch für das in der Formel enthaltene Material R = ρl/S für einen homogenen Leiter.",
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
          "Der Koeffizient der relativen Widerstandsänderung bei Temperaturänderungen innerhalb des anwendbaren Bereichs.",
      },
      {
        term: "Toleranz",
        german: "Toleranz",
        symbol: "± %",
        unit: "%",
        definition:
          "Zulässige Abweichung des Widerstands eines realen Elements vom Nennwert unter gegebenen Bedingungen.",
      },
      {
        term: "Ohmmeter",
        german: "Ohmmeter",
        symbol: "Ω",
        unit: "Misst Ω",
        definition:
          "Ein Gerät zur Messung des Widerstands eines stromlosen Elements anhand seines eigenen Messsignals.",
      },
    ],
    summary: [
      "Der Widerstand begrenzt den Strom; für den Arbeitspunkt R = U/I, Einheit - Ohm.",
      "Für einen homogenen Draht R = ρl/S: Die Länge erhöht den Widerstand, die Querschnittsfläche nimmt ab.",
      "Zählen Sie bei einer Zweidrahtleitung sowohl die Hin- als auch die Rückleitung. Die Fläche eines Kreises ist proportional zum Quadrat seines Durchmessers.",
      "Der Widerstand von gewöhnlichem Metall nimmt normalerweise zu, wenn es erhitzt wird; Die Temperaturformel hat einen begrenzten Bereich.",
      "Überprüfen Sie bei der Auswahl eines Widerstands die Nennleistung, Toleranz und zulässige Leistung.",
      "Das Ohmmeter wird nur an ein stromloses Element angeschlossen; Parallelpfade und Restladungen verfälschen die Messung oder stellen ein Risiko dar.",
    ],
    quiz: [
      {
        id: "resistance-1",
        type: "numeric",
        question:
          "Am Element liegen 12 V an, durch es fließen 30 mA. Finden Sie den Widerstand in Ohm.",
        answer: 400,
        unit: "Ω",
        tolerance: 0.1,
        explanation:
          "30 mA = 0,030 A. R = U/I = 12/0,030 = 400 Ω. Eine Umrechnung von Milliampere in Ampere ist erforderlich.",
      },
      {
        id: "resistance-2",
        type: "choice",
        question:
          "Wie ändert sich der Widerstand eines homogenen Drahtes, wenn seine Länge bei konstanter Fläche und Temperatur verdoppelt wird?",
        options: [
          "Wird halbiert",
          "Wird sich nicht ändern",
          "Wird sich verdoppeln",
          "Wird sich vervierfachen",
        ],
        answer: 2,
        explanation:
          "Die direkte Proportionalität zur Länge ergibt sich aus R = ρl/S. Mit l₂ = 2l₁ und Konstanten ρ und S erhalten wir R₂ = 2R₁.",
      },
      {
        id: "resistance-3",
        type: "choice",
        question:
          "Der Durchmesser des Runddrahtes wurde verdoppelt. Material, Länge und Temperatur sind gleich. Was passiert mit dem Widerstand?",
        options: [
          "Wird um das Vierfache verringert",
          "Wird halbiert",
          "Wird sich verdoppeln",
          "Wird sich nicht ändern",
        ],
        answer: 0,
        explanation:
          "S = πd²/4, also vervierfacht eine Verdoppelung des Durchmessers die Fläche. Da R umgekehrt proportional zur Fläche ist, wird der Widerstand viermal kleiner.",
      },
      {
        id: "resistance-4",
        type: "numeric",
        question:
          "Ein 1000-Ω-Widerstand hat eine Toleranz von ±5 %. Was ist der obere zulässige Widerstand in Ohm?",
        answer: 1050,
        unit: "Ω",
        tolerance: 0.1,
        explanation:
          "5 % von 1000 Ω sind 1000 · 0,05 = 50 Ω. Die Obergrenze liegt bei 1000 + 50 = 1050 Ω; der untere wäre 950 Ω.",
      },
      {
        id: "resistance-5",
        type: "choice",
        question:
          "Wie misst man den Widerstand eines Widerstands in einem zusammengebauten Stromkreis richtig?",
        options: [
          "Schalten Sie den Strom ein, um die Arbeit mit dem Ohmmeter zu erleichtern",
          "Schalten Sie den Strom ab, prüfen Sie die Spannungsfreiheit und trennen Sie bei Parallelpfaden eine Klemme",
          "Stellen Sie den Strommessbereich ein und platzieren Sie die Sonden parallel",
          "Schließen Sie zunächst alle Kondensatoren mit einem Metallwerkzeug kurz",
        ],
        answer: 1,
        explanation:
          "Das Ohmmeter verwendet ein eigenes Messsignal und ist für ein spannungsloses Objekt ausgelegt. Parallelzweige können den Messwert senken, sodass ein Anschluss des Widerstands vom Stromkreis getrennt wird. Restenergie wird nur auf sichere Weise abgeführt.",
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
      "Verbinden Sie Strom, Spannung und Widerstand und lernen Sie, Probleme mit Einheiten, Diagrammen und realen Einschränkungen zu lösen.",
    objectives: [
      "Wenden Sie U = I · R an und wählen Sie die entsprechende Form der Gleichung.",
      "Lesen Sie die Strom-Spannungs-Kennlinie ab und prüfen Sie, ob das Element ohmsch ist.",
      "Berechnen Sie Widerstandsschaltungen und unterscheiden Sie das ideale Modell vom tatsächlichen Verhalten der Quelle und Last.",
    ],
    sections: [
      {
        id: "ohmic-law",
        title: "1. Was besagt das Ohmsche Gesetz?",
        paragraphs: [
          "Bei einem ohmschen Leiter ist unter konstanten physikalischen Bedingungen der Strom direkt proportional zur angelegten Spannung. Eine Verdoppelung der Spannung verdoppelt den Strom, eine Verdreifachung verdreifacht ihn. Der Proportionalitätskoeffizient wird durch den Widerstand bestimmt: I = U/R. Die äquivalente Schreibweise U = I · R bezieht sich auf die Spannung an einem Element, den Strom durch dasselbe Element und seinen Widerstand.",
          "Die Bedingung des ständigen Widerstands ist grundlegend. Temperatur, Material und Geometrie müssen nahezu unverändert bleiben. Das U/I-Verhältnis lässt sich in vielen Betriebspunkten bestimmen, beweist damit aber nicht das Ohmsche Gesetz: Ohmsches Verhalten bedeutet, dass das Verhältnis bei Spannungsänderungen konstant bleibt. Die Diode und die stark erhitzte Lampenwendel werden nicht über den gesamten Bereich durch eine Konstante R beschrieben.",
        ],
        formula: {
          expression: "U = I · R;  I = U / R;  R = U / I",
          legend: "U – Spannung, V; I – Strom, A; R ist der Widerstand Ω.",
          note: "U und ich meinen den gleichen Bereich. Ein konstantes R setzt ein ohmsches Element und konstante Bedingungen, vor allem die Temperatur, voraus.",
        },
        callout: {
          type: "insight",
          title: "Ein Gesetz, keine Definition für irgendein Gerät",
          text: "Die Formel R = U/I gibt den statischen Widerstand an einem Punkt an. Das Ohmsche Gesetz gibt außerdem die Konstanz dieses Verhältnisses für ein ohmsches Element unter bestimmten Bedingungen an.",
        },
      },
      {
        id: "solving-with-units",
        title: "2. Lösungsalgorithmus, ohne die Formel zu erraten",
        paragraphs: [
          "Schreiben Sie zunächst auf, was Sie wissen und was Sie finden müssen. Beachten Sie, zu welchem ​​Element die Daten gehören. Wandeln Sie dann die Mengen in vereinbarte Einheiten um und drücken Sie die Unbekannte aus U = I · R aus, bevor Sie Zahlen ersetzen. Teilen Sie für den Strom die Spannung durch den Widerstand. Teilen Sie für den Widerstand die Spannung durch den Strom. Beschriften Sie nach der Berechnung die Einheit und prüfen Sie, ob die Größenordnung plausibel ist.",
          "Die zuverlässigste Option ist V, A und Ω. Aber passende Präfixe vereinfachen manchmal die Berechnung: V/kΩ ergibt mA und mA · kΩ ergibt V. Beispielsweise ist 5 V / 1 kΩ = 5 mA. Fehler treten auf, wenn die Zahl 1000 Ω unmerklich durch 1 Ω oder 20 mA durch 20 A ersetzt wird. Schreiben Sie die Umrechnung explizit auf: 2,2 kΩ = 2200 Ω; 470 mA = 0,470 A; 250 mV = 0,250 V.",
        ],
        example: {
          title: "Beispiel: Strom durch einen 2,2 kΩ-Widerstand",
          given:
            "Eine ideale 11-V-Quelle wird an einen ohmschen Widerstand von 2,2 kΩ angeschlossen. Finden Sie den Strom.",
          steps: [
            "Gegeben sei U = 11 V, R = 2,2 kΩ = 2200 Ω. Wir suchen I.",
            "Wir drücken den Strom aus: I = U/R.",
            "Wir ersetzen: I = 11/2200 = 0,005 A = 5 mA.",
            "Wir überprüfen durch umgekehrte Substitution: I · R = 0,005 · 2200 = 11 V.",
            "Physikalischer Test: Ein Widerstand von Tausenden Ohm bei einer Spannung von mehreren Volt sollte einen Strom in der Größenordnung von Milliampere erzeugen.",
          ],
          answer: "Durch den Widerstand fließen 5 mA.",
        },
      },
      {
        id: "characteristic",
        title: "3. Strom-Spannungs-Kennlinie: siehe Gesetz in der Grafik",
        paragraphs: [
          "Die Strom-Spannungs-Kennlinie zeigt, wie der Strom von der Spannung abhängt. Wenn wir U horizontal und I vertikal zeichnen, erhalten wir für einen ohmschen Widerstand eine Gerade durch den Ursprung. Seine Steigung ist gleich I/U = 1/R, also Leitfähigkeit. Eine steilere Linie bedeutet ein kleineres R. Wenn Sie die Achsen vertauschen und U(I) zeichnen, ist die Steigung gleich R. Schauen Sie sich daher immer die Achsenbeschriftungen an, bevor Sie das Diagramm lesen.",
          "Nehmen wir an, die Messungen ergaben Paare von 2 V und 10 mA, 4 V und 20 mA, 6 V und 30 mA. In allen Fällen ist R = 200 Ω, was mit dem ohmschen Modell übereinstimmt. Wenn bei 6 V der Strom 25 mA beträgt, beträgt das Verhältnis bereits 240 Ω: Erwärmung, Nichtlinearität des Elements oder Messfehler müssen untersucht werden. Ein einzelner Punkt allein erlaubt keinen Beweis der Linearität. Der Versuch wird innerhalb der zulässigen Strom- und Leistungsgrenzen durchgeführt, da sonst die Erwärmung selbst zu einer Veränderung des Messobjektes führt.",
        ],
        formula: {
          expression: "Im I(U)-Diagramm gilt: Steigung = ΔI/ΔU = 1/R",
          legend:
            "ΔI – Stromänderung, A; ΔU ist die entsprechende Spannungsänderung V.",
          note: "Bei einer linearen Kennlinie eines ohmschen Widerstands ist die Steigung konstant. Die lokale Steigung einer nichtlinearen Kennlinie und das U/I-Verhältnis sind unterschiedliche Konzepte.",
        },
        callout: {
          type: "tip",
          title: "Schnelle Qualitätsprüfung",
          text: "Bei konstantem R sollte eine Erhöhung von U I erhöhen. Bei konstantem U sollte eine Erhöhung von R I verringern. Wenn die Berechnung etwas anderes sagt, sind höchstwahrscheinlich die Formel oder die Einheiten falsch geschrieben.",
        },
      },
      {
        id: "design-resistor",
        title: "4. Widerstandsauswahl und Heiztest",
        paragraphs: [
          "Das Ohmsche Gesetz hilft nicht nur, den Strom zu ermitteln, sondern auch einen Widerstand für einen bestimmten Modus auszuwählen. Soll der Widerstand 9 V bei einem Strom von 15 mA haben, ist R = 9/0,015 = 600 Ω erforderlich. Verfügbare Nennwerte und Toleranzen erfordern möglicherweise den nächstgelegenen geeigneten Wert und eine Neuberechnung. Der Widerstand kann nicht unabhängig von der Leistung gewählt werden: Das Element muss die erzeugte Wärme sicher ableiten.",
          "Für einen ohmschen Widerstand kann die Leistung wie folgt berechnet werden: P = U · I = I²R = U²/R. Diese Gleichheiten ergeben sich aus der Definition der elektrischen Leistung und dem Ohmschen Gesetz. Sie sind nützlich, um den Modus zu überprüfen: Bei einem festen U erhöht eine Verringerung von R sowohl den Strom als auch die Erwärmung. Bei einem festen I erhöht eine Erhöhung von R die Erwärmung. Bevor Sie die Ergebnisse vergleichen, sollten Sie herausfinden, welcher Wert wirklich konstant bleibt.",
        ],
        example: {
          title: "Beispiel: Widerstand für einen bestimmten Strom",
          given:
            "Der Widerstand sollte bei einem Strom von 20 mA um 6 V abfallen. Finden Sie den Widerstand und die Ausgangsleistung. Bewerten Sie den Widerstand auf 0,25 W.",
          steps: [
            "Strom umrechnen: 20 mA = 0,020 A.",
            "Wir berechnen den Widerstand: R = U/I = 6/0,020 = 300 Ω.",
            "Leistung: P = U · I = 6 · 0,020 = 0,12 W.",
            "Überprüfen wir es mit einer anderen Form: I²R = 0,020² · 300 = 0,12 W.",
            "0,12 W sind weniger als 0,25 W. Bei geeigneten Temperatur- und Kühlbedingungen ist diese Nennleistung geeignet; Die tatsächliche Auswahl wird anhand der Herstellerangaben und des benötigten Lagerbestands überprüft.",
          ],
          answer:
            "Es wird ein 300-Ω-Widerstand benötigt; Die Verlustleistung beträgt 0,12 W. Unter geeigneten Betriebsbedingungen sind nominell 0,25 W akzeptabel.",
        },
      },
      {
        id: "whole-circuit",
        title:
          "5. Ohmsches Gesetz für den gesamten Stromkreis und die reale Quelle",
        paragraphs: [
          "Um den Gesamtstrom eines komplexen Widerstandskreises mit einer idealen Quelle zu ermitteln, ermitteln Sie zunächst den äquivalenten Lastwiderstand. Dann verwenden Sie I = Uist/Req. Danach zurück zu den einzelnen Elementen: Im Reihenteil ist der Gesamtstrom bekannt, im Parallelteil sind die gleichen Spannungen bekannt. Sie können die gesamte Quellenspannung nicht durch den Widerstandswert eines separaten Vorwiderstands teilen, wenn nur ein Teil der Spannung darüber abfällt.",
          "Bei einer realen Quelle mit EMK E und Innenwiderstand r bildet ein externer Widerstand R eine Reihenschaltung mit r. Daher gilt I = E/(R + r) und die Lastspannung U = I · R = E − I · r. Bei E = 12 V, r = 1 Ω und R = 5 Ω beträgt der Strom beispielsweise 2 A und die Last beträgt 10 V. Der Unterschied von 2 V ist auf den Innenwiderstand zurückzuführen. Das Modell erklärt den Spannungseinbruch, ersetzt jedoch nicht die Daten zur Strombegrenzung und zum Schutz der realen Quelle.",
        ],
        formula: {
          expression: "I = E / (R + r);  Uload = I R = E − I r",
          legend:
            "E – EMF, V; R – externer Lastwiderstand, Ω; r ist der Innenwiderstand der Quelle, Ω.",
          note: "Es wird eine Quellenentladung im einfachen stationären Zustand betrachtet. Bei r = 0 erhalten wir eine ideale Spannungsquelle.",
        },
      },
      {
        id: "boundaries-and-review",
        title:
          "6. Wo das Gesetz nicht in einfacher Form angewendet werden kann",
        paragraphs: [
          "Eine Glühbirne, eine Diode, eine Batterie und eine elektronische Einheit müssen keine Widerstände mit konstantem R sein. In einer Diode hängt der Strom stark nichtlinear von der Spannung ab; Durch die Erwärmung ändert sich der Widerstand der Lampe. In einem Kondensator und einer Spule ist der Strom während transienter Prozesse mit einer Änderung der Spannung oder des magnetischen Flusses verbunden, sodass es normalerweise unmöglich ist, sie durch einen einzigen konstanten Widerstand zu ersetzen. Bei Wechselstrom mit reaktiven Elementen wird eine allgemeinere Größe eingeführt – die Impedanz.",
          "Der praktische Testablauf ist wie folgt: Element und Modus bestimmen, passendes Modell auswählen, Spannung an diesem bestimmten Element notieren, Einheiten angeben und Ergebnis berechnen. Überprüfen Sie dann die Ströme in den Knoten, die Spannungen in den Stromkreisen und die Leistung. Wenn die Antwort unerwartet groß ist, führen Sie kein Experiment durch, um „die Formel zu testen“: Überprüfen Sie zunächst die Präfixe, Kurzschlüsse und Grenzen des Modells. Formal ist ein unendlicher Strom bei R = 0 für eine ideale Quelle ein Zeichen für die Ungeeignetheit der Idealisierung und keine echte Anweisung.",
        ],
        callout: {
          type: "insight",
          title: "Eine Formel, drei verschiedene Fragen",
          text: "Für gegebenes U und R suchen wir nach dem Strom. Für gegebenes I und R suchen wir nach der erforderlichen Spannung. Wählen Sie bei gegebenen U und I den Widerstand aus. Eine erfolgreiche Lösung beginnt mit dem Verständnis dessen, was bekannt ist und was konstant bleibt.",
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
          "Bei einem ohmschen Element ist unter konstanten Bedingungen der Strom direkt proportional zur Spannung und ihr Verhältnis ist gleich dem konstanten Widerstand.",
      },
      {
        term: "Ohmscher Widerstand",
        german: "ohmscher Widerstand",
        symbol: "R",
        unit: "Ω - Ohm",
        definition:
          "Ein Element, dessen Widerstand im betrachteten Bereich und unter gegebenen Bedingungen nahezu konstant ist.",
      },
      {
        term: "Strom-Spannungs-Kennlinie",
        german: "Strom-Spannungs-Kennlinie",
        symbol: "I(U)",
        unit: "Diagramm A von V",
        definition:
          "Abhängigkeit des Stroms durch das Element von der Spannung an seinen Anschlüssen.",
      },
      {
        term: "Arbeitspunkt",
        german: "Arbeitspunkt",
        symbol: "(U, I)",
        unit: "V, A",
        definition:
          "Ein bestimmtes Paar aus Spannung und Strom, das den Modus des Elements charakterisiert.",
      },
      {
        term: "Innenwiderstand",
        german: "Innenwiderstand",
        symbol: "r",
        unit: "Ω - Ohm",
        definition:
          "Ein Parameter eines einfachen Quellenmodells, der einen Teil der Verluste und die Änderung der Klemmenspannung unter Last erklärt.",
      },
      {
        term: "Lineare Kennlinie",
        german: "lineare Kennlinie",
        symbol: "—",
        unit: "—",
        definition:
          "Bei einem ohmschen Widerstand die direkte Abhängigkeit des Stroms von der Spannung, die durch den Koordinatenursprung fließt.",
      },
    ],
    summary: [
      "Grundformen des Ohmschen Gesetzes: U = I · R, I = U/R, R = U/I.",
      "Ein konstantes R setzt ein ohmsches Element und konstante Bedingungen, insbesondere die Temperatur, voraus.",
      "Verwenden Sie Spannung und Strom desselben Elements. Übersetzen Sie Präfixe vor der Berechnung.",
      "Im I(U)-Diagramm eines ohmschen Widerstands verläuft am Anfang eine Gerade, deren Steigung 1/R beträgt.",
      "Überprüfen Sie nach der Widerstandsberechnung die Leistung P = U · I und die zulässige Erwärmung.",
      "Für eine Quelle mit Innenwiderstand I = E/(R + r); Dioden und reaktive Elemente erfordern unterschiedliche Modelle.",
    ],
    quiz: [
      {
        id: "ohm-1",
        type: "numeric",
        question:
          "An einen ohmschen Widerstand von 400 Ω werden 8 V angelegt. Wie groß ist der Strom in Milliampere?",
        answer: 20,
        unit: "mA",
        tolerance: 0.1,
        explanation:
          "I = U/R = 8/400 = 0,020 A. Mit 1000 multiplizieren und 20 mA erhalten. Die erforderliche Antworteinheit ist hier Milliampere.",
      },
      {
        id: "ohm-2",
        type: "numeric",
        question:
          "Durch den 1,5 kΩ Widerstand fließen 4 mA. Finden Sie die Spannung in Volt.",
        answer: 6,
        unit: "V",
        tolerance: 0.01,
        explanation:
          "R = 1500 Ω, I = 0,004 A. U = I R = 0,004 1500 = 6 V. Sie können auch sofort den angepassten mA kΩ = V verwenden.",
      },
      {
        id: "ohm-3",
        type: "choice",
        question:
          "Unter welchen Bedingungen verdoppelt sich der Strom durch einen ohmschen Widerstand, wenn sich die Spannung verdoppelt?",
        options: [
          "Bleibt sein Widerstand konstant, ändert sich auch die Temperatur praktisch nicht",
          "Für jedes Element, unabhängig von seinen Eigenschaften",
          "Nur wenn sich auch der Widerstand verdoppelt",
          "Nur wenn die Spannung Null ist",
        ],
        answer: 0,
        explanation:
          "Bei konstantem R folgt die direkte Proportionalität aus I = U/R. Wenn das Element heiß oder nichtlinear wird, kann sich der Widerstand ändern und der Strom verdoppelt sich nicht.",
      },
      {
        id: "ohm-4",
        type: "choice",
        question:
          "Im I(U)-Diagramm zweier ohmscher Widerstände ist die erste Gerade steiler als die zweite. Was bedeutet das?",
        options: [
          "Der Widerstand des ersten ist größer",
          "Die Widerstände müssen gleich sein",
          "Der Widerstand des ersten ist geringer",
          "Der erste Widerstand lässt keinen Strom durch",
        ],
        answer: 2,
        explanation:
          "Wenn die Vertikale I und die Horizontale U ist, beträgt die Steigung 1/R. Je steiler die Gerade ist, desto größer ist der Strom bei gleicher Spannung und desto geringer ist der Widerstand.",
      },
      {
        id: "ohm-5",
        type: "choice",
        question:
          "Die Quelle hat E = 12 V und r = 1 Ω, Last R = 5 Ω. Welchen Strom sagt das einfache Modell voraus?",
        options: ["12 A", "2,4 A", "2 A", "0,5 A"],
        answer: 2,
        explanation:
          "Innen- und Außenwiderstand sind in Reihe geschaltet: R + r = 6 Ω. I = E/(R + r) = 12/6 = 2 A. Eine Division von 12/5 würde den inneren Widerstand ignorieren.",
      },
    ],
  },
];
