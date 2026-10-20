"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import { AnimatedProgress } from "./LearningMotion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  CircleHelp,
  RotateCcw,
  Trophy,
  X,
  Clock3,
} from "lucide-react";

function evaluate(question, value) {
  if (question.type === "choice") return value === question.answer;
  const number = Number(String(value).trim().replace(",", "."));
  return (
    String(value).trim() !== "" &&
    Number.isFinite(number) &&
    Math.abs(number - question.answer) <= (question.tolerance ?? 0.001)
  );
}
const correctText = (q) =>
  q.type === "choice"
    ? q.options[q.answer]
    : `${q.answer.toLocaleString("de-DE", { maximumFractionDigits: 8 })} ${q.unit || ""}`;

export default function Quiz({
  questions,
  quizId,
  isExam = false,
  onComplete,
  previousScore,
  onNext,
}) {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState("");
  const [storageWarning, setStorageWarning] = useState(false);
  const key = `volt-academy:attempt:${quizId}`;
  const threshold = isExam ? 28 : 4;
  const score = answers.filter((a, i) =>
    evaluate(questions[i], a.value),
  ).length;
  const question = questions[index];
  const checked = !!answers[index];

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || "null");
      if (
        saved &&
        saved.version === 1 &&
        Array.isArray(saved.answers) &&
        saved.answers.length <= questions.length &&
        saved.answers.every(
          (a, i) =>
            a &&
            (questions[i].type === "choice"
              ? Number.isInteger(a.value) &&
                a.value >= 0 &&
                a.value < questions[i].options.length
              : typeof a.value === "string" &&
                a.value.trim() !== "" &&
                Number.isFinite(Number(a.value.replace(",", ".")))),
        )
      ) {
        setAnswers(saved.answers);
        setIndex(Math.min(saved.answers.length, questions.length - 1));
      }
    } catch {
      setStorageWarning(true);
    }
  }, [key, questions]);

  const saveAttempt = (next) => {
    try {
      localStorage.setItem(key, JSON.stringify({ version: 1, answers: next }));
    } catch {
      setStorageWarning(true);
    }
  };
  function submit(event) {
    event.preventDefault();
    if (checked) return;
    if (
      value === "" ||
      (question.type === "numeric" &&
        (!value.trim() ||
          !Number.isFinite(Number(value.trim().replace(",", ".")))))
    ) {
      setError(
        question.type === "numeric"
          ? "Geben Sie eine Zahl ein. Dezimalbrüche können durch Kommas getrennt geschrieben werden."
          : "Wählen Sie eine Antwort.",
      );
      return;
    }
    const next = [...answers, { value }];
    setAnswers(next);
    saveAttempt(next);
    setError("");
  }
  function advance() {
    if (index === questions.length - 1) {
      onComplete(score);
      setFinished(true);
      try {
        localStorage.removeItem(key);
      } catch {
        setStorageWarning(true);
      }
    } else {
      setIndex((i) => i + 1);
      setValue("");
      setError("");
    }
  }
  function restart() {
    setAnswers([]);
    setIndex(0);
    setValue("");
    setFinished(false);
    setStarted(true);
    setError("");
    try {
      localStorage.removeItem(key);
    } catch {
      setStorageWarning(true);
    }
  }

  if (finished)
    return (
      <section className="quiz-result" aria-live="polite">
        <span
          className={`result-icon ${score >= threshold ? "success" : "retry"}`}
        >
          {score >= threshold ? <Trophy size={30} /> : <RotateCcw size={30} />}
        </span>
        <span className="eyebrow">
          {isExam
            ? "LETZTE ARBEITEN ABGESCHLOSSEN"
            : "WISSENSPRÜFUNG ABGESCHLOSSEN"}
        </span>
        <h2>
          {score >= threshold
            ? isExam
              ? "Du bist den ganzen Weg gekommen!"
              : "Ein weiteres Thema behandelt."
            : "Schöner Versuch. Sollen wir unser Wissen festigen?"}
        </h2>
        <p>
          {score >= threshold
            ? "Das Ergebnis wird in Ihrem Profil gespeichert. Nachfolgend finden Sie eine Analyse jeder Antwort."
            : `Um sich zu qualifizieren, benötigen Sie ${threshold} von ${questions.length}. Schauen Sie sich die Lösungen an und versuchen Sie es erneut – die Anzahl der Versuche ist unbegrenzt.`}
        </p>
        <div className="result-score">
          <strong>
            {score}
            <span> / {questions.length}</span>
          </strong>
          <div>
            {Math.round((score / questions.length) * 100)}% richtige Antworten
            <br />
            <span>
              {score >= threshold ? "Bestanden" : "Noch nicht akzeptiert"}
            </span>
          </div>
        </div>
        <div className="button-row">
          <button
            className="button button-dark"
            onClick={() => onNext(score >= threshold)}
          >
            {isExam
              ? "Zurück zum Kurs"
              : score >= threshold
                ? "Weiter trainieren"
                : "Wiederholen Sie die Theorie"}
            <ArrowRight size={16} />
          </button>
          <button className="button button-outline" onClick={restart}>
            <RotateCcw size={15} />
            Gehen Sie noch einmal durch
          </button>
        </div>
        <div className="review-list">
          <h3>Analyse der Antworten</h3>
          {questions.map((q, i) => (
            <details
              key={q.id}
              className={
                evaluate(q, answers[i]?.value)
                  ? "review-correct"
                  : "review-wrong"
              }
            >
              <summary>
                <span className="review-status">
                  {evaluate(q, answers[i]?.value) ? (
                    <Check size={16} />
                  ) : (
                    <X size={16} />
                  )}
                </span>
                <span>
                  {i + 1}. {q.question}
                </span>
              </summary>
              <div className="review-body">
                <p>
                  <strong>Ihre Antwort:</strong>{" "}
                  {q.type === "choice"
                    ? q.options[answers[i]?.value]
                    : `${answers[i]?.value ?? "—"} ${q.unit || ""}`}
                </p>
                <p>
                  <strong>Richtige Antwort:</strong> {correctText(q)}
                </p>
                <p>{q.explanation}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    );

  if (!started)
    return (
      <section className="quiz-intro">
        <div className="quiz-intro-icon">
          {isExam ? (
            <GraduationIcon />
          ) : (
            <CircleHelp size={30} strokeWidth={1.5} />
          )}
        </div>
        <span className="eyebrow">
          {isExam ? "LETZTER SCHRITT" : "LASST ES UNS IN DIE PRAXIS UMSETZEN"}
        </span>
        <h2>
          {isExam
            ? "Alles, was Sie jetzt wissen."
            : "Schauen wir mal, was noch in deinem Kopf ist?"}
        </h2>
        <p>
          {isExam
            ? "35 Fragen zu allen 13 Themen: von einfachen Konzepten bis hin zu Rechenproblemen. Denken Sie in Ihrem eigenen Tempo und verwenden Sie einen Entwurf."
            : "Fünf Fragen zu diesem Thema. Es wird Definitionen, Berechnungen und kleine Aufgaben geben – alles, was wir gerade behandelt haben."}
        </p>
        <div className="quiz-facts">
          <span>
            <CheckCircle2 size={16} />
            Gutschrift von {threshold} von {questions.length}
          </span>
          <span>
            <Clock3 size={16} />
            Keine zeitliche Begrenzung
          </span>
          <span>
            <RotateCcw size={16} />
            Kann wiederholt werden
          </span>
        </div>
        {previousScore != null && (
          <p className="saved-score">
            Bestes Ergebnis: {previousScore} von {questions.length}
          </p>
        )}
        {storageWarning && (
          <p className="inline-warning" role="status">
            Der Browser hat das lokale Speichern eingeschränkt. Schließen Sie
            die Seite nicht, während Sie es versuchen.
          </p>
        )}
        <button className="button button-dark" onClick={() => setStarted(true)}>
          {answers.length
            ? `Weiter · ${Math.min(answers.length + 1, questions.length)} von ${questions.length}`
            : isExam
              ? "Test starten"
              : "Test starten"}
          <ArrowRight size={17} />
        </button>
      </section>
    );

  return (
    <section className="quiz-active" aria-labelledby="quiz-question">
      <div className="quiz-top">
        <span className="eyebrow">
          FRAGE {index + 1} VON {questions.length}
        </span>
        <span>{score} richtig</span>
      </div>
      <div
        className="quiz-progress"
        aria-label={`${answers.length} von ${questions.length} Antworten`}
      >
        <AnimatedProgress value={(answers.length / questions.length) * 100} />
      </div>
      <motion.h2
        id="quiz-question"
        key={question.id}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {question.question}
      </motion.h2>
      <form onSubmit={submit}>
        {question.type === "choice" ? (
          <fieldset className="answer-options">
            <legend className="sr-only">Antwort auswählen</legend>
            {question.options.map((option, i) => (
              <label
                key={i}
                className={`answer-option ${(checked ? answers[index].value : value) === i ? "selected" : ""} ${checked && question.answer === i ? "correct" : ""} ${checked && answers[index].value === i && question.answer !== i ? "wrong" : ""}`}
              >
                <input
                  type="radio"
                  name={`${quizId}-${index}`}
                  value={i}
                  checked={(checked ? answers[index].value : value) === i}
                  disabled={checked}
                  onChange={() => {
                    setValue(i);
                    setError("");
                  }}
                />
                <span className="answer-letter">{"ABCD"[i]}</span>
                <span>{option}</span>
                {checked && question.answer === i && <Check size={18} />}
              </label>
            ))}
          </fieldset>
        ) : (
          <label className="numeric-answer">
            <span>Ihre Antwort{question.unit ? `, ${question.unit}` : ""}</span>
            <div>
              <input
                aria-describedby="numeric-hint"
                inputMode="decimal"
                autoComplete="off"
                placeholder="Nummer eingeben"
                value={checked ? answers[index].value : value}
                disabled={checked}
                onChange={(e) => {
                  setValue(e.target.value);
                  setError("");
                }}
              />
              <span>{question.unit}</span>
            </div>
            <small id="numeric-hint">
              Der Bruchteil kann durch einen Punkt oder ein Komma getrennt
              werden.
              {question.tolerance
                ? ` Toleranz: ±${question.tolerance} ${question.unit || ""}.`
                : ""}
            </small>
          </label>
        )}
        {error && (
          <p className="field-error" role="alert">
            {error}
          </p>
        )}
        {checked ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={`answer-feedback ${evaluate(question, answers[index].value) ? "feedback-correct" : "feedback-wrong"}`}
            role="status"
          >
            <strong>
              {evaluate(question, answers[index].value)
                ? "Das stimmt!"
                : `Richtige Antwort: ${correctText(question)}`}
            </strong>
            <p>{question.explanation}</p>
          </motion.div>
        ) : null}
        <div className="quiz-bottom">
          <span>
            {isExam ? "Abschlussprüfung" : "Die Praxis macht es klarer."}
          </span>
          {checked ? (
            <button
              type="button"
              className="button button-dark"
              onClick={advance}
            >
              {index === questions.length - 1
                ? "Ergebnis ansehen"
                : "Nächste Frage"}
              <ArrowRight size={17} />
            </button>
          ) : (
            <button className="button button-dark" type="submit">
              Antwort prüfen
              <ArrowRight size={17} />
            </button>
          )}
        </div>
      </form>
      {storageWarning && (
        <p className="inline-warning" role="status">
          Die Antworten dieses Versuchs konnten nicht im Browser gespeichert
          werden.
        </p>
      )}
    </section>
  );
}
function GraduationIcon() {
  return <Trophy size={30} strokeWidth={1.5} />;
}
