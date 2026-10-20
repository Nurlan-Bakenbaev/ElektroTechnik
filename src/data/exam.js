export const examQuestions = [
  {
    id: "exam-01",
    lessonId: "current",
    type: "choice",
    question:
      "Welche Richtung hat der herkömmliche elektrische Strom im externen Metallkreis, der mit der Batterie verbunden ist?",
    options: [
      "Vom Minuspol zum Pluspol, wie die Bewegung von Elektronen",
      "Von positiv nach negativ, gegen die Bewegung der Elektronen",
      "In beide Richtungen gleichzeitig mit gleicher Kraft",
      "Die Richtung des Stroms wird nur durch das Material des Drahtes bestimmt",
    ],
    answer: 1,
    explanation:
      "Unter Stromrichtung versteht man die Bewegungsrichtung positiver Ladungen: im äußeren Stromkreis von „+“ nach „−“. Negative Elektronen sind in einem Metall beweglich, daher ist ihre geordnete Bewegung entgegengesetzt zum herkömmlichen Strom gerichtet.",
  },
  {
    id: "exam-02",
    lessonId: "current",
    type: "numeric",
    question:
      "Eine elektrische Ladung von 18 Coulomb (C) fließt in einer Zeitdauer von 6 s durch den Leiterquerschnitt. Wie groß ist die durchschnittliche Stromstärke in Ampere?",
    answer: 3,
    unit: "A",
    tolerance: 0.01,
    explanation:
      "Die durchschnittliche Stromstärke ist die transportierte Ladung geteilt durch die Zeit: I = ΔQ / Δt = 18 C / 6 s = 3 A. Ein Ampere entspricht einem Coulomb pro Sekunde.",
  },
  {
    id: "exam-03",
    lessonId: "current",
    type: "numeric",
    question:
      "Bei einer konstanten Stromstärke von 0,4 A: Welche elektrische Ladung fließt in einer Zeitdauer von 2 Minuten durch den Leiterquerschnitt? Geben Sie das Ergebnis in Coulomb an.",
    answer: 48,
    unit: "C",
    tolerance: 0.1,
    explanation:
      "Zuerst rechnen wir die Zeit um: t = 2 × 60 = 120 s. Dann ist Q = I · t = 0,4 A · 120 s = 48 C. Rechnen Sie die Zeit in Sekunden um, bevor Sie sie in die Formel einsetzen.",
  },
  {
    id: "exam-04",
    lessonId: "circuits",
    type: "choice",
    question:
      "Zwei Widerstände werden parallel an eine ideale 12-V-Quelle angeschlossen. Wie groß ist die Spannung an jedem?",
    options: [
      "Jeweils 6 V",
      "Hängt nur vom Widerstand jedes Widerstands ab",
      "Jeweils 12 V",
      "Jeweils 24 V",
    ],
    answer: 2,
    explanation:
      "Bei einer Parallelschaltung sind die Anfänge der Zweige mit demselben Knoten und die Enden mit einem zweiten Knoten verbunden. Die Potenzialdifferenz zwischen diesen Knoten ist für alle Zweige gleich: U₁ = U₂ = 12 V. Die Stromstärken in den Zweigen können unterschiedlich sein.",
  },
  {
    id: "exam-05",
    lessonId: "circuits",
    type: "numeric",
    question:
      "Widerstände 3 Ohm und 7 Ohm sind in Reihe geschaltet. Vernachlässigen Sie den Widerstand der Drähte. Finden Sie den Gesamtwiderstand.",
    answer: 10,
    unit: "Ω",
    tolerance: 0.01,
    explanation:
      "Bei einer Reihenschaltung fließt der Strom durch beide Widerstände und die Spannungsabfälle addieren sich. Daher ist Rtotal = R₁ + R₂ = 3 + 7 = 10 Ohm.",
  },
  {
    id: "exam-06",
    lessonId: "circuits",
    type: "choice",
    question:
      "In einem Stromkreis wurde der Schalter geöffnet. In einem anderen Fall waren die Pole einer echten Batterie durch einen Leiter mit sehr niedrigem Widerstand verbunden. Was passiert?",
    options: [
      "In beiden Stromkreisen ist der Strom notwendigerweise Null",
      "Im ersten Stromkreis ist der Strom maximal, im zweiten ist er Null.",
      "Der Strom ist in beiden Stromkreisen gleich: Er wird nur durch die Batteriespannung bestimmt",
      "Im ersten Stromkreis fließt kein Dauerstrom; Im zweiten Fall entsteht ein gefährlich hoher Kurzschlussstrom",
    ],
    answer: 3,
    explanation:
      "Bei geöffnetem Schalter ist der Stromkreis unterbrochen, sodass kein dauerhafter Gleichstrom fließt. Bei einem Kurzschluss ist der äußere Widerstand sehr gering; der Strom wird dann nur durch den Innenwiderstand der Quelle und der Leitungen begrenzt. Dadurch entsteht starke Erwärmung. Ein Kurzschluss wird nicht praktisch aufgebaut, da er gefährlich ist.",
  },
  {
    id: "exam-07",
    lessonId: "voltage",
    type: "numeric",
    question:
      "Wenn sich eine Ladung von 3 C zwischen zwei Punkten bewegt, verrichtet das elektrische Feld eine Arbeit von 24 J. Finden Sie die Größe der Spannung zwischen den Punkten.",
    answer: 8,
    unit: "V",
    tolerance: 0.01,
    explanation:
      "Spannungsmodul U = |W| / |Q| = 24 J / 3 C = 8 V. Die Spannung gibt an, wie viel Energie pro Einheit übertragener Ladung vorhanden ist: 1 V = 1 J / C.",
  },
  {
    id: "exam-08",
    lessonId: "voltage",
    type: "choice",
    question:
      "Wie schließt man ein Voltmeter an, um die Spannung an einem Widerstand zu messen und den Stromkreis so wenig wie möglich zu beeinflussen?",
    options: [
      "In Reihe zum Widerstand; der Innenwiderstand des Voltmeters sollte sehr klein sein",
      "Parallel zum Widerstand; Der Widerstand des Voltmeters sollte sehr hoch sein",
      "Anstelle eines Widerstands; Der Widerstand des Voltmeters sollte Null sein",
      "Bei einer Stromkreisunterbrechung; Der Widerstand des Voltmeters sollte unendlich sein",
    ],
    answer: 1,
    explanation:
      "Ein Voltmeter misst die Potentialdifferenz zwischen zwei Punkten und wird daher parallel geschaltet. Seine hohe Eingangsimpedanz macht den Strom durch das Gerät klein und verringert den Einfluss der Messung auf den Schaltkreis.",
  },
  {
    id: "exam-09",
    lessonId: "resistance",
    type: "numeric",
    question:
      "Der Kupferdraht hat eine Länge von 20 m und eine Querschnittsfläche von 1,5 mm². Bei dieser Temperatur ist ρ = 0,0175 Ohm mm²/m. Ermitteln Sie den Widerstand des Drahtes, gerundet auf das nächste Hundertstel Ohm.",
    answer: 0.23,
    unit: "Ω",
    tolerance: 0.005,
    explanation:
      "R = ρl / A = 0,0175 × 20 / 1,5 = 0,2333… Ohm ≈ 0,23 Ohm. Hier kann die Fläche in mm² belassen werden, da diese Einheit im angegebenen spezifischen Widerstand bereits enthalten ist.",
  },
  {
    id: "exam-10",
    lessonId: "resistance",
    type: "choice",
    question:
      "Der Draht wurde durch einen anderen aus demselben Material bei derselben Temperatur ersetzt. Seine Länge und Querschnittsfläche sind doppelt so groß. Wie hat sich der Widerstand verändert?",
    options: [
      "4-fach erhöht",
      "Um das Zweifache erhöht",
      "Hat sich nicht geändert",
      "Um das Zweifache verringert",
    ],
    answer: 2,
    explanation:
      "Nach der Formel R = ρl/A verdoppelt eine Verdoppelung der Länge den Widerstand, eine Verdoppelung der Fläche halbiert ihn. Faktoren heben sich auf: R₂ = ρ(2l)/(2A) = R₁.",
  },
  {
    id: "exam-11",
    lessonId: "resistance",
    type: "numeric",
    question:
      "Widerstände 6 Ohm und 3 Ohm sind parallel geschaltet. Finden Sie den äquivalenten Widerstand.",
    answer: 2,
    unit: "Ω",
    tolerance: 0.01,
    explanation:
      "Für zwei parallele Widerstände ist Rtot = R₁R₂ / (R₁ + R₂) = 6 × 3 / (6 + 3) = 2 Ohm. Kontrolle: Das Ergebnis ist kleiner als der untere Widerstand von 3 Ohm, da ein zusätzlicher Pfad für den Strom vorhanden ist.",
  },
  {
    id: "exam-12",
    lessonId: "ohm",
    type: "numeric",
    question:
      "Ein 150-Ohm-Widerstand wird mit einer konstanten Spannung von 12 V versorgt. Ermitteln Sie den Strom in Milliampere. Die Temperatur des Widerstands ist konstant.",
    answer: 80,
    unit: "mA",
    tolerance: 0.1,
    explanation:
      "Das Ohmsche Gesetz ergibt I = U/R = 12/150 = 0,08 A. Da 1 A = 1000 mA, erhalten wir 80 mA. In Ampere wäre die Antwort 0,08 richtig, hier sind jedoch Milliampere erforderlich.",
  },
  {
    id: "exam-13",
    lessonId: "ohm",
    type: "numeric",
    question:
      "Durch einen Widerstand mit einem Widerstandswert von 470 Ohm fließt ein Strom von 0,2 A. Finden Sie die Spannung darüber.",
    answer: 94,
    unit: "V",
    tolerance: 0.1,
    explanation:
      "Wir ordnen die Größen im Ohmschen Gesetz um: U = IR. Substitution: U = 0,2 A × 470 Ohm = 94 V. Die Dimension A Ohm entspricht einem Volt.",
  },
  {
    id: "exam-14",
    lessonId: "ohm",
    type: "choice",
    question:
      "Die Spannung am ohmschen Widerstand wurde um das Dreifache erhöht. Seine Temperatur und sein Widerstand änderten sich nicht. Wie hat sich die aktuelle Situation verändert?",
    options: [
      "3-fach erhöht",
      "9-fach erhöht",
      "Um das Dreifache verringert",
      "Gleich geblieben",
    ],
    answer: 0,
    explanation:
      "Bei konstantem R ist der Strom direkt proportional zur Spannung: I = U/R. Daher ergibt U₂ = 3U₁ I₂ = 3I₁. Wichtig ist die Bedingung einer konstanten Temperatur: Durch Erhitzen kann sich der Widerstand des realen Elements verändern.",
  },
  {
    id: "exam-15",
    lessonId: "energy",
    type: "numeric",
    question:
      "Die Lampe verbraucht eine konstante Leistung von 60 W und arbeitet 30 Minuten lang. Finden Sie die verbrauchte Energie in kWh.",
    answer: 0.03,
    unit: "kWh",
    tolerance: 0.0005,
    explanation:
      "Wir rechnen beide Werte um: P = 0,060 kW, t = 0,5 h. Energie W = Pt = 0,060 × 0,5 = 0,030 kWh. Dies sind ebenfalls 108.000 J, da 1 kWh = 3,6 × 10⁶ J.",
  },
  {
    id: "exam-16",
    lessonId: "energy",
    type: "numeric",
    question:
      "Eine 2-kW-Heizung läuft 1,5 Stunden lang ununterbrochen. Der Energiepreis beträgt 0,30 € pro kWh. Was kostet diese Arbeit?",
    answer: 0.9,
    unit: "€",
    tolerance: 0.005,
    explanation:
      "Energie zuerst: W = Pt = 2 kW × 1,5 h = 3 kWh. Dann betragen die Kosten: 3 × 0,30 = 0,90 €. Die Leistung ist bereits in Kilowatt angegeben, die Zeit in Stunden, sodass eine Umrechnung in Joule hier nicht erforderlich ist.",
  },
  {
    id: "exam-17",
    lessonId: "energy",
    type: "choice",
    question:
      "Welche Gleichung setzt Einheiten elektrischer Energie richtig in Beziehung?",
    options: [
      "1 kWh = 1000 J",
      "1 kWh = 3600 J",
      "1 kWh = 3.600.000 J",
      "1 kWh = 1000 W",
    ],
    answer: 2,
    explanation:
      "1 kWh = 1000 W × 3600 s = 3.600.000 J, da 1 W = 1 J/s. Watt beschreiben die Leistung, während Joule und Kilowattstunden die Energie beschreiben.",
  },
  {
    id: "exam-18",
    lessonId: "power",
    type: "numeric",
    question:
      "Ein Gleichstromgerät ist an 12 V angeschlossen und verbraucht 2,5 A. Finden Sie die elektrische Eingangsleistung.",
    answer: 30,
    unit: "W",
    tolerance: 0.1,
    explanation:
      "Bei Gleichstrom beträgt die elektrische Leistung P = UI = 12 V × 2,5 A = 30 W. Dies ist der Energieverbrauch: Das Gerät empfängt jede Sekunde 30 Joule.",
  },
  {
    id: "exam-19",
    lessonId: "power",
    type: "numeric",
    question:
      "Ein idealer 3-Ohm-Widerstand hält eine konstante Spannung von 6 V aufrecht. Wie viel Leistung wird als Wärme abgegeben?",
    answer: 12,
    unit: "W",
    tolerance: 0.1,
    explanation:
      "Für einen Widerstand P = U²/R = 6²/3 = 36/3 = 12 W. Anders ausgedrückt: I = 6/3 = 2 A, also UI = 6 × 2 = 12 W.",
  },
  {
    id: "exam-20",
    lessonId: "power",
    type: "choice",
    question:
      "Zwei Widerstandsheizungen sind für 230 V ausgelegt: Die erste hat 100 W, die zweite 50 W. Vergleichen Sie ihren Widerstand im Nennmodus.",
    options: [
      "Der erste hat den halben Widerstand",
      "Der erste hat den doppelten Widerstand",
      "Die Widerstände sind gleich",
      "Der erste hat viermal mehr Widerstand",
    ],
    answer: 0,
    explanation:
      "Bei gleicher Spannung R = U²/P gilt: je höher die Leistung, desto geringer der Widerstand. R₁/R₂ = P₂/P₁ = 50/100 = 0,5. Numerisch: 529 Ohm bzw. 1058 Ohm.",
  },
  {
    id: "exam-21",
    lessonId: "efficiency",
    type: "numeric",
    question:
      "Der Elektromotor erhält eine elektrische Leistung von 500 W und liefert eine mechanische Leistung von 375 W. Ermitteln Sie den Wirkungsgrad in Prozent.",
    answer: 75,
    unit: "%",
    tolerance: 0.1,
    explanation:
      "Der Wirkungsgrad beträgt η = P_nutz/P_zu · 100 % = 375/500 · 100 % = 75 %. Die restlichen 125 W entfallen auf Verluste, etwa durch Wärme, Reibung und Schall.",
  },
  {
    id: "exam-22",
    lessonId: "efficiency",
    type: "choice",
    question:
      "Ein Gerät mit einem Wirkungsgrad von 80 % erhielt 200 J. Wie hoch sind die nutzbare Energie und die Verluste für den gleichen Prozess?",
    options: [
      "Nutzwert 80 J, Verlust 120 J",
      "Nutzwert 160 J, Verlust 40 J",
      "Nutzwert 250 J, Verlust 50 J",
      "Nutzwert 200 J, Verlust 0 J",
    ],
    answer: 1,
    explanation:
      "Die Nutzenergie ist W_nutz = 0,80 · 200 J = 160 J. Nach dem Energieerhaltungssatz beträgt die Verlustenergie W_verlust = W_zu − W_nutz = 200 J − 160 J = 40 J. Energie geht nicht verloren, sondern wird in für den Zweck nicht nutzbare Formen umgewandelt.",
  },
  {
    id: "exam-23",
    lessonId: "field",
    type: "numeric",
    question:
      "Zwischen großen parallelen Platten beträgt die Spannung 300 V, der Abstand beträgt 15 mm. Randeffekte ignorieren und die einheitliche Feldstärke in kV/m ermitteln.",
    answer: 20,
    unit: "kV/m",
    tolerance: 0.1,
    explanation:
      "In einem einheitlichen Feld ist E = U/d. Abstand d = 15 mm = 0,015 m, also E = 300/0,015 = 20.000 V/m = 20 kV/m. Die Formel gilt außerhalb der Plattenränder.",
  },
  {
    id: "exam-24",
    lessonId: "field",
    type: "numeric",
    question:
      "Eine positive Testladung von 2 µC wird in ein elektrisches Feld von 500 N/C gebracht. Finden Sie die Größe der auf ihn wirkenden Kraft in Millinewton.",
    answer: 1,
    unit: "mN",
    tolerance: 0.01,
    explanation:
      "F = |q|E = 2 × 10⁻⁶ C × 500 N/C = 0,001 N = 1 mN. Bei einer positiven Ladung ist die Kraft entlang des Vektors E gerichtet; zu einer negativen Ladung - dagegen.",
  },
  {
    id: "exam-25",
    lessonId: "field",
    type: "choice",
    question:
      "Was ist wahr über die Richtung des elektrischen Feldes und der Äquipotentialflächen in der Elektrostatik?",
    options: [
      "Der Vektor E ist entlang der Äquipotentialfläche gerichtet",
      "Vektor E zeigt die Richtung der Kraft auf die negative Testladung",
      "Vektor E ist vom niedrigeren zum höheren Potential gerichtet",
      "Der Vektor E ist in Richtung des abnehmenden Potentials gerichtet und steht senkrecht zur Äquipotentialfläche, wobei E ≠ 0 ist",
    ],
    answer: 3,
    explanation:
      "Das Feld steht mit dem Potential in Zusammenhang mit der Beziehung E = −grad φ. Daher ist es auf das untere Potential gerichtet und senkrecht zur Oberfläche φ = const. Wenn sich eine Ladung entlang einer Äquipotentialfläche bewegt, ist die vom elektrostatischen Feld geleistete Arbeit Null.",
  },
  {
    id: "exam-26",
    lessonId: "capacitor",
    type: "numeric",
    question:
      "Ein Kondensator mit einer Kapazität von 100 μF wird auf 12 V aufgeladen. Ermitteln Sie den Ladungsmodul auf jeder Platte in Mikrocoulomb.",
    answer: 1200,
    unit: "µC",
    tolerance: 1,
    explanation:
      "Q = C · U. Mit C in Mikrofarad und U in Volt erhält man das Ergebnis in Mikrocoulomb: Q = 100 · 12 = 1200 µC = 1,2 mC. Die Platten tragen die Ladungen +Q und −Q; ihre Gesamtladung ist bei einem idealen Kondensator null.",
  },
  {
    id: "exam-27",
    lessonId: "capacitor",
    type: "numeric",
    question:
      "Ein 200-µF-Kondensator wird auf 10 V aufgeladen. Ermitteln Sie die Energie seines elektrischen Feldes in Millijoule.",
    answer: 10,
    unit: "mJ",
    tolerance: 0.1,
    explanation:
      "W = CU²/2 = (200 × 10⁻⁶ F) × (10 V)²/2 = 0,01 J = 10 mJ. Der 1/2-Multiplikator wird benötigt, da während des Ladevorgangs die Kondensatorspannung von Null auf den Endwert ansteigt.",
  },
  {
    id: "exam-28",
    lessonId: "capacitor",
    type: "choice",
    question:
      "Ein idealer Kondensator wird von einer Konstantspannungsquelle über einen Widerstand aufgeladen. Wie verhält sich dieser Zweig nach längerer Zeit?",
    options: [
      "Der Kondensator wird kurzgeschlossen, der Strom ist maximal",
      "Der Strom durch den Kondensator tendiert gegen Null und die Spannung an ihm tendiert zur Quellenspannung",
      "Der Strom steigt kontinuierlich an, wenn der Kondensator Ladung ansammelt.",
      "Die Kondensatorspannung wird zwangsläufig Null",
    ],
    answer: 1,
    explanation:
      "Während des Ladevorgangs nimmt die Stromstärke ab, da die Spannung am Kondensator zunimmt. Im stationären Gleichstromzustand fließt durch einen idealen Kondensator kein Strom: I → 0 und der Spannungsabfall am Widerstand IR → 0, also U_C → U. Reale Kondensatoren können einen geringen Leckstrom haben.",
  },
  {
    id: "exam-29",
    lessonId: "magnets",
    type: "choice",
    question:
      "Welche Richtung haben die magnetischen Feldlinien eines permanenten Stabmagneten?",
    options: [
      "Außen von N nach S, innen von S nach N; Leitungen sind geschlossen",
      "Außen von S nach N, innen kein Feld",
      "Zeilen beginnen mit N und enden vollständig mit S",
      "Alle Linien verlaufen gerade und biegen sich niemals",
    ],
    answer: 0,
    explanation:
      "Außerhalb des Magneten sind die Linien vom Nordpol N nach Süden S und innerhalb des Magneten gerichtet. Magnetische Linien bilden geschlossene Konturen. Dies unterscheidet sie von elektrostatischen Feldlinien, die an Ladungen beginnen und enden können.",
  },
  {
    id: "exam-30",
    lessonId: "magnets",
    type: "choice",
    question:
      "Ein Stabpermanentmagnet wurde kreuzweise in zwei Teile geschnitten. Was wird das Ergebnis nach der Trennung sein?",
    options: [
      "Der eine Teil hat nur einen Nordpol, der andere nur einen Südpol",
      "Beide Teile müssen ihre magnetischen Eigenschaften vollständig verlieren.",
      "Jeder Teil bildet einen Magneten mit Nord- und Südpol",
      "Jeder Teil behält nur die Stange, die sich am nächsten Ende befand",
    ],
    answer: 2,
    explanation:
      "Durch das Schneiden eines normalen Magneten wird der Nordpol nicht vom Südpol getrennt: Jedes Stück hat wiederum zwei Pole. Materie besteht aus magnetischen Dipolen und Domänen; Isolierte magnetische Monopole können auf diese Weise nicht erhalten werden.",
  },
  {
    id: "exam-31",
    lessonId: "electromagnetism",
    type: "numeric",
    question:
      "Ein gerader Leiter von 0,5 m Länge befindet sich vollständig in einem gleichmäßigen Feld B = 0,2 T. Durch ihn fließt senkrecht zum Feld ein Strom von 3 A. Finden Sie die Größe der magnetischen Kraft auf den Leiter.",
    answer: 0.3,
    unit: "N",
    tolerance: 0.005,
    explanation:
      "Für den geraden Abschnitt F = BIl sin α. Der Winkel zwischen Strom und Feld beträgt α = 90°, also ist sin α = 1. Wir erhalten F = 0,2 × 3 × 0,5 = 0,3 N. Wenn der Leiter entlang des Feldes angeordnet wäre, wäre diese Kraft Null.",
  },
  {
    id: "exam-32",
    lessonId: "electromagnetism",
    type: "choice",
    question:
      "Der Nordpol des Magneten wird entlang seiner Achse einer geschlossenen leitenden Spule näher gebracht. Was sagt die Lenzsche Regel über den erzeugten Strom aus?",
    options: [
      "Es verstärkt immer den Anstieg des externen magnetischen Flusses",
      "Es tritt nur dann auf, wenn sich Magnet und Spule berühren",
      "Es erzeugt ein Feld, das verhindert, dass sich der magnetische Fluss ändert; Die nächstgelegene Seite der Spule wird zum Nordpol",
      "Seine Richtung hängt nicht davon ab, ob der Magnet näher oder weiter weg gebracht wird",
    ],
    answer: 2,
    explanation:
      "Wenn sich der Magnet nähert, nimmt der Fluss durch die Spule zu. Der induzierte Strom erzeugt ein eigenes Feld, das genau dieser Veränderung entgegenwirkt. Die Seite der Spule, die dem Nordpol am nächsten liegt, wird zum Nordpol und stößt den sich nähernden Magneten ab. Die Arbeit einer äußeren Kraft wird in elektrische Energie und Wärme umgewandelt.",
  },
  {
    id: "exam-33",
    lessonId: "electromagnetism",
    type: "choice",
    question:
      "Eine stationäre geschlossene Spule befindet sich neben einem stationären Elektromagneten. In welchem ​​Fall entsteht in der Spule ein induzierter Strom?",
    options: [
      "Nur wenn die Spule den Elektromagneten berührt",
      "Wenn sich der Strom eines Elektromagneten ändert und sich dadurch auch der magnetische Fluss durch die Spule ändert",
      "Immer, auch bei konstantem Elektromagnetstrom und konstantem Fluss",
      "Niemals, denn beide Objekte sind bewegungslos",
    ],
    answer: 1,
    explanation:
      "Das Faradaysche Induktionsgesetz verknüpft die Induktionsspannung mit der zeitlichen Änderung des magnetischen Flusses: ε = −N dΦ/dt. Bewegung ist nur eine Möglichkeit, den Fluss zu ändern. Auch ein veränderlicher Strom in einem benachbarten Elektromagneten kann das Magnetfeld und damit den Fluss durch eine ruhende Spule ändern. Das ist das Prinzip der gegenseitigen Induktion und des Transformators.",
  },
  {
    id: "exam-34",
    lessonId: "magnetic-quantities",
    type: "numeric",
    question:
      "Ein flacher Rahmen mit einer Fläche von 25 cm² befindet sich in einem gleichmäßigen Feld von 0,4 Tesla. Vektor B steht senkrecht zur Rahmenebene. Ermitteln Sie die Größe des magnetischen Flusses durch den Rahmen in Milliweber.",
    answer: 1,
    unit: "mWb",
    tolerance: 0.01,
    explanation:
      "Φ = BA cos θ, wobei θ der Winkel zwischen B und der Normalen zum Rahmen ist. Hier ist θ = 0°, also Φ = BA. Fläche 25 cm² = 25 × 10⁻⁴ m² = 0,0025 m². Fluss Φ = 0,4 × 0,0025 = 0,001 Wb = 1 mWb. Verwechseln Sie den Winkel zur Normalen nicht mit dem Winkel zur Ebene.",
  },
  {
    id: "exam-35",
    lessonId: "magnetic-quantities",
    type: "choice",
    question:
      "Welche Zeile entspricht den magnetischen Größen und ihren SI-Einheiten richtig?",
    options: [
      "B – Weber; Φ – Tesla; H – Ampere pro Meter",
      "B – Volt; Φ – Coulomb; H – Ohm",
      "B – Ampere pro Meter; Φ – Tesla; H – Weber",
      "B – Tesla; Φ – Weber; H – Ampere pro Meter",
    ],
    answer: 3,
    explanation:
      "Die magnetische Flussdichte B wird in Tesla (T), der magnetische Fluss Φ in Weber (Wb) und die magnetische Feldstärke H in Ampere pro Meter (A/m) gemessen. Für ein homogenes Feld gilt Φ = BA cos θ und damit 1 Wb = 1 T·m². In einem linearen isotropen Medium gilt B = μ₀μᵣH; B und H sind unterschiedliche Größen.",
  },
];

export const formulaSheet = [
  {
    lessonId: "current",
    title: "Elektrische Stromstärke",
    expression: "I = ΔQ / Δt",
    legend:
      "I – durchschnittlicher Strom, A; ΔQ – durchgelassene Ladung, C; Δt – Zeit, s.",
    conditions:
      "Für Gleichstrom ist Q = It. Bei Wechselstrom ist der Momentanwert von I = dQ/dt.",
  },
  {
    lessonId: "voltage",
    title: "Spannungs- und Feldarbeit",
    expression: "U = W / Q",
    legend:
      "U ist die Spannung zwischen dem Start- und Endpunkt, V; W – elektrische Feldarbeit, J; Q – übertragene Ladung, C.",
    conditions:
      "Für ein elektrostatisches Feld ist W = Q(φstart − φend). Das Vorzeichen hängt von der Übertragungsrichtung und dem Vorzeichen der Ladung ab.",
  },
  {
    lessonId: "resistance",
    title: "Homogener Leiterwiderstand",
    expression: "R = ρl / A",
    legend:
      "R – Widerstand, Ohm; ρ – spezifischer Widerstand, Ohm m; l – Länge, m; A – Querschnittsfläche, m².",
    conditions:
      "Ein homogener Leiter mit konstantem Querschnitt bei einer bestimmten Temperatur. Für ρ in Ohm mm²/m wird die Fläche in mm² angegeben.",
  },
  {
    lessonId: "circuits",
    title: "Vorwiderstände",
    expression: "Rtotal = R₁ + R₂ + …; I₁ = I₂ = I; U = U₁ + U₂ + …",
    legend:
      "R – Widerstand, Ohm; I – Strom, A; U – Spannung, V; Indizes kennzeichnen einzelne Elemente.",
    conditions:
      "Die Elemente werden nacheinander ohne Verzweigungen zwischen ihnen verbunden. Den Widerstand der Anschlussdrähte vernachlässigen wir.",
  },
  {
    lessonId: "circuits",
    title: "Parallelwiderstände",
    expression: "1/Rtotal = 1/R₁ + 1/R₂ + …; U₁ = U₂ = U; I = I₁ + I₂ + …",
    legend: "R – Widerstand, Ohm; I – Strom, A; U – Spannung, V.",
    conditions:
      "Alle Zweige sind mit einem Knotenpaar verbunden. Für zwei Widerstände ist Rtotal = R₁R₂/(R₁ + R₂).",
  },
  {
    lessonId: "ohm",
    title: "Ohmsches Gesetz für einen Schaltungsabschnitt",
    expression: "I = U / R; U = IR; R = U / I",
    legend:
      "I – Strom, A; U ist die Spannung am Widerstand, V; R - Widerstand, Ohm.",
    conditions:
      "Ohmscher Abschnitt unter konstanten physikalischen Bedingungen, insbesondere Temperatur. Nichtlineare Elemente erfordern ihre eigenen Strom-Spannungs-Kennlinien.",
  },
  {
    lessonId: "energy",
    title: "Elektrische Energie und Arbeit",
    expression: "W = Pt = UIt; 1 kWh = 3,6 × 10⁶ J",
    legend:
      "W – Energie, J; P – Leistung, W; U – Spannung, V; I – Strom, A; t – Zeit, s.",
    conditions:
      "W = P · t gilt bei konstanter Leistung; W = U · I · t gilt bei konstanten Werten von U und I. Bei zeitlich veränderlicher Leistung gilt allgemein W = ∫P(t) dt. Leistung in kW und Zeit in h ergeben Energie in kWh.",
  },
  {
    lessonId: "power",
    title: "Elektrische Leistung",
    expression: "P = U · I; P = I² · R = U² / R",
    legend:
      "P – Leistung, W; U – Spannung, V; I – Strom, A; R - Widerstand, Ohm.",
    conditions:
      "Die erste Formel gilt für Gleichstrom. Die letzten beiden gelten für einen ohmschen Widerstand. In Wechselstromkreisen hängt die Wirkleistung zusätzlich vom Leistungsfaktor cos φ ab.",
  },
  {
    lessonId: "efficiency",
    title: "Wirkungsgrad",
    expression: "η = W_nutz / W_zu = P_nutz / P_zu; η (%) = 100 · η",
    legend:
      "η – dimensionsloser Wirkungsgrad; W – Energie, J; P – Leistung, W.",
    conditions:
      "Der Wirkungsgrad kann für Energie über einen Prozess oder für Leistung im stationären Betrieb bestimmt werden. Für einen Energiewandler gilt 0 ≤ η ≤ 1.",
  },
  {
    lessonId: "field",
    title: "Elektrische Feldstärke",
    expression: "E = F / |q|; E_hom = |U| /d",
    legend:
      "E – elektrische Feldstärke, N/C = V/m; F – Betrag der elektrischen Kraft, N; q – Betrag der Testladung, C; d – Abstand, m.",
    conditions:
      "Die Testladung ist klein und verzerrt das Feld nicht. E = |U|/d gilt für ein gleichmäßiges Feld, wenn der Abstand entlang der Feldlinie gemessen wird.",
  },
  {
    lessonId: "field",
    title: "Coulombsches Gesetz",
    expression: "F = k|q₁q₂| /r²; k ≈ 8,99 × 10⁹ N m²/C²",
    legend:
      "F – Kraftmodul, N; q₁, q₂ – Ladungen, C; r ist der Abstand zwischen den Ladungen, m.",
    conditions:
      "Festpunktladungen im Vakuum; Für Luft reicht in der Regel die gleiche Näherung aus. Gleiche Ladungen stoßen ab, ungleiche Ladungen ziehen sich an.",
  },
  {
    lessonId: "capacitor",
    title: "Kapazität und Ladung des Kondensators",
    expression: "C = Q / U; C_platte = ε₀ · εᵣ · A / d",
    legend:
      "C – Kapazität, F; Q – Betrag der Ladung einer Platte, C; U – Spannung zwischen den Platten, V; A – Überlappungsfläche der Platten, m²; d – Plattenabstand, m.",
    conditions:
      "Lineares Dielektrikum. Die Formel für einen Parallelplattenkondensator geht davon aus, dass d deutlich kleiner ist als die Größe der Platten und Randeffekte vernachlässigt.",
  },
  {
    lessonId: "capacitor",
    title: "Kondensatorenergie",
    expression: "W = CU²/2 = Q²/(2C) = QU/2",
    legend:
      "W – Energie, J; C – konstante Kapazität, F; U – Spannung, V; Q ist der Ladungsmodul einer Platte, C.",
    conditions:
      "Linearer Kondensator. Sobald ein idealer isolierter Kondensator von der Quelle getrennt ist, behält er die Ladung, aber nicht unbedingt die Spannung.",
  },
  {
    lessonId: "capacitor",
    title: "Kondensatoranschlüsse",
    expression:
      "Parallel dazu: Ctotal = C₁ + C₂ + …; nacheinander: 1/Ctotal = 1/C₁ + 1/C₂ + …",
    legend:
      "Ctotal – äquivalente Kapazität, F; C₁, C₂ – Kapazitäten einzelner Kondensatoren, F.",
    conditions:
      "Ideale lineare Kondensatoren. Bei einer Reihenschaltung zunächst ungeladener Kondensatoren sind die Ladungsbeträge gleich; bei einer Parallelschaltung sind die Spannungen gleich.",
  },
  {
    lessonId: "capacitor",
    title: "Zeitkonstante der RC-Schaltung",
    expression: "τ = RC; Uc(t) = U₀(1 − e^(−t/τ))",
    legend:
      "τ – Zeitkonstante, s; R – Widerstand, Ohm; C – Kapazität, F; U₀ – Quellenspannung, V; t – Zeit nach der Verbindung, s.",
    conditions:
      "Laden eines zunächst ungeladenen idealen Kondensators über einen Widerstand aus einer Konstantquelle. Für τ erreicht die Spannung etwa 63,2 % U₀; für 5τ - etwa 99,3 %.",
  },
  {
    lessonId: "electromagnetism",
    title: "Kraft auf einen stromdurchflossenen Leiter",
    expression: "F = BIl sin α",
    legend:
      "F – magnetische Kraft, N; B – magnetische Flussdichte, T; I – Stromstärke, A; l – Länge des Leiterabschnitts, m; α – Winkel zwischen Stromrichtung und B.",
    conditions:
      "Der gerade Leiter befindet sich vollständig in einem gleichmäßigen Feld. Maximale Kraft bei 90°, Nullkraft bei 0° und 180°.",
  },
  {
    lessonId: "magnetic-quantities",
    title: "Magnetischer Fluss",
    expression: "Φ = BA cos θ; 1 Wb = 1 T m²",
    legend:
      "Φ – magnetischer Fluss, Wb; B – magnetische Flussdichte, T; A – Fläche, m²; θ – Winkel zwischen B und der Flächennormalen.",
    conditions:
      "Gleichmäßiges Feld und ebene Oberfläche. Im allgemeinen Fall ergibt sich der Fluss als Integral Φ = ∫ B·dA. Der Winkel wird zwischen B und der Flächennormalen gemessen, nicht zwischen B und der Oberfläche.",
  },
  {
    lessonId: "electromagnetism",
    title: "Elektromagnetische Induktion",
    expression: "ε = −N dΦ/dt; ε̄ = −N ΔΦ/Δt",
    legend:
      "ε – Induktionsspannung, V; N – Windungszahl; Φ – magnetischer Fluss durch eine Windung, Wb; t – Zeit, s.",
    conditions:
      "Die Formel mit N setzt voraus, dass alle Windungen denselben magnetischen Fluss umfassen. Das Minuszeichen beschreibt die Lenzsche Regel: Die Induktionswirkung ist der Änderung des magnetischen Flusses entgegengerichtet.",
  },
  {
    lessonId: "magnetic-quantities",
    title: "Magnetische Feldstärke im Inneren einer langen Spule",
    expression: "H ≈ NI / l",
    legend:
      "H – magnetische Feldstärke, A/m; N ist die Anzahl der Windungen; I – Strom, A; l ist die Länge der Spule, m.",
    conditions:
      "Lange, gleichmäßig gewickelte Spule; betrachtet wird das Feld im Inneren, weit entfernt von den Enden. Für komplexe Kerne und Luftspalte ist ein Modell des Magnetkreises erforderlich.",
  },
  {
    lessonId: "magnetic-quantities",
    title: "Zusammenhang zwischen magnetischer Flussdichte und Feldstärke",
    expression: "B = μ₀μrH; μ₀ ≈ 1,256637 × 10⁻⁶ H/m",
    legend:
      "B – magnetische Flussdichte, T; H – magnetische Feldstärke, A/m; μ₀ – magnetische Feldkonstante; μᵣ – relative Permeabilität.",
    conditions:
      "In einem linearen isotropen Medium gilt die Beziehung mit konstanter Permeabilität; im Vakuum ist μᵣ = 1. Bei Ferromagneten hängt μᵣ vom Arbeitspunkt und der magnetischen Vorgeschichte ab und ist wegen Hysterese und Sättigung nicht konstant.",
  },
];

export const sources = [
  {
    title: "University Physics, Volume 2 · Electric Charges and Fields",
    organization: "OpenStax, Rice University",
    url: "https://openstax.org/books/university-physics-volume-2/pages/5-introduction",
    description:
      "Offenes Universitätslehrbuch. Kapitel 5: Ladung, Coulombsches Gesetz, elektrisches Feld und Kraftlinien. Auf Englisch.",
  },
  {
    title: "University Physics, Volume 2 · Electric Potential",
    organization: "OpenStax, Rice University",
    url: "https://openstax.org/books/university-physics-volume-2/pages/7-introduction",
    description:
      "Kapitel 7: Potenzielle Energie, elektrisches Potenzial, Spannung und Äquipotentialflächen. Auf Englisch.",
  },
  {
    title: "University Physics, Volume 2 · Capacitance",
    organization: "OpenStax, Rice University",
    url: "https://openstax.org/books/university-physics-volume-2/pages/8-introduction",
    description:
      "Kapitel 8: Kapazität, Kondensatorverbindungen, Dielektrika und elektrische Feldenergie. Auf Englisch.",
  },
  {
    title: "University Physics, Volume 2 · Current and Resistance",
    organization: "OpenStax, Rice University",
    url: "https://openstax.org/books/university-physics-volume-2/pages/9-introduction",
    description:
      "Kapitel 9: Strom, Widerstand, spezifischer Widerstand, Ohmsches Gesetz, elektrische Energie und Leistung. Auf Englisch.",
  },
  {
    title: "University Physics, Volume 2 · Direct-Current Circuits",
    organization: "OpenStax, Rice University",
    url: "https://openstax.org/books/university-physics-volume-2/pages/10-introduction",
    description:
      "Kapitel 10: Reihen- und Parallelschaltungen, Kirchhoffsche Regeln, Messgeräte und RC-Schaltungen. Auf Englisch.",
  },
  {
    title: "University Physics, Volume 2 · Magnetic Forces and Fields",
    organization: "OpenStax, Rice University",
    url: "https://openstax.org/books/university-physics-volume-2/pages/11-introduction",
    description:
      "Kapitel 11: Magnetische Induktion, Magnetkraft, Ladungsbewegung und Kraft auf einen stromdurchflossenen Leiter. Auf Englisch.",
  },
  {
    title: "University Physics, Volume 2 · Sources of Magnetic Fields",
    organization: "OpenStax, Rice University",
    url: "https://openstax.org/books/university-physics-volume-2/pages/12-introduction",
    description:
      "Kapitel 12: Magnetfeld des Stroms, Magnetspule, Ampere-Gesetz und magnetische Eigenschaften der Materie. Auf Englisch.",
  },
  {
    title: "University Physics, Volume 2 · Electromagnetic Induction",
    organization: "OpenStax, Rice University",
    url: "https://openstax.org/books/university-physics-volume-2/pages/13-introduction",
    description:
      "Kapitel 13: Magnetischer Fluss, Faradaysches Gesetz, Lenzsche Regel und Erhalt induzierter EMK. Auf Englisch.",
  },
  {
    title: "University Physics, Volume 2 · Inductance",
    organization: "OpenStax, Rice University",
    url: "https://openstax.org/books/university-physics-volume-2/pages/14-introduction",
    description:
      "Kapitel 14: Selbstinduktion, gegenseitige Induktion, Magnetfeldenergie und Transienten. Zum vertieften Studium.",
  },
  {
    title: "The International System of Units (SI Brochure)",
    organization: "BIPM – Internationales Büro für Maß und Gewicht",
    url: "https://www.bipm.org/en/publications/si-brochure",
    description:
      "Offizielle SI-Broschüre: Definitionen und Symbole von Ampere, Volt, Ohm, Farad, Tesla, Weber, Joule und Watt sowie Dezimalpräfixe.",
  },
  {
    title: "Elektrizitätslehre",
    organization: "LEIFIphysik · Joachim Herz Stiftung",
    url: "https://www.leifiphysik.de/elektrizitaetslehre",
    description:
      "Schulerklärungen, Experimente und Probleme zu Elektrizität und Magnetismus. Nützlich zum Wiederholen deutscher Begriffe aus dem Programm. Auf Deutsch.",
  },
];
