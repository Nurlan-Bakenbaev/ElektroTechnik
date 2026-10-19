import { basicsLessons } from './lessons-basics.js';
import { energyLessons } from './lessons-energy.js';
import { magnetismLessons } from './lessons-magnetism.js';
export const lessons = [...basicsLessons, ...energyLessons, ...magnetismLessons];
export const categories = [
  { id: 'basics', name: 'Основы электричества', caption: 'Начните с главного', range: '01 — 05', icon: 'zap' },
  { id: 'energy', name: 'Энергия и эффективность', caption: 'От движения к полезной работе', range: '06 — 08', icon: 'activity' },
  { id: 'fields', name: 'Электрическое поле', caption: 'Невидимое становится понятным', range: '09 — 10', icon: 'atom' },
  { id: 'magnetism', name: 'Магнетизм', caption: 'Другая сторона электричества', range: '11 — 13', icon: 'magnet' },
];
export const getLesson = id => lessons.find(lesson => lesson.id === id);
export const allTerms = lessons.flatMap(lesson => lesson.terms.map(term => ({ ...term, lessonId: lesson.id, lessonTitle: lesson.title })));
