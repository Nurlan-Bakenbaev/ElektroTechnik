# VOLT. reference design system

The instrument surface is navy `#08131f`, raised panels `#101f2e`, borders `#2b4356`, primary instrument text near-white, and secondary labels `#b0c4d3`. Cyan `#55e0ef` identifies electrical interaction, amber `#ffd071` the selected graph point, and green `#aef28c` a closed circuit or successful state. Text and icons always accompany color.

Reading panels use white, ink `#102939`, and a visible blue-gray border. Manrope is locally bundled with Arial/sans-serif fallback. Instrument numbers use the system monospace stack and tabular figures. Minimum UI text is 12 CSS px; explanations use 16–17 px. German diacritics, Greek symbols and engineering units are preserved. Formula SVGs stay black on white, with local horizontal scrolling where needed.

The desktop workspace uses a 175 px step rail, flexible instrument area and 270–310 px guidance panel. Below 1250 px guidance moves below the instruments; below 700 px steps become a horizontal rail and task guidance precedes the experiment. The page itself must never scroll horizontally. On phones the circuit has a local scroll area so its labels stay readable.

Motion: entrance opacity/6 px translation lasts 200 ms; button transitions 160 ms. The circuit's dashed line marks the electrical path, not electron speed. It stops when current is zero. Reduced motion removes translation and disables path animation. Reading text stays still after entrance.

| Component | Responsibility and states | Accessibility / failure |
|---|---|---|
| `ReferenceLesson` | Tabs, step navigation, guidance, persistence | Labeled tabs, keyboard arrows/Home/End, readable storage warnings |
| `OhmWorkbench` | Circuit, instrument readings, controls, graph, table | Labeled keyboard ranges; described SVG; native fullscreen with fallback notice |
| `KnowledgeCheck` | Choice, numeric, multi-select, matching | Fieldset/legend; inline errors; status feedback; hints and retries |
| `FormulaImage` | Source equation SVG and attribution | Formula alt text; keyboard scroll; article revision and license links |
| `Notation` | Semantic subscripts in terms | Preserves surrounding Unicode text without HTML injection |

The existing global course shell and old modules have legacy theme rules. This stylesheet is scoped to the reference experience; a complete global theme cleanup is not yet done. A second theme is deferred until the reference flow is stable.

## Shared IT workshop layer

`src/app/academy.css`, loaded after legacy globals, now owns the shared course presentation. The navigation and live instrument preview use deep navy with cyan signals; reading surfaces use white and blue-gray borders. The primary study area uses larger 17–18 px explanations, structured practical examples and expandable long references. The course directory is organized as module rows, preserving bookmarks and pass status rather than creating another grid of generic cards.

`QuantityLegend` always exposes full unit names in its compact summary and can expand definitions. `UnitText` annotates numeric units without rewriting the wording; these annotations supplement the visible legend. `PowerSupplyDemo` is an actual controlled exercise: changing supply capacity does not change the demanded device current; an insufficient rating is flagged without pretending to simulate a real protection circuit.
