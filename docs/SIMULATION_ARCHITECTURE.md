# Physical model, rendering and interaction

The new model lives in `src/lib/physics.js`. All values use SI units at the calculation boundary. `dcCircuit` models a nonnegative ideal DC source, a positive linear resistance and an open/closed switch. Zero source voltage is valid; zero/negative resistance, non-finite values and invalid switch states are rejected rather than converted to an infinite display. The lesson controller constrains the interactive range to 0–24 V and 6–48 Ω.

The current, load voltage and power are calculated together. A closed circuit has load voltage equal to source voltage. With an open series switch, current and resistor voltage are zero, while source voltage stays unchanged. Ideal ammeter and voltmeter loading is ignored. The resistor has no temperature dynamics or power limit in this simulation; the power readout is not a statement that a real resistor is safe at that value.

`resistanceCurve` samples the same DC calculation used by the numeric instruments. `CurrentGraph` maps samples to labeled axes. White points show recorded measurements at the currently selected voltage and switch condition; the amber point is the live operating point. The path is a hyperbola for fixed nonzero voltage and a straight zero line for an open circuit or zero voltage.

`CircuitDiagram` is a visualization only. It places an ammeter in series, a voltmeter parallel to R and a switch in the current path. The dashed path animation is a symbolic direction cue with no quantitative speed meaning. `OhmWorkbench` controls ranges, measurement capture, reset and optional native fullscreen. It never implements independent physics.

Additional pure functions cover series/parallel equivalents and ideal RC charging/discharging. Equivalent resistance is shared with the existing circuit exercise. The RC function is tested but is not yet wired to a new time-domain capacitor lab. Other magnetic and plate labs still use their existing models; they are not claimed to be a full circuit simulator.
