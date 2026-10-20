"use client";

import { useId, useState } from "react";
import { CheckCircle2, Cable, Router } from "lucide-react";
import { dcCircuit } from "../lib/physics.js";
import { UnitName } from "./QuantityLegend";

export default function PowerSupplyDemo() {
  const [rating, setRating] = useState(3);
  const [demand, setDemand] = useState(1);
  const id = useId();
  const model = dcCircuit({ voltage: 12, resistance: 12 / demand });
  const suitable = rating >= demand;
  const format = (n) => n.toLocaleString("de-DE", { maximumFractionDigits: 1 });
  return (
    <section className="supply-demo" aria-label="Netzteil ausprobieren">
      <header>
        <span>
          <i /> WERKBANK / 01
        </span>
        <strong>12 V DC</strong>
      </header>
      <div className="supply-demo-diagram">
        <div>
          <Cable size={34} />
          <strong>NETZTEIL</strong>
          <span>12 V · max. {rating} A</span>
        </div>
        <span
          className={`supply-connection ${suitable ? "active" : ""}`}
          aria-hidden="true"
        />
        <div>
          <Router size={35} />
          <strong>GERÄT</strong>
          <span>Bedarf: {format(demand)} A</span>
        </div>
      </div>
      <div className="supply-readings">
        <div>
          <span>BENÖTIGTER STROM</span>
          <output>
            {format(demand)} <UnitName unit="A" />
          </output>
        </div>
        <div>
          <span>LEISTUNGSBEDARF</span>
          <output>
            {format(model.power)} <UnitName unit="W" />
          </output>
        </div>
      </div>
      <fieldset className="supply-rating">
        <legend>Maximale Stromabgabe des Netzteils</legend>
        {[1, 2, 3].map((value) => (
          <label key={value}>
            <input
              type="radio"
              name={`${id}-rating`}
              checked={rating === value}
              onChange={() => setRating(value)}
            />
            <span>{value} A</span>
          </label>
        ))}
      </fieldset>
      <label className="supply-demand" htmlFor={id}>
        Strombedarf des Geräts <span>{format(demand)} A</span>
      </label>
      <input
        id={id}
        type="range"
        min="0.5"
        max="3"
        step="0.5"
        value={demand}
        onChange={(event) => setDemand(Number(event.target.value))}
      />
      <p
        className={`supply-verdict ${suitable ? "suitable" : "insufficient"}`}
        role="status"
      >
        <CheckCircle2 size={16} />
        {suitable
          ? "Für diesen Bedarf ausreichend: Ein höherer Maximalwert erzwingt keinen höheren Gerätestrom."
          : "Für diesen Bedarf reicht die Strombelastbarkeit nicht. Das ist keine Simulation einer realen Schutzschaltung."}
      </p>
      <p className="supply-caption">
        A = Ampere, Stromstärke · W = Watt, Leistung. Vereinfachtes 12-V-Modell:
        Spannung, DC-Versorgung, Stecker und Polarität gelten hier als passend
        geprüft.
      </p>
    </section>
  );
}
