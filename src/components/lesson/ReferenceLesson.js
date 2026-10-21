"use client";

import { useEffect, useReducer, useRef, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  Bookmark,
  Check,
  ChevronRight,
  FlaskConical,
  LockKeyhole,
  BookOpen,
  ShieldCheck,
  Lightbulb,
} from "lucide-react";
import dynamic from "next/dynamic";
import { ohmLesson, ohmQuestion } from "../../data/ohm-lesson.js";
import {
  createLessonSession,
  lessonReducer,
  normalizeLessonSession,
  SESSION_KEY,
  stepSatisfied,
} from "../../lib/lesson-engine.js";
import { gradeAnswer } from "../../lib/answers.js";
import OhmWorkbench from "./OhmWorkbench";
import KnowledgeCheck from "./KnowledgeCheck";
import FormulaImage from "../FormulaImage";
import Quiz from "../Quiz";
import Notation from "../Notation";
import { lessonBasics } from "../../data/lesson-basics.js";
import QuantityLegend, { UnitText } from "../QuantityLegend";
import LessonVideo from "../LessonVideo";
import "./reference-lesson.css";

const InteractiveLab = dynamic(() => import("../InteractiveLab"), {
  loading: () => <p>Labor wird geladen …</p>,
});
const FORMULA = "U = I · R;  I = U / R;  R = U / I";
const concepts = {
  U: {
    label: "Spannung",
    unit: "Volt (V)",
    text: "Spannung ist Energie pro Ladung zwischen zwei Punkten. Hier stellt die Quelle sie bereit. Das Voltmeter misst parallel zum Widerstand.",
  },
  I: {
    label: "Stromstärke",
    unit: "Ampere (A)",
    text: "Stromstärke ist Ladung pro Zeit durch einen Querschnitt. Du misst sie mit dem Amperemeter in Reihe. Ladung wird nicht verbraucht.",
  },
  R: {
    label: "Widerstand",
    unit: "Ohm (Ω)",
    text: "R beschreibt in diesem Modell, wie stark der Ladungsfluss bei gegebener Spannung begrenzt wird. Es bleibt bei konstanter Temperatur gleich.",
  },
};

export default function ReferenceLesson({
  lesson,
  profile,
  bookmark,
  onComplete,
}) {
  const [state, dispatch] = useReducer(
    lessonReducer,
    undefined,
    createLessonSession,
  );
  const [ready, setReady] = useState(false);
  const [warning, setWarning] = useState("");
  const [saved, setSaved] = useState(false);
  const [tab, setTab] = useState("lesson");
  const [symbol, setSymbol] = useState("I");
  const [navigationError, setNavigationError] = useState("");
  const heading = useRef(null);
  const reduced = useReducedMotion();
  const step = ohmLesson.steps[state.step];

  useEffect(() => {
    try {
      const raw = localStorage.getItem(SESSION_KEY);
      if (raw?.length > 100000)
        throw new Error("Lernsitzung überschreitet das Speicherformat.");
      if (raw)
        dispatch({
          type: "hydrate",
          state: normalizeLessonSession(JSON.parse(raw)),
        });
    } catch {
      setWarning(
        "Die gespeicherte Lernsitzung konnte nicht geladen werden. Du kannst hier neu beginnen; deine bisherigen Testergebnisse bleiben erhalten.",
      );
    }
    setReady(true);
  }, []);
  useEffect(() => {
    if (!ready) return;
    try {
      localStorage.setItem(SESSION_KEY, JSON.stringify(state));
      setSaved(true);
    } catch {
      setSaved(false);
      setWarning(
        "Der Browser blockiert das Speichern. Du kannst weiterlernen; diese Lernsitzung bleibt nur bis zum Schließen der Seite erhalten.",
      );
    }
  }, [ready, state]);

  function passed(id) {
    return state.attempts[id]?.some((a) =>
      gradeAnswer(ohmQuestion(id), a.value),
    );
  }
  function check(id) {
    return (
      <KnowledgeCheck
        key={id}
        question={ohmQuestion(id)}
        attempts={state.attempts[id]}
        hintUsed={state.hints.includes(id)}
        onHint={() => dispatch({ type: "hint", id })}
        onAttempt={(value) => dispatch({ type: "attempt", id, value })}
      />
    );
  }
  function next() {
    if (!stepSatisfied(state)) {
      setNavigationError(
        "Schließe zuerst die markierte Aktivität ab. Hinweise und Wiederholungen sind jederzeit möglich.",
      );
      return;
    }
    setNavigationError("");
    dispatch({ type: "next" });
    if (state.step === ohmLesson.steps.length - 1) setTab("quiz");
    else requestAnimationFrame(() => heading.current?.focus());
  }
  const measurementCount = new Set(
    state.observations
      .filter((r) => r.voltage === 12 && r.closed)
      .map((r) => r.resistance),
  ).size;
  const completedCount = state.completed.length;
  const concept = concepts[symbol];

  return (
    <div className="reference-lesson">
      <div className="ohm-course-bar">
        <a href="#/curriculum">
          <ArrowLeft size={15} /> Lernpfad
        </a>
        <span>GRUNDLAGEN / MODUL 05</span>
        <button
          onClick={() => bookmark(lesson.id)}
          aria-pressed={profile.bookmarks.includes(lesson.id)}
        >
          <Bookmark
            size={16}
            fill={
              profile.bookmarks.includes(lesson.id) ? "currentColor" : "none"
            }
          />{" "}
          {profile.bookmarks.includes(lesson.id) ? "Gespeichert" : "Speichern"}
        </button>
      </div>
      <header className="ohm-lesson-header">
        <div>
          <p className="ohm-eyebrow">
            <FlaskConical size={15} /> VOLT. LERNLABOR
          </p>
          <h1>{ohmLesson.title}</h1>
          <p>
            Das Ohmsche Gesetz: vorhersagen, messen, verstehen und selbst
            berechnen.
          </p>
        </div>
        <div className="ohm-session-meta">
          <span className="ohm-simulation-pill">SIMULATION · DC</span>
          <span>
            {saved ? "Auf diesem Gerät gespeichert" : "Lokale Lernsitzung"}
          </span>
        </div>
      </header>
      {warning && (
        <p className="ohm-storage-warning" role="alert">
          {warning}
        </p>
      )}
      <section
        className="ohm-it-context"
        aria-label="Grundlagen des Ohmschen Gesetzes"
      >
        <span className="brief-context">
          GRUNDLAGEN · {lessonBasics.ohm.context}
        </span>
        <p>
          <UnitText>{lessonBasics.ohm.answer}</UnitText>
        </p>
        <QuantityLegend items={lessonBasics.ohm.units} compact />
      </section>
      <LessonVideo key={lesson.id} lessonId={lesson.id} />
      <div
        className="ohm-view-tabs"
        role="tablist"
        aria-label="Unterrichtsmaterialien"
        onKeyDown={(event) => {
          const tabs = ["lesson", "lab", "quiz", "reference"];
          const index = tabs.indexOf(tab);
          const target =
            event.key === "ArrowRight"
              ? (index + 1) % tabs.length
              : event.key === "ArrowLeft"
                ? (index + tabs.length - 1) % tabs.length
                : event.key === "Home"
                  ? 0
                  : event.key === "End"
                    ? tabs.length - 1
                    : -1;
          if (target >= 0) {
            event.preventDefault();
            setTab(tabs[target]);
            document.getElementById(`ohm-tab-${tabs[target]}`)?.focus();
          }
        }}
      >
        {[
          ["lesson", "Lernlabor"],
          ["lab", "Interaktiv"],
          ["quiz", "Wissenstest"],
          ["reference", "Nachschlagen"],
        ].map(([id, label]) => (
          <button
            key={id}
            id={`ohm-tab-${id}`}
            role="tab"
            aria-selected={tab === id}
            aria-controls="ohm-tab-panel"
            tabIndex={tab === id ? 0 : -1}
            onClick={() => setTab(id)}
          >
            {label}
            {id === "quiz" && profile.results.ohm?.score >= 4 && (
              <Check size={14} />
            )}
          </button>
        ))}
      </div>
      <div
        id="ohm-tab-panel"
        role="tabpanel"
        aria-labelledby={`ohm-tab-${tab}`}
      >
        {tab === "lesson" && (
          <>
            <div className="ohm-learning-layout">
              <aside className="ohm-step-sidebar" aria-label="Lernweg">
                <div className="ohm-step-progress">
                  <span>DEIN LERNWEG</span>
                  <strong>
                    {completedCount} / {ohmLesson.steps.length}
                  </strong>
                  <progress
                    value={completedCount}
                    max={ohmLesson.steps.length}
                    aria-label="Abgeschlossene Lernschritte"
                  />
                </div>
                <nav aria-label="Lernschritte">
                  {ohmLesson.steps.map((item, index) => (
                    <button
                      key={item.id}
                      disabled={index > completedCount}
                      aria-current={state.step === index ? "step" : undefined}
                      onClick={() => {
                        dispatch({ type: "visit", step: index });
                        setNavigationError("");
                      }}
                    >
                      <span
                        className={
                          state.completed.includes(index) ? "done" : ""
                        }
                      >
                        {state.completed.includes(index) ? (
                          <Check size={13} />
                        ) : (
                          String(index + 1).padStart(2, "0")
                        )}
                      </span>
                      <span>{item.title}</span>
                      {index > completedCount && <LockKeyhole size={12} />}
                    </button>
                  ))}
                </nav>
                <p>
                  <ShieldCheck size={14} /> Virtuell experimentieren. Beobachten
                  statt auswendig lernen.
                </p>
              </aside>
              <OhmWorkbench state={state} dispatch={dispatch} />
              <aside className="ohm-guidance" aria-label="Lernbegleitung">
                <div className="ohm-guidance-label">
                  SCHRITT {String(state.step + 1).padStart(2, "0")} /{" "}
                  {ohmLesson.steps.length}
                  <span>{ready ? "AKTIV" : "LÄDT"}</span>
                </div>
                <motion.div
                  key={step.id}
                  initial={reduced ? false : { opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: reduced ? 0 : 0.2 }}
                >
                  <h2 tabIndex={-1} ref={heading}>
                    {step.title}
                  </h2>
                  <p className="ohm-step-description">{step.text}</p>
                  {step.id === "intro" && (
                    <>
                      <h3>Nach diesem Labor kannst du …</h3>
                      <ul className="ohm-objectives">
                        {ohmLesson.objectives.map((objective) => (
                          <li key={objective}>
                            <Check size={15} />
                            <span>{objective}</span>
                          </li>
                        ))}
                      </ul>
                      <details className="ohm-prior-details">
                        <summary>Das brauchst du vorher</summary>
                        <ul>
                          {ohmLesson.prerequisites.map((p) => (
                            <li key={p}>{p}</li>
                          ))}
                        </ul>
                        <a href="#/essentials">
                          Grundbegriffe kurz wiederholen{" "}
                          <ChevronRight size={14} />
                        </a>
                      </details>
                    </>
                  )}
                  {step.id === "prior" && (
                    <>
                      {check("prior")}
                      <details className="ohm-prior-details">
                        <summary>Spannung und Strom kurz erklärt</summary>
                        <p>
                          Spannung U: Energie je Ladung, gemessen zwischen zwei
                          Punkten. Stromstärke I: Ladung je Zeit durch einen
                          Leiterquerschnitt. Das sind verschiedene Größen mit
                          verschiedenen Messgeräten.
                        </p>
                      </details>
                    </>
                  )}
                  {step.id === "observe" && (
                    <div className="ohm-task">
                      <Lightbulb size={18} />
                      <p>
                        Öffne den Schalter links. Der Strom fällt auf 0 A. Die
                        Quellenspannung bleibt bestehen. Schließe den Kreis
                        anschließend wieder.
                      </p>
                      <strong>
                        {state.experiment.closed
                          ? "Kreis geschlossen · Messung möglich"
                          : "Kreis offen · kein dauerhafter Strom"}
                      </strong>
                    </div>
                  )}
                  {step.id === "predict" && check("prediction")}
                  {step.id === "experiment" && (
                    <>
                      <div className="ohm-task">
                        <strong>Dein Messauftrag</strong>
                        <ol>
                          <li>Stelle 12 V ein.</li>
                          <li>Miss bei 6 Ω, 12 Ω und 24 Ω.</li>
                          <li>Übernimm jeden Wert in die Tabelle.</li>
                        </ol>
                        <span className="ohm-measurement-count">
                          {measurementCount} von mindestens 3 verschiedenen
                          Messpunkten bei 12 V
                        </span>
                      </div>
                      {state.attempts.prediction?.length > 0 && (
                        <p className="ohm-hint">
                          Vergleiche die Messwerte mit deiner Vorhersage: Bei
                          verdoppeltem R ist I halb so groß.
                        </p>
                      )}
                    </>
                  )}
                  {step.id === "explain" && (
                    <>
                      <div className="ohm-task">
                        <strong>Das entscheidende Muster</strong>
                        <p>
                          Gleiche Spannung, doppelter Widerstand: halber Strom.
                          Gleicher Widerstand, doppelte Spannung: doppelter
                          Strom.
                        </p>
                      </div>
                      <p>
                        Die Quelle „erzeugt“ keine neuen Elektronen im Draht.
                        Ein elektrisches Feld wirkt auf die schon vorhandenen
                        beweglichen Ladungsträger. Die technische Stromrichtung
                        ist im äußeren Kreis von Plus nach Minus; Elektronen
                        bewegen sich im Metall im Mittel entgegengesetzt.
                      </p>
                    </>
                  )}
                  {step.id === "formula" && (
                    <div className="ohm-formula-explorer">
                      <FormulaImage expression={FORMULA} />
                      <div
                        className="ohm-symbol-buttons"
                        aria-label="Formelgrößen"
                      >
                        {Object.keys(concepts).map((s) => (
                          <button
                            key={s}
                            aria-pressed={symbol === s}
                            onClick={() => setSymbol(s)}
                          >
                            {s}
                          </button>
                        ))}
                      </div>
                      <div className="ohm-concept" aria-live="polite">
                        <strong>
                          {symbol} · {concept.label}
                        </strong>
                        <span>{concept.unit}</span>
                        <p>{concept.text}</p>
                      </div>
                    </div>
                  )}
                  {step.id === "guided" && (
                    <>
                      {check("guided-target")}
                      {passed("guided-target") && (
                        <>
                          <FormulaImage expression={FORMULA} />
                          {check("guided-method")}
                        </>
                      )}
                      {passed("guided-method") && check("guided-result")}
                    </>
                  )}
                  {step.id === "practice" &&
                    [
                      "practice-current",
                      "practice-voltage",
                      "practice-resistance",
                    ].map(check)}
                  {step.id === "check" &&
                    ["meter", "symbols", "limits", "interpret", "error"].map(
                      check,
                    )}
                  {step.id === "reflect" && (
                    <>
                      <label
                        className="ohm-reflection-label"
                        htmlFor="ohm-reflection"
                      >
                        Deine Erklärung
                      </label>
                      <textarea
                        id="ohm-reflection"
                        rows={5}
                        maxLength={2000}
                        value={state.reflection}
                        onChange={(event) =>
                          dispatch({
                            type: "reflection",
                            value: event.target.value,
                          })
                        }
                        placeholder="Bei gleicher Spannung wird der Strom kleiner, weil …"
                      />
                      <small>
                        {state.reflection.length} / 2000 Zeichen · mindestens 20
                        Zeichen zum Festhalten
                      </small>
                      <p className="ohm-hint">
                        Die Notiz wird gespeichert. Ihr Inhalt wird nicht
                        automatisch fachlich bewertet.
                      </p>
                      <h3>Drei Dinge bleiben</h3>
                      <ul>
                        <li>
                          U treibt an, R begrenzt, I ist der Ladungsfluss.
                        </li>
                        <li>Prüfe zuerst, was gegeben und gesucht ist.</li>
                        <li>
                          Rechne mit Einheiten und prüfe die Größenordnung.
                        </li>
                      </ul>
                    </>
                  )}
                  {step.id === "transfer" && (
                    <>
                      <div className="ohm-task">
                        <strong>12 V Quelle · 20 mA Zielstrom</strong>
                        <p>
                          Ein berechneter Widerstand muss zusätzlich die
                          entstehende Wärme vertragen. Bei realen Bauteilen
                          prüfst du Toleranz und zulässige Leistung im
                          Datenblatt.
                        </p>
                      </div>
                      <h3>Dein nächster Schritt</h3>
                      <p>
                        Der Wissenstest enthält 5 Fragen. Ab 4 richtigen
                        Antworten wird das Thema im Kurs als bestanden
                        gespeichert. Die Übungsaufgaben hier vergeben keine
                        zusätzlichen XP.
                      </p>
                      <a className="ohm-source-link" href="#/lesson/power">
                        Leistung und Erwärmung vertiefen{" "}
                        <ArrowRight size={14} />
                      </a>
                    </>
                  )}
                </motion.div>
                <div className="ohm-step-actions">
                  {state.step > 0 && (
                    <button
                      className="ohm-back"
                      onClick={() => {
                        dispatch({ type: "visit", step: state.step - 1 });
                        setNavigationError("");
                      }}
                    >
                      <ArrowLeft size={16} /> Zurück
                    </button>
                  )}
                  <button className="ohm-primary" onClick={next}>
                    {state.step === 11 ? "Zum Wissenstest" : "Weiter"}
                    <ArrowRight size={16} />
                  </button>
                </div>
                {navigationError && (
                  <p className="ohm-input-error" role="alert">
                    {navigationError}
                  </p>
                )}
              </aside>
            </div>
            <details className="ohm-model-notes">
              <summary>
                <ShieldCheck size={16} /> Modellgrenzen und Quellen
              </summary>
              <p>
                {ohmLesson.assumptions} Die Leistungsanzeige ist eine
                Modellrechnung; die Widerstände werden in der Simulation nicht
                thermisch überlastet.
              </p>
              <p>
                Dies ist eine virtuelle Lernumgebung. Die dargestellten Ströme
                sind keine Anleitung für einen realen Versuchsaufbau.
              </p>
              <ul>
                {ohmLesson.sources.map((source) => (
                  <li key={source.url}>
                    <a
                      href={source.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {source.label}
                    </a>
                  </li>
                ))}
              </ul>
            </details>
          </>
        )}
        {tab === "lab" && (
          <>
            <InteractiveLab lessonId="ohm" />
            <button
              className="ohm-primary ohm-free-next"
              onClick={() => setTab("lesson")}
            >
              Zurück zum begleiteten Experiment <ArrowRight size={16} />
            </button>
          </>
        )}
        {tab === "quiz" && (
          <Quiz
            questions={lesson.quiz}
            quizId={lesson.id}
            previousScore={profile.results.ohm?.score}
            onComplete={onComplete}
            onNext={(passedQuiz) =>
              passedQuiz
                ? (window.location.hash = "/lesson/energy")
                : setTab("lesson")
            }
          />
        )}
        {tab === "reference" && (
          <article className="ohm-reference">
            <h2>
              <BookOpen size={22} /> Nachschlagen und vertiefen
            </h2>
            <p>
              Die ausführlichen Erklärungen ergänzen dein Experiment. Klappe nur
              auf, was du gerade brauchst.
            </p>
            {lesson.sections.map((section) => (
              <details key={section.id}>
                <summary>{section.title}</summary>
                <p>
                  <UnitText>{lessonBasics.ohm.sections[section.id]}</UnitText>
                </p>
                <details className="lesson-depth">
                  <summary>Ausführliche Erklärung</summary>
                  {section.paragraphs.map((p) => (
                    <p key={p}>
                      <UnitText>{p}</UnitText>
                    </p>
                  ))}
                </details>
                {section.formula && (
                  <>
                    <FormulaImage expression={section.formula.expression} />
                    <p>{section.formula.legend}</p>
                  </>
                )}
                {section.example && (
                  <>
                    <h3>{section.example.title}</h3>
                    <p>{section.example.given}</p>
                    <ol>
                      {section.example.steps.map((line) => (
                        <li key={line}>{line}</li>
                      ))}
                    </ol>
                    <strong>{section.example.answer}</strong>
                  </>
                )}
              </details>
            ))}
            <h3>Größen und Einheiten</h3>
            <dl>
              {lesson.terms.map((term) => (
                <div key={term.term}>
                  <dt>
                    {term.term} · <Notation>{term.symbol}</Notation>
                  </dt>
                  <dd>{term.definition}</dd>
                </div>
              ))}
            </dl>
          </article>
        )}
      </div>
      <div className="ohm-training-note">
        <ShieldCheck size={15} /> Lokaler Trainingsfortschritt · keine amtliche
        Qualifikationsbescheinigung
      </div>
    </div>
  );
}
