# Reference rebuild changelog

## 2026-10-22 — Veröffentlichung und Aufgabenanalyse

- Added a 15-stop, opt-in website tour with real navigation/spotlights, keyboard focus management, mobile menu handling and return to the starting page. The tour never submits a quiz, starts a video or changes course results.
- Implemented the separate Aufgabenwerkstatt: 68 original exercises in 34 families, 248 checked steps, 144 numerical results, hints, worked solutions, reflections, unit-aware arithmetic help and local attempt/backup handling. This is preparation by exercise family, not a publisher answer-key reproduction or automated grading of drawings/free text.
- Added an interactive kW/kWh comparison to both energy and power lessons; moved the course progress indicator into a compact navbar control and removed the large sidebar progress card.
- Introduced the light/indigo design system, locally hosted Plus Jakarta Sans, restrained pointer/scroll motion and reduced-motion behavior. Added mathjs and Zod with lazy workshop loading and editor extension recommendations.
- Leseransicht und acht ergänzende Erklärungen vollständig geprüft; Tablet-Kopfzeile und griechische Indizes korrigiert.
- Offizielle YouTube-Einbettungen wiederhergestellt, lokale MP4-Ausgabe entfernt.
- Alle 61 hochgeladenen Europa-Seiten auf Aufgabentypen und Lücken im Lernangebot untersucht; priorisierter Ausbauplan mit eigenen Kontrollbeispielen dokumentiert.

## 2026-10-21

- Subsequent requested revision: restored official YouTube embeds and removed the locally distributed MP4 files. YouTube ads/branding are no longer claimed to be suppressed. Kept the requested 80% desktop player width.
- Audited all thirteen lessons, symbols, unit explanations and 31 solved examples. Corrected the I(U) proportionality factor, source-discharge wording, constant versus varying DC, material/count terminology and several misleading formula-reference labels.
- Added eight supplementary topics covering current origins, DC/AC, electrical quantities, fields, capacitors, magnetic materials, motors and shielding. Each has full explanations, a worked example and unscored self-check. The original thirteen topic quizzes and final-exam gates remain compatible.
- Added 19/22-pixel reading preferences, focused reading, responsive section navigation, explicit concept traps, accessible target focus and darker body text on opaque white surfaces. See [lesson review](LESSON_REVIEW_2026-10-21.md).

- Removed the large power-supply homepage banner at the user's request; the page starts with the learning overview and existing progress.
- Added a sidebar collection group for videos, thirteen topic summaries, twenty sourced formula images with explanations/legends, and all thirteen five-question tests plus the gated 35-question final exam. All entries come from the original thirteen lessons and retain their chapter numbers; no additional subjects are introduced. Search filters videos, summaries and topic tests.
- Added direct quiz links for both ordinary lessons and the Ohm reference workspace, with reload-safe tab selection and preserved local results.
- Replaced YouTube embeds with locally hosted German CC BY 4.0 teaching clips from GET it digital. Every delivered clip is below five minutes; excerpts are clearly labelled. Added source/license credits, exact provenance and file hashes. No YouTube scripts, branding or ads are loaded. Retained the publisher's own credits.
- Reduced desktop video width to 80% of the available space, with full-width mobile playback. Native controls, keyboard toggle, error feedback and direct file links remain available; starting another video pauses the previous one.
- Corrected misleading formula legends, including H as magnetic field strength rather than voltage, magnetic flux rather than fluid flow, and the difference between capacitance C and coulomb C. Preserved the sourced formula images and all existing laboratories, quizzes and progress identifiers.

## 2026-10-20

- Added a different German YouTube video to each of the thirteen lessons, including the Ohm workspace. Official embed metadata confirms complete durations from 2:24 to 4:44 and initial embed availability. The player loads only on request, closes on dismissal/topic changes, and has an external fallback. Sources and observed metadata are documented separately.
- Replaced the short essentials cards with twelve topic-first explanations, worked examples, explicit symbol/unit definitions and unscored self-checks with corrective feedback. Added grouped topic navigation, responsive reading layout and links to the existing lessons.
- Reframed all thirteen lesson introductions around their actual electrical topic. The current lesson now teaches charge carriers, source, closed circuit and both directions before its calculation; added an attributed OpenStax circuit illustration and expanded legends before worked examples.

- Adapted all thirteen existing topics for beginner Fachinformatik trainees. Added original IT introductions, worked examples and 78 concise section explanations in `src/data/lesson-basics.js`; retained every original reference paragraph in expandable sections.
- Added shared quantity/unit legends and numeric unit annotations in lessons, labs and quiz feedback. Explicitly distinguished charge Q in coulomb (C), capacitance C in farad (F), energy and power.
- Rebuilt the shared shell, homepage and course directory as an IT learning workshop. The homepage now demonstrates supply rating versus device demand with the existing physical model; the directory shows practical context and existing progress/bookmarks.

- Corrected the metal-conductor illustration: negative electrons move opposite to conventional current. Both directions now have explicit German labels; the charge/time calculation uses charge magnitude. Added a browser regression check for both arrows and negative carrier symbols.

- Added `ReferenceLesson`, a dedicated 12-step activity workspace at the existing `#/lesson/ohm` route. Existing quiz/profile IDs remain stable.
- Added an instrument diagram, keyboard controls, switch, DC readings, model-based current/resistance graph, measurement capture and reset. The ammeter is in series and the voltmeter parallel.
- Added a versioned lesson reducer with completion conditions, bounded answer histories, hints, reflection and validated local restoration. Reset clears guided sessions too.
- Added 13 distinct checks, including guided numeric calculation, unit matching, multi-select assumptions, meter interpretation and error detection.
- Extracted pure physics and shared unit-aware grading; equivalent unit answers work in new exercises and existing quizzes.
- Fixed lost subscripts in `Notation` and the wrong power/induction formula image association. Replaced an unrelated magnetic formula with a clearly explained generic superposition source image.
- Added a scoped responsive stylesheet, dynamic lesson loading, reduced-motion behavior, real screenshot evidence and lint coverage for the new architecture.
- Added the requested architecture, design, methodology, migration and quality documents. Other modules remain available and are explicitly marked as awaiting migration to this standard.
