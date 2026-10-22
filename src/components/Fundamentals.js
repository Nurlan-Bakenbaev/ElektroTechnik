"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, BookOpen, CheckCircle2 } from "lucide-react";
import { foundations } from "../data/foundations.js";
import QuantityLegend, { UnitText } from "./QuantityLegend";
import LessonVideo from "./LessonVideo";
import FormulaImage from "./FormulaImage";

export function FoundationLinks({ lessonId }) {
  const related = foundations.filter((guide) =>
    guide.related.includes(lessonId),
  );
  return (
    <aside
      className="foundation-links"
      aria-label="Zusätzliche Grundlagen und Praxis"
    >
      <h3>Verständlich vertiefen</h3>
      <p>Diese ergänzenden Erklärungen passen zur Lektion:</p>
      <ul>
        {related.map((guide) => (
          <li key={guide.id}>
            <a href={`#/fundamentals/${guide.id}`}>
              {guide.title}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export function PowerTypeExplorer() {
  const [mode, setMode] = useState("dc");
  const [time, setTime] = useState(12);
  const voltage = mode === "dc" ? 5 : 5 * Math.sin((4 * Math.PI * time) / 100);
  const curve = Array.from({ length: 201 }, (_, index) => {
    const x = 60 + (600 * index) / 200;
    const y =
      125 - 65 * (mode === "dc" ? 1 : Math.sin((4 * Math.PI * index) / 200));
    return `${index ? "L" : "M"}${x.toFixed(2)},${y.toFixed(2)}`;
  }).join(" ");
  const german = (value) =>
    (Math.abs(value) < 0.005 ? 0 : value).toLocaleString("de-DE", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  return (
    <section
      className="power-type-explorer"
      aria-label="Gleich- und Wechselspannung vergleichen"
    >
      <h2>Bewege den Zeitpunkt und beobachte die Spannung</h2>
      <p>
        Verglichen werden 5 V konstante Gleichspannung und eine Sinusspannung
        mit 5 V Scheitelwert und 50 Hz. Die 5 V der Sinuskurve sind kein
        Effektivwert.
      </p>
      <div className="power-type-modes" role="group" aria-label="Spannungsart">
        <button aria-pressed={mode === "dc"} onClick={() => setMode("dc")}>
          Gleichspannung DC
        </button>
        <button aria-pressed={mode === "ac"} onClick={() => setMode("ac")}>
          Wechselspannung AC
        </button>
      </div>
      <svg
        viewBox="0 0 720 245"
        role="img"
        aria-label={
          mode === "dc"
            ? "Gleichspannung: konstante positive 5 Volt"
            : "Sinusförmige Wechselspannung zwischen plus und minus 5 Volt, zwei Perioden in 40 Millisekunden"
        }
      >
        <rect x="59" y="25" width="602" height="180" rx="6" fill="#f1f6f9" />
        {[60, 125, 190].map((y) => (
          <line
            key={y}
            x1="60"
            x2="660"
            y1={y}
            y2={y}
            stroke="#bfd0dc"
            strokeDasharray={y === 125 ? "0" : "4 5"}
          />
        ))}
        {[0, 10, 20, 30, 40].map((t, index) => (
          <g key={t}>
            <line
              x1={60 + index * 150}
              x2={60 + index * 150}
              y1="30"
              y2="205"
              stroke="#d5e1e8"
            />
            <text x={60 + index * 150} y="227" textAnchor="middle">
              {t} ms
            </text>
          </g>
        ))}
        <text x="44" y="65" textAnchor="end">
          +5 V
        </text>
        <text x="44" y="130" textAnchor="end">
          0 V
        </text>
        <text x="44" y="195" textAnchor="end">
          −5 V
        </text>
        <path
          d={curve}
          fill="none"
          stroke={mode === "dc" ? "#126f82" : "#7541a5"}
          strokeWidth="4"
        />
        <line
          x1={60 + 6 * time}
          x2={60 + 6 * time}
          y1="30"
          y2="205"
          stroke="#173e53"
          strokeDasharray="4 4"
        />
        <circle
          cx={60 + 6 * time}
          cy={125 - 13 * voltage}
          r="7"
          fill="#fff"
          stroke="#173e53"
          strokeWidth="3"
        />
      </svg>
      <label>
        Zeitpunkt im Beispiel
        <input
          aria-label="Zeitpunkt im Beispiel"
          type="range"
          min="0"
          max="100"
          step="1"
          value={time}
          onChange={(event) => setTime(Number(event.target.value))}
        />
      </label>
      <output aria-live="polite">
        {german(time * 0.4)} ms: <strong>{german(voltage)} V</strong> ·{" "}
        {mode === "dc"
          ? "gleichbleibende positive Polarität"
          : Math.abs(voltage) < 0.005
            ? "Nulldurchgang"
            : voltage > 0
              ? "positive Halbwelle"
              : "negative Halbwelle"}
      </output>
      <p>
        Das Vorzeichen gilt zwischen zwei fest gewählten Messpunkten. Bei der
        Wechselspannung kehrt es sich regelmäßig um; der Effektivwert dieser
        Beispielkurve beträgt etwa 3,54 V.
      </p>
    </section>
  );
}

function FoundationCheck({ guide }) {
  const [choice, setChoice] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  return (
    <form
      className="foundation-check"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <span className="eyebrow">VERSTANDEN? KURZ SELBST PRÜFEN</span>
      <fieldset>
        <legend>{guide.check.question}</legend>
        {guide.check.options.map((option, index) => (
          <label key={option}>
            <input
              type="radio"
              name={`foundation-${guide.id}`}
              checked={choice === index}
              onChange={() => {
                setChoice(index);
                setSubmitted(false);
              }}
            />
            <span>{option}</span>
          </label>
        ))}
      </fieldset>
      <button
        type="submit"
        className="button button-dark"
        disabled={choice === null}
      >
        Antwort prüfen <CheckCircle2 size={17} />
      </button>
      {submitted && (
        <p role="status">
          <strong>
            {choice === guide.check.correct ? "Richtig. " : "Noch nicht ganz. "}
          </strong>
          {guide.check.explanation}
        </p>
      )}
      <p className="foundation-check-note">
        Selbstkontrolle ohne Bewertung. Der Thementest der Hauptlektion bleibt
        separat.
      </p>
    </form>
  );
}

export default function Fundamentals({ selectedId }) {
  const index = Math.max(
    0,
    foundations.findIndex((guide) => guide.id === selectedId),
  );
  const guide = foundations[index];
  return (
    <div className="foundations-page">
      <header className="foundations-heading">
        <span className="eyebrow">
          GRUNDLAGEN & PRAXIS · 8 ERGÄNZENDE THEMEN
        </span>
        <h1>Zusammenhänge verstehen.</h1>
        <p>
          Von der Herkunft des Stroms bis zum Motor und zur Abschirmung:
          verständliche Erklärungen, Vergleiche, Beispiele und Selbstkontrollen
          ergänzen deine 13 Hauptlektionen.
        </p>
      </header>
      <div className="foundations-layout">
        <aside className="foundations-nav" aria-label="Zusatzthemen">
          <span className="eyebrow">THEMA WÄHLEN</span>
          <label className="foundations-select">
            <span className="sr-only">Zusatzthema wählen</span>
            <select
              value={guide.id}
              onChange={(event) => {
                window.location.hash = `/fundamentals/${event.target.value}`;
              }}
            >
              {foundations.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.title}
                </option>
              ))}
            </select>
          </label>
          <nav aria-label="Ergänzende Themen">
            {foundations.map((item, position) => (
              <a
                key={item.id}
                href={`#/fundamentals/${item.id}`}
                aria-current={guide.id === item.id ? "page" : undefined}
              >
                <span>{String(position + 1).padStart(2, "0")}</span>
                {item.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="foundation-article" key={guide.id}>
          <header>
            <span className="eyebrow">
              ZUSATZTHEMA {String(index + 1).padStart(2, "0")} / 08
            </span>
            <h2>{guide.title}</h2>
            <p className="foundation-lead">
              <UnitText>{guide.lead}</UnitText>
            </p>
          </header>
          <QuantityLegend items={guide.units} />
          {guide.explorer && <PowerTypeExplorer />}
          {guide.sections.map((section, position) => (
            <section className="foundation-section" key={section.title}>
              <span className="foundation-section-number">
                {String(position + 1).padStart(2, "0")}
              </span>
              <h3>{section.title}</h3>
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph}>
                  <UnitText>{paragraph}</UnitText>
                </p>
              ))}
            </section>
          ))}
          {guide.comparison && (
            <div
              className="foundation-table-wrap"
              role="region"
              aria-label="Vergleichstabelle"
              tabIndex={0}
              data-lenis-prevent
            >
              <table>
                <caption>{guide.title} im Vergleich</caption>
                <thead>
                  <tr>
                    {guide.comparison.columns.map((column) => (
                      <th key={column} scope="col">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {guide.comparison.rows.map((row) => (
                    <tr key={row[0]}>
                      {row.map((cell, cellIndex) =>
                        cellIndex === 0 ? (
                          <th key={cellIndex} scope="row">
                            {cell}
                          </th>
                        ) : (
                          <td key={cellIndex}>
                            <UnitText>{cell}</UnitText>
                          </td>
                        ),
                      )}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <section className="foundation-example">
            <span className="eyebrow">BEISPIEL · SCHRITT FÜR SCHRITT</span>
            <h3>{guide.example.title}</h3>
            <p>
              <UnitText>{guide.example.given}</UnitText>
            </p>
            {guide.id === "capacitors" && (
              <FormulaImage expression="C = Q / U; Q = C · U; i = C · dU/dt" />
            )}
            <ol>
              {guide.example.steps.map((step) => (
                <li key={step}>
                  <UnitText>{step}</UnitText>
                </li>
              ))}
            </ol>
            <p className="foundation-result">
              <strong>
                <UnitText>{guide.example.result}</UnitText>
              </strong>
            </p>
          </section>
          <FoundationCheck guide={guide} />
          <details className="foundation-sources">
            <summary>Fachliche Quellen und weiterführende Erklärung</summary>
            <ul>
              {guide.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {source.title} <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p>
              Die Erklärungen auf dieser Seite sind eigenständig auf Deutsch
              formuliert. Die verlinkten Lehrbuchquellen sind auf Englisch.
            </p>
          </details>
          <a
            className="button button-dark foundation-lesson-link"
            href={`#/lesson/${guide.lessonId}`}
          >
            <BookOpen size={18} />
            Zur Hauptlektion und zum Thementest <ArrowRight size={17} />
          </a>
          <div className="foundation-video">
            <h3>Video zur zugehörigen Hauptlektion</h3>
            <LessonVideo lessonId={guide.lessonId} />
          </div>
          <nav
            className="foundation-paging"
            aria-label="Weiterlernen in den Zusatzthemen"
          >
            {index > 0 ? (
              <a href={`#/fundamentals/${foundations[index - 1].id}`}>
                <ArrowLeft size={17} />
                Vorheriges Thema
              </a>
            ) : (
              <span />
            )}
            {index < foundations.length - 1 && (
              <a href={`#/fundamentals/${foundations[index + 1].id}`}>
                Nächstes Thema
                <ArrowRight size={17} />
              </a>
            )}
          </nav>
        </article>
      </div>
    </div>
  );
}
