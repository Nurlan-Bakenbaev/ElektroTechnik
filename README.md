# Volt. — Elektrotechnik verstehen

Eine Lernplattform auf Deutsch, entwickelt mit **Next.js 16, React 19 und JavaScript**. Der neu aufgebaute Referenzunterricht zum Ohmschen Gesetz führt durch ein echtes virtuelles Experiment; die weiteren zwölf Module bleiben als bestehende Lernangebote erhalten und werden schrittweise migriert.

**Für Azubis in der Fachinformatik:** Alle 13 Themen beginnen mit dem elektrotechnischen Grundbegriff; Anwendungen folgen der Erklärung. Verständliche Beispiele und neu formulierte Erklärungen ergänzen sämtliche 78 Abschnitte. Ausführliche Originalerklärungen sind weiterhin aufklappbar. Labore, Fragen, Profil und Fortschritt bleiben erhalten. Eine gemeinsame Legende erklärt Größen und Einheiten, insbesondere Ladung in Coulomb (C), Kapazität C in Farad (F), Ampere, Watt und Kilowattstunden.

Die Startseite beginnt direkt mit der Lernübersicht. Im Seitenmenü stehen vier Sammlungen: Videos nach Themen, Zusammenfassungen, Formeln mit Einheiten und alle Tests. Sie beziehen sich ausschließlich auf die 13 vorgegebenen Themen und Kapitelnummern. Fachbezogene Legenden erklären die Zeichen direkt in Lektionen, Laboren, Formeln und numerischen Testaufgaben.

**Live:** https://nurlan-bakenbaev.github.io/ElektroTechnik/

**Neues Lernlabor:** https://nurlan-bakenbaev.github.io/ElektroTechnik/#/lesson/ohm

Im Referenzlabor: 12 Lernschritte, Schalter, Amperemeter, Voltmeter, modellbasierter Graph, eigene Messreihe, 13 unterschiedliche Übungsaufgaben, geführte Rechnung, Einheitenprüfung und lokal gespeicherte Reflexion. Der frühere Block mit sieben reinen Textschaltern wurde entfernt.

## Lernmaterial

- 13 ausführliche Themen mit 78 Abschnitten und 31 gelösten Beispielen.
- 13 interaktive Experimente zu Strom, Schaltungen, Spannung, Widerstand, Energie und Feldern.
- Pro Thema ein lokal eingebundenes deutschsprachiges Video unter fünf Minuten: ohne YouTube-Player, YouTube-Branding oder Werbeskripte. Offen lizenzierte Hochschulvideos von GET it digital; gekürzte Auszüge sind gekennzeichnet. Quellen- und Lizenzangaben bleiben erhalten. Der Player öffnet erst auf Wunsch und ist auf großen Bildschirmen 20 % schmaler, auf Mobilgeräten nutzt er die verfügbare Breite. [Auswahl, Rechte und Laufzeitprüfung](docs/VIDEO_SOURCES.md).
- 65 Übungsfragen, davon 26 Rechenaufgaben; ein Thema gilt ab 4 von 5 richtigen Antworten als bestanden.
- Abschlussprüfung mit 35 Fragen, davon 19 Rechenaufgaben, nach Abschluss aller Themen. Bestehensgrenze: 28 von 35.
- „Einfach erklärt“: 12 ausführliche Grundbegriffe mit Bedeutung, Einheiten, schrittweisem Beispiel und erklärender Selbstkontrolle; außerdem Lexikon, Formelsammlung und Merkliste.
- Acht OpenStax-Abbildungen mit [Lizenznachweisen](public/images/ATTRIBUTION.md).
- Lokal gespeicherte SVG-Formelbilder von Wikimedia Math. [Quellen](public/images/formulas/SOURCES.md); die Bilder verlinken ihre Quellrevisionen und Lizenz.
- Sammlungen mit Suche für alle 13 Videos und Kurzfassungen; 20 Formelbilder mit Begriffserklärung und Einheitenlegende; 13 direkte Thementest-Einstiege und die freischaltbare Abschlussprüfung.

## Gestaltung und Speicherung

Größere Leseschrift, responsive Navigation und lokal eingebundene Manrope-Schrift. **Lenis** steuert sanftes Scrollen, **Motion** animiert Seitenwechsel. Die Systemeinstellung für reduzierte Bewegung wird berücksichtigt; Touch-Scrollen bleibt nativ.

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

Die Navigation verwendet Hash-Routen; lokale Bilder, Videos, Schriftdateien und Formelbilder funktionieren auch unter `/ElektroTechnik/`. Die Sammlungen liegen unter `#/videos`, `#/summaries`, `#/formulas` und `#/tests`. Testlinks öffnen direkt den Wissenstest der passenden Lektion. Externe Webseiten dienen als Quellen- und Lizenznachweise.
