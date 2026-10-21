/** Original beginner explanations for IT apprentices; numerical examples state their assumptions. */
export const quickConcepts = [
  {
    id: "charge",
    title: "Elektrische Ladung",
    group: "Den Stromkreis verstehen",
    symbol: "Q",
    symbolMeaning:
      "Q bezeichnet eine Ladungsmenge; C hinter einer Zahl ist ihre Einheit Coulomb.",
    unit: "Coulomb (C)",
    question: "Was bewegt sich eigentlich im Kabel?",
    short:
      "In einem Metallkabel gibt es bereits bewegliche Elektronen. Sie tragen negative elektrische Ladung. Das Netzteil liefert also nicht erst die Elektronen, die im Router gebraucht werden.",
    explanation: [
      "Elektrische Ladung ist eine Eigenschaft von Teilchen. Es gibt positive und negative Ladungen; gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an. Für den Strom im Metalldraht sind vor allem die beweglichen Elektronen wichtig. Die positiven Atomrümpfe bleiben im Gitter an ihren Plätzen.",
      "Die Ladungsmenge Q beschreibt, wie viel Ladung du insgesamt betrachtest. Fließt dieselbe Ladungsmenge in kürzerer Zeit durch einen Kabelquerschnitt, ist die Stromstärke größer. Ladung und Stromstärke gehören zusammen, beantworten aber verschiedene Fragen: Wie viel insgesamt? Und wie viel pro Sekunde?",
    ],
    analogy:
      "Denk an das Zählen von Fahrzeugen: 20 Fahrzeuge insgesamt sagen noch nichts darüber, ob sie in einer Minute oder in einer Stunde vorbeigefahren sind. Genauso braucht die Ladungsmenge eine Zeitangabe, wenn du daraus eine Stromstärke bestimmen willst. Elektronen haben zusätzlich eine elektrische Ladung; Autos in diesem Vergleich nicht.",
    example: {
      title: "Eine Messung im virtuellen Kabel",
      given:
        "An einer gedachten Messstelle passieren in 4 s insgesamt 2 C Ladungsbetrag den Leiterquerschnitt.",
      steps: [
        "Lies 2 C als 2 Coulomb: die gesamte vorbeigeflossene Ladungsmenge. Das C bedeutet hier weder Kapazität noch Grad Celsius.",
        "Verteile die 2 Coulomb auf 4 Sekunden: In jeder Sekunde sind es im Mittel 0,5 Coulomb.",
        "0,5 Coulomb pro Sekunde heißen 0,5 A, also 0,5 Ampere. Das ist die mittlere Stromstärke dieser Messung.",
      ],
      result:
        "2 C sind eine Ladungsmenge. Erst zusammen mit den 4 s erhältst du die Stromstärke 0,5 A.",
    },
    pitfall:
      "Ein Router verbraucht elektrische Energie, keine Elektronen. Im unverzweigten Strompfad fließt gleich viel Ladung hinein wie hinaus. Die Ladung wird im Gerät nicht aufgebraucht.",
    check: {
      question:
        "Du kennst nur die Angabe 6 C. Kannst du daraus bereits die Stromstärke bestimmen?",
      options: [
        "Ja, sie beträgt 6 A.",
        "Nein, dafür fehlt die Zeit.",
        "Ja, sie beträgt 6 W.",
      ],
      correct: 1,
      explanation:
        "6 C sagen nur, wie viel Ladung transportiert wurde. Für Ampere brauchst du zusätzlich die Dauer: Ladung pro Sekunde. Watt beschreibt dagegen die Leistung.",
    },
    quantities: ["charge", "current", "time"],
    lessonId: "current",
  },
  {
    id: "current",
    title: "Stromstärke",
    group: "Den Stromkreis verstehen",
    symbol: "I",
    symbolMeaning:
      "I ist das Größenzeichen der Stromstärke; A steht für die Einheit Ampere.",
    unit: "Ampere (A)",
    question: "Was ist Stromstärke, und was bedeutet ein Ampere?",
    short:
      "Elektrischer Strom ist die gerichtete Bewegung elektrischer Ladung. Die Stromstärke beschreibt, wie viel Ladung pro Sekunde an einer Stelle vorbeifließt. Ihre Einheit heißt Ampere. Sie sagt weder die Spannung noch den Energieverbrauch aus.",
    explanation: [
      "1 Ampere bedeutet: In jeder Sekunde passiert eine Ladungsmenge von 1 Coulomb den betrachteten Querschnitt. Eine höhere Stromstärke heißt mehr Ladung pro Sekunde. Sie bedeutet nicht automatisch, dass jedes einzelne Elektron schneller durch das ganze Kabel fliegt.",
      "Im Metalldraht driften Elektronen im äußeren Stromkreis von Minus nach Plus. Die technische Stromrichtung ist historisch andersherum festgelegt: von Plus nach Minus. Schaltpläne und viele Messpfeile verwenden diese technische Richtung. Deshalb musst du auf die Beschriftung eines Pfeils achten.",
    ],
    analogy:
      "Bei einer Netzwerkverbindung sind die maximal möglichen Mbit/s nicht dasselbe wie der aktuelle Datenverkehr. Ähnlich sind die maximal lieferbaren Ampere eines Netzteils kein erzwungener Strom im Gerät. Der Vergleich betrifft nur Grenze und tatsächlichen Bedarf; Datenrate und Stromstärke sind verschiedene Größen.",
    example: {
      title: "Ein Netzteil für den Router auswählen",
      given:
        "Der Router benötigt laut Hersteller geregelte 12 V DC und bis zu 1 A. Zwei geregelte Netzteile bieten 12 V / 0,5 A und 12 V / 3 A. Stecker und Polarität passen.",
      steps: [
        "Die Spannung stimmt bei beiden: 12 V. DC bedeutet Gleichspannung.",
        "Das 0,5-A-Netzteil kann den möglichen Bedarf von 1 A nicht abdecken. Es ist deshalb ungeeignet.",
        "Das 3-A-Netzteil kann genügend Strom liefern. Der Router nimmt dadurch nicht automatisch 3 A auf; sein Bedarf bestimmt die tatsächliche Aufnahme.",
      ],
      result:
        "Das passende geregelte 12-V-/3-A-Netzteil ist geeignet, wenn auch alle übrigen Herstelleranforderungen erfüllt sind.",
    },
    pitfall:
      "Eine Strommessung erfolgt in Reihe im Strompfad. Ein Amperemeter einfach an beide Pole einer Spannungsquelle anzuschließen kann einen Kurzschluss verursachen. Nutze zum Üben den Simulator.",
    check: {
      question:
        "Ein Gerät braucht unter den betrachteten Bedingungen 1 A. Die passende Versorgung kann maximal 3 A liefern. Was folgt daraus?",
      options: [
        "Das Gerät nimmt zwingend 3 A auf.",
        "Der übrige Strom fließt ungenutzt am Gerät vorbei.",
        "Die Versorgung kann den Bedarf decken; 3 A sind keine Verbrauchsvorgabe.",
      ],
      correct: 2,
      explanation:
        "Die Maximalangabe beschreibt die Belastbarkeit der Versorgung. Bei passender geregelter Spannung bestimmt das Gerät seine tatsächliche Stromaufnahme. Die überschüssige Lieferfähigkeit ist kein zusätzlicher Strom.",
    },
    quantities: ["current", "charge", "voltage"],
    lessonId: "current",
  },
  {
    id: "voltage",
    title: "Spannung",
    group: "Den Stromkreis verstehen",
    symbol: "U",
    symbolMeaning:
      "U bezeichnet die Spannung zwischen zwei Punkten; gemessen wird sie in Volt, kurz V.",
    unit: "Volt (V)",
    question: "Was ist Spannung, und wie unterscheidet sie sich vom Strom?",
    short:
      "Spannung beschreibt einen elektrischen Unterschied zwischen zwei Punkten. Anschaulich ist sie der elektrische Antrieb, der in einem geschlossenen leitfähigen Stromkreis einen Strom hervorrufen kann. Spannung wird in Volt gemessen; Stromstärke dagegen in Ampere.",
    explanation: [
      "Genauer beschreibt Spannung, wie viel Energie pro Ladungsmenge zwischen zwei Punkten übertragen werden kann. Bei 5 V entspricht das 5 Joule je Coulomb. Joule ist eine Energieeinheit, Coulomb eine Ladungseinheit. Du brauchst diese Definition nicht für jede Netzteilauswahl auswendig; sie erklärt aber, warum Volt und Ampere nicht dasselbe sind.",
      "Spannung kann auch ohne Strom anliegen, etwa am Ausgang eines unbelasteten Netzteils. Für dauerhaften Gleichstrom braucht es zusätzlich einen geschlossenen leitfähigen Weg. Ein Voltmeter vergleicht deshalb zwei Punkte und wird parallel angeschlossen; es muss nicht wie ein Amperemeter in den Strompfad eingefügt werden.",
    ],
    analogy:
      "Ein Druckunterschied kann Wasser antreiben. Ist das Ventil geschlossen, kann der Druckunterschied bestehen bleiben, obwohl nichts fließt. Ähnlich kann Spannung ohne Strom vorhanden sein. Die Wasseranalogie erklärt diesen Zusammenhang, aber nicht alle Eigenschaften elektrischer Felder.",
    example: {
      title: "12-V-Router oder 19-V-Laptopnetzteil?",
      given:
        "Am Router steht: 12 V DC, maximal 2 A. Am vorhandenen Laptopnetzteil steht: 19 V DC, maximal 3 A.",
      steps: [
        "Vergleiche zuerst die geforderte Ausgangsspannung: 12 V und 19 V stimmen nicht überein.",
        "Die höhere Strombelastbarkeit von 3 A gleicht die falsche Spannung nicht aus.",
        "Wähle eine vom Hersteller geeignete Versorgung: passende geregelte Spannung, Gleich- oder Wechselspannung, Polarität, Stecker und ausreichende Strombelastbarkeit.",
      ],
      result:
        "Das 19-V-Netzteil ist für diesen 12-V-Router ungeeignet. Ein passender Stecker allein reicht nicht.",
    },
    pitfall:
      "USB Power Delivery kann unterstützte Spannungen aushandeln. Das ist ein geregeltes Verfahren zwischen kompatiblen Geräten und kein Grund, beliebig höhere Spannungen anzulegen.",
    check: {
      question:
        "Du misst am unbelasteten Netzteil 12 V. Es ist kein Gerät angeschlossen. Ist das ein Widerspruch?",
      options: [
        "Nein, Spannung kann ohne Laststrom anliegen.",
        "Ja, ohne Strom sind Volt unmöglich.",
        "Ja, das Messgerät müsste 12 A anzeigen.",
      ],
      correct: 0,
      explanation:
        "Die Spannung ist der Unterschied zwischen zwei Punkten. Ein dauerhafter Laststrom braucht zusätzlich den geschlossenen Stromkreis. Das Voltmeter zeigt Volt, nicht Ampere.",
    },
    quantities: ["voltage", "current", "energy", "charge"],
    lessonId: "voltage",
  },
  {
    id: "resistance",
    title: "Widerstand",
    group: "Den Stromkreis verstehen",
    symbol: "R",
    symbolMeaning:
      "R bezeichnet den elektrischen Widerstand; Ω ist der griechische Buchstabe Omega und steht für Ohm.",
    unit: "Ohm (Ω)",
    question: "Was bedeutet elektrischer Widerstand?",
    short:
      "Auch Kabel und Steckkontakte haben Widerstand. Fließt Strom, fällt daran Spannung ab und elektrische Energie wird in Wärme umgewandelt. Am Gerät kann deshalb weniger Spannung ankommen als am Netzteil.",
    explanation: [
      "Widerstand beschreibt den Zusammenhang zwischen Spannung und Strom an einem Bauteil. Bei gleicher Spannung lässt ein größerer ohmscher Widerstand weniger Strom zu. Für einen ohmschen Widerstand bleibt dieses Verhältnis bei gleichbleibender Temperatur annähernd konstant. Komplexe IT-Geräte sind insgesamt keine einfachen festen Widerstände.",
      "Bei einer Leitung spielen Material, Länge, Querschnitt und Temperatur eine Rolle. Eine längere Leitung hat bei sonst gleichen Bedingungen mehr Widerstand; ein größerer Querschnitt verringert ihn. Auch ein schlechter Steckkontakt kann zusätzlichen Widerstand erzeugen. Darum reicht es bei Versorgungsproblemen nicht, nur die Voltzahl am Netzteil zu lesen.",
    ],
    analogy:
      "Eine Engstelle in einem Rohr erschwert den Durchfluss. Bei einer Leitung kommt hinzu, dass die elektrische Energie am Widerstand in Wärme übergeht. Ladung wird dabei nicht vernichtet: Im selben unverzweigten Strompfad ist die Stromstärke vor und nach dem Widerstand gleich.",
    example: {
      title: "Ein Volt bleibt am Kabel",
      given:
        "Vereinfachtes Gleichstrommodell: Das Netzteil liefert 12 V, der Strom beträgt 2 A. Hin- und Rückleitung haben zusammen 0,5 Ω.",
      steps: [
        "Berechne den Spannungsabfall am Kabel: Multipliziere 2 mit 0,5. Das ergibt 1 V.",
        "Ziehe diesen Abfall von der Quellenspannung ab: Von 12 V bleiben am Gerät 11 V.",
        "Die Verlustleistung im Kabel beträgt 2 W: Multipliziere den Spannungsabfall 1 V mit dem Strom 2 A. Diese Leistung wird zu Wärme.",
      ],
      result:
        "Am Gerät liegen im Modell 11 V an; 2 W werden im Kabel umgesetzt. Ob 11 V ausreichen, hängt vom Gerät ab.",
    },
    pitfall:
      "Die 0,5 Ω im Beispiel gehören zum Kabel. Sie sind nicht der Gesamtwiderstand des Geräts. Welche Spannung und welcher Widerstand zusammengehören, muss vor jeder Rechnung klar sein.",
    check: {
      question:
        "Im gleichen Kabel fließt bei unverändertem Widerstand doppelt so viel Strom. Was passiert mit dem Spannungsabfall?",
      options: [
        "Er halbiert sich.",
        "Er verdoppelt sich.",
        "Er bleibt immer null.",
      ],
      correct: 1,
      explanation:
        "Bei festem Leitungswiderstand ist der Spannungsabfall proportional zur Stromstärke. Aus 1 V werden im Modell 2 V. Die Wärmeverluste steigen dabei sogar auf das Vierfache.",
    },
    quantities: ["resistance", "voltage", "current", "power"],
    lessonId: "resistance",
  },
  {
    id: "power",
    title: "Leistung",
    group: "Verbrauch und Versorgung",
    symbol: "P",
    symbolMeaning:
      "P ist das Größenzeichen der Leistung; W hinter einer Zahl heißt Watt. 1000 W sind 1 kW.",
    unit: "Watt (W)",
    question: "Was misst man in Watt?",
    short:
      "Leistung beschreibt, wie schnell Energie übertragen oder umgewandelt wird. Ein Gerät mit 10 W setzt in jeder Sekunde 10 Joule Energie um. Wie viel es über den Tag verbraucht, hängt zusätzlich von seiner Betriebsdauer ab.",
    explanation: [
      "Für eine Gleichstromversorgung kannst du bei den betrachteten Betriebswerten Spannung und Stromstärke multiplizieren, um die elektrische Leistung zu erhalten. Die Größen müssen zum selben Anschluss und Betriebspunkt gehören. Mit 5 V und 2 A ergibt sich beispielsweise eine Leistung von 10 W.",
      "Bei USB-C, PoE oder einem PC-Netzteil ist die Wattangabe oft eine maximale Leistung, keine dauerhafte Aufnahme. Ein kompatibler Ladeanschluss mit 65 W muss nicht ständig 65 W abgeben. Entscheidend sind unter anderem das unterstützte Profil, der aktuelle Gerätebedarf und die Grenzen von Quelle und Kabel.",
    ],
    analogy:
      "Die Leistung ist wie das Tempo beim Füllen eines Speichers, die Energie wie die insgesamt gefüllte Menge. Ein hohes Tempo über eine kurze Zeit kann dieselbe Gesamtmenge ergeben wie ein niedriges Tempo über eine lange Zeit. Der Vergleich trennt Rate und Gesamtmenge; elektrische Energie ist dabei kein materieller Inhalt.",
    example: {
      title: "Zwei USB-Geräte an einem Leistungsbudget",
      given:
        "Im vereinfachten Gleichstrommodell liegen 5 V an. Ein Gerät braucht 2 A, das andere 1 A. Die Versorgung hat ein gemeinsames Budget von 20 W.",
      steps: [
        "Erstes Gerät: Multipliziere 5 mit 2. Das sind 10 W.",
        "Zweites Gerät: Multipliziere 5 mit 1. Das sind 5 W.",
        "Addiere beide Leistungen: 15 W insgesamt. Vom Budget 20 W bleiben rechnerisch 5 W Reserve. Prüfe zusätzlich die Grenzen jedes Ports und die Kompatibilität.",
      ],
      result:
        "Der betrachtete Gesamtbedarf beträgt 15 W. Ein Gesamtbudget ersetzt nicht die Prüfung der einzelnen Anschlüsse.",
    },
    pitfall:
      "Watt und Wattstunden sind verschieden. 10 W nennen eine Leistung; 10 Wh nennen eine Energiemenge. Für Stromkosten brauchst du Energie und einen Preis pro kWh.",
    check: {
      question:
        "Ein Gleichstromgerät nimmt bei 12 V gerade 2 A auf. Welche Leistung nimmt es an diesem Anschluss auf?",
      options: ["6 W", "14 W", "24 W"],
      correct: 2,
      explanation:
        "Multipliziere Spannung und Stromstärke: 12 mal 2 ergibt 24. Die Leistung beträgt 24 W. Ohne Betriebsdauer ist damit noch keine Energiemenge in Wh bekannt.",
    },
    quantities: ["power", "voltage", "current", "kilowattHour"],
    lessonId: "power",
  },
  {
    id: "energy",
    title: "Energie und Arbeit",
    group: "Verbrauch und Versorgung",
    symbol: "E oder W",
    symbolMeaning:
      "E bezeichnet Energie; W wird in manchen Büchern als Größenzeichen für Arbeit verwendet. W hinter einer Zahl bedeutet dagegen Watt, eine Leistungseinheit.",
    unit: "Joule (J), im Alltag auch Wattstunden (Wh)",
    question: "Was ist elektrische Energie, und welche Rolle spielt die Zeit?",
    short:
      "Energie beschreibt die insgesamt übertragene oder umgewandelte Menge. Bei gleichbleibender Leistung gilt: Je länger ein Gerät läuft, desto mehr Energie benötigt es. Die elektrische Arbeit bezeichnet die Übertragung dieser Energie.",
    explanation: [
      "Ein PC wandelt elektrische Energie unter anderem in Wärme, Licht und Bewegung der Lüfter um. Energie verschwindet dabei nicht. Wenn im Alltag vom Energieverbrauch die Rede ist, meint das die aufgenommene und umgewandelte Energiemenge. Die Ladungsträger im Kabel werden dabei nicht verbraucht.",
      "Die SI-Einheit der Energie ist Joule. Für IT-Betrieb und Stromrechnung sind Wattstunden und Kilowattstunden oft übersichtlicher. Bei konstanter Leistung erhältst du die Energie durch Multiplikation mit der Zeit. Schwankt die Leistung, brauchst du einen passenden Mittelwert oder eine Messung über den gesamten Zeitraum.",
    ],
    analogy:
      "Eine Downloadrate und die insgesamt heruntergeladene Datenmenge sind nicht dasselbe. Du brauchst zusätzlich die Dauer, um von einer konstanten Rate auf die Gesamtmenge zu kommen. Ebenso liefert eine Wattangabe allein noch keinen Tagesverbrauch.",
    example: {
      title: "Ein Arbeitsplatz über acht Stunden",
      given:
        "Ein Messgerät ermittelt für PC und Monitor zusammen im Mittel 80 W an der Steckdose. Der Arbeitsplatz läuft 8 h.",
      steps: [
        "Die 80 W sind die mittlere Aufnahme der gesamten gemessenen Kombination, nicht die Nennleistung des PC-Netzteils.",
        "Multipliziere 80 mit 8: Das ergibt 640 Wh.",
        "Teile durch 1000, um Wattstunden in Kilowattstunden umzurechnen: 0,64 kWh. Standby außerhalb der acht Stunden ist hier nicht enthalten.",
      ],
      result:
        "Für diesen Arbeitstag wurden 640 Wh beziehungsweise 0,64 kWh elektrische Energie aufgenommen.",
    },
    pitfall:
      "Ein eingebautes 650-W-Netzteil bedeutet nicht, dass der PC ständig 650 W aufnimmt. Für eine Verbrauchsrechnung brauchst du die tatsächliche mittlere Aufnahme und die Laufzeit.",
    check: {
      question:
        "Ein Gerät nimmt konstant 50 W auf und läuft 4 h. Wie viel Energie ist das?",
      options: ["200 Wh", "200 W", "12,5 Wh"],
      correct: 0,
      explanation:
        "50 mal 4 ergibt 200. Weil du Watt mit Stunden verknüpfst, lautet die Einheit Wh. Das sind 0,2 kWh; 200 W wäre dagegen eine Leistung.",
    },
    quantities: ["energy", "power", "kilowattHour", "time"],
    lessonId: "energy",
  },
  {
    id: "kilowatt-hour",
    title: "Kilowattstunde",
    group: "Verbrauch und Versorgung",
    symbol: "kWh",
    symbolMeaning:
      "kWh ist eine Energieeinheit: k steht für tausend, W für Watt und h für Stunde. Es ist kein eigenes Größenzeichen.",
    unit: "Kilowattstunde (kWh); 1 kWh entspricht 3,6 Millionen Joule",
    question: "Was bedeutet eine Kilowattstunde?",
    short:
      "Du bezahlst beim Arbeitspreis die aufgenommene Energie in Kilowattstunden. 1 kWh entsteht beispielsweise bei einer konstanten Aufnahme von 1 kW über 1 h. Auch 0,1 kW über 10 h ergeben 1 kWh.",
    explanation: [
      "Die Vorsilbe kilo bedeutet tausend. Deshalb sind 1000 W gleich 1 kW und 1000 Wh gleich 1 kWh. Eine Wattstunde entspricht der Energie bei 1 W über 1 h. Das h ist eine Multiplikation mit Zeit, keine Division durch Zeit.",
      "Für eine Kostenabschätzung brauchst du drei Dinge: mittlere Leistung, Betriebsdauer und Arbeitspreis pro kWh. Rechne Watt zuerst in Kilowatt um und Minuten gegebenenfalls in Stunden. Ein monatlicher Grundpreis oder andere feste Kosten sind in einer solchen Verbrauchsrechnung noch nicht enthalten.",
    ],
    analogy:
      "kW und kWh unterscheiden sich ähnlich wie eine Rate und die daraus aufgelaufene Gesamtmenge. Eine Kilowattstunde muss nicht innerhalb genau einer Stunde verbraucht werden: Unterschiedliche Leistungen und Laufzeiten können dieselbe Energiemenge ergeben.",
    example: {
      title: "Was kostet der Router am Tag?",
      given:
        "Der Router nimmt im Mittel 10 W an der Steckdose auf und läuft 24 h. Der angenommene Arbeitspreis beträgt 0,30 € pro kWh.",
      steps: [
        "Teile 10 W durch 1000: Das sind 0,01 kW.",
        "Multipliziere 0,01 mit 24: Der Tagesverbrauch beträgt 0,24 kWh.",
        "Multipliziere 0,24 mit 0,30: Das ergibt 0,072 €, also 7,2 Cent pro Tag. Das ist nur der Energieanteil bei diesem angenommenen Tarif.",
      ],
      result:
        "Der Router benötigt 0,24 kWh pro Tag. Bei 0,30 € pro kWh kostet das 7,2 Cent täglich.",
    },
    pitfall:
      "kWh heißt Kilowattstunde, nicht Kilowatt pro Stunde. kW/h würde beschreiben, wie schnell sich eine Leistung verändert, und gehört nicht in diese Verbrauchsrechnung.",
    check: {
      question: "Welcher Betrieb benötigt bei konstanter Leistung genau 1 kWh?",
      options: ["100 W für 1 h", "100 W für 10 h", "1 kW für 10 h"],
      correct: 1,
      explanation:
        "100 W sind 0,1 kW. Zehn Stunden mal 0,1 kW ergeben 1 kWh. Die anderen beiden Antworten ergeben 0,1 kWh beziehungsweise 10 kWh.",
    },
    quantities: ["kilowattHour", "power", "energy", "time"],
    lessonId: "energy",
  },
  {
    id: "efficiency",
    title: "Wirkungsgrad",
    group: "Verbrauch und Versorgung",
    symbol: "η",
    symbolMeaning:
      "η ist der griechische Buchstabe Eta. Ein Wirkungsgrad kann als Anteil, zum Beispiel 0,8, oder als 80 % angegeben werden.",
    unit: "Dimensionslos; oft in Prozent (%) angegeben",
    question: "Was beschreibt der Wirkungsgrad?",
    short:
      "Ein Netzteil wandelt nicht die gesamte aufgenommene Leistung in nutzbare Ausgangsleistung um. Ein Teil wird hauptsächlich zu Wärme. Der Wirkungsgrad beschreibt den nutzbaren Anteil im betrachteten Betriebspunkt.",
    explanation: [
      "Du vergleichst immer Nutzleistung mit zugeführter Leistung oder Nutzenergie mit zugeführter Energie. 80 % bedeuten: Von 100 zugeführten Anteilen stehen 80 für den gewünschten Ausgang zur Verfügung. Die übrigen 20 sind Verluste für diesen Zweck; die Energie ist nicht verschwunden.",
      "Die Eingangsleistung gehört zur Steckdosenseite, die Ausgangsleistung zu den versorgten Komponenten. Für die Stromkosten ist die Aufnahme an der Steckdose entscheidend. Der Wirkungsgrad hängt unter anderem von Last und Betriebspunkt ab; eine Effizienzangabe ist kein für jede Situation unveränderlicher Wert.",
    ],
    analogy:
      "Stell dir ein Budget von 100 Einheiten vor, von dem 80 Einheiten für den gewünschten Zweck ankommen. Der Anteil beträgt 80 %. Beim Netzteil bestehen die übrigen Anteile nicht aus verlorenen Elektronen, sondern überwiegend aus umgewandelter Wärmeenergie.",
    example: {
      title: "80 W für die Komponenten",
      given:
        "Die PC-Komponenten erhalten konstant 80 W. Das Netzteil hat im betrachteten Betriebspunkt einen Wirkungsgrad von 80 %.",
      steps: [
        "Schreibe 80 % als Anteil 0,8. Gesucht ist die größere Eingangsleistung, nicht die kleinere Ausgangsleistung.",
        "Teile 80 W Ausgangsleistung durch 0,8: Das Netzteil nimmt 100 W auf.",
        "Ziehe die abgegebenen 80 W von den aufgenommenen 100 W ab: 20 W werden als Verlustleistung umgesetzt.",
      ],
      result:
        "100 W Eingang = 80 W nutzbarer Ausgang plus 20 W Verluste im stationären Modell.",
    },
    pitfall:
      "80 % Wirkungsgrad bedeuten nicht 80 % Auslastung eines Netzteils. Wirkungsgrad vergleicht Eingang mit Ausgang; Auslastung vergleicht die aktuelle Leistung mit einer Nenn- oder Maximalleistung.",
    check: {
      question:
        "Ein Netzteil nimmt 100 W auf und gibt 90 W nutzbar ab. Wie hoch ist sein Wirkungsgrad?",
      options: ["10 %", "111 %", "90 %"],
      correct: 2,
      explanation:
        "Vergleiche Ausgang mit Eingang: 90 von 100 sind 90 %. Die Differenz von 10 W ist die Verlustleistung; sie ist nicht der Wirkungsgrad.",
    },
    quantities: ["efficiency", "power", "energy"],
    lessonId: "efficiency",
  },
  {
    id: "electric-field",
    title: "Elektrisches Feld",
    group: "Felder und Bauteile einordnen",
    symbol: "E",
    symbolMeaning:
      "E steht hier für elektrische Feldstärke, nicht für Energie. Die Einheit ist Volt pro Meter (V/m), gleichwertig Newton pro Coulomb (N/C).",
    unit: "Volt pro Meter (V/m)",
    question: "Was ist ein elektrisches Feld?",
    short:
      "Ein elektrisches Feld beschreibt, wie auf elektrische Ladungen an einem Ort eine Kraft wirkt. Es kann auch vorhanden sein, wenn kein dauerhafter Strom fließt. Bei elektrostatischer Entladung, kurz ESD, spielt es eine wichtige Rolle.",
    explanation: [
      "Ladungen beeinflussen andere Ladungen auch ohne direkten Kontakt. Das beschreiben wir mit dem Feld. Positive und negative Ladungen erfahren bei gleichem Feld Kräfte in entgegengesetzte Richtungen. Ein Feldpfeil zeigt vereinbarungsgemäß die Richtung der Kraft auf eine positive Probeladung; ein Elektron wird entgegen dieser Richtung beschleunigt.",
      "Spannung ist ein Unterschied zwischen zwei Punkten; Feldstärke beschreibt die Wirkung am betrachteten Ort. Die Feldstärke hängt auch von der räumlichen Anordnung ab. Für den IT-Alltag ist der wichtige Zusammenhang: Aufgeladene Körper können beim Annähern oder Berühren eine kurze Entladung auslösen und empfindliche Bauteile schädigen, selbst wenn du keinen Funken bemerkst.",
    ],
    analogy:
      "Ein Gefälle ist eine örtliche Eigenschaft, ein Höhenunterschied vergleicht zwei Orte. Ähnlich sind Feldstärke und Spannung verwandt, aber verschieden. Anders als ein Ball kann eine Ladung positiv oder negativ sein; deshalb wirkt die Kraft je nach Ladungsvorzeichen in unterschiedliche Richtungen.",
    example: {
      title: "Arbeitsspeicher am ESD-Arbeitsplatz wechseln",
      given:
        "Du willst ein empfindliches RAM-Modul aus seiner Schutzverpackung nehmen und einbauen.",
      steps: [
        "Ein aufgeladener Körper und das Bauteil können unterschiedliche elektrische Potentiale haben. Beim Kontakt kann ein kurzer Entladestrom entstehen.",
        "Nutze den vorgesehenen ESD-Arbeitsplatz und die dafür festgelegten Maßnahmen zum Potentialausgleich. Beachte die Betriebs- und Herstelleranweisungen.",
        "Fasse das Modul an geeigneten Kanten an und lasse es bis zur Verarbeitung in geeigneter ESD-Verpackung. Ein ausgeschaltetes Gerät allein ist noch kein vollständiger ESD-Schutz.",
      ],
      result:
        "Du vermeidest einen schädlichen Potentialausgleich durch das Bauteil. Du musst dafür keine komplizierte Feldrechnung auswendig kennen.",
    },
    pitfall:
      "Feldlinien sind ein Modell zur Darstellung von Richtung und Stärke, keine sichtbaren Fäden. Eine hohe Spannung ist außerdem keine große Stromstärke; es sind verschiedene Größen.",
    check: {
      question:
        "Zwischen getrennten geladenen Körpern fließt gerade kein dauerhafter Strom. Kann trotzdem ein elektrisches Feld bestehen?",
      options: [
        "Ja, ein Feld braucht keinen dauerhaften Strom.",
        "Nein, Felder bestehen ausschließlich in Kabeln.",
        "Nein, ohne Ampere gibt es auch keine Spannung.",
      ],
      correct: 0,
      explanation:
        "Geladene Körper können ein elektrisches Feld erzeugen, obwohl kein dauerhafter Stromkreis geschlossen ist. Auch ein geladener Kondensator veranschaulicht das.",
    },
    quantities: ["field", "voltage", "charge"],
    lessonId: "field",
  },
  {
    id: "magnetic-field",
    title: "Magnetfeld",
    group: "Felder und Bauteile einordnen",
    symbol: "B",
    symbolMeaning:
      "B bezeichnet die magnetische Flussdichte am Ort, gemessen in Tesla (T). H ist eine andere Feldgröße: magnetische Feldstärke in Ampere pro Meter (A/m).",
    unit: "Tesla (T) für die magnetische Flussdichte B",
    question: "Was ist ein Magnetfeld, und wie entsteht es?",
    short:
      "Beide besitzen im Betrieb ein Magnetfeld. Elektrischer Strom erzeugt ein Magnetfeld; Permanentmagnete können auch ohne äußere Stromversorgung ein Feld besitzen. Magnetfelder wirken unter anderem auf Magnete und stromdurchflossene Leiter.",
    explanation: [
      "Ein Magnetfeld hat an jedem Ort eine Richtung und eine Stärke. Ein kleiner Kompass kann seine Richtung anzeigen. Um einen geraden stromdurchflossenen Draht verlaufen die Feldlinien kreisförmig. Wickelst du den Draht zu einer Spule, können sich die Felder der Windungen im Inneren verstärken.",
      "Im Lüftermotor werden Magnetfelder gezielt genutzt, damit ein Drehmoment entsteht. Die Elektronik schaltet die Ströme in den Wicklungen passend um. Für den Einstieg reicht dieser Zusammenhang. Erst bei Berechnungen musst du genauer zwischen Flussdichte B, Feldstärke H und magnetischem Fluss durch eine Fläche unterscheiden.",
    ],
    analogy:
      "Viele kleine Kompassnadeln würden dir ein Muster von Richtungen zeigen. Diese Nadeln machen das Feld anschaulich, sind aber nicht das Feld selbst. Das Feld gibt es auch dort, wo keine Nadel liegt.",
    example: {
      title: "Eine Angabe im Datenblatt lesen",
      given:
        "An einer festgelegten Messstelle wird eine magnetische Flussdichte von 20 mT angegeben.",
      steps: [
        "mT heißt Millitesla. Milli bedeutet ein Tausendstel; 1000 mT entsprechen 1 T.",
        "20 mT sind deshalb 0,020 T. Die Angabe beschreibt die Flussdichte am angegebenen Ort.",
        "Daraus folgt allein noch kein Drehmoment des Lüfters. Dafür fehlen unter anderem Geometrie, Ströme und deren räumliche Anordnung.",
      ],
      result:
        "Du kannst die Einheit einordnen: 20 mT sind 0,020 Tesla, keine Spannung und keine Leistung.",
    },
    pitfall:
      "B und H sind keine zwei Schreibweisen derselben Größe. Der Zusammenhang hängt vom Material ab. Feldlinien kreuzen sich nicht und bilden geschlossene Verläufe; auch im Inneren eines Magneten setzt sich das Feld fort.",
    check: {
      question: "Was beschreibt die Angabe 20 mT an einer Messstelle?",
      options: [
        "Eine elektrische Spannung.",
        "Die magnetische Flussdichte.",
        "Die Energieaufnahme pro Tag.",
      ],
      correct: 1,
      explanation:
        "mT bedeutet Millitesla und ist eine Einheit der magnetischen Flussdichte B. Spannung wird in Volt und Tagesenergie zum Beispiel in kWh angegeben.",
    },
    quantities: ["fluxDensity", "magneticField", "flux"],
    lessonId: "magnets",
  },
  {
    id: "magnetism",
    title: "Magnetismus",
    group: "Felder und Bauteile einordnen",
    symbol: "Nord / Süd",
    symbolMeaning:
      "Nord und Süd bezeichnen magnetische Pole. Magnetismus ist ein Phänomen und hat keine einzelne eigene Einheit.",
    unit: "Keine eigene Einheit; zugehörige Feldgrößen haben eigene Einheiten",
    question: "Was bedeutet Magnetismus, und was sind magnetische Pole?",
    short:
      "Magnetismus zeigt sich unter anderem daran, dass Magnete Kräfte aufeinander und auf bestimmte Materialien ausüben. Ein gewöhnlicher Permanentmagnet besitzt einen Nord- und einen Südpol. Diese Wirkung wird mithilfe eines Magnetfeldes beschrieben.",
    explanation: [
      "Ein Permanentmagnet besitzt einen Nord- und einen Südpol. Gleichnamige Pole stoßen sich ab, ungleichnamige ziehen sich an. Schneidest du einen gewöhnlichen Magneten durch, entstehen kleinere Magnete mit jeweils beiden Polen, kein isolierter Nord- und Südpol.",
      "Materialien wie Eisen lassen sich stark magnetisieren; dieses Verhalten nennt man ferromagnetisch. Im Material gibt es Bereiche, in denen viele atomare magnetische Eigenschaften ähnlich ausgerichtet sind. Diese Bereiche heißen magnetische Domänen. Ihre Ausrichtung beeinflusst, wie stark das Material insgesamt magnetisiert ist.",
    ],
    analogy:
      "Gruppen von Pfeilen, die in ähnliche Richtungen zeigen, helfen beim Vorstellen ausgerichteter magnetischer Bereiche. Die Pfeile sind nur ein Modell für die Orientierung magnetischer Momente und keine winzigen mechanischen Zeiger im Material.",
    example: {
      title: "Datenträger richtig unterscheiden",
      given:
        "Du dokumentierst einen PC mit einer klassischen Festplatte (HDD) und einem Flash-Laufwerk (SSD) und sollst das Speicherprinzip benennen.",
      steps: [
        "Ordne der HDD magnetische Speicherung auf rotierenden Scheiben zu.",
        "Ordne der SSD elektronische Speicherung in nichtflüchtigen Flash-Zellen zu. Sie benötigt keine magnetischen Scheiben.",
        "Leite daraus keine pauschale Lösch- oder Unempfindlichkeitsgarantie ab. Für Datenlöschung und Umgang gelten geeignete, medienabhängige Verfahren.",
      ],
      result:
        "HDD: magnetisches Speicherprinzip. SSD: elektronisches Speicherprinzip. Das sind zwei unterschiedliche Technologien.",
    },
    pitfall:
      "Ein gewöhnlicher Magnet ist kein verlässliches Verfahren zum sicheren Löschen einer HDD. Bei SSDs passt dieses Löschprinzip schon technisch nicht. Nutze dafür die vorgesehenen Verfahren.",
    check: {
      question: "Welche Aussage beschreibt die Technologien richtig?",
      options: [
        "Beide speichern ausschließlich magnetisch.",
        "Eine SSD speichert auf rotierenden Magnetscheiben.",
        "Eine HDD speichert magnetisch; eine SSD nutzt Flash-Zellen.",
      ],
      correct: 2,
      explanation:
        "Die klassische HDD verwendet magnetische Scheiben und einen Schreib-/Lesekopf. Eine SSD verwendet elektronische Flash-Zellen und hat keine rotierenden Magnetscheiben.",
    },
    quantities: ["fluxDensity"],
    lessonId: "magnets",
  },
  {
    id: "capacitance",
    title: "Kapazität",
    group: "Felder und Bauteile einordnen",
    symbol: "C",
    symbolMeaning:
      "C ist hier das Größenzeichen der Kapazität. Ihre Einheit heißt Farad (F). C hinter einer Ladungsangabe wie 2 C heißt dagegen Coulomb.",
    unit: "Farad (F)",
    question: "Was speichert ein Kondensator, und was bedeutet Kapazität?",
    short:
      "Ein Kondensator speichert Energie in einem elektrischen Feld zwischen getrennten Ladungen. Er kann beispielsweise eine Versorgung kurzzeitig puffern. Seine Kapazität beschreibt, wie viel Ladung pro Volt zwischen den Anschlüssen getrennt werden kann.",
    explanation: [
      "Ein einfacher Kondensator besteht aus zwei leitenden Flächen mit einem isolierenden Material dazwischen. Beim Laden erhält eine Seite einen Elektronenüberschuss, die andere einen entsprechenden Mangel. Die Platten tragen entgegengesetzte Ladungen. Durch den idealen Isolator fließt dabei kein dauerhafter Gleichstrom.",
      "Bei gleicher Spannung kann ein Kondensator mit größerer Kapazität mehr Ladung trennen und mehr Energie speichern. Beim Puffern gibt er Energie an die Schaltung ab; seine Spannung fällt dabei ab. Wie lange das hilft, hängt von Kapazität, Laststrom und zulässigem Spannungsabfall ab. Er ersetzt deshalb nicht beliebig einen Akku.",
    ],
    analogy:
      "Ein kleiner Puffer kann einen kurzen Mehrbedarf abfangen und danach wieder aufgefüllt werden. Dieser Vergleich erklärt die Funktion, aber nicht den Aufbau: Ein Kondensator lagert keine verbrauchten Elektronen ein, sondern speichert Energie durch Ladungstrennung.",
    example: {
      title: "100 µF auf dem Bauteil lesen",
      given:
        "Im idealisierten Modell liegt ein Kondensator mit 100 µF an 12 V.",
      steps: [
        "µF heißt Mikrofarad. Mikro bedeutet ein Millionstel. 100 µF entsprechen 0,0001 F.",
        "Für den Ladungsbetrag auf jeder Platte multiplizierst du 100 Mikrofarad mit 12 Volt: Das ergibt 1200 µC, also 1,2 mC.",
        "Eine Platte trägt +1,2 mC, die andere −1,2 mC. Bei dieser idealen Ladungstrennung ist die Gesamtladung des Plattenpaars null, obwohl Energie gespeichert ist.",
      ],
      result:
        "100 µF beschreibt die Kapazität. 1,2 mC beschreibt bei 12 V den Ladungsbetrag je Platte. Das sind unterschiedliche Größen.",
    },
    pitfall:
      "Verwechsle Kapazität C in Farad nicht mit Ladung Q in Coulomb. Ein abgezogenes Netzteil kann außerdem noch geladene Kondensatoren enthalten; das ist kein Bauteil für unangeleitete Experimente.",
    check: {
      question: "Auf einem Kondensator steht 100 µF. Was ist damit angegeben?",
      options: [
        "Seine Kapazität in Mikrofarad.",
        "Seine Ladung in Coulomb, unabhängig von der Spannung.",
        "Seine dauerhafte Leistung in Watt.",
      ],
      correct: 0,
      explanation:
        "Farad ist die Einheit der Kapazität. Die tatsächlich getrennte Ladung hängt zusätzlich von der Spannung ab. Die Angabe ist weder eine Ladungsmenge noch eine Leistung.",
    },
    quantities: ["capacitance", "charge", "voltage", "energy"],
    lessonId: "capacitor",
  },
];
