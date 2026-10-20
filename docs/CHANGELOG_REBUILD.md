# Reference rebuild changelog

## 2026-10-20

- Corrected the metal-conductor illustration: negative electrons move opposite to conventional current. Both directions now have explicit German labels; the charge/time calculation uses charge magnitude. Added a browser regression check for both arrows and negative carrier symbols.

- Added `ReferenceLesson`, a dedicated 12-step activity workspace at the existing `#/lesson/ohm` route. Existing quiz/profile IDs remain stable.
- Added an instrument diagram, keyboard controls, switch, DC readings, model-based current/resistance graph, measurement capture and reset. The ammeter is in series and the voltmeter parallel.
- Added a versioned lesson reducer with completion conditions, bounded answer histories, hints, reflection and validated local restoration. Reset clears guided sessions too.
- Added 13 distinct checks, including guided numeric calculation, unit matching, multi-select assumptions, meter interpretation and error detection.
- Extracted pure physics and shared unit-aware grading; equivalent unit answers work in new exercises and existing quizzes.
- Fixed lost subscripts in `Notation` and the wrong power/induction formula image association. Replaced an unrelated magnetic formula with a clearly explained generic superposition source image.
- Added a scoped responsive stylesheet, dynamic lesson loading, reduced-motion behavior, real screenshot evidence and lint coverage for the new architecture.
- Added the requested architecture, design, methodology, migration and quality documents. Other modules remain available and are explicitly marked as awaiting migration to this standard.
