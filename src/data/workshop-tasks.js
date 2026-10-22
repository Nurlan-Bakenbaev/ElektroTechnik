import { authoredResult, validateTasks } from "../lib/workshop.js";

const c = (prompt, options, answer, hint, explanation) => ({
  type: "choice",
  prompt,
  options,
  answer,
  hint,
  explanation,
});
const n = (
  prompt,
  expression,
  scope,
  unit,
  hint,
  explanation,
  tolerance = 0.005,
) => ({
  type: "numeric",
  prompt,
  answer: authoredResult(expression, scope),
  unit,
  hint,
  explanation,
  tolerance,
});
const model = (right, wrong, hint) =>
  c(
    "Welche Überlegung passt zu dieser Aufgabe?",
    [right, ...wrong],
    0,
    hint,
    right + " Deshalb wird dieser Zusammenhang für die Rechnung verwendet.",
  );
const resultCheck = (right, wrong, hint) =>
  c(
    "Was sagt die Prüfung des Ergebnisses?",
    [wrong[0], right, wrong[1]],
    1,
    hint,
    right,
  );

// Original exercises with two data sets per family. No publisher scans or answer keys.
const families = [
  {
    id: "prefixes",
    title: "Einheiten und Vorsätze",
    lessonId: "current",
    sheet: "0.3",
    formulas: [],
    quantities: [
      "mA: Milliampere, ein Tausendstel Ampere",
      "cm²: Quadratzentimeter, eine Flächeneinheit",
      "Ah: Amperestunde, eine Ladungsmenge",
    ],
    teaching: [
      "Eine Zahl ohne die passende Einheit sagt noch nicht, welche Größe gemeint ist. Der Vorsatz verändert den Zahlenwert: Beim Übersetzen in eine größere Einheit wird die Zahl kleiner.",
      "Bei Flächen wird der Längenfaktor quadriert. Eine Amperestunde ist außerdem keine Energie: Sie beschreibt Strom mal Zeit und damit Ladung. Für Energie brauchst du zusätzlich eine Spannung.",
    ],
    make: (v) => {
      const a = v ? 750 : 300;
      return {
        text: `Übersetze ${a} mA in Ampere, 6 cm² in Quadratmeter und ${v ? 2 : 1} Ah in Coulomb.`,
        steps: [
          model(
            "Jede Einheit gehört zu einer bestimmten Größe.",
            [
              "Jede Einheit lässt sich in Volt umrechnen.",
              "Die Vorsätze verändern die physikalische Größe.",
            ],
            "Unterscheide Größe und Schreibweise.",
          ),
          n(
            "Wie viele Ampere sind es?",
            "a/1000",
            { a },
            "A",
            "Milli bedeutet ein Tausendstel.",
            "Teile den Milliamperewert durch 1000. Der Strom bleibt physikalisch derselbe.",
          ),
          n(
            "Wie viele Quadratmeter sind 6 cm²?",
            "6/10000",
            {},
            "m²",
            "Ein Zentimeter ist ein Hundertstel Meter. Quadriere diesen Faktor.",
            "6 cm² entsprechen 0,0006 m²; der Faktor ist 10 000, nicht 100.",
            1e-8,
          ),
          n(
            "Wie groß ist die Ladung in Coulomb?",
            "a*3600",
            { a: v ? 2 : 1 },
            "C",
            "Eine Stunde hat 3600 Sekunden; ein Ampere ist ein Coulomb pro Sekunde.",
            "Multipliziere den Wert in Ah mit 3600, um die Ladung in C zu erhalten.",
          ),
        ],
        reflection:
          "Erkläre jemandem, warum eine Amperestunde keine Kilowattstunde ist.",
      };
    },
  },
  {
    id: "rearrange",
    title: "Gesuchte Größe und Rechenweg",
    lessonId: "ohm",
    sheet: "0.4 / 0.6",
    formulas: [5],
    quantities: [
      "U: Spannung in Volt (V)",
      "I: Stromstärke in Ampere (A)",
      "R: Widerstand in Ohm (Ω)",
    ],
    teaching: [
      "Beginne mit der gesuchten Größe. Eine Abhängigkeit kann für unterschiedliche Fragen umgestellt werden. Dieselbe Handlung muss auf beiden Seiten einer Gleichung durchgeführt werden.",
      "Wenn Spannung und Widerstand bekannt sind, suchst du den Strom durch Division. Die Einheit Volt geteilt durch Ohm ergibt Ampere. Das ist zugleich eine Kontrolle des Rechenwegs.",
    ],
    make: (v) => ({
      text: `Ein ohmscher Widerstand von ${v ? 30 : 20} Ω liegt an ${v ? 15 : 12} V. Bestimme den Strom und erkläre deine Wahl. Die Temperatur bleibt gleich.`,
      steps: [
        c(
          "Welche Größe ist gesucht?",
          ["Spannung U", "Stromstärke I", "Widerstand R"],
          1,
          "Lies den Arbeitsauftrag, nicht nur die Zahlen.",
          "Gesucht ist I. Spannung und Widerstand sind gegeben.",
        ),
        c(
          "Wie isolierst du die Stromstärke?",
          [
            "Spannung mit Widerstand multiplizieren",
            "Widerstand durch Spannung teilen",
            "Spannung durch Widerstand teilen",
          ],
          2,
          "Überlege, wodurch das Produkt aus Strom und Widerstand zur Spannung wird.",
          "Teile beide Seiten der Ausgangsbeziehung durch den Widerstand.",
        ),
        n(
          "Berechne den Strom in Ampere.",
          "u/r",
          { u: v ? 15 : 12, r: v ? 30 : 20 },
          "A",
          "Setze die Spannung in Volt und den Widerstand in Ohm ein.",
          "Die Division liefert Ampere. Bei diesen gleichbleibenden Bedingungen ist der Widerstand konstant.",
        ),
      ],
      reflection:
        "Welche Größe müsste größer werden, wenn bei gleicher Spannung der Widerstand kleiner wird?",
    }),
  },
  {
    id: "current",
    title: "Ladung pro Zeit",
    lessonId: "current",
    sheet: "2.1",
    formulas: [0],
    quantities: [
      "Q: Ladung in Coulomb (C)",
      "t: Zeit in Sekunden (s)",
      "I: Stromstärke in Ampere (A)",
    ],
    teaching: [
      "Stromstärke zählt die Ladungsmenge, die pro Zeit durch einen Querschnitt gelangt. Sie ist keine Geschwindigkeit eines einzelnen Elektrons. Viele langsam driftende Elektronen können einen großen Strom bilden.",
      "In einem unverzweigten stationären Stromkreis fließt vor und hinter einer Lampe dieselbe Stromstärke. Umgewandelt wird Energie; die Lampe verbraucht nicht die Ladungsträger.",
    ],
    make: (v) => ({
      text: `Durch einen Leiterquerschnitt fließen in ${v ? 8 : 6} s insgesamt ${v ? 4 : 1.8} C Ladungsbetrag.`,
      steps: [
        model(
          "Die Ladungsmenge wird durch die Zeit geteilt.",
          [
            "Die Ladungsmenge wird mit der Zeit multipliziert.",
            "Strom ist Ladung mal Spannung.",
          ],
          "Gefragt ist die Ladung je Sekunde.",
        ),
        n(
          "Bestimme die Stromstärke in A.",
          "q/t",
          { q: v ? 4 : 1.8, t: v ? 8 : 6 },
          "A",
          "Verteile die Ladung auf die angegebenen Sekunden.",
          "Ein Coulomb pro Sekunde ist ein Ampere.",
        ),
        resultCheck(
          "Bei doppelt so viel Ladung in derselben Zeit wäre der Strom doppelt so groß.",
          [
            "Der Strom hängt ausschließlich von der Elektronengeschwindigkeit ab.",
            "Hinter einer Lampe muss weniger Ladung pro Sekunde ankommen.",
          ],
          "Vergleiche Ladungsmenge und Zeit getrennt.",
        ),
      ],
      reflection:
        "Beschreibe den Unterschied zwischen technischer Stromrichtung und Elektronenbewegung.",
    }),
  },
  {
    id: "potential",
    title: "Potenziale und Vorzeichen",
    lessonId: "voltage",
    sheet: "2.4",
    formulas: [1],
    quantities: [
      "φ: Potenzial gegenüber einem Bezugspunkt, in V",
      "U: Spannung zwischen zwei Punkten, in V",
    ],
    teaching: [
      "Ein Potenzial wird gegenüber einer festgelegten Referenz angegeben. Eine Spannung ist die Differenz zweier Potenziale. Daher musst du wissen, welcher Punkt zuerst genannt wird.",
      "Tauschst du die beiden Messleitungen, ändert sich das Vorzeichen. Die tatsächliche elektrische Situation bleibt gleich. Masse als Bezugspunkt ist nicht automatisch dasselbe wie Schutzleiter oder Erde.",
    ],
    make: (v) => ({
      text: `Punkt A liegt bei ${v ? 3 : 6} V, Punkt B bei ${v ? 9 : 8} V gegenüber derselben Referenz. Gesucht ist A minus B.`,
      steps: [
        model(
          "Erstes Potenzial minus zweites Potenzial.",
          [
            "Beide Potenziale addieren.",
            "Immer den positiven Betrag ohne Richtung nehmen.",
          ],
          "Die Reihenfolge ist im Auftrag festgelegt.",
        ),
        n(
          "Welche Spannung ergibt A minus B?",
          "a-b",
          { a: v ? 3 : 6, b: v ? 9 : 8 },
          "V",
          "Das erste Potenzial ist hier kleiner als das zweite.",
          "Ein negatives Ergebnis ist bei dieser Bezugsrichtung richtig.",
        ),
        n(
          "Was zeigt das Messgerät bei vertauschten Leitungen?",
          "b-a",
          { a: v ? 3 : 6, b: v ? 9 : 8 },
          "V",
          "Beim Vertauschen ändert sich das Vorzeichen.",
          "Die Differenz kehrt ihr Vorzeichen um, der Betrag bleibt gleich.",
        ),
      ],
      reflection:
        "Warum ist ein negativer Messwert nicht automatisch ein Messfehler?",
    }),
  },
  {
    id: "line",
    title: "Leitungswiderstand und Spannungsfall",
    lessonId: "resistance",
    sheet: "2.5 / 2.7",
    formulas: [2, 5, 7],
    quantities: [
      "ρ: spezifischer Widerstand, hier 0,0175 Ω·mm²/m",
      "l: Länge des gesamten Stromwegs in m",
      "A: Querschnitt in mm²",
      "ΔU: Spannungsfall in V",
    ],
    teaching: [
      "Eine Leitung besitzt einen Widerstand. Bei einer Gleichstromversorgung mit Hin- und Rückleiter gehören beide stromführenden Adern zum Weg. Die räumliche Entfernung zum Gerät ist dann nur die Hälfte der gesamten Leiterlänge.",
      "Berechne zuerst den Widerstand des gesamten Wegs und daraus den Spannungsfall. Die Spannung am Gerät ist die Quellenspannung abzüglich dieses Falls. Die angegebene Stromstärke gilt in diesem vereinfachten Modell als bekannt.",
    ],
    make: (v) => {
      const d = v ? 15 : 12,
        i = v ? 3 : 2;
      return {
        text: `Das Gerät ist ${d} m von einer 12-V-Quelle entfernt. Hin- und Rückleiter sind aus Kupfer, je 1,5 mm². Der gegebene Strom beträgt ${i} A; ρ ist 0,0175 Ω·mm²/m.`,
        steps: [
          model(
            "Hin- und Rückleiter gehören zum Stromweg.",
            [
              "Nur die Entfernung zum Gerät zählt.",
              "Der Schutzleiter wird stets als Rückleiter mitgerechnet.",
            ],
            "Der Betriebsstrom braucht einen vollständigen Weg.",
          ),
          n(
            "Wie lang ist der gesamte Leiterweg?",
            "2*d",
            { d },
            "m",
            "Es gibt zwei gleich lange stromführende Adern.",
            "Verdopple die Entfernung zum Gerät.",
          ),
          n(
            "Wie groß ist der Leitungswiderstand?",
            "0.0175*2*d/1.5",
            { d },
            "Ω",
            "Multipliziere Materialwert und gesamte Länge; teile durch den Querschnitt.",
            "Der Querschnitt darf in mm² bleiben, weil der vorgegebene Materialwert diese Einheit verwendet.",
          ),
          n(
            "Wie groß ist der Spannungsfall?",
            "i*0.0175*2*d/1.5",
            { d, i },
            "V",
            "Multipliziere den Strom mit dem gerade berechneten Leitungswiderstand.",
            "Der Spannungsfall gehört zum Leitungswiderstand, nicht zum gesamten Gerät.",
          ),
          n(
            "Welche Spannung liegt am Gerät an?",
            "12-i*0.0175*2*d/1.5",
            { d, i },
            "V",
            "Ziehe den Leitungsfall von den 12 V ab.",
            "Bei positivem Betriebsstrom liegt am Gerät weniger als die Quellenspannung an.",
          ),
        ],
        reflection:
          "Was ändert sich bei gleichem Strom, wenn der Leiterquerschnitt verdoppelt wird?",
      };
    },
  },
  {
    id: "energy",
    title: "kW oder kWh?",
    lessonId: "energy",
    sheet: "2.8",
    formulas: [6],
    quantities: [
      "P: mittlere Leistung in kW",
      "t: Betriebsdauer in h",
      "E: Energie in kWh",
      "Tarif: Arbeitspreis in €/kWh",
    ],
    teaching: [
      "Kilowatt beschreibt, wie schnell ein Gerät Energie umsetzt. Kilowattstunde beschreibt, wie viel Energie über die Betriebsdauer zusammenkommt. Das h steht für die Multiplikation mit Stunden, nicht für eine Division.",
      "Ein leistungsstarkes Gerät kann bei kurzer Nutzung weniger Energie brauchen als ein schwächeres bei langer Nutzung. Stromkosten hängen beim Arbeitspreis von der aufgenommenen Energie ab; feste Grundkosten sind hier nicht enthalten.",
    ],
    make: (v) => {
      const p = v ? 2 : 0.8,
        t = v ? 30 : 45;
      return {
        text: `Ein Gerät nimmt konstant ${p} kW auf und läuft ${t} min. Der Übungstarif beträgt 0,32 €/kWh.`,
        steps: [
          c(
            "Was beschreibt die Angabe in kW?",
            [
              "Die Leistung während des Betriebs",
              "Die gesamte bereits verbrauchte Energie",
              "Den Preis einer Betriebsstunde",
            ],
            0,
            "Frage: Wie schnell oder wie viel insgesamt?",
            "kW ist Leistung. Die Laufzeit fehlt noch, um die Energie zu berechnen.",
          ),
          n(
            "Rechne die Betriebsdauer in Stunden um.",
            "t/60",
            { t },
            "h",
            "Teile die Minuten durch 60.",
            "Kilowatt und Stunden ergeben zusammen Kilowattstunden.",
          ),
          n(
            "Wie viel Energie nimmt das Gerät auf?",
            "p*t/60",
            { p, t },
            "kWh",
            "Multipliziere die Leistung mit der Zeit in Stunden.",
            "Die Energie enthält die Laufzeit: Derselbe Leistungswert kann je nach Dauer unterschiedliche Energiemengen ergeben.",
          ),
          n(
            "Wie hoch sind die reinen Verbrauchskosten in Euro?",
            "p*t/60*0.32",
            { p, t },
            "€",
            "Multipliziere die Energie in kWh mit 0,32 Euro je kWh.",
            "Erst am Ende auf Cent runden. Ein Fehler von 1000 deutet oft auf W statt kW hin.",
            0.005,
          ),
        ],
        reflection:
          "Ein 1-kW-Gerät läuft eine Stunde. Wie lange muss ein 2-kW-Gerät für dieselbe Energie laufen?",
      };
    },
  },
  {
    id: "power",
    title: "Leistung und Belastungsgrenze",
    lessonId: "power",
    sheet: "2.9",
    formulas: [7],
    quantities: ["U: Spannung in V", "I: Strom in A", "P: Leistung in W"],
    teaching: [
      "Ein ohmscher Widerstand wird durch die aufgenommene Leistung erwärmt. Für die Beurteilung musst du nicht nur den Widerstandswert, sondern auch seine zulässige Leistung kennen.",
      "Bei gleichbleibendem Widerstand verändert eine Verdopplung der Spannung den Strom ebenfalls um den Faktor zwei. Die Leistung wird deshalb viermal so groß. Bei nicht konstantem Widerstand ist diese Aussage nicht ohne Weiteres anwendbar.",
    ],
    make: (v) => ({
      text: `An einem ohmschen Widerstand von ${v ? 200 : 100} Ω liegen 10 V. Seine zulässige Leistung ist 0,25 W.`,
      steps: [
        n(
          "Welcher Strom fließt?",
          "10/r",
          { r: v ? 200 : 100 },
          "A",
          "Teile die Spannung durch den Widerstand.",
          "Bestimme zuerst den Strom bei den gegebenen Bedingungen.",
        ),
        n(
          "Welche Leistung wird aufgenommen?",
          "100/r",
          { r: v ? 200 : 100 },
          "W",
          "Multipliziere Spannung und Strom.",
          "Die Einheit ist Watt. Vergleiche diesen Wert mit 0,25 W.",
        ),
        c(
          "Ist der Betrieb nach diesem Modell zulässig?",
          [
            "Ja, die Spannung ist kleiner als 230 V.",
            "Nein, die Leistung überschreitet 0,25 W.",
            "Ja, jeder Widerstand verträgt beliebige Leistung.",
          ],
          1,
          "Die entscheidende Grenze ist die Bemessungsleistung.",
          "Die Aufnahme liegt über der erlaubten Leistung. Die konkrete Bauteilauswahl braucht zusätzlich Betriebsbedingungen und Reserven.",
        ),
        c(
          "Was passiert bei doppelter Spannung und konstantem R?",
          ["Doppelte Leistung", "Vierfache Leistung", "Unveränderte Leistung"],
          1,
          "Sowohl Spannung als auch Strom verdoppeln sich.",
          "Die Leistung wächst mit dem Quadrat der Spannung, solange R gleich bleibt.",
        ),
      ],
      reflection:
        "Warum genügt die Angabe eines Widerstandswertes nicht zur Bauteilauswahl?",
    }),
  },
  {
    id: "efficiency",
    title: "Motor, Pumpe und Gesamtwirkungsgrad",
    lessonId: "efficiency",
    sheet: "2.10",
    formulas: [8],
    quantities: [
      "P_zu: aufgenommene Leistung in W",
      "P_ab: nutzbare Abgabe in W",
      "η: Wirkungsgrad, als Faktor oder Prozent",
    ],
    teaching: [
      "Lege vor der Rechnung die Systemgrenze fest. Die elektrische Aufnahme des Motors, die mechanische Abgabe am Motor und die nützliche Pumpenleistung sind drei verschiedene Größen.",
      "Bei aufeinanderfolgenden Umwandlungen wird der bereits verbleibende Anteil erneut reduziert. Multipliziere die Wirkungsgrade als Dezimalzahlen. Die Verlustleistung ist die Differenz zwischen Aufnahme und betrachteter Nutzleistung.",
    ],
    make: (v) => ({
      text: `Ein Motor nimmt ${v ? 200 : 120} W auf. Sein Wirkungsgrad ist 80 %, der nachgeschalteten Pumpe 75 %.`,
      steps: [
        model(
          "Die zweite Stufe erhält nur die Abgabe der ersten.",
          [
            "Die Wirkungsgrade werden addiert.",
            "Die Pumpe erhält nochmals die gesamte elektrische Aufnahme.",
          ],
          "Verfolge die Energie durch die Systemgrenzen.",
        ),
        n(
          "Welche mechanische Leistung gibt der Motor ab?",
          "p*0.8",
          { p: v ? 200 : 120 },
          "W",
          "80 % entspricht dem Faktor 0,8.",
          "Die Abgabe liegt wegen der Verluste unter der Aufnahme.",
        ),
        n(
          "Wie groß ist die Nutzleistung der Pumpe?",
          "p*0.8*0.75",
          { p: v ? 200 : 120 },
          "W",
          "Wende 75 % auf die Motorabgabe an.",
          "Die Pumpenstufe reduziert den verbleibenden Anteil ein zweites Mal.",
        ),
        n(
          "Wie groß ist der Gesamtwirkungsgrad in Prozent?",
          "0.8*0.75*100",
          {},
          "%",
          "Multipliziere zuerst die Faktoren, wandle danach in Prozent um.",
          "Der Gesamtwirkungsgrad beträgt 60 %, nicht 155 %.",
        ),
        n(
          "Welche gesamte Verlustleistung entsteht?",
          "p*(1-0.8*0.75)",
          { p: v ? 200 : 120 },
          "W",
          "Aufnahme minus endgültige Nutzleistung.",
          "Nutzleistung und Verluste müssen zusammen die Aufnahme ergeben.",
        ),
      ],
      reflection:
        "Warum kann man die elektrische Aufnahme nicht direkt vom Motortypenschild als Wellenleistung ablesen?",
    }),
  },
  {
    id: "series",
    title: "Reihe: alle Spannungen prüfen",
    lessonId: "circuits",
    sheet: "3.1–3.2",
    formulas: [3, 5],
    visual: "series",
    quantities: [
      "R₁, R₂: Teilwiderstände in Ω",
      "I: gleicher Strom in der Reihenschaltung",
      "U₁, U₂: Teilspannungen in V",
    ],
    teaching: [
      "Bauteile sind in Reihe, wenn zwischen ihnen kein Stromzweig abgeht. Dann fließt überall derselbe Strom. Die Einzelspannungen können unterschiedlich sein.",
      "Addiere zuerst die Widerstände, berechne den gemeinsamen Strom und anschließend die Einzelspannungen. Zur Kontrolle müssen alle Teilspannungen wieder die Quellenspannung ergeben.",
    ],
    make: (v) => ({
      text: `Zwei Widerstände mit ${v ? 100 : 40} Ω und ${v ? 200 : 60} Ω liegen in Reihe an ${v ? 12 : 10} V.`,
      steps: [
        model(
          "Der Strom ist in beiden Widerständen gleich.",
          [
            "Jeder Widerstand erhält die volle Quellenspannung.",
            "Die Teilströme werden addiert.",
          ],
          "Es gibt nur einen Weg für den stationären Strom.",
        ),
        n(
          "Berechne den Gesamtwiderstand.",
          "a+b",
          { a: v ? 100 : 40, b: v ? 200 : 60 },
          "Ω",
          "Addiere die Widerstände.",
          "Der Gesamtwiderstand einer Reihenschaltung ist größer als jeder Teilwiderstand.",
        ),
        n(
          "Berechne den gemeinsamen Strom.",
          "u/(a+b)",
          { u: v ? 12 : 10, a: v ? 100 : 40, b: v ? 200 : 60 },
          "A",
          "Verwende den Gesamtwiderstand und die gesamte Spannung.",
          "Die gesamte Spannung darf nicht durch nur einen Teilwiderstand geteilt werden.",
        ),
        n(
          "Welche Spannung liegt am ersten Widerstand?",
          "u*a/(a+b)",
          { u: v ? 12 : 10, a: v ? 100 : 40, b: v ? 200 : 60 },
          "V",
          "Multipliziere den gemeinsamen Strom mit dem ersten Widerstand.",
          "Der größere Widerstand erhält in der Reihenschaltung den größeren Spannungsanteil.",
        ),
      ],
      reflection:
        "Berechne auf Papier auch die zweite Teilspannung und prüfe ihre Summe.",
    }),
  },
  {
    id: "parallel",
    title: "Parallel: Zweige und Knotenregel",
    lessonId: "circuits",
    sheet: "3.4–3.5",
    formulas: [4, 5],
    visual: "parallel",
    quantities: [
      "U: gemeinsame Spannung in V",
      "I₁, I₂: Zweigströme in A",
      "R_ges: Ersatzwiderstand in Ω",
    ],
    teaching: [
      "Parallele Zweige beginnen am selben Knoten und enden am selben zweiten Knoten. Daher liegt an beiden Zweigen dieselbe Spannung an; der Strom teilt sich nach dem Widerstand auf.",
      "An einem Knoten bleibt keine Ladung dauerhaft liegen. Die zufließenden Ströme ergeben die abfließenden Ströme. Ein negatives berechnetes Vorzeichen bedeutet eine andere tatsächliche Richtung als der gewählte Bezugspfeil.",
    ],
    make: (v) => ({
      text: `Zwei parallele Widerstände von ${v ? 300 : 200} Ω und ${v ? 600 : 200} Ω liegen an 12 V.`,
      steps: [
        model(
          "An jedem Zweig liegen 12 V an.",
          [
            "An jedem Zweig liegen 6 V an.",
            "Der Gesamtstrom fließt unverändert durch jeden Zweig.",
          ],
          "Die beiden Anschlussknoten sind für beide Widerstände gleich.",
        ),
        n(
          "Welcher Strom fließt im ersten Zweig?",
          "12/a",
          { a: v ? 300 : 200 },
          "A",
          "Nutze die volle Zweigspannung.",
          "Der kleinere Widerstand führt den größeren Strom.",
        ),
        n(
          "Welcher Gesamtstrom kommt von der Quelle?",
          "12/a+12/b",
          { a: v ? 300 : 200, b: v ? 600 : 200 },
          "A",
          "Addiere die beiden Zweigströme.",
          "Diese Summe ist eine Anwendung der Knotenregel.",
        ),
        n(
          "Wie groß ist der Ersatzwiderstand?",
          "a*b/(a+b)",
          { a: v ? 300 : 200, b: v ? 600 : 200 },
          "Ω",
          "Die Gesamtspannung geteilt durch den Gesamtstrom ergibt ebenfalls den Ersatzwiderstand.",
          "Das Ergebnis muss kleiner als der kleinste Zweigwiderstand sein.",
        ),
      ],
      reflection:
        "Warum erhöht ein zusätzlicher paralleler Widerstand den Gesamtstrom einer idealen Spannungsquelle?",
    }),
  },
  {
    id: "mixed",
    title: "Gemischte Schaltung schrittweise",
    lessonId: "circuits",
    sheet: "3.6",
    formulas: [3, 4, 5],
    visual: "mixed",
    quantities: [
      "R₁: einzelner Serienwiderstand",
      "R₂ und R₃: parallele Widerstände",
      "I_ges: Strom durch die Quelle",
    ],
    teaching: [
      "Fasse nur Bauteile zusammen, deren Verbindung wirklich einer Reihen- oder Parallelschaltung entspricht. Die räumliche Nähe zweier Symbole beweist das nicht. Entscheidend sind die Knoten und Stromwege.",
      "Notiere jede Ersatzgruppe und rechne anschließend rückwärts zu den Originalteilen. In der Reihenstufe kennst du den gemeinsamen Strom, in der Parallelgruppe die gemeinsame Spannung.",
    ],
    make: (v) => ({
      text: `Ein Widerstand von ${v ? 50 : 100} Ω liegt in Reihe mit einer parallelen Gruppe aus zwei Widerständen von jeweils ${v ? 100 : 200} Ω. Die Quelle liefert 10 V.`,
      steps: [
        c(
          "Welche Gruppe lässt sich zuerst vereinfachen?",
          [
            "Alle drei Widerstände addieren",
            "Die beiden parallelen Widerstände",
            "Den ersten und zweiten Widerstand als Reihe zusammenfassen",
          ],
          1,
          "Am Übergang zur Parallelgruppe teilt sich der Strom.",
          "Zuerst wird die echte Parallelgruppe ersetzt.",
        ),
        n(
          "Welchen Widerstand hat die Parallelgruppe?",
          "r/2",
          { r: v ? 100 : 200 },
          "Ω",
          "Bei zwei gleichen parallelen Widerständen halbiert sich der Einzelwert.",
          "Diese Ersatzgruppe kann danach mit dem Serienwiderstand addiert werden.",
        ),
        n(
          "Wie groß ist der Gesamtwiderstand?",
          "s+r/2",
          { s: v ? 50 : 100, r: v ? 100 : 200 },
          "Ω",
          "Addiere jetzt die beiden übrig gebliebenen Serienglieder.",
          "Die vereinfachte Schaltung besitzt nur noch zwei Elemente in Reihe.",
        ),
        n(
          "Welcher Strom fließt aus der Quelle?",
          "10/(s+r/2)",
          { s: v ? 50 : 100, r: v ? 100 : 200 },
          "A",
          "Verwende 10 V und den Gesamtwiderstand.",
          "Der Quellenstrom ist zugleich der Strom im einzelnen Serienwiderstand.",
        ),
        n(
          "Welche Spannung liegt an der Parallelgruppe?",
          "10*(r/2)/(s+r/2)",
          { s: v ? 50 : 100, r: v ? 100 : 200 },
          "V",
          "Multipliziere den Quellenstrom mit dem Ersatzwiderstand der Parallelgruppe.",
          "Beide originalen Parallelwiderstände erhalten diese Gruppenspannung.",
        ),
      ],
      reflection:
        "Prüfe den Rückweg: Addieren sich die beiden Teilströme zum Quellenstrom?",
    }),
  },
  {
    id: "e12",
    title: "LED-Vorwiderstand und E12",
    lessonId: "ohm",
    sheet: "3.3",
    formulas: [5, 7],
    quantities: [
      "U_Quelle: Versorgung in V",
      "U_LED: vereinfachtes konstantes LED-Spannungsmodell",
      "I_max: erlaubter Strom in A",
      "E12: gestufte Widerstandswerte",
    ],
    teaching: [
      "Der Vorwiderstand übernimmt die Differenz zwischen Quellenspannung und LED-Spannung. Durch LED und Widerstand fließt derselbe Strom. Eine LED ist selbst kein konstanter ohmscher Widerstand.",
      "Nach der Berechnung muss ein verfügbarer Widerstand gewählt werden. Soll ein maximaler Strom nicht überschritten werden, kann der nächstkleinere Wert ungeeignet sein. Rechne mit dem gewählten Wert den Strom und die Erwärmung erneut aus.",
    ],
    make: (v) => {
      const u = v ? 12 : 9,
        r = v ? 1000 : 820;
      return {
        text: `Quelle ${u} V, LED im vereinfachten Modell 2 V, Strom höchstens 10 mA. E12-Werte in der Nähe: 680 Ω, 820 Ω, 1000 Ω, 1200 Ω. Toleranzen werden in dieser Lernaufgabe vernachlässigt.`,
        steps: [
          n(
            "Wie viel Spannung fällt am Vorwiderstand ab?",
            "u-2",
            { u },
            "V",
            "Die LED übernimmt schon 2 V.",
            "Nur die verbleibende Spannung gehört zum Vorwiderstand.",
          ),
          n(
            "Wie groß ist der rechnerisch notwendige Mindestwiderstand?",
            "(u-2)/0.01",
            { u },
            "Ω",
            "10 mA sind 0,010 A.",
            "Ein kleinerer Widerstand würde im Modell den maximalen Strom überschreiten.",
          ),
          c(
            "Welcher E12-Wert begrenzt den Strom passend?",
            v ? ["820 Ω", "1000 Ω", "680 Ω"] : ["680 Ω", "820 Ω", "470 Ω"],
            1,
            "Prüfe, welcher verfügbare Wert mindestens so groß wie der Mindestwert ist.",
            `Hier wird ${r} Ω gewählt. Nach der Auswahl muss der tatsächliche Betriebswert erneut berechnet werden.`,
          ),
          n(
            "Welcher Strom fließt mit dem ausgewählten Widerstand?",
            "1000*(u-2)/r",
            { u, r },
            "mA",
            "Berechne zuerst in A und rechne anschließend in mA um.",
            "Die Stromgrenze ist wichtiger als ein möglichst naher Zahlenwert.",
            0.02,
          ),
        ],
        reflection:
          "Berechne auch die Widerstandsleistung und erkläre, warum reale Toleranzen zusätzliche Reserven erfordern.",
      };
    },
  },
  {
    id: "divider",
    title: "Spannungsteiler mit Last",
    lessonId: "circuits",
    sheet: "3.7–3.8",
    formulas: [3, 4, 5],
    visual: "divider",
    quantities: [
      "R_oben: oberes Teilerglied in Ω",
      "R_unten: unteres Teilerglied in Ω",
      "R_Last: parallel zum unteren Glied angeschlossene Last",
      "U_aus: Spannung vom Mittelpunkt zum unteren Bezugspunkt",
    ],
    teaching: [
      "Ohne Belastung besteht ein Spannungsteiler aus zwei Widerständen in Reihe. Die Ausgangsspannung wird über einem der Widerstände abgegriffen. Ein Messgerät mit endlichem Eingangswiderstand kann selbst eine Last sein.",
      "Eine angeschlossene Last liegt parallel zum unteren Glied. Dadurch wird dessen Ersatzwiderstand kleiner und die Ausgangsspannung sinkt. Ein Widerstandsteiler ist deshalb keine ideale geregelte Stromversorgung.",
    ],
    make: (v) => ({
      text: `Quelle 12 V. Oberes und unteres Glied haben je 1 kΩ. Eine Last von ${v ? 2000 : 1000} Ω wird parallel zum unteren Glied angeschlossen.`,
      steps: [
        n(
          "Wie hoch ist die Ausgangsspannung ohne Last?",
          "12/2",
          {},
          "V",
          "Beide Teilerwiderstände sind gleich.",
          "Ohne Last fällt die Hälfte der Quellenspannung am unteren Glied ab.",
        ),
        n(
          "Wie groß ist der Ersatzwiderstand aus unterem Glied und Last?",
          "1000*r/(1000+r)",
          { r: v ? 2000 : 1000 },
          "Ω",
          "Fasse die echte Parallelschaltung zusammen.",
          "Der Lastwiderstand senkt den wirksamen Widerstand des unteren Glieds.",
          0.02,
        ),
        n(
          "Welche Ausgangsspannung ergibt sich mit Last?",
          "12*(1000*r/(1000+r))/(1000+1000*r/(1000+r))",
          { r: v ? 2000 : 1000 },
          "V",
          "Berechne zuerst den Gesamtstrom; multipliziere ihn dann mit dem unteren Ersatzwiderstand.",
          "Das belastete Ausgangssignal ist kleiner als 6 V.",
          0.01,
        ),
        resultCheck(
          "Ein hochohmigerer Verbraucher beeinflusst die Spannung weniger.",
          [
            "Jede Last lässt die Ausgangsspannung auf 12 V steigen.",
            "Ein Teiler hält die Ausgangsspannung unabhängig vom Strom exakt konstant.",
          ],
          "Vergleiche die Belastung mit der unbelasteten Schaltung.",
        ),
      ],
      reflection:
        "Warum kann ein ungeeignetes Messgerät schon den gemessenen Spannungswert verändern?",
    }),
  },
  {
    id: "bridge",
    title: "Brücke: zwei Mittelpunkte vergleichen",
    lessonId: "voltage",
    sheet: "3.9–3.10",
    formulas: [3, 4, 5],
    visual: "bridge",
    quantities: [
      "A, B: mittlere Knoten der linken und rechten Teilerschaltung",
      "U_AB: Potenzial von A minus Potenzial von B in V",
      "0 V: gemeinsamer unterer Bezugspunkt",
    ],
    teaching: [
      "Eine unbelastete Messbrücke lässt sich als zwei unabhängige Spannungsteiler verstehen. Zuerst berechnest du die Potenziale der beiden Mittelpunkte gegenüber derselben Referenz.",
      "Die Brückenspannung ist ihre Differenz. Bei gleicher Teilung ist sie null, obwohl in beiden Zweigen Strom fließt. Mit einer belasteten Diagonale reicht diese unabhängige Teilerrechnung nicht mehr aus.",
    ],
    make: (v) => ({
      text: `Oben liegen 12 V, unten 0 V. Linker Zweig: oben 1 kΩ, unten 1 kΩ. Rechter Zweig: oben 1 kΩ, unten ${v ? 3 : 2} kΩ. A ist links, B rechts. Die Diagonale ist unbelastet.`,
      steps: [
        model(
          "Zuerst beide Mittelpunkte gegen 0 V bestimmen.",
          [
            "Alle vier Widerstände direkt addieren.",
            "Die Spannung zwischen A und B ist immer 12 V.",
          ],
          "Die Diagonale entnimmt hier keinen Strom.",
        ),
        n(
          "Wie groß ist das Potenzial am linken Mittelpunkt A?",
          "6",
          {},
          "V",
          "Der linke Zweig teilt gleichmäßig.",
          "A liegt auf halber Versorgungsspannung.",
        ),
        n(
          "Wie groß ist das Potenzial am rechten Mittelpunkt B?",
          "12*b/(1+b)",
          { b: v ? 3 : 2 },
          "V",
          "Das untere rechte Glied bestimmt den Anteil gegenüber 0 V.",
          "Weil das untere Glied größer ist, liegt B höher als A.",
        ),
        n(
          "Berechne die Spannung A minus B.",
          "6-12*b/(1+b)",
          { b: v ? 3 : 2 },
          "V",
          "Beachte die ausdrücklich gewählte Polarität.",
          "Das negative Ergebnis zeigt, dass B das höhere Potenzial hat.",
        ),
      ],
      reflection:
        "Was müsste rechts verändert werden, damit die Brücke abgeglichen ist?",
    }),
  },
  {
    id: "source",
    title: "Reale Quelle und Innenwiderstand",
    lessonId: "ohm",
    sheet: "3.11–3.12",
    formulas: [3, 5, 7],
    quantities: [
      "U₀: Leerlaufspannung in V",
      "R_i: Innenwiderstand in Ω",
      "R_Last: Lastwiderstand in Ω",
      "U_Klemme: Spannung am Ausgang in V",
    ],
    teaching: [
      "Eine einfache reale Batterie lässt sich als ideale Spannungsquelle mit einem Serienwiderstand modellieren. Bei Belastung fällt am Innenwiderstand eine Spannung ab; an den äußeren Klemmen bleibt weniger übrig.",
      "Dieses Modell ist eine Näherung. Ein geregeltes Netzteil versucht seine Ausgangsspannung innerhalb seiner Grenzen konstant zu halten und folgt nicht einfach derselben linearen Batteriekennlinie. Ein Kurzschluss ist hier nur ein Rechenzustand, kein Versuch.",
    ],
    make: (v) => ({
      text: `Eine Batterie besitzt 12 V Leerlaufspannung und ${v ? 1 : 2} Ω Innenwiderstand. Sie versorgt einen Lastwiderstand von ${v ? 11 : 10} Ω.`,
      steps: [
        model(
          "Innenwiderstand und Lastwiderstand liegen im Modell in Reihe.",
          [
            "Der Innenwiderstand wird ignoriert.",
            "Beide Widerstände liegen parallel zur Quelle.",
          ],
          "Der Laststrom fließt auch durch das Innere der Batterie.",
        ),
        n(
          "Wie groß ist der Betriebsstrom?",
          "12/(ri+rl)",
          { ri: v ? 1 : 2, rl: v ? 11 : 10 },
          "A",
          "Verwende die Summe beider Widerstände.",
          "Der Strom wird durch den gesamten geschlossenen Weg bestimmt.",
        ),
        n(
          "Wie hoch ist die Klemmenspannung?",
          "12*rl/(ri+rl)",
          { ri: v ? 1 : 2, rl: v ? 11 : 10 },
          "V",
          "Bestimme den Spannungsfall am äußeren Lastwiderstand.",
          "Die Klemmenspannung liegt beim Betrieb unter der Leerlaufspannung.",
        ),
        n(
          "Welche Leistung wird im Innenwiderstand in Wärme umgesetzt?",
          "(12/(ri+rl))^2*ri",
          { ri: v ? 1 : 2, rl: v ? 11 : 10 },
          "W",
          "Der bekannte Strom fließt durch den Innenwiderstand.",
          "Auch die Quelle hat in diesem Modell eine Verlustleistung.",
        ),
      ],
      reflection:
        "Warum bedeutet eine hohe maximale Stromangabe am geregelten Netzteil nicht, dass dieser Strom immer fließt?",
    }),
  },
  {
    id: "field",
    title: "Elektrisches Feld und Plattenabstand",
    lessonId: "field",
    sheet: "4.1",
    formulas: [9],
    quantities: [
      "U: Spannung in V",
      "d: Plattenabstand in m",
      "E: elektrische Feldstärke in V/m",
    ],
    teaching: [
      "Im idealisierten homogenen Feld zwischen großen parallelen Platten verteilt sich die Spannung über den Abstand. Für die Rechnung muss dieser Abstand in einer passenden Einheit vorliegen.",
      "Die elektrische Feldrichtung ist als Richtung der Kraft auf eine positive Probeladung festgelegt. Ein Elektron erfährt die Kraft in die Gegenrichtung. Randfelder und Durchschlag werden durch das einfache homogene Modell nicht beschrieben.",
    ],
    make: (v) => ({
      text: `Zwischen parallelen Platten liegen ${v ? 24 : 12} V. Ihr Abstand beträgt 3 mm. Vernachlässige die Randeffekte.`,
      steps: [
        n(
          "Wie groß ist der Plattenabstand in m?",
          "3/1000",
          {},
          "m",
          "Milli bedeutet ein Tausendstel.",
          "3 mm sind 0,003 m.",
          1e-7,
        ),
        n(
          "Berechne die homogene Feldstärke in V/m.",
          "u/0.003",
          { u: v ? 24 : 12 },
          "V/m",
          "Teile Spannung durch den Abstand in Metern.",
          "Das Ergebnis hat die Einheit V/m. Die vollständige Einheit ist im Eingabefeld angegeben.",
          0.1,
        ),
        c(
          "In welche Richtung wirkt die Kraft auf ein Elektron?",
          [
            "Mit der elektrischen Feldrichtung",
            "Entgegen der elektrischen Feldrichtung",
            "Immer nach unten",
          ],
          1,
          "Die Feldrichtung bezieht sich auf eine positive Probeladung.",
          "Elektronen sind negativ geladen und erfahren die elektrische Kraft entgegen E.",
        ),
      ],
      reflection:
        "Was geschieht bei gleicher Spannung mit der Feldstärke, wenn der Plattenabstand halbiert wird?",
    }),
  },
  {
    id: "capacitor",
    title: "Kondensator: Ladung und Energie",
    lessonId: "capacitor",
    sheet: "4.2",
    formulas: [11, 12],
    quantities: [
      "C: Kapazität in Farad (F)",
      "Q: Ladungsbetrag einer Platte in Coulomb (C)",
      "U: Kondensatorspannung in V",
    ],
    teaching: [
      "C als Formelzeichen bezeichnet die Kapazität. C hinter einer Zahl kann dagegen die Einheit Coulomb sein. Die Größe der Kapazität sagt, wie viel Ladungsbetrag eine Platte je Volt trägt.",
      "Die Energie eines geladenen Kondensators hängt zusätzlich quadratisch von der Spannung ab. Beim Entladen sinkt diese Spannung. Gleicher Ladungsbetrag allein macht einen Kondensator deshalb nicht zu einem gleichwertigen Ersatz für einen Akku.",
    ],
    make: (v) => ({
      text: `Ein idealer Kondensator mit ${v ? 200 : 100} µF ist auf 12 V geladen.`,
      steps: [
        n(
          "Rechne die Kapazität in F um.",
          "c/1000000",
          { c: v ? 200 : 100 },
          "F",
          "Mikro bedeutet ein Millionstel.",
          "Die Kapazität wird für die SI-Rechnung in Farad eingesetzt.",
          1e-9,
        ),
        n(
          "Welchen Ladungsbetrag trägt eine Platte?",
          "c/1000000*12",
          { c: v ? 200 : 100 },
          "C",
          "Multipliziere die Kapazität in F mit der Spannung in V.",
          "Coulomb ist hier die Ladungseinheit; Farad ist die Kapazitätseinheit.",
          1e-7,
        ),
        n(
          "Welche Energie ist gespeichert?",
          "0.5*c/1000000*12^2",
          { c: v ? 200 : 100 },
          "J",
          "Verwende das Formelbild für die Feldenergie; die Spannung steht im Quadrat.",
          "Die Energie ergibt sich in Joule, nicht in Coulomb.",
          1e-6,
        ),
        c(
          "Was passiert beim Entladen an einer Last?",
          [
            "Die Kondensatorspannung bleibt beliebig lange exakt gleich.",
            "Die Spannung sinkt mit dem Ladungsbetrag.",
            "Die Kapazität muss dabei bis null sinken.",
          ],
          1,
          "Kapazität und momentane Ladung sind unterschiedliche Größen.",
          "Beim idealen Kondensator bleibt die Kapazität gleich, während Ladung und Spannung abnehmen.",
        ),
      ],
      reflection:
        "Warum reichen Farad oder Amperestunden allein nicht aus, um eine nutzbare Energiemenge zu vergleichen?",
    }),
  },
  {
    id: "rc",
    title: "RC: Anfang, Zeitkonstante und Verlauf",
    lessonId: "capacitor",
    sheet: "4.3–4.5",
    formulas: [14],
    visual: "rc",
    quantities: [
      "R: Ladewiderstand in Ω",
      "C: Kapazität in F",
      "τ: Zeitkonstante in s",
      "U_C: momentane Kondensatorspannung in V",
    ],
    teaching: [
      "Ein ungeladener Kondensator an einer Gleichspannungsquelle lädt über einen Widerstand zunächst mit dem größten Strom. Während seine Spannung steigt, bleibt weniger Spannung am Widerstand und der Strom sinkt.",
      "Nach einer Zeitkonstante sind beim Laden rund 63,2 % der Endspannung erreicht. Nach etwa fünf Zeitkonstanten sind es 99,3 %. Vollständig erreicht wird der Endwert im idealen mathematischen Modell erst im Grenzfall unendlich langer Zeit.",
    ],
    make: (v) => ({
      text: `Ein zunächst ungeladener Kondensator mit ${v ? 100 : 50} µF wird über 20 kΩ an 10 V angeschlossen.`,
      steps: [
        n(
          "Berechne die Zeitkonstante in s.",
          "20000*c/1000000",
          { c: v ? 100 : 50 },
          "s",
          "Setze den Widerstand in Ω und die Kapazität in F ein.",
          "Das Produkt aus Ohm und Farad hat die Dimension Zeit.",
        ),
        n(
          "Welcher Ladestrom fließt direkt nach dem Einschalten?",
          "1000*10/20000",
          {},
          "mA",
          "Am Anfang liegt praktisch die ganze Quellenspannung am Widerstand.",
          "Der Anfangsstrom beträgt 0,50 mA.",
          0.001,
        ),
        n(
          "Welche Spannung ist nach genau einer Zeitkonstante erreicht?",
          "10*(1-exp(-1))",
          {},
          "V",
          "Verwende ungefähr 63,2 % von 10 V.",
          "Nach einer Zeitkonstante sind rund 6,32 V erreicht.",
          0.02,
        ),
        c(
          "Welche Kombination beschreibt den weiteren Ladevorgang?",
          [
            "Spannung steigt, Ladestrom sinkt",
            "Spannung und Strom steigen bis unendlich",
            "Spannung sinkt, Ladestrom bleibt konstant",
          ],
          0,
          "Je größer die Kondensatorspannung, desto kleiner der verbleibende Spannungsfall am Widerstand.",
          "Die Kondensatorspannung steigt gegen den Endwert, der Strom geht gegen null.",
        ),
      ],
      reflection:
        "Wie unterscheiden sich die Anzeigen bei intaktem Kondensator, unterbrochener Zuleitung und Kurzschluss im Kondensator?",
    }),
  },
  {
    id: "magnetic",
    title: "Von Durchflutung zu Feld und Fluss",
    lessonId: "magnetic-quantities",
    sheet: "5.5–5.6",
    formulas: [18, 19, 16],
    quantities: [
      "N: Windungszahl ohne Einheit",
      "Θ: Durchflutung in A",
      "H: Feldstärke in A/m",
      "B: Flussdichte in T",
      "Φ: magnetischer Fluss in Wb",
    ],
    teaching: [
      "Strom und Windungszahl bestimmen die Durchflutung. Bezogen auf die mittlere magnetische Weglänge ergibt sich die Feldstärke. Erst das Material beziehungsweise seine Kennlinie verbindet H mit B.",
      "Magnetischer Fluss beschreibt den durch eine Fläche tretenden Feldanteil. Die Fläche muss passend umgerechnet werden. Ein fester Permeabilitätswert für Eisen gilt höchstens näherungsweise an einem bestimmten Betriebspunkt.",
    ],
    make: (v) => ({
      text: `Eine Spule hat ${v ? 400 : 200} Windungen und führt 0,10 A. Die mittlere Feldlinienlänge beträgt 0,20 m. Separat sei B = 0,50 T auf einer senkrechten Fläche von 6 cm² gegeben.`,
      steps: [
        n(
          "Berechne die Durchflutung in A.",
          "n*0.1",
          { n: v ? 400 : 200 },
          "A",
          "Multipliziere Windungszahl und Strom.",
          "Die Windungszahl ist dimensionslos; die Durchflutung wird in Ampere angegeben.",
        ),
        n(
          "Berechne die magnetische Feldstärke.",
          "n*0.1/0.2",
          { n: v ? 400 : 200 },
          "A/m",
          "Teile die Durchflutung durch die mittlere Weglänge.",
          "H ist Feldstärke, nicht magnetische Flussdichte.",
        ),
        n(
          "Rechne 6 cm² in m² um.",
          "6/10000",
          {},
          "m²",
          "Der Längenfaktor muss quadriert werden.",
          "6 cm² sind 0,0006 m².",
          1e-8,
        ),
        n(
          "Welcher Fluss tritt bei B = 0,50 T senkrecht durch diese Fläche?",
          "0.5*6/10000",
          {},
          "Wb",
          "Multipliziere die gegebene Flussdichte mit der Fläche.",
          "Dieser Fluss verwendet das separat vorgegebene B; ohne Materialinformation könnte B nicht aus H allein bestimmt werden.",
          1e-8,
        ),
      ],
      reflection:
        "Erkläre, warum Tesla und Weber verschiedene Größen beschreiben.",
    }),
  },
  {
    id: "motor",
    title: "Kraft und Motorprinzip",
    lessonId: "magnets",
    sheet: "5.8–5.9",
    formulas: [15],
    quantities: [
      "B: magnetische Flussdichte in T",
      "I: technische Stromstärke in A",
      "l: wirksame Leiterlänge in m",
      "F: Kraft in Newton (N)",
    ],
    teaching: [
      "Ein stromdurchflossener Leiter im äußeren Magnetfeld kann eine Kraft erfahren. Ihr Betrag hängt von Strom, Flussdichte, aktiver Leiterlänge und Winkel ab. Hier steht der Leiter senkrecht zum Feld.",
      "In einer Leiterschleife wirken auf zwei gegenüberliegende Seiten entgegengesetzte Kräfte. Zusammen erzeugen sie ein Drehmoment. Für eine fortgesetzte Motorbewegung muss die Strom- oder Feldanordnung passend weiterschalten; eine gezeichnete Kreisbewegung allein erklärt das noch nicht.",
    ],
    make: (v) => ({
      text: `Ein aktiver Leiterabschnitt von ${v ? 80 : 40} mm liegt senkrecht in einem Feld von 0,25 T. Der Strom beträgt 2 A.`,
      steps: [
        n(
          "Wie lang ist der aktive Abschnitt in m?",
          "l/1000",
          { l: v ? 80 : 40 },
          "m",
          "Nur der im Feld wirksame Abschnitt zählt.",
          "Die Millimeter werden vor der Rechnung in Meter umgerechnet.",
          1e-7,
        ),
        n(
          "Wie groß ist die magnetische Kraft?",
          "0.25*2*l/1000",
          { l: v ? 80 : 40 },
          "N",
          "Bei senkrechter Lage ist der Winkelfaktor eins.",
          "Das Ergebnis ist eine Kraft in Newton, noch kein Drehmoment.",
          1e-5,
        ),
        c(
          "Was bewirkt die Umkehr der Stromrichtung bei gleichem äußeren Feld?",
          [
            "Die Kraftrichtung kehrt um.",
            "Die Kraft muss in dieselbe Richtung wirken.",
            "Die Flussdichte muss null werden.",
          ],
          0,
          "Kraftrichtung hängt gemeinsam von Feldrichtung und Stromrichtung ab.",
          "Mit umgekehrtem Strom kehrt sich bei gleichem Feld die Kraft um.",
        ),
        c(
          "Warum braucht ein einfacher Gleichstrommotor eine Kommutierung?",
          [
            "Damit seine Kupferleitung zum Dauermagneten wird.",
            "Damit das Drehmoment nach der Weiterdrehung passend gerichtet bleibt.",
            "Damit Energie ohne elektrische Aufnahme entsteht.",
          ],
          1,
          "Denke an die beiden Seiten der sich drehenden Schleife.",
          "Die Umschaltung sorgt dafür, dass die antreibende Wirkung nach dem Weiterdrehen fortgesetzt wird.",
        ),
      ],
      reflection:
        "Welche zusätzliche Information brauchst du, um aus zwei Kräften einen Zahlenwert für das Drehmoment zu bestimmen?",
    }),
  },
  {
    id: "induction",
    title: "Flussänderung und Induktionsspannung",
    lessonId: "electromagnetism",
    sheet: "5.10–5.11",
    formulas: [17],
    visual: "induction",
    quantities: [
      "Φ: Fluss durch eine Windung in Wb",
      "N: Windungszahl",
      "Δt: betrachtete Zeitspanne in s",
      "U_ind: Induktionsspannung in V",
    ],
    teaching: [
      "Induktion hängt von der zeitlichen Änderung der Flussverkettung ab. Ein großer gleichbleibender Fluss erzeugt in einer ruhenden Schleife keine Induktionsspannung. Die Steigung des Fluss-Zeit-Diagramms ist deshalb entscheidend.",
      "Die Lenzsche Regel beschreibt die Gegenwirkung auf die Änderung. Bei abnehmendem äußeren Fluss versucht die induzierte Wirkung, diesen aufrechtzuerhalten. Sie wirkt also nicht pauschal dem ursprünglichen Feld entgegen.",
    ],
    make: (v) => ({
      text: `Eine Spule besitzt ${v ? 200 : 100} Windungen. Der Fluss je Windung sinkt gleichmäßig in 20 ms von 0,6 mWb auf 0,2 mWb.`,
      steps: [
        n(
          "Wie groß ist die Zeitspanne in s?",
          "20/1000",
          {},
          "s",
          "Milli bedeutet ein Tausendstel.",
          "20 ms entsprechen 0,020 s.",
          1e-7,
        ),
        n(
          "Bestimme die Flussänderung Ende minus Anfang in Wb.",
          "(0.2-0.6)/1000",
          {},
          "Wb",
          "Rechne mWb in Wb um und beachte das Vorzeichen.",
          "Die Änderung ist negativ, weil der Fluss sinkt.",
          1e-8,
        ),
        n(
          "Wie groß ist der Betrag der mittleren Induktionsspannung?",
          "n*0.0004/0.02",
          { n: v ? 200 : 100 },
          "V",
          "Multipliziere den Betrag der Änderungsrate mit der Windungszahl.",
          "Ein Vorzeichen für die Spannung erfordert zusätzlich eine vereinbarte räumliche Orientierung.",
        ),
        n(
          "Wie groß ist die Induktionsspannung auf einem anschließenden Abschnitt mit konstantem Fluss?",
          "0",
          {},
          "V",
          "Bei konstantem Fluss ist die zeitliche Änderung null.",
          "Ein von null verschiedener konstanter Fluss reicht nicht aus, um eine Spannung zu induzieren.",
        ),
      ],
      reflection:
        "Welche Wirkung hat bei gleicher Flussänderung eine halb so lange Änderungsdauer?",
    }),
  },
  {
    id: "graph",
    title: "Kennlinien richtig lesen",
    lessonId: "ohm",
    sheet: "0.5 / 2.7",
    formulas: [5],
    visual: "characteristic",
    quantities: [
      "U: waagerechte Achse in V",
      "I: senkrechte Achse in mA",
      "R: Quotient Spannung/Strom in Ω",
    ],
    teaching: [
      "Lies zuerst Größe und Einheit jeder Achse. Eine gerade Linie durch den Ursprung weist unter den betrachteten Bedingungen auf einen konstanten Widerstand hin. Bei einer gekrümmten Kennlinie hängt der Quotient vom Betriebspunkt ab.",
      "Verwechsle das Verhältnis von Spannung und Strom nicht mit einem beliebigen optischen Steigungswinkel. Unterschiedliche Achsenskalierungen können dieselbe Physik ganz unterschiedlich aussehen lassen. Eine alternative Wertetabelle ist genauso wichtig wie die Zeichnung.",
    ],
    make: (v) => ({
      text: `Für ein Bauteil wurden zwei Wertepaare gemessen: 1 V bei ${v ? 5 : 10} mA und 2 V bei ${v ? 20 : 30} mA. Nutze die exakten Tabellenwerte.`,
      steps: [
        n(
          "Berechne den Widerstandsquotienten am ersten Punkt.",
          "1/(i/1000)",
          { i: v ? 5 : 10 },
          "Ω",
          "Rechne mA in A um, bevor du dividierst.",
          "Der erste Betriebspunkt liefert nur den Quotienten an dieser Stelle.",
        ),
        n(
          "Berechne den Widerstandsquotienten am zweiten Punkt.",
          "2/(i/1000)",
          { i: v ? 20 : 30 },
          "Ω",
          "Nutze das zweite Wertepaar.",
          "Unterschiedliche Quotienten zeigen, dass R in diesem Bereich nicht konstant ist.",
          0.02,
        ),
        c(
          "Gilt das einfache Modell eines konstanten ohmschen Widerstands für beide Punkte?",
          [
            "Ja, weil Spannung und Strom immer positiv sind.",
            "Nein, die Quotienten sind verschieden.",
            "Ja, weil jeder Leiter stets denselben Widerstand besitzt.",
          ],
          1,
          "Vergleiche die beiden von dir berechneten Werte.",
          "Die unterschiedlichen Werte passen nicht zu einer einzigen Ursprungsgeraden mit konstantem Widerstand.",
        ),
      ],
      reflection:
        "Wie würdest du bei einer gezeichneten Kennlinie eine sinnvolle Ablesetoleranz berücksichtigen?",
    }),
  },
];

families.push(
  {
    id: "geometry",
    title: "Querschnitt, Potenz und Wurzel",
    lessonId: "resistance",
    sheet: "0.7",
    formulas: [],
    quantities: [
      "d: Durchmesser in mm",
      "r: Radius in mm",
      "A: Querschnitt in mm²",
    ],
    teaching: [
      "Der Durchmesser verläuft durch den ganzen Kreis; der Radius ist seine Hälfte. Eine Fläche wächst mit dem Quadrat einer Länge. Ein doppelt dicker runder Draht hat deshalb die vierfache Querschnittsfläche.",
      "Benutze bei der Flächenberechnung den passenden Radius und quadriere auch die Einheit. Bei der Umkehrung von einer Fläche zu einer Länge brauchst du eine Quadratwurzel. Die Rechenregel ist dieselbe wie bei elektrischen Beziehungen mit einem Quadrat.",
    ],
    make: (v) => ({
      text: `Ein runder Draht besitzt einen Durchmesser von ${v ? 2 : 1} mm. Berechne seine Querschnittsfläche. Verwende für π mindestens 3,14159.`,
      steps: [
        n(
          "Wie groß ist der Radius?",
          "d/2",
          { d: v ? 2 : 1 },
          "mm",
          "Der Radius ist der halbe Durchmesser.",
          "Der Durchmesser darf nicht direkt als Radius eingesetzt werden.",
        ),
        n(
          "Wie groß ist die Kreisfläche?",
          "pi*(d/2)^2",
          { d: v ? 2 : 1 },
          "mm²",
          "Quadriere den Radius und multipliziere mit π.",
          "Das Ergebnis wird in Quadratmillimetern angegeben.",
          0.002,
        ),
        c(
          "Was bewirkt eine Verdopplung des Durchmessers?",
          ["Doppelte Fläche", "Vierfache Fläche", "Halbe Fläche"],
          1,
          "Die Länge geht quadratisch in die Fläche ein.",
          "Eine Verdopplung beider Flächenrichtungen ergibt den Faktor vier.",
        ),
      ],
      reflection:
        "Warum darfst du bei einer Fläche nicht denselben Umrechnungsfaktor wie bei einer Länge benutzen?",
    }),
  },
  {
    id: "directions",
    title: "Feldrichtung, Punkt und Kreuz",
    lessonId: "electromagnetism",
    sheet: "5.1–5.4",
    formulas: [],
    quantities: [
      "⊙: technische Stromrichtung aus der Zeichenebene heraus",
      "⊗: technische Stromrichtung in die Zeichenebene hinein",
      "B: magnetische Flussdichte und ihre Richtung",
    ],
    teaching: [
      "Ein Punkt steht für die auf dich zukommende Pfeilspitze; ein Kreuz steht für das von dir wegweisende Pfeilende. Die Erklärung in Worten ist wichtig, damit das Symbol allein keine Hürde bleibt.",
      "Die rechte Hand verwendet die technische Stromrichtung. Hältst du den Daumen aus der Zeichenebene heraus zu dir, zeigen die Finger gegen den Uhrzeigersinn. Mit umgekehrter Stromrichtung kehrt sich das kreisförmige Feld um.",
    ],
    make: (v) => ({
      text: `Ein gerader Leiter führt technischen Strom ${v ? "in die Zeichenebene hinein (Kreuz)" : "aus der Zeichenebene heraus (Punkt)"}. Betrachte das Blatt von vorn.`,
      steps: [
        c(
          "Welche Bedeutung hat das angegebene Zeichen?",
          [
            "Der Strom steht still.",
            v ? "Der Strom zeigt von dir weg." : "Der Strom zeigt zu dir hin.",
            "Es ist ein Batteriesymbol.",
          ],
          1,
          "Stelle dir den Kopf und das Ende eines Pfeils vor.",
          "Die Zeichensprache beschreibt eine räumliche Richtung; sie ist kein Plus- oder Minuspol.",
        ),
        c(
          "Wie umlaufen die magnetischen Feldlinien den Leiter?",
          [
            "Im Uhrzeigersinn",
            "Gegen den Uhrzeigersinn",
            "Geradlinig vom Leiter nach außen",
          ],
          v ? 0 : 1,
          "Rechter Daumen in technische Stromrichtung, gekrümmte Finger zeigen das Feld.",
          "Beim Umkehren des Stroms kehrt sich die Feldrichtung um.",
        ),
        c(
          "Welche Form haben die Feldlinien beim idealisierten langen geraden Leiter?",
          [
            "Kreise um die Leiterachse",
            "Gerade Linien entlang der Leiterachse",
            "Offene Linien mit Anfang und Ende",
          ],
          0,
          "Unterscheide das Magnetfeld eines Drahts vom elektrischen Feld einer Ladung.",
          "Die magnetischen Feldlinien umlaufen den Leiter. Sie sind keine Wege einzelner Elektronen.",
        ),
      ],
      reflection:
        "Zeichne auf Papier beide Stromrichtungen und beschrifte zusätzlich zu den Zeichen die Richtung in Worten.",
    }),
  },
  {
    id: "hysteresis",
    title: "Magnetische Kennlinie und Werkstoffwahl",
    lessonId: "magnetic-quantities",
    sheet: "5.7",
    formulas: [],
    quantities: [
      "H: magnetische Feldstärke in A/m",
      "B: magnetische Flussdichte in T",
      "Remanenz: verbleibende Flussdichte nach vorheriger Magnetisierung",
      "Koerzitivfeldstärke: Gegenfeld zur Aufhebung der verbleibenden Flussdichte",
    ],
    teaching: [
      "Eine ferromagnetische Kennlinie hängt von der Vorgeschichte ab. Nach Abschalten des magnetisierenden Stroms kann Magnetisierung zurückbleiben. Das wird durch eine Hystereseschleife beschrieben.",
      "Eine schmale Schleife ist für häufiges Ummagnetisieren vorteilhaft. Eine hohe Beständigkeit gegen Entmagnetisierung passt dagegen zu einem Dauermagneten. Die Schleifenfläche beschreibt Energieverluste pro Volumen und Zyklus, nicht unmittelbar die gesamte elektrische Leistung.",
    ],
    make: (v) => ({
      text: `Wähle einen geeigneten magnetischen Werkstoff für ${v ? "einen Dauermagneten" : "einen häufig ummagnetisierten Kern"}.`,
      steps: [
        c(
          "Welche Werkstoffgruppe passt eher?",
          [
            "Weichmagnetisch",
            "Hartmagnetisch",
            "Das ist allein von der elektrischen Leitfähigkeit abhängig",
          ],
          v ? 1 : 0,
          "Unterscheide leichtes Ummagnetisieren von beständiger Magnetisierung.",
          v
            ? "Für einen Dauermagneten ist eine beständige Magnetisierung erwünscht."
            : "Für häufige Ummagnetisierung soll das nötige Gegenfeld klein und die Schleife schmal sein.",
        ),
        c(
          "Wie heißt eine nach vorheriger Magnetisierung bei H = 0 verbleibende Flussdichte?",
          ["Kapazität", "Remanenz", "Elektrischer Widerstand"],
          1,
          "Die Magnetisierung kann eine Vorgeschichte behalten.",
          "Remanenz beschreibt die verbleibende magnetische Wirkung.",
        ),
        c(
          "Welche Aussage über die Hysteresefläche ist richtig?",
          [
            "Sie ist bereits die Gesamtleistung in Watt.",
            "Sie kennzeichnet Energieverluste pro Volumen und Zyklus.",
            "Sie ist grundsätzlich bei jedem Material null.",
          ],
          1,
          "Für Leistung wären zusätzlich Zeit beziehungsweise Frequenz und Volumen nötig.",
          "Die Schleifenfläche gehört zur Verlustenergie je Volumen für einen vollständigen Zyklus.",
        ),
      ],
      reflection:
        "Warum bedeutet hartmagnetisch nicht automatisch mechanisch besonders hart?",
    }),
  },
  {
    id: "transformer",
    title: "Generator, Transformator und Wirbelstrom",
    lessonId: "electromagnetism",
    sheet: "5.11",
    formulas: [17],
    quantities: [
      "N₁, N₂: Windungszahlen der Wicklungen",
      "U₁, U₂: Spannungen in V im idealisierten Transformator",
      "Φ: zeitlich veränderlicher magnetischer Fluss",
    ],
    teaching: [
      "Ein Generator verändert durch Bewegung die mit einer Wicklung verkettete Flussmenge. Ein Transformator kann dieselbe notwendige Änderung ohne mechanische Bewegung durch einen wechselnden Strom in der Primärwicklung erzeugen.",
      "Beim idealisierten Transformator folgen die Spannungen dem Windungsverhältnis. Die reale Spannung und Verluste hängen zusätzlich vom Betriebspunkt ab. Eine konstante Gleichspannung ist keine gleichwertige Versorgung einer für Wechselspannung ausgelegten Wicklung.",
    ],
    make: (v) => ({
      text: `Ein idealisierter Transformator besitzt primär 500 Windungen und sekundär ${v ? 100 : 50} Windungen. An der Primärwicklung liegen 20 V Wechselspannung an.`,
      steps: [
        model(
          "Der zeitlich veränderliche Fluss durchsetzt beide Wicklungen.",
          [
            "Ein unveränderlicher Fluss erzeugt dauerhaft dieselbe Induktionsspannung.",
            "Die Energie entsteht im Eisenkern ohne Zufuhr.",
          ],
          "Die gemeinsame Ursache ist die zeitliche Änderung der Flussverkettung.",
        ),
        n(
          "Welcher Anteil der Primärwindungszahl liegt sekundär vor?",
          "n/500",
          { n: v ? 100 : 50 },
          "",
          "Teile die sekundäre durch die primäre Windungszahl.",
          "Das Windungsverhältnis ist dimensionslos.",
        ),
        n(
          "Wie groß ist die sekundäre Spannung im idealisierten Modell?",
          "20*n/500",
          { n: v ? 100 : 50 },
          "V",
          "Wende den Windungsanteil auf die Primärspannung an.",
          "Weniger sekundäre Windungen ergeben hier eine kleinere Ausgangsspannung.",
        ),
        c(
          "Was beschreibt eine Wirbelstrombremse?",
          [
            "Induzierte Ströme wirken der verursachenden Bewegung entgegen.",
            "Ein Magnet erzeugt ohne Bewegung immer eine dauernde Bremsleistung.",
            "Die Bewegung erzeugt Energie ohne Arbeit.",
          ],
          0,
          "Nutze die Lenzsche Regel und die Energieerhaltung.",
          "Bei der Bewegung induzierte Ströme erzeugen eine Gegenwirkung; Bewegungsenergie wird überwiegend in Wärme umgewandelt.",
        ),
      ],
      reflection:
        "Warum kann beim Bremsen eine Kraft auftreten, obwohl der Magnet die leitende Schiene nicht berührt?",
    }),
  },
  {
    id: "materials",
    title: "Leitfähigkeit, Magnetismus und Abschirmung",
    lessonId: "magnets",
    sheet: "0.1 / 5.2 / 5.6",
    formulas: [],
    quantities: [
      "Leitfähigkeit: Fähigkeit zum elektrischen Ladungstransport",
      "Permeabilität: magnetisches Materialverhalten",
      "Ferromagnetisch und paramagnetisch: unterschiedliche magnetische Reaktion",
    ],
    teaching: [
      "Ein elektrisch gut leitendes Metall ist nicht automatisch ferromagnetisch. Kupfer und Aluminium werden wegen ihrer Leitfähigkeit verwendet; ihr magnetisches Verhalten ist davon zu unterscheiden.",
      "Die passende Abschirmung hängt von der Feldart und der Frequenz ab. Eine leitende Hülle kann elektrische Felder abschirmen. Ein statisches Magnetfeld benötigt ein anderes Konzept, etwa eine geeignete hochpermeable Führung des Flusses.",
    ],
    make: (v) => ({
      text: `Für ${v ? "ein Gerät mit Störungen durch ein statisches Magnetfeld" : "eine elektrische Leitung mit kleinen Verlusten"} soll ein geeignetes Materialprinzip gewählt werden.`,
      steps: [
        c(
          "Welche Eigenschaft ist hier zuerst wichtig?",
          [
            "Hohe elektrische Leitfähigkeit",
            "Geeignetes hochpermeables magnetisches Material",
            "Eine besonders helle Lackfarbe",
          ],
          v ? 1 : 0,
          "Elektrischer Transport und magnetische Feldführung sind unterschiedliche Aufgaben.",
          v
            ? "Eine passende hochpermeable Form kann den magnetischen Fluss bevorzugt führen; Sättigung und Öffnungen begrenzen die Wirkung."
            : "Für geringe Leitungsverluste ist eine hohe elektrische Leitfähigkeit wichtig.",
        ),
        c(
          "Welche Stoffgruppe kann besonders starke Magnetisierung und Domänen zeigen?",
          [
            "Ferromagnetische Stoffe",
            "Alle elektrisch leitenden Stoffe in gleicher Weise",
            "Jedes Kunststoffmaterial",
          ],
          0,
          "Denke an Eisen, Nickel und Kobalt unter passenden Bedingungen.",
          "Ferromagnetische Stoffe unterscheiden sich deutlich von schwach paramagnetischen oder diamagnetischen Stoffen.",
        ),
        c(
          "Welche Aussage zur Abschirmung ist richtig?",
          [
            "Kupfer schirmt jedes statische Magnetfeld vollständig ab.",
            "Elektrische Isolation und magnetische Abschirmung sind dieselbe Funktion.",
            "Material, Geometrie und Feldfrequenz müssen zusammen betrachtet werden.",
          ],
          2,
          "Die Feldart bestimmt das geeignete Prinzip.",
          "Eine universelle Abschirmhülle für jede Feldart und jede Frequenz ist kein brauchbares Modell.",
        ),
      ],
      reflection:
        "Erkläre mit eigenen Worten, warum ein Kunststoffmantel um einen Draht keine vollständige elektromagnetische Abschirmung ist.",
    }),
  },
  {
    id: "dc-ac",
    title: "Stromkreisarten und Anschlussbezeichnungen",
    lessonId: "voltage",
    sheet: "2.2",
    formulas: [],
    quantities: [
      "DC: Gleichstrom / Gleichspannung",
      "AC: Wechselstrom / Wechselspannung",
      "PE: Schutzleiter, kein normaler Betriebsrückleiter",
      "N: Neutralleiter; nicht mit PE gleichsetzen",
    ],
    teaching: [
      "Gleich- und Wechselstrom beschreiben die zeitliche Richtung. Reihe und parallel beschreiben dagegen die Verbindung der Bauteile. Eine Wechselstromschaltung kann sowohl Reihen- als auch Parallelzweige enthalten.",
      "Bei Gleichspannung bleibt die Polarität fest; der Betrag darf trotzdem schwanken. Bei Wechselspannung wechselt die Polarität. Einphasige und dreiphasige Versorgung sind weitere Unterscheidungen; Leiterbezeichnungen sind keine Erlaubnis, Anschlüsse selbst zu verändern.",
    ],
    make: (v) => ({
      text: `Du vergleichst ${v ? "den Ausgang eines USB-Netzteils mit seinem Wechselspannungseingang" : "eine Batterie mit einer sinusförmigen Wechselspannungsquelle"}.`,
      steps: [
        c(
          "Welche Unterscheidung beschreibt DC gegenüber AC?",
          [
            "Ob sich die Polarität regelmäßig umkehrt",
            "Ob zwei Widerstände nebeneinander gezeichnet sind",
            "Ob das Gehäuse aus Metall ist",
          ],
          0,
          "Es geht um den zeitlichen Verlauf und seine Richtung.",
          "AC wechselt die Polarität, während sie bei DC fest bleibt.",
        ),
        c(
          "Muss Gleichspannung zu jedem Zeitpunkt denselben Betrag haben?",
          [
            "Ja, das ist immer dieselbe Aussage.",
            "Nein, konstante Gleichspannung ist ein zusätzlicher Spezialfall.",
            "Nein, deshalb muss sie ständig die Polarität wechseln.",
          ],
          1,
          "Unterscheide feste Richtung von konstanter Höhe.",
          "Eine Gleichspannung kann einen schwankenden Betrag bei fester Polarität besitzen.",
        ),
        c(
          "Welche Aussage über den Schutzleiter PE ist richtig?",
          [
            "Er ist der übliche Rückleiter für jeden Betriebsstrom.",
            "Er erfüllt eine Schutzfunktion und wird nicht als normaler Betriebsrückleiter behandelt.",
            "Er ist dasselbe wie der Minuspol jeder Batterie.",
          ],
          1,
          "Betriebsfunktion und Schutzfunktion dürfen nicht verwechselt werden.",
          "PE ist ein Schutzleiter. Er ist weder allgemein ein Neutralleiter noch ein Batterie-Minuspol.",
        ),
      ],
      reflection:
        "Ordne Reihe/parallel und DC/AC zwei getrennten Kategorien zu und nenne je ein Beispiel.",
    }),
  },
);

families.push(
  {
    id: "capacitor-check",
    title: "Kondensator prüfen und Kennwerte lesen",
    lessonId: "capacitor",
    sheet: "4.2 / 4.4",
    formulas: [],
    quantities: [
      "µF: Mikrofarad, Einheit der Kapazität",
      "V: Volt, zulässige Spannung am Bauteil",
      "Ladestrom: anfangs groß, anschließend abnehmend",
    ],
    teaching: [
      "Kapazität und Spannungsfestigkeit auf einem Kondensator sind verschiedene Angaben. Eine höhere erlaubte Spannung ist keine Aussage darüber, auf welche Spannung der Kondensator gerade geladen ist.",
      "Beim idealisierten Funktionstest mit Vorwiderstand steigt die Kondensatorspannung und der Strom nimmt ab. Ein dauernder ungewöhnlich großer Strom kann auf einen Defekt hinweisen; bei einer Unterbrechung lädt der Kondensator nicht wie vorgesehen. Die Aufgabe ist eine Modellbetrachtung, keine Anleitung zum Öffnen eines Netzgeräts.",
    ],
    make: (v) => ({
      text: v
        ? "Ein idealisierter Kondensatortest zeigt vom Einschalten an keinen Strom. Die Zuleitung im Ladekreis ist unterbrochen."
        : "Ein Kondensator trägt die Angaben 100 µF und 25 V. Beschreibe seine Kennwerte und den normalen Ladevorgang über einen Widerstand.",
      steps: [
        c(
          "Was bezeichnet die Angabe in µF?",
          [
            "Die gespeicherte Leistung",
            "Die Kapazität",
            "Die höchste Stromstärke",
          ],
          1,
          "Die Kapazität wird in Farad und seinen Teilgrößen angegeben.",
          "µF beschreibt die Kapazität; es ist keine Spannungs- oder Leistungsangabe.",
        ),
        c(
          "Was beschreibt die Spannungsangabe auf dem Bauteil?",
          [
            "Die zulässige Betriebsspannung unter den angegebenen Bedingungen",
            "Die immer vorhandene momentane Spannung",
            "Eine garantierte Stromstärke",
          ],
          0,
          "Unterscheide Grenzwert und aktuellen Zustand.",
          "Die Spannungsfestigkeit ist ein zulässiger Kennwert, kein automatisch vorhandener Spannungswert.",
        ),
        c(
          "Welche Beobachtung passt zum beschriebenen Fall?",
          [
            "Spannung steigt und Strom nimmt ab",
            "Kein Ladestrom durch den unterbrochenen Kreis",
            "Unbegrenztes Anwachsen der Ladestromstärke",
          ],
          v ? 1 : 0,
          "Prüfe zuerst, ob der Stromkreis überhaupt geschlossen ist.",
          v
            ? "Durch die Unterbrechung kann der vorgesehene Ladefluss nicht stattfinden."
            : "Mit zunehmender Kondensatorspannung bleibt weniger Spannung für den Ladewiderstand.",
        ),
      ],
      reflection:
        "Warum beweist ein einzelner Spannungsmesswert allein noch nicht die vollständige Funktion eines realen Kondensators?",
    }),
  },
  {
    id: "source-bank",
    title: "Quellen in Reihe und parallel",
    lessonId: "circuits",
    sheet: "3.12",
    formulas: [3, 4],
    quantities: [
      "U₀: Leerlaufspannung in V",
      "R_i: Innenwiderstand einer Modellquelle in Ω",
      "N: Anzahl gleicher Modellquellen",
    ],
    teaching: [
      "In Reihe addieren sich gleichgerichtete Quellenspannungen und die Innenwiderstände. Bei ideal passend parallel betriebenen gleichen Quellen bleibt die Spannung gleich; der Strom kann sich aufteilen.",
      "Das Rechnen mit Modellquellen ist keine Freigabe zum beliebigen Parallelschalten echter Batterien oder Netzteile. Unterschiedliche Spannungen, Polung, Ladezustände und Regelungen können Ausgleichsströme verursachen; reale Systeme brauchen passende Freigaben und Schutzkonzepte.",
    ],
    make: (v) => ({
      text: `Vier identische Modellzellen mit je ${v ? 3 : 2} V Leerlaufspannung und je 0,20 Ω Innenwiderstand werden zu zwei parallelen Strängen aus jeweils zwei gleichgerichteten Zellen in Reihe zusammengefasst.`,
      steps: [
        model(
          "Zuerst jeden Serienstrang berechnen, dann die gleichen Stränge parallel zusammenfassen.",
          [
            "Alle Spannungen unabhängig von der Verbindung addieren.",
            "Innenwiderstände existieren nur außerhalb einer Quelle.",
          ],
          "Die tatsächlichen Knoten entscheiden über die Kombination.",
        ),
        n(
          "Welche Leerlaufspannung besitzt ein Serienstrang?",
          "2*u",
          { u: v ? 3 : 2 },
          "V",
          "Zwei gleichgerichtete Spannungen in Reihe addieren sich.",
          "Beide Stränge besitzen im Modell denselben Leerlaufwert.",
        ),
        n(
          "Welchen Innenwiderstand besitzt ein Serienstrang?",
          "2*0.2",
          {},
          "Ω",
          "Die beiden Innenwiderstände liegen in Reihe.",
          "Ein Serienstrang hat 0,40 Ω Innenwiderstand.",
        ),
        n(
          "Wie groß ist der gemeinsame Innenwiderstand der zwei gleichen Parallelstränge?",
          "0.4/2",
          {},
          "Ω",
          "Zwei gleiche Widerstände parallel halbieren den Einzelwert.",
          "Der Ersatz-Innenwiderstand beträgt 0,20 Ω; die Gesamtleerlaufspannung bleibt gleich der Strangspannung.",
        ),
      ],
      reflection:
        "Warum ist das Ergebnis der Modellrechnung allein keine praktische Anschlusserlaubnis?",
    }),
  },
  {
    id: "parallel-force",
    title: "Kraft zwischen parallelen Leitern",
    lessonId: "electromagnetism",
    sheet: "5.8",
    formulas: [],
    quantities: [
      "I₁, I₂: technische Ströme in A",
      "r: Leiterabstand in m",
      "F/l: Kraft pro Leiterlänge in N/m",
      "μ₀: hier näherungsweise 4π · 10⁻⁷ H/m",
    ],
    teaching: [
      "Zwei parallele stromdurchflossene Leiter wirken magnetisch aufeinander. Gleichgerichtete Ströme ziehen sich an, entgegengesetzte stoßen sich ab. Diese Aussage bezieht sich auf die technische Stromrichtung.",
      "Für lange parallele Leiter in Luft ist die Kraft pro Länge proportional zum Produkt der Ströme und umgekehrt proportional zum Abstand. Der Zahlenfaktor ist näherungsweise 2 · 10⁻⁷. Das ist ein idealisiertes Modell; Leiterenden und benachbarte Leiter werden vernachlässigt.",
    ],
    make: (v) => ({
      text: `Zwei lange parallele Leiter führen jeweils ${v ? 200 : 100} A in dieselbe Richtung. Ihr Abstand beträgt 0,10 m. In diesem Modell berechnest du die Kraft pro Meter, indem du 2 · 10⁻⁷ mit beiden Strömen multiplizierst und durch den Abstand teilst.`,
      steps: [
        c(
          "Welche Kraftrichtung passt?",
          [
            "Anziehung",
            "Abstoßung",
            "Bei parallelen Strömen gibt es grundsätzlich keine Kraft",
          ],
          0,
          "Vergleiche die beiden technischen Stromrichtungen.",
          "Gleichgerichtete Ströme in parallelen Leitern ziehen sich an.",
        ),
        n(
          "Berechne die Kraft pro Meter in N/m.",
          "2*10^-7*i*i/0.1",
          { i: v ? 200 : 100 },
          "N/m",
          "Multipliziere den angegebenen Faktor mit dem Produkt beider Ströme; teile durch 0,10 m.",
          "Die Kraft wächst mit dem Produkt der Ströme. Bei gleicher Stromverdopplung beider Leiter entsteht die vierfache Kraft.",
          1e-6,
        ),
        c(
          "Wie ändert sich die Kraft bei doppeltem Abstand und gleichen Strömen?",
          [
            "Sie verdoppelt sich.",
            "Sie halbiert sich.",
            "Sie vervierfacht sich.",
          ],
          1,
          "Der Abstand steht im Nenner der angegebenen Modellbeziehung.",
          "Doppelter Abstand ergibt in diesem Modell die halbe Kraft pro Länge.",
        ),
      ],
      reflection:
        "Warum können Kräfte bei sehr großen Fehlerströmen wichtiger werden als bei normalen Betriebsströmen?",
    }),
  },
  {
    id: "angles",
    title: "Winkel, Fläche und magnetischer Fluss",
    lessonId: "magnets",
    sheet: "0.7 / 5.5",
    formulas: [16],
    quantities: [
      "α: Winkel zwischen Feldrichtung und Flächennormale; im Formelbild dafür θ (Theta)",
      "A: Fläche in m²",
      "B: Flussdichte in T",
      "Φ: Fluss in Wb",
    ],
    teaching: [
      "Bei einer schräg stehenden Fläche zählt ihr wirksamer Anteil senkrecht zur Feldrichtung. Der Winkel wird hier gegen die Flächennormale gemessen; das ist eine gedachte Linie senkrecht zur Fläche.",
      "In dieser Konvention ist der Fluss bei null Grad maximal und bei 90 Grad null. Die Winkelfunktion nutzt Gradwerte, die im Rechner passend behandelt werden müssen. Der Winkel zur Fläche selbst wäre eine andere Angabe.",
    ],
    make: (v) => ({
      text: `Ein homogenes Feld von 0,20 T durchsetzt eine Fläche von 10 cm². Der Winkel zwischen Feld und Flächennormale beträgt ${v ? 60 : 0}°.`,
      steps: [
        n(
          "Rechne die Fläche in m² um.",
          "10/10000",
          {},
          "m²",
          "Quadriere den Längen-Umrechnungsfaktor.",
          "10 cm² sind 0,001 m².",
          1e-8,
        ),
        c(
          "Welche Winkelangabe wird verwendet?",
          [
            "Der Winkel zur Flächennormale",
            "Der Winkel zur Seitenkante des Blatts",
            "Ein beliebiger Winkel ohne Bezug",
          ],
          0,
          "Lies die Definition im Aufgabentext.",
          "Die Flächennormale steht senkrecht auf der betrachteten Fläche.",
        ),
        n(
          "Berechne den magnetischen Fluss.",
          "0.2*0.001*cos(a*pi/180)",
          { a: v ? 60 : 0 },
          "Wb",
          "Bei 0° ist der Kosinus eins; bei 60° ist er 0,5.",
          "Der schräge Feldanteil wird über den Kosinus des Winkels zur Normalen berücksichtigt.",
          1e-8,
        ),
      ],
      reflection:
        "Warum ist bei 90° zur Flächennormale trotz vorhandenem Magnetfeld der Fluss durch diese Fläche null?",
    }),
  },
  {
    id: "symbols",
    title: "Schaltplan lesen und skizzieren",
    lessonId: "circuits",
    sheet: "0.8–0.11",
    formulas: [],
    visual: "mixed",
    quantities: [
      "Knoten: leitende Verbindung mehrerer Zweige",
      "R: Widerstandssymbol als Rechteck in dieser Darstellung",
      "Bezugspfeil: gewählte positive Richtung einer Größe",
    ],
    teaching: [
      "Ein Schaltplan zeigt elektrische Verbindungen, nicht den räumlichen Aufbau auf dem Tisch. Ein Widerstand kann waagerecht oder senkrecht gezeichnet sein, ohne dadurch seine Funktion zu ändern.",
      "Beim Skizzieren müssen Anschlussknoten, Bauteilnamen und Bezugspfeile eindeutig bleiben. Eine freie Zeichnung lässt sich nicht sinnvoll durch exakten Textvergleich bewerten. Zeichne deshalb auf Papier und kontrolliere den erhaltenen Stromweg selbst.",
    ],
    make: (v) => ({
      text: `Betrachte die schematische gemischte Schaltung. ${v ? "Zeichne sie auf Papier mit senkrecht angeordnetem Serienwiderstand neu." : "Zeichne dieselben Verbindungen auf Papier in einer anderen räumlichen Anordnung."} Die elektrischen Knoten müssen gleich bleiben.`,
      steps: [
        c(
          "Was entscheidet über Reihe oder parallel?",
          [
            "Die Farbe der Bauteile",
            "Die leitenden Verbindungen und Knoten",
            "Nur die räumliche Nähe",
          ],
          1,
          "Verfolge den Weg von Anschluss zu Anschluss.",
          "Die Topologie wird durch die Knoten bestimmt, nicht durch die äußere Anordnung.",
        ),
        c(
          "Woran erkennst du zwei parallele Widerstände?",
          [
            "Sie liegen zwischen denselben beiden Knoten.",
            "Sie besitzen immer dieselbe Länge im Bild.",
            "Ihre Zahlenwerte müssen gleich sein.",
          ],
          0,
          "Vergleiche beide Endpunkte jedes Elements.",
          "Die gemeinsamen beiden Knoten legen dieselbe Spannung fest.",
        ),
        c(
          "Wie prüfst du deine umgezeichnete Schaltung?",
          [
            "Nur nach optischer Ähnlichkeit",
            "Bauteil für Bauteil die Anschlussknoten vergleichen",
            "Nur die verwendeten Farben zählen",
          ],
          1,
          "Der Stromweg muss unverändert bleiben.",
          "Die Knotenprüfung kontrolliert die elektrische Gleichwertigkeit. Die Qualität deiner freien Skizze bewertest du zusätzlich selbst.",
        ),
      ],
      reflection:
        "Beschrifte deine Skizze, markiere die Parallelgruppe und erkläre einer zweiten Person den Stromweg.",
    }),
  },
  {
    id: "safety",
    title: "Sicherheitsgrundlagen und Hilfe holen",
    lessonId: "current",
    sheet: "1.1–1.5",
    formulas: [],
    quantities: [
      "112: europäische Notrufnummer",
      "PE: Schutzleiter",
      "Einwirkdauer: Zeit, in der Strom durch den Körper fließt",
    ],
    teaching: [
      "Ein elektrischer Unfall ist keine Situation zum Ausprobieren eines Rechenmodells. Eigenschutz und das Unterbrechen einer Gefährdung ohne eigene Gefährdung haben Vorrang. Bei einem Notfall wird Hilfe über 112 gerufen und den Anweisungen der Leitstelle gefolgt.",
      "Die Wirkung auf den Körper hängt unter anderem von Stromweg, Stromstärke und Einwirkdauer ab. Eine berechnete kleine Zahl oder ein pauschaler Spannungswert ist keine Garantie für Sicherheit. Fachliche Befugnisse und aktuelle Schutzregeln werden nicht durch eine bestandene Webaufgabe ersetzt. Hinweise zur Ersten Hilfe: Deutsches Rotes Kreuz, drk.de/hilfe-in-deutschland/erste-hilfe/.",
    ],
    make: (v) => ({
      text: v
        ? "Eine Person fragt, ob ein anhand eines festen Körperwiderstands berechneter Strom die Sicherheit eines Kontakts garantiert."
        : "Du bemerkst einen möglichen Stromunfall. Die elektrische Gefährdung ist noch nicht sicher beendet.",
      steps: [
        c(
          "Welche Grundentscheidung ist richtig?",
          [
            "Die betroffene Person sofort mit bloßen Händen aus dem möglicherweise noch aktiven Stromkreis ziehen.",
            "Eigenschutz beachten, keine zusätzliche gefährdete Person werden und professionelle Hilfe holen.",
            "Zuerst den Strom mit einem beliebigen Haushaltsmessgerät messen.",
          ],
          1,
          "Eine Hilfeleistung darf die helfende Person nicht selbst in den Stromweg bringen.",
          "Eigenschutz und Hilfe holen sind entscheidend. Diese Lernaufgabe ersetzt keinen Erste-Hilfe-Kurs.",
        ),
        c(
          "Welche Notrufnummer ist hier richtig?",
          [
            "112",
            "Eine zufällige Nummer vom Netzteil",
            "Der Produktcode des Geräts",
          ],
          0,
          "Nutze die europäische Notrufnummer.",
          "112 verbindet mit dem Rettungsdienst beziehungsweise der zuständigen Leitstelle.",
        ),
        c(
          "Welche Aussage zur Körperwirkung ist richtig?",
          [
            "Die Einwirkdauer ist grundsätzlich unwichtig.",
            "Ein vereinfachtes Widerstandsmodell garantiert Sicherheit.",
            "Stromweg, Stärke, Dauer und Kontaktbedingungen beeinflussen die Gefahr.",
          ],
          2,
          "Eine einfache Modellrechnung erfasst nicht alle Kontaktbedingungen.",
          "Die Wirkung hängt von mehreren Bedingungen ab. Regeln und qualifizierte Maßnahmen bleiben notwendig.",
        ),
      ],
      reflection:
        "Lies die aktuellen Erste-Hilfe-Hinweise des DRK und bespreche offene Fragen im Unterricht; leite aus dieser Aufgabe keine Berechtigung zu Arbeiten an elektrischen Anlagen ab.",
    }),
  },
);

export const workshopTasks = validateTasks(
  families.flatMap((family) =>
    [0, 1].map((variant) => {
      const { make, id, ...metadata } = family;
      return {
        ...metadata,
        ...make(variant),
        id: `${id}-${variant + 1}`,
        family: id,
      };
    }),
  ),
);
export const workshopFamilies = families.map(
  ({ id, title, lessonId, sheet }) => ({ id, title, lessonId, sheet }),
);
