# Lesson data and controller

`src/data/ohm-lesson.js` defines version, stable course ID, prerequisites, measurable goals, source links, assumptions, ordered steps and a question bank. JavaScript is retained; schema validation and JSDoc provide an incremental contract without migrating the whole app to TypeScript.

Step types currently rendered by the reference controller are `intro`, `knowledge-check`, `measurement-task`, `prediction`, `interactive-experiment`, `concept-explanation`, `formula-explorer`, `guided-calculation`, `practice`, `summary` and `real-world-application`. Objectives, technical diagrams and animations are composed inside their relevant step/workspace rather than new generic abstractions. `validateLesson` rejects missing metadata, duplicate IDs, invalid answers and an incomplete question bank; its test runs in the Pages build pipeline.

`src/lib/lesson-engine.js` owns a pure reducer and completion conditions. The session contains current step, completed steps, experiment settings, observed switch actions, measured rows, answer histories, hint IDs and reflection. It is independent of React and SVG. Navigation can revisit completed steps but cannot jump beyond the first unfinished step. Incorrect predictions are permitted; checks and calculations require a correct answer.

Persistence uses `volt-academy:lesson:ohm:v2`. Loading validates range limits, shapes and answer types, retains known IDs only, bounds histories and recalculates all stored readings. The existing `volt-academy:v1` profile and `volt-academy:attempt:*` quiz attempts are unchanged. Storage denial yields a warning and in-memory continuation. Profile reset also clears `volt-academy:lesson:*` keys.

`ReferenceLesson` binds reducer state to guidance and instruments. `KnowledgeCheck` handles feedback and `OhmWorkbench` renders the current physical result. Heavy reference UI is dynamically imported only on the reference route. The other twelve modules continue to use the old renderer; migrations must preserve their stable IDs and quiz scoring.

Known limits: guided session notes are not included in the existing JSON profile export; the final exam still uses its existing question runner. Neither local state nor imported scores are official certification.
