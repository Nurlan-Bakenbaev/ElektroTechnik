"use client";

import { useId, useState } from "react";
import { CheckCircle2, Lightbulb, RefreshCcw } from "lucide-react";
import { unitDefinitions } from "../../data/units.js";
import {
  gradeAnswer,
  numericFeedback,
  parseQuantity,
} from "../../lib/answers.js";

export default function KnowledgeCheck({
  question,
  attempts = [],
  hintUsed,
  onAttempt,
  onHint,
}) {
  const id = useId();
  const [value, setValue] = useState(
    () =>
      attempts.at(-1)?.value ??
      (question.type === "matching"
        ? question.labels.map(() => -1)
        : question.type === "multiple"
          ? []
          : ""),
  );
  const [error, setError] = useState("");
  const [showSolution, setShowSolution] = useState(false);
  const passed = attempts.some((a) => gradeAnswer(question, a.value));
  const last = attempts.at(-1);
  function submit(event) {
    event.preventDefault();
    if (passed) return;
    const numeric =
      question.type === "numeric" ? parseQuantity(value, question.unit) : null;
    if (numeric && !numeric.valid) {
      setError(numeric.error);
      return;
    }
    if (
      value === "" ||
      (Array.isArray(value) && (!value.length || value.some((v) => v < 0)))
    ) {
      setError("Bitte beantworte zuerst die Aufgabe vollständig.");
      return;
    }
    setError("");
    onAttempt(value);
  }
  return (
    <form
      className={`ohm-check ${passed ? "is-passed" : ""}`}
      onSubmit={submit}
    >
      <fieldset
        disabled={passed}
        aria-describedby={error ? `${id}-error` : undefined}
      >
        <legend>{question.prompt}</legend>
        {question.type === "numeric" ? (
          <div className="ohm-answer-input">
            <label htmlFor={id}>
              Dein Ergebnis in {question.unit}
              {unitDefinitions[question.unit]
                ? ` (${unitDefinitions[question.unit].name})`
                : ""}
            </label>
            <input
              id={id}
              type="text"
              inputMode="decimal"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder={`Zahl oder Zahl mit Einheit (${question.unit})`}
              autoComplete="off"
            />
            <span>
              Komma oder Punkt; passende Einheiten werden umgerechnet.
            </span>
          </div>
        ) : question.type === "matching" ? (
          <div className="ohm-matching">
            {question.labels.map((label, index) => (
              <label key={label} htmlFor={`${id}-${index}`}>
                {label}
                <select
                  id={`${id}-${index}`}
                  value={value[index]}
                  onChange={(e) =>
                    setValue(
                      value.map((v, i) =>
                        i === index ? Number(e.target.value) : v,
                      ),
                    )
                  }
                >
                  <option value={-1}>Einheit wählen</option>
                  {question.options.map((option, n) => (
                    <option value={n} key={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>
        ) : (
          <div className="ohm-answer-options">
            {question.options.map((option, index) => (
              <label key={option}>
                <input
                  type={question.type === "multiple" ? "checkbox" : "radio"}
                  name={id}
                  value={index}
                  checked={
                    question.type === "multiple"
                      ? value.includes(index)
                      : value === index
                  }
                  onChange={() =>
                    setValue(
                      question.type === "multiple"
                        ? value.includes(index)
                          ? value.filter((v) => v !== index)
                          : [...value, index]
                        : index,
                    )
                  }
                />
                <span>{option}</span>
              </label>
            ))}
          </div>
        )}
      </fieldset>
      {error && (
        <p id={`${id}-error`} className="ohm-input-error" role="alert">
          {error}
        </p>
      )}
      {last && (
        <div
          className={`ohm-feedback ${passed ? "correct" : "retry"}`}
          role="status"
        >
          <strong>
            {passed ? (
              <>
                <CheckCircle2 size={16} /> Verstanden
              </>
            ) : (
              <>
                <RefreshCcw size={16} /> Noch einmal überlegen
              </>
            )}
          </strong>
          <p>
            {passed
              ? question.success
              : question.type === "numeric"
                ? numericFeedback(question, last.value)
                : question.hint}
          </p>
        </div>
      )}
      {!passed && (
        <div className="ohm-check-actions">
          <button className="ohm-primary" type="submit">
            {attempts.length ? "Erneut prüfen" : "Antwort prüfen"}
          </button>
          <button type="button" className="ohm-hint-button" onClick={onHint}>
            <Lightbulb size={15} /> Hinweis
          </button>
        </div>
      )}
      {hintUsed && !passed && <p className="ohm-hint">{question.hint}</p>}
      {!passed && attempts.length >= 2 && (
        <>
          <button
            className="ohm-hint-button"
            type="button"
            onClick={() => setShowSolution(!showSolution)}
          >
            {showSolution ? "Lösungsweg ausblenden" : "Lösungsweg ansehen"}
          </button>
          {showSolution && (
            <p className="ohm-hint">
              {question.success} Löse die Aufgabe anschließend selbst.
            </p>
          )}
        </>
      )}
    </form>
  );
}
