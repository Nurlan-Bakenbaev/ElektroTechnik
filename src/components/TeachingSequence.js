"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, Eye, FlaskConical, Lightbulb, MessageCircleQuestion, Target, CheckCircle2 } from "lucide-react";
import { getTeachingGuide } from "../data/teaching-guides";

const stages = [
  ["problem", "Problem", MessageCircleQuestion],
  ["observe", "Beobachten", Eye],
  ["predict", "Vorhersagen", Lightbulb],
  ["experiment", "Experiment", FlaskConical],
  ["explain", "Erklären", Target],
  ["apply", "Anwenden", ArrowRight],
  ["reflect", "Reflektieren", CheckCircle2],
];

export default function TeachingSequence({ lesson }) {
  const guide = getTeachingGuide(lesson.id);
  const [active, setActive] = useState(0);
  const [, label, Icon] = stages[active];
  return (
    <section className="teaching-sequence" aria-labelledby="teaching-sequence-title">
      <div className="teaching-sequence-head">
        <div>
          <span className="instrument-kicker">LESSON ENGINE · 01–07</span>
          <h2 id="teaching-sequence-title">Verstehen durch Handeln</h2>
          <p>Starte mit einer technischen Frage. Jede Station baut auf deiner Beobachtung auf.</p>
        </div>
        <span className="sequence-status">{String(active + 1).padStart(2, "0")} / 07</span>
      </div>
      <div className="teaching-sequence-steps" role="tablist" aria-label="Lernschritte">
        {stages.map(([id, stageLabel, StageIcon], index) => (
          <button
            key={id}
            role="tab"
            aria-selected={active === index}
            aria-controls={`teaching-stage-${id}`}
            className={active === index ? "active" : ""}
            onClick={() => setActive(index)}
          >
            <span className="sequence-step-index">{String(index + 1).padStart(2, "0")}</span>
            <StageIcon size={16} />
            <span>{stageLabel}</span>
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={stages[active][0]}
          id={`teaching-stage-${stages[active][0]}`}
          role="tabpanel"
          className="teaching-stage"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.22 }}
        >
          <span className="teaching-stage-icon"><Icon size={22} /></span>
          <div>
            <span className="instrument-kicker">STATION {String(active + 1).padStart(2, "0")} · {label.toUpperCase()}</span>
            <p>{guide[stages[active][0]]}</p>
          </div>
          {active < stages.length - 1 && (
            <button className="sequence-next" onClick={() => setActive(active + 1)} aria-label="Nächsten Lernschritt öffnen">
              Weiter <ArrowRight size={16} />
            </button>
          )}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
