# Volt. — Elektrotechnik verstehen

Eine Lernplattform auf Deutsch, entwickelt mit **Next.js 16, React 19 und JavaScript**. Der neu aufgebaute Referenzunterricht zum Ohmschen Gesetz führt durch ein echtes virtuelles Experiment; die weiteren zwölf Module bleiben als bestehende Lernangebote erhalten und werden schrittweise migriert.

**Für Azubis in der Fachinformatik:** Alle 13 Themen haben jetzt einen eigenen IT-Einstieg, ein verständliches Praxisbeispiel und kurze, neu formulierte Erklärungen für sämtliche 78 Abschnitte. Ausführliche Originalerklärungen sind weiterhin aufklappbar. Labore, Fragen, Profil und Fortschritt bleiben erhalten. Eine gemeinsame Legende erklärt Größen und Einheiten, insbesondere Ladung in Coulomb (C), Kapazität C in Farad (F), Ampere, Watt und Kilowattstunden.

Die gemeinsame Oberfläche ist als IT-Lernwerkstatt aufgebaut: interaktiver Netzteilvergleich auf der Startseite, modulweise Kursübersicht mit Praxisbezug und fachbezogene Legenden direkt in Lektionen, Laboren und numerischen Testaufgaben.

**Live:** https://nurlan-bakenbaev.github.io/ElektroTechnik/

**Neues Lernlabor:** https://nurlan-bakenbaev.github.io/ElektroTechnik/#/lesson/ohm

Im Referenzlabor: 12 Lernschritte, Schalter, Amperemeter, Voltmeter, modellbasierter Graph, eigene Messreihe, 13 unterschiedliche Übungsaufgaben, geführte Rechnung, Einheitenprüfung und lokal gespeicherte Reflexion. Der frühere Block mit sieben reinen Textschaltern wurde entfernt.

## Lernmaterial

- 13 ausführliche Themen mit 78 Abschnitten und 31 gelösten Beispielen.
- 13 interaktive Experimente zu Strom, Schaltungen, Spannung, Widerstand, Energie und Feldern.
- 65 Übungsfragen, davon 26 Rechenaufgaben; ein Thema gilt ab 4 von 5 richtigen Antworten als bestanden.
- Abschlussprüfung mit 35 Fragen, davon 19 Rechenaufgaben, nach Abschluss aller Themen. Bestehensgrenze: 28 von 35.
- 12 Grundbegriffe, Lexikon, Formelsammlung und Merkliste.
- Acht OpenStax-Abbildungen mit [Lizenznachweisen](public/images/ATTRIBUTION.md).
- Lokal gespeicherte SVG-Formelbilder von Wikimedia Math. [Quellen](public/images/formulas/SOURCES.md); die Bilder verlinken ihre Quellrevisionen und Lizenz.

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

Die Navigation verwendet Hash-Routen; alle lokalen Bilder, Schriftdateien und Formelbilder funktionieren auch unter `/ElektroTechnik/`. Externe Webseiten dienen ausschließlich als weiterführende Quellen.
