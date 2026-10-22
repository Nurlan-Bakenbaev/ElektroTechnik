/** Additional German teaching material. Original thirteen quiz IDs remain stable. */
const openStax =
  "https://openstax.org/books/university-physics-volume-2/pages/";
export const foundations = [
  {
    id: "current-origin",
    title: "Was ist Strom – und woher kommt er?",
    lessonId: "current",
    related: ["current", "voltage", "ohm"],
    lead: "Strom ist kein Stoff, den ein Netzteil erst in ein leeres Kabel hineinfüllt. Er ist die gerichtete Bewegung vorhandener elektrischer Ladungen. Die Quelle liefert die Energie, die diese Bewegung ermöglicht.",
    sections: [
      {
        title: "Die Elektronen sind schon im Draht",
        paragraphs: [
          "Ein Metall besteht aus positiv geladenen Atomrümpfen und beweglichen Elektronen. Die Atomrümpfe bleiben im Gitter; die Elektronen bewegen sich auch ohne angeschlossene Batterie ungeordnet. Über einen Leiterquerschnitt wird dabei im Mittel keine Ladung in eine bevorzugte Richtung transportiert.",
          "Schließt du den Stromkreis, stellt die Quelle im Leiter ein elektrisches Feld bereit. Es übt Kräfte auf die Elektronen aus. Zu ihrer ungeordneten Bewegung kommt eine kleine gerichtete Drift hinzu. Diese Drift ist der elektrische Strom im Metall. In Flüssigkeiten können dagegen positive und negative Ionen den Strom tragen.",
        ],
      },
      {
        title: "Was die Quelle wirklich liefert",
        paragraphs: [
          "Eine Batterie wandelt chemische Energie um und hält eine Spannung zwischen ihren Polen aufrecht. Ein Generator nutzt mechanische Arbeit; eine Solarzelle wandelt Lichtenergie um. Diese Quellen erzeugen nicht laufend neue Elektronen für das Kabel. Sie stellen elektrische Energie bereit.",
          "Die Änderung des elektrischen Feldes breitet sich sehr viel schneller durch den Aufbau aus, als ein einzelnes Elektron driftet. Darum reagiert die Lampe schnell. Sie wartet nicht darauf, dass ein bestimmtes Elektron den ganzen Weg von der Batterie bis zur Lampe zurücklegt.",
        ],
      },
      {
        title: "Warum Hin- und Rückweg nötig sind",
        paragraphs: [
          "Für dauerhaften Gleichstrom muss es einen geschlossenen Weg geben: von einer Quellenklemme durch Leitungen und Verbraucher zurück zur anderen Klemme. In der Batterie setzt sich der Strom über Ionenbewegung und Reaktionen fort. Ein offener Schalter unterbricht den dauerhaften Ladungsfluss; Spannung kann trotzdem vorhanden sein.",
          "Die Lampe wandelt Energie in Licht und Wärme um. Sie verbraucht keine Elektronen. Im unverzweigten Kreis fließt deshalb vor und nach der Lampe dieselbe Stromstärke. Im äußeren Metallkreis bewegen sich Elektronen von Minus nach Plus. Die technische Stromrichtung ist entgegengesetzt festgelegt: von Plus nach Minus.",
        ],
      },
    ],
    example: {
      title: "Was bedeutet 0,5 Ampere?",
      given:
        "An einer festen Schnittfläche im Draht werden in 4 s insgesamt 2 C Ladungsbetrag transportiert.",
      steps: [
        "C bedeutet Coulomb: die Einheit der Ladungsmenge. s bedeutet Sekunde: die Einheit der Zeit.",
        "Teile die gesamte Ladungsmenge durch die Zeit: 2 geteilt durch 4 ergibt 0,5 Coulomb je Sekunde.",
        "Ein Coulomb je Sekunde heißt ein Ampere. Die Stromstärke beträgt 0,5 A oder 500 mA. Das beschreibt eine Transportrate, nicht die Geschwindigkeit einzelner Elektronen.",
      ],
      result:
        "Die Quelle liefert Energie; 0,5 A beschreibt, wie viel Ladung pro Sekunde an der Messstelle vorbeikommt.",
    },
    units: ["charge", "current", "time", "voltage"],
    check: {
      question: "Was wird in einer Lampe umgewandelt?",
      options: [
        "Elektronen verschwinden als Licht.",
        "Elektrische Energie wird zu Licht und Wärme.",
        "Die Stromstärke wird hinter der Lampe grundsätzlich null.",
      ],
      correct: 1,
      explanation:
        "Die Energie wird umgewandelt, die elektrische Ladung bleibt erhalten. Im unverzweigten stationären Stromkreis ist die Stromstärke vor und nach der Lampe gleich.",
    },
    sources: [
      {
        title: "OpenStax: Current and Drift Velocity",
        url: openStax + "9-2-model-of-conduction-in-metals",
      },
    ],
  },
  {
    id: "dc-ac",
    title: "Gleichstrom und Wechselstrom mit Beispielen",
    lessonId: "voltage",
    related: ["current", "voltage", "circuits"],
    lead: "DC und AC beschreiben den zeitlichen Verlauf einer elektrischen Größe. Unterscheide immer Spannung und Stromstärke: Eine Spannungsquelle kann bereits Spannung bereitstellen, obwohl noch kein Strom fließt.",
    explorer: true,
    sections: [
      {
        title: "Gleichspannung und Gleichstrom: feste Richtung",
        paragraphs: [
          "Eine Gleichspannung behält ihre Polarität. Bei einer konstanten Gleichspannung bleibt auch der Betrag gleich, zum Beispiel idealisiert 5 V am USB-Ausgang. Gleichstrom behält seine Richtung. Sein Betrag darf sich ändern; erst konstanter Gleichstrom bleibt auch im Betrag gleich.",
          "Eine Batterie und der geregelte Ausgang eines Netzteils sind typische Gleichspannungsquellen. Ob und wie viel Gleichstrom fließt, entscheidet der angeschlossene Stromkreis. Ein Router kann bei derselben Versorgungsspannung je nach Betriebszustand unterschiedlich viel Strom aufnehmen.",
        ],
      },
      {
        title: "Wechselspannung: die Polarität wechselt",
        paragraphs: [
          "Bei einer Wechselspannung wechselt die Polarität. Bei einem sinusförmigen Verlauf durchläuft die Spannung positive und negative Werte. Bei Wechselstrom ändert sich die technische Stromrichtung entsprechend seinem eigenen zeitlichen Verlauf; in realen Verbrauchern müssen Strom und Spannung nicht gleichzeitig ihren Nulldurchgang haben.",
          "Das deutsche Stromnetz arbeitet mit ungefähr 230 V Effektivwert und 50 Hz. Hertz bedeutet vollständige Perioden pro Sekunde: 50 Hz sind 50 Perioden, mit zwei Polaritätswechseln pro Periode. Die Elektronen im Leiter bewegen sich dabei hin und her. Sie reisen nicht in jeder Periode vom Kraftwerk bis zum Computer.",
        ],
      },
      {
        title: "Was macht das Netzteil?",
        paragraphs: [
          "Am Eingang eines PC-Netzteils steht AC, an seinen Ausgängen DC. Das Netzteil richtet die Eingangsspannung gleich, verarbeitet die Energie elektronisch und stellt passende geregelte Ausgangsspannungen bereit. Dass intern schnell geschaltet wird, macht den vorgesehenen DC-Ausgang nicht zu einem 230-V-Netzanschluss.",
          "230 V ist beim sinusförmigen Netz die Effektivspannung, nicht der höchste Augenblickswert. Der Scheitelwert liegt ungefähr bei 325 V. Diese Größen darfst du nicht verwechseln. Die Beispiele erklären Angaben auf Geräten; Messversuche an der Steckdose gehören nicht zu dieser Lernplattform.",
        ],
      },
    ],
    comparison: {
      columns: [
        "Merkmal",
        "Konstante Gleichspannung",
        "Sinusförmige Wechselspannung",
      ],
      rows: [
        ["Polarität", "bleibt gleich", "wechselt regelmäßig"],
        [
          "Betrag",
          "bleibt im idealen Beispiel gleich",
          "ändert sich fortlaufend",
        ],
        [
          "Beispiel",
          "5 V am geregelten USB-Ausgang",
          "230 V / 50 Hz am Netzeingang",
        ],
        [
          "Angabe lesen",
          "DC oder Gleichspannungssymbol",
          "AC, Sinuszeichen und oft Frequenz",
        ],
      ],
    },
    example: {
      title: "Ein Ladegerät richtig einordnen",
      given:
        "Auf dem Eingang steht 100–240 V AC, 50/60 Hz; auf einem Ausgangsprofil 5 V DC, maximal 2 A.",
      steps: [
        "Die AC-Angabe gehört zum Eingang. Das Gerät ist für einen bestimmten Wechselspannungsbereich vorgesehen.",
        "Die 5 V gehören zum DC-Ausgang. Sie sind eine andere Spannung an einem anderen Anschluss.",
        "2 A sind die maximale bereitstellbare Ausgangsstromstärke dieses Profils. Die tatsächlich fließende Stromstärke hängt vom Gerät ab.",
      ],
      result:
        "Eingangs- und Ausgangsangaben gehören zu verschiedenen Seiten des Netzteils.",
    },
    units: ["voltage", "current"],
    check: {
      question: "Was bedeuten 50 Hz bei einer Sinusspannung?",
      options: [
        "50 vollständige Perioden in einer Sekunde.",
        "50 Volt Spannung.",
        "50 Elektronen pro Sekunde.",
      ],
      correct: 0,
      explanation:
        "Hertz ist die Einheit der Frequenz. Eine Sinusperiode enthält eine positive und eine negative Halbwelle. 50 Hz beschreibt weder Spannung noch Stromstärke.",
    },
    sources: [
      { title: "OpenStax: AC Sources", url: openStax + "15-1-ac-sources" },
    ],
  },
  {
    id: "quantities",
    title: "Spannung, Strom, Arbeit, Leistung und Wirkungsgrad",
    lessonId: "power",
    related: ["voltage", "current", "ohm", "energy", "power", "efficiency"],
    lead: "Diese Größen beantworten verschiedene Fragen. Lerne zuerst ihre Bedeutung und Einheit; erst danach wählst du eine passende Formel. Eine Zahl ohne Einheit reicht für eine elektrotechnische Aussage nicht aus.",
    sections: [
      {
        title: "Antrieb und Ladungsfluss unterscheiden",
        paragraphs: [
          "Die Spannung U beschreibt Energie pro Ladung zwischen zwei Punkten. Ihre Einheit ist Volt (V). Die Stromstärke I beschreibt Ladung pro Zeit durch einen Querschnitt. Ihre Einheit ist Ampere (A). 12 V und 2 A lassen sich deshalb nicht als größere und kleinere Version derselben Größe vergleichen.",
          "Die Ladungsmenge Q wird in Coulomb (C) gemessen. Ein Ampere entspricht einem Coulomb je Sekunde. Für einen ohmschen Widerstand verbindet das Ohmsche Gesetz Spannung und Stromstärke. Es sagt nicht, dass jedes elektronische Gerät unter allen Betriebsbedingungen einen festen Widerstand besitzt.",
        ],
      },
      {
        title: "Leistung ist eine Rate, Energie eine Menge",
        paragraphs: [
          "Leistung P beschreibt, wie schnell Energie übertragen oder umgesetzt wird. Die Einheit Watt (W) bedeutet Joule pro Sekunde. Ein Kilowatt sind 1000 Watt. Bei konstantem Gleichstrom erhältst du die Leistung an einem Anschluss aus Spannung mal Stromstärke.",
          "Elektrische Arbeit bezeichnet eine Energieübertragung. In Aufgaben heißen die Formelzeichen dafür häufig W oder E; die Einheit ist Joule (J), Wattstunde (Wh) oder Kilowattstunde (kWh). Ein W hinter einer Zahl ist dagegen die Leistungseinheit Watt. Kilowattstunden sind keine Kilowatt pro Stunde: Das h multipliziert die Leistung mit einer Betriebsdauer.",
        ],
      },
      {
        title: "Wirkungsgrad erklärt die Verluste",
        paragraphs: [
          "Der Wirkungsgrad η, gesprochen Eta, vergleicht die nutzbare Abgabe mit der gesamten Zufuhr. Im stationären Betrieb kannst du Leistungen vergleichen. 80 % bedeutet den Faktor 0,8: Von 100 zugeführten Energieanteilen werden 80 für den gewünschten Zweck genutzt.",
          "Ein Netzteil mit 80 W Abgabe und 80 % Wirkungsgrad nimmt 100 W auf. Die Differenz von 20 W ist Verlustleistung, überwiegend Wärme. Die Energie verschwindet nicht. Beim Vergleichen musst du dieselbe Systemgrenze und denselben Zeitraum verwenden.",
        ],
      },
    ],
    comparison: {
      columns: ["Größe", "Bedeutung", "Einheit"],
      rows: [
        ["Spannung U", "Energie pro Ladung zwischen zwei Punkten", "Volt (V)"],
        ["Stromstärke I", "Ladung pro Zeit", "Ampere (A)"],
        ["Leistung P", "Energieumsatz pro Zeit", "Watt (W), Kilowatt (kW)"],
        [
          "Energie / Arbeit E oder W",
          "insgesamt übertragene Energie",
          "Joule (J), Wh, kWh",
        ],
        [
          "Wirkungsgrad η",
          "nutzbarer Anteil der Zufuhr",
          "ohne Einheit, oft Prozent",
        ],
      ],
    },
    example: {
      title: "Ein USB-Gerät läuft zwei Stunden",
      given:
        "Im betrachteten konstanten Betrieb liegen 5 V an und es fließen 2 A. Die Betriebsdauer beträgt 2 h.",
      steps: [
        "5 mal 2 ergibt 10 W elektrische Leistung am USB-Anschluss.",
        "10 W über 2 h ergeben 20 Wh, also 0,02 kWh Energie.",
        "Die Aufnahme an der Steckdose kann wegen der Netzteilverluste höher sein. Du darfst Ausgangsleistung und Eingangsleistung nicht gleichsetzen, wenn der Wirkungsgrad kleiner als 100 % ist.",
      ],
      result:
        "10 W beschreibt die Leistung, 20 Wh die Energie dieses zweistündigen Betriebs.",
    },
    units: ["voltage", "current", "power", "energy", "efficiency"],
    check: {
      question:
        "Ein Gerät nimmt konstant 50 W auf und läuft 4 h. Welche Energie ergibt sich?",
      options: ["200 W", "0,2 kWh", "12,5 Wh"],
      correct: 1,
      explanation:
        "50 W mal 4 h sind 200 Wh. Durch 1000 geteilt ergibt das 0,2 kWh. Watt allein ist keine Energiemenge.",
    },
    sources: [
      {
        title: "OpenStax: Electrical Energy and Power",
        url: openStax + "9-5-electrical-energy-and-power",
      },
    ],
  },
  {
    id: "fields",
    title: "Elektrisches und magnetisches Feld unterscheiden",
    lessonId: "field",
    related: ["field", "magnets", "magnetic-quantities"],
    lead: "Ein Feld beschreibt eine Wirkung im Raum. Es ist kein unsichtbarer Stoff, der durch Kabel oder Magnete fließt. Elektrische und magnetische Felder sind miteinander verbunden, haben aber unterschiedliche Eigenschaften.",
    sections: [
      {
        title: "Das elektrische Feld wirkt auf Ladungen",
        paragraphs: [
          "Eine elektrische Ladung kann auch ohne Berührung eine Kraft auf eine andere Ladung ausüben. Das elektrische Feld beschreibt diese Wirkung an jedem Ort. Die Feldrichtung ist als Kraftrichtung auf eine positive Probeladung definiert. Auf eine negative Ladung wirkt die elektrische Kraft entgegengesetzt.",
          "Die elektrische Feldstärke E wird in Newton pro Coulomb oder Volt pro Meter angegeben. Spannung gehört zu zwei Punkten, Feldstärke zu einem Ort. Zwischen großen parallelen Platten hängt die Feldstärke zusätzlich vom Plattenabstand ab: Gleiche Spannung bedeutet bei kleinerem Abstand ein stärkeres Feld.",
        ],
      },
      {
        title: "Das Magnetfeld hat andere Kraftwirkungen",
        paragraphs: [
          "Ströme und magnetisierte Materialien erzeugen Magnetfelder. Ein ruhender elektrischer Punktladungsträger erfährt allein durch das Magnetfeld keine magnetische Lorentzkraft. Bei Bewegung kann eine Kraft wirken, die senkrecht zur Bewegung und zum Feld steht. Magnetische Dipole, etwa eine Kompassnadel, können sich im Feld ausrichten.",
          "Die Flussdichte B wird in Tesla (T) gemessen. Die magnetische Feldstärke H hat die Einheit Ampere pro Meter (A/m). Der Fluss Φ in Weber (Wb) berücksichtigt zusätzlich eine Fläche. Ein elektrisches Feld kann etwa an einem geladenen Kondensator bestehen, ein Magnetfeld an einem Dauermagneten — jeweils ohne dauerhaften Strom in einer angeschlossenen Leitung.",
        ],
      },
      {
        title: "Feldlinien richtig lesen",
        paragraphs: [
          "Elektrische Feldlinien verlaufen in der Elektrostatik von positiven zu negativen Ladungen oder ins Unendliche. Magnetische Feldlinien sind quellenfrei; am Stabmagneten setzen sie sich außen von Nord nach Süd und innen zurück fort. Dichtere Linien zeigen in einer passenden Zeichnung ein stärkeres Feld.",
          "Die Linien sind keine Fäden und nicht automatisch die Flugbahnen von Teilchen. Eine Elektronenbahn hängt auch von der Anfangsgeschwindigkeit ab. Für die IT-Praxis hilft die Unterscheidung bei elektrostatischer Entladung, Störeinflüssen und der Wahl einer geeigneten Abschirmung.",
        ],
      },
    ],
    comparison: {
      columns: ["Frage", "Elektrisches Feld", "Magnetisches Feld"],
      rows: [
        [
          "Typische Quelle",
          "getrennte elektrische Ladungen",
          "Strom oder Magnetisierung",
        ],
        [
          "Grundlegende Kraftwirkung",
          "auf elektrische Ladungen, auch ruhende",
          "auf bewegte Ladungen und magnetische Dipole",
        ],
        ["Wichtige Größe", "E in V/m oder N/C", "B in T; H in A/m"],
        [
          "Beispiel",
          "aufgeladener Körper, Kondensator",
          "Kompass, Spule, Motor",
        ],
      ],
    },
    example: {
      title: "Wohin wirkt die Kraft auf ein Elektron?",
      given:
        "Ein elektrisches Feld zeigt nach rechts. Darin befindet sich ein negativ geladenes Elektron.",
      steps: [
        "Der Pfeil beschreibt die elektrische Kraft auf eine positive Probeladung.",
        "Das Elektron ist negativ geladen. Seine elektrische Kraft zeigt deshalb nach links.",
        "Die Feldrichtung ändert sich nicht dadurch, dass du eine andere Probeladung hineinsetzt, solange diese das Feld kaum beeinflusst.",
      ],
      result:
        "Feldrichtung nach rechts; elektrische Kraft auf das Elektron nach links.",
    },
    units: ["field", "charge", "fluxDensity", "magneticField", "flux"],
    check: {
      question: "Welche Aussage über eine ruhende Punktladung stimmt?",
      options: [
        "Ein elektrisches Feld kann eine elektrische Kraft auf sie ausüben.",
        "Nur ein Magnetfeld kann auf sie wirken.",
        "Ohne Strom kann kein elektrisches Feld bestehen.",
      ],
      correct: 0,
      explanation:
        "Die elektrische Kraft braucht keine Bewegung der Ladung. Der magnetische Anteil der Lorentzkraft auf eine Punktladung setzt dagegen Bewegung voraus.",
    },
    sources: [
      {
        title: "OpenStax: Electric Field",
        url: openStax + "5-4-electric-field",
      },
      {
        title: "OpenStax: Magnetic Fields and Lines",
        url: openStax + "11-2-magnetic-fields-and-lines",
      },
    ],
  },
  {
    id: "capacitors",
    title: "Kondensatoren: Ladung, Energie und Verhalten",
    lessonId: "capacitor",
    related: ["capacitor", "field", "energy"],
    lead: "Ein Kondensator trennt Ladungen und speichert Energie im elektrischen Feld. Er ist kein kleiner Akku mit derselben Funktionsweise. Für das Verständnis brauchst du Kapazität, Spannung und den zeitlichen Verlauf.",
    sections: [
      {
        title: "Was sich beim Laden verändert",
        paragraphs: [
          "Zwei leitende Flächen sind durch einen isolierenden Bereich getrennt. Die Quelle verschiebt Ladungen über den äußeren Stromkreis: Eine Seite hat einen Elektronenüberschuss, die andere einen gleich großen Mangel. Die Ladung läuft im idealen Modell nicht einfach durch den Isolierstoff.",
          "Die Kapazität beschreibt, wie viel Ladungsbetrag pro Volt auf einer Seite gespeichert wird. Ihr Formelzeichen ist C, ihre Einheit Farad (F). Das C hinter einer Zahl bezeichnet dagegen Coulomb, die Einheit der Ladungsmenge Q. Kapazität und Ladung sind verschiedene Größen.",
        ],
      },
      {
        title: "Warum das Laden Zeit braucht",
        paragraphs: [
          "Beim Laden über einen Widerstand steigt die Kondensatorspannung allmählich. Anfangs ist die Stromstärke groß; später sinkt sie, weil der Spannungsunterschied zwischen Quelle und Kondensator kleiner wird. Die Zeitkonstante τ, gesprochen Tau, hängt von Widerstand und Kapazität ab.",
          "Nach einer Zeitkonstante sind bei der Ladung eines anfangs ungeladenen idealen Kondensators etwa 63 % der Endspannung erreicht; nach fünf etwa 99 %. Beim Entladen fällt die Spannung ab. An konstanter Gleichspannung fließt durch den idealen Kondensator nach dem Einschwingen kein dauerhafter Strom. Reale Bauteile haben einen Leckstrom.",
        ],
      },
      {
        title: "Was für die Praxis wichtig ist",
        paragraphs: [
          "Kondensatoren können kurze Laständerungen abpuffern und Versorgungsspannungen glätten. Größere Kapazität allein garantiert keine passende Funktion: Zulässige Spannung, Polarität, ESR, Temperatur und Bauart sind ebenfalls wichtig. Ein gepolter Elektrolytkondensator darf nicht beliebig herum angeschlossen werden.",
          "Die gespeicherte Energie wächst bei gleicher Kapazität quadratisch mit der Spannung. Nach dem Abschalten kann deshalb weiterhin Energie vorhanden sein. Netzteile sind keine Übungsobjekte zum Öffnen. Die folgenden Beispiele beziehen sich auf das ideale Modell und die virtuelle Lernumgebung.",
        ],
      },
    ],
    example: {
      title: "100 Mikrofarad an 12 Volt",
      given: "Ein idealer Kondensator mit 100 µF wird auf 12 V geladen.",
      steps: [
        "100 µF sind 0,0001 F. Multipliziert mit 12 V ergibt das einen Ladungsbetrag von 0,0012 C, also 1,2 mC, auf jeder Platte.",
        "Die Platten tragen entgegengesetzte Vorzeichen. Die Gesamtladung des anfangs neutralen Kondensators bleibt null.",
        "Die gespeicherte Energie beträgt 0,0072 J. Bei derselben Kapazität und doppelter Spannung wäre sie viermal so groß.",
      ],
      result:
        "100 µF ist die Kapazität; 1,2 mC der Ladungsbetrag einer Platte; 0,0072 J die gespeicherte Energie.",
    },
    units: ["capacitance", "charge", "voltage", "energy", "time"],
    check: {
      question:
        "Was passiert mit der Energie eines idealen Kondensators bei doppelter Spannung und gleicher Kapazität?",
      options: [
        "Sie bleibt gleich.",
        "Sie verdoppelt sich.",
        "Sie vervierfacht sich.",
      ],
      correct: 2,
      explanation:
        "Die Energie hängt bei konstanter Kapazität quadratisch von der Spannung ab. Doppelter Spannungsbetrag bedeutet vierfache Energie.",
    },
    sources: [
      {
        title: "OpenStax: Capacitors and Capacitance",
        url: openStax + "8-1-capacitors-and-capacitance",
      },
      {
        title: "OpenStax: Energy Stored in a Capacitor",
        url: openStax + "8-3-energy-stored-in-a-capacitor",
      },
    ],
  },
  {
    id: "magnetic-materials",
    title: "Ferromagnetische, paramagnetische und diamagnetische Stoffe",
    lessonId: "magnets",
    related: ["magnets", "magnetic-quantities", "electromagnetism"],
    lead: "Elektrisch leitfähig und stark magnetisierbar bedeuten nicht dasselbe. Kupfer leitet gut, wird aber von einem ruhenden Dauermagneten nicht so angezogen wie Eisen. Entscheidend ist die magnetische Reaktion des Werkstoffs.",
    sections: [
      {
        title: "Ferromagnetisch: starke gemeinsame Ausrichtung",
        paragraphs: [
          "In ferromagnetischen Stoffen können sich magnetische Momente gemeinsam ordnen. Bereiche mit ähnlicher Magnetisierungsrichtung heißen Domänen oder Weiss-Bezirke. Ein äußeres Feld kann ihre Ausrichtung und Größe verändern. Deshalb ist die magnetische Wirkung sehr viel stärker als bei gewöhnlichen paramagnetischen Stoffen.",
          "Beispiele sind Eisen, Nickel und Kobalt unter passenden Temperaturbedingungen. Die Wirkung ist nicht beliebig linear: Sättigung, Hysterese und Temperatur spielen eine Rolle. Nach Entfernen des äußeren Feldes kann Magnetisierung zurückbleiben. Wie viel, hängt vom Werkstoff und seiner Vorgeschichte ab.",
        ],
      },
      {
        title: "Paramagnetisch und diamagnetisch: schwache Reaktionen",
        paragraphs: [
          "Paramagnetische Stoffe werden in ein stärkeres Magnetfeld schwach hineingezogen. Ihre magnetischen Momente richten sich unter dem äußeren Feld teilweise aus; die Wärmebewegung wirkt der Ordnung entgegen. Bei gewöhnlichen Paramagneten bleibt ohne äußeres Feld keine dauerhafte gemeinsame Magnetisierung wie bei einem Dauermagneten zurück. Beispiele sind Aluminium und Sauerstoff.",
          "Diamagnetische Stoffe reagieren mit einer schwachen Magnetisierung entgegen dem äußeren Feld. Beispiele sind Kupfer und Bismut. Die Wirkung ist im Alltag oft kaum sichtbar. Dass ein Magnet bewegtes Aluminium durch Wirbelströme bremsen kann, macht Aluminium nicht ferromagnetisch: Das ist ein anderer Effekt.",
        ],
      },
      {
        title: "Weich- und hartmagnetisch richtig einordnen",
        paragraphs: [
          "Weichmagnetische Werkstoffe lassen sich leicht ummagnetisieren und besitzen typischerweise eine kleine Koerzitivfeldstärke. Sie eignen sich für Transformator- und Elektromagnetkerne. Hartmagnetische Werkstoffe behalten ihre Magnetisierung stärker und eignen sich für Dauermagnete. Die Begriffe beschreiben magnetisches Verhalten, nicht die mechanische Härte.",
          "Auch die Aussage ‚Edelstahl ist unmagnetisch‘ ist zu pauschal. Das Verhalten hängt von Legierung und Gefüge ab. Für Kerne oder Abschirmungen zählen außerdem Frequenz, Verluste, Sättigung und Geometrie. Ein Materialname allein ersetzt kein Datenblatt.",
        ],
      },
    ],
    comparison: {
      columns: ["Art", "Reaktion auf ein äußeres Feld", "Beispiele"],
      rows: [
        [
          "Ferromagnetisch",
          "starke Magnetisierung; Hysterese und Sättigung möglich",
          "Eisen, Nickel, Kobalt",
        ],
        [
          "Paramagnetisch",
          "schwache Magnetisierung in Feldrichtung",
          "Aluminium, Sauerstoff",
        ],
        [
          "Diamagnetisch",
          "schwache Magnetisierung entgegen dem Feld",
          "Kupfer, Bismut",
        ],
      ],
    },
    example: {
      title: "Welcher Werkstoff passt wozu?",
      given:
        "Du vergleichst eine Kupferleitung, einen Transformatorenkern und einen Dauermagneten.",
      steps: [
        "Für die Leitung ist ein geringer elektrischer Widerstand wichtig. Daraus folgt keine starke ferromagnetische Wirkung.",
        "Der Kern soll sich im Betrieb wiederholt ummagnetisieren lassen. Geeignete weichmagnetische Werkstoffe verringern die dafür entstehenden Verluste.",
        "Ein Dauermagnet soll seine Magnetisierung behalten. Dafür eignen sich passende hartmagnetische Werkstoffe.",
      ],
      result:
        "Elektrische Leitfähigkeit, leichte Ummagnetisierung und dauerhafte Magnetisierung sind unterschiedliche Anforderungen.",
    },
    units: ["fluxDensity", "magneticField"],
    check: {
      question: "Welche Aussage ist fachlich richtig?",
      options: [
        "Jedes gut leitende Metall ist ferromagnetisch.",
        "Aluminium ist gewöhnlich paramagnetisch, Eisen ferromagnetisch.",
        "Weichmagnetisch bedeutet mechanisch weich.",
      ],
      correct: 1,
      explanation:
        "Leitfähigkeit und magnetisches Verhalten sind unterschiedliche Eigenschaften. Weichmagnetisch beschreibt die leichte Ummagnetisierung, nicht die mechanische Härte.",
    },
    sources: [
      {
        title: "OpenStax: Magnetism in Matter",
        url: openStax + "12-7-magnetism-in-matter",
      },
    ],
  },
  {
    id: "motors",
    title: "Elektromotoren: vom Strom zur Drehbewegung",
    lessonId: "electromagnetism",
    related: ["electromagnetism", "magnets", "power", "efficiency"],
    lead: "Ein Elektromotor wandelt elektrische Energie in mechanische Bewegung um. Das Grundprinzip ist die Kraft auf stromdurchflossene Leiter im Magnetfeld. Für eine dauerhafte Drehung muss das Zusammenspiel der Felder passend weitergeschaltet werden.",
    sections: [
      {
        title: "Wie aus einer Kraft ein Drehmoment wird",
        paragraphs: [
          "An den gegenüberliegenden Seiten einer stromdurchflossenen Leiterschleife im Magnetfeld wirken Kräfte in entgegengesetzte Richtungen. Weil sie an verschiedenen Stellen angreifen, können sie zusammen ein Drehmoment erzeugen. Der Rotor beginnt sich zu drehen; der Stator bildet den feststehenden Teil des Motors.",
          "Ein festes Magnetpaar allein sorgt noch nicht für eine dauerhafte Drehung. In einer ausgerichteten Stellung würde das Drehmoment verschwinden oder seine Richtung wechseln. Der Motor braucht deshalb eine geeignete Umschaltung der Ströme oder ein weiterlaufendes Drehfeld. Die Energie stammt aus der elektrischen Versorgung, nicht kostenlos aus dem Magneten.",
        ],
      },
      {
        title: "Drei wichtige Bauarten",
        paragraphs: [
          "Beim einfachen bürstenbehafteten Gleichstrommotor übernehmen Bürsten und Kommutator die passende Umschaltung im Rotor. Beim bürstenlosen Gleichstrommotor, BLDC, übernimmt das Elektronik. Häufig tragen dabei die feststehenden Wicklungen das geschaltete Feld und der Rotor die Dauermagnete. Viele PC-Lüfter nutzen dieses Prinzip.",
          "Beim Drehstrom-Asynchronmotor erzeugt der Stator ein drehendes Magnetfeld. Dieses induziert Ströme im Rotor; ihre Wechselwirkung mit dem Feld erzeugt Drehmoment. Im normalen Motorbetrieb läuft der Rotor etwas langsamer als das Drehfeld. Dieser Unterschied heißt Schlupf und ist für die Induktion wichtig.",
        ],
      },
      {
        title: "Leistung, Verluste und Generatorwirkung",
        paragraphs: [
          "Die elektrische Aufnahmeleistung ist nicht automatisch die mechanische Abgabeleistung. Wicklungswiderstand, Reibung und weitere Effekte erzeugen Verluste. Der Wirkungsgrad vergleicht die nutzbare mechanische Abgabe mit der elektrischen Aufnahme am betrachteten Betriebspunkt. Mehr Last kann die Stromaufnahme und Erwärmung verändern.",
          "Dreht ein mechanischer Antrieb eine geeignete Maschine, kann sie als Generator elektrische Energie abgeben. Auch im laufenden Motor wird eine Spannung induziert, die als Gegen-EMK bezeichnet wird. Deshalb lässt sich ein Motor nicht bei jeder Drehzahl wie ein fester ohmscher Widerstand behandeln. Nennwerte und die Elektronik gehören zur Beurteilung dazu.",
        ],
      },
    ],
    comparison: {
      columns: ["Bauart", "Wie das Feld passend weiterläuft", "Beispiel"],
      rows: [
        [
          "Bürstenmotor",
          "mechanischer Kommutator und Bürsten",
          "einfacher kleiner DC-Antrieb",
        ],
        ["BLDC-Motor", "elektronische Kommutierung", "viele PC-Lüfter"],
        [
          "Asynchronmotor",
          "Drehfeld im Stator, induzierte Rotorströme",
          "viele industrielle Antriebe",
        ],
      ],
    },
    example: {
      title: "Ein kleiner Gleichstrommotor",
      given:
        "Im betrachteten Betrieb liegen 12 V an und es fließen 0,5 A. Der Wirkungsgrad beträgt in diesem Betriebspunkt 80 %.",
      steps: [
        "12 mal 0,5 ergibt 6 W elektrische Aufnahmeleistung.",
        "80 % entspricht 0,8. Von 6 W werden im Modell 4,8 W mechanisch abgegeben.",
        "Die Differenz beträgt 1,2 W Verlustleistung. Eine längere Betriebsdauer vergrößert die insgesamt umgesetzte Energie; sie ist keine zusätzliche Leistungsangabe.",
      ],
      result: "6 W elektrisch hinein, 4,8 W mechanisch heraus, 1,2 W Verluste.",
    },
    units: ["voltage", "current", "power", "efficiency"],
    check: {
      question: "Warum braucht ein Motor Kommutierung oder ein Drehfeld?",
      options: [
        "Damit passende Kraftwirkungen auch nach der Drehung weiter ein Drehmoment erzeugen.",
        "Damit die Magneten Energie aus dem Nichts erzeugen.",
        "Damit durch die Wicklung keine Ladung mehr fließt.",
      ],
      correct: 0,
      explanation:
        "Die Ausrichtung von Rotor, Strömen und Feld verändert sich beim Drehen. Eine passende Umschaltung oder ein Drehfeld erhält die antreibende Wirkung.",
    },
    sources: [
      {
        title: "OpenStax: Force and Torque on a Current Loop",
        url: openStax + "11-5-force-and-torque-on-a-current-loop",
      },
      {
        title: "OpenStax: Electric Generators and Back Emf",
        url: openStax + "13-6-electric-generators-and-back-emf",
      },
    ],
  },
  {
    id: "shielding",
    title: "Werkstoffe und Abschirmungen: was schützt wogegen?",
    lessonId: "magnets",
    related: ["field", "magnets", "magnetic-quantities", "electromagnetism"],
    lead: "Eine Abschirmung muss zur Art des Feldes und zu seiner Frequenz passen. Ein leitfähiges Gehäuse ist nicht automatisch eine gute Abschirmung gegen ein statisches Magnetfeld. Werkstoff, Form, Öffnungen und Kontaktierung wirken zusammen.",
    sections: [
      {
        title: "Elektrische Felder: leitfähige Hülle",
        paragraphs: [
          "In einem leitfähigen Körper können sich Ladungen verschieben. Bei einem äußeren elektrostatischen Feld ordnen sie sich so an, dass im leitenden Material im Gleichgewicht kein elektrisches Feld verbleibt. Eine geschlossene leitfähige Hülle kann einen ladungsfreien Innenraum gegen äußere elektrostatische Felder abschirmen: das Grundprinzip des Faradayschen Käfigs.",
          "Eine solche elektrostatische Abschirmung braucht nicht in jedem idealen Fall eine Erdung. In realen Geräten sind Bezugspotenziale, Schirmverbindungen und Schutzmaßnahmen trotzdem entscheidend. Schutzleiter und Signalschirm haben unterschiedliche Aufgaben. Anschlüsse werden nach Hersteller- und Sicherheitsvorgaben ausgeführt, nicht nach einer pauschalen Bastelregel.",
        ],
      },
      {
        title: "Magnetfelder: Frequenz und Permeabilität zählen",
        paragraphs: [
          "Kupfer und Aluminium schirmen ein statisches Magnetfeld normalerweise nicht wirksam ab. Für langsam veränderliche oder statische Magnetfelder können geeignete Werkstoffe mit hoher Permeabilität, etwa passende weichmagnetische Legierungen, einen bevorzugten Weg für den magnetischen Fluss bieten. Das Feld wird um den zu schützenden Bereich herumgeführt, nicht einfach vernichtet.",
          "Auch diese Abschirmung hat Grenzen: Öffnungen, Geometrie, Sättigung und Materialbehandlung beeinflussen sie. Bei zeitlich veränderlichen Feldern entstehen in Leitern Wirbelströme; bei höheren Frequenzen wirken außerdem Reflexion und Absorption. Deshalb kann dieselbe Metallhülle gegen hochfrequente Störungen gut helfen und gegen einen ruhenden Dauermagneten schlecht.",
        ],
      },
      {
        title: "Was das für IT-Geräte und Kabel bedeutet",
        paragraphs: [
          "Ein metallisches Gehäuse, Kabelschirm und geeignete Steckverbinder können Störaussendung und Störeinkopplung verringern. Große Öffnungen, lange schlecht kontaktierte Übergänge oder ungeeignete Schirmanbindungen können die Wirkung verschlechtern. Eine Abschirmung ist ein zusammenhängendes System und kein einzelnes Stück Folie.",
          "Verdrillte Adern und differenzielle Signalübertragung helfen zusätzlich gegen bestimmte eingekoppelte Störungen; sie sind nicht dasselbe wie eine Abschirmung. Kunststoff kann gut elektrisch isolieren, ohne ein elektrisches oder magnetisches Störfeld wirksam abzuschirmen. Für die Auswahl fragst du zuerst: Welche Feldart, welche Frequenz und welcher Kopplungsweg sind relevant?",
        ],
      },
    ],
    comparison: {
      columns: ["Aufgabe", "Typischer Ansatz", "Wichtige Grenze"],
      rows: [
        [
          "Äußeres elektrostatisches Feld",
          "geschlossene leitfähige Hülle",
          "Öffnungen und Randbedingungen beachten",
        ],
        [
          "Statisches / langsames Magnetfeld",
          "geeigneter hochpermeabler Werkstoff",
          "Geometrie und Sättigung begrenzen die Wirkung",
        ],
        [
          "Hochfrequente Störungen",
          "geeignete leitfähige Schirmung und Kontaktierung",
          "Frequenz, Fugen, Kabel und Steckverbinder zählen",
        ],
        [
          "Elektrische Isolation",
          "geeigneter Isolierstoff",
          "Isolation ist nicht automatisch Feldabschirmung",
        ],
      ],
    },
    example: {
      title: "Warum hilft Kupferfolie nicht gegen jedes Feld?",
      given:
        "Du vergleichst ein störendes elektrostatisches Feld, ein Funksignal und einen ruhenden starken Magneten.",
      steps: [
        "Für das elektrostatische Feld ist die leitfähige, passende Hülle entscheidend. Eine lose offene Folie ist kein ideal geschlossener Käfig.",
        "Bei einem Funksignal hängen die Wirkung der Hülle und ihrer Öffnungen von der Frequenz und Kontaktierung ab.",
        "Gegen das statische Magnetfeld ist normale Kupferfolie meist ungeeignet. Hier brauchst du einen anderen Ansatz, etwa Abstand oder eine fachgerecht ausgelegte magnetische Abschirmung.",
      ],
      result:
        "Die Frage lautet nicht nur ‚Welches Metall?‘, sondern ‚Welche Feldart und welche Bedingungen?‘",
    },
    units: ["field", "fluxDensity", "magneticField"],
    check: {
      question: "Welche Aussage ist richtig?",
      options: [
        "Elektrische Isolation und Feldabschirmung sind immer dasselbe.",
        "Eine Kupferhülle hält jedes statische Magnetfeld zuverlässig fern.",
        "Die passende Abschirmung hängt von Feldart, Frequenz und Aufbau ab.",
      ],
      correct: 2,
      explanation:
        "Leitfähigkeit hilft bei anderen Mechanismen als hohe magnetische Permeabilität. Reale Abschirmungen müssen einschließlich Geometrie, Fugen und Anschlüssen beurteilt werden.",
    },
    sources: [
      {
        title: "OpenStax: Conductors in Electrostatic Equilibrium",
        url: openStax + "6-4-conductors-in-electrostatic-equilibrium",
      },
      {
        title: "OpenStax: Magnetism in Matter",
        url: openStax + "12-7-magnetism-in-matter",
      },
      {
        title: "OpenStax: Eddy Currents",
        url: openStax + "13-5-eddy-currents",
      },
    ],
  },
];
