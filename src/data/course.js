import { basicsLessons } from "./lessons-basics.js";
import { energyLessons } from "./lessons-energy.js";
import { magnetismLessons } from "./lessons-magnetism.js";
export const lessons = [
  ...basicsLessons,
  ...energyLessons,
  ...magnetismLessons,
];
export const categories = [
  {
    id: "basics",
    name: "Grundlagen der Elektrizität",
    caption: "Beginnen Sie mit der Hauptsache",
    range: "01 — 05",
    icon: "zap",
  },
  {
    id: "energy",
    name: "Energie und Effizienz",
    caption: "Von der Bewegung zur nützlichen Arbeit",
    range: "06 — 08",
    icon: "activity",
  },
  {
    id: "fields",
    name: "Elektrisches Feld",
    caption: "Das Unsichtbare wird klar",
    range: "09 — 10",
    icon: "atom",
  },
  {
    id: "magnetism",
    name: "Magnetismus",
    caption: "Die andere Seite der Elektrizität",
    range: "11 — 13",
    icon: "magnet",
  },
];
export const getLesson = (id) => lessons.find((lesson) => lesson.id === id);
export const allTerms = lessons.flatMap((lesson) =>
  lesson.terms.map((term) => ({
    ...term,
    lessonId: lesson.id,
    lessonTitle: lesson.title,
  })),
);
