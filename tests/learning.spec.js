import { test, expect } from "@playwright/test";
import { lessons, allTerms } from "../src/data/course.js";
import { examQuestions } from "../src/data/exam.js";
import { STORAGE_KEY } from "../src/lib/progress.js";

function watchErrors(page) {
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("console", (message) => {
    if (message.type() === "error") errors.push(message.text());
  });
  return errors;
}

async function visit(page, route = "home") {
  const basePath = new URL(
    process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
  ).pathname.replace(/\/$/, "");
  await page.goto(`${basePath}/#/${route}`);
  await expect(page.getByRole("main")).toBeVisible();
}

async function readProfile(page) {
  return page.evaluate(
    (key) => JSON.parse(localStorage.getItem(key) || "null"),
    STORAGE_KEY,
  );
}

function contrastRatio(foreground, background) {
  const luminance = (color) => {
    const channels = color
      .match(/\d+/g)
      .map(Number)
      .map((value) => {
        const channel = value / 255;
        return channel <= 0.04045
          ? channel / 12.92
          : ((channel + 0.055) / 1.055) ** 2.4;
      });
    return channels[0] * 0.2126 + channels[1] * 0.7152 + channels[2] * 0.0722;
  };
  const values = [luminance(foreground), luminance(background)].sort(
    (a, b) => b - a,
  );
  return (values[0] + 0.05) / (values[1] + 0.05);
}

async function openLessonQuiz(page, lesson) {
  await visit(page, `lesson/${lesson.id}`);
  await page.getByRole("tab", { name: "Wissenstest", exact: true }).click();
  await page.getByRole("button", { name: "Test starten", exact: true }).click();
}

async function answerQuestion(page, question, { correct = true } = {}) {
  await expect(page.locator("#quiz-question")).toHaveText(question.question);
  if (question.type === "choice") {
    const answer = correct
      ? question.answer
      : (question.answer + 1) % question.options.length;
    // Index by the documented option order, without relying on the decorative letter in the label.
    await page.getByRole("radio").nth(answer).check();
  } else {
    const value = correct
      ? question.answer
      : question.answer + Math.max(1, Math.abs(question.answer));
    await page
      .getByPlaceholder("Nummer eingeben", { exact: true })
      .fill(String(value).replace(".", ","));
  }
  await page
    .getByRole("button", { name: "Antwort prüfen", exact: true })
    .click();
  if (correct)
    await expect(
      page.getByRole("status").filter({ hasText: "Das stimmt!" }),
    ).toBeVisible();
}

async function answerQuestions(page, questions, options) {
  for (const [index, question] of questions.entries()) {
    await answerQuestion(page, question, options);
    await page
      .getByRole("button", {
        name:
          index === questions.length - 1 ? "Ergebnis ansehen" : "Nächste Frage",
        exact: true,
      })
      .click();
  }
}

test("nickname and bookmarks persist after reloading the browser page", async ({
  page,
}) => {
  const errors = watchErrors(page);
  await visit(page, "profile");
  await page
    .getByRole("textbox", {
      name: "Wie heißt du?",
      exact: true,
    })
    .fill("Nurlan ⚡");
  await page.getByRole("button", { name: "Speichern", exact: true }).click();
  await expect(
    page.getByRole("heading", { name: "Nurlan ⚡", exact: true }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("textbox", {
      name: "Wie heißt du?",
      exact: true,
    }),
  ).toHaveValue("Nurlan ⚡");

  await visit(page, `lesson/${lessons[0].id}`);
  await page.getByRole("button", { name: "Speichern", exact: true }).click();
  await expect(
    page.getByRole("button", { name: "Mit Lesezeichen versehen", exact: true }),
  ).toBeVisible();
  await page.reload();
  await expect(
    page.getByRole("button", { name: "Mit Lesezeichen versehen", exact: true }),
  ).toBeVisible();
  await page.getByRole("link", { name: /^Merkliste/ }).click();
  await expect(page.locator(".lesson-card-title")).toHaveCount(1);
  await expect(page.locator(".lesson-card-title")).toContainText(
    lessons[0].title,
  );
  expect((await readProfile(page)).bookmarks).toEqual([lessons[0].id]);
  await page
    .getByRole("button", {
      name: `Lesezeichen löschen: ${lessons[0].title}`,
      exact: true,
    })
    .click();
  await page.reload();
  await expect(
    page.getByRole("heading", {
      name: "Alles, was Sie brauchen, wird hier sein.",
      exact: true,
    }),
  ).toBeVisible();
  expect((await readProfile(page)).bookmarks).toEqual([]);
  expect(errors).toEqual([]);
});

test("quiz resumes an unfinished attempt and retains its best score without duplicate XP", async ({
  page,
}) => {
  const errors = watchErrors(page);
  const lesson = lessons[0];
  await openLessonQuiz(page, lesson);
  await answerQuestion(page, lesson.quiz[0]);
  await page
    .getByRole("button", { name: "Nächste Frage", exact: true })
    .click();
  await page.reload();
  await page.getByRole("tab", { name: "Wissenstest", exact: true }).click();
  await page
    .getByRole("button", { name: "Weiter · 2 von 5", exact: true })
    .click();
  for (const [index, question] of lesson.quiz.slice(1).entries()) {
    await answerQuestion(page, question);
    await page
      .getByRole("button", {
        name: index === 3 ? "Ergebnis ansehen" : "Nächste Frage",
        exact: true,
      })
      .click();
  }
  await expect(
    page.getByRole("heading", {
      name: "Ein weiteres Thema behandelt.",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".xp-indicator")).toHaveText("100 XP");
  await page.reload();
  await expect(
    page.getByText("Bestes Ergebnis: 5/5", { exact: true }),
  ).toBeVisible();
  await page.getByRole("tab", { name: "Wissenstest", exact: true }).click();
  await page.getByRole("button", { name: "Test starten", exact: true }).click();
  await answerQuestions(page, lesson.quiz, { correct: false });
  await expect(
    page.getByRole("heading", {
      name: "Schöner Versuch. Sollen wir unser Wissen festigen?",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".xp-indicator")).toHaveText("100 XP");
  const profile = await readProfile(page);
  expect(profile.results[lesson.id]).toMatchObject({
    score: 5,
    total: 5,
    attempts: 2,
  });
  expect(errors).toEqual([]);
});

test("all 65 lesson questions unlock the 35-question exam, solutions and attempt history", async ({
  page,
}) => {
  test.setTimeout(240_000);
  const errors = watchErrors(page);
  await visit(page, "exam");
  await expect(
    page.getByRole("heading", {
      name: "Lassen Sie uns zunächst die gesamte Kette zusammenbauen.",
      exact: true,
    }),
  ).toBeVisible();
  await expect(
    page.getByRole("button", { name: "Test starten", exact: true }),
  ).toHaveCount(0);
  for (const lesson of lessons) {
    await openLessonQuiz(page, lesson);
    await answerQuestions(page, lesson.quiz);
    await expect(
      page.getByRole("heading", {
        name: "Ein weiteres Thema behandelt.",
        exact: true,
      }),
    ).toBeVisible();
  }
  await expect(page.locator(".xp-indicator")).toHaveText("1300 XP");
  await visit(page, "exam");
  await expect(
    page.getByText(
      "Alle 13 Themen wurden gemeistert. Sie sind bereit für die Abschlussprüfung.",
      { exact: true },
    ),
  ).toBeVisible();
  await page.getByRole("button", { name: "Test starten", exact: true }).click();
  await answerQuestions(page, examQuestions);
  await expect(
    page.getByRole("heading", {
      name: "Du bist den ganzen Weg gekommen!",
      exact: true,
    }),
  ).toBeVisible();
  await expect(page.locator(".result-score")).toContainText("35 / 35");
  await expect(page.locator(".review-list details")).toHaveCount(35);
  await page.locator(".review-list summary").first().click();
  await expect(page.locator(".review-body").first()).toContainText(
    examQuestions[0].explanation,
  );
  await expect(page.locator(".xp-indicator")).toHaveText("1650 XP");
  await expect(
    page.getByRole("heading", { name: "Geschichte der Versuche", exact: true }),
  ).toBeVisible();
  await expect(page.locator(".exam-history")).toContainText("35/35");

  // A complete lower-scoring retry proves attempts do not mint XP a second time.
  await page
    .getByRole("button", { name: "Gehen Sie noch einmal durch", exact: true })
    .click();
  await answerQuestions(page, examQuestions, { correct: false });
  await expect(page.locator(".xp-indicator")).toHaveText("1650 XP");
  await page.reload();
  await expect(
    page.getByText("Bestes Ergebnis: 35/35", { exact: true }),
  ).toBeVisible();
  await expect(page.locator(".exam-history > div")).toHaveCount(2);
  const profile = await readProfile(page);
  expect(Object.keys(profile.results)).toHaveLength(13);
  expect(profile.examResults.map(({ score }) => score)).toEqual([35, 0]);
  expect(errors).toEqual([]);
});

test("glossary finds German terms, follows the lesson link and handles an empty search", async ({
  page,
}) => {
  const errors = watchErrors(page);
  const term =
    allTerms.find((entry) => entry.german === "Stromstärke") || allTerms[0];
  await visit(page, "glossary");
  const search = page.getByRole("textbox", {
    name: "Suchbegriff",
    exact: true,
  });
  await search.fill(term.german);
  const match = page.locator(".glossary-list article").filter({
    has: page.getByRole("heading", { name: new RegExp(`^${term.term}`) }),
  });
  await expect(match).toHaveCount(1);
  await expect(match).toContainText(term.definition);
  await match.getByRole("link", { name: /^Zur Lektion/ }).click();
  await expect(page).toHaveURL(new RegExp(`#\/lesson\/${term.lessonId}$`));
  await visit(page, "glossary");
  await search.fill("nicht existierender Begriff12345");
  await expect(
    page.getByRole("heading", {
      name: "Einen solchen Begriff gibt es noch nicht.",
      exact: true,
    }),
  ).toBeVisible();
  await page
    .getByRole("button", { name: "Suche löschen", exact: true })
    .click();
  await expect(page.locator(".glossary-list article").first()).toBeVisible();
  expect(errors).toEqual([]);
});

test("every lesson has an interactive lab whose sliders update its model without browser errors", async ({
  page,
}) => {
  const errors = watchErrors(page);
  for (const lesson of lessons) {
    await visit(page, `lesson/${lesson.id}`);
    await page.getByRole("tab", { name: "Interaktiv", exact: true }).click();
    const lab = page.getByRole("region", {
      name: "Interaktives Labor",
      exact: true,
    });
    await expect(lab).toBeVisible();
    if (lesson.id === "current") {
      await expect(
        lab.getByRole("slider", {
          name: "Elektrische Ladung Q (Coulomb)",
          exact: true,
        }),
      ).toBeVisible();
      await expect(lab).toContainText("Coulomb (C)");
      const conductor = lab.getByRole("img", { name: /^Metallleiter:/ });
      await expect(conductor).toContainText(
        "Technische Stromrichtung: Plus → Minus",
      );
      await expect(conductor).toContainText("Elektronenbewegung: Minus → Plus");
      await expect(conductor.locator("text.lab-svg-symbol")).toHaveCount(6);
      for (const carrier of await conductor
        .locator("text.lab-svg-symbol")
        .all()) {
        await expect(carrier).toHaveText("−");
      }
    }
    if (lesson.id === "energy") {
      await expect(lab).toContainText("Wh");
    }
    if (lesson.id === "magnetic-quantities") {
      await expect(lab.locator(".lab-result")).toContainText("µWb");
    }
    const sliders = lab.getByRole("slider");
    expect(await sliders.count()).toBeGreaterThan(0);
    for (const control of await lab.locator(".lab-control").all()) {
      const slider = control.getByRole("slider");
      const output = control.locator("output");
      const previousOutput = await output.textContent();
      const before = await slider.inputValue();
      const maximum = await slider.getAttribute("max");
      const minimum = await slider.getAttribute("min");
      await slider.focus();
      await slider.press(before === maximum ? "Home" : "End");
      await expect(slider).toHaveValue(before === maximum ? minimum : maximum);
      await expect(output).not.toHaveText(previousOutput);
      await expect(lab.locator(".lab-result")).not.toContainText(
        /NaN|Infinity|undefined/,
      );
    }
  }
  expect(errors).toEqual([]);
});

test("mobile layout stays within 375px and its navigation opens and closes", async ({
  page,
}) => {
  const errors = watchErrors(page);
  await page.setViewportSize({ width: 375, height: 812 });
  await visit(page);
  const menu = page.getByRole("button", { name: "Menü öffnen", exact: true });
  await expect(menu).toBeVisible();
  await menu.click();
  await expect(menu).toHaveAttribute("aria-expanded", "true");
  await page.getByRole("link", { name: "Lernpfad", exact: true }).click();
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  await menu.click();
  await page
    .getByRole("button", { name: "Menü schließen", exact: true })
    .click({ position: { x: 365, y: 400 } });
  await expect(menu).toHaveAttribute("aria-expanded", "false");
  for (const route of [
    "home",
    "curriculum",
    "glossary",
    "profile",
    "exam",
    "lesson/current",
  ]) {
    await visit(page, route);
    const dimensions = await page.evaluate(() => ({
      width: document.documentElement.clientWidth,
      scroll: document.documentElement.scrollWidth,
    }));
    expect(
      dimensions.scroll,
      `${route} must not overflow horizontally`,
    ).toBeLessThanOrEqual(dimensions.width + 1);
  }
  await page.getByRole("tab", { name: "Interaktiv", exact: true }).click();
  await expect(
    page.getByRole("region", { name: "Interaktives Labor", exact: true }),
  ).toBeVisible();
  expect(
    await page.evaluate(() => document.documentElement.scrollWidth),
  ).toBeLessThanOrEqual(376);
  expect(errors).toEqual([]);
});

test("malformed JSON and invalid imported profiles leave the current profile intact", async ({
  page,
}) => {
  const errors = watchErrors(page);
  await visit(page, "profile");
  await page
    .getByRole("textbox", {
      name: "Wie heißt du?",
      exact: true,
    })
    .fill("Mein Profil");
  await page.getByRole("button", { name: "Speichern", exact: true }).click();
  const before = await readProfile(page);
  for (const body of [
    "{ broken json",
    JSON.stringify({ version: 999, name: "Ersatz" }),
  ]) {
    const chooserPromise = page.waitForEvent("filechooser");
    await page
      .getByRole("button", { name: "Aus Datei laden", exact: true })
      .click();
    const chooser = await chooserPromise;
    await chooser.setFiles({
      name: "progress.json",
      mimeType: "application/json",
      buffer: Buffer.from(body),
    });
    await expect(
      page
        .getByRole("alert")
        .filter({ hasText: "Datei konnte nicht importiert werden" }),
    ).toBeVisible();
    await expect(
      page.getByRole("button", { name: "Ja, wiederherstellen", exact: true }),
    ).toHaveCount(0);
    expect(await readProfile(page)).toEqual(before);
  }
  await page.reload();
  await expect(
    page.getByRole("textbox", {
      name: "Wie heißt du?",
      exact: true,
    }),
  ).toHaveValue("Mein Profil");
  expect(errors).toEqual([]);
});

test("beginner concepts, formula reference and all eight textbook illustrations render", async ({
  page,
}) => {
  const errors = watchErrors(page);
  await visit(page, "essentials");
  await expect(page.locator(".essentials-topics button")).toHaveCount(12);
  await expect(page.locator(".origin-card")).toContainText(
    "Es sind bereits Ladungen im Kabel vorhanden",
  );
  await page.locator(".essential-comparison summary").click();
  await expect(page.locator(".essential-comparison")).toHaveAttribute(
    "open",
    "",
  );
  await visit(page, "formulas");
  await expect(page.locator(".reference-formula")).toHaveCount(20);
  for (const id of [
    "current",
    "circuits",
    "resistance",
    "field",
    "capacitor",
    "magnets",
    "electromagnetism",
    "magnetic-quantities",
  ]) {
    await visit(page, `lesson/${id}`);
    const image = page.locator(".textbook-image");
    await image.scrollIntoViewIfNeeded();
    await expect
      .poll(() => image.evaluate((img) => img.complete && img.naturalWidth > 0))
      .toBe(true);
    await expect(page.locator(".lesson-figure figcaption")).toContainText(
      "CC BY 4.0",
    );
  }
  expect(errors).toEqual([]);
});

test("export, confirmed restoration and keyboard-safe reset preserve user control", async ({
  page,
}) => {
  const errors = watchErrors(page);
  await visit(page, "profile");
  await page
    .getByRole("textbox", {
      name: "Wie heißt du?",
      exact: true,
    })
    .fill("Mein gespeicherter Kurs");
  await page.getByRole("button", { name: "Speichern", exact: true }).click();
  const saved = await readProfile(page);
  const downloadPromise = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "Download-Fortschritt", exact: true })
    .click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("volt-progress.json");
  const stream = await download.createReadStream();
  const chunks = [];
  for await (const chunk of stream) chunks.push(chunk);
  expect(JSON.parse(Buffer.concat(chunks).toString())).toEqual(saved);
  await page
    .getByRole("textbox", {
      name: "Wie heißt du?",
      exact: true,
    })
    .fill("Temporärer Name");
  await page.getByRole("button", { name: "Speichern", exact: true }).click();
  const chooserPromise = page.waitForEvent("filechooser");
  await page
    .getByRole("button", { name: "Aus Datei laden", exact: true })
    .click();
  await (
    await chooserPromise
  ).setFiles({
    name: "volt-progress.json",
    mimeType: "application/json",
    buffer: Buffer.from(JSON.stringify(saved)),
  });
  expect((await readProfile(page)).name).toBe("Temporärer Name");
  await page
    .getByRole("button", { name: "Ja, wiederherstellen", exact: true })
    .click();
  expect(await readProfile(page)).toEqual(saved);
  await page
    .getByRole("button", { name: "Fortschritt zurücksetzen", exact: true })
    .click();
  await expect(page.getByRole("dialog")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.getByRole("dialog")).toHaveCount(0);
  expect(await readProfile(page)).toEqual(saved);
  await page
    .getByRole("button", { name: "Fortschritt zurücksetzen", exact: true })
    .click();
  await page
    .getByRole("button", { name: "Daten löschen", exact: true })
    .click();
  expect((await readProfile(page)).name).toBe("Entdecker");
  await page.reload();
  await expect(
    page.getByRole("textbox", {
      name: "Wie heißt du?",
      exact: true,
    }),
  ).toHaveValue("Entdecker");
  expect(errors).toEqual([]);
});

test("German typography, local equation images and reduced-motion scrolling work together", async ({
  page,
}) => {
  const errors = watchErrors(page);
  await visit(page, "lesson/field");
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
  await expect(page.locator("html")).toHaveClass(/lenis/);
  expect(
    await page
      .locator(".textbook-section > p")
      .first()
      .evaluate((e) => parseFloat(getComputedStyle(e).fontSize)),
  ).toBeGreaterThanOrEqual(17);
  await page
    .locator(".textbook-section .lesson-depth")
    .filter({ has: page.locator(".formula-image") })
    .first()
    .locator("summary")
    .click();
  const formula = page.locator(".formula-image img").first();
  await formula.scrollIntoViewIfNeeded();
  await expect
    .poll(() => formula.evaluate((e) => e.complete && e.naturalWidth > 0))
    .toBe(true);
  await expect(formula).toHaveAttribute(
    "src",
    /\/images\/formulas\/wiki-[a-f0-9]+\.svg$/,
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
  expect(errors).toEqual([]);
});

test("redesigned typography, interactive contrast and reduced-motion entrance remain accessible", async ({
  page,
}) => {
  const errors = watchErrors(page);
  await visit(page, "tests");
  const styles = await page.evaluate(() =>
    [
      ".button-dark",
      ".button-light",
      ".sidebar",
      ".main-nav > a.nav-active",
    ].map((selector) => {
      const element = document.querySelector(selector);
      const style = getComputedStyle(element);
      return {
        selector,
        foreground: style.color,
        background: style.backgroundColor,
      };
    }),
  );
  for (const style of styles) {
    expect(
      contrastRatio(style.foreground, style.background),
      `${style.selector} should have readable text contrast`,
    ).toBeGreaterThanOrEqual(4.5);
  }
  await visit(page);
  expect(
    await page
      .locator("body")
      .evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
  ).toBeGreaterThanOrEqual(17);
  expect(
    await page
      .locator(".next-section .section-heading h2")
      .evaluate((element) => parseFloat(getComputedStyle(element).fontSize)),
  ).toBeGreaterThanOrEqual(17);

  await page.emulateMedia({ reducedMotion: "reduce" });
  await expect(page.locator("html")).not.toHaveClass(/lenis/);
  expect(
    await page
      .locator(".dashboard-title")
      .evaluate((element) => getComputedStyle(element).animationName),
  ).toBe("none");
  expect(errors).toEqual([]);
});

test("merged local registration trims names, persists them and supports cancellation", async ({
  page,
}) => {
  const errors = watchErrors(page);
  await visit(page);
  await page.getByRole("button", { name: "Registrieren", exact: true }).click();
  const dialog = page.getByRole("dialog", { name: "Registrierung (lokal)" });
  await expect(dialog).toBeVisible();
  await dialog.getByLabel("Name", { exact: true }).fill("   ");
  await dialog.getByRole("checkbox").check();
  await expect(
    dialog.getByRole("button", { name: "Registrieren", exact: true }),
  ).toBeDisabled();
  await dialog.getByLabel("Name", { exact: true }).fill("  Volt Lerner  ");
  await dialog
    .getByRole("button", { name: "Registrieren", exact: true })
    .click();
  await expect(dialog).not.toBeVisible();
  await page.reload();
  await expect(page.locator(".profile-button strong")).toHaveText(
    "Volt Lerner",
  );
  expect((await readProfile(page)).name).toBe("Volt Lerner");
  await page.getByRole("button", { name: "Registrieren", exact: true }).click();
  await page.keyboard.press("Escape");
  await expect(dialog).not.toBeVisible();
  expect(errors).toEqual([]);
});
