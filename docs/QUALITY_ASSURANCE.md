# Reference release verification

Date: 2026-10-20. Scope: new Ohm reference lesson plus regression of existing course flows. Results are local development evidence unless the CI workflow is specifically identified.

| Gate | Result | Evidence and boundary |
|---|---|---|
| A — Build | PASS | `npm run build`: Next.js optimized build and static prerendering passed. Pages export is also required by CI. |
| B — Code quality | PASS | `npm run lint`: new lesson UI, pure library functions, content schema and new tests. Legacy UI does not yet have a full hooks/type audit. |
| C — Physical correctness | PASS | DC at 12 V / 6,12,24,48 Ω, open switch, zero voltage, invalid resistance, power balance, equivalent resistances, curve monotonicity and RC initial/one-tau conditions tested. This is not validation of all magnetic models. |
| D — Content | PASS for reference scope | Validated metadata, step IDs, 13 distinct checks and answer contracts. Existing 26 topic and 19 exam calculation answers independently checked. Twelve other modules await didactic migration. |
| E — Encoding | PASS for checked sources | Fatal UTF-8 decoding, known mojibake/replacement detection, notation token round-trip, German/Greek symbols. Formula source mapping is checked separately from file integrity. |
| F — UI | PASS for reference screens | Screenshots at 1600×1100, 900×1100 and 375×900, and page overflow checks. Screenshots were opened and inspected; mobile diagram labels were enlarged using a local scroll area. |
| G — Functionality | PASS | Full Playwright run: 15 tests passed, including course tests/exam, local data, all labs, reference walkthrough and denied storage. |
| H — Accessibility | PASS for tested interactions | Keyboard ranges, associated form labels, choice fieldsets, tab navigation and reduced-motion checks. Full WCAG/screen-reader certification and automated axe scan NOT RUN. |
| I — Regression | PASS | All 15 browser tests passed, including the 65-question course completion and 35-question final exam flow. |

## Commands and outcomes

- `npm run lint`: passed.
- `npm test`: **40 passed, 0 failed**.
- `npm run build`: passed.
- Initial reference browser tests: **3 passed** (walkthrough, recovery, responsive screenshot capture).
- Final full browser run: **15 passed, 0 failed** (approximately 1.3 minutes).
- `npm audit --omit=dev`: no known production advisories at audit time.

## Browser evidence

The reference walkthrough checks switch behavior, zero current with preserved source voltage, prediction, three distinct measurements, reload restoration, formula symbol exploration, unit-error feedback, equivalent mA/kΩ answers, matching, multiple selections, reflection and entry into the final topic quiz. Another test checks corrupt session recovery and failed storage writes. The existing course suite covers all 65 topic questions and the 35-question exam, results, bookmarks, profiles, import/export and reset.

- [Desktop workspace](screenshots/ohm-desktop.png)
- [Tablet workspace](screenshots/ohm-tablet.png)
- [Mobile workspace](screenshots/ohm-mobile.png)

These are actual screenshots, not generated mockups. Automated image-diff baselines are not yet configured. No field LCP, INP or CLS measurements are claimed. PDF export, a second theme, guided-session export and didactic migration of the remaining modules are outside this reference release.
