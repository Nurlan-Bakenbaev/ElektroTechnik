"use client";

import { useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Check,
  Lightbulb,
} from "lucide-react";
import { quickConcepts } from "../data/quick-concepts.js";
import QuantityLegend, { UnitText } from "./QuantityLegend";
import Notation from "./Notation";
import CurrentPrimer from "./CurrentPrimer";

const groups = [...new Set(quickConcepts.map((concept) => concept.group))];

function ConceptCheck({ concept }) {
  const [choice, setChoice] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const correct = choice === concept.check.correct;
  return (
    <form
      className="essentials-check"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <span className="essentials-label">04 · SELBST PRÜFEN</span>
      <fieldset>
        <legend>
          <UnitText>{concept.check.question}</UnitText>
        </legend>
        {concept.check.options.map((option, index) => (
          <label key={option}>
            <input
              type="radio"
              name={`concept-${concept.id}`}
              checked={choice === index}
              onChange={() => {
                setChoice(index);
                setSubmitted(false);
              }}
            />
            <span>
              <UnitText>{option}</UnitText>
            </span>
          </label>
        ))}
      </fieldset>
      <button
        className="button button-dark"
        type="submit"
        disabled={choice === null}
      >
        Antwort prüfen <Check size={16} />
      </button>
      {submitted && (
        <div
          className={`essentials-feedback ${correct ? "is-correct" : "try-again"}`}
          role="status"
        >
          <strong>
            {correct
              ? "Richtig eingeordnet."
              : "Noch nicht richtig. Schau dir den Unterschied an:"}
          </strong>
          <p>
            <UnitText>{concept.check.explanation}</UnitText>
          </p>
        </div>
      )}
      <p className="essentials-check-note">
        Zum Üben ohne Bewertung. Deine Ergebnisse im Kurs und in der
        Abschlussprüfung bleiben unverändert.
      </p>
    </form>
  );
}

export default function Essentials() {
  const [selected, setSelected] = useState(0);
  const articleRef = useRef(null);
  const concept = quickConcepts[selected];
  function selectConcept(index) {
    setSelected(index);
    requestAnimationFrame(() => {
      articleRef.current?.focus({ preventScroll: true });
      articleRef.current?.scrollIntoView({
        block: "start",
        behavior: "instant",
      });
    });
  }
  return (
    <div className="essentials-page">
      <header className="essentials-intro">
        <span className="eyebrow">ELEKTROTECHNIK · GRUNDLAGEN</span>
        <h1>
          Erst verstehen.
          <br />
          Dann rechnen.
        </h1>
        <p>
          Was ist Strom? Was treibt ihn an? Und was bedeuten die Buchstaben und
          Einheiten? Hier lernst du die Begriffe in einer sinnvollen
          Reihenfolge: Erklärung, Beispiel, typische Verwechslung und
          Selbstkontrolle.
        </p>
        <div className="essentials-intro-meta">
          <BookOpen size={18} />
          <span>12 Grundbegriffe · Schritt für Schritt · ohne Vorwissen</span>
        </div>
      </header>

      <section
        className="origin-card essentials-origin"
        aria-labelledby="origin-heading"
      >
        <div>
          <span className="essentials-label">DER ZUSAMMENHANG ZUERST</span>
          <h2 id="origin-heading">
            Quelle, Stromkreis und Verbraucher: so hängt es zusammen.
          </h2>
          <p>
            Es sind bereits Ladungen im Kabel vorhanden. Die Quelle stellt
            Spannung und Energie bereit. Erst ein geschlossener leitfähiger Weg
            ermöglicht einen dauerhaften Gleichstrom. Die Begriffe beschreiben
            verschiedene Teile dieses Vorgangs:
          </p>
        </div>
        <dl className="essentials-map">
          <div>
            <dt>
              Spannung <span>Volt · V</span>
            </dt>
            <dd>
              Welcher elektrische Unterschied besteht zwischen zwei Punkten?
            </dd>
          </div>
          <div>
            <dt>
              Stromstärke <span>Ampere · A</span>
            </dt>
            <dd>Wie viel Ladung fließt pro Sekunde durch einen Querschnitt?</dd>
          </div>
          <div>
            <dt>
              Leistung <span>Watt · W</span>
            </dt>
            <dd>
              Wie viel Energie wird pro Sekunde übertragen oder umgewandelt?
            </dd>
          </div>
          <div>
            <dt>
              Energie <span>Joule · J / Kilowattstunde · kWh</span>
            </dt>
            <dd>
              Wie viel wurde im betrachteten Zeitraum insgesamt übertragen?
            </dd>
          </div>
        </dl>
      </section>

      <div className="essentials-workspace">
        <nav className="essentials-topics" aria-label="Grundbegriff auswählen">
          <span className="essentials-label">DEIN EINSTIEG</span>
          {groups.map((group) => (
            <div className="essentials-topic-group" key={group}>
              <h2>{group}</h2>
              {quickConcepts.map(
                (item, index) =>
                  item.group === group && (
                    <button
                      type="button"
                      key={item.id}
                      aria-pressed={selected === index}
                      aria-controls="essential-concept"
                      onClick={() => selectConcept(index)}
                    >
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      <strong>{item.title}</strong>
                      <ArrowRight size={15} />
                    </button>
                  ),
              )}
            </div>
          ))}
        </nav>

        <article
          className="essential-concept"
          id="essential-concept"
          ref={articleRef}
          tabIndex={-1}
          aria-labelledby="essential-heading"
        >
          <header className="essential-concept-heading">
            <span className="essentials-label">
              BEGRIFF {String(selected + 1).padStart(2, "0")} / 12 ·{" "}
              {concept.group}
            </span>
            <h2 id="essential-heading">{concept.title}</h2>
            <p>{concept.question}</p>
          </header>
          <div className="essential-concept-body" key={concept.id}>
            <section
              className="essential-explanation"
              aria-label="Bedeutung und Erklärung"
            >
              <span className="essentials-label">01 · VERSTEHEN</span>
              <p className="essential-definition">
                <UnitText>{concept.short}</UnitText>
              </p>
              {concept.id === "current" && <CurrentPrimer />}
              {concept.explanation.map((paragraph) => (
                <p key={paragraph}>
                  <UnitText>{paragraph}</UnitText>
                </p>
              ))}
              <div className="essential-symbol">
                <span>
                  <Notation>{concept.symbol}</Notation>
                </span>
                <div>
                  <strong>{concept.unit}</strong>
                  <p>
                    <UnitText>{concept.symbolMeaning}</UnitText>
                  </p>
                </div>
              </div>
              <details className="essential-comparison">
                <summary>Ein Vergleich zum Vorstellen</summary>
                <p>{concept.analogy}</p>
              </details>
              <QuantityLegend items={concept.quantities} />
            </section>

            <section
              className="essential-example"
              aria-label="Beispiel mit Erklärung"
            >
              <span className="essentials-label">
                02 · AM BEISPIEL NACHVOLLZIEHEN
              </span>
              <h3>{concept.example.title}</h3>
              <p className="essential-given">
                <UnitText>{concept.example.given}</UnitText>
              </p>
              <ol>
                {concept.example.steps.map((step, index) => (
                  <li key={step}>
                    <span>{index + 1}</span>
                    <p>
                      <UnitText>{step}</UnitText>
                    </p>
                  </li>
                ))}
              </ol>
              <div className="essential-result">
                <Check size={19} />
                <p>
                  <UnitText>{concept.example.result}</UnitText>
                </p>
              </div>
            </section>

            <aside className="essential-pitfall">
              <Lightbulb size={22} />
              <div>
                <span className="essentials-label">03 · NICHT VERWECHSELN</span>
                <p>
                  <UnitText>{concept.pitfall}</UnitText>
                </p>
              </div>
            </aside>
            <ConceptCheck concept={concept} />
            <a
              className="essential-lesson-link"
              href={`#/lesson/${concept.lessonId}`}
            >
              <BookOpen size={20} />
              <span>
                <strong>Mit der passenden Lektion weiterlernen</strong>
                <small>
                  Erklärung vertiefen, im Labor beobachten und im Thementest
                  anwenden.
                </small>
              </span>
              <ArrowUpRight size={20} />
            </a>
          </div>
          <footer className="essential-pagination">
            <button
              type="button"
              className="button button-light"
              disabled={selected === 0}
              onClick={() => selectConcept(selected - 1)}
            >
              <ArrowLeft size={16} />
              Zurück
            </button>
            <span>
              {selected + 1} von {quickConcepts.length}
            </span>
            {selected < quickConcepts.length - 1 ? (
              <button
                type="button"
                className="button button-dark"
                onClick={() => selectConcept(selected + 1)}
              >
                Weiter: {quickConcepts[selected + 1].title}
                <ArrowRight size={16} />
              </button>
            ) : (
              <a className="button button-dark" href="#/curriculum">
                Zum Lernpfad
                <ArrowRight size={16} />
              </a>
            )}
          </footer>
        </article>
      </div>
    </div>
  );
}
