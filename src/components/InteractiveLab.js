"use client";

import { useId, useState } from "react";
import "./lab.css";

const format = (value, digits = 2) =>
  new Intl.NumberFormat("de-DE", { maximumFractionDigits: digits }).format(
    value,
  );

const aliases = {
  "electric-current": "current",
  "electrical-current": "current",
  strom: "current",
  "circuit-types": "circuits",
  "types-of-circuits": "circuits",
  "electric-voltage": "voltage",
  "electrical-resistance": "resistance",
  "ohms-law": "ohm",
  "ohm-law": "ohm",
  "electric-energy": "energy",
  "electrical-energy": "energy",
  "electrical-power": "power",
  "electric-field": "field",
  "electric-fields": "field",
  capacitors: "capacitor",
  "magnetic-field": "magnets",
  "magnetic-fields": "magnets",
  "magnetic-values": "magnetic-quantities",
};

function Range({ label, value, min, max, step = 1, unit, onChange }) {
  const id = useId();
  return (
    <div className="lab-control">
      <div className="lab-control-label">
        <label htmlFor={id}>{label}</label>
        <output htmlFor={id}>
          {format(value, 3)} <span>{unit}</span>
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
      />
      <div className="lab-range-ends" aria-hidden="true">
        <span>
          {min} {unit}
        </span>
        <span>
          {max} {unit}
        </span>
      </div>
    </div>
  );
}

function Circuit({ voltage, resistance, current, second, parallel = false }) {
  const marker = `arrow-${useId().replace(/:/g, "")}`;
  return (
    <svg
      className="lab-diagram"
      viewBox="0 0 420 220"
      role="img"
      aria-label={`Quelle ${format(voltage)} Volt, ${parallel ? "parallel" : "sequentiell"} Verbindung, Strom ${format(current)} Ampere`}
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
          <path d="M0 0 7 3.5 0 7Z" fill="#31537e" />
        </marker>
      </defs>
      <path d="M68 87V60H350V174H68V133" className="lab-wire" />
      <circle cx="68" cy="110" r="23" className="lab-source" />
      <text x="68" y="106" className="lab-svg-symbol">
        +
      </text>
      <text x="68" y="122" className="lab-svg-symbol">
        −
      </text>
      <text x="68" y="207" className="lab-svg-label">
        U = {format(voltage)} V
      </text>
      {parallel && second !== undefined ? (
        <>
          <path d="M133 60V118H350" className="lab-wire" />
          <rect
            x="203"
            y="47"
            width="68"
            height="26"
            rx="2"
            className="lab-resistor"
          />
          <rect
            x="203"
            y="105"
            width="68"
            height="26"
            rx="2"
            className="lab-resistor"
          />
          <text x="237" y="38" className="lab-svg-label">
            R₁ = {format(resistance)} Ω
          </text>
          <text x="237" y="151" className="lab-svg-label">
            R₂ = {format(second)} Ω
          </text>
          <circle cx="133" cy="60" r="4" className="lab-node" />
          <circle cx="350" cy="118" r="4" className="lab-node" />
        </>
      ) : second !== undefined ? (
        <>
          <rect
            x="145"
            y="47"
            width="65"
            height="26"
            rx="2"
            className="lab-resistor"
          />
          <rect
            x="260"
            y="47"
            width="65"
            height="26"
            rx="2"
            className="lab-resistor"
          />
          <text x="177" y="38" className="lab-svg-label">
            R₁ = {format(resistance)} Ω
          </text>
          <text x="292" y="38" className="lab-svg-label">
            R₂ = {format(second)} Ω
          </text>
        </>
      ) : (
        <>
          <rect
            x="192"
            y="47"
            width="86"
            height="26"
            rx="2"
            className="lab-resistor"
          />
          <text x="235" y="38" className="lab-svg-label">
            R = {format(resistance)} Ω
          </text>
        </>
      )}
      <path
        d="M280 174H205"
        stroke="#31537e"
        strokeWidth="3"
        fill="none"
        markerEnd={`url(#${marker})`}
      />
      <text x="242" y="204" className="lab-svg-label">
        I = {format(current, 3)} A
      </text>
    </svg>
  );
}

function Charges({ charge, time }) {
  return (
    <svg
      className="lab-diagram"
      viewBox="0 0 420 220"
      role="img"
      aria-label="Positive Ladungen bewegen sich durch den Querschnitt des Leiters; Der Strom ist gleich der Ladung geteilt durch die Zeit"
    >
      <rect
        x="36"
        y="68"
        width="348"
        height="78"
        rx="39"
        fill="#e8ecf2"
        stroke="#c6d1e0"
      />
      <ellipse
        cx="249"
        cy="107"
        rx="13"
        ry="39"
        fill="#fbcd62"
        fillOpacity=".5"
        stroke="#31537e"
        strokeDasharray="4 4"
      />
      {[73, 119, 165, 211, 289, 335].map((x) => (
        <g key={x}>
          <circle cx={x} cy="107" r="13" fill="#fff" stroke="#31537e" />
          <text x={x} y="112" className="lab-svg-symbol">
            +
          </text>
        </g>
      ))}
      <path
        d="M151 42H240L231 36M240 42 231 48"
        fill="none"
        stroke="#31537e"
        strokeWidth="2"
      />
      <text x="196" y="27" className="lab-svg-label">
        Bedingte Stromrichtung
      </text>
      <text x="250" y="173" className="lab-svg-label">
        Leiterquerschnitt
      </text>
      <text x="210" y="207" className="lab-svg-label">
        Für {format(time)} s Anklage geht vorbei {format(charge)} C
      </text>
    </svg>
  );
}

function Plates({ voltage, gap = 4, capacitor = false }) {
  const left = 210 - gap * 9,
    right = 210 + gap * 9;
  return (
    <svg
      className="lab-diagram"
      viewBox="0 0 420 220"
      role="img"
      aria-label={`Zwei parallele Platten mit Potentialdifferenz ${voltage} volt. Das Feld wird von der positiven Platte zur negativen gerichtet`}
    >
      <rect x={left - 8} y="38" width="12" height="135" rx="3" fill="#31537e" />
      <rect
        x={right - 4}
        y="38"
        width="12"
        height="135"
        rx="3"
        fill="#99a5b5"
      />
      {[61, 90, 119, 148].map((y) => (
        <g key={y}>
          <text x={left - 22} y={y + 4} className="lab-svg-symbol">
            +
          </text>
          <text x={right + 23} y={y + 4} className="lab-svg-symbol">
            −
          </text>
          <path
            d={`M${left + 14} ${y}H${right - 15}l-7 -4m7 4 -7 4`}
            stroke="#416799"
            strokeWidth="1.7"
            fill="none"
          />
        </g>
      ))}
      <path
        d={`M${left} 188H${right}M${left} 183V193M${right} 183V193`}
        stroke="#99a5b5"
      />
      <text x="210" y="211" className="lab-svg-label">
        {capacitor
          ? `U = ${format(voltage)} Im Feld zwischen den Deckeln`
          : `d = ${format(gap)} cm`}
      </text>
      <text x="210" y="22" className="lab-svg-label">
        {capacitor ? "Flacher Kondensator" : "Gleichmäßiges elektrisches Feld"}
      </text>
    </svg>
  );
}

function Magnet({ angle = 45, coil = false, turns = 200, current = 1 }) {
  const marker = `magnet-${useId().replace(/:/g, "")}`;
  const radians = (angle * Math.PI) / 180;
  const x = 210 + 157 * Math.cos(radians),
    y = 110 - 76 * Math.sin(radians);
  const dx = x - 210,
    dy = y - 110,
    r2 = dx * dx + dy * dy;
  const bx = 1 - (3 * dx * dx) / r2,
    by = (-3 * dx * dy) / r2;
  const compassAngle = (Math.atan2(by, bx) * 180) / Math.PI;
  return (
    <svg
      className="lab-diagram"
      viewBox="0 0 420 220"
      role="img"
      aria-label={
        coil
          ? "Feld einer langen Spule: Im Inneren sind die Feldlinien vom Südpol nach Norden gerichtet"
          : "Die magnetischen Linien des Magneten werden von einer Nordpollinie N und von einer Nordpollinie nach Südwesten verschoben"
      }
    >
      <defs>
        <marker
          id={marker}
          markerWidth="6"
          markerHeight="6"
          refX="3"
          refY="3"
          orient="auto"
        >
          <path d="M0 0 6 3 0 6Z" fill="#416799" />
        </marker>
      </defs>
      <path
        d="M145 106C66 103 66 28 210 28C354 28 354 103 275 106"
        className="lab-field-line"
        markerMid={`url(#${marker})`}
      />
      <path
        d="M145 115C66 118 66 192 210 192C354 192 354 118 275 115"
        className="lab-field-line"
        markerMid={`url(#${marker})`}
      />
      <path
        d="M145 100C109 83 134 56 210 56C286 56 311 83 275 100"
        className="lab-field-line"
        markerMid={`url(#${marker})`}
      />
      <path
        d="M145 120C109 137 134 164 210 164C286 164 311 137 275 120"
        className="lab-field-line"
        markerMid={`url(#${marker})`}
      />
      {coil ? (
        <>
          <rect x="140" y="85" width="140" height="50" rx="10" fill="#e7edf4" />
          {Array.from({ length: 13 }, (_, i) => (
            <ellipse
              key={i}
              cx={145 + i * 11}
              cy="110"
              rx="7"
              ry="28"
              fill="none"
              stroke="#456590"
              strokeWidth="2"
            />
          ))}
          <path
            d="M260 110H168l8 -5m-8 5 8 5"
            fill="none"
            stroke="#20231f"
            strokeWidth="2"
          />
          <text x="122" y="115" className="lab-svg-symbol">
            N
          </text>
          <text x="299" y="115" className="lab-svg-symbol">
            S
          </text>
          <text x="210" y="215" className="lab-svg-label">
            {turns} dreht sich · ich = {format(current)} A L = 20 cm
          </text>
        </>
      ) : (
        <>
          <path
            d="M145 89H210V132H145Q138 132 138 125V96Q138 89 145 89"
            fill="#fbcd62"
          />
          <path
            d="M210 89H275Q282 89 282 96V125Q282 132 275 132H210Z"
            fill="#d4dce6"
          />
          <text x="175" y="116" className="lab-svg-symbol">
            N
          </text>
          <text x="247" y="116" className="lab-svg-symbol">
            S
          </text>
          <g transform={`translate(${x} ${y})`}>
            <circle r="20" fill="white" stroke="#bac5d4" />
            <g transform={`rotate(${compassAngle})`}>
              <path d="M15 0 -10 -5V5Z" fill="#a45040" />
              <path d="M-15 0 0 -5V5Z" fill="#a2afc1" />
            </g>
          </g>
          <text x="210" y="215" className="lab-svg-label">
            Das rote Ende der Kompassnadel zeigt nach Norden
          </text>
        </>
      )}
    </svg>
  );
}

function EnergyFlow({ input, efficiency, unit = "W" }) {
  const useful = (input * efficiency) / 100;
  return (
    <div
      className="lab-flow"
      role="img"
      aria-label={`Eingehend ${format(input)} ${unit}; nützlicher Teil ${format(useful)} ${unit}; Verluste ${format(input - useful)} ${unit}`}
    >
      <div className="lab-flow-source">
        <span>Eingehend</span>
        <strong>
          {format(input)} <small>{unit}</small>
        </strong>
      </div>
      <div className="lab-flow-arrow" aria-hidden="true">
        →
      </div>
      <div className="lab-flow-destination">
        <div className="lab-flow-useful">
          <span>Nützlicher Teil</span>
          <strong>
            {format(useful)} <small>{unit}</small>
          </strong>
        </div>
        <div className="lab-flow-loss">
          <span>Verluste</span>
          <strong>
            {format(input - useful)} <small>{unit}</small>
          </strong>
        </div>
      </div>
    </div>
  );
}

function Flux({ angle, field, area }) {
  return (
    <svg
      className="lab-diagram"
      viewBox="0 0 420 220"
      role="img"
      aria-label={`Magnetischer Fluss durch eine Oberfläche: Winkel zwischen Feld und Normale ${angle} Grad`}
    >
      {[55, 90, 125, 160].map((y) => (
        <path
          key={y}
          d={`M42 ${y}H375l-9 -5m9 5 -9 5`}
          className="lab-field-line"
        />
      ))}
      <g transform={`translate(212 108) rotate(${-angle})`}>
        <path
          d="M0 -62 18 -48V62L0 48Z"
          fill="#fbcd62"
          fillOpacity=".8"
          stroke="#31537e"
        />
        <path
          d="M7 0H86L79 -5M86 0 79 5"
          stroke="#20231f"
          strokeWidth="2"
          fill="none"
        />
        <text x="78" y="-13" className="lab-svg-label">
          n
        </text>
      </g>
      <text x="70" y="29" className="lab-svg-label">
        B = {format(field)} mTl
      </text>
      <text x="212" y="203" className="lab-svg-label">
        S = {format(area)} cm² α = {angle}° zum Normaln
      </text>
    </svg>
  );
}

const initial = {
  charge: 12,
  time: 4,
  voltage: 12,
  resistance: 100,
  r1: 100,
  r2: 200,
  work: 24,
  voltageCharge: 2,
  length: 10,
  area: 1,
  hours: 2,
  watts: 60,
  amps: 0.5,
  efficiency: 80,
  input: 100,
  gap: 4,
  capacitance: 100,
  angle: 45,
  turns: 200,
  coilAmps: 1,
  field: 20,
  fluxArea: 25,
  fluxAngle: 0,
};

export default function InteractiveLab({ lessonId }) {
  const [values, setValues] = useState(initial);
  const [parallel, setParallel] = useState(false);
  const v = values;
  const set = (key) => (value) =>
    setValues((previous) => ({ ...previous, [key]: value }));
  const range = (key, label, min, max, step, unit) => (
    <Range
      key={key}
      label={label}
      value={v[key]}
      min={min}
      max={max}
      step={step}
      unit={unit}
      onChange={set(key)}
    />
  );
  const id = aliases[lessonId] || lessonId;
  let title, lead, controls, visual, formula, result, unit, note;

  switch (id) {
    case "current":
      title = "Wie viel Ladung fließt in einer Sekunde?";
      lead =
        "Ladung und Zeit ändern. Der Strom zeigt die Rate der Ladungsübertragung an.";
      controls = [
        range("charge", "Laden Sie Q auf", 1, 24, 1, "C"),
        range("time", "Zeit t", 1, 12, 1, "s"),
      ];
      visual = <Charges charge={v.charge} time={v.time} />;
      formula = `I = Q / t = ${format(v.charge)} / ${format(v.time)}`;
      result = v.charge / v.time;
      unit = "A";
      note =
        "1 A = 1 C/s. Das Diagramm zeigt eine herkömmliche positive Ladung. In einem Metall bewegen sich Elektronen in die entgegengesetzte Richtung.";
      break;
    case "circuits": {
      const req = parallel ? (v.r1 * v.r2) / (v.r1 + v.r2) : v.r1 + v.r2;
      title = "Zwei Widerstände – zwei Verbindungsmethoden";
      lead =
        "Vertauschen Sie den Anschluss und vergleichen Sie den Gesamtwiderstand mit einer 12-V-Quelle.";
      controls = (
        <>
          <div className="lab-switch" aria-label="Verbindungstyp">
            <button
              type="button"
              aria-pressed={!parallel}
              onClick={() => setParallel(false)}
            >
              Konsequent
            </button>
            <button
              type="button"
              aria-pressed={parallel}
              onClick={() => setParallel(true)}
            >
              Parallel dazu
            </button>
          </div>
          {range("r1", "Widerstand R₁", 50, 500, 10, "Ω")}
          {range("r2", "Widerstand R₂", 50, 500, 10, "Ω")}
        </>
      );
      visual = (
        <Circuit
          voltage={12}
          resistance={v.r1}
          second={v.r2}
          parallel={parallel}
          current={12 / req}
        />
      );
      formula = parallel ? "Rtotal = R₁ · R₂ / (R₁ + R₂)" : "Rtotal = R₁ + R₂";
      result = req;
      unit = "Ω";
      note = parallel
        ? `In beiden Zweigen U = 12 V. I₁ = ${format(12 / v.r1, 3)} A; I₂ = ${format(12 / v.r2, 3)} A. Der Gesamtstrom ist die Summe der Zweigströme. Rtot ist kleiner als jeder der Widerstände.`
        : "Durch beide Widerstände fließt der gleiche Strom. Die Quellenspannung wird proportional zu den Widerständen zwischen ihnen aufgeteilt. Ideale Drähte haben keinen Widerstand.";
      break;
    }
    case "voltage":
      title = "Energie pro Anhänger";
      lead =
        "Die Spannung setzt die Arbeit des elektrischen Feldes und die übertragene Ladung in Beziehung.";
      controls = [
        range("work", "Arbeit W", 1, 48, 1, "J"),
        range("voltageCharge", "Laden Sie Q auf", 1, 8, 0.5, "C"),
      ];
      result = v.work / v.voltageCharge;
      unit = "V";
      formula = `U = W / Q = ${format(v.work)} / ${format(v.voltageCharge)}`;
      visual = <Plates voltage={result} />;
      note =
        "1 V = 1 J/C. Am 17. Dezember 2014 wurde die Arbeit mit mehr als 1000 Mitarbeitern durchgeführt. Die Spannung wird immer zwischen zwei Punkten eingestellt.";
      break;
    case "resistance": {
      const resistance = (0.0175 * v.length) / v.area;
      title = "Warum ist ein langer, dünner Draht widerstandsfähiger?";
      lead =
        "Untersuchen Sie Kupferdraht bei einer konstanten Temperatur von etwa 20 °C.";
      controls = [
        range("length", "Länge l", 1, 50, 1, "m"),
        range("area", "Schnittbereich S", 0.5, 4, 0.25, "mm²"),
      ];
      visual = (
        <div className="lab-conductor">
          <div
            className="lab-conductor-wire"
            style={{
              height: `${14 + v.area * 11}px`,
              width: `${35 + v.length * 1.1}%`,
            }}
          />
          <div className="lab-conductor-caption">
            <span>Kupfer Kupfer</span>
            <strong>ρ = 0,0175 Ohm mm²/m</strong>
          </div>
          <p>
            Die Länge nimmt zu → R nimmt zu
            <br />
            Der Querschnitt nimmt zu → R nimmt ab
          </p>
        </div>
      );
      formula = `R = ρ · l / S = 0,0175 · ${format(v.length)} / ${format(v.area)}`;
      result = resistance;
      unit = "Ω";
      note =
        "S ist die Querschnittsfläche, nicht der Durchmesser des Drahtes. Der spezifische Widerstand ρ hängt vom Material und der Temperatur ab. Zur Berechnung des gesamten Stromkreises wird auch die Rückleitung berücksichtigt.";
      break;
    }
    case "energy":
      title = "Wie viel Energie verbraucht das Gerät?";
      lead =
        "Konstante Leistung und Betriebszeit einstellen. Behalten Sie den Überblick über Energieeinheiten.";
      controls = [
        range("watts", "Macht P", 10, 200, 10, "W"),
        range("hours", "Zeit t", 0.5, 12, 0.5, "h"),
      ];
      result = (v.watts * v.hours) / 1000;
      unit = "kWh";
      formula = `W = P · t = ${format(v.watts)} W · ${format(v.hours)} h`;
      visual = (
        <div className="lab-energy-display">
          <span>Energiezähler</span>
          <strong>
            {format(v.watts * v.hours)} <small>Wa</small>
          </strong>
          <div className="lab-energy-dots" aria-hidden="true">
            {Array.from({ length: 12 }, (_, i) => (
              <i key={i} className={i < v.hours ? "lab-dot-on" : ""} />
            ))}
          </div>
          <p>{format(v.watts * v.hours * 3600)} J</p>
        </div>
      );
      note =
        "1 kWh = 1.000 Wh = 3.600.000 J. Kilowattstunde ist eine Energieeinheit. Bei der Berechnung wird die Leistung als konstant betrachtet und die Zeit in Stunden angegeben.";
      break;
    case "power":
      title = "Leistung – Geschwindigkeit der Energieübertragung";
      lead =
        "Bei einem Gleichstromkreis entspricht die Leistung dem Produkt aus Spannung und Strom.";
      controls = [
        range("voltage", "Spannung U", 1, 24, 1, "V"),
        range("amps", "Stromstärke I", 0.1, 2, 0.1, "A"),
      ];
      visual = (
        <Circuit
          voltage={v.voltage}
          resistance={v.voltage / v.amps}
          current={v.amps}
        />
      );
      formula = `P = U · I = ${format(v.voltage)} · ${format(v.amps)}`;
      result = v.voltage * v.amps;
      unit = "W";
      note = `Für jede Sekunde, die das Gerät empfängt ${format(result)} J Energie. Der Lastwiderstand entspricht hier den gewählten U und I. Für Wechselstrom reicht die allgemeine Formel P = U · I ohne Berücksichtigung der Art der Last nicht aus.`;
      break;
    case "efficiency":
      title = "Wohin geht die empfangene Energie?";
      lead =
        "Der Wirkungsgrad gibt an, welcher Anteil der Eingangsleistung in Nutzleistung umgewandelt wird.";
      controls = [
        range("input", "Eingangsstrom-P_zu", 20, 200, 10, "W"),
        range("efficiency", "Effizienz η", 10, 100, 5, "%"),
      ];
      visual = <EnergyFlow input={v.input} efficiency={v.efficiency} />;
      formula = `P_nutz = P_zu · η = ${format(v.input)} · ${format(v.efficiency / 100)}`;
      result = (v.input * v.efficiency) / 100;
      unit = "W";
      note =
        "Verluste werden in der Regel in Wärme (auch durch Reibung) und Schall umgewandelt. Energie bleibt erhalten: Eingangsenergie = Nutzenergie + Verluste. Ein Wert von 100 % beschreibt die ideale Grenze des Modells.";
      break;
    case "field":
      title = "Spannung und Abstand erzeugen ein Feld";
      lead =
        "Bewegen Sie die Platten auseinander und ändern Sie die Spannung, um die Beziehung E = U / d zu sehen.";
      controls = [
        range("voltage", "Spannung U", 1, 24, 1, "V"),
        range("gap", "Abstand d", 1, 7, 0.5, "cm"),
      ];
      visual = <Plates voltage={v.voltage} gap={v.gap} />;
      formula = `E = U / d = ${format(v.voltage)} / ${format(v.gap / 100)}`;
      result = v.voltage / (v.gap / 100);
      unit = "V/m";
      note =
        "Vor der Berechnung werden Zentimeter in Meter umgerechnet. Das Modell beschreibt den Bereich abseits der Kanten großer paralleler Platten; Wir vernachlässigen Randeffekte. 1 V/m = 1 N/C.";
      break;
    case "capacitor":
      title = "Wie speichert ein Kondensator Ladung?";
      lead =
        "Die Kapazität verbindet das Lademodul auf jeder Platte mit der Spannung zwischen ihnen.";
      controls = [
        range("capacitance", "Kapazität C", 10, 500, 10, "µF"),
        range("voltage", "Spannung U", 1, 24, 1, "V"),
      ];
      visual = <Plates voltage={v.voltage} gap={4} capacitor />;
      formula = `Q = C · U = ${format(v.capacitance)} µF · ${format(v.voltage)} B`;
      result = v.capacitance * v.voltage;
      unit = "µC";
      note = `Gespeicherte Energie W = C U² / 2 = ${format((v.capacitance * 1e-6 * v.voltage ** 2) / 2, 5)} J. Die Ladungen der Platten sind gleich groß und haben entgegengesetztes Vorzeichen; Die Gesamtladung eines idealen Kondensators ist Null.`;
      break;
    case "magnets":
      title = "Platzieren Sie den Kompass neben dem Magneten";
      lead =
        "Bewegen Sie den Kompass um den Magneten. Sein nördliches Ende orientiert sich am Magnetfeld.";
      controls = range("angle", "Kompassposition", 15, 165, 5, "°");
      visual = <Magnet angle={v.angle} />;
      formula = "Außerhalb des Magneten: N → S. Innen: S → N";
      result = null;
      unit = "";
      note =
        "Die magnetischen Linien sind geschlossen und schneiden sich nicht. Der Pfeil wird anhand eines Näherungsmodells eines magnetischen Dipols berechnet; Die eingezeichneten Linien zeigen das Gesamtbild des Feldes. Es ist unmöglich, den Nord- und Südpol durch das Schneiden eines Magneten zu trennen.";
      break;
    case "electromagnetism":
      title = "Steuern Sie das Spulenfeld";
      lead =
        "Mehr Windungen oder ein höherer Strom bedeuten mehr magnetische Induktion in einer langen Spule.";
      controls = [
        range("turns", "Anzahl der Windungen N", 50, 500, 25, "dreht sich"),
        range("coilAmps", "Stromstärke I", 0.1, 2, 0.1, "A"),
      ];
      visual = <Magnet coil turns={v.turns} current={v.coilAmps} />;
      formula = `B ≈ μ₀ N I / L; L = 0,20 m`;
      result = ((4 * Math.PI * 1e-7 * v.turns * v.coilAmps) / 0.2) * 1000;
      unit = "mTl";
      note =
        "Modell: langer kernloser Magnet, von den Enden entfernt; μ₀ ≈ 4π·10⁻⁷ H/m. Die Zeichnung ist relativ und nicht maßstabsgetreu. Der Kern verändert das Feld und das Eisen kann gesättigt werden. Bei einer Änderung der Stromrichtung werden die Pole umgekehrt.";
      break;
    case "magnetic-quantities":
      title = "Wie viel Magnetfeld geht durch die Oberfläche?";
      lead =
        "Der magnetische Fluss hängt von der Induktion B, der Fläche S und dem Winkel zur Flächennormalen ab.";
      controls = [
        range("field", "Induktion B", 1, 100, 1, "mTl"),
        range("fluxArea", "Bereich S", 5, 100, 5, "cm²"),
        range("fluxAngle", "Winkel zur Normalen α", 0, 90, 5, "°"),
      ];
      visual = <Flux angle={v.fluxAngle} field={v.field} area={v.fluxArea} />;
      formula = "Φ = B · S · cos α";
      result =
        v.field *
        0.001 *
        v.fluxArea *
        0.0001 *
        Math.cos((v.fluxAngle * Math.PI) / 180) *
        1e6;
      unit = "µVb";
      note =
        "Für gleichmäßiges Feld und ebene Fläche. Die Normale n steht senkrecht auf der Oberfläche: Bei α = 0° ist die Strömung maximal, bei 90° ist sie Null. In SI: 1 mT = 10⁻³ T; 1 cm² = 10⁻⁴ m²; 1 Wb = 1 T m².";
      break;
    case "ohm":
    default:
      title = "Spüren Sie das Ohmsche Gesetz";
      lead =
        "Spannung und Widerstand ändern. Wie ändert sich der Strom im Stromkreis?";
      controls = [
        range("voltage", "Spannung U", 1, 24, 1, "V"),
        range("resistance", "Widerstand R", 20, 500, 10, "Ω"),
      ];
      visual = (
        <Circuit
          voltage={v.voltage}
          resistance={v.resistance}
          current={v.voltage / v.resistance}
        />
      );
      formula = `I = U / R = ${format(v.voltage)} / ${format(v.resistance)}`;
      result = v.voltage / v.resistance;
      unit = "A";
      note =
        "Bei konstantem R verdoppelt die Verdoppelung von U I. Bei konstantem U halbiert die Verdoppelung von R I. Modell: Ohmscher Widerstand mit konstanter Temperatur und ideale Konstantspannungsquelle.";
  }

  return (
    <section className="lab" aria-label="Interaktives Labor">
      <div className="lab-topline">
        <span className="lab-tag">
          <span aria-hidden="true">↗</span> Probieren Sie es selbst aus
        </span>
        <span className="lab-live">
          <i aria-hidden="true" />
          Interaktiv
        </span>
      </div>
      <h3 className="lab-title">{title}</h3>
      <p className="lab-lead">{lead}</p>
      <div className="lab-body">
        <div className="lab-visual">{visual}</div>
        <div className="lab-controls">{controls}</div>
      </div>
      <div className="lab-result" aria-live="polite" aria-atomic="true">
        <div>
          <span className="lab-result-label">
            {result === null
              ? "Merken Sie sich die Richtung"
              : "Berechnungsergebnis"}
          </span>
          <p className="lab-formula">{formula}</p>
        </div>
        {result !== null && (
          <strong>
            {format(result, 4)} <span>{unit}</span>
          </strong>
        )}
      </div>
      <p className="lab-note">
        <span aria-hidden="true">i</span>
        {note}
      </p>
      <p className="lab-safety">
        Trainingsmodell. Verwenden Sie es für Berechnungen; Führen Sie echte
        Experimente nur unter Anleitung eines Lehrers mit sicherer
        Unterrichtsausrüstung durch.
      </p>
    </section>
  );
}
