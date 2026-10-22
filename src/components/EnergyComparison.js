"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const number = (value) =>
  value.toLocaleString("de-DE", { maximumFractionDigits: 3 });
export default function EnergyComparison() {
  const [minutes, setMinutes] = useState(30);
  const reduced = useReducedMotion();
  const energy = (2 * minutes) / 60;
  return (
    <section
      className="energy-comparison"
      aria-label="Kilowatt und Kilowattstunde unterscheiden"
    >
      <span className="eyebrow">ZWEI FRAGEN · ZWEI VERSCHIEDENE EINHEITEN</span>
      <h2>kW sagt wie schnell. kWh sagt wie viel.</h2>
      <div className="energy-definitions">
        <article>
          <strong>kW · Kilowatt</strong>
          <p>
            Die <b>Leistung</b>: Wie schnell nimmt das Gerät Energie auf? 1 kW
            sind 1000 W. Die Angabe allein sagt noch nichts über die gesamte
            Laufzeit.
          </p>
        </article>
        <article>
          <strong>kWh · Kilowattstunde</strong>
          <p>
            Die <b>Energiemenge</b>: Was kommt über die Betriebsdauer zusammen?
            1 kW während 1 h ergibt 1 kWh. Das h steht für „mal Stunde“, nicht
            „pro Stunde“.
          </p>
        </article>
      </div>
      <p>
        Höhere Leistung bedeutet bei kurzer Laufzeit nicht automatisch mehr
        Energie. Vergleiche beide Geräte: Ihre Leistungsaufnahme bleibt in
        diesem Modell konstant.
      </p>
      <label className="energy-time">
        Laufzeit des 2-kW-Geräts <output>{minutes} min</output>
        <input
          type="range"
          min="0"
          max="120"
          step="5"
          value={minutes}
          aria-label="Laufzeit des 2-kW-Geräts in Minuten"
          onChange={(event) => setMinutes(Number(event.target.value))}
        />
      </label>
      <div className="energy-comparison-bars">
        <article>
          <span>Gerät A · 2 kW · {minutes} min</span>
          <strong>{number(energy)} kWh</strong>
          <div className="energy-bar">
            <motion.span
              initial={false}
              animate={{ width: `${(energy / 4) * 100}%` }}
              transition={{ duration: reduced ? 0 : 0.25 }}
            />
          </div>
        </article>
        <article>
          <span>Gerät B · 1 kW · 60 min</span>
          <strong>1 kWh</strong>
          <div className="energy-bar">
            <span style={{ width: "25%" }} />
          </div>
        </article>
      </div>
      <p className="energy-verdict" aria-live="polite">
        {energy === 1
          ? "Gleiche Energie, unterschiedliche Leistung: Beide Geräte nehmen 1 kWh auf."
          : energy < 1
            ? `Gerät A hat die höhere Leistung, nimmt in dieser Zeit aber weniger Energie auf: ${number(energy)} kWh statt 1 kWh.`
            : `Gerät A nimmt in dieser Zeit mehr Energie auf: ${number(energy)} kWh statt 1 kWh.`}
      </p>
      <p>
        <b>Beispielrechnung:</b> Bei 30 min sind das 0,5 h. Multipliziere 2 kW
        mit 0,5 h: Das ergibt 1 kWh. Bei 0,30 € je kWh kostet diese Energie 0,30
        €. Ein Grundpreis ist dabei nicht enthalten.
      </p>
      <p className="energy-legend">
        P = Leistung · E = Energie (in der Fachliteratur auch W für Arbeit) · t
        = Zeit · k = kilo, also tausend · h = Stunde. kW/h wäre eine Änderung
        der Leistung pro Stunde und ist eine andere Größe.
      </p>
      <a className="text-link" href="#/workshop/energy-1">
        Den Unterschied mit Aufgaben üben →
      </a>
    </section>
  );
}
