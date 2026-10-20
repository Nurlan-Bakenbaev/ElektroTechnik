/** Pure helpers for the versioned, browser-local learning profile. */
export const STORAGE_KEY = "volt-academy:v1";

export const LESSON_IDS = Object.freeze([
  "current",
  "circuits",
  "voltage",
  "resistance",
  "ohm",
  "energy",
  "power",
  "efficiency",
  "field",
  "capacitor",
  "magnets",
  "electromagnetism",
  "magnetic-quantities",
]);

const LESSON_ID_SET = new Set(LESSON_IDS);
const PASSING_SCORE = 4;
const LEVEL_NAMES = [
  "Neuling",
  "Entdecker",
  "Praktiker",
  "Kenner",
  "Spezialist",
  "Experte",
  "Meister",
  "Ingenieur",
  "Legende der Elektrotechnik",
];

function invalid(reason) {
  throw new Error(`Falsches Profil: ${reason}.`);
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object" || Array.isArray(value))
    return false;
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

function requireObject(value, field) {
  if (!isPlainObject(value)) invalid(`«${field}» muss ein Objekt sein`);
}

function requireLessonId(id) {
  if (typeof id !== "string" || !LESSON_ID_SET.has(id))
    invalid("unbekanntes Thema");
  return id;
}

function requireScore(score, maximum) {
  if (!Number.isInteger(score) || score < 0 || score > maximum) {
    invalid(`Die Punktzahl muss eine Ganzzahl von 0 bis sein ${maximum}`);
  }
  return score;
}

function requireDate(value, field) {
  // A strict, canonical ISO string also rejects impossible calendar dates.
  if (
    typeof value !== "string" ||
    !/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/.test(value)
  ) {
    invalid(`«${field}» muss das Datum im ISO-Format enthalten`);
  }
  const timestamp = new Date(value);
  if (Number.isNaN(timestamp.getTime()) || timestamp.toISOString() !== value) {
    invalid(`«${field}» enthält ein falsches Datum`);
  }
  return value;
}

function normalizeName(value) {
  if (typeof value !== "string") invalid("Name muss eine Zeichenfolge sein");
  const name = value.trim();
  if (
    Array.from(name).length < 1 ||
    Array.from(name).length > 32 ||
    /[\u0000-\u001f\u007f]/.test(name)
  ) {
    invalid(
      "Der Name muss zwischen 1 und 32 Zeichen ohne Steuerzeichen enthalten",
    );
  }
  return name;
}

function hasCompletedCourse(results) {
  return LESSON_IDS.every((id) => results[id]?.score >= PASSING_SCORE);
}

export function createProfile() {
  return {
    version: 1,
    name: "Entdecker",
    createdAt: new Date().toISOString(),
    lastLesson: "current",
    bookmarks: [],
    results: {},
    examResults: [],
    bestExamScore: null,
  };
}

/** Validate imported data and copy only the supported, serializable fields. */
export function normalizeProfile(input) {
  requireObject(input, "Profil");
  if (input.version !== 1) invalid("Diese Dateiversion wird nicht unterstützt");
  const name = normalizeName(input.name);
  const createdAt = requireDate(input.createdAt, "createdAt");
  const lastLesson = requireLessonId(input.lastLesson);

  if (!Array.isArray(input.bookmarks))
    invalid("Lesezeichen müssen ein Array sein");
  const bookmarks = [...new Set(Array.from(input.bookmarks, requireLessonId))];

  requireObject(input.results, "results");
  const results = {};
  for (const [id, result] of Object.entries(input.results)) {
    requireLessonId(id);
    requireObject(result, `Ergebnis ${id}`);
    const score = requireScore(result.score, 5);
    if (result.total !== 5) invalid("Der Thementest muss 5 Fragen enthalten");
    if (!Number.isSafeInteger(result.attempts) || result.attempts < 1) {
      invalid("Die Anzahl der Versuche muss eine positive ganze Zahl sein");
    }
    results[id] = {
      score,
      total: 5,
      attempts: result.attempts,
      completedAt: requireDate(result.completedAt, "completedAt"),
    };
  }

  if (!Array.isArray(input.examResults))
    invalid("Testergebnisse müssen ein Array sein");
  const validatedExamResults = Array.from(input.examResults, (result) => {
    requireObject(result, "Testergebnis");
    const score = requireScore(result.score, 35);
    if (result.total !== 35) invalid("Der Test muss 35 Fragen umfassen");
    return {
      score,
      total: 35,
      completedAt: requireDate(result.completedAt, "completedAt"),
    };
  });
  const suppliedBestExam =
    input.bestExamScore === undefined ? null : input.bestExamScore;
  if (suppliedBestExam !== null) requireScore(suppliedBestExam, 35);
  const historyBestExam = validatedExamResults.reduce(
    (best, { score }) => Math.max(best ?? 0, score),
    null,
  );
  const bestExamScore =
    suppliedBestExam === null
      ? historyBestExam
      : Math.max(suppliedBestExam, historyBestExam ?? 0);
  const examResults = validatedExamResults.slice(-20);

  if (bestExamScore !== null && !hasCompletedCourse(results)) {
    invalid("Der Test ist erst nach Abschluss aller Themen verfügbar");
  }

  return {
    version: 1,
    name,
    createdAt,
    lastLesson,
    bookmarks,
    results,
    examResults,
    bestExamScore,
  };
}

/** The best score earns XP once; every submission counts as a new attempt. */
export function recordLesson(profile, id, score) {
  requireLessonId(id);
  requireScore(score, 5);
  const next = normalizeProfile(profile);
  const previous = next.results[id];
  if (previous?.attempts === Number.MAX_SAFE_INTEGER)
    invalid("Maximale Anzahl Versuche erreicht");
  next.results[id] = {
    score: Math.max(previous?.score ?? 0, score),
    total: 5,
    attempts: (previous?.attempts ?? 0) + 1,
    completedAt: new Date().toISOString(),
  };
  next.lastLesson = id;
  return next;
}

export function recordExam(profile, score) {
  requireScore(score, 35);
  const next = normalizeProfile(profile);
  if (!hasCompletedCourse(next.results)) {
    throw new Error(
      "Schließen Sie zunächst alle 13 Themen mit einer Punktzahl von mindestens 4 von 5 ab.",
    );
  }
  next.examResults = [
    ...next.examResults,
    {
      score,
      total: 35,
      completedAt: new Date().toISOString(),
    },
  ].slice(-20);
  next.bestExamScore = Math.max(next.bestExamScore ?? 0, score);
  return next;
}

export function getProgress(profile) {
  const normalized = normalizeProfile(profile);
  const completed = LESSON_IDS.filter(
    (id) => normalized.results[id]?.score >= PASSING_SCORE,
  ).length;
  const bestExam = normalized.bestExamScore;
  const xp =
    Object.values(normalized.results).reduce(
      (sum, { score }) => sum + score * 20,
      0,
    ) +
    (bestExam ?? 0) * 10;
  const level = Math.floor(xp / 200) + 1;
  return {
    completed,
    percent: Math.round((completed / LESSON_IDS.length) * 100),
    xp,
    level,
    levelName: LEVEL_NAMES[Math.min(level - 1, LEVEL_NAMES.length - 1)],
    examUnlocked: completed === LESSON_IDS.length,
    bestExam,
    nextLesson:
      LESSON_IDS.find(
        (id) => (normalized.results[id]?.score ?? 0) < PASSING_SCORE,
      ) ?? normalized.lastLesson,
  };
}

export function toggleBookmark(profile, id) {
  requireLessonId(id);
  const next = normalizeProfile(profile);
  next.bookmarks = next.bookmarks.includes(id)
    ? next.bookmarks.filter((bookmark) => bookmark !== id)
    : [...next.bookmarks, id];
  return next;
}

export function setProfileName(profile, name) {
  const next = normalizeProfile(profile);
  next.name = normalizeName(name);
  return next;
}
