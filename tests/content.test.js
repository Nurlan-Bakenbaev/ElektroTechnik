import test from 'node:test';
import assert from 'node:assert/strict';
import { lessons, categories, allTerms, getLesson } from '../src/data/course.js';
import { examQuestions, formulaSheet } from '../src/data/exam.js';
import { LESSON_IDS } from '../src/lib/progress.js';

const expectedIds = [
  'current', 'circuits', 'voltage', 'resistance', 'ohm',
  'energy', 'power', 'efficiency', 'field', 'capacitor',
  'magnets', 'electromagnetism', 'magnetic-quantities',
];

const hasText = (value, context) => {
  assert.equal(typeof value, 'string', `${context} must be text`);
  assert.ok(value.trim().length > 0, `${context} cannot be empty`);
};

test('all thirteen topics preserve the programme order and progress identifiers', () => {
  assert.deepEqual(lessons.map((lesson) => lesson.id), expectedIds);
  assert.deepEqual(lessons.map((lesson) => lesson.number), expectedIds.map((_, i) => i + 1));
  assert.equal(new Set(lessons.map((lesson) => lesson.id)).size, 13);
  assert.deepEqual(LESSON_IDS, expectedIds);
  assert.equal(getLesson('not-a-lesson'), undefined);

  const categoryIds = new Set(categories.map((category) => category.id));
  assert.equal(categoryIds.size, 4);
  for (const lesson of lessons) {
    assert.equal(getLesson(lesson.id), lesson);
    assert.ok(categoryIds.has(lesson.category), `${lesson.id}: known category`);
    for (const key of ['title', 'german', 'chapter', 'description']) {
      hasText(lesson[key], `${lesson.id}.${key}`);
    }
    assert.ok(Number.isInteger(lesson.duration) && lesson.duration > 0);
  }
  for (const category of categories) {
    assert.ok(lessons.some((lesson) => lesson.category === category.id));
  }
});

test('every lesson includes substantive textbook sections, solved examples and a glossary', () => {
  for (const lesson of lessons) {
    assert.equal(lesson.objectives.length, 3, `${lesson.id}: three learning objectives`);
    assert.ok(lesson.sections.length >= 5, `${lesson.id}: at least five sections`);
    assert.equal(new Set(lesson.sections.map((section) => section.id)).size, lesson.sections.length);
    assert.ok(lesson.sections.filter((section) => section.example).length >= 2,
      `${lesson.id}: at least two worked examples`);
    assert.ok(lesson.summary.length >= 4, `${lesson.id}: useful recap`);
    assert.ok(lesson.terms.length >= 4, `${lesson.id}: glossary terms`);

    for (const section of lesson.sections) {
      hasText(section.id, `${lesson.id}: section ID`);
      hasText(section.title, `${lesson.id}: section title`);
      assert.ok(section.paragraphs.length >= 2, `${lesson.id}/${section.id}: explanatory paragraphs`);
      section.paragraphs.forEach((paragraph) => {
        hasText(paragraph, `${lesson.id}/${section.id}: paragraph`);
        assert.ok(paragraph.length >= 100, `${lesson.id}/${section.id}: paragraph must explain the topic`);
      });
      if (section.formula) {
        for (const key of ['expression', 'legend', 'note']) {
          hasText(section.formula[key], `${lesson.id}/${section.id}: formula ${key}`);
        }
      }
      if (section.example) {
        for (const key of ['title', 'given', 'answer']) {
          hasText(section.example[key], `${lesson.id}/${section.id}: example ${key}`);
        }
        assert.ok(section.example.steps.length >= 3, `${lesson.id}/${section.id}: worked solution steps`);
        section.example.steps.forEach((step) => hasText(step, `${lesson.id}/${section.id}: solution step`));
      }
    }
    for (const term of lesson.terms) {
      for (const key of ['term', 'german', 'symbol', 'unit', 'definition']) {
        hasText(term[key], `${lesson.id}: glossary ${key}`);
      }
    }
  }
});

function validateQuestions(questions, context) {
  assert.equal(new Set(questions.map((question) => question.id)).size, questions.length,
    `${context}: question IDs must be unique`);
  for (const question of questions) {
    hasText(question.id, `${context}: question ID`);
    hasText(question.question, `${question.id}: prompt`);
    hasText(question.explanation, `${question.id}: solution`);
    assert.ok(['choice', 'numeric'].includes(question.type), `${question.id}: supported question type`);
    if (question.type === 'choice') {
      assert.equal(question.options.length, 4, `${question.id}: four options`);
      assert.equal(new Set(question.options).size, 4, `${question.id}: distinct options`);
      question.options.forEach((option) => hasText(option, `${question.id}: option`));
      assert.ok(Number.isInteger(question.answer) && question.answer >= 0 && question.answer < 4,
        `${question.id}: correct option is present`);
    } else {
      assert.ok(Number.isFinite(question.answer), `${question.id}: finite numeric answer`);
      hasText(question.unit, `${question.id}: numeric answer unit`);
      assert.ok(Number.isFinite(question.tolerance) && question.tolerance > 0,
        `${question.id}: explicit positive tolerance`);
      assert.ok(question.tolerance <= Math.max(Math.abs(question.answer) * 0.05, 1e-9),
        `${question.id}: tolerance must not admit a materially different result`);
    }
  }
}

test('lesson quizzes contain exactly five answerable questions each, including calculations', () => {
  const allQuestions = lessons.flatMap((lesson) => lesson.quiz);
  assert.equal(allQuestions.length, 65);
  validateQuestions(allQuestions, 'lesson quizzes');
  for (const lesson of lessons) {
    assert.equal(lesson.quiz.length, 5, `${lesson.id}: five questions`);
    assert.ok(lesson.quiz.some((question) => question.type === 'numeric'), `${lesson.id}: calculation practice`);
  }
});

test('the final examination has 35 valid questions and covers every topic at least twice', () => {
  assert.equal(examQuestions.length, 35);
  validateQuestions(examQuestions, 'final exam');
  for (const question of examQuestions) {
    assert.ok(getLesson(question.lessonId), `${question.id}: known lesson reference`);
  }
  for (const id of expectedIds) {
    assert.ok(examQuestions.filter((question) => question.lessonId === id).length >= 2,
      `${id}: represented at least twice in final exam`);
  }
});

test('formula and glossary links resolve to real lessons and include their explanatory text', () => {
  assert.ok(formulaSheet.length >= 13);
  for (const formula of formulaSheet) {
    assert.ok(getLesson(formula.lessonId), `${formula.title}: known lesson reference`);
    for (const key of ['title', 'expression', 'legend', 'conditions']) {
      hasText(formula[key], `${formula.title}: ${key}`);
    }
  }
  assert.equal(allTerms.length, lessons.reduce((total, lesson) => total + lesson.terms.length, 0));
  for (const term of allTerms) {
    const lesson = getLesson(term.lessonId);
    assert.ok(lesson, `${term.term}: known glossary lesson reference`);
    assert.equal(term.lessonTitle, lesson.title);
  }
});

// Independent calculations from the quantities and requested units in each
// prompt. These catch a changed answer key, conversion factor or tolerance.
const lessonCalculations = {
  'current-2': [24 / 8, 'A'],
  'current-5': [25e-3 * 40, 'C'],
  'circuits-2': [120 + 180, 'Ω'],
  'circuits-3': [1 / (1 / 12 + 1 / 12), 'Ω'],
  'voltage-2': [36 / 4, 'V'],
  'voltage-3': [3 - 8, 'V'],
  'resistance-1': [12 / 30e-3, 'Ω'],
  'resistance-4': [1000 * (1 + 5 / 100), 'Ω'],
  'ohm-1': [8 / 400 * 1000, 'mA'],
  'ohm-2': [1.5e3 * 4e-3, 'V'],
  'energy-2': [24 * 2 * 30, 'Дж'],
  'energy-4': [0.8 * 2.5, 'кВт·ч'],
  'power-2': [12 * 2.5, 'Вт'],
  'power-4': [10 ** 2 / 20, 'Вт'],
  'efficiency-2': [400 / 500 * 100, '%'],
  'efficiency-3': [180 / (75 / 100), 'Вт'],
  'field-2': [12 / (4e-3), 'В/м'],
  'field-4': [2e-6 * 5000, 'Н'],
  'capacitor-2': [200e-6 * 10 * 1000, 'мКл'],
  'capacitor-4': [0.5 * 1000e-6 * 10 ** 2, 'Дж'],
  'magnets-3': [0.5 * 2 * 0.2, 'Н'],
  'magnets-4': [0.2 * 0.01 * 1000, 'мВб'],
  'electromagnetism-2': [100 * 0.002 / 0.1, 'В'],
  'electromagnetism-4': [0.5 * 0.5 * 2 ** 2, 'Дж'],
  'magnetic-quantities-2': [0.5 * 6e-4 * 1000, 'мВб'],
  'magnetic-quantities-4': [400 * 0.5, 'А·виток'],
};

const examCalculations = {
  'exam-02': [18 / 6, 'А'],
  'exam-03': [0.4 * 2 * 60, 'Кл'],
  'exam-05': [3 + 7, 'Ом'],
  'exam-07': [24 / 3, 'В'],
  'exam-09': [0.0175 * 20 / 1.5, 'Ом'],
  'exam-11': [6 * 3 / (6 + 3), 'Ом'],
  'exam-12': [12 / 150 * 1000, 'мА'],
  'exam-13': [470 * 0.2, 'В'],
  'exam-15': [60 / 1000 * (30 / 60), 'кВт·ч'],
  'exam-16': [2 * 1.5 * 0.3, '€'],
  'exam-18': [12 * 2.5, 'Вт'],
  'exam-19': [6 ** 2 / 3, 'Вт'],
  'exam-21': [375 / 500 * 100, '%'],
  'exam-23': [300 / 15e-3 / 1000, 'кВ/м'],
  'exam-24': [2e-6 * 500 * 1000, 'мН'],
  'exam-26': [100e-6 * 12 * 1e6, 'мкКл'],
  'exam-27': [0.5 * 200e-6 * 10 ** 2 * 1000, 'мДж'],
  'exam-31': [0.2 * 3 * 0.5, 'Н'],
  'exam-34': [0.4 * 25e-4 * 1000, 'мВб'],
};

function verifyCalculations(questions, calculations) {
  const numeric = questions.filter((question) => question.type === 'numeric');
  assert.deepEqual(numeric.map((question) => question.id).sort(), Object.keys(calculations).sort(),
    'every numeric prompt must have an independently checked calculation');
  for (const question of numeric) {
    const [calculated, unit] = calculations[question.id];
    assert.equal(question.unit, unit, `${question.id}: answer unit`);
    assert.ok(Math.abs(calculated - question.answer) <= question.tolerance,
      `${question.id}: computed ${calculated} ${unit}; answer key ${question.answer} ± ${question.tolerance}`);
  }
}

test('all 26 lesson calculation answers match physical formulas and requested units', () => {
  verifyCalculations(lessons.flatMap((lesson) => lesson.quiz), lessonCalculations);
});

test('all 19 final calculation answers match physical formulas and requested units', () => {
  verifyCalculations(examQuestions, examCalculations);
});
