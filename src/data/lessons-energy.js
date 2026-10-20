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
      "Verstehen Sie, was ein Stromkreis transportiert, wie man die von Strom geleistete Arbeit berechnet und warum eine Kilowattstunde Energie und keine Leistung ist.",
    objectives: [
      "Erklären Sie die Umwandlung elektrischer Energie in Wärme, Bewegung, Licht und chemische Energie.",
      "Berechnen Sie die Gleichstromarbeit und rechnen Sie Joule, Wattstunden und Kilowattstunden um.",
      "Ermitteln Sie den Energieverbrauch und die Kosten für den Betrieb von Geräten unter Berücksichtigung der Betriebszeit und -weise.",
    ],
    sections: [
      {
        id: "energy-meaning",
        title:
          "1. Energie verschwindet nicht: Sie wird übertragen und umgewandelt",
        paragraphs: [
          "Energie ist eine physikalische Größe, die es uns ermöglicht, die Fähigkeit eines Systems, Arbeit zu verrichten und Wärme auszutauschen, quantitativ zu beschreiben. In einem Stromkreis erzeugt die Quelle eine Potentialdifferenz und hält die Ladungsbewegung aufrecht. Beim Durchgang durch einen Verbraucher übertragen Ladungen Energie auf dessen Substanz oder Mechanismus: Die Spirale erwärmt sich, die Motorwelle dreht sich und die LED strahlt Licht aus. Die Ladungsträger werden nicht als Brennstoff verbraucht.",
          "Die Batterie wandelt chemische Energie in elektrische Energie um, der Generator wandelt mechanische Energie in elektrische Energie um. Die Quelle verfügt über eine Energiereserve oder einen konstanten Energiefluss von außen. Daher erzeugt ein geschlossener Draht selbst keine Energie. Bei idealer Bilanzierung entspricht die gesamte von der Quelle abgegebene Energie der Summe der von den Verbrauchern empfangenen und in den Leitungen und der Quelle selbst verlorenen Energie.",
          "Arbeit ist eine Möglichkeit, Energie zu übertragen. Wenn ein elektrisches Feld eine Ladung bewegt, verrichtet es elektrische Arbeit. In einfachen Alltagsrechnungen bedeuten die Wörter „aufgewandte elektrische Energie“ und „elektrische Arbeit“ oft die gleiche Menge, das nutzbare Ergebnis kann jedoch nur ein Teil dieser Energie sein.",
        ],
        callout: {
          type: "insight",
          title: "Der Verbraucher verbraucht Energie, nicht Ladung",
          text: "Im stationären Zustand tritt pro Sekunde die gleiche Ladungsmenge in ein bipolares Gerät ein wie aus ihm austritt. Die Energie der Ladungen ändert sich, der Strom in der Reihenschaltung bleibt jedoch gleich.",
        },
      },
      {
        id: "energy-voltage-charge",
        title: "2. Von Spannung und Ladung bis zur Arbeit",
        paragraphs: [
          "Die Spannung gibt an, wie viel Energie pro übertragener Ladungseinheit zur Verfügung steht: Ein Volt entspricht einem Joule pro Coulomb. Wenn eine Ladung von 3 C durch einen Abschnitt mit einer konstanten Spannung von 12 V fließt, überträgt das elektrische Feld 36 J. Je größer die Spannung oder Ladung ist, die übertragen wird, desto größer ist die übertragene Energie.",
          "Bei konstantem Strom fließt während einer Zeit t eine Ladung Q = I t durch den Querschnitt. Wenn wir es in die Arbeit A = U · Q einsetzen, erhalten wir A = U · I · t. In dieser Formel wird U in Volt gemessen, I wird in Ampere gemessen, t wird in Sekunden gemessen und dann wird das Ergebnis in Joule erhalten. Wenn sich die Spannung oder der Strom ändert, können Sie deren willkürliche Durchschnittswerte nicht ohne Prüfung ersetzen: Sie müssen die Energie über separate Intervalle addieren oder die Momentanleistung integrieren.",
        ],
        formula: {
          expression: "A = U · Q = U · I · t",
          legend:
            "A – elektrische Arbeit, J; U – Gleichspannung, V; Q – Ladung, C; I – Gleichstrom, A; t – Zeit, s.",
          note: "Die Form U · I · t gilt für einen Modus mit konstantem U und I. Allgemeine Regel: Die Energie ist über alle Betriebsintervalle gleich der Summe von P · Δt.",
        },
        example: {
          title: "Lampe im Gleichstromkreis",
          given:
            "Die Lampe wird an 12 V angeschlossen, der Strom beträgt 0,5 A, die Betriebszeit beträgt 10 Minuten. Bestimmen Sie die empfangene Energie.",
          steps: [
            "Wir übersetzen die Zeit: t = 10 · 60 = 600 s.",
            "Wir finden die durchgelassene Ladung: Q = I · t = 0,5 · 600 = 300 C.",
            "Wir berechnen die Arbeit: A = U · Q = 12 · 300 = 3600 J.",
            "Wir prüfen alternativ: P = U · I = 6 W; A = P t = 6 600 = 3600 J.",
          ],
          answer: "Die Lampe erhielt 3600 J oder 3,6 kJ elektrische Energie.",
        },
      },
      {
        id: "energy-units",
        title: "3. Joule, Wattstunde und Kilowattstunde",
        paragraphs: [
          "Die SI-Einheit der Energie ist das Joule. Ein Joule wird in einer Sekunde mit einer Leistung von einem Watt übertragen: 1 J = 1 W s. Bei Haushaltsgeräten werden Joule schnell zu größeren Zahlen, sodass der Stromverbrauch in Wattstunden oder Kilowattstunden erfasst wird.",
          "Wattstunde bedeutet Leistung mal Zeit. Bei einer Leistung von 1 W werden 3600 J pro Stunde übertragen, also 1 Wh = 3600 J. Ein Kilowatt ist tausendmal mehr als ein Watt: 1 kWh = 1000 W · 3600 s = 3.600.000 J = 3,6 MJ. Die Angabe von kWh hat eine andere Bedeutung – die Änderung der Leistung pro Stunde – und ersetzt nicht kWh.",
          "Es ist praktisch, sofort ein konsistentes Einheitenpaar auszuwählen: Watt und Stunden ergeben Wattstunden, Kilowatt und Stunden ergeben Kilowattstunden, Watt und Sekunden ergeben Joule. Sie können Minuten nicht in die Berechnung einsetzen und das Ergebnis als Joule angeben. Auch die in Wattstunden angegebene Batteriekapazität beschreibt die Energie; Amperestunden beschreiben die Ladung, und um daraus die Energie abzuschätzen, ist zusätzliche Spannung erforderlich.",
        ],
        formula: {
          expression: "1 Wh = 3600 J; 1 kWh = 3,6 · 10⁶ J",
          legend:
            "Wh und kWh sind Energieeinheiten; W und kW sind Leistungseinheiten.",
          note: "Bei der Umrechnung von kWh in Joule mit 3.600.000 multiplizieren; bei der Rückumrechnung dividieren Sie durch diese Zahl.",
        },
        callout: {
          type: "tip",
          title: "Überprüfung des gesunden Menschenverstandes",
          text: "Ein Gerät mit einer Leistung von 1 kW erhält in 1 Stunde 1 kWh und in einer halben Stunde 0,5 kWh. In zwei Minuten kann er bei gleicher Leistung nicht mehr Energie gewinnen als in einer Stunde.",
        },
      },
      {
        id: "energy-heat",
        title: "4. Wohin fließt die Energie in einem Widerstand?",
        paragraphs: [
          "In einem Leiter überträgt ein elektrisches Feld Energie auf Ladungsträger. Bei der Wechselwirkung mit Materie wandelt sich diese Energie in die innere Energie des Leiters um. Die Temperatur kann ansteigen; Gleichzeitig gibt der Leiter Wärme an die Umgebung ab. So funktionieren Heizelemente und es kommt zu unerwünschten Verlusten in Kabeln.",
          "Für einen Widerstandsabschnitt bei konstantem Strom wird die freigesetzte Wärmemenge durch das Joule-Lenz-Gesetz beschrieben: Qheat = I² · R · t. Wenn auch U = I · R gilt, kann die gleiche Energie als U² · t / R geschrieben werden. Dabei wird angenommen, dass der Widerstand über das betrachtete Intervall konstant ist. Bei einer heißen Spule kann es sich deutlich von einer kalten unterscheiden.",
          "Achten Sie auf die Symbole: Der Buchstabe Q bezeichnet oft sowohl elektrische Ladung als auch Wärmemenge. Sie werden durch Kontext, Index und Einheit unterschieden: Ladung – Coulomb, Wärme – Joule. In einem Motor wird nicht die gesamte elektrische Energie in Wärme umgewandelt: Ein Teil wird für mechanische Arbeit aufgewendet, daher kann die I²Rt-Formel nicht als die gesamte Arbeit eines Geräts betrachtet werden.",
        ],
        formula: {
          expression: "Qheat = I² R t = U² t / R",
          legend:
            "Qheat – freigesetzte Wärme, J; I – Strom, A; R – Widerstand, Ohm; t – Zeit, s.",
          note: "Wenn der Strom verdoppelt wird und R und t unverändert bleiben, wird viermal mehr Wärme freigesetzt.",
        },
      },
      {
        id: "energy-bill",
        title: "5. Energieverbrauch und Kosten",
        paragraphs: [
          "Der Stromzähler berücksichtigt die kumulierte Wirkenergie. Um den Verbrauch für einen Zeitraum zu ermitteln, wird der vorherige vom letzten Messwert subtrahiert. Für ein einzelnes Gerät mit konstantem Stromverbrauch reicht es aus, die Leistung in Kilowatt mit der Zeit in Stunden zu multiplizieren. Bei einem Tarif pro Kilowattstunde entsprechen die Kosten dem Verbrauch multipliziert mit dem Tarif.",
          "Die Nennleistung eines Geräts entspricht nicht immer seiner durchschnittlichen Leistung pro Tag. Der Wasserkocher funktioniert nur beim Erhitzen, der Kühlschrank schaltet in regelmäßigen Abständen den Kompressor ein und der Computer ändert den Verbrauch je nach Belastung. Wenn die Modi bekannt sind, wird der Verbrauch für jeden berechnet und aufsummiert. Für genaue Haushaltsmessungen verwenden Sie einen geeigneten Verbrauchszähler oder Zählerdaten.",
        ],
        formula: {
          expression: "E = P t; Kosten = E-Tarif",
          legend:
            "Mit P in kW und t in Stunden erhält man die Energie E in kWh; Der Tarif muss auf 1 kWh eingestellt sein.",
          note: "Für mehrere Intervalle Etot = P₁t₁ + P₂t₂ + … . Berücksichtigen Sie die tatsächliche Betriebszeit jedes Modus.",
        },
        example: {
          title: "Wie viel kostet der Betrieb einer Heizung?",
          given:
            "Die Heizung verbraucht 1,5 kW und läuft 40 Minuten ohne Unterbrechung. Der Schulungstarif beträgt 0,30 € pro kWh.",
          steps: [
            "Konvertieren Sie Minuten in Stunden: t = 40 / 60 = 2/3 Stunden.",
            "Verbrauch: E = 1,5 2/3 = 1 kWh.",
            "In SI-Einheiten: E = 1 3 600 000 = 3 600 000 J.",
            "Kosten: 1 · 0,30 = 0,30 €. Der Tarif ist beispielhaft ausgewählt und stellt nicht den aktuellen Preis des Anbieters dar.",
          ],
          answer: "Verbrauch - 1 kWh, Kosten für diesen Tarif - 0,30 €.",
        },
      },
      {
        id: "energy-balance",
        title: "6. Energiebilanz und Reihenfolge der Problemlösung",
        paragraphs: [
          "Beginnen Sie mit den Grenzen des betreffenden Systems. Bei einem Elektromotor beispielsweise ist der Input die Energie an seinen Anschlüssen, der Nutzoutput die mechanische Arbeit an der Welle. Erwärmung der Wicklungen und Reibung gelten als Verluste. Wenn Sie ein anderes Kabel und eine andere Quelle in das System einbeziehen, kommen Kabelerwärmung und Quellenverluste zu den Verlusten hinzu. Daher ist es wichtig, vor der Berechnung zu benennen, wessen Energie Sie ermitteln.",
          "Schreiben Sie bekannte Größen mit Einheiten, wählen Sie ein einheitliches System, setzen Sie die Zahlen ein und überprüfen Sie die Maße separat. Wenn Sie einen Job in Joule gefunden haben, aber die Antwort in Kilowattstunden benötigen, führen Sie die Umrechnung erst am Ende durch. Für einen normalen Verbraucher kann die nutzbare Energie nicht größer sein als die insgesamt aufgenommene Energie; Eine negative Durchflussrate weist oft auf eine falsche Subtraktionsreihenfolge hin.",
        ],
        callout: {
          type: "insight",
          title: "Energie und Leistung beantworten unterschiedliche Fragen",
          text: "Energie beantwortet die Frage „Wie viel wird insgesamt übertragen?“, Energie beantwortet die Frage „Wie schnell wird übertragen?“ Ein 2-kW-Gerät erhält in 15 Minuten und ein 1-kW-Gerät in 30 Minuten die gleiche Energie: 0,5 kWh.",
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
          "Energie wird elektrisch übertragen und in andere Formen umgewandelt.",
      },
      {
        term: "Elektrische Arbeit",
        german: "Elektrische Arbeit",
        symbol: "A, W",
        unit: "J",
        definition:
          "Energie, die übertragen wird, wenn sich eine Ladung durch ein elektrisches Feld bewegt. In deutschen Formeln wird Arbeit oft mit W bezeichnet.",
      },
      {
        term: "Wärmemenge",
        german: "Wärmemenge",
        symbol: "Qheat",
        unit: "J",
        definition:
          "In Form von Wärme übertragene Energie; für einen Widerstand bei konstantem Strom ist gleich I²Rt.",
      },
      {
        term: "Kilowattstunde",
        german: "Kilowattstunde",
        symbol: "kWh",
        unit: "3,6 MJ",
        definition:
          "Energie, die bei einer Leistung von einem Kilowatt in einer Stunde gewonnen wird.",
      },
      {
        term: "Joulesches Gesetz",
        german: "Joulesches Gesetz",
        symbol: "Qheat = I²Rt",
        unit: "J",
        definition:
          "Zusammenhang zwischen im Widerstand freigesetzter Wärme und Strom, Widerstand und Zeit.",
      },
      {
        term: "Elektrizitätszähler",
        german: "Elektrizitätszähler",
        symbol: "E",
        unit: "kWh",
        definition:
          "Ein Gerät, das die während des Betriebs übertragene elektrische Energie aufsummiert.",
      },
    ],
    summary: [
      "Energie wird in einem Stromkreis übertragen; die elektrische Ladung wird vom Verbraucher nicht verbraucht.",
      "Bei konstanter Spannung und konstantem Strom ist die Arbeit A = U · I · t; Wenn t in Sekunden angegeben wird, wird das Ergebnis in Joule angegeben.",
      "1 Wh = 3600 J und 1 kWh = 3.600.000 J.",
      "Die im Widerstand bei konstantem I und R erzeugte Wärme ist gleich I²Rt.",
      "Der Energieverbrauch hängt von der Leistung und der tatsächlichen Betriebszeit ab; Die Kosten hängen zusätzlich vom Tarif ab.",
      "Watt ist eine Leistungseinheit, Wattstunde ist eine Energieeinheit.",
    ],
    quiz: [
      {
        id: "energy-1",
        type: "choice",
        question:
          "Was passiert mit der Ladung, wenn sie im stationären Zustand durch die Lampe fließt?",
        options: [
          "Verwandelt sich vollständig in Licht",
          "Verbraucht im Verhältnis zur Leistung",
          "Tritt in gleicher Menge aus der Lampe aus und überträgt dabei einen Teil der Energie",
          "Sammelt sich unbegrenzt in der Lampe an",
        ],
        answer: 2,
        explanation:
          "Die Ladung bleibt erhalten. Bei einer Reihenschaltung ist der Strom am Ein- und Ausgang der Lampe gleich; Die Lampe erhält elektrische Energie.",
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
          "A = UIt = 24 2 30 = 1440 J. Die Zeit ist bereits in Sekunden eingestellt.",
      },
      {
        id: "energy-3",
        type: "choice",
        question: "Welcher Eintrag ist richtig?",
        options: [
          "1 kWh = 1000 J",
          "1 kWh = 3600 J",
          "1 kWh = 3.600.000 J",
          "1 kWh = 3.600.000 W",
        ],
        answer: 2,
        explanation:
          "1 kWh = 1000 W · 3600 s = 3.600.000 J. Leistung und Energie haben unterschiedliche Einheiten.",
      },
      {
        id: "energy-4",
        type: "numeric",
        question:
          "Das Gerät verbraucht 2,5 Stunden lang konstant 0,8 kW. Wie viel Energie erhält es in kWh?",
        answer: 2,
        unit: "kWh",
        tolerance: 0.01,
        explanation:
          "E = Pt = 0,8 · 2,5 = 2 kWh. Es ist keine zusätzliche Zeitumstellung erforderlich: Sie ist bereits in der Uhr vorhanden.",
      },
      {
        id: "energy-5",
        type: "choice",
        question:
          "Der Strom durch den Widerstand wurde verdoppelt. R und Zeit haben sich nicht geändert. Wie verändert sich die freigesetzte Wärme?",
        options: [
          "Wird um das 2-fache erhöht",
          "Wird um das Vierfache erhöht",
          "Wird um das Zweifache verringert",
          "Wird sich nicht ändern",
        ],
        answer: 1,
        explanation:
          "Nach dem Joule-Lenz-Gesetz ist Qheat = I²Rt. Eine Verdoppelung des Stroms ergibt einen Multiplikator von 2² = 4.",
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
      "Lernen Sie, Leistung mit Spannung und Strom in Beziehung zu setzen, Nennwerte zu lesen und zwischen schnellem Energieverbrauch und großen Energiereserven zu unterscheiden.",
    objectives: [
      "Erklären Sie Leistung als Energieübertragungsrate und wenden Sie P = A/t an.",
      "Wählen Sie die Formeln P = UI, P = I²R und P = U²/R unter Berücksichtigung der Problembedingungen.",
      "Berechnen Sie die Stromkreislast und unterscheiden Sie zwischen Nenn-, Eingangs- und Nettoleistung.",
    ],
    sections: [
      {
        id: "power-rate",
        title: "1. Leistung: Energie pro Zeiteinheit",
        paragraphs: [
          "Zwei Heizgeräte können die gleiche Energie auf Wasser übertragen, allerdings zu unterschiedlichen Zeiten. Wer es schneller macht, entwickelt mehr Kraft. Leistung zeigt die Geschwindigkeit an, mit der Energie übertragen oder umgewandelt wird: P = A/t für die durchschnittliche Leistung über einen ausgewählten Zeitraum. Ein Watt bedeutet ein Joule pro Sekunde.",
          "Während des Betriebs sammelt sich Energie an, und die Leistung charakterisiert den aktuellen Modus oder den Durchschnitt über das Intervall. Ein 100-Wh-Akku kann eine ideale 10-W-Last etwa 10 Stunden lang oder 50 W etwa 2 Stunden lang mit Strom versorgen. Tatsächlich hängt die Zeit auch von den Verlusten des Wandlers, dem Lastmodus und der verfügbaren Batteriekapazität ab.",
        ],
        formula: {
          expression: "P=A/t; 1 W = 1 J/s",
          legend:
            "P – durchschnittliche Leistung, W; A – übertragene Energie, J; t – Zeit, s.",
          note: "Für konstante Leistung A = Pt. Bei variierender Leistung ist die Energie gleich der Fläche unter dem Diagramm P(t).",
        },
        callout: {
          type: "tip",
          title: "Verwechseln Sie keine ähnlichen Symbole",
          text: "In der deutschen Schreibweise kann das W für Arbeit stehen, und das W nach der Zahl ist das internationale Symbol für Watt. Die Bedeutung ergibt sich aus dem Kontext und den Einheiten: Arbeit wird in J gemessen, Leistung in W.",
        },
      },
      {
        id: "power-ui",
        title: "2. Warum ist die elektrische Leistung gleich U I?",
        paragraphs: [
          "Die Spannung U zeigt die Energie pro Coulomb und der Strom I die Anzahl der pro Sekunde fließenden Coulomb. Das Produkt ergibt Energie pro Sekunde: (J/C) · (C/s) = J/s. Bei konstanter Spannung und konstantem Strom beträgt die Leistung des elektrischen Verbrauchers daher P = U · I.",
          "Diese Formel beschreibt die gesamte elektrische Leistung am Eingang des Geräts. Sie sagt noch nicht, welcher Bruchteil sich in nützliche Bewegung oder Licht verwandeln wird. Beispielsweise erhält der Motor bei 12 V und 3 A eine elektrische Leistung von 36 W; Seine mechanische Leistung an der Welle ist aufgrund von Wärme, Reibung und anderen Verlusten normalerweise geringer.",
          "Bei Wechselstrom ist die Momentanleistung ebenfalls gleich u(t) · i(t), aber das Produkt der Effektivwerte von Spannung und Strom ergibt im allgemeinen Fall die Scheinleistung in Voltampere. Die Wirkleistung hängt vom Leistungsfaktor ab. In diesem Stadium wird die Formel P = UI ohne zusätzliche Korrekturen auf Gleichstrom oder eine rein ohmsche Wechselstromlast mit Effektivwerten angewendet.",
        ],
        formula: {
          expression: "P = U · I; I = P / U; U = P / I",
          legend:
            "P – elektrische Leistung, W; U ist die Spannung am Verbraucher, V; I ist der Strom durch den Verbraucher, A.",
          note: "U und I müssen sich auf denselben Verbraucher und dieselbe Betriebsart beziehen.",
        },
        example: {
          title: "Leistung des LED-Moduls",
          given:
            "Das Modul wird zusammen mit dem Treiber mit einer Gleichspannung von 24 V betrieben und verbraucht einen Strom von 0,75 A. Finden Sie die Eingangsleistung und Energie in 2 Stunden.",
          steps: [
            "Elektrische Eingangsleistung: P = UI = 24 · 0,75 = 18 W.",
            "Energie für 2 Stunden: E = Pt = 18 2 = 36 Wh.",
            "In kWh umrechnen: 36 / 1000 = 0,036 kWh.",
            "Wir nennen 18 W Lichtleistung nicht: Ein Teil der Energie wird in Form von Wärme freigesetzt.",
          ],
          answer:
            "Eingangsleistung – 18 W, Energie für 2 Stunden – 36 Wh oder 0,036 kWh.",
        },
      },
      {
        id: "power-resistance",
        title: "3. Einschaltwiderstand",
        paragraphs: [
          "Für einen Abschnitt, der dem Ohmschen Gesetz gehorcht, kann U = IR durch P = UI ersetzt werden. Es stellt sich heraus, dass P = I²R ist. Wenn wir anstelle von Strom I = U/R einsetzen, erhalten wir P = U²/R. Es ist eine körperliche Sucht in drei praktischen Formen. Sie müssen denjenigen auswählen, für den die Werte bekannt sind.",
          "Auf den ersten Blick scheint es ein Widerspruch zu sein, dass in der einen Formel die Kraft mit dem Widerstand zunimmt, während sie in der anderen abnimmt. Es besteht kein Widerspruch: P = I²R vergleicht Fälle bei gleichem Strom und P = U²/R – bei gleicher Spannung. Bei Anschluss an eine ideale Konstantspannungsquelle führt eine Erhöhung des Widerstands zu einer Verringerung von Strom und Leistung.",
          "Widerstand und zulässige Leistung sind unterschiedliche Eigenschaften eines Widerstands. Zwei 100-Ohm-Widerstände können Leistungsgrenzen von 0,25 W und 2 W haben. Bei gleicher Spannung ist ihre Ausgangsleistung gleich, aber ein kleiner Widerstand kann überhitzen. Dabei werden auch die Kühlbedingungen und Temperaturgrenzen aus der Dokumentation berücksichtigt.",
        ],
        formula: {
          expression: "P = I² · R = U² / R",
          legend:
            "R ist der Widerstand des Widerstandsabschnitts, Ohm; I ist der Strom durch ihn, A; U ist die Spannung darüber, V.",
          note: "Wenn sich die Spannung an einem konstanten Widerstand verdoppelt, erhöht sich die Leistung um das Vierfache.",
        },
        example: {
          title: "Auswahl eines Widerstands nach Leistung",
          given:
            "Ein 100-Ohm-Widerstand wird an eine Gleichspannung von 10 V angeschlossen. Kann ein Widerstand mit einer Leistung von 0,25 W verwendet werden?",
          steps: [
            "Strom: I = U/R = 10/100 = 0,1 A.",
            "Leistungsabgabe: P = U²/R = 10²/100 = 1 W.",
            "Überprüfen Sie: UI = 10 · 0,1 = 1 W.",
            "1 W ist viermal größer als 0,25 W. Sie benötigen einen Widerstand mit einer geeigneten Nennleistung und einem Spielraum für die Kühlbedingungen, beispielsweise 2 W unter geeigneten Bedingungen.",
          ],
          answer:
            "Leistung - 1 W. Ein 0,25-W-Widerstand ist für diesen Modus nicht geeignet.",
        },
      },
      {
        id: "power-rating",
        title: "4. Was bedeutet die Leistung auf der Platte?",
        paragraphs: [
          "Die Bewertung beschreibt bestimmte Betriebsbedingungen. Bei einem Heizgerät bedeutet die Angabe 230 V, 2000 W Leistung bei Nennspannung und eingestellter Betriebsart. Wenn sich die Spannung ändert, ändert sich auch die Leistung; es gilt die näherungsweise Abhängigkeit P = U²/R, wenn der Widerstand als unverändert betrachtet werden kann.",
          "Das Netzteil mit der Bezeichnung 12 V, 5 A kann unter den vom Hersteller angegebenen Bedingungen bis zu 60 W liefern. Es zwingt keine Last, 5 A zu verbrauchen: Der Strom wird durch die angeschlossene Last bestimmt. Der Eigenverbrauch aus dem Netz wird um den Betrag der Verluste größer sein als die Ausgangsleistung. Auf dem Typenschild des Motors kann die mechanische Leistung angegeben sein, daher müssen Sie die Bezeichnungen und die Dokumentation lesen.",
          "Auch der Standby-Modus kann Strom verbrauchen. Bei geringer Leistung, aber über längere Zeit, macht sich der kumulierte Verbrauch bemerkbar: 5 W in 24 Stunden ergeben 120 Wh. Die höchste Wattzahl eines Gerätes bedeutet daher nicht immer den höchsten monatlichen Verbrauch.",
        ],
        callout: {
          type: "insight",
          title: "Maximale Leistung und tatsächlicher Verbrauch",
          text: "Um die Energie zu berechnen, benötigen Sie den tatsächlichen Modus und um die Zulässigkeit der Last zu beurteilen, benötigen Sie die Grenzeigenschaften der Quelle, der Leiter und des Verbrauchers selbst.",
        },
      },
      {
        id: "power-total",
        title: "5. Mehrere Geräte: Stromzusatz",
        paragraphs: [
          "Die Kapazitäten der einzelnen Verbraucher summieren sich. Wenn zwei 12-W-Lasten und eine 24-W-Last parallel an eine 12-V-Quelle angeschlossen sind, beträgt die Gesamtleistung 48 W und der gesamte Quellenstrom 48/12 = 4 A. Die Zweigströme addieren sich, die Spannung an den Parallelzweigen ist gleich.",
          "In einer Reihenschaltung ist der Strom gleich, aber die Leistung wird als I²R auf die Widerstände verteilt: Der größere Widerstand erhält mehr Leistung. Bei Parallelschaltung ist die Spannung gleich, die Leistung ist also umgekehrt proportional zum Widerstand. Bestimmen Sie vor dem Vergleich von Elementen immer die Art der Verbindung.",
          "In einer realen Installation werden die zulässigen Ströme und Leistungen der Geräte überprüft. Das bloße Addieren der Wattangaben auf dem Typenschild ist kein Ersatz für die Verkabelung und Schutzkonstruktion, insbesondere bei Einschaltströmen und Wechselströmen. Für pädagogische Experimente ist es bequemer, eine sichere Niederspannungsquelle mit Strombegrenzung zu verwenden.",
        ],
        formula: {
          expression: "Ptotal = P₁ + P₂ + …; Itot = Ptot / U",
          legend:
            "Die letzte Formel bezieht sich auf die Gesamtbelastung der Gleichspannungsquelle U.",
          note: "Die elektrische Eingangsleistung des Systems umfasst die Leistung aller Lasten und Verluste zwischen der Quelle und den Lasten.",
        },
      },
      {
        id: "power-measure",
        title: "6. So bestimmen Sie die Leistung und überprüfen das Ergebnis",
        paragraphs: [
          "In einem Gleichstromkreis können Sie die Spannung an der Last und den Strom durch sie messen und die Ergebnisse dann multiplizieren. Das Voltmeter wird parallel zur Last geschaltet, das Amperemeter in Reihe. Das Amperemeter sollte nicht direkt an die Quellenklemmen angeschlossen werden: Sein geringer Innenwiderstand kann einen Kurzschluss verursachen.",
          "Eine andere Möglichkeit besteht darin, die Energie über einen bekannten Zeitraum zu messen und die durchschnittliche Leistung Pav = ΔE/Δt zu berechnen. Wenn der Zähler 2 Stunden lang 0,6 kWh anzeigte, beträgt die durchschnittliche Leistung 0,3 kW, obwohl das Gerät während dieser Stunden ein- und ausgeschaltet werden konnte. Unterscheiden Sie diesen Durchschnittswert von der Leistung im eingeschalteten Zustand.",
        ],
        callout: {
          type: "tip",
          title: "Schnelle Überprüfung der Einheiten",
          text: "J/s ergibt Watt, kWh/h ergibt Kilowatt. Wenn Sie nach der Berechnung der Leistung nur noch die Einheit „Stunde“ übrig haben, prüfen Sie, ob Sie die Energie durch die Zeit dividiert haben.",
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
          "Geschwindigkeit der Energieübertragung oder -umwandlung; Die durchschnittliche Leistung ist gleich der Energie dividiert durch die Zeit.",
      },
      {
        term: "Watt",
        german: "Watt",
        symbol: "W, W",
        unit: "J/s",
        definition:
          "Leistungseinheit: Übertragung von einem Joule Energie pro Sekunde.",
      },
      {
        term: "Nennleistung",
        german: "Nennleistung",
        symbol: "Pₙ",
        unit: "W",
        definition:
          "Vom Hersteller angegebene Leistung unter angegebenen Nennbetriebsbedingungen.",
      },
      {
        term: "Aufnahmeleistung",
        german: "Aufnahmeleistung",
        symbol: "P_zu",
        unit: "W",
        definition: "Die Leistung, die das System von der Quelle erhält.",
      },
      {
        term: "Abgabeleistung",
        german: "Abgabeleistung",
        symbol: "Schmollmund",
        unit: "W",
        definition:
          "Die vom System übertragene Ausgangsleistung, beispielsweise mechanische Leistung an einer Welle.",
      },
      {
        term: "Verlustleistung",
        german: "Verlustleistung",
        symbol: "Psweat",
        unit: "W",
        definition:
          "Der Teil der Eingangsleistung, der nicht in vorgesehene Nutzleistung umgewandelt wird.",
      },
    ],
    summary: [
      "Leistung beschreibt die Geschwindigkeit der Energieübertragung: P = A/t, 1 W = 1 J/s.",
      "Bei Gleichstrom beträgt die elektrische Leistung des Verbrauchers P = UI.",
      "Für den ohmschen Widerstand gelten auch P = I²R und P = U²/R.",
      "Beim Vergleich von Widerständen klären Sie, was konstant ist: Strom oder Spannung.",
      "Nennleistung, zulässige Leistung und tatsächliche Leistung weisen auf unterschiedliche Bedingungen hin.",
      "Die Energie pro Intervall ist gleich dem Produkt aus konstanter Leistung und Zeit, die Verbraucherleistungen werden addiert.",
    ],
    quiz: [
      {
        id: "power-1",
        type: "choice",
        question: "Was bedeutet 20 W Leistung?",
        options: [
          "In diesem Modus erhält das Gerät pro Sekunde 20 J Energie",
          "Das Gerät erhält 20 J pro Stunde",
          "Das Gerät speichert 20 Wh",
          "Durch das Gerät muss ein Strom von 20 A fließen.",
        ],
        answer: 0,
        explanation:
          "1 W = 1 J/s, also bedeuten 20 W eine Energieübertragungsrate von 20 J pro Sekunde.",
      },
      {
        id: "power-2",
        type: "numeric",
        question:
          "Bei einer konstanten Spannung von 12 V beträgt der Laststrom 2,5 A. Ermitteln Sie die Eingangsleistung.",
        answer: 30,
        unit: "W",
        tolerance: 0.1,
        explanation: "P = UI = 12 · 2,5 = 30 W.",
      },
      {
        id: "power-3",
        type: "choice",
        question:
          "Die Spannung an einem konstanten Widerstand wurde verdoppelt. Wie wird sich seine Macht verändern?",
        options: [
          "Wird halbiert",
          "Wird sich verdoppeln",
          "Wird sich vervierfachen",
          "Wird gleich bleiben",
        ],
        answer: 2,
        explanation:
          "Bei konstantem R ist die Leistung P = U²/R. Die Verdoppelung von U vervierfacht U².",
      },
      {
        id: "power-4",
        type: "numeric",
        question:
          "Ein 20-Ohm-Widerstand wird an eine Gleichspannung von 10 V angeschlossen. Wie viel Leistung verbraucht er?",
        answer: 5,
        unit: "W",
        tolerance: 0.01,
        explanation: "P = U²/R = 10²/20 = 5 W. Prüfen: I = 0,5 A, UI = 5 W.",
      },
      {
        id: "power-5",
        type: "choice",
        question:
          "Ein 12-V-5-A-Netzteil ist an eine funktionierende 12-V-Last angeschlossen, die 1 A verbraucht. Wie hoch ist die Ausgangsleistung in diesem Modus?",
        options: [
          "60W, weil es so auf dem Block steht",
          "12 W, weil P = 12 1",
          "5 W, da der Gerätestrom 5 A beträgt",
          "Sie entspricht zwangsläufig der Leistung aus der Steckdose",
        ],
        answer: 1,
        explanation:
          "Der zulässige Ausgangsstrom des Gerätes beträgt 5 A, der tatsächliche Strom beträgt 1 A. Die Ausgangsleistung beträgt 12 W; Der Input beinhaltet zusätzlich Verluste.",
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
      "Verfolgen Sie den Weg der Energie vom Input bis zum nutzbaren Ergebnis, berechnen Sie die Verluste und den Gesamtwirkungsgrad mehrerer Umwandlungsstufen.",
    objectives: [
      "Bestimmen Sie die Grenzen des Systems und unterscheiden Sie zwischen empfangener, nutzbarer und verlorener Energie.",
      "Berechnen Sie den Wirkungsgrad in Bruchteilen und Prozentsätzen der Energie oder Leistung.",
      "Ermitteln Sie die Eingangsleistung, die Verluste und den Gesamtwirkungsgrad der Wandlerkette.",
    ],
    sections: [
      {
        id: "efficiency-meaning",
        title: "1. Das brauchbare Ergebnis hängt von der Aufgabe ab",
        paragraphs: [
          "Dieselbe Art von Energie kann bei einem Gerät zu einem Nutzen und bei einem anderen zu einem Verlust führen. Die Wärme von der Spule ist der Zweck der Heizung, und die Erwärmung der Motorwicklungen verringert normalerweise den Anteil der für mechanische Arbeit verfügbaren Energie. Deshalb formulieren sie vor der Berechnung der Effizienz zunächst, welche Funktion das System erfüllen soll.",
          "Der Wirkungsgrad gibt an, welcher Anteil der aufgenommenen Energie nutzbar wird. Bei einem Motor wird die mechanische Arbeit an der Welle mit der elektrischen Energie am Eingang verglichen. Bei einem Ladegerät kann man die an den Anschlüssen an die Batterie übertragene Energie mit der Energie aus dem Netz vergleichen; Wenn die Energie benötigt wird, die später von der Batterie zurückgegeben wird, müssen die Grenzen der Berechnung erweitert werden.",
          "Verluste bedeuten nicht die Zerstörung von Energie. Energie wird gespart, aber ein Teil davon geht in Formen über, die die gewählte nützliche Funktion nicht erfüllen: Erwärmung der Umgebung, Reibung, Schall, Streulicht. Durch die Reduzierung dieser Verluste können Sie das gleiche Ergebnis mit weniger Eingangsfluss erzielen.",
        ],
        callout: {
          type: "insight",
          title: "Zeichnen Sie zunächst den Rand",
          text: "Geben Sie den Input, den Nutzoutput und die Verluste desselben Systems an. Es ist unmöglich, die Eingangsleistung nur des Motors und die Nutzleistung der gesamten Anlage mit einer zusätzlichen Energiequelle zu nutzen.",
        },
      },
      {
        id: "efficiency-formula",
        title: "2. Effizienz in Anteilen und Prozentsätzen",
        paragraphs: [
          "Effizienz wird mit dem griechischen Buchstaben η bezeichnet, der „eta“ lautet. Dies ist das Verhältnis von Nutzenergie zu empfangener Energie: η = E_nutz/Ein. Wenn das Gerät 100 J erhielt und die Nutzleistung 80 J betrug, ist η = 0,8 = 80 %. Das Verhältnis selbst ist dimensionslos, da sich Energieeinheiten aufheben.",
          "Im stationären Betrieb sind die Energien für den gleichen Zeitraum gleich den Produkten der Leistungen und dieser Zeit. Dann ist η = P_nutz/P_zu. Wenn das Gerät startet, beschleunigt oder Energie speichert, beschreibt das Verhältnis der Momentanleistungen möglicherweise nicht die Effizienz des gesamten Prozesses: Es ist notwendig, die Änderung der Energiereserve zu berücksichtigen und die Energien des gesamten ausgewählten Zyklus zu vergleichen.",
          "Für einen herkömmlichen Konverter ohne zusätzliche unberücksichtigte Quelle liegt η zwischen 0 und 1. Bei Trainingsproblemen kann ein ideales Gerät 100 % haben, ein reales System weist jedoch normalerweise Verluste auf. Der Wert von 85 % sollte beim Einsetzen in die Formel als 0,85 und nicht als 85 geschrieben werden.",
        ],
        formula: {
          expression: "η = E_nutz / Ein; η = P_nutz / P_zu; η% = η 100%",
          legend:
            "E_nutz und P_nutz – Nutzenergie und Leistung; E_zu und P_zu – Energie und Leistung am Eingang.",
          note: "Vergleichen Sie gleiche Zeitintervalle und konsistente Systemgrenzen. Energie oder Leistung im Verhältnis müssen die gleichen Einheiten haben.",
        },
        example: {
          title: "Wirkungsgrad des Elektromotors",
          given:
            "Der im Dauerbetrieb arbeitende Motor erhält eine elektrische Leistung von 1200 W und gibt 960 W an die Welle ab.",
          steps: [
            "Wir ermitteln die Nutzleistung: mechanische Leistung an der Welle P_nutz = 960 W.",
            "Eingangsleistung P_zu = 1200 W.",
            "Effizienz in Bruchteilen: η = 960/1200 = 0,8.",
            "Effizienzprozentsatz: 0,8 · 100 % = 80 %.",
            "Verluste: P_Verlust = 1200 − 960 = 240 W.",
          ],
          answer: "Wirkungsgrad - 80 %, Verlustleistung - 240 W.",
        },
      },
      {
        id: "efficiency-balance",
        title: "3. So finden Sie Einstieg, Ausstieg und Verluste",
        paragraphs: [
          "Wenn die Energieakkumulation vernachlässigt werden kann, hat die Energiebilanz die Form Ein = E_nutz + E_Verlust. Ähnliches gilt für den stationären Zustand P_zu = P_nutz + P_Verlust. Der für die Nutzfunktion verlorene Bruchteil ist 1 − η. Bei einem Wirkungsgrad von 80 % sind 80 % des Inputs nützlich und 20 % werden verschwendet.",
          "Wenn das gewünschte nützliche Ergebnis bekannt ist, wird die Eingabe durch Division durch die Effizienz ermittelt: P_zu = P_nutz/η. Diese Aktion erhöht die Zahl, wenn η kleiner als eins ist, was physikalisch korrekt ist: Die Quelle muss mehr liefern, als sie die nutzbare Leistung erreicht. Wenn der Eingang bekannt ist, erhält man die Nutzleistung durch Multiplikation: P_nutz = η · P_zu.",
          "Sie können Verluste nicht als Prozentsatz des Nutzoutputs berechnen, wenn der Wirkungsgrad relativ zum Input ermittelt wird. Beispielsweise beträgt bei P_nutz = 800 W und η = 80 % der Input 1000 W und der Verlust 200 W. Eine Anzahl von 20 % von 800 W würde 160 W erzeugen und das vorgegebene Verhältnis verletzen.",
        ],
        formula: {
          expression:
            "P_nutz = η · P_zu; P_zu = P_nutz / η; P_Verlust = P_zu · (1 − η)",
          legend:
            "η wird als Bruch eingesetzt: 75 % = 0,75. Die gleichen Formelumwandlungen gelten für Energien.",
          note: "Die Bilanzform ohne gesonderten Akkumulationsterm gilt für einen stationären Zustand oder einen vollständigen Zyklus mit gleicher Energiereserve am Anfang und am Ende.",
        },
      },
      {
        id: "efficiency-stages",
        title: "4. Aufeinanderfolgende Phasen der Transformation",
        paragraphs: [
          "In einem realen Gerät durchläuft Energie oft mehrere Stufen: Netzwerk, Stromversorgung, Motor, Getriebe. Der Output einer Stufe wird zum Input der nächsten. Wenn die erste Stufe 90 % der Energie behält und die zweite 80 % der ihr zugeführten Energie, bleiben nach beiden 0,9 · 0,8 = 0,72 der ursprünglichen Energie übrig.",
          "Die Gesamteffizienz einer sequentiellen Kette ist gleich dem Produkt der Effizienz der Stufen und nicht deren Summe und nicht dem arithmetischen Durchschnitt. Bei dieser Regel wird davon ausgegangen, dass ein aufeinanderfolgender Energiefluss berücksichtigt wird, ohne zusätzliche nicht berücksichtigte Eingänge oder Verzweigungen. Wenn eine separate Kühl- oder Steuerversorgung vorhanden ist, wird deren Verbrauch zur Gesamtsystemleistung addiert.",
        ],
        formula: {
          expression: "ηtotal = η₁ · η₂ · … · ηₙ",
          legend:
            "η₁, η₂, … – Effizienz aufeinanderfolgender Stufen, ausgedrückt in Brüchen.",
          note: "Das Produkt der Teile ist kleiner oder gleich jedem von ihnen. Der Gesamtwirkungsgrad zweier realer Stufen erhöht sich durch das Hinzufügen einer weiteren Stufe nicht.",
        },
        example: {
          title: "Netzteil und Motor",
          given:
            "Sie müssen 180 W auf die Welle bringen. Der Wirkungsgrad des Netzteils beträgt 90 %, der Wirkungsgrad des Motors 80 %. Es gibt keine anderen Verbraucher. Ermitteln Sie die Gesamteingangsleistung und die Verluste.",
          steps: [
            "Gesamtwirkungsgrad: ηtotal = 0,9 · 0,8 = 0,72, also 72 %.",
            "Motorleistung: 180/0,8 = 225 W.",
            "Netzteileingang: 225/0,9 = 250 W.",
            "Motorverluste: 225 − 180 = 45 W; Blockverlust: 250 − 225 = 25 W.",
            "Gesamtverluste: 45 + 25 = 70 W. Bilanzprüfung: 250 = 180 + 70.",
          ],
          answer:
            "Der Gesamtwirkungsgrad beträgt 72 %, 250 W Eingangsleistung erforderlich, Verlust 70 W.",
        },
      },
      {
        id: "efficiency-operating",
        title: "5. Warum Effizienz vom Modus abhängt",
        paragraphs: [
          "Effizienz ist nicht immer eine konstante Eigenschaft. Einige der Verluste sind nahezu konstant: zum Beispiel der Verbrauch der Steuerelektronik. Der andere Teil steigt mit der Stromstärke: Die Erwärmung der Leiter entspricht etwa I²R. Bei geringer Last machen konstante Verluste einen großen Teil der Eingangsleistung aus, und bei zu hohen Strömen steigen die Wärmeverluste schnell an.",
          "Daher werden Geräte unter gleicher Nutzlast und geeigneten Betriebsbedingungen verglichen. Die Aufschrift „Wirkungsgrad bis zu 95 %“ bedeutet ein Maximum an einem bestimmten Punkt und nicht garantierte 95 % bei jeder Belastung. Zur Berechnung für einen Tag können Sie die Gesamtenergien für den Tag vergleichen; Der arithmetische Durchschnitt der Effizienz verschiedener Modi entspricht normalerweise nicht dieser Energieeffizienz.",
          "Eine Steigerung der Effizienz verringert den Inputfluss bei gleichem Nutzergebnis, hebt jedoch nicht den Effekt der Nutzungsdauer auf. Ein hocheffizientes Gerät, das 24 Stunden am Tag läuft, verbraucht möglicherweise mehr Energie als ein weniger effizientes Gerät, das nur für kurze Zeiträume läuft. Um die Einsparungen abzuschätzen, ist es notwendig, die gleiche nützliche Aufgabe und Zeit beizubehalten.",
        ],
        callout: {
          type: "tip",
          title: "Messbedingungen prüfen",
          text: "Der Vergleich ist sinnvoll, wenn Belastung, Eingangsbedingungen und Dosiergrenzen bekannt sind. Beispielsweise sind der Wirkungsgrad eines Motors und der Wirkungsgrad der gesamten Anlage mit Getriebe unterschiedliche Indikatoren.",
        },
      },
      {
        id: "efficiency-heat-pump",
        title: "6. Effizienz und Umrechnungsfaktor sind unterschiedliche Werte",
        paragraphs: [
          "Manchmal gibt es in Heizungswerbung Zahlen von 300 % oder 400 %. Bei einer Wärmepumpe ist dies in der Regel der Umrechnungsfaktor COP: das Verhältnis der an den Raum abgegebenen Wärme zur aufgewendeten elektrischen Energie. Die Pumpe überträgt zusätzliche Wärme aus der Außenluft, dem Boden oder dem Wasser, sodass ihre Wärmeabgabe größer sein kann als ihre elektrische Aufnahme.",
          "Der Energieerhaltungssatz wird nicht verletzt: Die Wärmeabgabe ist gleich der elektrischen Aufnahme plus der aus der Außenumgebung entnommenen Energie unter Berücksichtigung anderer Ströme. COP muss nicht als Wirkungsgrad eines herkömmlichen Wandlers mit einer einzigen Leistungsaufnahme interpretiert werden. Für Übungsaufgaben zu einem Motor, einem Widerstand oder einer Stromversorgung verwenden Sie das übliche Verhältnis des Nutzausgangs zum berücksichtigten Gesamteingang.",
        ],
        callout: {
          type: "insight",
          title:
            "Eine Antwort größer als 100 % ist ein Grund, das Modell zu überprüfen",
          text: "Überprüfen Sie Prozentsätze, Einheiten, Systemgrenzen, zusätzliche Energiequellen und zuvor angesammelte Reserven. Der Fehler kann nicht durch einfaches Runden des Ergebnisses auf 100 % korrigiert werden.",
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
          "Verhältnis von Nutzenergie zu aufgenommener Energie; im eingeschwungenen Zustand - das Verhältnis der entsprechenden Leistungen.",
      },
      {
        term: "Nutzenergie",
        german: "Nutzenergie",
        symbol: "E_nutz",
        unit: "J",
        definition:
          "Der Anteil der zugeführten Energie, der eine ausgewählte Nutzfunktion erfüllt.",
      },
      {
        term: "Verlustenergie",
        german: "Verlustenergie",
        symbol: "E_Verlust",
        unit: "J",
        definition:
          "Energie, die nicht zum gewählten positiven Ergebnis wurde, obwohl sie physisch nicht verschwand.",
      },
      {
        term: "Energiebilanz",
        german: "Energiebilanz",
        symbol: "Ein = Efloor + E_Verlust",
        unit: "J",
        definition:
          "Berücksichtigung aller eingehenden, ausgehenden und akkumulierten Energieströme im ausgewählten System.",
      },
      {
        term: "Gesamtwirkungsgrad",
        german: "Gesamtwirkungsgrad",
        symbol: "ηgesamt",
        unit: "Anteil oder %",
        definition:
          "Effizienz des gesamten Systems; für einen sequentiellen Fluss ohne zusätzliche Eingaben ist gleich dem Produkt der Effizienz der Stufen.",
      },
      {
        term: "Leistungszahl",
        german: "Leistungszahl",
        symbol: "COP",
        unit: "dimensionslos",
        definition:
          "Bei einer Wärmepumpe das Verhältnis von Wärmeabgabe zu Stromverbrauch; berücksichtigt die Energieübertragung aus der Umgebung und kann Eins überschreiten.",
      },
    ],
    summary: [
      "Die Effizienz wird bestimmt, nachdem die Grenzen des Systems und das nützliche Ergebnis ausgewählt wurden.",
      "η = E_nutz/Ein; im Dauerbetrieb η = P_nutz/P_zu.",
      "80 % wird in Formeln als 0,8 geschrieben; Die Verluste betragen 1 − η vom Eingang.",
      "Der erforderliche Input ist gleich dem Nutzoutput dividiert durch den Wirkungsgrad.",
      "Der Gesamtwirkungsgrad einer Reihenkette ist gleich dem Produkt aus dem Wirkungsgrad der Stufen.",
      "Verluste – die Umwandlung von Energie in Formen, die für die Aufgabe nicht nützlich sind; Energie bleibt erhalten.",
    ],
    quiz: [
      {
        id: "efficiency-1",
        type: "choice",
        question:
          "Wie lässt sich der Wirkungsgrad eines stationären Motors richtig bestimmen?",
        options: [
          "Elektrische Eingangsleistung geteilt durch mechanische Leistung",
          "Teilen Sie die mechanische Leistung auf der Welle durch die elektrische Aufnahme",
          "Addieren Sie Eingangsleistung und Verlustleistung",
          "Teilen Sie die Verlustleistung durch die Nutzleistung",
        ],
        answer: 1,
        explanation:
          "Eine nützliche Funktion eines Motors ist mechanische Arbeit. Der Wirkungsgrad ist gleich der nutzbaren Wellenleistung geteilt durch die vom Motor aufgenommene elektrische Leistung.",
      },
      {
        id: "efficiency-2",
        type: "numeric",
        question:
          "Die Eingangsleistung des Konverters beträgt 500 W, die Nutzleistung beträgt 400 W. Wie hoch ist der Wirkungsgrad?",
        answer: 80,
        unit: "%",
        tolerance: 0.1,
        explanation:
          "η = 400/500 = 0,8. Mit 100 % multiplizieren und 80 % erhalten.",
      },
      {
        id: "efficiency-3",
        type: "numeric",
        question:
          "Bei einem Wirkungsgrad von 75 % wird eine Nutzleistung von 180 W benötigt. Wie hoch ist die erforderliche Eingangsleistung?",
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
          "Zwei in Reihe geschaltete Stufen haben Wirkungsgrade von 80 % und 90 %. Wie hoch ist der Gesamtwirkungsgrad ohne zusätzliche Eingaben?",
        options: ["170 %", "85 %", "72 %", "10 %"],
        answer: 2,
        explanation:
          "ηtotal = 0,8 · 0,9 = 0,72 = 72 %. Nach der ersten Stufe erhält die zweite Stufe reduzierte Energie.",
      },
      {
        id: "efficiency-5",
        type: "choice",
        question: "Was bedeutet Motorleistungsverlust?",
        options: [
          "Energie hört auf zu existieren",
          "Ein Teil der Eingangsleistung wird nicht zur nutzbaren Wellenleistung",
          "Die gesamte Eingangsleistung wird in mechanische Leistung umgewandelt",
          "Die Nutzleistung ist zwangsläufig größer als die aufgenommene Leistung",
        ],
        answer: 1,
        explanation:
          "Energie bleibt erhalten. Hitze, Reibung und andere Prozesse reduzieren die für die ausgewählte Nutzarbeit zur Verfügung stehende Leistung.",
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
      "Elektrische Ladungen wechselwirken durch Felder. Lerne Feldlinien, Feldstärke, Kraft und den Zusammenhang zur Spannung kennen.",
    objectives: [
      "Erklären Sie die Feldstärke als Vektor und ermitteln Sie die Kraft auf eine positive oder negative Ladung.",
      "Setzen Sie das gleichmäßige Feld zwischen den Platten auf Spannung und Abstand.",
      "Feldstärke und Spannung unterscheiden, Felder überlagern und die Arbeit des elektrischen Feldes berechnen.",
    ],
    sections: [
      {
        id: "field-charge",
        title: "1. Ladungen interagieren durch ein Feld",
        paragraphs: [
          "Elektrische Ladung kann positiv oder negativ sein. Gleiche Ladungen stoßen ab, ungleiche Ladungen ziehen sich an. Um einen geladenen Körper herum herrscht ein elektrisches Feld: Eine andere dort platzierte Ladung erfährt eine elektrische Kraft. Das Feld ermöglicht es, die Interaktion als eine Aktion an jedem Punkt im Raum zu beschreiben und nicht nur als eine Kraft zwischen zwei ausgewählten Körpern.",
          "Um das Feld zu studieren, wird eine kleine positive Testladung gedanklich verwendet. Es sollte klein genug sein, um die Verteilung der ursprünglichen Ladungen kaum zu verändern. Die Richtung der Kraft auf diese Testladung wird als Richtung des elektrischen Feldes angesehen. Das Feld existiert ohne Testladung: Die Testladung hilft nur, es zu erkennen.",
          "Das Elektron hat eine negative Ladung −e, wobei e ≈ 1,602 · 10⁻¹⁹ C. Ein Proton hat eine Ladung von +e. Ein neutraler Körper hat eine Gesamtladung von Null, enthält aber positive und negative Ladungen. „Neutral“ bedeutet daher nicht „ohne Ladungsträger“.",
        ],
        callout: {
          type: "insight",
          title: "Das Feld gilt auch dort, wo kein Draht vorhanden ist",
          text: "Zwischen den Platten des Kondensators kann Luft oder Vakuum vorhanden sein, das elektrische Feld ist jedoch weiterhin vorhanden. Das Vorhandensein des Feldes erfordert keinen Gleichstrom durch diesen Spalt.",
        },
      },
      {
        id: "field-strength",
        title: "2. Feldstärke: Kraft pro Ladung",
        paragraphs: [
          "Die Stärke E charakterisiert das Feld an einem bestimmten Punkt. Sie ist definiert als das Verhältnis der Kraft auf eine positive Testladung zur Größe dieser Ladung: E ​​= F/q. Die Einheit N/C gibt an, wie viele Newton pro Coulomb positiver Ladung vorhanden wären. Die gleiche Einheit wird V/m geschrieben; es ist keine andere physikalische Größe.",
          "Die elektrische Feldstärke ist ein Vektor: Sie hat Größe und Richtung. Die Vektorverbindung hat die Form F⃗ = qE⃗. Bei positivem q ist die Kraft entlang des Feldes gerichtet, bei negativem q ist sie dem Feld entgegengesetzt gerichtet. Wenn nur die Größe der Kraft benötigt wird, nehmen Sie den Ladungsmodul: F = |q|E. Die Ladung des Elektrons ist negativ, daher ist die elektrische Kraft auf das Elektron gegen E⃗ gerichtet.",
          "Die Feldstärke ist unabhängig von der gewählten kleinen Prüfladung. Wenn die Testladung an einer Stelle verdoppelt wird, verdoppelt sich auch die Kraft, aber das F/q-Verhältnis bleibt gleich. In diesem Fall kann eine sehr große Testladung die Feldquelle selbst verändern und die ursprüngliche Annahme eines konstanten Feldes wird nicht mehr funktionieren.",
        ],
        formula: {
          expression: "E⃗ = F⃗ / q; F⃗ = q · E⃗; F = |q| · E",
          legend:
            "E: elektrische Feldstärke in N/C oder V/m; F: elektrische Kraft in N; q: elektrische Ladung in C. Bei negativen Ladungen sind Kraft und Feld entgegengesetzt gerichtet.",
          note: "Es ist praktisch, die Division gedanklich durchzuführen, um die Richtung für eine positive Testladung zu bestimmen. Das Vorzeichen der realen Ladung bestimmt die Richtung der Kraft.",
        },
        example: {
          title: "Kraft auf ein geladenes Teilchen",
          given:
            "In einem gleichmäßigen Feld E = 2000 N/C befindet sich rechts ein Teilchen mit einer Ladung q = −3 μC. Kraft finden.",
          steps: [
            "Wir übersetzen die Ladung: q = −3 · 10⁻⁶ C.",
            "Kraftmodul: F = |q|E = 3 · 10⁻⁶ · 2000 = 0,006 N.",
            "Die Ladung ist negativ, daher ist die Kraft entgegengesetzt zum Feld gerichtet – nach links.",
            "Sie können die Projektion auf die Achse rechts schreiben: Fx = qEx = −0,006 N.",
          ],
          answer:
            "Die Kraft beträgt 0,006 N bzw. 6 mN und ist nach links gerichtet.",
        },
      },
      {
        id: "field-lines",
        title: "3. So lesen Sie Feldlinien",
        paragraphs: [
          "Kraftlinien sind eine herkömmliche Zeichnung eines Feldes. Eine Tangente an eine Linie an einem beliebigen Punkt zeigt die Richtung der Feldstärke an. Bei einer einzelnen positiven Ladung sind die Linien nach außen gerichtet, bei einer negativen Ladung sind die Linien zur Ladung hin gerichtet. In der Elektrostatik beginnen Linien bei positiven Ladungen und enden bei negativen Ladungen oder gehen ins Unendliche.",
          "Wo die Linien im vereinbarten Muster dicker sind, ist das Feld stärker. Die Linien schneiden sich nicht: Ein Schnitt würde zwei unterschiedliche Richtungen des resultierenden Feldes an einem Punkt bedeuten. Die dargestellten Linien sind keine materiellen Fäden und zeigen nicht die Flugbahn des Teilchens: Die Bewegung hängt auch von der Anfangsgeschwindigkeit und anderen Kräften ab.",
          "Zwischen den großen parallelen Platten, entfernt von den Kanten, sind die Linien annähernd gerade, parallel und gleichmäßig verteilt. Ein solches Feld heißt homogen: Der Vektor E ist an allen betrachteten Punkten gleich. An den Rändern der Platte sind die Linien gekrümmt, sodass das Gleichfeldmodell dort weniger genau ist.",
        ],
        callout: {
          type: "tip",
          title: "Feldrichtung und Elektronenbewegung",
          text: "Das Feld zwischen den Platten ist von der positiven zur negativen Platte gerichtet. Die elektrische Kraft auf das Elektron ist auf die positive Platte gerichtet. Die Anfangsgeschwindigkeit des Elektrons kann unterschiedlich gerichtet sein.",
        },
      },
      {
        id: "field-voltage",
        title: "4. Anspannung und Anspannung sind nicht dasselbe.",
        paragraphs: [
          "Die Spannung U bezieht sich auf zwei Punkte und zeigt die Feldarbeit pro Ladungseinheit bei der Bewegung zwischen ihnen an. Die Spannung E bezieht sich auf einen Punkt und zeigt die Kraft pro Ladungseinheit an. Die gleiche Spannung zwischen den Platten erzeugt ein stärkeres Feld, wenn der Abstand zwischen ihnen kleiner ist.",
          "Für ein gleichmäßiges Feld zwischen parallelen Platten beträgt die Feldstärke E = U/d, wobei U der Spannungsmodul zwischen den Platten und d der Abstand in Metern ist. Die Formel ist abseits der Kanten näherungsweise anwendbar, wenn die Abmessungen der Platten im Vergleich zum Spalt groß sind. Bei einem ungleichförmigen Feld ergibt die einfache Division der Gesamtspannung durch einen beliebigen Abstand nicht das lokale Feld an jedem Punkt.",
          "In Richtung des elektrischen Feldes nimmt das Potential ab. Flächen gleichen Potentials nennt man Äquipotential; in der Elektrostatik stehen sie senkrecht zu den Feldlinien. Im Inneren eines Leiters im elektrostatischen Gleichgewicht ist das Feld Null und das Potential gleich. Diese Aussage ist nicht automatisch auf einen stromdurchflossenen Leiter zu übertragen.",
        ],
        formula: {
          expression: "E = U/d; U = E d; 1 N/C = 1 V/m",
          legend:
            "U ist der Spannungsmodul zwischen parallelen Platten, V; d – Lücke, m; E ist die Größe eines annähernd gleichmäßigen Feldes.",
          note: "Rechnen Sie vor dem Ersetzen Millimeter in Meter um: 1 mm = 0,001 m.",
        },
        example: {
          title: "Feld zwischen Platten",
          given:
            "Zwischen den großen Parallelplatten beträgt die Spannung 24 V, der Abstand beträgt 3 mm. Finden Sie das Feld entfernt von den Kanten und die Größe der Kraft pro Elektron.",
          steps: [
            "Abstand: d = 3 mm = 0,003 m.",
            "Feldstärke: E = U/d = 24/0,003 = 8000 V/m.",
            "Elektronenladungsmodul: e ≈ 1,602 · 10⁻¹⁹ C.",
            "Kraftmodul: F = eE ≈ 1,602 · 10⁻¹⁹ · 8000 = 1,2816 · 10⁻¹⁵ N.",
            "Das Feld ist von Plus nach Minus gerichtet, die Kraft auf das Elektron ist zur positiven Platte gerichtet.",
          ],
          answer:
            "E = 8000 V/m; die Kraft auf das Elektron beträgt etwa 1,28 · 10⁻¹⁵ N, in Richtung der positiven Platte.",
        },
      },
      {
        id: "field-point-superposition",
        title: "5. Punktladungsfeld und Überlagerung",
        paragraphs: [
          "Für eine Punktladung Q im Vakuum ist die Feldstärke im Abstand r gleich E = k|Q|/r², wobei k ≈ 8,99 · 10⁹ N m²/C². Die Entfernung wird von der Ladung aus gemessen. Die Formel beschreibt auch das äußere Feld einer sphärisch symmetrischen Ladungsverteilung. Bei einer Verdoppelung des Abstands verringert sich das Feld um den Faktor vier.",
          "Bei mehreren Quellen werden deren Felder als Vektoren addiert: E⃗tot = E⃗₁ + E⃗₂ + … . Gleichgerichtete Felder verstärken sich gegenseitig; die gegenteiligen werden teilweise oder vollständig kompensiert. Es ist unmöglich, nur numerische Module ohne Richtungen hinzuzufügen. In der Mitte zwischen zwei gleichen positiven Ladungen sind die Felder entgegengesetzt und das resultierende Feld ist Null.",
          "Bei entgegengesetzten Ladungen gleicher Größe ist die Situation anders: Das Feld einer positiven Ladung ist von ihr weg gerichtet, das Feld einer negativen Ladung ist darauf gerichtet. In der Mitte sind beide Vektoren von Plus nach Minus gerichtet und addieren sich. Dieses Beispiel hilft, ein elektrisches Feld von einem Potential zu unterscheiden: Nullpotential im gewählten Bezugssystem bedeutet nicht Nullfeld.",
        ],
        formula: {
          expression: "E = k |Q| /r²; E⃗total = E⃗₁ + E⃗₂ + …",
          legend:
            "Q – Quellladung, C; r – Abstand, m; k ≈ 8,99 · 10⁹ N m²/C² im Vakuum.",
          note: "In einem homogenen linearen Dielektrikum berücksichtigt das Coulomb-Modell dessen Dielektrizitätskonstante. Bei vielen einfachen Problemen wird Luft näherungsweise als Vakuum betrachtet.",
        },
      },
      {
        id: "field-work-materials",
        title: "6. Feldarbeit, Leiter und Dielektrika",
        paragraphs: [
          "Wenn sich eine Ladung von Punkt A nach Punkt B bewegt, wirkt das elektrische Feld Afield = q(φA − φB) = qUAB. Eine positive Ladung, die sich über ein Feld bewegt, verliert potentielle Energie; Die Feldarbeit ist positiv. Bei einer negativen Ladung ändert das Vorzeichen von q die Ausgabe. Potenzielle Differenz und Arbeit erfordern die Angabe der Start- und Endpunkte, nicht nur der Entfernung.",
          "Der Leiter enthält bewegliche Ladungsträger, die unter dem Einfluss des Feldes umverteilt werden. In einem Dielektrikum sind überwiegend Ladungen gebunden: Das Feld bewirkt eine Polarisation, also eine leichte Verschiebung positiver und negativer Ladungen bzw. die Ausrichtung von Dipolen. Die Polarisation verändert das resultierende Feld und liegt der Wirkungsweise des Dielektrikums in einem Kondensator zugrunde.",
          "Wenn die Spannung für ein bestimmtes Material und bestimmte Bedingungen zu groß wird, ist ein elektrischer Durchschlag möglich: Der Isolator beginnt zu leiten. Daher ist für die Isolierung nicht nur die Spannung wichtig, sondern auch Abstände, Form der Elektroden, Luftfeuchtigkeit und Materialeigenschaften. Verwenden Sie bei pädagogischen Experimenten sichere Niederspannungsquellen und vorgefertigte Schaltkreise; Geladene Kondensatoren können nach einem Stromausfall Energie speichern.",
        ],
        formula: {
          expression: "Afields = q UAB; ΔE_pot = −Afield",
          legend:
            "UAB = φA − φB – Spannung von A nach B, V; q – vorzeichenbehaftete Ladung, C; Afield – Feldarbeit, J.",
          note: "Dies ist die Arbeit eines elektrostatischen Feldes. Wirken neben dem Feld noch andere Kräfte, so wird die Änderung der kinetischen Energie durch die Gesamtarbeit aller Kräfte bestimmt.",
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
          "Das Feld, durch das elektrische Ladungen elektrische Kräfte erfahren; von Spannung geprägt.",
      },
      {
        term: "Elektrische Feldstärke",
        german: "Elektrische Feldstärke",
        symbol: "E⃗",
        unit: "N/C, V/m",
        definition:
          "Der Kraftvektor pro positiver Testladungseinheit an einem bestimmten Punkt.",
      },
      {
        term: "Feldlinie",
        german: "Feldlinie",
        symbol: "—",
        unit: "—",
        definition:
          "Eine konventionelle Linie, deren Tangente die Richtung des elektrischen Feldes angibt.",
      },
      {
        term: "Homogenes Feld",
        german: "Homogenes Feld",
        symbol: "E⃗ = const",
        unit: "V/m",
        definition:
          "Ein Feld mit gleicher Stärke und Feldrichtung an allen Punkten der betrachteten Region.",
      },
      {
        term: "Elektrisches Potenzial",
        german: "Elektrisches Potenzial",
        symbol: "φ",
        unit: "V",
        definition:
          "Potenzielle elektrische Energie pro Ladungseinheit relativ zu einem ausgewählten Referenzniveau.",
      },
      {
        term: "Superpositionsprinzip",
        german: "Superpositionsprinzip",
        symbol: "E⃗total = ΣE⃗ᵢ",
        unit: "V/m",
        definition:
          "Das resultierende Feld mehrerer Quellen ist gleich der Vektorsumme ihrer Felder.",
      },
      {
        term: "Dielektrische Polarisation",
        german: "Dielektrische Polarisation",
        symbol: "—",
        unit: "—",
        definition:
          "Die Verschiebung gebundener Ladungen oder die Ausrichtung von Dipolen einer Substanz unter dem Einfluss eines elektrischen Feldes.",
      },
    ],
    summary: [
      "Die Richtung des Feldes wird durch die Kraft bestimmt, die auf die positive Testladung einwirkt.",
      "F⃗ = qE⃗: Die Kraft wirkt auf eine positive Ladung entlang des Feldes, auf eine negative Ladung - gegen das Feld.",
      "Die elektrische Feldstärke wird in N/C oder V/m gemessen, Spannung wird in Volt gemessen.",
      "Zwischen großen parallelen Platten entfernt von den Kanten E ≈ U/d.",
      "Das Feld einer Punktladung nimmt um 1/r² ab; die Felder mehrerer Quellen werden vektoriell addiert.",
      "Die Arbeit des elektrostatischen Feldes während der Ladungsübertragung beträgt qU und ist der Änderung der potentiellen Energie entgegengesetzt.",
    ],
    quiz: [
      {
        id: "field-1",
        type: "choice",
        question:
          "Die Feldstärke ist nach rechts gerichtet. Wo ist die elektrische Kraft auf das Elektron gerichtet?",
        options: [
          "Richtig",
          "Links",
          "Auf jeden Fall oben",
          "Die Kraft ist immer Null",
        ],
        answer: 1,
        explanation:
          "Das Elektron hat eine negative Ladung. In F⃗ = qE⃗ ändert ein negatives q die Richtung der Kraft entgegengesetzt zur Richtung des Feldes.",
      },
      {
        id: "field-2",
        type: "numeric",
        question:
          "Zwischen großen parallelen Platten U = 12 V, d = 4 mm. Berechne die Feldstärke fern von den Plattenrändern.",
        answer: 3000,
        unit: "V/m",
        tolerance: 1,
        explanation:
          "d = 0,004 m. E = U/d = 12/0,004 = 3000 V/m. Wir müssen die Entfernung in Meter umrechnen.",
      },
      {
        id: "field-3",
        type: "choice",
        question:
          "Der Abstand zu einer Punktladung im Vakuum wurde verdoppelt. Wie wird sich die Feldstärke dieser Ladung ändern?",
        options: [
          "Wird sich verdoppeln",
          "Wird halbiert",
          "Wird um vier verringert",
          "Wird sich nicht ändern",
        ],
        answer: 2,
        explanation:
          "E = k|Q|/r². Bei r → 2r erhöht sich der Nenner um das Vierfache und das Feld verringert sich um das Vierfache.",
      },
      {
        id: "field-4",
        type: "numeric",
        question:
          "Eine Ladung von +2 µC liegt in einem Feld von 5000 N/C. Finden Sie die Größe der elektrischen Kraft in Newton.",
        answer: 0.01,
        unit: "N",
        tolerance: 0.0001,
        explanation:
          "2 µC = 2 · 10⁻⁶ C. F = |q|E = 2 · 10⁻⁶ · 5000 = 0,01 N. Die Kraft ist entlang des Feldes gerichtet.",
      },
      {
        id: "field-5",
        type: "choice",
        question:
          "Wie groß ist das resultierende Feld genau in der Mitte zwischen zwei identischen positiven Punktladungen?",
        options: [
          "Gleich Null",
          "Auf dem Weg zum linken Angriff",
          "Auf dem Weg zur richtigen Ladung",
          "Entspricht der Summe der Moduli zweier Felder",
        ],
        answer: 0,
        explanation:
          "In der Mitte haben die Felder identische Module und entgegengesetzte Richtungen. Ihre Vektorsumme ist Null. Das Potential an diesem Punkt muss nicht gleich Null sein.",
      },
    ],
  },
];
