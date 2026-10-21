"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, LockKeyhole, Search } from "lucide-react";
import { lessons } from "../data/course.js";
import { lessonBasics } from "../data/lesson-basics.js";
import LessonVideo from "./LessonVideo";
import QuantityLegend, { UnitText } from "./QuantityLegend";

function CollectionHeading({ title, children, query, onQuery }) {
  return (
    <header className="collection-heading">
      <span className="eyebrow">DEINE LERNSAMMLUNGEN</span>
      <h1>{title}</h1>
      <p>{children}</p>
      <label className="collection-search">
        <Search size={19} />
        <span className="sr-only">Thema suchen</span>
        <input
          type="search"
          value={query}
          onChange={(event) => onQuery(event.target.value)}
          placeholder="Thema suchen …"
        />
      </label>
    </header>
  );
}

function matchingLessons(query) {
  const normalized = query.trim().toLocaleLowerCase("de-DE");
  return lessons.filter((lesson) =>
    `${lesson.title} ${lessonBasics[lesson.id].answer}`
      .toLocaleLowerCase("de-DE")
      .includes(normalized),
  );
}

function NoResults({ count }) {
  return count === 0 ? (
    <p className="collection-empty" role="status">
      Kein Thema gefunden. Versuche einen anderen Suchbegriff.
    </p>
  ) : null;
}

export function VideoCollection() {
  const [query, setQuery] = useState("");
  const visible = matchingLessons(query);
  return (
    <div className="collection-page">
      <CollectionHeading
        title="Alle Videos nach Themen"
        query={query}
        onQuery={setQuery}
      >
        Die Videos zu allen 13 Themen an einem Ort. Wähle ein Thema und öffne
        den Player; die passende Lektion ist direkt verlinkt.
      </CollectionHeading>
      <NoResults count={visible.length} />
      <div className="collection-video-list">
        {visible.map((lesson) => (
          <article key={lesson.id}>
            <div className="collection-topic-line">
              <span>
                Thema {String(lesson.number).padStart(2, "0")} · {lesson.title}{" "}
                · § {lesson.chapter}
              </span>
              <a href={`#/lesson/${lesson.id}`}>
                Zur Lektion <ArrowRight size={16} />
              </a>
            </div>
            <LessonVideo lessonId={lesson.id} />
          </article>
        ))}
      </div>
    </div>
  );
}

export function SummaryCollection() {
  const [query, setQuery] = useState("");
  const visible = matchingLessons(query);
  return (
    <div className="collection-page">
      <CollectionHeading
        title="Alle Themen kurz zusammengefasst"
        query={query}
        onQuery={setQuery}
      >
        Die Kernaussagen zum Wiederholen: Bedeutung, wichtigste Regeln und
        Einheiten. Für die ausführliche Herleitung und Beispiele öffnest du die
        jeweilige Lektion.
      </CollectionHeading>
      <NoResults count={visible.length} />
      <div className="collection-summary-list">
        {visible.map((lesson) => {
          const basics = lessonBasics[lesson.id];
          return (
            <article key={lesson.id} className="collection-summary">
              <span className="eyebrow">
                THEMA {String(lesson.number).padStart(2, "0")} · §{" "}
                {lesson.chapter}
              </span>
              <h2>{lesson.title}</h2>
              <p>
                <UnitText>{basics.answer}</UnitText>
              </p>
              <ul>
                {basics.essentials.map((point) => (
                  <li key={point}>
                    <UnitText>{point}</UnitText>
                  </li>
                ))}
              </ul>
              <QuantityLegend items={basics.units} compact />
              <a className="text-link" href={`#/lesson/${lesson.id}`}>
                Mit Beispielen vertiefen <ArrowRight size={16} />
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}

export function TestCollection({ profile, progress }) {
  const [query, setQuery] = useState("");
  const visible = matchingLessons(query);
  return (
    <div className="collection-page">
      <CollectionHeading
        title="Alle Tests an einem Ort"
        query={query}
        onQuery={setQuery}
      >
        13 Thementests mit jeweils 5 Fragen und eine Abschlussprüfung mit 35
        Fragen. Du kannst Tests wiederholen; dein bestes Ergebnis und dein
        bisheriger Fortschritt bleiben erhalten.
      </CollectionHeading>
      <section
        className="collection-exam"
        aria-labelledby="collection-exam-heading"
      >
        {progress.examUnlocked ? (
          <CheckCircle2 size={26} />
        ) : (
          <LockKeyhole size={26} />
        )}
        <div>
          <h2 id="collection-exam-heading">Abschlussprüfung · 35 Fragen</h2>
          <p>
            {progress.examUnlocked
              ? "Alle Themen bestanden. Du kannst die Abschlussprüfung starten."
              : `${progress.completed} von 13 Themen bestanden. Die Abschlussprüfung wird nach allen 13 bestandenen Thementests freigeschaltet.`}
          </p>
          <a className="button button-dark" href="#/exam">
            {progress.examUnlocked
              ? "Abschlussprüfung starten"
              : "Voraussetzungen ansehen"}
            <ArrowRight size={16} />
          </a>
        </div>
      </section>
      <NoResults count={visible.length} />
      <div className="collection-test-list">
        {visible.map((lesson) => {
          const score = profile.results[lesson.id]?.score;
          return (
            <article key={lesson.id} className="collection-test">
              <span className="eyebrow">
                THEMENTEST {String(lesson.number).padStart(2, "0")} · §{" "}
                {lesson.chapter}
              </span>
              <h2>{lesson.title}</h2>
              <p>5 Fragen · Verständnis und Rechenaufgaben</p>
              <p className="collection-test-result">
                {score == null
                  ? "Noch kein Ergebnis"
                  : `Bestes Ergebnis: ${score}/5${score >= 4 ? " · bestanden" : " · erneut üben"}`}
              </p>
              <a
                className="button button-light"
                href={`#/lesson/${lesson.id}?tab=quiz`}
              >
                {score == null ? "Test starten" : "Test wiederholen"}
                <ArrowRight size={16} />
              </a>
            </article>
          );
        })}
      </div>
    </div>
  );
}
