# Volt. — Elektrotechnik verstehen

Eine Lernplattform auf Deutsch, entwickelt mit **Next.js 16, React 19 und JavaScript**. Der neu aufgebaute Referenzunterricht zum Ohmschen Gesetz führt durch ein echtes virtuelles Experiment; die weiteren zwölf Module bleiben als bestehende Lernangebote erhalten und werden schrittweise migriert.

**Für Azubis in der Fachinformatik:** Alle 13 Themen beginnen mit dem elektrotechnischen Grundbegriff; Anwendungen folgen der Erklärung. Verständliche Beispiele und neu formulierte Erklärungen ergänzen sämtliche 78 Abschnitte. Ausführliche Originalerklärungen sind weiterhin aufklappbar. Labore, Fragen, Profil und Fortschritt bleiben erhalten. Eine gemeinsame Legende erklärt Größen und Einheiten, insbesondere Ladung in Coulomb (C), Kapazität C in Farad (F), Ampere, Watt und Kilowattstunden.

Die Startseite beginnt direkt mit der Lernübersicht. Im Seitenmenü stehen Videos nach Themen, Zusammenfassungen, Grundlagen & Praxis, Formeln mit Einheiten und alle Tests. Die 13 Hauptlektionen behalten ihre Kapitelnummern und Testresultate. Acht ergänzende Themen vertiefen auf Wunsch die Grundlagen. Fachbezogene Legenden erklären die Zeichen direkt in Lektionen, Laboren, Formeln und numerischen Testaufgaben.

**Live:** https://nurlan-bakenbaev.github.io/ElektroTechnik/

**Neues Lernlabor:** https://nurlan-bakenbaev.github.io/ElektroTechnik/#/lesson/ohm

Im Referenzlabor: 12 Lernschritte, Schalter, Amperemeter, Voltmeter, modellbasierter Graph, eigene Messreihe, 13 unterschiedliche Übungsaufgaben, geführte Rechnung, Einheitenprüfung und lokal gespeicherte Reflexion. Der frühere Block mit sieben reinen Textschaltern wurde entfernt.

## Lernmaterial

- 13 ausführliche Themen mit 78 Abschnitten und 31 gelösten Beispielen.
- 13 interaktive Experimente zu Strom, Schaltungen, Spannung, Widerstand, Energie und Feldern.
- Pro Hauptlektion ein deutschsprachiges YouTube-Video unter fünf Minuten, über den offiziellen Player eingebunden. Er lädt erst auf Wunsch; Kanal, Dauer und direkter Link bleiben sichtbar. YouTube kann Werbung und Branding anzeigen. Es werden keine fremden Videodateien mehr über diese Website verteilt. Der Player bleibt auf großen Bildschirmen 20 % schmaler und auf Mobilgeräten breit. [Auswahl und Laufzeitnachweise](docs/VIDEO_SOURCES.md).
- Acht eigenständig formulierte Zusatzthemen: Herkunft des Stroms, DC/AC, elektrische Größen, elektrische und magnetische Felder, Kondensatoren, ferro-/para-/diamagnetische Stoffe, Elektromotoren und Werkstoffe/Abschirmungen. Mit Vergleichen, Beispielen, Quellen und jeweils einer unbewerteten Selbstkontrolle. Das DC/AC-Modell zeigt Polarität und Spannungsverlauf interaktiv.
- 65 Übungsfragen, davon 26 Rechenaufgaben; ein Thema gilt ab 4 von 5 richtigen Antworten als bestanden.
- Abschlussprüfung mit 35 Fragen, davon 19 Rechenaufgaben, nach Abschluss aller Themen. Bestehensgrenze: 28 von 35.
- „Einfach erklärt“: 12 ausführliche Grundbegriffe mit Bedeutung, Einheiten, schrittweisem Beispiel und erklärender Selbstkontrolle; außerdem Lexikon, Formelsammlung und Merkliste.
- Acht OpenStax-Abbildungen mit [Lizenznachweisen](public/images/ATTRIBUTION.md).
- Lokal gespeicherte SVG-Formelbilder von Wikimedia Math. [Quellen](public/images/formulas/SOURCES.md); die Bilder verlinken ihre Quellrevisionen und Lizenz.
- Sammlungen mit Suche für alle 13 Videos und Kurzfassungen; 20 Formelbilder mit Begriffserklärung und Einheitenlegende; 13 direkte Thementest-Einstiege und die freischaltbare Abschlussprüfung.

## Gestaltung und Speicherung

Leseschrift mit wählbaren 19 oder 22 Pixeln, dunkler Text auf weißen Leseflächen und ein Lesefokus ohne Seitenmenü. Die Anzeigeeinstellungen werden getrennt vom Lernprofil gespeichert. Das Inhaltsverzeichnis bleibt auch auf Mobilgeräten erreichbar; Sprünge fokussieren den gewählten Abschnitt. **Lenis** steuert sanftes Scrollen, **Motion** animiert Seitenwechsel. Die Systemeinstellung für reduzierte Bewegung wird berücksichtigt; Touch-Scrollen bleibt nativ.

Name, Lernfortschritt, beste Ergebnisse, XP, Level und Merkliste werden ausschließlich im Browser gespeichert. Bestehende Profile bleiben kompatibel. Im Profil sind JSON-Export, validierter Import und ein bestätigter Reset verfügbar. Keine Anmeldung, Datenbank oder API-Schlüssel erforderlich. Keine automatische Synchronisierung zwischen Geräten. Kein garantierter Offlinezugriff/PWA.

## Entwicklung

Node.js ab 20.9, empfohlen 24 (siehe `.nvmrc`).

```sh
npm ci
npm run dev
```

Produktionsserver:

```sh
npm run build
npm run start
```

## Prüfungen

```sh
npm test
npm run lint
npm run test:e2e
```

Playwright verwendet `/usr/bin/chromium`; ein anderer Pfad kann mit `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` angegeben werden. `PLAYWRIGHT_BASE_URL` erlaubt Tests gegen eine bereits laufende statische Vorschau inklusive Unterpfad.

Architektur, Methodik und bekannte Grenzen stehen unter [docs](docs/AUDIT_REPORT.md). [Qualitätsnachweise](docs/QUALITY_ASSURANCE.md) trennen durchgeführte Prüfungen von offenen Arbeiten. Die JSON-Profilsicherung enthält Kursresultate; die neue geführte Lernsitzung liegt getrennt im Browser und ist noch nicht Bestandteil dieses Exports.

## GitHub Pages

```sh
STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH=/ElektroTechnik npm run build
```

Das Verzeichnis `out/` enthält die statische Website. `.github/workflows/deploy-pages.yml` prüft, baut und veröffentlicht bei Push auf `main`. Alle Quellcode-Branches sind integriert; ein einziger Workflow und `next.config.mjs` steuern Build und Veröffentlichung. Die Branch `gh-pages` enthält frühere Build-Artefakte und wird nicht in den Quellcode gemischt. GitHub Pages muss als Quelle **GitHub Actions** verwenden.

Die Navigation verwendet Hash-Routen; lokale Bilder, Schriftdateien und Formelbilder funktionieren auch unter `/ElektroTechnik/`. Die Sammlungen liegen unter `#/videos`, `#/summaries`, `#/fundamentals`, `#/formulas` und `#/tests`. Zusatzthemen lassen sich direkt verlinken, etwa `#/fundamentals/dc-ac` oder `#/fundamentals/shielding`. Testlinks öffnen direkt den Wissenstest der passenden Hauptlektion.

Die [Analyse der 61 hochgeladenen Europa-Seiten](docs/EUROPA_ANALYSE_2026-10-22.md) ordnet Aufgabenfamilien den vorhandenen Lektionen zu und beschreibt fehlende Rechen-, Diagramm- und Schaltungstrainings. Sie unterscheidet den aktuellen Funktionsumfang vom weiteren Ausbau; die Buchdatei wird nicht veröffentlicht.

## Aufgabenwerkstatt, Rundgang und neues Interface

`#/workshop/energy-1` öffnet die Aufgabenwerkstatt: **68 eigene Aufgaben in 34 Familien mit 248 prüfbaren Schritten**, darunter 144 numerische Antworten. Die Themen reichen von Vorsätzen und Umstellen über Leitungsfall, Reihe/parallel, E12, belastete Teiler, Brücken und Quellen bis RC, Magnetismus, Motorprinzip und Induktion. Hinweise, Musterlösungen, freie Reflexion, Rechenhilfe und ein zweiter Datensatz begleiten den Rechenweg. Fehlerfeedback oder geöffnete Hilfe kennzeichnen den Versuch als unterstützt. Freie Texte und Papierskizzen werden nicht automatisch bewertet.

Die Werkstatt speichert unter `volt-workshop:v1`, getrennt vom Kursprofil, und kann ihre eigene JSON-Sicherung exportieren und nach Bestätigung importieren. Ein Profil-Reset entfernt auch die Werkstattversuche. Der Profil-Export enthält weiterhin nur das Kursprofil: Für die Werkstatt die dort angebotene Sicherung verwenden. Der Rundgang ist freiwillig, startet über **Website-Tour** und kehrt bei Ende oder Escape zur Ausgangsseite zurück. Er verändert keine Testergebnisse und spielt keine Videos ab.

Die Energie- und Leistungslektion enthalten einen interaktiven Vergleich von **kW und kWh**. Die kompakte Kursanzeige liegt im oberen Navbar. Das Interface verwendet die lokale Schrift Plus Jakarta Sans, ein helles Farbsystem, Motion und Lenis mit Berücksichtigung reduzierter Bewegung. Umsetzung, Farben und Zustände: [Designsystem](docs/DESIGN_SYSTEM.md).

### Woher kommen die Inhalte?

Die Lektionen sind kuratierte JavaScript-Datensätze in `src/data/lessons-*.js`, mit Einstiegen in `lesson-basics.js`. Texte und Fragen werden nicht während des Lesens durch eine KI erzeugt und nicht von fremden Webseiten nachgeladen. Die Werkstattfamilien in `workshop-tasks.js` erzeugen je zwei fest definierte Varianten aus eigenen Texten und Zahlen. mathjs berechnet die hinterlegten Ergebnisse und prüft Einheiten; Zod validiert Aufgaben und gespeicherte Versuche. Formeln bleiben lokal gespeicherte, attribuierte Internet-SVGs.

Neue Bibliotheken: `mathjs`, `zod`, `@fontsource-variable/plus-jakarta-sans`. Die Rechenbibliotheken und die Werkstatt werden nur mit der entsprechenden Ansicht geladen. `.vscode/extensions.json` enthält Empfehlungen für ESLint, Prettier und GitHub Actions, keine Behauptung einer Installation im persönlichen Editor.
