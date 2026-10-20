export const quickConcepts = [
  {
    id: "charge",
    title: "Aufladen",
    german: "Elektrische Ladung",
    symbol: "Q",
    unit: "C-Anhänger",
    short:
      "Ladung ist eine elektrische Eigenschaft von Teilchen. Es kann positiv und negativ sein; Das Elektron trägt eine negative Ladung. Q zeigt den übertragenen Ladungsbetrag an.",
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
    unit: "Ein Ampere",
    short:
      "Die Stromstärke gibt an, wie viel Ladung pro Sekunde durch einen Querschnitt fließt. Für Gleichstrom ist I = Q/t. Ein Ampere ist ein Coulomb pro Sekunde.",
    analogy:
      "Wie beim Wasserfluss durch ein Rohr: Mehr Wasser pro Sekunde bedeutet mehr Durchfluss. Der Draht verfügt bereits vor dem Einschalten über bewegliche Elektronen, und das elektrische Feld beginnt, sie zu lenken.",
    pitfall:
      "Der Strom ist nicht gleich der Geschwindigkeit eines Elektrons. Die technische Stromrichtung in einem Metall ist der Elektronendrift entgegengesetzt.",
    lessonId: "current",
  },
  {
    id: "voltage",
    title: "Spannung",
    german: "Elektrische Spannung",
    symbol: "U",
    unit: "V Volt",
    short:
      "Die Spannung zwischen zwei Punkten zeigt die Energie pro Ladungseinheit an. Bei 5 V kann jeder Anhänger 5 J an die Last übertragen. U = W/Q.",
    analogy:
      "Klingt nach einem Druckunterschied, der einen Wasserfluss verursachen kann. Es werden zwei Punkte verglichen; Das Vorhandensein einer Differenz garantiert keinen Fluss, wenn der Pfad geschlossen ist.",
    pitfall:
      "Die Spannung kann beispielsweise bei einer von der Last getrennten Batterie stromlos sein. Strom erfordert auch einen leitenden Pfad.",
    lessonId: "voltage",
  },
  {
    id: "resistance",
    title: "Widerstand",
    german: "Elektrischer Widerstand",
    symbol: "R",
    unit: "Ω Ohm",
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
    unit: "V/m Volt pro Meter",
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
    unit: "T Tesla",
    short:
      "Das Magnetfeld ist mit der Bewegung von Ladungen und magnetischen Momenten verbunden. Es wirkt auf bewegte Ladungen, stromführende Leiter und Magnete. B ist magnetische Induktion.",
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
    title: "Macht",
    german: "Elektrische Leistung",
    symbol: "P",
    unit: "W Watt",
    short:
      "Leistung gibt an, wie schnell Energie übertragen wird. Ein Watt ist ein Joule pro Sekunde. Für den konstanten Modus gilt P = U · I.",
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
    unit: "J Joule",
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
    unit: "F Farad",
    short:
      "Die Kapazität gibt an, wie viel Ladung auf einer Platte des Kondensators für eine bestimmte Spannung zwischen den Platten benötigt wird. Für einen linearen Kondensator ist C = Q/U.",
    analogy:
      "Eine elastische Membran in einem Rohr kann die beiden Seiten trennen und bei Verformung Energie speichern. Wie das Dielektrikum eines idealen Kondensators lässt es keinen konstanten Fluss durch; Die Analogie ist qualitativ.",
    pitfall:
      "Auf den Platten eines konventionell geladenen Kondensators liegen +Q und −Q. Es speichert die Energie der Ladungstrennung, obwohl die Gesamtladung eines Plattenpaares Null sein kann.",
    lessonId: "capacitor",
  },
  {
    id: "efficiency",
    title: "Effizienz",
    german: "Wirkungsgrad",
    symbol: "η",
    unit: "% oder Bruch von 0 bis 1",
    short:
      "Der Wirkungsgrad ist der Anteil der zugeführten Energie, der in die gewünschte Nutzform umgewandelt wird: η = Wpol/Win. Für den stationären Zustand können Nutz- und Aufnahmeleistung verglichen werden.",
    analogy:
      "Wenn ein Motor 100 J aufnimmt, 80 J in nutzbare mechanische Arbeit umwandelt und 20 J in Wärme verliert, beträgt sein Wirkungsgrad für diesen Zweck 80 %.",
    pitfall:
      "Die Energie des Verlustes verschwindet nicht. Es geht um Formen, die für den gewählten Zweck nicht als nützlich erachtet werden. Der typische Umwandlungswirkungsgrad überschreitet nicht 100 %.",
    lessonId: "efficiency",
  },
];
