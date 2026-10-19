import { test, expect } from '@playwright/test';
import { lessons, allTerms } from '../src/data/course.js';
import { examQuestions } from '../src/data/exam.js';
import { STORAGE_KEY } from '../src/lib/progress.js';

function watchErrors(page) {
  const errors = [];
  page.on('pageerror', (error) => errors.push(error.message));
  page.on('console', (message) => {
    if (message.type() === 'error') errors.push(message.text());
  });
  return errors;
}

async function visit(page, route = 'home') {
  await page.goto(`/#/${route}`);
  await expect(page.getByRole('main')).toBeVisible();
}

async function readProfile(page) {
  return page.evaluate((key) => JSON.parse(localStorage.getItem(key) || 'null'), STORAGE_KEY);
}

async function openLessonQuiz(page, lesson) {
  await visit(page, `lesson/${lesson.id}`);
  await page.getByRole('tab', { name: 'Проверка знаний', exact: true }).click();
  await page.getByRole('button', { name: 'Начать тест', exact: true }).click();
}

async function answerQuestion(page, question, { correct = true } = {}) {
  await expect(page.locator('#quiz-question')).toHaveText(question.question);
  if (question.type === 'choice') {
    const answer = correct ? question.answer : (question.answer + 1) % question.options.length;
    // Index by the documented option order, without relying on the decorative letter in the label.
    await page.getByRole('radio').nth(answer).check();
  } else {
    const value = correct ? question.answer : question.answer + Math.max(1, Math.abs(question.answer));
    await page.getByPlaceholder('Введите число', { exact: true }).fill(String(value).replace('.', ','));
  }
  await page.getByRole('button', { name: 'Проверить ответ', exact: true }).click();
  if (correct) await expect(page.getByRole('status').filter({ hasText: 'Всё верно!' })).toBeVisible();
}

async function answerQuestions(page, questions, options) {
  for (const [index, question] of questions.entries()) {
    await answerQuestion(page, question, options);
    await page.getByRole('button', {
      name: index === questions.length - 1 ? 'Посмотреть результат' : 'Следующий вопрос',
      exact: true,
    }).click();
  }
}

test('nickname and bookmarks persist after reloading the browser page', async ({ page }) => {
  const errors = watchErrors(page);
  await visit(page, 'profile');
  await page.getByRole('textbox', { name: 'Как к вам обращаться?', exact: true }).fill('  Нурлан ⚡  ');
  await page.getByRole('button', { name: 'Сохранить', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Нурлан ⚡', exact: true })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('textbox', { name: 'Как к вам обращаться?', exact: true })).toHaveValue('Нурлан ⚡');

  await visit(page, `lesson/${lessons[0].id}`);
  await page.getByRole('button', { name: 'Сохранить', exact: true }).click();
  await expect(page.getByRole('button', { name: 'В закладках', exact: true })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('button', { name: 'В закладках', exact: true })).toBeVisible();
  await page.getByRole('link', { name: /^Мои закладки/ }).click();
  await expect(page.locator('.lesson-card-title')).toHaveCount(1);
  await expect(page.locator('.lesson-card-title')).toContainText(lessons[0].title);
  expect((await readProfile(page)).bookmarks).toEqual([lessons[0].id]);
  await page.getByRole('button', { name: `Удалить закладку: ${lessons[0].title}`, exact: true }).click();
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Здесь будет самое нужное.', exact: true })).toBeVisible();
  expect((await readProfile(page)).bookmarks).toEqual([]);
  expect(errors).toEqual([]);
});

test('quiz resumes an unfinished attempt and retains its best score without duplicate XP', async ({ page }) => {
  const errors = watchErrors(page);
  const lesson = lessons[0];
  await openLessonQuiz(page, lesson);
  await answerQuestion(page, lesson.quiz[0]);
  await page.getByRole('button', { name: 'Следующий вопрос', exact: true }).click();
  await page.reload();
  await page.getByRole('tab', { name: 'Проверка знаний', exact: true }).click();
  await page.getByRole('button', { name: 'Продолжить · 2 из 5', exact: true }).click();
  for (const [index, question] of lesson.quiz.slice(1).entries()) {
    await answerQuestion(page, question);
    await page.getByRole('button', {
      name: index === 3 ? 'Посмотреть результат' : 'Следующий вопрос', exact: true,
    }).click();
  }
  await expect(page.getByRole('heading', { name: 'Ещё одна тема освоена.', exact: true })).toBeVisible();
  await expect(page.locator('.xp-indicator')).toHaveText('100 XP');
  await page.reload();
  await expect(page.getByText('Лучший результат: 5/5', { exact: true })).toBeVisible();
  await page.getByRole('tab', { name: 'Проверка знаний', exact: true }).click();
  await page.getByRole('button', { name: 'Начать тест', exact: true }).click();
  await answerQuestions(page, lesson.quiz, { correct: false });
  await expect(page.getByRole('heading', { name: 'Хорошая попытка. Закрепим знания?', exact: true })).toBeVisible();
  await expect(page.locator('.xp-indicator')).toHaveText('100 XP');
  const profile = await readProfile(page);
  expect(profile.results[lesson.id]).toMatchObject({ score: 5, total: 5, attempts: 2 });
  expect(errors).toEqual([]);
});

test('all 65 lesson questions unlock the 35-question exam, solutions and attempt history', async ({ page }) => {
  test.setTimeout(240_000);
  const errors = watchErrors(page);
  await visit(page, 'exam');
  await expect(page.getByRole('heading', { name: 'Сначала соберём всю цепь.', exact: true })).toBeVisible();
  await expect(page.getByRole('button', { name: 'Начать контрольную', exact: true })).toHaveCount(0);
  for (const lesson of lessons) {
    await openLessonQuiz(page, lesson);
    await answerQuestions(page, lesson.quiz);
    await expect(page.getByRole('heading', { name: 'Ещё одна тема освоена.', exact: true })).toBeVisible();
  }
  await expect(page.locator('.xp-indicator')).toHaveText('1300 XP');
  await visit(page, 'exam');
  await expect(page.getByText('Все 13 тем освоены. Вы готовы к итоговой работе.', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Начать контрольную', exact: true }).click();
  await answerQuestions(page, examQuestions);
  await expect(page.getByRole('heading', { name: 'Вы прошли весь путь!', exact: true })).toBeVisible();
  await expect(page.locator('.result-score')).toContainText('35 / 35');
  await expect(page.locator('.review-list details')).toHaveCount(35);
  await page.locator('.review-list summary').first().click();
  await expect(page.locator('.review-body').first()).toContainText(examQuestions[0].explanation);
  await expect(page.locator('.xp-indicator')).toHaveText('1650 XP');
  await expect(page.getByRole('heading', { name: 'История попыток', exact: true })).toBeVisible();
  await expect(page.locator('.exam-history')).toContainText('35/35');

  // A complete lower-scoring retry proves attempts do not mint XP a second time.
  await page.getByRole('button', { name: 'Пройти ещё раз', exact: true }).click();
  await answerQuestions(page, examQuestions, { correct: false });
  await expect(page.locator('.xp-indicator')).toHaveText('1650 XP');
  await page.reload();
  await expect(page.getByText('Лучший результат: 35/35', { exact: true })).toBeVisible();
  await expect(page.locator('.exam-history > div')).toHaveCount(2);
  const profile = await readProfile(page);
  expect(Object.keys(profile.results)).toHaveLength(13);
  expect(profile.examResults.map(({ score }) => score)).toEqual([35, 0]);
  expect(errors).toEqual([]);
});

test('glossary finds German terms, follows the lesson link and handles an empty search', async ({ page }) => {
  const errors = watchErrors(page);
  const term = allTerms.find((entry) => entry.german === 'Elektrische Stromstärke') || allTerms[0];
  await visit(page, 'glossary');
  const search = page.getByRole('textbox', { name: 'Поиск термина', exact: true });
  await search.fill(term.german);
  const match = page.locator('.glossary-list article').filter({ hasText: term.term });
  await expect(match).toHaveCount(1);
  await expect(match).toContainText(term.definition);
  await match.getByRole('link', { name: /^К уроку/ }).click();
  await expect(page).toHaveURL(new RegExp(`#\/lesson\/${term.lessonId}$`));
  await visit(page, 'glossary');
  await search.fill('несуществующийтермин12345');
  await expect(page.getByRole('heading', { name: 'Такого термина пока нет.', exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Очистить поиск', exact: true }).click();
  await expect(page.locator('.glossary-list article').first()).toBeVisible();
  expect(errors).toEqual([]);
});

test('every lesson has an interactive lab whose sliders update its model without browser errors', async ({ page }) => {
  const errors = watchErrors(page);
  for (const lesson of lessons) {
    await visit(page, `lesson/${lesson.id}`);
    await page.getByRole('tab', { name: 'Интерактив', exact: true }).click();
    const lab = page.getByRole('region', { name: 'Интерактивная лаборатория', exact: true });
    await expect(lab).toBeVisible();
    const sliders = lab.getByRole('slider');
    expect(await sliders.count()).toBeGreaterThan(0);
    for (const control of await lab.locator('.lab-control').all()) {
      const slider = control.getByRole('slider');
      const output = control.locator('output');
      const previousOutput = await output.textContent();
      const before = await slider.inputValue();
      const maximum = await slider.getAttribute('max');
      const minimum = await slider.getAttribute('min');
      await slider.focus();
      await slider.press(before === maximum ? 'Home' : 'End');
      await expect(slider).toHaveValue(before === maximum ? minimum : maximum);
      await expect(output).not.toHaveText(previousOutput);
      await expect(lab.locator('.lab-result')).not.toContainText(/NaN|Infinity|undefined/);
    }
  }
  expect(errors).toEqual([]);
});

test('mobile layout stays within 375px and its navigation opens and closes', async ({ page }) => {
  const errors = watchErrors(page);
  await page.setViewportSize({ width: 375, height: 812 });
  await visit(page);
  const menu = page.getByRole('button', { name: 'Открыть меню', exact: true });
  await expect(menu).toBeVisible();
  await menu.click();
  await expect(menu).toHaveAttribute('aria-expanded', 'true');
  await page.getByRole('link', { name: 'Программа обучения', exact: true }).click();
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  await menu.click();
  await page.getByRole('button', { name: 'Закрыть меню', exact: true }).click({ position: { x: 365, y: 400 } });
  await expect(menu).toHaveAttribute('aria-expanded', 'false');
  for (const route of ['home', 'curriculum', 'glossary', 'profile', 'exam', 'lesson/current']) {
    await visit(page, route);
    const dimensions = await page.evaluate(() => ({
      width: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scroll, `${route} must not overflow horizontally`).toBeLessThanOrEqual(dimensions.width + 1);
  }
  await page.getByRole('tab', { name: 'Интерактив', exact: true }).click();
  await expect(page.getByRole('region', { name: 'Интерактивная лаборатория', exact: true })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth)).toBeLessThanOrEqual(376);
  expect(errors).toEqual([]);
});

test('malformed JSON and invalid imported profiles leave the current profile intact', async ({ page }) => {
  const errors = watchErrors(page);
  await visit(page, 'profile');
  await page.getByRole('textbox', { name: 'Как к вам обращаться?', exact: true }).fill('Мой профиль');
  await page.getByRole('button', { name: 'Сохранить', exact: true }).click();
  const before = await readProfile(page);
  for (const body of ['{ broken json', JSON.stringify({ version: 999, name: 'Подмена' })]) {
    const chooserPromise = page.waitForEvent('filechooser');
    await page.getByRole('button', { name: 'Загрузить из файла', exact: true }).click();
    const chooser = await chooserPromise;
    await chooser.setFiles({ name: 'progress.json', mimeType: 'application/json', buffer: Buffer.from(body) });
    await expect(page.getByRole('alert').filter({ hasText: 'Не удалось импортировать файл' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Да, восстановить', exact: true })).toHaveCount(0);
    expect(await readProfile(page)).toEqual(before);
  }
  await page.reload();
  await expect(page.getByRole('textbox', { name: 'Как к вам обращаться?', exact: true })).toHaveValue('Мой профиль');
  expect(errors).toEqual([]);
});

test('beginner concepts, formula reference and all eight textbook illustrations render', async ({ page }) => {
  const errors = watchErrors(page);
  await visit(page, 'essentials');
  await expect(page.locator('.concept-card')).toHaveCount(12);
  await expect(page.locator('.origin-card')).toContainText('Заряды уже есть в проводе');
  await page.locator('.concept-card').first().locator('summary').click();
  await expect(page.locator('.concept-card').first().locator('details')).toHaveAttribute('open', '');
  await visit(page, 'formulas');
  await expect(page.locator('.reference-formula')).toHaveCount(20);
  for (const id of ['current', 'circuits', 'resistance', 'field', 'capacitor', 'magnets', 'electromagnetism', 'magnetic-quantities']) {
    await visit(page, `lesson/${id}`);
    const image = page.locator('.textbook-image');
    await image.scrollIntoViewIfNeeded();
    await expect.poll(() => image.evaluate(img => img.complete && img.naturalWidth > 0)).toBe(true);
    await expect(page.locator('.lesson-figure figcaption')).toContainText('CC BY 4.0');
  }
  expect(errors).toEqual([]);
});

test('export, confirmed restoration and keyboard-safe reset preserve user control', async ({ page }) => {
  const errors = watchErrors(page);
  await visit(page, 'profile');
  await page.getByRole('textbox', { name: 'Как к вам обращаться?', exact: true }).fill('Мой сохранённый курс');
  await page.getByRole('button', { name: 'Сохранить', exact: true }).click();
  const saved = await readProfile(page);
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Скачать прогресс', exact: true }).click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe('volt-progress.json');
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  expect(JSON.parse(Buffer.concat(chunks).toString())).toEqual(saved);
  await page.getByRole('textbox', { name: 'Как к вам обращаться?', exact: true }).fill('Временное имя');
  await page.getByRole('button', { name: 'Сохранить', exact: true }).click();
  const chooserPromise = page.waitForEvent('filechooser');
  await page.getByRole('button', { name: 'Загрузить из файла', exact: true }).click();
  await (await chooserPromise).setFiles({ name: 'volt-progress.json', mimeType: 'application/json', buffer: Buffer.from(JSON.stringify(saved)) });
  expect((await readProfile(page)).name).toBe('Временное имя');
  await page.getByRole('button', { name: 'Да, восстановить', exact: true }).click();
  expect(await readProfile(page)).toEqual(saved);
  await page.getByRole('button', { name: 'Сбросить прогресс', exact: true }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(page.getByRole('dialog')).toHaveCount(0);
  expect(await readProfile(page)).toEqual(saved);
  await page.getByRole('button', { name: 'Сбросить прогресс', exact: true }).click();
  await page.getByRole('button', { name: 'Удалить данные', exact: true }).click();
  expect((await readProfile(page)).name).toBe('Исследователь');
  await page.reload();
  await expect(page.getByRole('textbox', { name: 'Как к вам обращаться?', exact: true })).toHaveValue('Исследователь');
  expect(errors).toEqual([]);
});
