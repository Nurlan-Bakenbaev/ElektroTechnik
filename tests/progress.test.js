import test from "node:test";
import assert from "node:assert/strict";
import {
  STORAGE_KEY,
  LESSON_IDS,
  createProfile,
  normalizeProfile,
  recordLesson,
  recordExam,
  getProgress,
  toggleBookmark,
  setProfileName,
} from "../src/lib/progress.js";

function completedProfile(score = 4) {
  return LESSON_IDS.reduce(
    (profile, id) => recordLesson(profile, id, score),
    createProfile(),
  );
}

test("new profile is valid, independent and starts at the first lesson", () => {
  const profile = createProfile();
  assert.equal(STORAGE_KEY, "volt-academy:v1");
  assert.deepEqual(normalizeProfile(profile), profile);
  assert.deepEqual(getProgress(profile), {
    completed: 0,
    percent: 0,
    xp: 0,
    level: 1,
    levelName: "Neuling",
    examUnlocked: false,
    bestExam: null,
    nextLesson: "current",
  });
  profile.bookmarks.push("current");
  assert.deepEqual(createProfile().bookmarks, []);
});

test("lesson retries retain the best score and do not award duplicate XP", () => {
  const initial = createProfile();
  const first = recordLesson(initial, "current", 4);
  const retry = recordLesson(first, "current", 2);
  const improved = recordLesson(retry, "current", 5);
  assert.deepEqual(initial.results, {});
  assert.equal(first.results.current.attempts, 1);
  assert.equal(retry.results.current.score, 4);
  assert.equal(retry.results.current.attempts, 2);
  assert.equal(getProgress(retry).xp, 80);
  assert.equal(getProgress(retry).completed, 1);
  assert.equal(improved.results.current.score, 5);
  assert.equal(improved.results.current.attempts, 3);
  assert.equal(getProgress(improved).xp, 100);
  assert.equal(getProgress(improved).nextLesson, "circuits");
});

test("only thirteen passed quizzes unlock the final exam", () => {
  let profile = createProfile();
  for (const id of LESSON_IDS.slice(0, -1))
    profile = recordLesson(profile, id, 5);
  profile = recordLesson(profile, LESSON_IDS.at(-1), 3);
  assert.equal(getProgress(profile).completed, 12);
  assert.equal(getProgress(profile).percent, 92);
  assert.equal(getProgress(profile).examUnlocked, false);
  assert.throws(() => recordExam(profile, 35), /Schließen Sie zunächst/);
  profile = recordLesson(profile, LESSON_IDS.at(-1), 4);
  assert.equal(getProgress(profile).completed, 13);
  assert.equal(getProgress(profile).percent, 100);
  assert.equal(getProgress(profile).examUnlocked, true);
});

test("exam accepts exact boundaries and uses the best retained exam for XP", () => {
  const profile = completedProfile(5);
  const zero = recordExam(profile, 0);
  const perfect = recordExam(zero, 35);
  const retry = recordExam(perfect, 10);
  assert.equal(getProgress(profile).bestExam, null);
  assert.equal(getProgress(zero).bestExam, 0);
  assert.equal(getProgress(retry).bestExam, 35);
  assert.equal(getProgress(retry).xp, 1650);
  assert.equal(getProgress(retry).level, 9);
  assert.equal(profile.examResults.length, 0);
  for (const score of [-1, 36, 3.5, "35", NaN, Infinity]) {
    assert.throws(() => recordExam(profile, score), /Punktzahl/);
  }
});

test("exam history retains only the most recent twenty entries", () => {
  let profile = recordExam(completedProfile(), 35);
  for (let index = 0; index < 20; index += 1)
    profile = recordExam(profile, index);
  assert.equal(profile.examResults.length, 20);
  assert.equal(profile.examResults[0].score, 0);
  assert.equal(profile.examResults.at(-1).score, 19);
  assert.equal(getProgress(profile).bestExam, 35);
});

test("more than twenty lower exam attempts cannot erase the all-time best score or XP", () => {
  let profile = recordExam(completedProfile(5), 35);
  const originalProgress = getProgress(profile);
  for (let index = 0; index < 25; index += 1) profile = recordExam(profile, 0);
  assert.equal(profile.examResults.length, 20);
  assert.ok(profile.examResults.every(({ score }) => score === 0));
  assert.equal(profile.bestExamScore, 35);
  assert.equal(getProgress(profile).bestExam, 35);
  assert.equal(getProgress(profile).xp, originalProgress.xp);
  assert.equal(getProgress(profile).level, originalProgress.level);
  assert.deepEqual(
    normalizeProfile(JSON.parse(JSON.stringify(profile))),
    profile,
  );
});

test("version 1 profiles without the optional best score still import and derive it from history", () => {
  const empty = createProfile();
  delete empty.bestExamScore;
  assert.equal(normalizeProfile(empty).bestExamScore, null);
  const legacy = recordExam(completedProfile(), 27);
  delete legacy.bestExamScore;
  assert.equal(normalizeProfile(legacy).bestExamScore, 27);
  legacy.bestExamScore = 12;
  assert.equal(normalizeProfile(legacy).bestExamScore, 27);
  legacy.bestExamScore = 35;
  assert.equal(normalizeProfile(legacy).bestExamScore, 35);
  legacy.bestExamScore = null;
  assert.equal(normalizeProfile(legacy).bestExamScore, 27);
  legacy.examResults = Array.from({ length: 21 }, (_, index) => ({
    score: index === 0 ? 35 : 0,
    total: 35,
    completedAt: legacy.createdAt,
  }));
  delete legacy.bestExamScore;
  const normalized = normalizeProfile(legacy);
  assert.equal(normalized.examResults.length, 20);
  assert.equal(normalized.bestExamScore, 35);
});

test("invalid optional best exam scores and locked-course exam achievements are rejected", () => {
  for (const score of [-1, 36, 2.5, "35", false, NaN, Infinity]) {
    const candidate = completedProfile();
    candidate.bestExamScore = score;
    assert.throws(() => normalizeProfile(candidate), /Falsches Profil/);
  }
  const locked = createProfile();
  locked.bestExamScore = 0;
  assert.throws(() => normalizeProfile(locked), /Test ist erst/);
});

test("name updates trim whitespace and validate length without mutating the profile", () => {
  const profile = createProfile();
  assert.equal(setProfileName(profile, "Nurlan").name, "Nurlan");
  assert.equal(setProfileName(profile, "⚡".repeat(32)).name, "⚡".repeat(32));
  assert.equal(profile.name, "Entdecker");
  for (const name of ["", "   ", "a".repeat(33), null, 123, "Name\nAndere"]) {
    assert.throws(() => setProfileName(profile, name), /Name/);
  }
});

test("bookmarks toggle immutably and cannot refer to unknown lessons", () => {
  const profile = createProfile();
  const bookmarked = toggleBookmark(profile, "ohm");
  assert.deepEqual(profile.bookmarks, []);
  assert.deepEqual(bookmarked.bookmarks, ["ohm"]);
  assert.deepEqual(toggleBookmark(bookmarked, "ohm").bookmarks, []);
  assert.throws(
    () => toggleBookmark(profile, "__proto__"),
    /unbekanntes Thema/,
  );
});

test("a JSON export round-trips safely and unrelated properties are discarded", () => {
  let profile = setProfileName(completedProfile(), "Student");
  profile = toggleBookmark(profile, "field");
  profile = recordExam(profile, 27);
  const imported = JSON.parse(JSON.stringify(profile));
  imported.admin = true;
  imported.results.current.awardedXp = 100000;
  imported.bookmarks.push("field");
  const normalized = normalizeProfile(imported);
  assert.deepEqual(normalized, profile);
  normalized.results.current.score = 0;
  assert.equal(imported.results.current.score, 4);
});

test("corrupt versions, shapes, IDs, dates and numeric values never become progress", () => {
  const valid = recordLesson(createProfile(), "current", 5);
  const mutate = (change) => {
    const candidate = structuredClone(valid);
    change(candidate);
    return candidate;
  };
  const invalidProfiles = [
    null,
    [],
    {},
    mutate((p) => {
      p.version = 2;
    }),
    mutate((p) => {
      p.version = "1";
    }),
    mutate((p) => {
      p.lastLesson = "unknown";
    }),
    mutate((p) => {
      p.bookmarks = {};
    }),
    mutate((p) => {
      p.bookmarks = Array(1);
    }),
    mutate((p) => {
      p.bookmarks = ["unknown"];
    }),
    mutate((p) => {
      p.results = [];
    }),
    mutate((p) => {
      p.results.unknown = p.results.current;
    }),
    mutate((p) => {
      p.results.current = [];
    }),
    mutate((p) => {
      p.results.current.score = 6;
    }),
    mutate((p) => {
      p.results.current.score = -1;
    }),
    mutate((p) => {
      p.results.current.score = "5";
    }),
    mutate((p) => {
      p.results.current.score = 4.5;
    }),
    mutate((p) => {
      p.results.current.total = 4;
    }),
    mutate((p) => {
      p.results.current.attempts = 0;
    }),
    mutate((p) => {
      p.results.current.attempts = 1.5;
    }),
    mutate((p) => {
      p.results.current.attempts = Number.MAX_SAFE_INTEGER + 1;
    }),
    mutate((p) => {
      p.results.current.completedAt = "2026-02-31T00:00:00.000Z";
    }),
    mutate((p) => {
      p.createdAt = "not-a-date";
    }),
    mutate((p) => {
      p.examResults = {};
    }),
    mutate((p) => {
      p.examResults = Array(1);
    }),
    mutate((p) => {
      p.examResults = [{ score: 35, total: 35, completedAt: p.createdAt }];
    }),
  ];
  for (const profile of invalidProfiles) {
    assert.throws(() => normalizeProfile(profile), /Falsches Profil/);
  }
});

test("invalid lesson scores and exam imports are rejected at the model boundary", () => {
  for (const score of [-1, 6, 4.5, "5", NaN, Infinity]) {
    assert.throws(
      () => recordLesson(createProfile(), "current", score),
      /Punktzahl/,
    );
  }
  assert.throws(
    () => recordLesson(createProfile(), "other", 5),
    /unbekanntes Thema/,
  );
  const profile = recordExam(completedProfile(), 20);
  for (const change of [
    (p) => {
      p.examResults[0].score = 36;
    },
    (p) => {
      p.examResults[0].total = 5;
    },
    (p) => {
      p.examResults[0].completedAt = null;
    },
  ]) {
    const candidate = structuredClone(profile);
    change(candidate);
    assert.throws(() => normalizeProfile(candidate), /Falsches Profil/);
  }
});
