"use client";
import { useState } from "react";

export default function WorkshopVisual({ type }) {
  const [position, setPosition] = useState(1);
  if (
    ![
      "series",
      "parallel",
      "mixed",
      "divider",
      "bridge",
      "rc",
      "induction",
      "characteristic",
    ].includes(type)
  )
    return null;
  if (["rc", "induction", "characteristic"].includes(type)) {
    const rc = type === "rc",
      induction = type === "induction";
    const values = rc
      ? [0, 0.6321, 0.8647, 0.9502, 0.9817, 0.9933]
      : induction
        ? [0.6, 0.2, 0.2]
        : [0, 0.2, 0.7, 1];
    return (
      <figure className="workshop-visual">
        <figcaption>
          {rc
            ? "Ladekurve: Anteil der Endspannung über der Zeit in τ"
            : induction
              ? "Flussverlauf: Abnahme, danach konstanter Fluss"
              : "Beispiel einer nichtlinearen Kennlinie (schematisch)"}
        </figcaption>
        <svg
          viewBox="0 0 600 240"
          role="img"
          aria-label={
            rc
              ? "Beim Laden steigt die Kondensatorspannung zunächst schnell und nähert sich dann dem Endwert."
              : induction
                ? "Ein fallender Abschnitt wird von einem waagerechten Abschnitt abgelöst."
                : "Die Stromstärke wächst nicht proportional mit der Spannung."
          }
        >
          <path d="M50 20V200H570" fill="none" stroke="currentColor" />
          <path
            d={values
              .map(
                (value, i) =>
                  `${i ? "L" : "M"}${50 + (i * 500) / (values.length - 1)},${200 - value * 170}`,
              )
              .join(" ")}
            fill="none"
            stroke="#4338ca"
            strokeWidth="4"
          />
          {values.map((value, i) => (
            <g key={i}>
              <circle
                cx={50 + (i * 500) / (values.length - 1)}
                cy={200 - value * 170}
                r="5"
                fill="#4338ca"
              />
              <text
                x={50 + (i * 500) / (values.length - 1)}
                y="225"
                textAnchor="middle"
              >
                {rc ? `${i} τ` : induction ? `${i * 20} ms` : `P${i}`}
              </text>
            </g>
          ))}
          <text x="12" y="22">
            {rc ? "U" : induction ? "Φ" : "I"}
          </text>
        </svg>
        {rc && (
          <>
            <label>
              Beispielzeit in Zeitkonstanten
              <input
                type="range"
                min="0"
                max="5"
                step="1"
                value={position}
                onChange={(event) => setPosition(Number(event.target.value))}
              />
            </label>
            <output>
              {position} τ: ungefähr{" "}
              {(100 * (1 - Math.exp(-position))).toLocaleString("de-DE", {
                maximumFractionDigits: 1,
              })}{" "}
              % der Endspannung
            </output>
          </>
        )}
        <details>
          <summary>Wertetabelle und Beschreibung</summary>
          <table>
            <thead>
              <tr>
                <th>
                  {rc
                    ? "Zeit in τ"
                    : induction
                      ? "Zeit in ms"
                      : "Beispielpunkt"}
                </th>
                <th>
                  {rc
                    ? "Spannungsanteil in %"
                    : induction
                      ? "Fluss in mWb"
                      : "Normierter Stromanteil"}
                </th>
              </tr>
            </thead>
            <tbody>
              {values.map((value, i) => (
                <tr key={i}>
                  <td>{rc ? i : induction ? i * 20 : i}</td>
                  <td>
                    {(rc ? value * 100 : value).toLocaleString("de-DE", {
                      maximumFractionDigits: 2,
                    })}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p>
            {rc
              ? "Die Verbindung der Messpunkte ist vereinfacht; die ideale Kurve ist exponentiell. Die Spannungsänderung wird mit der Zeit kleiner."
              : induction
                ? "Im ersten Abschnitt ist die Steigung negativ, im zweiten null. Die Zeichnung erklärt den Verlauf; verwende die genauen Angaben im Aufgabentext für deine Rechnung."
                : "Die Skizze zeigt nur das Prinzip. Berechne mit den genauen Wertepaaren aus dem Aufgabentext."}
          </p>
        </details>
      </figure>
    );
  }
  const label = {
    series: "Ein gemeinsamer Weg durch zwei Widerstände",
    parallel: "Zwei Widerstände zwischen denselben Knoten",
    mixed: "Ein Serienwiderstand vor einer parallelen Gruppe",
    divider: "Zwei Teilerwiderstände; Last parallel zum unteren Glied",
    bridge: "Zwei Teilerzweige mit unbelasteter Messdiagonale",
  }[type];
  const box = (x, y, name) => (
    <g key={name}>
      <rect
        x={x}
        y={y}
        width="70"
        height="35"
        rx="3"
        fill="#fff"
        stroke="#253647"
        strokeWidth="2"
      />
      <text x={x + 35} y={y + 23} textAnchor="middle">
        {name}
      </text>
    </g>
  );
  return (
    <figure className="workshop-visual">
      <figcaption>{label}</figcaption>
      <svg
        viewBox="0 0 600 240"
        role="img"
        aria-label={label + ". Die Werte stehen im Aufgabentext."}
      >
        {type === "series" ? (
          <>
            <path
              d="M70 70H530V190H70"
              fill="none"
              stroke="#253647"
              strokeWidth="3"
            />
            {box(180, 52, "R₁")}
            {box(355, 52, "R₂")}
          </>
        ) : type === "bridge" ? (
          <>
            <path
              d="M100 30H500M100 210H500M180 30V210M420 30V210M180 120H420"
              stroke="#253647"
              strokeWidth="3"
              fill="none"
            />
            {box(145, 50, "R₁")}
            {box(145, 150, "R₂")}
            {box(385, 50, "R₃")}
            {box(385, 150, "R₄")}
            <circle cx="300" cy="120" r="22" fill="#fff" stroke="#253647" />
            <text x="300" y="126" textAnchor="middle">
              V
            </text>
            <text x="195" y="113">
              A
            </text>
            <text x="435" y="113">
              B
            </text>
          </>
        ) : (
          <>
            <path
              d={
                type === "divider"
                  ? "M65 40H230M65 210H500M230 40V210M430 130V210"
                  : "M65 40H500M65 210H500M230 40V210M430 40V210"
              }
              stroke="#253647"
              strokeWidth="3"
              fill="none"
            />
            {type === "mixed" && box(100, 22, "R₁")}
            {type === "divider" ? (
              <>
                {box(195, 65, "oben")}
                {box(195, 155, "unten")}
                {box(395, 155, "Last")}
                <path d="M230 130H430" stroke="#253647" strokeWidth="3" />
              </>
            ) : (
              <>
                {box(195, 105, type === "mixed" ? "R₂" : "R₁")}
                {box(395, 105, type === "mixed" ? "R₃" : "R₂")}
              </>
            )}
          </>
        )}
        <text x="25" y="37">
          +
        </text>
        <text x="25" y="214">
          −
        </text>
        <text x="30" y="135">
          U
        </text>
      </svg>
      <p>
        {type === "divider"
          ? "Beim belasteten Teiler gehört der gezeichnete senkrechte Zweig rechts nur zur Last: Die Last beginnt am Mittelpunkt und endet am unteren Bezugspunkt."
          : "Schematische Darstellung. Entscheidend sind die Knoten und der im Text beschriebene Stromweg, nicht die räumliche Nähe der Bauteile."}
      </p>
    </figure>
  );
}
