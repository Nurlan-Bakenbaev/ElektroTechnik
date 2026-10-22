import { Lightbulb } from "lucide-react";
import { lessonStudy } from "../data/lesson-study.js";
import { UnitText } from "./QuantityLegend";

export default function LessonPitfall({ lessonId }) {
  const item = lessonStudy[lessonId];
  return (
    <aside className="lesson-pitfall" aria-label="Häufige Verwechslung">
      <Lightbulb size={22} aria-hidden="true" />
      <div>
        <span>HÄUFIGE VERWECHSLUNG</span>
        <h3>{item.mistake}</h3>
        <p>
          <UnitText>{item.explanation}</UnitText>
        </p>
      </div>
    </aside>
  );
}
