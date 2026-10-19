'use client';
import { useEffect, useState } from 'react';
import { ArrowRight, Check, CheckCircle2, CircleHelp, RotateCcw, Trophy, X, Clock3 } from 'lucide-react';

function evaluate(question, value) {
  if (question.type === 'choice') return value === question.answer;
  const number = Number(String(value).trim().replace(',', '.'));
  return String(value).trim() !== '' && Number.isFinite(number) && Math.abs(number - question.answer) <= (question.tolerance ?? 0.001);
}
const correctText = q => q.type === 'choice' ? q.options[q.answer] : `${q.answer.toLocaleString('ru-RU', { maximumFractionDigits: 8 })} ${q.unit || ''}`;

export default function Quiz({ questions, quizId, isExam = false, onComplete, previousScore, onNext }) {
  const [started, setStarted] = useState(false);
  const [answers, setAnswers] = useState([]);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState('');
  const [finished, setFinished] = useState(false);
  const [error, setError] = useState('');
  const [storageWarning, setStorageWarning] = useState(false);
  const key = `volt-academy:attempt:${quizId}`;
  const threshold = isExam ? 28 : 4;
  const score = answers.filter((a, i) => evaluate(questions[i], a.value)).length;
  const question = questions[index];
  const checked = !!answers[index];

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(key) || 'null');
      if (saved && saved.version === 1 && Array.isArray(saved.answers) && saved.answers.length <= questions.length && saved.answers.every((a, i) => a && (questions[i].type === 'choice' ? Number.isInteger(a.value) && a.value >= 0 && a.value < questions[i].options.length : typeof a.value === 'string' && a.value.trim() !== '' && Number.isFinite(Number(a.value.replace(',', '.')))))) {
        setAnswers(saved.answers);
        setIndex(Math.min(saved.answers.length, questions.length - 1));
      }
    } catch { setStorageWarning(true); }
  }, [key, questions]);

  const saveAttempt = next => {
    try { localStorage.setItem(key, JSON.stringify({ version: 1, answers: next })); }
    catch { setStorageWarning(true); }
  };
  function submit(event) {
    event.preventDefault();
    if (checked) return;
    if (value === '' || (question.type === 'numeric' && (!value.trim() || !Number.isFinite(Number(value.trim().replace(',', '.')))))) {
      setError(question.type === 'numeric' ? 'Введите число. Десятичные дроби можно писать через запятую.' : 'Выберите один вариант ответа.');
      return;
    }
    const next = [...answers, { value }];
    setAnswers(next); saveAttempt(next); setError('');
  }
  function advance() {
    if (index === questions.length - 1) {
      onComplete(score);
      setFinished(true);
      try { localStorage.removeItem(key); } catch { setStorageWarning(true); }
    } else { setIndex(i => i + 1); setValue(''); setError(''); }
  }
  function restart() {
    setAnswers([]); setIndex(0); setValue(''); setFinished(false); setStarted(true); setError('');
    try { localStorage.removeItem(key); } catch { setStorageWarning(true); }
  }

  if (finished) return <section className="quiz-result" aria-live="polite">
    <span className={`result-icon ${score >= threshold ? 'success' : 'retry'}`}>{score >= threshold ? <Trophy size={30} /> : <RotateCcw size={30} />}</span>
    <span className="eyebrow">{isExam ? 'ИТОГОВАЯ РАБОТА ЗАВЕРШЕНА' : 'ПРОВЕРКА ЗНАНИЙ ЗАВЕРШЕНА'}</span>
    <h2>{score >= threshold ? (isExam ? 'Вы прошли весь путь!' : 'Ещё одна тема освоена.') : 'Хорошая попытка. Закрепим знания?'}</h2>
    <p>{score >= threshold ? 'Результат сохранён в вашем профиле. Ниже — разбор каждого ответа.' : `Для зачёта нужно ${threshold} из ${questions.length}. Посмотрите решения и попробуйте ещё раз — число попыток не ограничено.`}</p>
    <div className="result-score"><strong>{score}<span> / {questions.length}</span></strong><div>{Math.round(score / questions.length * 100)}% правильных ответов<br /><span>{score >= threshold ? 'Зачтено' : 'Пока не зачтено'}</span></div></div>
    <div className="button-row"><button className="button button-dark" onClick={() => onNext(score >= threshold)}>{isExam ? 'Вернуться к курсу' : score >= threshold ? 'Продолжить обучение' : 'Повторить теорию'}<ArrowRight size={16} /></button><button className="button button-outline" onClick={restart}><RotateCcw size={15} />Пройти ещё раз</button></div>
    <div className="review-list"><h3>Разбор ответов</h3>{questions.map((q, i) => <details key={q.id} className={evaluate(q, answers[i]?.value) ? 'review-correct' : 'review-wrong'}><summary><span className="review-status">{evaluate(q, answers[i]?.value) ? <Check size={16} /> : <X size={16} />}</span><span>{i + 1}. {q.question}</span></summary><div className="review-body"><p><strong>Ваш ответ:</strong> {q.type === 'choice' ? q.options[answers[i]?.value] : `${answers[i]?.value ?? '—'} ${q.unit || ''}`}</p><p><strong>Верный ответ:</strong> {correctText(q)}</p><p>{q.explanation}</p></div></details>)}</div>
  </section>;

  if (!started) return <section className="quiz-intro">
    <div className="quiz-intro-icon">{isExam ? <GraduationIcon /> : <CircleHelp size={30} strokeWidth={1.5} />}</div>
    <span className="eyebrow">{isExam ? 'ФИНАЛЬНЫЙ ШАГ' : 'ЗАКРЕПЛЯЕМ НА ПРАКТИКЕ'}</span>
    <h2>{isExam ? 'Всё, что вы теперь знаете.' : 'Проверим, что осталось в голове?'}</h2>
    <p>{isExam ? '35 вопросов по всем 13 темам: от простых понятий до расчётных задач. Думайте в своём темпе и пользуйтесь черновиком.' : 'Пять вопросов по этой теме. Будут определения, расчёты и небольшие задачи — всё, что мы только что разобрали.'}</p>
    <div className="quiz-facts"><span><CheckCircle2 size={16} />Зачёт от {threshold} из {questions.length}</span><span><Clock3 size={16} />Без ограничения времени</span><span><RotateCcw size={16} />Можно повторять</span></div>
    {previousScore != null && <p className="saved-score">Лучший результат: {previousScore} из {questions.length}</p>}
    {storageWarning && <p className="inline-warning" role="status">Браузер ограничил локальное сохранение. Не закрывайте страницу во время попытки.</p>}
    <button className="button button-dark" onClick={() => setStarted(true)}>{answers.length ? `Продолжить · ${Math.min(answers.length + 1, questions.length)} из ${questions.length}` : isExam ? 'Начать контрольную' : 'Начать тест'}<ArrowRight size={17} /></button>
  </section>;

  return <section className="quiz-active" aria-labelledby="quiz-question">
    <div className="quiz-top"><span className="eyebrow">ВОПРОС {index + 1} ИЗ {questions.length}</span><span>{score} верно</span></div>
    <div className="quiz-progress" aria-label={`${answers.length} из ${questions.length} ответов`}><span style={{ width: `${answers.length / questions.length * 100}%` }} /></div>
    <h2 id="quiz-question" key={question.id}>{question.question}</h2>
    <form onSubmit={submit}>
      {question.type === 'choice' ? <fieldset className="answer-options"><legend className="sr-only">Выберите ответ</legend>{question.options.map((option, i) => <label key={i} className={`answer-option ${(checked ? answers[index].value : value) === i ? 'selected' : ''} ${checked && question.answer === i ? 'correct' : ''} ${checked && answers[index].value === i && question.answer !== i ? 'wrong' : ''}`}><input type="radio" name={`${quizId}-${index}`} value={i} checked={(checked ? answers[index].value : value) === i} disabled={checked} onChange={() => { setValue(i); setError(''); }} /><span className="answer-letter">{'АБВГ'[i]}</span><span>{option}</span>{checked && question.answer === i && <Check size={18} />}</label>)}</fieldset> : <label className="numeric-answer"><span>Ваш ответ{question.unit ? `, ${question.unit}` : ''}</span><div><input aria-describedby="numeric-hint" inputMode="decimal" autoComplete="off" placeholder="Введите число" value={checked ? answers[index].value : value} disabled={checked} onChange={e => { setValue(e.target.value); setError(''); }} /><span>{question.unit}</span></div><small id="numeric-hint">Дробную часть можно отделять точкой или запятой.{question.tolerance ? ` Допуск: ±${question.tolerance} ${question.unit || ''}.` : ''}</small></label>}
      {error && <p className="field-error" role="alert">{error}</p>}
      {checked ? <div className={`answer-feedback ${evaluate(question, answers[index].value) ? 'feedback-correct' : 'feedback-wrong'}`} role="status"><strong>{evaluate(question, answers[index].value) ? 'Всё верно!' : `Верный ответ: ${correctText(question)}`}</strong><p>{question.explanation}</p></div> : null}
      <div className="quiz-bottom"><span>{isExam ? 'Итоговая работа' : 'Практика делает понятнее.'}</span>{checked ? <button type="button" className="button button-dark" onClick={advance}>{index === questions.length - 1 ? 'Посмотреть результат' : 'Следующий вопрос'}<ArrowRight size={17} /></button> : <button className="button button-dark" type="submit">Проверить ответ<ArrowRight size={17} /></button>}</div>
    </form>
    {storageWarning && <p className="inline-warning" role="status">Ответы этой попытки не удаётся сохранить в браузере.</p>}
  </section>;
}
function GraduationIcon() { return <Trophy size={30} strokeWidth={1.5} />; }
