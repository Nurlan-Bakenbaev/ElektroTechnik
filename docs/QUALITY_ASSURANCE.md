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

## Thirteen-topic collections and local video release — 2026-10-21

Lint, the optimized production build and **49 unit/content tests** passed. All **29 browser scenarios** have passed after correcting two new video-size assertions: the first full run passed 27 scenarios, and its two failures compared the player's content width against a parent width that incorrectly included padding. The corrected three-scenario video suite passed, including actual playback and mutual pausing. No product layout change was needed for those assertion failures.

The full run retained the complete 65-question course and 35-question examination flow, laboratories, profile/storage/import/export, beginner explanations and guided Ohm workspace. New collection checks cover exactly thirteen canonical topics and chapter numbers, search/no-results behavior, sourced formulas with legends, direct quiz links for ordinary and reference lessons, saved-score preservation, final-exam gating, mobile navigation and horizontal overflow. The requested homepage banner is absent.

All thirteen delivered MP4 files match their archived SHA-256/byte-count manifest. ffprobe found H.264 video and AAC audio with durations under 300 seconds. Browser tests load the real local files without media mocks, verify metadata/video dimensions and native controls, and exercise advancing playback, closing/navigation, pausing the previous library video, keyboard activation, 80% desktop content width and full-width mobile layout. No requests to YouTube, its media/thumbnail hosts or DoubleClick were observed. Source/license links and excerpt disclosures are checked. See [source and verification scope](VIDEO_SOURCES.md).

Screenshot evidence was generated from the running application and inspected:

- [Homepage without the removed banner](screenshots/azubi-home-desktop.png)
- [Topic summaries](screenshots/collections-summaries-desktop.png)
- [All tests, mobile](screenshots/collections-tests-mobile.png)
- [Native video, desktop](screenshots/lesson-video-desktop.png)
- [Native video, mobile](screenshots/lesson-video-mobile.png)

These clips have German speech, with no separate caption tracks; no full media-accessibility certification is claimed. Repository-contributor cleanup is a separate history operation and is not represented as completed by these website checks.

The GitHub Pages static export also built successfully with `STATIC_EXPORT=true NEXT_PUBLIC_BASE_PATH=/ElektroTechnik`. All six collection/video browser scenarios passed against that exported site served under `/ElektroTechnik/`, including all thirteen actual media files and quiz deep links. This specifically checks the deployment subpath rather than assuming the root-path production-server checks cover it.

## Reader, eight supplementary explanations and restored YouTube — 2026-10-22

The current release supersedes the local-video delivery described above. Official YouTube embeds load only after activation; advertising and branding are disclosed and are not suppressed. MP4 files are removed from the current public output. Archived media metadata remains historical evidence.

Final checks passed: lint, **54 individual unit/content/model tests** with the regular `npm test` command, optimized production build, and the complete **36-scenario browser suite**. The complete course/examination path answers all 65 topic questions and 35 final questions, then verifies a lower-scoring retry does not duplicate XP. Tests also cover all eight supplementary guides and self-checks, DC/AC polarity, preference persistence independently of saved results, invalid/blocked reader storage, lesson outlines, focus/summary opening and 320/375/768-pixel layouts.

An actual 3-pixel overflow at 768 pixels came from the header profile chevron: the expanded account controls did not fit before the former 700-pixel breakpoint. Compact header controls now apply through 900 pixels. The regression assertion remains strict; it was not relaxed or replaced by global overflow hiding. Greek indexed symbols now render with subscripts while retaining their underlying text in the pure notation model.

The Pages static export with `/ElektroTechnik` succeeds and occupies approximately **4.0 MB**. No `out/videos` directory is present. Representative reader and motor-guide screenshots were visually inspected; the motor-guide lead is 19-pixel dark text (`rgb(30, 52, 68)`) on white, with a selectable 22-pixel mode.

All **10 reader, supplementary-guide and YouTube integration scenarios** also passed against that static export served at `/ElektroTechnik/` on port 3003. This checks the actual Pages asset paths and hash routes in addition to the root-path production suite.

- [Reader, desktop](screenshots/reader-desktop.png)
- [Reader, mobile](screenshots/reader-mobile.png)
- [Motor explanation, desktop](screenshots/foundations-motors-desktop.png)
- [Shielding, mobile](screenshots/foundations-shielding-mobile.png)

YouTube browser integration uses intercepted iframe responses and therefore does not claim that every external video will always play, be ad-free, or remain available. This release does not claim full WCAG certification. The [Europa analysis](EUROPA_ANALYSE_2026-10-22.md) documents additional problem-solving work still needed; it is not a claim that the complete workbook has already become an interactive exercise bank.

## Workshop, website tour and interface revision — 2026-10-22

The subsequent release implements **68 original workshop exercises across 34 families**, with **248 checked steps** including **144 numerical answers**. Independent reference values verify every numerical key, including both data sets. All 68 exercises have also been completed through their actual browser controls; this verifies step gating, result recording and the absence of course XP awards for workshop completion.

Lint, the optimized build, **59 unit/content/model tests**, and the full **45-scenario browser suite** passed. The full browser suite ran against the Pages static export served at `/ElektroTechnik/`, not just a root-path development server. It retains the 65-question course/35-question examination flow, all laboratories, saved profiles, reader controls, YouTube integration and supplementary explanations. The new scenarios cover the complete 15-stop tour, mobile navigation/spotlight alignment with animation enabled, keyboard focus containment, return to the starting page, course-profile preservation, workshop drafts/reflections, incorrect units, equivalent energy units, hints, assisted versus independent results, arithmetic help, reset and confirmed backup import.

All workshop calculations are evaluated from authored data. Learner arithmetic is parsed under a restricted numeric/operator grammar before execution: no assignments, property access, variables, collections or arbitrary function calls are permitted. Exponents and expression length are bounded; nonfinite calculator results are rejected. Task records and local attempts are validated by Zod. Restoring attempts recomputes completion from their actual answers. A separate regression round-trips all 68 completed attempts with full-length reflections; the import/storage limit is 1 MiB so legitimate written responses do not exceed the earlier 100 kB limit.

The compact course indicator replaces the former large sidebar card and remains visible at 320, 375, 768, 1024, 1280 and 1440 pixels. Workshop choice fieldsets now explicitly allow shrinking, and option text is wrapped in a shrinkable span; this fixes a real 30-pixel overflow at 320 pixels rather than hiding it. On smaller screens a native family selector replaces the long workshop sidebar. The tour accounts for the sidebar's animated opening before measuring the spotlight, explicitly cycles keyboard focus and restores the mobile-menu trigger when its sidebar launch button is no longer visible.

The local Plus Jakarta Sans font loads successfully. Principal design-token contrasts on white are **16.27:1** for primary text, **7.17:1** for secondary text, and **7.90:1** for white text on the indigo primary button. Browser assertions also check the rendered button/sidebar/active-navigation colour pairs. Reduced motion disables Lenis scrolling and decorative movement. The original homepage supply banner remains removed; the new workshop entry is a direct learning action. Reading panels remain opaque white.

The static export is approximately **4.8 MB**, including the new separately loaded workshop engine. The dependency audit reports **0 production dependency vulnerabilities** at verification time. New font/software license texts and the mathjs notice are shipped in `public/licenses`. Editor extensions are recommendations in `.vscode/extensions.json`; no installation into an absent personal editor is claimed.

After the final storage-budget adjustment, all 59 unit tests passed again and the rebuilt Pages export passed six targeted tour/import/energy/responsive scenarios. No dependency or runtime changes followed those checks.

- [Updated overview](screenshots/studio-home-desktop.png)
- [Workshop and schematic, desktop](screenshots/workshop-desktop.png)
- [Website tour, mobile](screenshots/tour-mobile.png)
- [kW/kWh comparison, mobile](screenshots/energy-comparison-mobile.png)

Free explanations and paper drawings are self-reviewed. A basic safety exercise links to the DRK first-aid material, checked on 2026-10-22; it is not a complete current standards course or professional qualification. The workshop prepares exercise families rather than reproducing the publisher's answer key. No complete accessibility certification or external teacher review is claimed.

## Learning-focus simplification — 2026-10-22

Removed promotional/duplicate homepage panels, decorative parallax and slogan footer. Workshop progress/backup controls and supplementary reading now use native, keyboard-accessible disclosures. Video controls are compact; the official player and source fallback appear when expanded. Optional local registration is on the profile page. Lesson data, quiz identifiers and storage formats were not changed.

Lint, all 11 unit/content test files and the Pages static export passed. The full 45-scenario Chromium suite passed, including all 68 workshop exercises, the 65 course questions and the 35-question final examination. After the final header/footer changes, the rebuilt export passed six additional targeted scenarios covering the homepage, local registration, mobile navigation, contrast/reduced motion, the full website tour and layouts from 320 to 1440 pixels. The updated overview and workshop screenshots above show the simplified interface. External YouTube responses remain intercepted in integration tests; these checks do not establish future external video availability.
