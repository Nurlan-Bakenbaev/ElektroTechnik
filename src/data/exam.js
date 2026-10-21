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
      "Eine Ladung von 18 C durchläuft den Drahtquerschnitt in 6 s. Finden Sie den durchschnittlichen Strom in Ampere.",
    answer: 3,
    unit: "A",
    tolerance: 0.01,
    explanation:
      "Stromstärke - Ladung pro Zeiteinheit: I = ΔQ / Δt = 18 C / 6 s = 3 A. Ein Ampere entspricht einem Coulomb pro Sekunde.",
  },
  {
    id: "exam-03",
    lessonId: "current",
    type: "numeric",
    question:
      "Es fließt 2 Minuten lang ein Gleichstrom von 0,4 A. Welche Ladung geht durch den Drahtquerschnitt? Geben Sie Ihre Antwort in Coulomb an.",
    answer: 48,
    unit: "C",
    tolerance: 0.1,
    explanation:
      "Zuerst rechnen wir die Zeit um: t = 2 × 60 = 120 s. Dann ist Q = It = 0,4 A × 120 s = 48 C. Sie können in der Formel Minuten nicht ohne Umrechnung durch Ampere ersetzen.",
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
      "Bei einer Parallelschaltung werden die Anfänge der Zweige mit einem Knoten und die Enden mit einem anderen verbunden. Der Potentialunterschied zwischen diesen Knoten ist gleich: U₁ = U₂ = U = 12 V. Die Ströme entlang der Zweige können unterschiedlich sein.",
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
      "Der Bruch hinterlässt keinen geschlossenen Weg für den Gleichstrom. Bei einem Kurzschluss ist der äußere Widerstand des Stromkreises sehr gering und der Strom wird durch den Innenwiderstand der Quelle und der Leitungen begrenzt. Dadurch entsteht starke Hitze. Es ist unmöglich, einen Kurzschluss in der Praxis zu überprüfen.",
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
      "Konsequent; Der Widerstand des Voltmeters sollte sehr klein sein",
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
      "Wirkungsgrad η = P_nutz/P_zu · 100 % = 375/500 · 100 % = 75 %. Die restlichen 125 W stammen aus Verlusten: Wärme, Reibung, Schall und andere Formen der Energieübertragung, die für diese Aufgabe nicht nützlich sind.",
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
      "Wuseful = 0,80 × 200 = 160 J. Nach dem Energieerhaltungssatz ist Wloss = Winput − Wuseful = 200 − 160 = 40 J. Verluste bedeuten nicht das Verschwinden von Energie: Sie geht in Formen über, die nicht der Zweck des Geräts sind.",
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
      "Q = CU. Mit C in Mikrofarad und U in Volt erhält man sofort das Ergebnis in Mikrocoulomb: Q = 100 × 12 = 1200 µC = 1,2 mC. Die Platten haben Ladungen +Q und −Q; ihre algebraische Summe für einen idealen Kondensator ist Null.",
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
      "Während des Ladevorgangs nimmt der Strom ab, da die Spannung am Kondensator zunimmt. Im stationären Gleichstromzustand leitet ein ideales Dielektrikum keine Ladung: I → 0, der Spannungsabfall am Widerstand IR → 0, also Uc → Uist. Echte Kondensatoren können einen geringen Leckstrom haben.",
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
      "Das Faradaysche Gesetz setzt EMF auf Änderungen im magnetischen Fluss: ε = −N dΦ/dt. Bewegung ist nur eine Möglichkeit, den Fluss zu verändern. Der Wechselstrom eines benachbarten Elektromagneten verändert Feld und Fluss auch bei ruhenden Spulen; Dies ist das Prinzip der gegenseitigen Induktion und des Transformators.",
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
      "Induktion B – Weber; Durchfluss Φ - Tesla; Spannung H - Ampere",
      "Induktion B - Volt; Fluss Φ – Coulomb; Spannung H - Ohm",
      "Induktion B – Ampere/Meter; Durchfluss Φ - Tesla; Spannung H - Weber",
      "Induktion B – Tesla; Strömung Φ – Weber; Spannung H - Ampere/Meter",
    ],
    answer: 3,
    explanation:
      "B wird in Tesla (T), Φ in Weber (Wb) und H in Ampere pro Meter (A/m) gemessen. Für ein einheitliches Feld Φ = BA cos θ also 1 Wb = 1 T m². In einem linear isotropen Medium B = μ₀μrH; B und H hängen zusammen, sind aber unterschiedliche Größen.",
  },
];

export const formulaSheet = [
  {
    lessonId: "current",
    title: "Elektrische Stromstärke",
    expression: "I = ΔQ / Δt",
    legend:
      "I: mittlere Stromstärke in Ampere (A). ΔQ: Ladungsmenge durch den Leiterquerschnitt in Coulomb (C). Δt: benötigte Zeit in Sekunden (s).",
    conditions:
      "Teile die transportierte Ladungsmenge durch die dafür benötigte Zeit. Bei gleichbleibendem Strom gilt der Wert während des gesamten betrachteten Zeitraums.",
  },
  {
    lessonId: "voltage",
    title: "Spannungs- und Feldarbeit",
    expression: "U = W / Q",
    legend:
      "U: Spannung zwischen zwei Punkten in Volt (V). W: übertragene elektrische Energie in Joule (J). Q: bewegte Ladungsmenge in Coulomb (C).",
    conditions:
      "Spannung beschreibt Energie pro Ladung. Für die Rechnung müssen Energie und Ladungsmenge zum selben Vorgang gehören. Die gewählte Bezugsrichtung bestimmt das Vorzeichen.",
  },
  {
    lessonId: "resistance",
    title: "Homogener Leiterwiderstand",
    expression: "R = ρl / A",
    legend:
      "R: Widerstand in Ohm (Ω). ρ: spezifischer Widerstand des Materials in Ω·m. l: Leiterlänge in Metern (m). A: Querschnittsfläche in Quadratmetern (m²); hier bedeutet A keine Ampere.",
    conditions:
      "Gilt für einen gleichmäßigen Leiter bei fester Temperatur. Mehr Länge erhöht den Widerstand, mehr Querschnitt verringert ihn. Bei ρ in Ω·mm²/m setzt du den Querschnitt in mm² ein.",
  },
  {
    lessonId: "circuits",
    title: "Reihenschaltung von Widerständen",
    expression: "Rtotal = R₁ + R₂ + …; I₁ = I₂ = I; U = U₁ + U₂ + …",
    legend:
      "R: Widerstand in Ohm (Ω). I: Stromstärke in Ampere (A). U: Spannung in Volt (V). Die tiefgestellten Zahlen kennzeichnen die einzelnen Widerstände; ges bedeutet gesamt.",
    conditions:
      "Die Elemente werden nacheinander ohne Verzweigungen zwischen ihnen verbunden. Den Widerstand der Anschlussdrähte vernachlässigen wir.",
  },
  {
    lessonId: "circuits",
    title: "Parallelschaltung von Widerständen",
    expression: "1/Rtotal = 1/R₁ + 1/R₂ + …; U₁ = U₂ = U; I = I₁ + I₂ + …",
    legend:
      "R: Widerstand in Ohm (Ω). I: Stromstärke in Ampere (A). U: Spannung in Volt (V). Die Zahlen bezeichnen einzelne Zweige; ges bedeutet gesamt.",
    conditions:
      "Alle Zweige liegen an denselben zwei Anschlussknoten. Deshalb ist ihre Spannung gleich. Die Zweigströme addieren sich; der Gesamtwiderstand ist kleiner als der kleinste Einzelwiderstand.",
  },
  {
    lessonId: "ohm",
    title: "Ohmsches Gesetz für einen Schaltungsabschnitt",
    expression: "I = U / R; U = IR; R = U / I",
    legend:
      "I: Stromstärke in Ampere (A). U: Spannung am betrachteten Widerstand in Volt (V). R: dessen Widerstand in Ohm (Ω).",
    conditions:
      "Gilt für einen ohmschen Widerstand bei gleichbleibender Temperatur. Wähle die Umstellung nach der gesuchten Größe. Spannung und Stromstärke müssen zum selben Bauteil gehören.",
  },
  {
    lessonId: "energy",
    title: "Elektrische Energie und Arbeit",
    expression: "W = Pt = UIt; 1 kWh = 3,6 × 10⁶ J",
    legend:
      "W als Formelzeichen: elektrische Arbeit bzw. Energie in Joule (J). P: Leistung in Watt (W). U: Spannung in Volt (V). I: Stromstärke in Ampere (A). t: Zeit in Sekunden (s).",
    conditions:
      "Für konstante Leistung. Bei der Rechnung mit Spannung und Stromstärke müssen auch diese konstant sein. Watt mal Sekunden ergibt Joule; Kilowatt mal Stunden ergibt Kilowattstunden. kWh ist Energie, kW ist Leistung.",
  },
  {
    lessonId: "power",
    title: "Elektrische Leistung",
    expression: "P = U · I; P = I² · R; P = U² / R",
    legend:
      "P: Leistung in Watt (W). U: Spannung in Volt (V). I: Stromstärke in Ampere (A). R: Widerstand in Ohm (Ω).",
    conditions:
      "Das Produkt aus Spannung und Stromstärke liefert hier die Gleichstromleistung. Die beiden Umstellungen mit R gelten für ohmsche Widerstände. Sie lassen sich nicht unverändert auf die mittlere Leistung beliebiger Wechselstromverbraucher übertragen.",
  },
  {
    lessonId: "efficiency",
    title: "Wirkungsgrad",
    expression: "η = W_nutz / W_zu = P_nutz / P_zu; η% = 100η",
    legend:
      "η (Eta): Wirkungsgrad ohne Einheit, oft in Prozent angegeben. W: Energie in Joule (J). P: Leistung in Watt (W). nutz: nutzbarer Anteil; zu: insgesamt zugeführt.",
    conditions:
      "Teile den nutzbaren Anteil durch den zugeführten Anteil. Vergleiche dieselbe Systemgrenze und denselben Zeitraum; für das Leistungsverhältnis einen stationären Betrieb. Ein Energiewandler hat höchstens 100 % Wirkungsgrad.",
  },
  {
    lessonId: "field",
    title: "Elektrische Feldstärke",
    expression: "E = F / |q|; E_hom = |U| /d",
    legend:
      "E: Betrag der elektrischen Feldstärke in Newton pro Coulomb (N/C) oder Volt pro Meter (V/m). F: Kraftbetrag in Newton (N). q: Probeladung in Coulomb (C). U: Spannung in Volt (V). d: Abstand in Metern (m).",
    conditions:
      "Die Probeladung muss so klein sein, dass sie das Feld kaum verändert. Die Beziehung mit Spannung und Abstand gilt für ein homogenes Feld, gemessen entlang der Feldlinien. Die Feldrichtung ist als Kraftrichtung auf eine positive Probeladung festgelegt.",
  },
  {
    lessonId: "field",
    title: "Coulombsches Gesetz",
    expression: "F = k|q₁q₂| /r²; k ≈ 8,99 × 10⁹ N m²/C²",
    legend:
      "F: Kraftbetrag in Newton (N). q₁ und q₂: elektrische Ladungen in Coulomb (C). r: Abstand in Metern (m). k: Coulomb-Konstante für das Vakuum.",
    conditions:
      "Für ruhende Punktladungen im Vakuum; in Luft meist eine gute Näherung. Gleiche Vorzeichen stoßen sich ab, verschiedene ziehen sich an. Doppelter Abstand bedeutet ein Viertel des Kraftbetrags.",
  },
  {
    lessonId: "capacitor",
    title: "Kapazität und Ladung des Kondensators",
    expression: "C=Q/U; Flach = ε₀εrA / d",
    legend:
      "C als Formelzeichen: Kapazität in Farad (F). Q: Betrag der Ladung auf einer Platte in Coulomb (Einheit C). U: Spannung in Volt (V). A: Plattenfläche in m². d: Plattenabstand in Metern (m). ε₀: elektrische Feldkonstante; εr: relative Permittivität des Materials ohne Einheit.",
    conditions:
      "Für einen linearen Kondensator. Die Plattenformel setzt parallele Platten und ein gleichmäßiges Dielektrikum voraus. Ihr Abstand muss gegenüber den Plattenabmessungen klein sein, damit Randeffekte vernachlässigbar bleiben.",
  },
  {
    lessonId: "capacitor",
    title: "Kondensatorenergie",
    expression: "W = CU²/2 = Q²/(2C) = QU/2",
    legend:
      "W: gespeicherte Energie in Joule (J). C: Kapazität in Farad (F). U: Spannung in Volt (V). Q: Betrag der Ladung auf einer Platte in Coulomb (C).",
    conditions:
      "Für einen linearen Kondensator mit konstanter Kapazität. Seine Energie steckt im elektrischen Feld. Bei doppelter Spannung wird viermal so viel Energie gespeichert; reale Kondensatoren können sich nach dem Trennen entladen.",
  },
  {
    lessonId: "capacitor",
    title: "Reihen- und Parallelschaltung von Kondensatoren",
    expression:
      "Parallel dazu: C_ges = C₁ + C₂ + …; nacheinander: 1/C_ges = 1/C₁ + 1/C₂ + …",
    legend:
      "Cges: Gesamtkapazität in Farad (F). C₁ und C₂: Kapazitäten der einzelnen Kondensatoren, ebenfalls in Farad (F).",
    conditions:
      "Für ideale lineare Kondensatoren. Parallel ist die Spannung gleich und die Kapazitäten addieren sich. In Reihe sind bei anfangs ungeladenen Kondensatoren die Ladungsbeträge gleich; die Gesamtkapazität ist kleiner als die kleinste Einzelkapazität.",
  },
  {
    lessonId: "capacitor",
    title: "Zeitkonstante der RC-Schaltung",
    expression: "τ = RC; U_C(t) = U₀(1 − e^(−t/τ)); U_C(t) = U_C,0 e^(−t/τ)",
    legend:
      "τ (Tau): Zeitkonstante in Sekunden (s). R: Widerstand in Ohm (Ω). C: Kapazität in Farad (F). U₀: konstante Quellenspannung; UC: Kondensatorspannung, jeweils in Volt (V). t: Zeit seit dem Schalten in Sekunden (s). e: Eulersche Zahl.",
    conditions:
      "Die ansteigende Kurve beschreibt das Laden über einen Widerstand an konstanter Spannung; die fallende Kurve das Entladen. Nach einer Zeitkonstante sind beim Laden etwa 63 % der Endspannung erreicht, nach fünf etwa 99 %. Beim Entladen bezeichnet UC,0 die Anfangsspannung.",
  },
  {
    lessonId: "electromagnetism",
    title: "Kraft auf einen stromdurchflossenen Leiter",
    expression: "F = BIl sin α",
    legend:
      "F: Kraftbetrag in Newton (N). B: magnetische Flussdichte in Tesla (T). I: Stromstärke in Ampere (A). l: Leiterlänge im Feld in Metern (m). α (Alpha): Winkel zwischen technischer Stromrichtung und Magnetfeld.",
    conditions:
      "Der gerade Leiter befindet sich vollständig in einem gleichmäßigen Feld. Maximale Kraft bei 90°, Nullkraft bei 0° und 180°.",
  },
  {
    lessonId: "magnetic-quantities",
    title: "Magnetischer Fluss",
    expression: "Φ = BA cos θ; 1 Wb = 1 T m²",
    legend:
      "Φ (Phi): magnetischer Fluss in Weber (Wb). B: magnetische Flussdichte in Tesla (T). A: betrachtete Fläche in Quadratmetern (m²). θ (Theta): Winkel zwischen dem Feld und der Senkrechten auf der Fläche.",
    conditions:
      "Für ein gleichmäßiges Feld durch eine ebene Fläche. Steht das Feld senkrecht zur Fläche, ist der Flussbetrag maximal; verläuft es parallel zur Fläche, ist der Fluss null. A bezeichnet hier eine Fläche, keine Stromstärke.",
  },
  {
    lessonId: "electromagnetism",
    title: "Elektromagnetische Induktion",
    expression: "ε = −N dΦ/dt; εDurchschnitt = −N ΔΦ/Δt",
    legend:
      "ε (Epsilon): induzierte Spannung in Volt (V). N: Windungszahl ohne Einheit. Φ (Phi): magnetischer Fluss durch eine Windung in Weber (Wb). t: Zeit in Sekunden (s). Δ: Änderung im betrachteten Zeitraum.",
    conditions:
      "Alle Windungen müssen vom gleichen magnetischen Fluss durchsetzt sein. Entscheidend ist dessen Änderung. Das Minuszeichen beschreibt die Lenzsche Regel: Ein entstehender Induktionsstrom wirkt der verursachenden Flussänderung entgegen.",
  },
  {
    lessonId: "magnetic-quantities",
    title: "Magnetische Feldstärke einer langen Spule",
    expression: "H ≈ NI / l",
    legend:
      "H: magnetische Feldstärke in Ampere pro Meter (A/m). N: Windungszahl ohne Einheit. I: Stromstärke in Ampere (A). l: Länge der Spule in Metern (m).",
    conditions:
      "Näherung im Inneren einer langen, gleichmäßig gewickelten Spule, fern von ihren Enden. Mehr Windungen oder mehr Strom erhöhen die Feldstärke. Die Formel gilt nicht unverändert für beliebige Kerne mit Luftspalten.",
  },
  {
    lessonId: "magnetic-quantities",
    title: "Zusammenhang zwischen Flussdichte B und Feldstärke H",
    expression: "B = μ₀μrH; μ₀ ≈ 1,256637 × 10⁻⁶ H/m",
    legend:
      "B: magnetische Flussdichte in Tesla (T). H: magnetische Feldstärke in Ampere pro Meter (A/m), keine Spannung. μ₀: magnetische Feldkonstante in Henry pro Meter (H/m). μr: relative Permeabilität des Materials ohne Einheit.",
    conditions:
      "Für ein lineares Material, dessen Eigenschaften in allen Richtungen gleich sind. Im Vakuum ist die relative Permeabilität 1. Bei ferromagnetischen Materialien kann sie sich unter anderem mit Feldstärke und Sättigung ändern; ein konstanter Wert ist dort nur eine Näherung.",
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
