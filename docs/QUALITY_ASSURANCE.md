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

## Fachinformatik adaptation verification

`npm run lint` covers the new beginner content, unit data, lesson-introduction/legend components and tests. `npm test` now has **44 passing tests**, including complete 13-topic / 78-section coverage, retained reference paragraphs, quantity/unit distinctions, preserved text tokenization, Celsius versus coulomb, and independent checks of the new worked numerical examples.

Browser coverage additionally checks all thirteen rendered topics, access to preserved long references, C/F definitions in lessons and labs, category filtering/bookmark persistence in the new directory, and the actual effect of supply capacity versus device demand on the homepage. The existing profile, laboratory, course completion and exam scenarios remain in the full suite. The first new homepage test exposed an ambiguous status locator (outputs also have an implicit status role); the test was corrected to target the verdict component and then passed.

- [Redesigned homepage, desktop](screenshots/azubi-home-desktop.png)
- [Redesigned homepage, mobile](screenshots/azubi-home-mobile.png)
- [Beginner explanation and example, mobile](screenshots/azubi-current-mobile.png)
- [Course directory, desktop](screenshots/azubi-course-desktop.png)
- [Course directory, mobile](screenshots/azubi-course-mobile.png)

The final adaptation checks passed: `npm run lint`, `npm test` (**44 passed**), `npm run build`, and `npm run test:e2e` (**19 passed, 0 failed**). The browser suite includes all 65 topic questions and the 35-question final exam. Screenshot inspection supplements the assertions; it is not a claim of a complete accessibility certification.

## Essentials expansion and topic-first introductions

The subsequent fundamentals revision passed `npm run lint`, `npm test` (**46 passed**), `npm run build`, and the full `npm run test:e2e` suite (**23 passed, 0 failed**). New browser scenarios visit every concept, verify its definitions/example/lesson link, exercise incorrect and corrected self-check answers and reset between topics, and check mobile overflow. The current lesson is checked for charge carriers, source, closed circuit and opposite directions before calculation. Existing course/exam, storage and laboratory scenarios remain in the suite.

Numerical unit checks independently calculate the stated charge/time, cable drop/loss, USB power budget, energy, energy costs, efficiency and capacitor charge results. They also verify the numerical self-check answer keys. Browser evidence was inspected at desktop and 375-pixel mobile widths:

- [Expanded essentials, desktop](screenshots/essentials-desktop.png)
- [Capacitance explanation, mobile](screenshots/essentials-capacitance-mobile.png)
- [Current mechanism before calculation, mobile](screenshots/current-primer-mobile.png)

## Final release with short lesson videos

Final checks for the combined explanations/video change passed: lint, optimized production build, **48 unit/content tests**, and the complete **25-scenario browser suite**. The final browser-run record reports `passed` with no failed tests. The suite includes all course and final-exam questions, storage/import/export, all laboratories, the expanded essentials, and the new video controls.

Video scenarios visit all thirteen lessons, check the selected URL, title, channel and duration, verify that no iframe request occurs before activation, and verify removal on close and topic change. Keyboard activation and the responsive 16:9 frame are checked at 375 pixels. External frames are intercepted for these integration tests; separate official metadata checks establish the observed running times and initial embed availability. See [VIDEO_SOURCES.md](VIDEO_SOURCES.md) and the archived public metadata for those evidence boundaries.

- [Video control, mobile](screenshots/lesson-video-mobile.png)
