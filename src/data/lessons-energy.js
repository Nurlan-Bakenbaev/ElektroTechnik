export const energyLessons = [
  {
    id: "energy",
    number: 6,
    title: "Elektrische Energie & Arbeit",
    german: "Elektrische Energie & Arbeit",
    chapter: "2.8",
    category: "energy",
    duration: 26,
    description:
      "Sie lernen, was ein Stromkreis überträgt, wie man die elektrische Arbeit berechnet und warum die Kilowattstunde eine Energieeinheit und keine Leistungseinheit ist.",
    objectives: [
      "Die Umwandlung elektrischer Energie in Wärme, Bewegung, Licht und chemische Energie erklären.",
      "Die elektrische Arbeit bei Gleichstrom berechnen und zwischen Joule, Wattstunde und Kilowattstunde umrechnen.",
      "Energieverbrauch und Kosten eines Geräts aus Leistung und Betriebszeit bestimmen.",
    ],
    sections: [
      {
        id: "energy-meaning",
        title: "1. Energie geht nicht verloren, sie wird umgewandelt",
        paragraphs: [
          "Energie beschreibt die Fähigkeit eines Systems, Arbeit zu verrichten. In einem Stromkreis hält die Quelle eine Spannung aufrecht und treibt die Ladungsträger an. Im Verbraucher geben die Ladungsträger Energie ab: Die Heizwendel erwärmt sich, der Motor dreht sich, die LED leuchtet. Die Ladungsträger selbst werden dabei nicht verbraucht.",
          "Die Batterie wandelt chemische Energie in elektrische Energie um, der Generator mechanische. Die Quelle liefert die Energie, die Leitung erzeugt keine. In der idealen Bilanz gilt: Die von der Quelle abgegebene Energie ist gleich der Summe aus der Energie der Verbraucher und den Verlusten in Leitungen und Quelle.",
          "Arbeit ist eine Form der Energieübertragung. Bewegt das elektrische Feld eine Ladung, verrichtet es elektrische Arbeit. In einfachen Rechnungen sind „aufgenommene elektrische Energie“ und „elektrische Arbeit“ oft dasselbe. Nutzbar ist davon aber meist nur ein Teil.",
        ],
        callout: {
          type: "insight",
          title: "Der Verbraucher verbraucht Energie, keine Ladung",
          text: "Im stationären Betrieb fließt in einen Zweipol genauso viel Ladung hinein wie heraus. Die Stromstärke bleibt in der Reihenschaltung überall gleich. Nur die Energie der Ladungsträger nimmt ab.",
        },
      },
      {
        id: "energy-voltage-charge",
        title: "2. Von Spannung und Ladung zur Arbeit",
        paragraphs: [
          "Die Spannung gibt die Energie je Ladung an: 1 V entspricht 1 J/C. Fließt eine Ladung von 3 C durch einen Abschnitt mit 12 V, überträgt das Feld 36 J. Je größer Spannung und Ladung, desto mehr Energie wird übertragen.",
          "Bei konstanter Stromstärke fließt in der Zeit t die Ladung Q = I · t. Eingesetzt in A = U · Q ergibt sich A = U · I · t. Dabei gilt: U in Volt, I in Ampere, t in Sekunden, A in Joule. Ändern sich Spannung oder Stromstärke, darf man nicht einfach Mittelwerte einsetzen. Dann addiert man die Energie abschnittsweise oder integriert die Momentanleistung.",
        ],
        formula: {
          expression: "A = U · Q = U · I · t",
          legend:
            "A – elektrische Arbeit, J; U – Gleichspannung, V; Q – Ladung, C; I – Gleichstrom, A; t – Zeit, s.",
          note: "Die Form U · I · t gilt nur für konstantes U und I. Allgemein ist die Energie die Summe aller P · Δt.",
        },
        example: {
          title: "Lampe im Gleichstromkreis",
          given:
            "Eine Lampe liegt an 12 V, die Stromstärke beträgt 0,5 A, die Betriebszeit 10 Minuten. Bestimmen Sie die aufgenommene Energie.",
          steps: [
            "Zeit umrechnen: t = 10 · 60 = 600 s.",
            "Ladung berechnen: Q = I · t = 0,5 · 600 = 300 C.",
            "Arbeit berechnen: A = U · Q = 12 · 300 = 3600 J.",
            "Kontrolle: P = U · I = 6 W; A = P · t = 6 · 600 = 3600 J.",
          ],
          answer: "Die Lampe nimmt 3600 J (3,6 kJ) elektrische Energie auf.",
        },
      },
      {
        id: "energy-units",
        title: "3. Joule, Wattstunde und Kilowattstunde",
        paragraphs: [
          "Die SI-Einheit der Energie ist das Joule. Bei einer Leistung von 1 W wird in 1 s die Energie 1 J umgesetzt: 1 J = 1 W · s. Für Haushaltsgeräte sind Joule zu klein. Dort rechnet man in Wattstunden oder Kilowattstunden.",
          "Eine Wattstunde ist Leistung mal Zeit. Bei 1 W werden in einer Stunde 3600 J umgesetzt, also 1 Wh = 3600 J. Daraus folgt 1 kWh = 1000 W · 3600 s = 3.600.000 J = 3,6 MJ. Die Einheit kWh darf nicht mit kW verwechselt werden.",
          "Wählen Sie zusammenpassende Einheiten: W und h ergeben Wh, kW und h ergeben kWh, W und s ergeben J. Setzen Sie keine Minuten ein und geben das Ergebnis dann in Joule an. Auch die Batteriekapazität in Wh ist eine Energie. Die Kapazität in Ah beschreibt dagegen eine Ladung. Für die Energie braucht man zusätzlich die Spannung.",
        ],
        formula: {
          expression: "1 Wh = 3600 J; 1 kWh = 3,6 · 10⁶ J",
          legend:
            "Wh und kWh sind Energieeinheiten; W und kW sind Leistungseinheiten.",
          note: "kWh in Joule: mit 3.600.000 multiplizieren. Joule in kWh: durch 3.600.000 dividieren.",
        },
        callout: {
          type: "tip",
          title: "Plausibilitätsprüfung",
          text: "Ein Gerät mit 1 kW nimmt in 1 Stunde 1 kWh auf, in einer halben Stunde 0,5 kWh. In zwei Minuten kann es bei gleicher Leistung nicht mehr Energie aufnehmen als in einer Stunde.",
        },
      },
      {
        id: "energy-heat",
        title: "4. Wohin fließt die Energie im Widerstand?",
        paragraphs: [
          "Im Leiter gibt das elektrische Feld Energie an die Ladungsträger ab. Durch Stöße wird sie zu innerer Energie des Leiters. Die Temperatur steigt, und der Leiter gibt Wärme an die Umgebung ab. So arbeiten Heizelemente. In Leitungen sind es unerwünschte Verluste.",
          "Für einen Ohmschen Widerstand bei konstanter Stromstärke gilt das Joulesche Gesetz: Q = I² · R · t. Mit U = I · R lässt sich dieselbe Energie als U² · t / R schreiben. Voraussetzung ist ein konstanter Widerstand. Eine glühende Wendel hat einen deutlich größeren Widerstand als eine kalte.",
          "Achtung bei den Formelzeichen: Q steht sowohl für Ladung als auch für Wärmemenge. Man unterscheidet sie über Index, Zusammenhang und Einheit: Ladung in Coulomb, Wärme in Joule. In einem Motor wird nicht alle Energie zu Wärme, ein Teil wird mechanische Arbeit. Die Formel I² · R · t beschreibt dort nur die Wärmeverluste.",
        ],
        formula: {
          expression: "Qheat = I² R t = U² t / R",
          legend:
            "Qheat – Wärmemenge, J; I – Stromstärke, A; R – Ohmscher Widerstand, Ω; t – Zeit, s.",
          note: "Verdoppelt sich die Stromstärke bei gleichem R und t, wird viermal so viel Wärme frei.",
        },
      },
      {
        id: "energy-bill",
        title: "5. Energieverbrauch und Kosten",
        paragraphs: [
          "Der Elektrizitätszähler summiert die bezogene Wirkenergie. Den Verbrauch eines Zeitraums erhält man aus der Differenz zweier Zählerstände. Bei einem einzelnen Gerät mit konstanter Leistung genügt es, die Leistung in kW mit der Zeit in h zu multiplizieren. Die Kosten sind Verbrauch mal Preis je kWh.",
          "Die Nennleistung ist nicht immer die mittlere Leistung. Der Wasserkocher läuft nur beim Aufheizen. Der Kühlschrank schaltet den Kompressor zyklisch ein. Der Computer verbraucht je nach Last unterschiedlich viel. Sind die Betriebsarten bekannt, berechnet man den Verbrauch für jede einzeln und addiert ihn. Genaue Werte liefert ein Energiemessgerät.",
        ],
        formula: {
          expression: "E = P t; Kosten = E-Tarif",
          legend:
            "Mit P in kW und t in h erhält man die Energie E in kWh. Der Preis muss sich auf 1 kWh beziehen.",
          note: "Für mehrere Zeitabschnitte gilt Etot = P₁t₁ + P₂t₂ + … . Dabei zählt die tatsächliche Betriebszeit jeder Betriebsart.",
        },
        example: {
          title: "Was kostet der Betrieb einer Heizung?",
          given:
            "Eine Heizung nimmt 1,5 kW auf und läuft 40 Minuten ohne Unterbrechung. Der Übungstarif beträgt 0,30 € pro kWh.",
          steps: [
            "Minuten in Stunden umrechnen: t = 40 / 60 = 2/3 h.",
            "Verbrauch: E = 1,5 · 2/3 = 1 kWh.",
            "In Joule: E = 1 · 3 600 000 = 3 600 000 J.",
            "Kosten: 1 · 0,30 = 0,30 €. Der Preis ist ein Beispielwert und kein aktueller Tarif.",
          ],
          answer: "Verbrauch: 1 kWh, Kosten bei diesem Tarif: 0,30 €.",
        },
      },
      {
        id: "energy-balance",
        title: "6. Energiebilanz und Lösungsweg",
        paragraphs: [
          "Legen Sie zuerst die Systemgrenze fest. Beim Elektromotor ist die Eingangsenergie die Energie an den Klemmen, die Nutzenergie die mechanische Arbeit an der Welle. Wicklungserwärmung und Reibung sind Verluste. Beziehen Sie Leitung und Quelle mit ein, kommen deren Verluste hinzu. Benennen Sie daher vor der Rechnung, welche Energie Sie bestimmen.",
          "Schreiben Sie die gegebenen Größen mit Einheiten auf und rechnen Sie in einem einheitlichen System. Prüfen Sie am Ende die Einheit. Liegt das Ergebnis in Joule vor, die Antwort wird aber in kWh verlangt, rechnen Sie erst zum Schluss um. Die Nutzenergie kann nicht größer sein als die aufgenommene Energie. Ein negativer Verlust deutet meist auf vertauschte Größen hin.",
        ],
        callout: {
          type: "insight",
          title: "Energie und Leistung beantworten verschiedene Fragen",
          text: "Die Energie fragt: „Wie viel wird insgesamt übertragen?“ Die Leistung fragt: „Wie schnell wird übertragen?“ Ein 2-kW-Gerät in 15 Minuten und ein 1-kW-Gerät in 30 Minuten nehmen gleich viel Energie auf: 0,5 kWh.",
        },
      },
    ],
    terms: [
      {
        term: "Elektrische Energie",
        german: "Elektrische Energie",
        symbol: "E",
        unit: "J, Wh, kWh",
        definition:
          "Energie, die elektrisch übertragen und in andere Energieformen umgewandelt wird.",
      },
      {
        term: "Elektrische Arbeit",
        german: "Elektrische Arbeit",
        symbol: "A, W",
        unit: "J",
        definition:
          "Energie, die übertragen wird, wenn sich eine Ladung im elektrischen Feld bewegt. In deutschen Formeln steht für die Arbeit oft W.",
      },
      {
        term: "Wärmemenge",
        german: "Wärmemenge",
        symbol: "Qheat",
        unit: "J",
        definition:
          "Als Wärme übertragene Energie. Beim Widerstand mit konstanter Stromstärke gilt I² · R · t.",
      },
      {
        term: "Kilowattstunde",
        german: "Kilowattstunde",
        symbol: "kWh",
        unit: "3,6 MJ",
        definition:
          "Energie, die ein Gerät mit 1 kW Leistung in einer Stunde aufnimmt.",
      },
      {
        term: "Joulesches Gesetz",
        german: "Joulesches Gesetz",
        symbol: "Qheat = I²Rt",
        unit: "J",
        definition:
          "Zusammenhang zwischen der im Widerstand frei werdenden Wärme, Stromstärke, Widerstand und Zeit.",
      },
      {
        term: "Elektrizitätszähler",
        german: "Elektrizitätszähler",
        symbol: "E",
        unit: "kWh",
        definition:
          "Gerät, das die übertragene elektrische Energie aufsummiert.",
      },
    ],
    summary: [
      "In einem Stromkreis wird Energie übertragen. Der Verbraucher verbraucht keine Ladung.",
      "Bei konstanter Spannung und Stromstärke gilt A = U · I · t. Mit t in Sekunden erhält man Joule.",
      "1 Wh = 3600 J und 1 kWh = 3.600.000 J.",
      "Die Wärme im Widerstand beträgt bei konstantem I und R: I²Rt.",
      "Der Energieverbrauch hängt von Leistung und Betriebszeit ab, die Kosten zusätzlich vom Tarif.",
      "Watt ist eine Leistungseinheit, Wattstunde eine Energieeinheit.",
    ],
    quiz: [
      {
        id: "energy-1",
        type: "choice",
        question:
          "Was geschieht mit der Ladung, die im stationären Betrieb durch die Lampe fließt?",
        options: [
          "Sie wird vollständig in Licht umgewandelt.",
          "Sie wird entsprechend der Leistung verbraucht.",
          "Sie tritt in gleicher Menge wieder aus und gibt dabei einen Teil ihrer Energie ab.",
          "Sie sammelt sich unbegrenzt in der Lampe an.",
        ],
        answer: 2,
        explanation:
          "Die Ladung bleibt erhalten. In der Reihenschaltung ist die Stromstärke am Eingang und Ausgang der Lampe gleich. Die Lampe nimmt elektrische Energie auf.",
      },
      {
        id: "energy-2",
        type: "numeric",
        question:
          "U = 24 V und I = 2 A werden für 30 Sekunden konstant gehalten. Welche Arbeit leistet der Strom in Joule?",
        answer: 1440,
        unit: "J",
        tolerance: 0.5,
        explanation:
          "A = U · I · t = 24 · 2 · 30 = 1440 J. Die Zeit liegt bereits in Sekunden vor.",
      },
      {
        id: "energy-3",
        type: "choice",
        question: "Welche Angabe ist richtig?",
        options: [
          "1 kWh = 1000 J",
          "1 kWh = 3600 J",
          "1 kWh = 3.600.000 J",
          "1 kWh = 3.600.000 W",
        ],
        answer: 2,
        explanation:
          "1 kWh = 1000 W · 3600 s = 3.600.000 J. Leistung und Energie haben verschiedene Einheiten.",
      },
      {
        id: "energy-4",
        type: "numeric",
        question:
          "Ein Gerät nimmt 2,5 Stunden lang konstant 0,8 kW auf. Wie groß ist die aufgenommene Energie in kWh?",
        answer: 2,
        unit: "kWh",
        tolerance: 0.01,
        explanation:
          "E = P · t = 0,8 · 2,5 = 2 kWh. Eine Zeitumrechnung ist nicht nötig, die Zeit ist schon in Stunden angegeben.",
      },
      {
        id: "energy-5",
        type: "choice",
        question:
          "Die Stromstärke durch einen Widerstand wird verdoppelt. R und Zeit bleiben gleich. Wie ändert sich die Wärme?",
        options: [
          "Sie verdoppelt sich.",
          "Sie vervierfacht sich.",
          "Sie halbiert sich.",
          "Sie bleibt gleich.",
        ],
        answer: 1,
        explanation:
          "Nach dem Jouleschen Gesetz gilt Q = I² · R · t. Eine doppelte Stromstärke ergibt den Faktor 2² = 4.",
      },
    ],
  },
  {
    id: "power",
    number: 7,
    title: "Elektrische Leistung",
    german: "Elektrische Leistung",
    chapter: "2.9",
    category: "energy",
    duration: 24,
    description:
      "Sie lernen, Leistung aus Spannung und Stromstärke zu berechnen, Nennwerte zu lesen und schnellen Energieumsatz von großen Energiespeichern zu unterscheiden.",
    objectives: [
      "Leistung als Energie pro Zeit erklären und P = A/t anwenden.",
      "Die Formeln P = U · I, P = I² · R und P = U²/R passend zur Aufgabe auswählen.",
      "Die Leistung einer Schaltung berechnen und zwischen Nenn-, Aufnahme- und Abgabeleistung unterscheiden.",
    ],
    sections: [
      {
        id: "power-rate",
        title: "1. Leistung: Energie pro Zeit",
        paragraphs: [
          "Zwei Heizgeräte können dem Wasser dieselbe Energie zuführen, aber in unterschiedlicher Zeit. Das schnellere hat die größere Leistung. Die Leistung gibt an, wie schnell Energie übertragen oder umgewandelt wird. Die mittlere Leistung im Zeitraum t ist P = A/t. Ein Watt entspricht einem Joule pro Sekunde.",
          "Die Energie summiert sich im Betrieb auf. Die Leistung beschreibt den momentanen Zustand oder den Mittelwert. Ein Akku mit 100 Wh versorgt eine ideale Last von 10 W etwa 10 Stunden lang, eine Last von 50 W etwa 2 Stunden. In der Praxis spielen auch Wandlerverluste und die nutzbare Kapazität eine Rolle.",
        ],
        formula: {
          expression: "P=A/t; 1 W = 1 J/s",
          legend:
            "P – mittlere Leistung, W; A – übertragene Energie, J; t – Zeit, s.",
          note: "Bei konstanter Leistung gilt A = P · t. Bei veränderlicher Leistung ist die Energie die Fläche unter der Kurve P(t).",
        },
        callout: {
          type: "tip",
          title: "Ähnliche Formelzeichen nicht verwechseln",
          text: "In deutschen Formeln kann W für die Arbeit stehen. Das W hinter einer Zahl ist dagegen die Einheit Watt. Die Bedeutung ergibt sich aus Zusammenhang und Einheit: Arbeit in J, Leistung in W.",
        },
      },
      {
        id: "power-ui",
        title: "2. Warum ist die elektrische Leistung P = U · I?",
        paragraphs: [
          "Die Spannung U gibt die Energie je Coulomb an, die Stromstärke I die Ladung je Sekunde. Das Produkt ergibt Energie pro Sekunde: (J/C) · (C/s) = J/s. Bei konstanter Spannung und Stromstärke ist die Leistung eines Verbrauchers daher P = U · I.",
          "Diese Formel liefert die gesamte elektrische Leistung am Eingang des Geräts. Wie viel davon als Bewegung oder Licht nutzbar ist, sagt sie nicht. Ein Motor mit 12 V und 3 A nimmt 36 W auf. Seine mechanische Leistung an der Welle ist wegen Wärme und Reibung kleiner.",
          "Bei Wechselstrom ist die Momentanleistung p = u(t) · i(t). Das Produkt der Effektivwerte ergibt dort die Scheinleistung in VA. Die Wirkleistung hängt zusätzlich vom Leistungsfaktor ab. Hier gilt P = U · I nur für Gleichstrom oder für rein ohmsche Last mit Effektivwerten.",
        ],
        formula: {
          expression: "P = U · I; I = P / U; U = P / I",
          legend:
            "P – elektrische Leistung, W; U – Spannung am Verbraucher, V; I – Stromstärke durch den Verbraucher, A.",
          note: "U und I müssen zum selben Verbraucher und zur selben Betriebsart gehören.",
        },
        example: {
          title: "Leistung eines LED-Moduls",
          given:
            "Ein LED-Modul mit Treiber liegt an 24 V Gleichspannung und nimmt 0,75 A auf. Bestimmen Sie die Aufnahmeleistung und die Energie in 2 Stunden.",
          steps: [
            "Aufnahmeleistung: P = U · I = 24 · 0,75 = 18 W.",
            "Energie in 2 Stunden: E = P · t = 18 · 2 = 36 Wh.",
            "In kWh: 36 / 1000 = 0,036 kWh.",
            "Die 18 W sind nicht die Lichtleistung. Ein Teil der Energie wird als Wärme frei.",
          ],
          answer:
            "Aufnahmeleistung: 18 W, Energie in 2 Stunden: 36 Wh bzw. 0,036 kWh.",
        },
      },
      {
        id: "power-resistance",
        title: "3. Leistung und Ohmscher Widerstand",
        paragraphs: [
          "Für einen Abschnitt mit Ohmschem Verhalten lässt sich U = I · R in P = U · I einsetzen. Es folgt P = I² · R. Mit I = U/R erhält man P = U²/R. Das sind drei Schreibweisen desselben Zusammenhangs. Man wählt die, für die die Größen bekannt sind.",
          "Scheinbar widersprüchlich: In einer Formel wächst die Leistung mit dem Widerstand, in der anderen sinkt sie. Es gibt keinen Widerspruch. P = I² · R vergleicht Fälle mit gleicher Stromstärke, P = U²/R Fälle mit gleicher Spannung. An einer idealen Spannungsquelle sinken bei größerem Widerstand Stromstärke und Leistung.",
          "Widerstandswert und zulässige Verlustleistung sind verschiedene Kenngrößen. Zwei Widerstände mit 100 Ω können 0,25 W oder 2 W vertragen. Bei gleicher Spannung setzen beide gleich viel Leistung um, der kleinere kann aber überhitzen. Dabei zählen auch Kühlung und Temperaturgrenzen aus dem Datenblatt.",
        ],
        formula: {
          expression: "P = I² · R = U² / R",
          legend:
            "R – Ohmscher Widerstand, Ω; I – Stromstärke durch den Widerstand, A; U – Spannung am Widerstand, V.",
          note: "Verdoppelt sich die Spannung an einem konstanten Widerstand, vervierfacht sich die Leistung.",
        },
        example: {
          title: "Widerstand nach Leistung auswählen",
          given:
            "Ein Widerstand mit 100 Ω wird an 10 V Gleichspannung angeschlossen. Ist ein Widerstand mit 0,25 W zulässig?",
          steps: [
            "Stromstärke: I = U/R = 10/100 = 0,1 A.",
            "Leistung: P = U²/R = 10²/100 = 1 W.",
            "Kontrolle: U · I = 10 · 0,1 = 1 W.",
            "1 W ist viermal so viel wie 0,25 W. Nötig ist ein Widerstand mit passender Nennleistung und Reserve, z. B. 2 W.",
          ],
          answer:
            "Leistung: 1 W. Ein Widerstand mit 0,25 W ist hierfür nicht geeignet.",
        },
      },
      {
        id: "power-rating",
        title: "4. Was bedeutet die Leistungsangabe auf dem Typenschild?",
        paragraphs: [
          "Die Nennleistung gilt für bestimmte Betriebsbedingungen. „230 V, 2000 W“ bei einem Heizgerät heißt: 2000 W bei Nennspannung und eingestellter Betriebsart. Ändert sich die Spannung, ändert sich die Leistung. Bei konstantem Widerstand gilt näherungsweise P = U²/R.",
          "Ein Netzteil mit „12 V, 5 A“ kann unter den Herstellerbedingungen bis zu 60 W abgeben. Es zwingt der Last aber keine 5 A auf. Die Stromstärke bestimmt die angeschlossene Last. Die Aufnahme aus dem Netz ist um die Verluste größer als die Abgabeleistung. Auf dem Typenschild eines Motors steht oft die mechanische Leistung. Lesen Sie deshalb die Bezeichnungen genau.",
          "Auch der Bereitschaftsbetrieb verbraucht Energie. Die Leistung ist klein, aber die Zeit lang: 5 W über 24 Stunden ergeben 120 Wh. Das Gerät mit der größten Wattzahl hat daher nicht immer den größten Monatsverbrauch.",
        ],
        callout: {
          type: "insight",
          title: "Höchstleistung und tatsächlicher Verbrauch",
          text: "Für die Energie braucht man die tatsächliche Betriebsart. Für die Frage, ob eine Last zulässig ist, braucht man die Grenzwerte von Quelle, Leitung und Verbraucher.",
        },
      },
      {
        id: "power-total",
        title: "5. Mehrere Verbraucher: Leistungen addieren",
        paragraphs: [
          "Die Leistungen einzelner Verbraucher addieren sich. Liegen zwei Lasten mit 12 W und eine mit 24 W parallel an 12 V, beträgt die Gesamtleistung 48 W. Der Quellenstrom ist 48/12 = 4 A. Die Zweigströme addieren sich, die Spannung ist an allen Zweigen gleich.",
          "In der Reihenschaltung ist die Stromstärke gleich. Die Leistung verteilt sich wie I² · R: Der größere Widerstand nimmt mehr Leistung auf. In der Parallelschaltung ist die Spannung gleich, die Leistung ist dort umgekehrt proportional zum Widerstand. Klären Sie daher vor jedem Vergleich die Schaltungsart.",
          "In einer realen Anlage prüft man die zulässigen Ströme und Leistungen. Die bloße Summe der Wattangaben ersetzt nicht die Auslegung von Leitung und Schutzeinrichtung, besonders bei Einschaltströmen und Wechselstrom. Für Übungsversuche verwendet man eine sichere Niederspannungsquelle mit Strombegrenzung.",
        ],
        formula: {
          expression: "Ptotal = P₁ + P₂ + …; Itot = Ptot / U",
          legend:
            "Die letzte Formel gilt für die Gesamtlast an einer Gleichspannungsquelle mit der Spannung U.",
          note: "Die Aufnahmeleistung des Systems umfasst die Leistung aller Verbraucher und die Verluste zwischen Quelle und Verbrauchern.",
        },
      },
      {
        id: "power-measure",
        title: "6. Leistung messen und das Ergebnis prüfen",
        paragraphs: [
          "Im Gleichstromkreis misst man die Spannung am Verbraucher und die Stromstärke durch ihn und multipliziert beide. Das Voltmeter liegt parallel zum Verbraucher, das Amperemeter in Reihe. Schließen Sie das Amperemeter nie direkt an die Quellenklemmen an. Sein kleiner Innenwiderstand führt zum Kurzschluss.",
          "Alternativ misst man die Energie in einer bekannten Zeit und berechnet die mittlere Leistung Pav = ΔE/Δt. Zeigt der Zähler in 2 Stunden 0,6 kWh, beträgt die mittlere Leistung 0,3 kW. Das Gerät kann in dieser Zeit ein- und ausgeschaltet worden sein. Dieser Mittelwert ist nicht die Leistung im eingeschalteten Zustand.",
        ],
        callout: {
          type: "tip",
          title: "Schnelle Einheitenprüfung",
          text: "J/s ergibt Watt, kWh/h ergibt Kilowatt. Bleibt nach der Leistungsrechnung die Einheit „Stunde“ übrig, haben Sie vermutlich die Energie nicht durch die Zeit geteilt.",
        },
      },
    ],
    terms: [
      {
        term: "Leistung",
        german: "Leistung",
        symbol: "P",
        unit: "W",
        definition:
          "Geschwindigkeit der Energieübertragung oder -umwandlung. Die mittlere Leistung ist Energie geteilt durch Zeit.",
      },
      {
        term: "Watt",
        german: "Watt",
        symbol: "W, W",
        unit: "J/s",
        definition:
          "Einheit der Leistung: 1 W entspricht 1 J Energie pro Sekunde.",
      },
      {
        term: "Nennleistung",
        german: "Nennleistung",
        symbol: "Pₙ",
        unit: "W",
        definition:
          "Vom Hersteller angegebene Leistung unter den festgelegten Nennbedingungen.",
      },
      {
        term: "Aufnahmeleistung",
        german: "Aufnahmeleistung",
        symbol: "P_zu",
        unit: "W",
        definition: "Leistung, die das System aus der Quelle aufnimmt.",
      },
      {
        term: "Abgabeleistung",
        german: "Abgabeleistung",
        symbol: "Schmollmund",
        unit: "W",
        definition:
          "Vom System abgegebene Leistung, z. B. mechanische Leistung an der Welle.",
      },
      {
        term: "Verlustleistung",
        german: "Verlustleistung",
        symbol: "Psweat",
        unit: "W",
        definition:
          "Teil der Aufnahmeleistung, der nicht in die vorgesehene Nutzleistung umgewandelt wird.",
      },
    ],
    summary: [
      "Leistung beschreibt, wie schnell Energie übertragen wird: P = A/t, 1 W = 1 J/s.",
      "Bei Gleichstrom gilt für einen Verbraucher P = U · I.",
      "Für den Ohmschen Widerstand gelten zusätzlich P = I²R und P = U²/R.",
      "Beim Vergleich von Widerständen klären Sie, ob Stromstärke oder Spannung konstant ist.",
      "Nennleistung, zulässige Leistung und tatsächliche Leistung gelten für unterschiedliche Bedingungen.",
      "Die Energie ist konstante Leistung mal Zeit. Die Leistungen mehrerer Verbraucher werden addiert.",
    ],
    quiz: [
      {
        id: "power-1",
        type: "choice",
        question: "Was bedeutet eine Leistung von 20 W?",
        options: [
          "Das Gerät nimmt in diesem Betrieb 20 J Energie pro Sekunde auf.",
          "Das Gerät nimmt 20 J pro Stunde auf.",
          "Das Gerät speichert 20 Wh.",
          "Durch das Gerät muss eine Stromstärke von 20 A fließen.",
        ],
        answer: 0,
        explanation:
          "1 W = 1 J/s. 20 W bedeuten also eine Energieübertragung von 20 J pro Sekunde.",
      },
      {
        id: "power-2",
        type: "numeric",
        question:
          "Bei einer konstanten Spannung von 12 V beträgt die Stromstärke der Last 2,5 A. Bestimmen Sie die Aufnahmeleistung.",
        answer: 30,
        unit: "W",
        tolerance: 0.1,
        explanation: "P = U · I = 12 · 2,5 = 30 W.",
      },
      {
        id: "power-3",
        type: "choice",
        question:
          "Die Spannung an einem konstanten Widerstand wird verdoppelt. Wie ändert sich die Leistung?",
        options: [
          "Sie halbiert sich.",
          "Sie verdoppelt sich.",
          "Sie vervierfacht sich.",
          "Sie bleibt gleich.",
        ],
        answer: 2,
        explanation:
          "Bei konstantem R gilt P = U²/R. Verdoppelt man U, vervierfacht sich U².",
      },
      {
        id: "power-4",
        type: "numeric",
        question:
          "Ein Widerstand mit 20 Ω liegt an 10 V Gleichspannung. Welche Leistung setzt er um?",
        answer: 5,
        unit: "W",
        tolerance: 0.01,
        explanation:
          "P = U²/R = 10²/20 = 5 W. Kontrolle: I = 0,5 A, U · I = 5 W.",
      },
      {
        id: "power-5",
        type: "choice",
        question:
          "Ein Netzteil mit 12 V und 5 A versorgt eine 12-V-Last, die 1 A aufnimmt. Wie groß ist die Abgabeleistung?",
        options: [
          "60 W, weil das auf dem Netzteil steht",
          "12 W, weil P = 12 · 1",
          "5 W, weil die Stromstärke des Netzteils 5 A beträgt",
          "Sie ist zwangsläufig gleich der Leistung aus der Steckdose",
        ],
        answer: 1,
        explanation:
          "Der zulässige Ausgangsstrom beträgt 5 A, die tatsächliche Stromstärke 1 A. Die Abgabeleistung ist 12 W. Die Aufnahme aus dem Netz enthält zusätzlich die Verluste.",
      },
    ],
  },
  {
    id: "efficiency",
    number: 8,
    title: "Wirkungsgrad",
    german: "Wirkungsgrad",
    chapter: "2.10",
    category: "energy",
    duration: 23,
    description:
      "Sie verfolgen den Weg der Energie von der Aufnahme bis zum Nutzen, berechnen Verluste und bestimmen den Gesamtwirkungsgrad mehrerer Umwandlungsstufen.",
    objectives: [
      "Die Systemgrenze festlegen und zwischen aufgenommener, nutzbarer und verlorener Energie unterscheiden.",
      "Den Wirkungsgrad als Anteil und in Prozent aus Energie oder Leistung berechnen.",
      "Aufnahmeleistung, Verluste und Gesamtwirkungsgrad einer Kette von Wandlern bestimmen.",
    ],
    sections: [
      {
        id: "efficiency-meaning",
        title: "1. Der Nutzen hängt von der Aufgabe ab",
        paragraphs: [
          "Dieselbe Energieform kann bei einem Gerät nützlich und bei einem anderen ein Verlust sein. Die Wärme der Heizwendel ist der Zweck einer Heizung. Die Erwärmung der Motorwicklung mindert dagegen die mechanische Nutzenergie. Vor der Berechnung des Wirkungsgrads legt man deshalb fest, welche Aufgabe das System erfüllen soll.",
          "Der Wirkungsgrad gibt an, welcher Anteil der aufgenommenen Energie genutzt wird. Beim Motor vergleicht man die mechanische Arbeit an der Welle mit der elektrischen Energie am Eingang. Beim Ladegerät vergleicht man die an die Batterie abgegebene Energie mit der aus dem Netz. Interessiert die Energie, die die Batterie später zurückgibt, muss man die Bilanzgrenze erweitern.",
          "Verluste bedeuten nicht, dass Energie verschwindet. Die Energie bleibt erhalten, geht aber teilweise in Formen über, die für den Zweck nicht nützlich sind: Wärme an die Umgebung, Reibung, Schall, Streulicht. Weniger Verluste liefern dasselbe Ergebnis mit weniger aufgenommener Energie.",
        ],
        callout: {
          type: "insight",
          title: "Zuerst die Systemgrenze festlegen",
          text: "Geben Sie Aufnahme, Nutzen und Verluste für dasselbe System an. Man darf nicht die Aufnahmeleistung nur des Motors mit der Nutzleistung der gesamten Anlage vergleichen.",
        },
      },
      {
        id: "efficiency-formula",
        title: "2. Wirkungsgrad als Anteil und in Prozent",
        paragraphs: [
          "Der Wirkungsgrad wird mit dem griechischen Buchstaben η (eta) bezeichnet. Er ist das Verhältnis von Nutzenergie zu aufgenommener Energie: η = E_nutz/E_zu. Nimmt ein Gerät 100 J auf und gibt 80 J nutzbar ab, ist η = 0,8 = 80 %. Das Verhältnis ist dimensionslos.",
          "Im stationären Betrieb sind die Energien gleich Leistung mal Zeit. Dann gilt η = P_nutz/P_zu. Beim Anlaufen, Beschleunigen oder Speichern beschreibt das Verhältnis der Momentanleistungen nicht den ganzen Vorgang. Dann muss man die Änderung des Energievorrats berücksichtigen und die Energien eines ganzen Zyklus vergleichen.",
          "Für einen Wandler ohne zusätzliche Energiequelle liegt η zwischen 0 und 1. Ein ideales Gerät hat in Übungsaufgaben 100 %, reale Systeme haben Verluste. In Formeln setzt man 85 % als 0,85 ein, nicht als 85.",
        ],
        formula: {
          expression: "η = E_nutz / Ein; η = P_nutz / P_zu; η% = η 100%",
          legend:
            "E_nutz und P_nutz – Nutzenergie und Nutzleistung; E_zu und P_zu – Energie und Leistung am Eingang.",
          note: "Vergleichen Sie gleiche Zeitabschnitte und dieselbe Systemgrenze. Zähler und Nenner müssen dieselbe Einheit haben.",
        },
        example: {
          title: "Wirkungsgrad eines Elektromotors",
          given:
            "Ein Motor im Dauerbetrieb nimmt 1200 W elektrische Leistung auf und gibt 960 W an der Welle ab.",
          steps: [
            "Nutzleistung: mechanische Leistung an der Welle P_nutz = 960 W.",
            "Aufnahmeleistung: P_zu = 1200 W.",
            "Wirkungsgrad als Anteil: η = 960/1200 = 0,8.",
            "Wirkungsgrad in Prozent: 0,8 · 100 % = 80 %.",
            "Verluste: P_Verlust = 1200 − 960 = 240 W.",
          ],
          answer: "Wirkungsgrad: 80 %, Verlustleistung: 240 W.",
        },
      },
      {
        id: "efficiency-balance",
        title: "3. Aufnahme, Nutzen und Verluste bestimmen",
        paragraphs: [
          "Kann man die Speicherung von Energie vernachlässigen, gilt die Bilanz E_zu = E_nutz + E_Verlust. Entsprechend gilt im stationären Betrieb P_zu = P_nutz + P_Verlust. Der Verlustanteil ist 1 − η. Bei 80 % Wirkungsgrad sind 80 % der Aufnahme nutzbar und 20 % gehen verloren.",
          "Ist die gewünschte Nutzleistung bekannt, erhält man die Aufnahme durch Division: P_zu = P_nutz/η. Die Zahl wird größer, weil η kleiner als 1 ist. Das ist physikalisch richtig: Die Quelle muss mehr liefern, als nutzbar ist. Ist die Aufnahme bekannt, gilt P_nutz = η · P_zu.",
          "Verluste dürfen nicht als Prozentsatz der Nutzleistung berechnet werden, wenn sich η auf die Aufnahme bezieht. Beispiel: Bei P_nutz = 800 W und η = 80 % ist die Aufnahme 1000 W und der Verlust 200 W. 20 % von 800 W wären 160 W und passen nicht zum Wirkungsgrad.",
        ],
        formula: {
          expression:
            "P_nutz = η · P_zu; P_zu = P_nutz / η; P_Verlust = P_zu · (1 − η)",
          legend:
            "η wird als Anteil eingesetzt: 75 % = 0,75. Dieselben Umformungen gelten für Energien.",
          note: "Die Bilanz ohne Speicherterm gilt im stationären Betrieb oder für einen vollständigen Zyklus mit gleichem Energievorrat am Anfang und Ende.",
        },
      },
      {
        id: "efficiency-stages",
        title: "4. Hintereinanderliegende Umwandlungsstufen",
        paragraphs: [
          "In realen Geräten durchläuft die Energie oft mehrere Stufen: Netz, Netzteil, Motor, Getriebe. Die Abgabe einer Stufe ist die Aufnahme der nächsten. Behält die erste Stufe 90 % und die zweite 80 % der zugeführten Energie, bleiben 0,9 · 0,8 = 0,72 der ursprünglichen Energie.",
          "Der Gesamtwirkungsgrad einer Reihe von Stufen ist das Produkt der Einzelwirkungsgrade. Er ist weder die Summe noch der Mittelwert. Das gilt für einen einfachen Energiefluss ohne weitere Eingänge oder Verzweigungen. Gibt es eine eigene Versorgung für Kühlung oder Steuerung, wird deren Leistung zur Gesamtaufnahme addiert.",
        ],
        formula: {
          expression: "ηtotal = η₁ · η₂ · … · ηₙ",
          legend:
            "η₁, η₂, … – Wirkungsgrade der aufeinanderfolgenden Stufen als Anteile.",
          note: "Das Produkt ist kleiner oder gleich jedem Einzelwert. Jede weitere reale Stufe verschlechtert den Gesamtwirkungsgrad.",
        },
        example: {
          title: "Netzteil und Motor",
          given:
            "An der Welle sollen 180 W bereitgestellt werden. Das Netzteil hat 90 % Wirkungsgrad, der Motor 80 %. Weitere Verbraucher gibt es nicht. Bestimmen Sie die Gesamtaufnahme und die Verluste.",
          steps: [
            "Gesamtwirkungsgrad: ηtotal = 0,9 · 0,8 = 0,72, also 72 %.",
            "Aufnahme des Motors: 180/0,8 = 225 W.",
            "Aufnahme des Netzteils: 225/0,9 = 250 W.",
            "Motorverluste: 225 − 180 = 45 W; Netzteilverluste: 250 − 225 = 25 W.",
            "Gesamtverluste: 45 + 25 = 70 W. Bilanzkontrolle: 250 = 180 + 70.",
          ],
          answer:
            "Der Gesamtwirkungsgrad beträgt 72 %. Nötig sind 250 W Aufnahmeleistung, die Verluste betragen 70 W.",
        },
      },
      {
        id: "efficiency-operating",
        title: "5. Warum der Wirkungsgrad vom Betriebspunkt abhängt",
        paragraphs: [
          "Der Wirkungsgrad ist nicht immer konstant. Ein Teil der Verluste ist fast konstant, etwa der Verbrauch der Steuerelektronik. Ein anderer Teil wächst mit der Stromstärke: Die Erwärmung der Leiter entspricht etwa I²R. Bei kleiner Last bestimmen die konstanten Verluste die Aufnahme. Bei sehr großen Strömen steigen die Wärmeverluste stark an.",
          "Geräte vergleicht man daher bei gleicher Nutzleistung und passenden Betriebsbedingungen. Die Angabe „Wirkungsgrad bis 95 %“ ist ein Höchstwert an einem bestimmten Punkt. Sie garantiert keine 95 % bei jeder Last. Für einen Tag vergleicht man die Gesamtenergien. Der Mittelwert der Wirkungsgrade verschiedener Betriebsarten ergibt meist nicht den richtigen Wert.",
          "Ein höherer Wirkungsgrad senkt die Aufnahme bei gleichem Nutzen, hebt aber den Einfluss der Betriebsdauer nicht auf. Ein sehr effizientes Gerät im Dauerbetrieb kann mehr Energie verbrauchen als ein weniger effizientes, das nur kurz läuft. Für einen Vergleich muss man dieselbe Nutzaufgabe und Zeit zugrunde legen.",
        ],
        callout: {
          type: "tip",
          title: "Messbedingungen prüfen",
          text: "Ein Vergleich ist nur sinnvoll, wenn Last, Eingangsbedingungen und Messgrenzen bekannt sind. Der Wirkungsgrad des Motors und der Wirkungsgrad der ganzen Anlage mit Getriebe sind verschiedene Kenngrößen.",
        },
      },
      {
        id: "efficiency-heat-pump",
        title: "6. Wirkungsgrad und Leistungszahl sind verschiedene Größen",
        paragraphs: [
          "In der Werbung für Heizungen findet man manchmal 300 % oder 400 %. Bei einer Wärmepumpe ist das meist die Leistungszahl COP: das Verhältnis der abgegebenen Wärme zur aufgenommenen elektrischen Energie. Die Pumpe entnimmt zusätzlich Wärme aus Luft, Erdreich oder Wasser. Ihre Wärmeabgabe kann deshalb größer sein als die elektrische Aufnahme.",
          "Der Energieerhaltungssatz bleibt gültig: Die Wärmeabgabe ist die elektrische Aufnahme plus die der Umgebung entnommene Energie. Den COP darf man nicht wie den Wirkungsgrad eines gewöhnlichen Wandlers mit nur einer Energiezufuhr deuten. Für Aufgaben zu Motor, Widerstand oder Netzteil gilt das übliche Verhältnis von Nutzen zur gesamten Aufnahme.",
        ],
        callout: {
          type: "insight",
          title: "Ein Ergebnis über 100 % zwingt zur Überprüfung des Modells",
          text: "Prüfen Sie Prozentangaben, Einheiten, Systemgrenze, zusätzliche Energiequellen und gespeicherte Energie. Der Fehler lässt sich nicht durch Runden auf 100 % beheben.",
        },
      },
    ],
    terms: [
      {
        term: "Wirkungsgrad",
        german: "Wirkungsgrad",
        symbol: "η",
        unit: "Anteil oder %",
        definition:
          "Verhältnis von Nutzenergie zu aufgenommener Energie. Im stationären Betrieb das Verhältnis der entsprechenden Leistungen.",
      },
      {
        term: "Nutzenergie",
        german: "Nutzenergie",
        symbol: "E_nutz",
        unit: "J",
        definition:
          "Der Teil der zugeführten Energie, der die gewünschte Aufgabe erfüllt.",
      },
      {
        term: "Verlustenergie",
        german: "Verlustenergie",
        symbol: "E_Verlust",
        unit: "J",
        definition:
          "Energie, die nicht zum gewünschten Nutzen beiträgt, aber nicht verschwindet.",
      },
      {
        term: "Energiebilanz",
        german: "Energiebilanz",
        symbol: "Ein = Efloor + E_Verlust",
        unit: "J",
        definition:
          "Erfassung aller zu-, ab- und gespeicherten Energien im betrachteten System.",
      },
      {
        term: "Gesamtwirkungsgrad",
        german: "Gesamtwirkungsgrad",
        symbol: "ηgesamt",
        unit: "Anteil oder %",
        definition:
          "Wirkungsgrad des gesamten Systems. Bei einer Reihe von Stufen ohne weitere Eingänge das Produkt der Einzelwirkungsgrade.",
      },
      {
        term: "Leistungszahl",
        german: "Leistungszahl",
        symbol: "COP",
        unit: "dimensionslos",
        definition:
          "Bei der Wärmepumpe das Verhältnis von abgegebener Wärme zu aufgenommener elektrischer Energie. Sie kann größer als 1 sein, weil Umweltwärme genutzt wird.",
      },
    ],
    summary: [
      "Der Wirkungsgrad wird erst nach Festlegung von Systemgrenze und Nutzen bestimmt.",
      "η = E_nutz/E_zu, im stationären Betrieb η = P_nutz/P_zu.",
      "80 % schreibt man in Formeln als 0,8. Die Verluste betragen 1 − η der Aufnahme.",
      "Die nötige Aufnahme ist die Nutzleistung geteilt durch den Wirkungsgrad.",
      "Der Gesamtwirkungsgrad einer Reihe von Stufen ist das Produkt der Einzelwirkungsgrade.",
      "Verluste sind Energie in nicht nutzbarer Form. Die Energie bleibt erhalten.",
    ],
    quiz: [
      {
        id: "efficiency-1",
        type: "choice",
        question:
          "Wie bestimmt man den Wirkungsgrad eines Motors im stationären Betrieb richtig?",
        options: [
          "Elektrische Aufnahmeleistung geteilt durch mechanische Leistung",
          "Mechanische Leistung an der Welle geteilt durch elektrische Aufnahmeleistung",
          "Aufnahmeleistung plus Verlustleistung",
          "Verlustleistung geteilt durch Nutzleistung",
        ],
        answer: 1,
        explanation:
          "Der Nutzen eines Motors ist mechanische Arbeit. Der Wirkungsgrad ist die Wellenleistung geteilt durch die aufgenommene elektrische Leistung.",
      },
      {
        id: "efficiency-2",
        type: "numeric",
        question:
          "Die Aufnahmeleistung eines Wandlers beträgt 500 W, die Nutzleistung 400 W. Wie groß ist der Wirkungsgrad?",
        answer: 80,
        unit: "%",
        tolerance: 0.1,
        explanation: "η = 400/500 = 0,8. Mal 100 % ergibt 80 %.",
      },
      {
        id: "efficiency-3",
        type: "numeric",
        question:
          "Bei einem Wirkungsgrad von 75 % werden 180 W Nutzleistung benötigt. Wie groß ist die erforderliche Aufnahmeleistung?",
        answer: 240,
        unit: "W",
        tolerance: 0.1,
        explanation:
          "75 % = 0,75. P_zu = P_nutz/η = 180/0,75 = 240 W. Die Verluste betragen 60 W.",
      },
      {
        id: "efficiency-4",
        type: "choice",
        question:
          "Zwei hintereinanderliegende Stufen haben Wirkungsgrade von 80 % und 90 %. Wie groß ist der Gesamtwirkungsgrad ohne weitere Eingänge?",
        options: ["170 %", "85 %", "72 %", "10 %"],
        answer: 2,
        explanation:
          "ηtotal = 0,8 · 0,9 = 0,72 = 72 %. Die zweite Stufe erhält nur die Energie, die die erste abgibt.",
      },
      {
        id: "efficiency-5",
        type: "choice",
        question: "Was bedeutet Verlustleistung bei einem Motor?",
        options: [
          "Energie hört auf zu existieren.",
          "Ein Teil der Aufnahmeleistung wird nicht zur nutzbaren Wellenleistung.",
          "Die gesamte Aufnahmeleistung wird zu mechanischer Leistung.",
          "Die Nutzleistung ist zwangsläufig größer als die Aufnahmeleistung.",
        ],
        answer: 1,
        explanation:
          "Energie bleibt erhalten. Wärme, Reibung und andere Vorgänge verringern die für den Nutzen verfügbare Leistung.",
      },
    ],
  },
  {
    id: "field",
    number: 9,
    title: "Elektrisches Feld",
    german: "Elektrisches Feld",
    chapter: "4.1",
    category: "fields",
    duration: 29,
    description:
      "Elektrische Ladungen wirken über Felder aufeinander. Sie lernen Feldlinien, elektrische Feldstärke und Kraft kennen und verbinden sie mit der Spannung.",
    objectives: [
      "Die elektrische Feldstärke als Vektor erklären und die Kraft auf eine positive oder negative Ladung bestimmen.",
      "Das homogene Feld zwischen Platten mit Spannung und Plattenabstand verknüpfen.",
      "Feldstärke und Spannung unterscheiden, Felder überlagern und die Arbeit des elektrischen Feldes berechnen.",
    ],
    sections: [
      {
        id: "field-charge",
        title: "1. Ladungen wirken über ein Feld aufeinander",
        paragraphs: [
          "Es gibt positive und negative Ladungen. Gleichnamige Ladungen stoßen sich ab, ungleichnamige ziehen sich an. Um einen geladenen Körper herrscht ein elektrisches Feld: Eine andere Ladung erfährt dort eine Kraft. Das Feld beschreibt die Wirkung an jedem Raumpunkt, nicht nur die Kraft zwischen zwei Körpern.",
          "Zur Untersuchung denkt man sich eine kleine positive Probeladung. Sie ist so klein, dass sie die Verteilung der ursprünglichen Ladungen kaum verändert. Die Kraftrichtung auf diese Probeladung gilt als Richtung des Feldes. Das Feld besteht auch ohne Probeladung. Sie macht es nur nachweisbar.",
          "Das Elektron trägt die Ladung −e mit e ≈ 1,602 · 10⁻¹⁹ C, das Proton die Ladung +e. Ein neutraler Körper hat die Gesamtladung null, enthält aber positive und negative Ladungen. „Neutral“ heißt also nicht „ohne Ladungsträger“.",
        ],
        callout: {
          type: "insight",
          title: "Das Feld wirkt auch dort, wo kein Leiter ist",
          text: "Zwischen den Platten eines Kondensators befindet sich Luft oder Vakuum, trotzdem gibt es ein elektrisches Feld. Dafür ist kein Strom durch den Zwischenraum nötig.",
        },
      },
      {
        id: "field-strength",
        title: "2. Elektrische Feldstärke: Kraft je Ladung",
        paragraphs: [
          "Die elektrische Feldstärke E beschreibt das Feld an einem Punkt. Sie ist die Kraft auf eine positive Probeladung geteilt durch deren Ladung: E = F/q. Die Einheit N/C gibt an, wie viel Newton pro Coulomb wirken. Dieselbe Einheit schreibt man V/m. Es ist keine andere Größe.",
          "Die Feldstärke ist ein Vektor mit Betrag und Richtung. Es gilt F⃗ = q · E⃗. Bei positivem q zeigt die Kraft in Feldrichtung, bei negativem q entgegengesetzt. Für den Betrag der Kraft gilt F = |q| · E. Das Elektron ist negativ geladen. Die Kraft auf ein Elektron zeigt deshalb entgegen E⃗.",
          "Die Feldstärke hängt nicht von der Probeladung ab. Verdoppelt man sie, verdoppelt sich die Kraft, das Verhältnis F/q bleibt gleich. Eine sehr große Probeladung kann allerdings die Feldquelle selbst verändern. Dann gilt die Annahme eines unveränderten Feldes nicht mehr.",
        ],
        formula: {
          expression: "E⃗ = F⃗ / q; F⃗ = q · E⃗; F = |q| · E",
          legend:
            "E – elektrische Feldstärke in N/C oder V/m; F – Kraft in N; q – Ladung in C. Bei negativer Ladung sind Kraft und Feld entgegengesetzt gerichtet.",
          note: "Zur Bestimmung der Feldrichtung denkt man sich eine positive Probeladung. Das Vorzeichen der tatsächlichen Ladung bestimmt die Kraftrichtung.",
        },
        example: {
          title: "Kraft auf ein geladenes Teilchen",
          given:
            "In einem homogenen Feld E = 2000 N/C, das nach rechts zeigt, befindet sich ein Teilchen mit der Ladung q = −3 μC. Bestimmen Sie die Kraft.",
          steps: [
            "Ladung umrechnen: q = −3 · 10⁻⁶ C.",
            "Betrag der Kraft: F = |q| · E = 3 · 10⁻⁶ · 2000 = 0,006 N.",
            "Die Ladung ist negativ. Die Kraft zeigt daher entgegen dem Feld, also nach links.",
            "Als Komponente in Richtung der Achse nach rechts: Fx = q · Ex = −0,006 N.",
          ],
          answer: "Die Kraft beträgt 0,006 N bzw. 6 mN und zeigt nach links.",
        },
      },
      {
        id: "field-lines",
        title: "3. Feldlinien lesen",
        paragraphs: [
          "Feldlinien sind ein Hilfsmittel zur Darstellung des Feldes. Die Tangente an eine Feldlinie zeigt die Richtung der Feldstärke. Bei einer positiven Einzelladung verlaufen die Linien nach außen, bei einer negativen zur Ladung hin. In der Elektrostatik beginnen die Linien an positiven Ladungen und enden an negativen oder im Unendlichen.",
          "Wo die Linien dichter liegen, ist das Feld stärker. Feldlinien schneiden sich nicht, sonst hätte das Feld in einem Punkt zwei Richtungen. Sie sind keine Fäden und auch keine Bahnen der Teilchen. Die Bewegung hängt zusätzlich von der Anfangsgeschwindigkeit und anderen Kräften ab.",
          "Zwischen großen parallelen Platten, weit entfernt vom Rand, verlaufen die Linien nahezu gerade, parallel und gleichmäßig verteilt. Ein solches Feld heißt homogen: E⃗ ist an allen betrachteten Punkten gleich. Am Plattenrand sind die Linien gekrümmt. Dort ist das Modell des homogenen Feldes ungenauer.",
        ],
        callout: {
          type: "tip",
          title: "Feldrichtung und Elektronenbewegung",
          text: "Das Feld zwischen den Platten zeigt von der positiven zur negativen Platte. Die Kraft auf ein Elektron zeigt zur positiven Platte. Die Anfangsgeschwindigkeit des Elektrons kann eine andere Richtung haben.",
        },
      },
      {
        id: "field-voltage",
        title: "4. Spannung und Feldstärke sind nicht dasselbe",
        paragraphs: [
          "Die Spannung U gehört zu zwei Punkten. Sie gibt die Arbeit des Feldes je Ladung beim Weg zwischen diesen Punkten an. Die Feldstärke E gehört zu einem Punkt und gibt die Kraft je Ladung an. Bei gleicher Spannung ist das Feld zwischen Platten stärker, wenn der Abstand kleiner ist.",
          "Im homogenen Feld zwischen parallelen Platten gilt E = U/d. Dabei ist U der Betrag der Spannung und d der Plattenabstand in Metern. Die Formel gilt näherungsweise fern vom Rand, wenn die Platten groß gegenüber dem Abstand sind. Im inhomogenen Feld liefert U/d nicht die Feldstärke an jedem Punkt.",
          "In Feldrichtung nimmt das Potenzial ab. Flächen gleichen Potenzials heißen Äquipotenzialflächen. In der Elektrostatik stehen sie senkrecht auf den Feldlinien. Im Inneren eines Leiters im elektrostatischen Gleichgewicht ist die Feldstärke null und das Potenzial überall gleich. Das gilt nicht ohne Weiteres für einen stromdurchflossenen Leiter.",
        ],
        formula: {
          expression: "E = U/d; U = E d; 1 N/C = 1 V/m",
          legend:
            "U – Betrag der Spannung zwischen den Platten, V; d – Plattenabstand, m; E – Feldstärke des näherungsweise homogenen Feldes.",
          note: "Millimeter vor dem Einsetzen in Meter umrechnen: 1 mm = 0,001 m.",
        },
        example: {
          title: "Feld zwischen Platten",
          given:
            "Zwischen großen parallelen Platten liegen 24 V, der Abstand beträgt 3 mm. Bestimmen Sie die Feldstärke fern vom Rand und den Betrag der Kraft auf ein Elektron.",
          steps: [
            "Abstand: d = 3 mm = 0,003 m.",
            "Feldstärke: E = U/d = 24/0,003 = 8000 V/m.",
            "Betrag der Elektronenladung: e ≈ 1,602 · 10⁻¹⁹ C.",
            "Betrag der Kraft: F = e · E ≈ 1,602 · 10⁻¹⁹ · 8000 = 1,2816 · 10⁻¹⁵ N.",
            "Das Feld zeigt von Plus nach Minus. Die Kraft auf das Elektron zeigt zur positiven Platte.",
          ],
          answer:
            "E = 8000 V/m. Die Kraft auf das Elektron beträgt etwa 1,28 · 10⁻¹⁵ N und zeigt zur positiven Platte.",
        },
      },
      {
        id: "field-point-superposition",
        title: "5. Feld einer Punktladung und Überlagerung",
        paragraphs: [
          "Für eine Punktladung Q im Vakuum gilt im Abstand r die Feldstärke E = k · |Q| / r² mit k ≈ 8,99 · 10⁹ N·m²/C². Der Abstand wird von der Ladung aus gemessen. Die Formel gilt auch außerhalb einer kugelsymmetrischen Ladungsverteilung. Verdoppelt man den Abstand, sinkt die Feldstärke auf ein Viertel.",
          "Bei mehreren Quellen addiert man die Felder vektoriell: E⃗total = E⃗₁ + E⃗₂ + … . Gleich gerichtete Felder verstärken sich, entgegengesetzte schwächen sich ab oder heben sich auf. Die Beträge allein dürfen nicht addiert werden. In der Mitte zwischen zwei gleichen positiven Ladungen sind die Felder entgegengesetzt, die resultierende Feldstärke ist null.",
          "Bei gleich großen, entgegengesetzten Ladungen ist es anders: Das Feld der positiven Ladung zeigt von ihr weg, das der negativen zu ihr hin. In der Mitte zeigen beide Vektoren von Plus nach Minus und addieren sich. Das Beispiel zeigt den Unterschied zwischen Feldstärke und Potenzial: Potenzial null bedeutet nicht Feldstärke null.",
        ],
        formula: {
          expression: "E = k |Q| /r²; E⃗total = E⃗₁ + E⃗₂ + …",
          legend:
            "Q – felderzeugende Ladung, C; r – Abstand, m; k ≈ 8,99 · 10⁹ N·m²/C² im Vakuum.",
          note: "In einem homogenen linearen Dielektrikum geht die Permittivität in das Coulombsche Gesetz ein. In einfachen Aufgaben behandelt man Luft näherungsweise wie Vakuum.",
        },
      },
      {
        id: "field-work-materials",
        title: "6. Feldarbeit, Leiter und Dielektrika",
        paragraphs: [
          "Bewegt sich eine Ladung von A nach B, verrichtet das elektrische Feld die Arbeit Afield = q · (φA − φB) = q · UAB. Eine positive Ladung, die sich mit dem Feld bewegt, verliert potenzielle Energie. Die Feldarbeit ist positiv. Bei negativer Ladung kehrt das Vorzeichen von q das Ergebnis um. Für Spannung und Arbeit zählen Anfangs- und Endpunkt, nicht nur die Entfernung.",
          "Ein Leiter enthält frei bewegliche Ladungsträger, die sich im Feld verschieben. In einem Dielektrikum sind die Ladungen überwiegend gebunden. Das Feld bewirkt eine Polarisation: Positive und negative Ladungen werden leicht gegeneinander verschoben oder Dipole richten sich aus. Die Polarisation schwächt das Feld und ist die Grundlage der Wirkung eines Dielektrikums im Kondensator.",
          "Wird die Feldstärke für ein Material zu groß, kommt es zum elektrischen Durchschlag: Der Isolator wird leitend. Für die Isolation zählen daher nicht nur die Spannung, sondern auch Abstände, Elektrodenform, Luftfeuchte und Materialeigenschaften. Verwenden Sie in Versuchen sichere Kleinspannungsquellen und fertige Schaltungen. Geladene Kondensatoren können auch nach dem Abschalten Energie speichern.",
        ],
        formula: {
          expression: "Afields = q UAB; ΔE_pot = −Afield",
          legend:
            "UAB = φA − φB – Spannung von A nach B, V; q – Ladung mit Vorzeichen, C; Afield – Feldarbeit, J.",
          note: "Das ist die Arbeit eines elektrostatischen Feldes. Wirken weitere Kräfte, bestimmt die Gesamtarbeit aller Kräfte die Änderung der kinetischen Energie.",
        },
      },
    ],
    terms: [
      {
        term: "Elektrisches Feld",
        german: "Elektrisches Feld",
        symbol: "E⃗",
        unit: "N/C, V/m",
        definition:
          "Feld, in dem elektrische Ladungen Kräfte erfahren. Es hängt mit der Spannung zusammen.",
      },
      {
        term: "Elektrische Feldstärke",
        german: "Elektrische Feldstärke",
        symbol: "E⃗",
        unit: "N/C, V/m",
        definition:
          "Kraft je positiver Probeladung an einem Punkt, ein Vektor.",
      },
      {
        term: "Feldlinie",
        german: "Feldlinie",
        symbol: "—",
        unit: "—",
        definition:
          "Gedachte Linie, deren Tangente die Richtung des elektrischen Feldes angibt.",
      },
      {
        term: "Homogenes Feld",
        german: "Homogenes Feld",
        symbol: "E⃗ = const",
        unit: "V/m",
        definition:
          "Feld mit gleicher Feldstärke und Richtung an allen Punkten des betrachteten Bereichs.",
      },
      {
        term: "Elektrisches Potenzial",
        german: "Elektrisches Potenzial",
        symbol: "φ",
        unit: "V",
        definition:
          "Potenzielle Energie je Ladung, bezogen auf ein gewähltes Bezugsniveau.",
      },
      {
        term: "Superpositionsprinzip",
        german: "Superpositionsprinzip",
        symbol: "E⃗total = ΣE⃗ᵢ",
        unit: "V/m",
        definition:
          "Das resultierende Feld mehrerer Quellen ist die Vektorsumme ihrer Felder.",
      },
      {
        term: "Dielektrische Polarisation",
        german: "Dielektrische Polarisation",
        symbol: "—",
        unit: "—",
        definition:
          "Verschiebung gebundener Ladungen oder Ausrichtung von Dipolen eines Stoffes im elektrischen Feld.",
      },
    ],
    summary: [
      "Die Feldrichtung ist die Richtung der Kraft auf eine positive Probeladung.",
      "F⃗ = q · E⃗: Die Kraft zeigt bei positiver Ladung in Feldrichtung, bei negativer entgegen dem Feld.",
      "Die elektrische Feldstärke wird in N/C oder V/m gemessen, die Spannung in Volt.",
      "Zwischen großen parallelen Platten gilt fern vom Rand E ≈ U/d.",
      "Das Feld einer Punktladung nimmt mit 1/r² ab. Felder mehrerer Quellen addiert man vektoriell.",
      "Die Arbeit des elektrostatischen Feldes beim Verschieben einer Ladung ist q · U. Sie ist der Änderung der potenziellen Energie entgegengesetzt.",
    ],
    quiz: [
      {
        id: "field-1",
        type: "choice",
        question:
          "Die Feldstärke zeigt nach rechts. Wohin zeigt die elektrische Kraft auf ein Elektron?",
        options: [
          "Nach rechts",
          "Nach links",
          "Immer nach oben",
          "Die Kraft ist immer null",
        ],
        answer: 1,
        explanation:
          "Das Elektron ist negativ geladen. In F⃗ = q · E⃗ kehrt das negative q die Kraftrichtung gegenüber dem Feld um.",
      },
      {
        id: "field-2",
        type: "numeric",
        question:
          "Zwischen großen parallelen Platten liegen U = 12 V, der Abstand beträgt d = 4 mm. Bestimmen Sie die Feldstärke fern vom Plattenrand.",
        answer: 3000,
        unit: "V/m",
        tolerance: 1,
        explanation:
          "d = 0,004 m. E = U/d = 12/0,004 = 3000 V/m. Der Abstand muss in Meter umgerechnet werden.",
      },
      {
        id: "field-3",
        type: "choice",
        question:
          "Der Abstand zu einer Punktladung im Vakuum wird verdoppelt. Wie ändert sich die Feldstärke dieser Ladung?",
        options: [
          "Sie verdoppelt sich.",
          "Sie halbiert sich.",
          "Sie sinkt auf ein Viertel.",
          "Sie bleibt gleich.",
        ],
        answer: 2,
        explanation:
          "E = k · |Q| / r². Bei r → 2r wird der Nenner viermal so groß, die Feldstärke sinkt auf ein Viertel.",
      },
      {
        id: "field-4",
        type: "numeric",
        question:
          "Eine Ladung von +2 µC befindet sich in einem Feld von 5000 N/C. Bestimmen Sie den Betrag der elektrischen Kraft in Newton.",
        answer: 0.01,
        unit: "N",
        tolerance: 0.0001,
        explanation:
          "2 µC = 2 · 10⁻⁶ C. F = |q| · E = 2 · 10⁻⁶ · 5000 = 0,01 N. Die Kraft zeigt in Feldrichtung.",
      },
      {
        id: "field-5",
        type: "choice",
        question:
          "Wie groß ist die resultierende Feldstärke genau in der Mitte zwischen zwei gleichen positiven Punktladungen?",
        options: [
          "Gleich null",
          "Sie zeigt zur linken Ladung",
          "Sie zeigt zur rechten Ladung",
          "Sie ist gleich der Summe der Beträge beider Felder",
        ],
        answer: 0,
        explanation:
          "In der Mitte haben beide Felder gleiche Beträge und entgegengesetzte Richtungen. Ihre Vektorsumme ist null. Das Potenzial an diesem Punkt ist dagegen nicht null.",
      },
    ],
  },
];
