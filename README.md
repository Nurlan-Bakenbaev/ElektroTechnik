# volt. — Elektrotechnik verstehen

Ein interaktives Lernbuch auf Deutsch, entwickelt mit **Next.js 16, React 19 und JavaScript**.

**Live:** https://nurlan-bakenbaev.github.io/ElektroTechnik/

## Lernmaterial

- 13 ausführliche Themen mit 78 Abschnitten und 31 gelösten Beispielen.
- 13 interaktive Experimente zu Strom, Schaltungen, Spannung, Widerstand, Energie und Feldern.
- 65 Übungsfragen, davon 26 Rechenaufgaben; ein Thema gilt ab 4 von 5 richtigen Antworten als bestanden.
- Abschlussprüfung mit 35 Fragen, davon 19 Rechenaufgaben, nach Abschluss aller Themen. Bestehensgrenze: 28 von 35.
- 12 Grundbegriffe, Lexikon, Formelsammlung und Merkliste.
- Acht OpenStax-Abbildungen mit [Lizenznachweisen](public/images/ATTRIBUTION.md).
- 70 lokal gespeicherte SVG-Formelbilder aus dem CodeCogs Equation Editor. [Quellen](public/images/formulas/SOURCES.md); jede Abbildung verlinkt ihre Original-URL.

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
npm run test:e2e
```

Playwright verwendet `/usr/bin/chromium`; ein anderer Pfad kann mit `PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH` angegeben werden. `PLAYWRIGHT_BASE_URL` erlaubt Tests gegen eine bereits laufende statische Vorschau inklusive Unterpfad.

## GitHub Pages

```sh
STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH=/ElektroTechnik npm run build
```

Das Verzeichnis `out/` enthält die statische Website. `.github/workflows/deploy-pages.yml` prüft, baut und veröffentlicht bei Push auf `main`. Der zusätzliche Next.js-Workflow ist weiterhin manuell ausführbar; es gibt nur einen automatischen Deployment-Workflow. GitHub Pages muss als Quelle **GitHub Actions** verwenden.

Die Navigation verwendet Hash-Routen; alle lokalen Bilder, Schriftdateien und Formelbilder funktionieren auch unter `/ElektroTechnik/`. Externe Webseiten dienen ausschließlich als weiterführende Quellen.
