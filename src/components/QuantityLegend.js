"use client";

import { useState } from "react";
import { BookOpen, ChevronDown } from "lucide-react";
import { quantities, unitDefinitions, splitUnitText } from "../data/units.js";

export function UnitName({ unit }) {
  const definition = unitDefinitions[unit];
  return definition ? (
    <abbr
      className="unit-abbreviation"
      title={`${definition.name}: ${definition.meaning}`}
      tabIndex={0}
    >
      {unit}
    </abbr>
  ) : (
    unit
  );
}

export function UnitText({ children }) {
  return splitUnitText(children ?? "").map((part, index) =>
    part.unit ? (
      <span key={index} className="quantity-value">
        {part.text}
        <UnitName unit={part.unit} />
      </span>
    ) : (
      part.text
    ),
  );
}

export default function QuantityLegend({ items, compact = false }) {
  const [expanded, setExpanded] = useState(!compact);
  return (
    <section
      className={`quantity-legend ${compact ? "compact" : ""}`}
      aria-label="Legende: Größen und Einheiten"
    >
      <button
        className="quantity-legend-toggle"
        onClick={() => setExpanded(!expanded)}
        aria-expanded={expanded}
      >
        <BookOpen size={16} />
        <span>Was bedeuten die Zeichen?</span>
        <ChevronDown size={16} />
      </button>
      {expanded && (
        <dl>
          {items.map((key) => {
            const quantity = quantities[key];
            if (!quantity) return null;
            return (
              <div key={key}>
                <dt>
                  <span>{quantity.symbol}</span>
                  <strong>
                    {quantity.name}
                    <small>
                      {quantity.unit} — {unitDefinitions[quantity.unit].name}
                    </small>
                  </strong>
                </dt>
                <dd>{quantity.simple}</dd>
              </div>
            );
          })}
        </dl>
      )}
      {!expanded && (
        <p>
          {items
            .map((key) => quantities[key])
            .filter(Boolean)
            .map(
              (quantity) =>
                `${quantity.unit} = ${unitDefinitions[quantity.unit].name}`,
            )
            .join(" · ")}
        </p>
      )}
    </section>
  );
}
