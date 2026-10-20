"use client";

import { useId, useRef, useState } from "react";
import { Maximize2, RotateCcw, Plus, Power } from "lucide-react";
import { dcCircuit, resistanceCurve } from "../../lib/physics.js";

export const formatValue = (value, digits = 3) =>
  new Intl.NumberFormat("de-DE", { maximumFractionDigits: digits }).format(
    value,
  );

export function CircuitDiagram({ model }) {
  const marker = `direction-${useId().replace(/[^a-zA-Z0-9]/g, "")}`;
  return (
    <svg
      className={`ohm-circuit ${model.current > 0 ? "is-flowing" : ""}`}
      viewBox="0 0 620 310"
      role="img"
      aria-label={`Gleichstromkreis: Quelle ${formatValue(model.voltage)} Volt, Widerstand ${formatValue(model.resistance)} Ohm, Amperemeter in Reihe, Voltmeter parallel. Schalter ${model.closed ? "geschlossen" : "offen"}; Strom ${formatValue(model.current)} Ampere.`}
    >
      <defs>
        <marker
          id={marker}
          markerWidth="7"
          markerHeight="7"
          refX="6"
          refY="3.5"
          orient="auto"
        >
          <path d="M0 0L7 3.5L0 7" fill="#52e1f0" />
        </marker>
      </defs>
      <path
        className="ohm-wire"
        d="M70 142V65H190M240 65H310M400 65H510V147M510 193V265H70V198"
      />
      {model.current > 0 && (
        <path
          className="ohm-flow"
          d="M70 142V65H190M240 65H310M400 65H510V147M510 193V265H70V198"
        />
      )}
      <circle cx="70" cy="170" r="28" className="ohm-source" />
      <text x="70" y="164" className="ohm-polarity">
        +
      </text>
      <text x="70" y="184" className="ohm-polarity">
        −
      </text>
      <text x="168" y="218" className="ohm-diagram-label">
        Quelle · {formatValue(model.voltage)} V
      </text>
      <circle cx="190" cy="65" r="4" className="ohm-node" />
      <circle cx="240" cy="65" r="4" className="ohm-node" />
      <path
        d={model.closed ? "M190 65H240" : "M190 65L234 40"}
        className="ohm-switch"
      />
      <text x="215" y="24" className="ohm-diagram-label">
        S · {model.closed ? "geschlossen" : "offen"}
      </text>
      <rect
        x="310"
        y="52"
        width="90"
        height="26"
        rx="2"
        className="ohm-resistor"
      />
      <text x="355" y="30" className="ohm-diagram-label">
        R · {formatValue(model.resistance)} Ω
      </text>
      <path d="M310 65V123H336M374 123H400V65" className="ohm-meter-wire" />
      <circle cx="355" cy="123" r="19" className="ohm-meter" />
      <text x="355" y="129" className="ohm-meter-letter">
        V
      </text>
      <text x="355" y="163" className="ohm-diagram-label">
        {formatValue(model.loadVoltage)} V
      </text>
      <circle cx="510" cy="170" r="23" className="ohm-meter" />
      <text x="510" y="176" className="ohm-meter-letter">
        A
      </text>
      <text x="565" y="175" className="ohm-diagram-label">
        {formatValue(model.current)} A
      </text>
      <path
        d="M455 65H487"
        className="ohm-direction"
        markerEnd={`url(#${marker})`}
      />
      <text x="465" y="43" className="ohm-diagram-label">
        I →
      </text>
      <text x="290" y="293" className="ohm-diagram-foot">
        Technische Stromrichtung · Plus → Minus außerhalb der Quelle
      </text>
    </svg>
  );
}

export function CurrentGraph({ model, observations }) {
  const maxI = Math.max(0.5, model.voltage / 6);
  const x = (resistance) => 52 + ((resistance - 6) / 42) * 476;
  const y = (current) => 171 - (current / maxI) * 137;
  const points = resistanceCurve(model.voltage)
    .map(
      (point) =>
        `${x(point.resistance)},${y(model.closed ? point.current : 0)}`,
    )
    .join(" ");
  return (
    <figure className="ohm-chart">
      <figcaption>
        <span>STROM–WIDERSTANDS-KURVE</span>
        <strong>U = {formatValue(model.voltage)} V · konstant</strong>
      </figcaption>
      <svg
        viewBox="0 0 570 220"
        role="img"
        aria-label="Diagramm: Stromstärke I in Ampere über Widerstand R in Ohm. Bei konstanter Spannung fällt der Strom mit wachsendem Widerstand."
      >
        {[0, 0.5, 1].map((factor) => (
          <g key={factor}>
            <path
              d={`M52 ${y(maxI * factor)}H528`}
              className="ohm-chart-grid"
            />
            <text x="43" y={y(maxI * factor) + 4} textAnchor="end">
              {formatValue(maxI * factor, 2)}
            </text>
          </g>
        ))}
        {[6, 12, 24, 36, 48].map((r) => (
          <g key={r}>
            <path d={`M${x(r)} 34V171`} className="ohm-chart-grid" />
            <text x={x(r)} y="193" textAnchor="middle">
              {r}
            </text>
          </g>
        ))}
        <text x="17" y="20">
          I / A
        </text>
        <text x="550" y="215" textAnchor="end">
          R / Ω
        </text>
        <polyline points={points} fill="none" className="ohm-chart-line" />
        {observations
          .filter(
            (row) =>
              row.voltage === model.voltage && row.closed === model.closed,
          )
          .map((row, i) => (
            <circle
              key={i}
              cx={x(row.resistance)}
              cy={y(row.current)}
              r="4"
              className="ohm-recorded-point"
            />
          ))}
        <circle
          cx={x(model.resistance)}
          cy={y(model.current)}
          r="6"
          className="ohm-active-point"
        />
      </svg>
      <p>
        Gelb: aktueller Arbeitspunkt. Weiß: deine Messungen bei derselben
        Spannung.
      </p>
    </figure>
  );
}

export default function OhmWorkbench({ state, dispatch }) {
  const model = dcCircuit(state.experiment);
  const ref = useRef(null);
  const [notice, setNotice] = useState("");
  const id = useId();
  const duplicate = state.observations.some(
    (row) =>
      row.voltage === model.voltage &&
      row.resistance === model.resistance &&
      row.closed === model.closed,
  );
  async function fullscreen() {
    try {
      if (document.fullscreenElement) await document.exitFullscreen();
      else if (ref.current?.requestFullscreen)
        await ref.current.requestFullscreen();
      else
        setNotice(
          "Vollbild wird in diesem Browser nicht unterstützt. Alle Regler funktionieren auch hier.",
        );
    } catch {
      setNotice(
        "Vollbild konnte nicht geöffnet werden. Das Experiment bleibt bedienbar.",
      );
    }
  }
  return (
    <section
      className="ohm-workbench"
      ref={ref}
      aria-label="Virtuelles Gleichstromlabor"
    >
      <header className="ohm-panel-header">
        <span>
          <i /> SCHALTUNG 01 · DC
        </span>
        <button onClick={fullscreen} aria-label="Labor im Vollbild öffnen">
          <Maximize2 size={17} />
        </button>
      </header>
      <div className="ohm-readouts" aria-label="Messgeräte">
        {[
          ["QUELLENSPANNUNG", model.voltage, "V"],
          ["STROMSTÄRKE", model.current, "A"],
          ["VERLUSTLEISTUNG", model.power, "W"],
        ].map(([label, value, unit]) => (
          <div key={label}>
            <span>{label}</span>
            <output aria-label={label}>
              {formatValue(value)} <small>{unit}</small>
            </output>
          </div>
        ))}
      </div>
      <div
        className="ohm-schematic-grid"
        role="region"
        aria-label="Schaltplan, auf kleinen Bildschirmen horizontal verschiebbar"
        tabIndex={0}
        data-lenis-prevent
      >
        <CircuitDiagram model={model} />
      </div>
      <div className="ohm-flow-caption">
        <span className="ohm-mobile-diagram-hint">
          Schaltplan seitlich verschieben oder im Vollbild öffnen.{" "}
        </span>
        Die animierte Linie kennzeichnet den Strompfad. Sie zeigt keine
        tatsächliche Elektronengeschwindigkeit.
      </div>
      <div className="ohm-controls">
        {[
          { name: "voltage", label: "Spannung U", min: 0, max: 24, unit: "V" },
          {
            name: "resistance",
            label: "Widerstand R",
            min: 6,
            max: 48,
            unit: "Ω",
          },
        ].map((control) => (
          <div key={control.name}>
            <label htmlFor={`${id}-${control.name}`}>
              {control.label}
              <output>
                {formatValue(model[control.name])} {control.unit}
              </output>
            </label>
            <input
              id={`${id}-${control.name}`}
              type="range"
              min={control.min}
              max={control.max}
              step="1"
              value={model[control.name]}
              onChange={(event) =>
                dispatch({
                  type: "experiment",
                  patch: { [control.name]: Number(event.target.value) },
                })
              }
            />
            <div className="ohm-range-labels">
              <span>
                {control.min} {control.unit}
              </span>
              <span>
                {control.max} {control.unit}
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="ohm-experiment-actions">
        <button
          className={`ohm-switch-button ${model.closed ? "on" : ""}`}
          aria-pressed={model.closed}
          onClick={() =>
            dispatch({ type: "experiment", patch: { closed: !model.closed } })
          }
        >
          <Power size={15} /> Schalter {model.closed ? "geschlossen" : "offen"}
        </button>
        <button
          className="ohm-record-button"
          disabled={duplicate || state.observations.length >= 24}
          onClick={() => dispatch({ type: "measure" })}
        >
          <Plus size={16} />{" "}
          {duplicate ? "Messwert erfasst" : "Messwert übernehmen"}
        </button>
        <button
          className="ohm-reset-button"
          onClick={() => dispatch({ type: "reset-experiment" })}
        >
          <RotateCcw size={15} /> Regler zurücksetzen
        </button>
      </div>
      {notice && (
        <p role="status" className="ohm-local-notice">
          {notice}
        </p>
      )}
      <CurrentGraph model={model} observations={state.observations} />
      <div className="ohm-measurements">
        <header>
          <h3>Deine Messreihe</h3>
          <span>{state.observations.length} / 24</span>
        </header>
        {state.observations.length ? (
          <>
            <div
              className="ohm-table-scroll"
              tabIndex={0}
              role="region"
              aria-label="Messwerttabelle"
            >
              <table>
                <thead>
                  <tr>
                    <th scope="col">U / V</th>
                    <th scope="col">R / Ω</th>
                    <th scope="col">I / A</th>
                    <th scope="col">Kreis</th>
                  </tr>
                </thead>
                <tbody>
                  {state.observations.map((row, index) => (
                    <tr key={index}>
                      <td>{formatValue(row.voltage)}</td>
                      <td>{formatValue(row.resistance)}</td>
                      <td>{formatValue(row.current)}</td>
                      <td>{row.closed ? "geschlossen" : "offen"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <button
              className="ohm-clear-button"
              onClick={() => dispatch({ type: "clear-measurements" })}
            >
              Messreihe leeren
            </button>
          </>
        ) : (
          <p>
            Noch keine Messung. Stelle einen Wert ein und übernimm den Messwert.
          </p>
        )}
      </div>
    </section>
  );
}
