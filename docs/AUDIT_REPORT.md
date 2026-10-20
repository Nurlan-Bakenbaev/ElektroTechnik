# VOLT. audit and remediation record

Date: 2026-10-20

## Product and architecture

VOLT. is a Next.js App Router static export. The client lesson engine owns route state in the hash, while `src/lib/progress.js` and the storage wrapper persist the learner profile, lesson attempts, bookmarks, and exam results in `localStorage`. There is no server account or remote result store. GitHub Pages serves the generated `out/` directory through the workflow in `.github/workflows/deploy-pages.yml`.

The code is intentionally split into content data (`src/data`), lesson UI (`src/components/LearningApp.js`), reusable motion (`LearningMotion`), the physics lab (`InteractiveLab`), and persistence (`src/lib`). The interactive lesson opening is implemented in `TeachingSequence`; it is separate from the reference sections so the content can be taught as a sequence of observations and decisions.

## Findings addressed in this iteration

- The lesson previously opened as a long reading page. A reusable `Problem → Beobachten → Vorhersagen → Experiment → Erklären → Anwenden → Reflektieren` sequence now appears before the reference material for every module.
- Formula strings were being shown as visible fallback text and contained inconsistent English placeholders. Formula rendering now uses local Wikimedia Math SVG assets with article revision links and CC BY-SA attribution. Missing assets produce a readable state instead of exposing malformed notation.
- Several content artifacts (`Schmollmund`, `Psweat`, `Uakt`, `Iut`, `𝓔ich selbst`, `Afields`, and similar tokens) were corrected to consistent German engineering notation. The `Notation` component renders subscripts as actual subscript elements.
- The visual language now has a technical instrument layer for navigation and learning stations, while explanation surfaces remain light and high contrast. Responsive breakpoints and reduced-motion handling are included.

## Verification contract

Run `npm test` for content, progress, and formula-source checks; run `npm run build` for the static export; run `npm run test:e2e` against the generated app for keyboard and route flows. A deployment is only considered valid after the GitHub Actions Pages workflow completes successfully for the pushed commit.

## Known boundaries

Progress is local to the browser profile and cannot be recovered after storage is cleared. The diagrams and formula SVGs are educational assets; they do not replace a certified measurement instrument. The virtual laboratory models idealized components and labels those assumptions in its guidance.
