import { ArrowRight, Check, BookOpen, FlaskConical } from "lucide-react";
import { lessonBasics } from "../data/lesson-basics.js";
import QuantityLegend, { UnitText } from "./QuantityLegend";
import CurrentPrimer from "./CurrentPrimer";

export default function LessonBrief({ lessonId, onExperiment }) {
  const basics = lessonBasics[lessonId];
  if (!basics) return null;
  return (
    <section
      className="lesson-brief"
      aria-label="Grundlagen und erklärtes Beispiel"
    >
      <div className="brief-context">
        <BookOpen size={16} />
        <span>GRUNDLAGEN · {basics.context}</span>
      </div>
      <h2>
        <UnitText>{basics.question}</UnitText>
      </h2>
      <p className="brief-answer">
        <UnitText>{basics.answer}</UnitText>
      </p>
      {lessonId === "current" && <CurrentPrimer />}
      <div className="brief-basics">
        <span className="brief-label">DAS SOLLTEST DU JETZT VERSTEHEN</span>
        <ul>
          {basics.essentials.map((point) => (
            <li key={point}>
              <Check size={16} />
              <UnitText>{point}</UnitText>
            </li>
          ))}
        </ul>
      </div>
      <QuantityLegend items={basics.units} />
      <article
        className="it-worked-example"
        aria-label="Schrittweise erklärtes Beispiel"
      >
        <header>
          <span>BEISPIEL · SCHRITT FÜR SCHRITT</span>
          <h3>{basics.example.title}</h3>
        </header>
        <p>
          <UnitText>{basics.example.given}</UnitText>
        </p>
        <ol>
          {basics.example.steps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              <p>
                <UnitText>{step}</UnitText>
              </p>
            </li>
          ))}
        </ol>
        <div className="brief-result">
          <Check size={17} />
          <strong>
            <UnitText>{basics.example.result}</UnitText>
          </strong>
        </div>
      </article>
      {onExperiment && (
        <div className="brief-lab-link">
          <FlaskConical size={20} />
          <span>Beobachte den Zusammenhang selbst im virtuellen Labor.</span>
          <button className="button button-dark" onClick={onExperiment}>
            Im Labor untersuchen <ArrowRight size={16} />
          </button>
        </div>
      )}
    </section>
  );
}
