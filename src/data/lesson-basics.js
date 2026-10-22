/** Topic-first beginner explanations with worked applications. Full references stay available. */
export const lessonBasics = {
  current: {
    context: "Elektrische Stromstärke",
    question: "Was ist elektrischer Strom, und wie misst man seine Stärke?",
    answer:
      "Elektrischer Strom ist die gerichtete Bewegung elektrischer Ladung. In einem Metalldraht übernehmen das die negativ geladenen Elektronen. Die Stromstärke beschreibt, wie viel Ladung pro Sekunde durch einen Querschnitt fließt. Sie wird in Ampere gemessen. Die Quelle liefert die Energie für den Ladungsfluss; die Elektronen sind schon im Draht vorhanden.",
    essentials: [
      "Die Quelle stellt Spannung und Energie bereit; die Elektronen sind bereits im Draht vorhanden.",
      "Für dauerhaften Gleichstrom braucht es einen geschlossenen leitfähigen Weg. Elektronen driften im äußeren Metallkreis von Minus nach Plus.",
      "1 A bedeutet 1 Coulomb Ladung pro Sekunde. Mehr Ampere bedeuten mehr Ladung pro Zeit, nicht automatisch mehr Spannung.",
    ],
    units: ["current", "charge", "time"],
    example: {
      title: "Von der Ladungsmenge zur Stromstärke",
      given:
        "In einem geschlossenen Modellstromkreis wird an einer festen Stelle im Draht gemessen: In 4 s fließen insgesamt 2 C Ladungsbetrag durch den Querschnitt. Gesucht ist die mittlere Stromstärke.",
      steps: [
        "Ordne die Angaben zu: Q ist die Ladungsmenge, hier 2 Coulomb (2 C). t ist die Zeit, hier 4 Sekunden (4 s). Ein Querschnitt ist eine gedachte Schnittfläche durch den Draht, an der wir die vorbeifließende Ladung zählen.",
        "Gesucht ist die Ladung in einer Sekunde. Teile deshalb die gesamte Ladungsmenge durch die gesamte Zeit: 2 geteilt durch 4 ergibt 0,5 Coulomb pro Sekunde.",
        "Ein Coulomb pro Sekunde heißt ein Ampere. Die mittlere Stromstärke beträgt also 0,5 A. Milli bedeutet ein Tausendstel: 0,5 A sind 500 mA. Kontrolle: 0,5 Coulomb je Sekunde ergeben in 4 Sekunden wieder 2 Coulomb.",
      ],
      result:
        "Die mittlere Stromstärke beträgt 0,5 A = 500 mA. Pro Sekunde passiert ein Ladungsbetrag von 0,5 Coulomb die Messstelle.",
    },
    sections: {
      "charge-carriers":
        "Die beweglichen Elektronen sind schon im Kabel vorhanden. Eine angeschlossene Quelle stellt einen elektrischen Antrieb bereit. Ist der Stromkreis geschlossen, entsteht eine gerichtete Bewegung dieser Ladungen.",
      "current-definition":
        "Stell dir vor, du zählst, wie viel Ladung in einer Sekunde an einer Stelle vorbeikommt. Genau diese Rate beschreibt die Stromstärke I. Der Buchstabe C hinter einer Zahl steht dabei für Coulomb, die Einheit der Ladungsmenge.",
      "current-direction":
        "In einem Metall wandern Elektronen im äußeren Kreis im Mittel von Minus nach Plus. Der Pfeil für den technischen Strom zeigt von Plus nach Minus. Das sind zwei Beschreibungen mit entgegengesetzter Richtung, kein Widerspruch.",
      "closed-loop":
        "Ein USB-Gerät braucht einen vollständigen Strompfad hin und zurück. Eine einzelne Verbindung reicht für einen dauerhaften Gleichstrom nicht. Die Spannung kann trotzdem schon vorhanden sein.",
      ammeter:
        "Für eine Strommessung muss derselbe Strom durch Messgerät und Verbraucher fließen. Deshalb gehört das Amperemeter in Reihe. Es wird nicht einfach wie ein Spannungsmesser an beide Pole einer Quelle gehalten.",
      "charge-conservation":
        "Der Router verbraucht Energie, nicht Elektronen. Was in einen unverzweigten Strompfad hineinfließt, fließt auch wieder heraus. An einer Verzweigung teilt sich die Stromstärke auf die Zweige auf.",
    },
  },
  circuits: {
    context: "Stromkreisarten",
    question: "Wie unterscheiden sich Reihen- und Parallelschaltung?",
    answer:
      "Ein Stromkreis verbindet eine Quelle über Leitungen und Verbraucher zu einem geschlossenen Weg. In einer Reihenschaltung gibt es nur einen gemeinsamen Strompfad. In einer Parallelschaltung teilt sich der Strom auf mehrere Zweige auf. Aus dieser Verbindung ergeben sich die Regeln für Strom und Spannung.",
    essentials: [
      "In Reihe gibt es einen gemeinsamen Stromweg.",
      "Parallel liegen die Zweige an derselben Spannung.",
      "Die Ströme paralleler Zweige addieren sich an der gemeinsamen Zuleitung.",
    ],
    units: ["voltage", "current", "resistance"],
    example: {
      title: "Gemeinsame 12-V-Versorgung",
      given:
        "Zwei Geräte hängen parallel an 12 V. Im betrachteten Betrieb braucht eines 1 A und das andere 0,5 A.",
      steps: [
        "Beide Geräte liegen an derselben Versorgungsspannung: 12 V.",
        "Addiere die Stromstärken der Zweige: 1 plus 0,5.",
        "Die gemeinsame Zuleitung führt 1,5 A. Schaltet das zweite Gerät ab, entfällt sein Anteil.",
      ],
      result:
        "Gesamtstrom: 1,5 A. Die Spannung wird bei idealer Versorgung nicht auf beide Geräte aufgeteilt.",
    },
    sections: {
      "circuit-language":
        "Ein Schaltplan zeigt, was elektrisch verbunden ist. Ein Knoten ist eine gemeinsame Verbindungsstelle; ein Zweig ist ein Stromweg zwischen Knoten. Die Lage eines Symbols auf dem Bildschirm ist weniger wichtig als seine Verbindungen.",
      series:
        "In Reihe müssen die Ladungen nacheinander durch alle Bauteile. Deshalb ist die Stromstärke überall gleich. Die Quellenspannung verteilt sich auf die Bauteile; ein unterbrochenes Glied stoppt den ganzen Strompfad.",
      parallel:
        "In einer Parallelschaltung gibt es mehrere Wege. An jedem Zweig liegt dieselbe Spannung; jeder Verbraucher bestimmt seinen eigenen Strombedarf. Die gemeinsame Quelle liefert die Summe dieser Ströme.",
      mixed:
        "Bei einer gemischten Schaltung suchst du zuerst kleine, eindeutig erkennbare Reihen- oder Parallelgruppen. Du vereinfachst eine Gruppe nach der anderen. Erst danach rechnest du vom Gesamtergebnis zu den einzelnen Bauteilen zurück.",
      "sources-and-states":
        "Ein offener Kreis führt keinen dauerhaften Gleichstrom. Ein Kurzschluss ist dagegen ein unerwünscht sehr niederohmiger Weg und kann große Ströme verursachen. Reale Netzteile dürfen nicht beliebig parallel oder in Reihe zusammengeschaltet werden.",
      "circuit-checks":
        "Frage zuerst: Wo teilt sich der Strom? Welche Bauteile liegen wirklich an denselben zwei Knoten? Danach prüfst du, ob die Teilströme zum Gesamtstrom und die Spannungen zur Quelle passen.",
    },
  },
  voltage: {
    context: "Elektrische Spannung",
    question: "Was ist Spannung, und warum kann sie ohne Strom vorhanden sein?",
    answer:
      "Spannung beschreibt den elektrischen Unterschied zwischen zwei Punkten: wie viel Energie pro Ladungsmenge übertragen werden kann. Anschaulich ist sie der elektrische Antrieb. Sie wird in Volt gemessen. An einer Batterie kann Spannung anliegen, obwohl der Schalter offen ist und kein dauerhafter Strom fließt.",
    essentials: [
      "Spannung U wird zwischen zwei Punkten angegeben und in Volt gemessen.",
      "Spannung und Strom sind verschiedene Größen.",
      "Ein Voltmeter misst zwischen zwei Punkten und wird parallel zum betrachteten Bauteil angeschlossen.",
    ],
    units: ["voltage", "current", "energy", "charge"],
    example: {
      title: "12 V und genügend Stromreserve",
      given:
        "Ein Gerät verlangt stabilisierte 12 V DC und bis zu 2 A. Stecker und Polarität sind bereits als passend geprüft.",
      steps: [
        "DC bedeutet Gleichspannung. Die geforderte Spannung ist 12 V.",
        "Ein geregeltes 12-V-/3-A-Netzteil kann genügend Strom bereitstellen; es erzwingt keine 3 A im Gerät.",
        "Ein 19-V-/2-A-Netzteil hat trotz passender Stromangabe die falsche Spannung.",
      ],
      result:
        "Die Spannung muss passen. Mehr mögliche Ampere ersetzen keine falschen Volt.",
    },
    sections: {
      "energy-per-charge":
        "Spannung beschreibt, wie viel Energie je Ladungsmenge übertragen werden kann. Für den Einstieg kannst du sie dir als elektrischen Antrieb vorstellen. Volt sagen noch nicht, wie viel Strom ein Gerät tatsächlich aufnimmt.",
      "potential-difference":
        "Eine Spannung ist immer ein Unterschied zwischen zwei Punkten. Der schwarze Messanschluss legt den Bezugspunkt fest. Ein negatives Messergebnis bedeutet, dass die gewählte Polung zur tatsächlichen Spannung entgegengesetzt ist.",
      "voltage-without-current":
        "An einem nicht angeschlossenen Netzteil kann Spannung anliegen, obwohl kein Gerät Strom aufnimmt. Erst ein vollständiger Stromkreis ermöglicht einen dauerhaften Ladungsfluss. Deshalb sind Volt und Ampere keine austauschbaren Angaben.",
      voltmeter:
        "Ein Voltmeter vergleicht zwei Punkte und wird parallel angeschlossen. Es soll den Stromkreis möglichst wenig verändern. Eine Spannungsmessung wird nicht durch denselben Anschlussaufbau wie eine Strommessung ersetzt.",
      "dc-ac":
        "DC bezeichnet Gleichspannung mit gleichbleibender Polarität. Bei AC wechselt die Polarität. Ein Netzteil wandelt die Netzversorgung in eine für das IT-Gerät passende Versorgung um; Angaben auf Ein- und Ausgang dürfen nicht verwechselt werden.",
      "voltage-balance":
        "Die Quellenspannung verteilt sich auf die Bauteile und Leitungen des betrachteten Strompfads. Wenn am Kabel Spannung abfällt, kommt am Verbraucher weniger an. Für eine Rechnung musst du wissen, an welchem Bauteil die angegebene Spannung liegt.",
    },
  },
  resistance: {
    context: "Elektrischer Widerstand",
    question: "Was begrenzt den Strom in einem Leiter oder Bauteil?",
    answer:
      "Der elektrische Widerstand beschreibt das Verhältnis von Spannung zu Strom an einem Bauteil. Bei gleicher Spannung fließt durch einen größeren ohmschen Widerstand weniger Strom. Material, Länge, Querschnitt und Temperatur beeinflussen den Leitungswiderstand. Fließt Strom, wird dabei elektrische Energie in Wärme umgewandelt.",
    essentials: [
      "Widerstand R wird in Ohm (Ω) angegeben.",
      "Längere Leitungen haben bei gleichem Material und Querschnitt mehr Widerstand.",
      "Ein größerer Leiterquerschnitt kann den Widerstand verringern; er ist kein Durchmesser.",
    ],
    units: ["resistance", "voltage", "current", "power"],
    example: {
      title: "Spannung geht am Kabel verloren",
      given:
        "Vereinfachtes Gleichstrommodell: 12 V Quelle, 2 A Strom und 0,5 Ω Gesamtwiderstand von Hin- und Rückleitung.",
      steps: [
        "Die 0,5 Ω gehören zum Kabel, nicht zum angeschlossenen Gerät.",
        "Multipliziere den Strom 2 mit dem Kabelwiderstand 0,5: Am Kabel fallen 1 V ab.",
        "Vom Quellwert 12 V bleiben im Modell 11 V am Gerät.",
      ],
      result:
        "Am Gerät kommen 11 V an. Ob das ausreicht, entscheidet dessen zulässiger Spannungsbereich.",
    },
    sections: {
      "microscopic-resistance":
        "Ein Leiter ist kein vollkommen freier Weg für Ladungen. Die Wechselwirkung mit dem Material begrenzt den gerichteten Ladungsfluss. Elektrische Energie kann dabei in Wärme übergehen, ohne dass Ladung verschwindet.",
      "material-and-geometry":
        "Bei gleichem Material macht mehr Länge den Widerstand größer. Eine größere Querschnittsfläche macht ihn kleiner. Für eine Versorgungsleitung zählen Hin- und Rückleitung sowie die Übergänge an Steckverbindungen.",
      temperature:
        "Der Widerstand hängt von der Temperatur ab. Bei Metallen wie Kupfer steigt er meist mit der Erwärmung. Eine Rechnung mit konstantem Widerstand ist deshalb ein Modell für festgelegte Bedingungen.",
      "resistors-tolerance":
        "Ein aufgedruckter Widerstandswert ist ein Nennwert mit zulässiger Abweichung. Zusätzlich ist die erlaubte Verlustleistung wichtig. Ein rechnerisch passender Ohmwert reicht nicht, wenn das Bauteil die Wärme nicht verträgt.",
      ohmmeter:
        "Widerstand wird in einer geeigneten spannungsfreien und geprüften Schaltung gemessen. Andere angeschlossene Bauteile können einen zusätzlichen Stromweg bilden und den Messwert verfälschen. Unbekannte oder netzspannungsführende Aufbauten sind kein Übungsobjekt.",
      "conductance-and-models":
        "Der Leitwert beschreibt die umgekehrte Sicht: Wie gut lässt sich Strom durch das Bauteil treiben? Für die IT-Grundlagen genügt zuerst die Beziehung zwischen Spannung, Strom und Widerstand. Ein Router ist dabei nicht über alle Betriebszustände ein konstanter Widerstand.",
    },
  },
  ohm: {
    context: "Ohmsches Gesetz",
    question: "Wie hängen Spannung, Stromstärke und Widerstand zusammen?",
    answer:
      "Das Ohmsche Gesetz verbindet Spannung, Stromstärke und Widerstand an einem ohmschen Bauteil. Bei gleichbleibender Temperatur ist sein Widerstand annähernd konstant: Eine doppelte Spannung bewirkt dann einen doppelten Strom. Bei gleicher Spannung bewirkt ein doppelter Widerstand dagegen einen halb so großen Strom. Du kannst jeweils eine Größe aus den beiden anderen bestimmen.",
    essentials: [
      "Wähle zuerst das betrachtete Bauteil und die gesuchte Größe.",
      "U und I müssen sich auf dasselbe Bauteil beziehen.",
      "Das konstante Widerstandsmodell beschreibt nicht automatisch einen ganzen PC oder Router.",
    ],
    units: ["voltage", "current", "resistance", "power"],
    example: {
      title: "Ein einfacher Messaufbau",
      given:
        "Im virtuellen Labor liegen 12 V an einem ohmschen Widerstand von 24 Ω.",
      steps: [
        "Gesucht ist die Stromstärke I, also das Ergebnis in Ampere.",
        "Teile die Spannung 12 durch den Widerstand 24.",
        "Du erhältst 0,5 A. Bei 48 Ω wären es bei denselben 12 V nur 0,25 A.",
      ],
      result:
        "Doppelter Widerstand: halber Strom — sofern die Spannung gleich bleibt.",
    },
    sections: {
      "ohmic-law":
        "Ein ohmsches Bauteil lässt bei doppelter Spannung den doppelten Strom fließen, solange sein Widerstand gleich bleibt. Das Gesetz verbindet deshalb drei Größen desselben Bauteils: Spannung, Stromstärke und Widerstand.",
      "solving-with-units":
        "Schreibe zuerst die bekannte Spannung, den bekannten Widerstand oder den bekannten Strom auf. Markiere die fehlende Größe. Rechne Vorsätze wie milli und kilo um, bevor du die Zahlen kombinierst.",
      characteristic:
        "Eine Kennlinie verbindet die zugehörigen Spannungs- und Stromwerte. Eine Gerade durch den Ursprung passt zum konstanten ohmschen Widerstand. Ein einzelner Messpunkt reicht nicht aus, um dieses Verhalten zu beweisen.",
      "design-resistor":
        "Wenn ein Bauteil einen bestimmten Strom begrenzen soll, berechnest du den nötigen Widerstand. Danach prüfst du seine Verlustleistung. Bei LED-Schaltungen muss dabei die Spannung am Widerstand von der gesamten Versorgungsspannung unterschieden werden.",
      "whole-circuit":
        "Für eine ganze Schaltung musst du zuerst wissen, welche Bauteile zusammen den Strom begrenzen. Bei einer realen Quelle gehört auch ihr Innenwiderstand zum Modell. Der Spannungswert am Verbraucher kann dann kleiner als der Leerlaufwert der Quelle sein.",
      "boundaries-and-review":
        "Ein moderner IT-Verbraucher enthält Elektronik und ändert seinen Bedarf. Er verhält sich nicht pauschal wie ein fester Widerstand. Nutze das Ohmsche Gesetz für klar definierte Bauteile oder Modellabschnitte, nicht als beliebige Geräteformel.",
    },
  },
  energy: {
    context: "Elektrische Energie und Arbeit",
    question: "Wie viel elektrische Energie wird insgesamt übertragen?",
    answer:
      "Elektrische Energie kann in Wärme, Licht oder Bewegung umgewandelt werden. Elektrische Arbeit beschreibt die Übertragung dieser Energie. Bei gleichbleibender Leistung hängt die insgesamt umgesetzte Energiemenge von der Betriebsdauer ab: Doppelt so lange bedeutet doppelt so viel Energie. Gemessen wird Energie in Joule oder im Alltag in Wattstunden und Kilowattstunden.",
    essentials: [
      "Watt und Kilowatt beschreiben Leistung.",
      "Wh und kWh beschreiben Energie über eine Betriebsdauer.",
      "Energie bleibt erhalten: Ein Verbraucher wandelt sie um, er verbraucht keine Ladungsträger.",
    ],
    units: ["power", "kilowattHour", "time", "energy"],
    example: {
      title: "Ein PC mit durchschnittlich 80 W",
      given:
        "Ein Arbeitsplatz nimmt im Mittel 80 W auf und läuft 8 h. Der Strompreis beträgt 0,30 Euro je kWh.",
      steps: [
        "80 W sind 0,08 kW; 1000 W entsprechen 1 kW.",
        "Multipliziere 0,08 kW mit 8 h. Das ergibt 0,64 kWh Energie.",
        "0,64 kWh zu 0,30 Euro je kWh kosten 0,192 Euro, also rund 19 Cent.",
      ],
      result:
        "Ein Arbeitstag: 0,64 kWh und ungefähr 0,19 Euro bei diesen Annahmen.",
    },
    sections: {
      "energy-meaning":
        "Ein IT-Gerät setzt aufgenommene elektrische Energie in andere Formen um. Im Computer wird ein großer Teil am Ende zu Wärme. Die Energie verschwindet nicht, auch wenn die gewünschte Nutzwirkung das Verarbeiten von Daten ist.",
      "energy-voltage-charge":
        "Spannung sagt aus, wie viel Energie je Ladungsmenge übertragen wird. Zusammen mit der transportierten Ladung ergibt sich die übertragene Energie. Für den IT-Alltag ist die Rechnung über Leistung und Betriebszeit oft leichter zugänglich.",
      "energy-units":
        "Joule ist eine Energieeinheit; Wattstunde ebenfalls. Auf der Stromrechnung ist die größere Kilowattstunde üblich. Das h bedeutet Stunde: kWh ist eine Menge Energie und nicht Kilowatt pro Stunde.",
      "energy-heat":
        "Ein Widerstand oder schlechter Kontakt kann elektrische Energie in Wärme umsetzen. Je nach Strom und Widerstand ist diese Erwärmung erheblich. Sie gehört zum Energieverbrauch, auch wenn sie für die eigentliche Aufgabe nicht nützlich ist.",
      "energy-bill":
        "Für eine Abschätzung multiplizierst du die mittlere Leistung mit der Laufzeit. Bei wechselnder Last brauchst du einen gemessenen Mittelwert oder eine Energiezählung. Die Nennleistung des Netzteils oder die CPU-TDP ist nicht automatisch die Leistungsaufnahme an der Steckdose.",
      "energy-balance":
        "Halte die Einheiten zusammen: kW mit Stunden ergibt kWh. Addiere getrennte Betriebszeiten oder Geräteverbräuche, bevor du den Strompreis anwendest. So kannst du etwa Arbeitstag, Monat und mehrere Arbeitsplätze vergleichen.",
    },
  },
  power: {
    context: "Elektrische Leistung",
    question: "Wie schnell wird elektrische Energie umgesetzt?",
    answer:
      "Die elektrische Leistung beschreibt den Energieumsatz pro Zeit. 1 Watt bedeutet 1 Joule pro Sekunde. Für Gleichstrom ergibt sich die Leistung an einem Anschluss aus seiner Spannung mal seiner Stromstärke. Die gesamte umgesetzte Energie kennst du erst, wenn du zusätzlich die Betriebsdauer berücksichtigst.",
    essentials: [
      "P ist die Leistung; W ist ihre Einheit Watt.",
      "1 kW sind 1000 W. Ein höherer Nennwert ist nicht automatisch höherer Verbrauch.",
      "Leistung in Watt und Energie in Wattstunden sind unterschiedliche Größen: Zur Energie gehört die Betriebsdauer.",
    ],
    units: ["power", "voltage", "current", "kilowattHour"],
    example: {
      title: "Ein aktives USB-Profil",
      given: "Ein Gerät wird im betrachteten Betrieb mit 5 V und 2 A versorgt.",
      steps: [
        "V steht für Volt und beschreibt die Spannung. A steht für Ampere und beschreibt den Strom.",
        "Multipliziere die Zahlen 5 und 2.",
        "Das Gerät nimmt in diesem Betriebspunkt 10 W elektrische Leistung auf.",
      ],
      result:
        "10 W Leistung. Für die Energie in Wh fehlt noch die Betriebsdauer.",
    },
    sections: {
      "power-rate":
        "Leistung beantwortet die Frage: Wie schnell wird gerade Energie umgesetzt? Ein Gerät mit 100 W setzt bei gleicher Betriebsdauer mehr Energie um als eines mit 10 W. Die gesamte Energiemenge kennst du aber erst mit der Zeit.",
      "power-ui":
        "Für einen festgelegten Gleichstrom-Betriebspunkt multiplizierst du Volt mit Ampere und erhältst Watt. Bei USB-C gelten die jeweils unterstützten und ausgehandelten Profile. Eine hohe Spannung darf nicht beliebig an ein Gerät angelegt werden.",
      "power-resistance":
        "Bei einem ohmschen Widerstand kannst du die Leistung auch aus Strom und Widerstand bestimmen. Mehr Strom bedeutet dann mehr Erwärmung; eine Verdopplung des Stroms vervierfacht bei gleichem Widerstand die Verlustleistung.",
      "power-rating":
        "Ein 650-W-PC-Netzteil verbraucht nicht ständig 650 W. Die Zahl beschreibt eine Abgabeleistungsgrenze unter festgelegten Bedingungen. Die tatsächliche Aufnahme hängt von Last und Wirkungsgrad ab.",
      "power-total":
        "Für mehrere gleichzeitige Verbraucher addierst du ihre betrachteten Leistungen. Bei PoE muss klar sein, ob du das Budget am Switch oder die Leistung am Endgerät vergleichst. Kabelverluste, Portgrenzen und die tatsächliche Leistungszuweisung dürfen dabei nicht unterschlagen werden.",
      "power-measure":
        "Ein geeignetes Energiemessgerät kann Aufnahmeleistung und über die Zeit verbrauchte Energie anzeigen. W und kWh sind dabei verschiedene Anzeigen. Bei Wechselstrom sind Watt und Voltampere nicht generell gleichzusetzen.",
    },
  },
  efficiency: {
    context: "Wirkungsgrad",
    question: "Welcher Anteil der zugeführten Energie ist nutzbar?",
    answer:
      "Der Wirkungsgrad vergleicht die nutzbar abgegebene mit der zugeführten Energie. Bei gleichbleibendem Betrieb kannst du auch die Leistungen vergleichen. 80 % bedeuten: Von 100 zugeführten Anteilen sind 80 für den gewünschten Zweck nutzbar. Der Rest ist nicht verschwunden, sondern wird beispielsweise in Wärme umgewandelt.",
    essentials: [
      "η heißt Eta und bezeichnet den Wirkungsgrad.",
      "80 % entsprechen dem Rechenfaktor 0,8.",
      "Verlustenergie verschwindet nicht; sie muss zum Beispiel als Wärme abgeführt werden.",
    ],
    units: ["efficiency", "power", "energy"],
    example: {
      title: "80 W für den Verbraucher",
      given:
        "Ein Netzteil gibt 80 W ab und hat in diesem Betriebspunkt 80 % Wirkungsgrad.",
      steps: [
        "80 % als Anteil geschrieben sind 0,8.",
        "Teile die benötigte Ausgangsleistung 80 W durch 0,8. Die Aufnahme beträgt 100 W.",
        "Die Differenz zwischen 100 W Aufnahme und 80 W Abgabe sind 20 W Verlustleistung.",
      ],
      result: "100 W Aufnahme, 80 W Abgabe, 20 W Wärmeverluste im Modell.",
    },
    sections: {
      "efficiency-meaning":
        "Welche Energie als nutzbar gilt, hängt von der Aufgabe ab. Beim Netzteil ist die passende elektrische Ausgangsleistung erwünscht; Erwärmung ist überwiegend ein Verlust. Beim Heizgerät kann genau die Wärme der gewünschte Nutzen sein.",
      "efficiency-formula":
        "Der Wirkungsgrad vergleicht nutzbare Abgabe mit zugeführter Energie. Bei gleichbleibendem Betrieb kannst du auch die Leistungen vergleichen. Rechne Prozent zuerst in einen Anteil um: 90 % sind 0,9, nicht 90.",
      "efficiency-balance":
        "Aufnahme setzt sich aus Nutzleistung und Verlusten zusammen. Wenn du die gewünschte Abgabe kennst, brauchst du für die Aufnahme bei Verlusten einen größeren Wert. Das ist ein guter Plausibilitätstest für deine Rechnung.",
      "efficiency-stages":
        "Bei mehreren Umwandlungen nacheinander entsteht in jeder Stufe ein Verlust. Zwei Stufen mit jeweils 90 % ergeben zusammen 81 %. Die Prozentwerte werden multipliziert, nicht einfach addiert.",
      "efficiency-operating":
        "Ein Netzteil hat nicht bei jeder Last denselben Wirkungsgrad. Werte aus Datenblättern gelten für bestimmte Betriebspunkte und Bedingungen. Eine pauschale Annahme eignet sich für ein Rechenbeispiel, aber nicht als genaue Verbrauchsmessung.",
      "efficiency-heat-pump":
        "Eine Wärmepumpe erzeugt die abgegebene Wärme nicht allein aus der aufgenommenen elektrischen Energie; sie transportiert zusätzlich Umweltwärme. Deshalb ist ihre Leistungszahl etwas anderes als der einfache Umwandlungswirkungsgrad eines Netzteils.",
    },
  },
  field: {
    context: "Elektrisches Feld",
    question: "Wie können Ladungen ohne Berührung aufeinander wirken?",
    answer:
      "Ein elektrisches Feld beschreibt die Kraftwirkung auf Ladungen im Raum. Positive und negative Ladungen erfahren im gleichen Feld entgegengesetzte Kräfte. Die Feldstärke gibt an, wie groß die Kraft pro Ladung am betrachteten Ort ist. Ein Feld kann bestehen, obwohl kein dauerhafter Strom fließt.",
    essentials: [
      "Ein elektrisches Feld wirkt auf Ladungen, auch wenn noch kein dauerhafter Strom fließt.",
      "Spannung und Feldstärke sind verschiedene Größen.",
      "Ein Feldpfeil zeigt die Kraft auf eine positive Probeladung. Auf ein Elektron wirkt die Kraft entgegengesetzt.",
    ],
    units: ["field", "voltage", "charge"],
    example: {
      title: "Nach dem Aufstehen ein Bauteil anfassen?",
      given:
        "Du hast dich durch Reibung elektrostatisch aufgeladen und willst ein empfindliches Modul einsetzen.",
      steps: [
        "Der Körper und seine Umgebung können auf unterschiedlichen elektrischen Potentialen liegen.",
        "Beim Berühren kann Ladung schnell ausgeglichen werden. Eine Entladung muss nicht sichtbar sein, um ein Bauteil zu beeinträchtigen.",
        "Arbeite nach den vorgesehenen ESD-Abläufen an einem dafür eingerichteten Arbeitsplatz.",
      ],
      result:
        "ESD-Schutz kontrolliert den Ladungsausgleich; er ist mehr als nur das Vermeiden eines sichtbaren Funkens.",
    },
    sections: {
      "field-charge":
        "Ladungen können aufeinander wirken, ohne sich zu berühren. Das Feld beschreibt diese Wirkung im Raum. Eine positive und eine negative Ladung erfahren im selben Feld entgegengesetzte Kräfte.",
      "field-strength":
        "Die elektrische Feldstärke beschreibt die Kraftwirkung pro Ladung an einem Ort. Sie wird zum Beispiel in Volt pro Meter angegeben. Du musst dafür zuerst verstehen, was Spannung und Ladung sind; die Formel ist ein Modell dieser Wirkung.",
      "field-lines":
        "Feldlinien sind eine Zeichensprache. Der Pfeil zeigt die Kraftwirkung auf eine positive Probeladung. Die Linien sind weder sichtbare Fäden noch automatisch die Wege echter Elektronen.",
      "field-voltage":
        "Zwischen zwei Punkten kann eine Spannung bestehen. Wie stark das Feld dazwischen ist, hängt außerdem von der Geometrie und dem Abstand ab. Gleiche Spannung bedeutet deshalb nicht in jeder Anordnung dasselbe Feld.",
      "field-point-superposition":
        "Mehrere Ladungen tragen gemeinsam zum Feld bei. Weil das Feld eine Richtung hat, reicht gewöhnliches Addieren der Beträge nicht immer. Für den Einstieg genügt: Die Umgebung und die Anordnung der Ladungen sind entscheidend.",
      "field-work-materials":
        "Metalle besitzen bewegliche Ladungsträger; Isolierstoffe leiten unter normalen Bedingungen viel schlechter. Trotzdem kann ein Feld auch durch einen Isolierstoff wirken. Aufladung und Entladung sind deshalb nicht nur Themen für stromdurchflossene Kabel.",
    },
  },
  capacitor: {
    context: "Kondensator und Kapazität",
    question: "Wie speichert ein Kondensator elektrische Energie?",
    answer:
      "Ein Kondensator besteht aus zwei leitenden Flächen, die durch einen Isolierstoff getrennt sind. Beim Laden entstehen gleich große entgegengesetzte Ladungen auf den beiden Seiten. Die Energie steckt im elektrischen Feld dazwischen. Seine Kapazität beschreibt den Ladungsbetrag pro Volt; sie wird in Farad gemessen.",
    essentials: [
      "C als Größenzeichen heißt Kapazität; die Einheit ist Farad (F).",
      "C hinter einer Zahl kann Coulomb bedeuten. Ladung und Kapazität sind nicht dasselbe.",
      "Spannung an Kondensatoren kann nach dem Abschalten bestehen bleiben. Netzteile werden nicht für Lernversuche geöffnet.",
    ],
    units: ["capacitance", "charge", "voltage", "time"],
    example: {
      title: "Zwei Bedeutungen des Buchstabens C",
      given: "Ein idealer Kondensator hat 100 µF Kapazität und liegt an 12 V.",
      steps: [
        "100 µF heißt 100 Mikrofarad. Das ist die Kapazität; sie wird mit dem Größenzeichen C bezeichnet.",
        "Kapazität mal Spannung liefert hier den Betrag der Ladung auf einer Platte: 100 mal 12 ergibt 1200 µC.",
        "µC heißt Mikrocoulomb. 1200 µC sind 1,2 mC. Die andere Platte trägt die gleich große entgegengesetzte Ladung.",
      ],
      result:
        "Kapazität: 100 µF. Ladungsbetrag auf einer Platte: 1200 µC. Das sind zwei verschiedene Größen.",
    },
    sections: {
      "capacitor-charge":
        "Ein Kondensator hat zwei leitende Flächen mit einem isolierenden Bereich dazwischen. Beim Laden werden Ladungen getrennt und Energie im Feld gespeichert. Durch den idealen Isolierstoff fließt kein dauerhafter Gleichstrom.",
      "capacitor-geometry":
        "Größere Fläche oder ein geeigneter Isolierstoff können mehr Kapazität ermöglichen. Zusätzlich besitzt das Bauteil eine zulässige Spannung. Die Kapazitätsangabe allein sagt daher nicht, ob der Kondensator zu einer Schaltung passt.",
      "capacitor-networks":
        "Parallele Kondensatoren können zusammen mehr Ladung bei derselben Spannung speichern. Bei einer Reihenschaltung verteilt sich die Spannung; die Gesamtkapazität verhält sich anders. Für reale Aufbauten gelten zusätzlich Bauteilgrenzen und Ausgleichsfragen.",
      "capacitor-rc":
        "Ein Kondensator wird über einen Widerstand nicht sofort vollständig geladen. Seine Spannung verändert sich allmählich. Größerer Widerstand oder größere Kapazität verlangsamen diesen Vorgang; die Zeitkonstante heißt τ, gesprochen Tau.",
      "capacitor-energy":
        "Ein geladener Kondensator speichert Energie im elektrischen Feld. Bei größerer Spannung nimmt diese Energie besonders stark zu. Genau deshalb darf das Bauteil nach dem Abschalten nicht ohne Prüfung als spannungsfrei gelten.",
      "capacitor-real":
        "Echte Kondensatoren besitzen Verluste und manche eine festgelegte Polarität. Alterung oder Schäden können die Funktion einer Versorgung beeinflussen. Im IT-Service bedeutet das zunächst richtiges Einordnen, nicht das Öffnen eines Netzteils.",
    },
  },
  magnets: {
    context: "Magnete und magnetische Feldlinien",
    question: "Wie wirken Magnete, und was zeigen ihre Feldlinien?",
    answer:
      "Ein gewöhnlicher Magnet besitzt einen Nord- und einen Südpol. Gleichnamige Pole stoßen sich ab, ungleichnamige ziehen sich an. Seine Wirkung beschreiben wir mit einem Magnetfeld. Feldlinien zeigen dessen Richtung; außerhalb eines Magneten verlaufen sie von Nord nach Süd und setzen sich im Inneren zu geschlossenen Verläufen fort.",
    essentials: [
      "Magnete haben Nord- und Südpol.",
      "Feldlinien beschreiben die Richtung des Feldes, nicht eine sichtbare Substanz.",
      "Ein Kompass richtet sich nach dem Magnetfeld an seinem Ort aus. Die Feldrichtung kann durch mehrere Quellen gemeinsam bestimmt werden.",
    ],
    units: ["fluxDensity", "flux"],
    example: {
      title: "Zwei Stabmagnete und ein Kompass",
      given:
        "Du betrachtest zwei Stabmagnete mit markiertem Nord- und Südpol und eine kleine Kompassnadel in ihrer Umgebung.",
      steps: [
        "Bringst du Nordpol und Südpol zueinander, ziehen sich die Magnete an. Nordpol vor Nordpol oder Südpol vor Südpol führt zur Abstoßung.",
        "Die Kompassnadel richtet sich nach dem Magnetfeld an ihrem Ort aus. Ihr Nordende zeigt in die Richtung der Feldlinie, außerhalb eines einzelnen Stabmagneten also vom Nordpol zum Südpol.",
        "Berücksichtige beide Magnete: Ihre Felder überlagern sich. Die Nadel zeigt die gemeinsame Wirkung am Messort, nicht automatisch direkt auf einen bestimmten Pol.",
      ],
      result:
        "Pole erklären Anziehung und Abstoßung. Der Kompass zeigt die örtliche Feldrichtung; Feldlinien stellen diese Richtung im Raum dar.",
    },
    sections: {
      "magnets-poles":
        "Ein Magnet hat Nord- und Südpol. Gleichnamige Pole stoßen sich ab, ungleichnamige ziehen sich an. Durch einfaches Zerteilen erhältst du nicht einen isolierten Nordpol und einen isolierten Südpol.",
      "magnets-lines":
        "Außerhalb eines Magneten zeigen die Feldlinien vom Nord- zum Südpol. Insgesamt bilden sie geschlossene Linien. Die Zeichnung hilft beim Verstehen der Richtung und ersetzt keine genaue Feldmessung.",
      "magnets-compass":
        "Ein Kompass richtet sich nach dem Magnetfeld an seinem Ort aus. Mehrere Feldquellen können diese Richtung gemeinsam beeinflussen. Die Nadel zeigt deshalb nicht automatisch direkt auf den nächstgelegenen Magneten.",
      "magnets-force":
        "Magnetfelder können auf bewegte Ladungen und stromdurchflossene Leiter Kräfte ausüben. Das ist eine Grundlage von Elektromotoren. Die Kraftrichtung hängt von Stromrichtung, Bewegung und Feldrichtung ab.",
      "magnets-flux":
        "B beschreibt die magnetische Flussdichte an einem Ort. Der magnetische Fluss Φ berücksichtigt zusätzlich eine betrachtete Fläche und deren Ausrichtung. Für den Einstieg ist diese Unterscheidung wichtiger als eine lange Formel.",
      "magnets-materials":
        "Verschiedene Materialien reagieren unterschiedlich auf ein Magnetfeld. Eisen verhält sich anders als Kupfer oder Kunststoff. Nicht jedes metallische Bauteil wird deshalb gleich stark von einem Magneten angezogen.",
    },
  },
  electromagnetism: {
    context: "Elektromagnetismus und Induktion",
    question: "Wie hängen Strom, Magnetfeld und induzierte Spannung zusammen?",
    answer:
      "Ein Strom erzeugt ein Magnetfeld. In einem Motor wirken elektrische Ströme und Magnetfelder so zusammen, dass ein Drehmoment entsteht. Umgekehrt kann eine Änderung des magnetischen Flusses eine Spannung hervorrufen.",
    essentials: [
      "Strom kann ein Magnetfeld erzeugen.",
      "Für Induktion muss sich der magnetische Fluss zeitlich ändern.",
      "Ein Transformator arbeitet deshalb nicht dauerhaft mit unverändertem Gleichstrom.",
    ],
    units: ["current", "fluxDensity", "flux", "voltage", "inductance"],
    example: {
      title: "Warum enthält ein Schaltnetzteil eine Spule?",
      given:
        "Ein elektronisches Netzteil steuert Ströme und Spannungen zeitlich. Die magnetischen Bauteile sind Teil der Energieumwandlung.",
      steps: [
        "Eine Spule baut bei Stromfluss ein Magnetfeld auf.",
        "Wenn sich Strom und magnetischer Fluss ändern, kann an Spulen eine Spannung entstehen.",
        "Die konkrete Schaltung steuert diese Vorgänge. Das ist kein Anlass, Netzteile für eigene Versuche zu öffnen.",
      ],
      result:
        "Elektromagnetismus verbindet Strom, Magnetfeld und induzierte Spannung — etwa in Motoren, Spulen und Transformatoren.",
    },
    sections: {
      "electromagnetism-wire":
        "Ein stromdurchflossener Leiter erzeugt ein Magnetfeld. Die Richtung dieses Feldes hängt von der technischen Stromrichtung ab. Strom und Magnetfeld sind deshalb zwei miteinander verbundene Erscheinungen.",
      "electromagnetism-coil":
        "Bei einer Spule tragen viele Windungen zum Feld bei. Ein geeigneter Kern kann die Wirkung verändern. Das Feld lässt sich über den Strom beeinflussen, ist aber bei realen Materialien nicht beliebig steigerbar.",
      "electromagnetism-induction":
        "Eine zeitliche Änderung des magnetischen Flusses kann eine Spannung induzieren. Ein unverändertes Feld allein reicht dafür nicht. Es kommt auf die Änderung an, etwa durch Bewegung oder einen veränderlichen Strom.",
      "electromagnetism-lenz":
        "Die induzierte Wirkung ist so gerichtet, dass sie der verursachenden Änderung entgegenwirkt. Energie entsteht dabei nicht aus dem Nichts. Ein Generator muss deshalb mechanisch angetrieben werden.",
      "electromagnetism-self-induction":
        "Ändert sich der Strom einer Spule, verändert sich auch ihr eigenes Feld. Dadurch kann an derselben Spule eine Spannung entstehen. Das erklärt, warum Schaltvorgänge an induktiven Bauteilen besondere Maßnahmen verlangen können.",
      "electromagnetism-machines":
        "Ein Motor wandelt elektrische Energie in Bewegung, ein Generator Bewegung in elektrische Energie. Ein Transformator überträgt Energie zwischen Spulen durch einen veränderlichen magnetischen Fluss. Reale Geräte besitzen dabei Verluste.",
    },
  },
  "magnetic-quantities": {
    context: "Magnetische Größen",
    question: "Was beschreiben Flussdichte B, Feldstärke H und Fluss Φ?",
    answer:
      "B beschreibt die magnetische Flussdichte am betrachteten Ort. H ist die magnetische Feldstärke; ihr Zusammenhang mit B hängt vom Material ab. Der magnetische Fluss Φ berücksichtigt eine Fläche und die Ausrichtung des Feldes zu dieser Fläche. Die Größen sind verwandt, besitzen aber unterschiedliche Bedeutungen und Einheiten.",
    essentials: [
      "B wird in Tesla (T), H in Ampere pro Meter (A/m) und Φ in Weber (Wb) angegeben.",
      "Der Kernwerkstoff und die Geometrie beeinflussen die Wirkung einer Spule.",
      "Zum magnetischen Fluss gehören eine betrachtete Fläche und ihre Ausrichtung zum Feld.",
    ],
    units: ["fluxDensity", "magneticField", "flux", "inductance"],
    example: {
      title: "Eine Feldangabe lesen",
      given:
        "Im vereinfachten Modell durchsetzt ein gleichmäßiges Feld von 20 mT eine Fläche von 1 cm² senkrecht.",
      steps: [
        "mT bedeutet Millitesla: 20 mT sind 0,02 T. 1 cm² entspricht 0,0001 m².",
        "Bei senkrechtem Durchtritt multiplizierst du Feldwert und Fläche.",
        "Das Ergebnis ist 0,000002 Wb oder 2 µWb. Bei einer anderen Ausrichtung ändert sich der Fluss.",
      ],
      result:
        "Flussdichte B: 20 mT. Fluss Φ durch die betrachtete Fläche: 2 µWb.",
    },
    sections: {
      "magnetic-quantities-map":
        "B, H und Φ sind keine verschiedenen Schreibweisen für dieselbe Zahl. Lies die Einheit mit: Tesla, Ampere pro Meter oder Weber. So erkennst du, welche Größe tatsächlich gemeint ist.",
      "magnetic-quantities-permeability":
        "Die Permeabilität beschreibt, wie ein Material den Zusammenhang zwischen magnetischen Größen beeinflusst. Ein Eisenkern verhält sich anders als Luft. Bei hohen Feldwerten kann das einfache lineare Modell versagen.",
      "magnetic-quantities-flux":
        "Zum Fluss gehört immer eine betrachtete Fläche. Ein stärkeres Feld oder eine größere geeignet ausgerichtete Fläche kann mehr Fluss ergeben. Bei mehreren Windungen wird zusätzlich berücksichtigt, wie der Fluss mit ihnen verkettet ist.",
      "magnetic-quantities-circuit":
        "Ein Magnetkreis ist ein Rechenmodell für den Feldverlauf, zum Beispiel durch einen Kern. Strom und Windungszahl liefern die magnetische Anregung. Der magnetische Widerstand ist dabei keine gewöhnliche elektrische Widerstandsangabe in Ohm.",
      "magnetic-quantities-gap":
        "Ein kleiner Luftspalt kann den Magnetkreis deutlich verändern. Deshalb sind Material und mechanische Geometrie wichtig. Diese technische Einzelheit erklärt, warum reale Spulen nicht nur über ihre Windungszahl beschrieben werden.",
      "magnetic-quantities-hysteresis":
        "Ein magnetischer Werkstoff kann von seiner Vorgeschichte abhängen. Beim wiederholten Ummagnetisieren entstehen Verluste und Wärme. Für den Einstieg genügt: Auch magnetische Bauteile arbeiten nicht verlustfrei.",
    },
  },
};
