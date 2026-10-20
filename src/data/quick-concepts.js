export const quickConcepts = [
  {
    id: "charge",
    title: "Elektrische Ladung",
    german: "Elektrische Ladung",
    symbol: "Q",
    unit: "Coulomb (C)",
    short:
      "Elektrische Ladung ist eine Eigenschaft von Teilchen. Sie kann positiv oder negativ sein; das Elektron trägt eine negative Ladung. Q bezeichnet die transportierte Ladungsmenge.",
    analogy:
      "Die übertragene Ladungsmenge kann mit der durch das Rohr fließenden Wassermenge verglichen werden. Ladung hat jedoch zwei Vorzeichen und Wasser spiegelt diese Eigenschaft nicht wider.",
    pitfall:
      "Ladung und Energie sind unterschiedliche Größen. Die Lampe wandelt Energie um, zerstört aber nicht die durch sie hindurchtretenden Elektronen.",
    lessonId: "current",
  },
  {
    id: "current",
    title: "Stromstärke",
    german: "Stromstärke",
    symbol: "I",
    unit: "Ampere (A)",
    short:
      "Die Stromstärke gibt an, wie viel elektrische Ladung pro Sekunde durch einen Leiterquerschnitt fließt. Für Gleichstrom gilt I = Q/t. Ein Ampere entspricht einem Coulomb pro Sekunde.",
    analogy:
      "Wie beim Wasserfluss durch ein Rohr: Je mehr Wasser pro Sekunde hindurchströmt, desto größer ist die Durchflussrate. Im Draht sind bewegliche Elektronen bereits vorhanden; das elektrische Feld setzt sie in eine gerichtete Driftbewegung.",
    pitfall:
      "Der Strom ist nicht gleich der Geschwindigkeit eines Elektrons. Die technische Stromrichtung in einem Metall ist der Elektronendrift entgegengesetzt.",
    lessonId: "current",
  },
  {
    id: "voltage",
    title: "Spannung",
    german: "Elektrische Spannung",
    symbol: "U",
    unit: "Volt (V)",
    short:
      "Die Spannung zwischen zwei Punkten gibt die übertragene Energie pro Ladung an: Bei 5 V werden pro Coulomb Ladung 5 J umgesetzt. U = W/Q.",
    analogy:
      "Spannung lässt sich begrenzt mit einem Druckunterschied vergleichen, der einen Wasserstrom antreiben kann. Sie wird stets zwischen zwei Punkten angegeben; allein eine Spannung garantiert noch keinen Strom.",
    pitfall:
      "An den Klemmen einer unbelasteten Batterie kann Spannung anliegen, obwohl kein Strom fließt. Ein Strom fließt nur in einem geschlossenen leitfähigen Stromkreis.",
    lessonId: "voltage",
  },
  {
    id: "resistance",
    title: "Widerstand",
    german: "Elektrischer Widerstand",
    symbol: "R",
    unit: "Ohm (Ω)",
    short:
      "Der Widerstand gibt an, wie stark das Element den Strom begrenzt. Bei gleicher Spannung fließt weniger Strom durch einen größeren Widerstand. Für ein ohmsches Element ist R = U/I konstant.",
    analogy:
      "Ein schmales, langes Rohr schränkt den Wasserfluss stärker ein als ein breites, kurzes Rohr. Der elektrische Widerstand hängt auch von der Geometrie und zusätzlich vom Material und der Temperatur ab.",
    pitfall:
      "Ein Widerstand wandelt elektrische Energie in Wärme um. Ladung geht hindurch; der Strom nach dem Widerstand in einem Zweig wird nicht kleiner.",
    lessonId: "resistance",
  },
  {
    id: "electric-field",
    title: "Elektrisches Feld",
    german: "Elektrisches Feld",
    symbol: "E",
    unit: "Volt pro Meter (V/m)",
    short:
      "Ein elektrisches Feld wirkt auf Ladungen als Kraft. Seine Intensität E gibt die Kraft pro Einheit positiver Testladung an: E = F/q.",
    analogy:
      "So wie die Neigung den Ball beeinflusst, beeinflusst das Feld die Ladung. Da positive und negative Ladungen jedoch Kräfte in entgegengesetzter Richtung erfahren, ist die Analogie mit einer Steigung unvollständig.",
    pitfall:
      "Das Feld kann stromlos existieren, beispielsweise zwischen geladenen Platten. Kraftlinien zeigen die Richtung der Kraft auf eine positive Ladung an und sind keine materiellen Fäden.",
    lessonId: "field",
  },
  {
    id: "magnetic-field",
    title: "Magnetfeld",
    german: "Magnetisches Feld",
    symbol: "B",
    unit: "Tesla (T)",
    short:
      "Das Magnetfeld steht mit bewegten Ladungen und magnetischen Momenten in Zusammenhang. Es wirkt auf bewegte Ladungen, stromdurchflossene Leiter und Magnete. B bezeichnet die magnetische Flussdichte.",
    analogy:
      "Kleine Kompasspfeile helfen Ihnen, die Richtung des Feldes an verschiedenen Punkten zu erkennen. Sie zeigen die Richtung an, bedeuten aber nicht, dass das Feld aus kleinen Pfeilen besteht.",
    pitfall:
      "Die magnetische Kraft auf eine bewegte Ladung hängt von der Richtung ihrer Geschwindigkeit ab: F = |q|vB sin α. Bei einer exakten Bewegung entlang des Feldes ist sie gleich Null.",
    lessonId: "magnets",
  },
  {
    id: "magnetism",
    title: "Magnetismus",
    german: "Magnetismus",
    symbol: "N / S",
    unit: "Phänomen · hat keine eigene Einheit",
    short:
      "Magnetismus ist ein Phänomen, das mit einem Magnetfeld und den magnetischen Eigenschaften von Materie verbunden ist. Ein Permanentmagnet hat Nord- und Südpole.",
    analogy:
      "In einem Ferromagneten gibt es Bereiche mit konstanten magnetischen Momenten – Domänen. Sie können durch Gruppen gleichgerichteter Pfeile dargestellt werden; Dies ist ein Orientierungsmodell, keine tatsächlichen rotierenden Pfeile.",
    pitfall:
      "Wenn man einen Magneten schneidet, erhält man keine getrennten Nord- und Südpole: Jedes Fragment bildet einen Magneten mit seinen eigenen beiden Polen.",
    lessonId: "magnets",
  },
  {
    id: "power",
    title: "Leistung",
    german: "Elektrische Leistung",
    symbol: "P",
    unit: "Watt (W)",
    short:
      "Die elektrische Leistung gibt an, wie schnell Energie übertragen wird. Ein Watt entspricht einem Joule pro Sekunde. Für Gleichstrom gilt P = U · I.",
    analogy:
      "Zwei identisch aufgebaute Heizgeräte übertragen unterschiedlich viel Energie pro Minute: bei 2 kW doppelt so viel wie bei 1 kW. Dieser Vergleich gilt bei einer konstanten angegebenen Leistung.",
    pitfall:
      "Leistung ist die Geschwindigkeit der Energieübertragung. Um den Energieverbrauch zu ermitteln, müssen Sie die Zeit berücksichtigen: W = P · t bei konstanter Leistung.",
    lessonId: "power",
  },
  {
    id: "energy",
    title: "Energie und Arbeit",
    german: "Elektrische Energie und Arbeit",
    symbol: "W",
    unit: "Joule (J)",
    short:
      "Elektrische Energie gibt an, wie viel Energie der Stromkreis an das Gerät übertragen hat. Bei konstanter Leistung W = P t; Energie wird in Wärme, Licht, Bewegung und andere Formen umgewandelt.",
    analogy:
      "Die Leistung entspricht dem Wasserverbrauch pro Sekunde und die Energie während des Betriebs entspricht dem Endvolumen. Hier wird nur der Zusammenhang zwischen „Geschwindigkeit und kumulierter Summe“ verglichen; Ladung und Energie bleiben unterschiedliche Größen.",
    pitfall:
      "Das Symbol W in der Energieformel ist der Buchstabe der Größe. Das W nach der Zahl, z. B. 60 W, stellt die Leistungseinheit Watt dar. Lesen Sie den Kontext und die Einheiten.",
    lessonId: "energy",
  },
  {
    id: "kilowatt-hour",
    title: "Kilowattstunde",
    german: "Kilowattstunde",
    symbol: "kWh",
    unit: "1 kWh = 3,6 MJ",
    short:
      "Kilowattstunde ist eine Energieeinheit: So viel überträgt ein Gerät mit einer Leistung von 1 kW in 1 Stunde. Beispielsweise sind 2 kW für eine halbe Stunde auch 1 kWh.",
    analogy:
      "Dies ist der Endverbrauch während des Betriebs: So wie Geschwindigkeit multipliziert mit Zeit den Weg ergibt, ergibt Leistung multipliziert mit Zeit Energie bei konstanter Leistung.",
    pitfall:
      "kW – Leistung, kWh – Energie. Eine Kilowattstunde ist nicht gleich einem Kilowatt pro Stunde: kW/h würde die Änderungsrate der Leistung beschreiben.",
    lessonId: "energy",
  },
  {
    id: "capacitance",
    title: "Kapazität",
    german: "Kapazität",
    symbol: "C",
    unit: "Farad (F)",
    short:
      "Die Kapazität beschreibt, wie viel Ladung ein Kondensator pro Volt aufnehmen kann. Das Größenzeichen ist C, die Einheit heißt Farad (F). Achtung: C hinter einer Zahl kann stattdessen Coulomb bedeuten, die Einheit der Ladungsmenge Q.",
    analogy:
      "Eine elastische Membran in einem Rohr kann die beiden Seiten trennen und bei Verformung Energie speichern. Wie das Dielektrikum eines idealen Kondensators lässt es keinen konstanten Fluss durch; Die Analogie ist qualitativ.",
    pitfall:
      "Auf den Platten eines konventionell geladenen Kondensators liegen +Q und −Q. Es speichert die Energie der Ladungstrennung, obwohl die Gesamtladung eines Plattenpaares Null sein kann.",
    lessonId: "capacitor",
  },
  {
    id: "efficiency",
    title: "Wirkungsgrad",
    german: "Wirkungsgrad",
    symbol: "η",
    unit: "% oder Bruch von 0 bis 1",
    short:
      "Der Wirkungsgrad ist das Verhältnis von Nutzenergie zur zugeführten Energie: η = W_nutz/W_zu. Im stationären Betrieb können auch Nutzleistung und aufgenommene Leistung verglichen werden.",
    analogy:
      "Wenn ein Motor 100 J aufnimmt, 80 J in nutzbare mechanische Arbeit umwandelt und 20 J in Wärme verliert, beträgt sein Wirkungsgrad für diesen Zweck 80 %.",
    pitfall:
      "Die Energie des Verlustes verschwindet nicht. Es geht um Formen, die für den gewählten Zweck nicht als nützlich erachtet werden. Der typische Umwandlungswirkungsgrad überschreitet nicht 100 %.",
    lessonId: "efficiency",
  },
];
