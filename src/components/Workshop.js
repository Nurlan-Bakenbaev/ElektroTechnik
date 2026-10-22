"use client";

import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  BookOpen,
  Calculator,
  CheckCircle2,
  Lightbulb,
  RotateCcw,
} from "lucide-react";
import { workshopTasks, workshopFamilies } from "../data/workshop-tasks.js";
import {
  WORKSHOP_KEY,
  WORKSHOP_LIMIT,
  calculate,
  emptyWorkshop,
  gradeStep,
  newAttempt,
  quantity,
  restoreWorkshop,
  taskStatus,
} from "../lib/workshop.js";
import { formulaSheet } from "../data/exam.js";
import FormulaImage from "./FormulaImage";
import { UnitText } from "./QuantityLegend";
import WorkshopVisual from "./WorkshopVisual";

const format = (number) =>
  number.toLocaleString("de-DE", { maximumSignificantDigits: 11 });
function ArithmeticHelp({ onUse }) {
  const [expression, setExpression] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");
  return (
    <details className="workshop-calculator">
      <summary>
        <Calculator size={18} />
        Rechenhilfe öffnen
      </summary>
      <p>
        Für Zahlen und Rechenzeichen. Nutze * für Multiplikation, / für Division
        und ^ für Potenzen. Einheiten werden beim Antwortfeld geprüft.
      </p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          try {
            setResult(calculate(expression));
            setError("");
          } catch (error) {
            setError(error.message);
            setResult(null);
          }
        }}
      >
        <label>
          Zahlenausdruck
          <input
            value={expression}
            maxLength={100}
            placeholder="2 * (30 / 60)"
            onChange={(event) => setExpression(event.target.value)}
          />
        </label>
        <button type="submit" className="button button-outline">
          Ausrechnen
        </button>
      </form>
      {error && <p role="alert">{error}</p>}
      {result !== null && (
        <div className="calculator-result">
          <output aria-live="polite">{format(result)}</output>
          <button
            type="button"
            className="text-link"
            onClick={() => onUse(format(result))}
          >
            Ins Antwortfeld übernehmen
          </button>
        </div>
      )}
    </details>
  );
}

function Task({ task, attempt, saveAttempt, nextTask }) {
  const [stage, setStage] = useState(
    Math.min(attempt.answers.length, task.steps.length - 1),
  );
  const [input, setInput] = useState(attempt.draft || "");
  const [feedback, setFeedback] = useState("");
  const [reviewed, setReviewed] = useState(false);
  const heading = useRef(null);
  const solution = useRef(null);
  const step = task.steps[stage];
  const correct = attempt.answers[stage] !== undefined;
  const finished = taskStatus(task, attempt) !== "open";
  function updateInput(value) {
    setInput(value);
    setFeedback("");
    saveAttempt({ ...attempt, draft: value });
  }
  function focusStep() {
    requestAnimationFrame(() =>
      heading.current?.focus({ preventScroll: true }),
    );
  }
  function submit(event) {
    event.preventDefault();
    if (gradeStep(step, input)) {
      saveAttempt({
        ...attempt,
        answers: [...attempt.answers.slice(0, stage), input],
        submitted: false,
        draft: "",
      });
      setFeedback("");
    } else {
      saveAttempt({
        ...attempt,
        hints: [...new Set([...attempt.hints, stage])],
      });
      const parsed =
        step.type === "numeric" ? quantity(input, step.unit) : null;
      setFeedback(
        parsed && !parsed.valid
          ? parsed.error
          : `Noch nicht ganz. ${step.hint}`,
      );
    }
  }
  function next() {
    setStage((value) => value + 1);
    setInput("");
    setFeedback("");
    focusStep();
  }
  const status = taskStatus(task, attempt);
  return (
    <article className="workshop-task">
      <header>
        <span className="eyebrow">
          AUFGABENWERKSTATT · EIGENE ÜBUNG · BLATTBEZUG {task.sheet}
        </span>
        <h2>{task.title}</h2>
        <p className="workshop-condition">
          <UnitText>{task.text}</UnitText>
        </p>
      </header>
      <details className="workshop-teaching">
        <summary>
          <BookOpen size={18} />
          Vor dem Rechnen: die Idee verstehen
        </summary>
        {task.teaching.map((text) => (
          <p key={text}>
            <UnitText>{text}</UnitText>
          </p>
        ))}
      </details>
      <details className="workshop-quantities" open>
        <summary>Größen, Zeichen und Einheiten</summary>
        <ul>
          {task.quantities.map((text) => (
            <li key={text}>
              <UnitText>{text}</UnitText>
            </li>
          ))}
        </ul>
      </details>
      <WorkshopVisual type={task.visual} />
      {task.formulas.length > 0 && (
        <details className="workshop-formulas">
          <summary>Passende Formelbilder und ihre Quellen</summary>
          <p>
            Die Bilder zeigen die Bausteine für deinen Rechenweg. Wähle die
            Beziehung passend zum Modell; die gesuchte Größe kann eine
            Umstellung erfordern.
          </p>
          {task.formulas.map((index) => (
            <div key={index}>
              <h3>{formulaSheet[index].title}</h3>
              <FormulaImage expression={formulaSheet[index].expression} />
              <p>
                <UnitText>{formulaSheet[index].legend}</UnitText>
              </p>
            </div>
          ))}
        </details>
      )}
      {finished ? (
        <section className="workshop-result" aria-label="Aufgabenergebnis">
          <CheckCircle2 size={30} />
          <h3>
            {status === "independent"
              ? "Ohne eingeblendete Hilfe gelöst"
              : "Mit Unterstützung geübt"}
          </h3>
          <p>
            {status === "independent"
              ? "Du hast alle prüfbaren Schritte richtig beantwortet, ohne Hinweise oder Musterlösung zu öffnen."
              : "Alle prüfbaren Schritte stimmen. Versuche jetzt die zweite Aufgabe mit anderen Angaben, bevor du die Hilfe öffnest."}{" "}
            Das ist unabhängig von den XP und Tests des Hauptkurses.
          </p>
          {nextTask && (
            <a
              className="button button-dark"
              href={`#/workshop/${nextTask.id}`}
            >
              Mit der zweiten Aufgabe weiter
              <ArrowRight size={17} />
            </a>
          )}
        </section>
      ) : (
        <section
          className="workshop-step"
          aria-label="Aktueller Lösungsschritt"
        >
          <p className="workshop-step-count">
            Schritt {stage + 1} von {task.steps.length} ·{" "}
            {step.type === "choice"
              ? "Verstehen und prüfen"
              : "Rechnen mit Einheiten"}
          </p>
          <div className="workshop-step-track" aria-hidden="true">
            {task.steps.map((_, i) => (
              <span
                key={i}
                className={
                  i < attempt.answers.length
                    ? "done"
                    : i === stage
                      ? "current"
                      : ""
                }
              />
            ))}
          </div>
          <h3 ref={heading} tabIndex={-1}>
            <UnitText>{step.prompt}</UnitText>
          </h3>
          {!correct ? (
            <form onSubmit={submit}>
              {step.type === "choice" ? (
                <fieldset>
                  <legend>Wähle die passende Antwort</legend>
                  {step.options.map((option, index) => (
                    <label className="workshop-option" key={option}>
                      <input
                        type="radio"
                        name="workshop-answer"
                        value={index}
                        checked={input === String(index)}
                        onChange={(event) => {
                          updateInput(event.target.value);
                          setFeedback("");
                        }}
                      />
                      <span>
                        <UnitText>{option}</UnitText>
                      </span>
                    </label>
                  ))}
                </fieldset>
              ) : (
                <label className="workshop-number-label">
                  Deine Antwort {step.unit ? `in ${step.unit}` : "ohne Einheit"}
                  <input
                    aria-label={`Deine Antwort${step.unit ? ` in ${step.unit}` : " ohne Einheit"}`}
                    value={input}
                    maxLength={100}
                    placeholder={
                      step.unit
                        ? `Zahl oder Zahl mit ${step.unit}`
                        : "Zahl eingeben"
                    }
                    onChange={(event) => {
                      updateInput(event.target.value);
                      setFeedback("");
                    }}
                    autoComplete="off"
                    spellCheck={false}
                  />
                  <small>
                    Dezimalkomma oder Dezimalpunkt. Eine passende alternative
                    Einheit ist erlaubt, z. B. 500 mA statt 0,5 A.
                  </small>
                </label>
              )}
              {feedback && (
                <p className="workshop-feedback error" role="alert">
                  {feedback}
                </p>
              )}
              <div className="workshop-answer-actions">
                <button
                  type="submit"
                  className="button button-dark"
                  disabled={!input.trim()}
                >
                  Schritt prüfen
                </button>
                <button
                  type="button"
                  className="button button-outline"
                  onClick={() =>
                    saveAttempt({
                      ...attempt,
                      hints: [...new Set([...attempt.hints, stage])],
                    })
                  }
                >
                  <Lightbulb size={17} />
                  Hinweis
                </button>
              </div>
            </form>
          ) : (
            <div className="workshop-feedback correct" role="status">
              <strong>Dieser Schritt stimmt.</strong>
              <p>
                <UnitText>{step.explanation}</UnitText>
              </p>
              {stage < task.steps.length - 1 ? (
                <button
                  type="button"
                  className="button button-dark"
                  onClick={next}
                >
                  Nächster Schritt
                  <ArrowRight size={17} />
                </button>
              ) : (
                <>
                  <p>Zum Abschluss: {task.reflection}</p>
                  <label className="workshop-reflection">
                    Eigene Erklärung (optional)
                    <textarea
                      value={attempt.reflection || ""}
                      maxLength={2000}
                      rows={4}
                      onChange={(event) =>
                        saveAttempt({
                          ...attempt,
                          reflection: event.target.value,
                        })
                      }
                    />
                  </label>
                  <p className="workshop-rubric">
                    Selbstprüfung: Habe ich die entscheidenden Begriffe und
                    Einheiten genannt, Ursache und Wirkung erklärt und das
                    Ergebnis am Modell geprüft? Freie Texte werden gespeichert,
                    aber nicht automatisch bewertet.
                  </p>
                  <label className="workshop-review">
                    <input
                      type="checkbox"
                      checked={reviewed}
                      onChange={(event) => setReviewed(event.target.checked)}
                    />
                    Ich habe das Ergebnis und die Kontrollfrage bewusst geprüft.
                  </label>
                  <button
                    type="button"
                    disabled={!reviewed}
                    className="button button-dark"
                    onClick={() => saveAttempt({ ...attempt, submitted: true })}
                  >
                    Aufgabe abschließen
                  </button>
                </>
              )}
            </div>
          )}
          {attempt.hints.includes(stage) && (
            <aside className="workshop-hint">
              <strong>Hinweis zu diesem Schritt</strong>
              <p>{step.hint}</p>
              <small>
                Dieser Versuch wird als Übung mit Unterstützung gekennzeichnet.
              </small>
            </aside>
          )}
          {step.type === "numeric" && !correct && (
            <ArithmeticHelp onUse={updateInput} />
          )}
        </section>
      )}
      <details
        className="workshop-solution"
        ref={solution}
        onToggle={(event) => {
          if (event.currentTarget.open && !attempt.solution && !finished)
            saveAttempt({ ...attempt, solution: true });
        }}
      >
        <summary>Erklärte Musterlösung ansehen</summary>
        <p>
          Die Musterlösung ist eine Lernhilfe. Öffnest du sie, gilt dieser
          Versuch als unterstützt.
        </p>
        <ol>
          {task.steps.map((s, i) => (
            <li key={i}>
              <strong>{s.prompt}</strong>
              <p>
                {s.type === "choice"
                  ? s.options[s.answer]
                  : `${format(s.answer)} ${s.unit}`}
              </p>
              <p>{s.explanation}</p>
            </li>
          ))}
        </ol>
        <p>
          <strong>Selbst erklären:</strong> {task.reflection}
        </p>
      </details>
      <footer className="workshop-task-footer">
        {task.family === "safety" && (
          <a
            className="text-link"
            href="https://www.drk.de/hilfe-in-deutschland/erste-hilfe/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Aktuelle Erste-Hilfe-Hinweise beim DRK ↗
          </a>
        )}
        <a className="text-link" href={`#/lesson/${task.lessonId}`}>
          Zur passenden Lektion
          <ArrowRight size={16} />
        </a>
        <details>
          <summary>
            <RotateCcw size={15} />
            Diesen Versuch neu beginnen
          </summary>
          <p>
            Nur dieser Aufgabenversuch wird ersetzt. Dein Kursprofil bleibt
            erhalten.
          </p>
          <button
            type="button"
            className="button button-outline"
            onClick={() => {
              saveAttempt(newAttempt());
              if (solution.current) solution.current.open = false;
              setStage(0);
              setInput("");
              setFeedback("");
              setReviewed(false);
              focusStep();
            }}
          >
            Versuch zurücksetzen
          </button>
        </details>
      </footer>
    </article>
  );
}

export default function Workshop({ selectedId }) {
  const [data, setData] = useState(emptyWorkshop);
  const [ready, setReady] = useState(false);
  const [notice, setNotice] = useState("");
  const [search, setSearch] = useState("");
  const [pendingImport, setPendingImport] = useState(null);
  const [epoch, setEpoch] = useState(0);
  const importInput = useRef(null);
  const task =
    workshopTasks.find((task) => task.id === selectedId) || workshopTasks[0];
  const attempt = data.attempts[task.id] || newAttempt();
  useEffect(() => {
    try {
      setData(
        restoreWorkshop(localStorage.getItem(WORKSHOP_KEY), workshopTasks),
      );
    } catch {
      setNotice(
        "Die gespeicherte Werkstatt-Sitzung ist nicht lesbar. Du kannst hier neu üben; dein Kursprofil bleibt erhalten.",
      );
    }
    setReady(true);
  }, []);
  function saveAttempt(attempt) {
    const next = {
      ...data,
      attempts: { ...data.attempts, [task.id]: attempt },
    };
    setData(next);
    try {
      localStorage.setItem(WORKSHOP_KEY, JSON.stringify(next));
      setNotice("");
    } catch {
      setNotice(
        "Der Browser erlaubt das Speichern nicht. Dein Versuch gilt nur für diese Sitzung.",
      );
    }
  }
  function exportWorkshop() {
    const url = URL.createObjectURL(
      new Blob([JSON.stringify(data, null, 2)], { type: "application/json" }),
    );
    const link = document.createElement("a");
    link.href = url;
    link.download = "volt-workshop.json";
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
  }
  async function prepareImport(event) {
    const file = event.target.files?.[0];
    event.target.value = "";
    if (!file) return;
    try {
      if (file.size > WORKSHOP_LIMIT)
        throw new Error("Die Datei darf höchstens 1 MB groß sein.");
      setPendingImport(restoreWorkshop(await file.text(), workshopTasks));
      setNotice("");
    } catch {
      setPendingImport(null);
      setNotice(
        "Die Werkstatt-Datei ist ungültig oder zu groß. Deine bisherigen Versuche bleiben erhalten.",
      );
    }
  }
  function confirmImport() {
    setData(pendingImport);
    setPendingImport(null);
    setEpoch((value) => value + 1);
    try {
      localStorage.setItem(WORKSHOP_KEY, JSON.stringify(pendingImport));
      setNotice(
        "Werkstatt-Sicherung übernommen. Dein Kursprofil wurde nicht verändert.",
      );
    } catch {
      setNotice(
        "Die Sicherung gilt für diese Sitzung. Der Browser erlaubt kein Speichern.",
      );
    }
  }
  const independent = workshopTasks.filter(
    (task) => taskStatus(task, data.attempts[task.id]) === "independent",
  ).length;
  const assisted = workshopTasks.filter(
    (task) => taskStatus(task, data.attempts[task.id]) === "assisted",
  ).length;
  const nextTask = workshopTasks.find(
    (other) => other.family === task.family && other.id !== task.id,
  );
  const filtered = workshopFamilies.filter((family) =>
    `${family.title} ${family.sheet}`
      .toLocaleLowerCase("de")
      .includes(search.toLocaleLowerCase("de")),
  );
  return (
    <div className="workshop-page">
      <header className="workshop-heading">
        <h1>Aufgabenwerkstatt</h1>
        <details className="workshop-settings">
          <summary>Übungsstand und Sicherung</summary>
          <div className="workshop-stats">
            <span>
              <strong>{independent}</strong> ohne Hilfe gelöst
            </span>
            <span>
              <strong>{assisted}</strong> mit Hilfe geübt
            </span>
            <span>
              <strong>{workshopTasks.length}</strong> Aufgaben
            </span>
          </div>
          <p className="workshop-profile-note">
            Versuche werden separat in diesem Browser gespeichert; Kurs-XP
            bleiben unverändert. Freie Texte und Zeichnungen prüfst du selbst.
          </p>
          <div className="workshop-backup">
            <button
              type="button"
              className="button button-outline"
              onClick={exportWorkshop}
              disabled={!ready}
            >
              Werkstatt sichern
            </button>
            <button
              type="button"
              className="button button-outline"
              onClick={() => importInput.current?.click()}
            >
              Werkstatt-Sicherung laden
            </button>
            <input
              ref={importInput}
              type="file"
              accept="application/json,.json"
              hidden
              aria-label="Werkstatt-Sicherungsdatei"
              onChange={prepareImport}
            />
          </div>
        </details>
        {pendingImport && (
          <section
            className="workshop-import"
            aria-label="Werkstatt-Sicherung bestätigen"
          >
            <p>
              {Object.keys(pendingImport.attempts).length} Aufgabenversuche
              wurden gelesen. Übernehmen ersetzt deine derzeitigen
              Werkstattversuche. Kursprofil und XP bleiben erhalten.
            </p>
            <div className="button-row">
              <button
                type="button"
                className="button button-dark"
                onClick={confirmImport}
              >
                Werkstatt ersetzen
              </button>
              <button
                type="button"
                className="button button-outline"
                onClick={() => setPendingImport(null)}
              >
                Abbrechen
              </button>
            </div>
          </section>
        )}
      </header>
      {notice && (
        <p className="reader-notice" role="status">
          {notice}
        </p>
      )}
      <div className="workshop-layout">
        <label className="workshop-mobile-select">
          Aufgabenfamilie wählen
          <select
            value={task.family}
            onChange={(event) => {
              location.hash = `#/workshop/${event.target.value}-1`;
            }}
          >
            {workshopFamilies.map((family) => (
              <option key={family.id} value={family.id}>
                {family.title} · {family.sheet}
              </option>
            ))}
          </select>
        </label>
        <aside className="workshop-nav">
          <label>
            Aufgabenfamilie suchen
            <input
              type="search"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="z. B. Energie oder 3.7"
            />
          </label>
          <nav aria-label="Aufgabenfamilien">
            {filtered.map((family) => (
              <a
                key={family.id}
                href={`#/workshop/${family.id}-1`}
                aria-current={family.id === task.family ? "page" : undefined}
              >
                <span>{family.title}</span>
                <small>Blatt {family.sheet}</small>
              </a>
            ))}
          </nav>
          {!filtered.length && <p>Keine passende Aufgabenfamilie gefunden.</p>}
        </aside>
        <div className="workshop-content">
          <div
            className="workshop-task-switch"
            role="group"
            aria-label="Aufgabe wählen"
          >
            {workshopTasks
              .filter((other) => other.family === task.family)
              .map((other, index) => (
                <a
                  key={other.id}
                  href={`#/workshop/${other.id}`}
                  aria-current={task.id === other.id ? "page" : undefined}
                >
                  Aufgabe {index + 1}
                  <span>
                    {taskStatus(other, data.attempts[other.id]) ===
                    "independent"
                      ? "Ohne Hilfe gelöst"
                      : taskStatus(other, data.attempts[other.id]) ===
                          "assisted"
                        ? "Mit Hilfe geübt"
                        : "Zum Üben"}
                  </span>
                </a>
              ))}
          </div>
          {ready ? (
            <Task
              key={`${task.id}-${epoch}`}
              task={task}
              attempt={attempt}
              saveAttempt={saveAttempt}
              nextTask={nextTask}
            />
          ) : (
            <p role="status">Dein Aufgabenversuch wird geladen …</p>
          )}
        </div>
      </div>
    </div>
  );
}
