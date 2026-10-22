import { test, expect } from "@playwright/test";
import { workshopTasks, workshopFamilies } from "../src/data/workshop-tasks.js";
import { WORKSHOP_KEY } from "../src/lib/workshop.js";
import {
  STORAGE_KEY,
  createProfile,
  recordLesson,
} from "../src/lib/progress.js";
const base = new URL(
  process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
).pathname.replace(/\/$/, "");

test("all 68 exercises accept their authored steps and record completion without course XP", async ({
  page,
}) => {
  test.setTimeout(300000);
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const task of workshopTasks) {
    await page.goto(`${base}/#/workshop/${task.id}`);
    for (const [index, step] of task.steps.entries()) {
      if (step.type === "choice")
        await page
          .locator(".workshop-step")
          .getByRole("radio")
          .nth(step.answer)
          .check();
      else
        await page
          .locator(".workshop-step")
          .getByRole("textbox")
          .fill(String(step.answer).replace(".", ","));
      await page
        .getByRole("button", { name: "Schritt prüfen", exact: true })
        .click();
      await expect(page.locator(".workshop-feedback.correct")).toBeVisible();
      if (index < task.steps.length - 1)
        await page
          .getByRole("button", { name: "Nächster Schritt", exact: true })
          .click();
    }
    await page.getByRole("checkbox").check();
    await page
      .getByRole("button", { name: "Aufgabe abschließen", exact: true })
      .click();
    await expect(
      page.getByRole("region", { name: "Aufgabenergebnis" }),
    ).toContainText("Ohne eingeblendete Hilfe gelöst");
  }
  const saved = await page.evaluate(
    (key) => JSON.parse(localStorage.getItem(key)),
    WORKSHOP_KEY,
  );
  expect(
    Object.values(saved.attempts).filter((attempt) => attempt.submitted),
  ).toHaveLength(workshopTasks.length);
  await expect(page.locator(".xp-indicator")).toHaveText("0 XP");
});

test("workshop backup requires confirmation and invalid data cannot replace attempts", async ({
  page,
}) => {
  await page.goto(`${base}/#/workshop/current-1`);
  await page.getByRole("button", { name: "Hinweis", exact: true }).click();
  const before = await page.evaluate(
    (key) => JSON.parse(localStorage.getItem(key)),
    WORKSHOP_KEY,
  );
  const downloadPromise = page.waitForEvent("download");
  await page
    .getByRole("button", { name: "Werkstatt sichern", exact: true })
    .click();
  const download = await downloadPromise;
  expect(download.suggestedFilename()).toBe("volt-workshop.json");
  for (const [body, valid] of [
    ["{bad", false],
    [JSON.stringify({ version: 1, attempts: {} }), true],
  ]) {
    const chooser = page.waitForEvent("filechooser");
    await page
      .getByRole("button", { name: "Werkstatt-Sicherung laden", exact: true })
      .click();
    await (
      await chooser
    ).setFiles({
      name: "workshop.json",
      mimeType: "application/json",
      buffer: Buffer.from(body),
    });
    if (valid) {
      await expect(
        page.getByRole("region", { name: "Werkstatt-Sicherung bestätigen" }),
      ).toBeVisible();
      expect(
        await page.evaluate(
          (key) => JSON.parse(localStorage.getItem(key)),
          WORKSHOP_KEY,
        ),
      ).toEqual(before);
      await page
        .getByRole("button", { name: "Werkstatt ersetzen", exact: true })
        .click();
      expect(
        await page.evaluate(
          (key) => JSON.parse(localStorage.getItem(key)),
          WORKSHOP_KEY,
        ),
      ).toEqual({ version: 1, attempts: {} });
    } else {
      await expect(
        page.getByRole("status").filter({ hasText: "ungültig" }),
      ).toBeVisible();
      expect(
        await page.evaluate(
          (key) => JSON.parse(localStorage.getItem(key)),
          WORKSHOP_KEY,
        ),
      ).toEqual(before);
    }
  }
});

test("all task families render with a working transfer link and source formula images", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const errors = [];
  page.on("pageerror", (error) => errors.push(error.message));
  for (const family of workshopFamilies) {
    await page.goto(`${base}/#/workshop/${family.id}-1`);
    await expect(page.locator(".workshop-task h2")).toHaveText(family.title);
    await expect(
      page.getByRole("region", { name: "Aktueller Lösungsschritt" }),
    ).toBeVisible();
    await expect(
      page.getByRole("group", { name: "Aufgabe wählen" }).getByRole("link"),
    ).toHaveCount(2);
    const formulas = page.locator(".workshop-formulas");
    if (await formulas.count()) {
      await formulas.locator("summary").click();
      await expect(formulas.locator(".formula-missing")).toHaveCount(0);
      const image = formulas.locator("img").first();
      await image.scrollIntoViewIfNeeded();
      await expect
        .poll(() => image.evaluate((el) => el.complete && el.naturalWidth > 0))
        .toBe(true);
    }
  }
  expect(errors).toEqual([]);
});

test("energy problem checks units, resumes a draft, persists reflection and keeps course scores", async ({
  page,
}) => {
  const profile = recordLesson(createProfile(), "current", 5);
  await page.addInitScript(
    ({ key, profile }) => {
      if (!localStorage.getItem(key))
        localStorage.setItem(key, JSON.stringify(profile));
    },
    { key: STORAGE_KEY, profile },
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${base}/#/workshop/energy-1`);
  await page.getByRole("radio").first().check();
  await page.getByRole("button", { name: "Schritt prüfen" }).click();
  await expect(
    page.getByRole("status").filter({ hasText: "Dieser Schritt stimmt." }),
  ).toBeVisible();
  await page.getByRole("button", { name: "Nächster Schritt" }).click();
  await page
    .getByRole("textbox", { name: "Deine Antwort in h", exact: true })
    .fill("0,75");
  await page.reload();
  await expect(
    page.getByRole("textbox", { name: "Deine Antwort in h", exact: true }),
  ).toHaveValue("0,75");
  await page.getByRole("button", { name: "Schritt prüfen" }).click();
  await page.getByRole("button", { name: "Nächster Schritt" }).click();
  const energy = page.getByRole("textbox", {
    name: "Deine Antwort in kWh",
    exact: true,
  });
  await energy.fill("0,6 kW");
  await page.getByRole("button", { name: "Schritt prüfen" }).click();
  await expect(page.locator(".workshop-feedback[role=alert]")).toContainText(
    "Dimension",
  );
  await energy.fill("600 Wh");
  await page.getByRole("button", { name: "Schritt prüfen" }).click();
  await page.getByRole("button", { name: "Nächster Schritt" }).click();
  await page
    .getByRole("textbox", { name: "Deine Antwort in €", exact: true })
    .fill("0,192");
  await page.getByRole("button", { name: "Schritt prüfen" }).click();
  await page
    .getByRole("textbox", { name: "Eigene Erklärung (optional)" })
    .fill("Leistung und Laufzeit bestimmen zusammen die Energie.");
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Aufgabe abschließen" }).click();
  await expect(
    page.getByRole("region", { name: "Aufgabenergebnis" }),
  ).toContainText("Mit Unterstützung geübt");
  expect(
    await page.evaluate(
      (key) => JSON.parse(localStorage.getItem(key)),
      STORAGE_KEY,
    ),
  ).toEqual(profile);
  await page.reload();
  await expect(
    page.getByRole("region", { name: "Aufgabenergebnis" }),
  ).toBeVisible();
  expect(
    (
      await page.evaluate(
        (key) => JSON.parse(localStorage.getItem(key)),
        WORKSHOP_KEY,
      )
    ).attempts["energy-1"].reflection,
  ).toContain("Laufzeit");
});

test("hints, solution review, calculator and reset have honest progress and accessible controls", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto(`${base}/#/workshop/rearrange-1`);
  await page.getByRole("button", { name: "Hinweis", exact: true }).click();
  await expect(page.locator(".workshop-hint")).toBeVisible();
  const task = workshopTasks.find((task) => task.id === "rearrange-1");
  for (const [index, step] of task.steps.entries()) {
    if (step.type === "choice")
      await page.getByRole("radio").nth(step.answer).check();
    else {
      await page.locator(".workshop-calculator summary").click();
      await page.getByRole("textbox", { name: "Zahlenausdruck" }).fill("12/20");
      await page
        .getByRole("button", { name: "Ausrechnen", exact: true })
        .click();
      await page
        .getByRole("button", { name: "Ins Antwortfeld übernehmen" })
        .click();
    }
    await page.getByRole("button", { name: "Schritt prüfen" }).click();
    if (index < task.steps.length - 1)
      await page.getByRole("button", { name: "Nächster Schritt" }).click();
  }
  await page.getByRole("checkbox").check();
  await page.getByRole("button", { name: "Aufgabe abschließen" }).click();
  await expect(
    page.getByRole("region", { name: "Aufgabenergebnis" }),
  ).toContainText("Mit Unterstützung geübt");
  await page.locator(".workshop-solution summary").click();
  await expect(page.locator(".workshop-solution")).toHaveAttribute("open", "");
  await page.locator(".workshop-task-footer summary").click();
  await page
    .getByRole("button", { name: "Versuch zurücksetzen", exact: true })
    .click();
  await expect(page.locator(".workshop-step-count")).toContainText("Schritt 1");
  await expect(page.locator(".workshop-solution")).not.toHaveAttribute(
    "open",
    "",
  );
});

test("large type and compact navbar stay within small screens, and kW/kWh comparison changes with runtime", async ({
  page,
}) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  for (const width of [320, 375, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 950 });
    await page.goto(`${base}/#/workshop/bridge-1`);
    await page
      .getByRole("button", { name: "Großer Text, 22 Pixel", exact: true })
      .click();
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth <= innerWidth,
      ),
    ).toBe(true);
    await expect(
      page.getByRole("progressbar", { name: "Kursfortschritt" }),
    ).toBeVisible();
  }
  await page.setViewportSize({ width: 375, height: 950 });
  await page.goto(`${base}/#/lesson/energy`);
  const comparison = page.getByRole("region", {
    name: "Kilowatt und Kilowattstunde unterscheiden",
  });
  await comparison.scrollIntoViewIfNeeded();
  await expect(comparison).toContainText("Gleiche Energie");
  await comparison.getByRole("slider").fill("15");
  await expect(comparison.locator(".energy-verdict")).toContainText(
    "weniger Energie",
  );
  await comparison.getByRole("slider").fill("120");
  await expect(comparison.locator(".energy-verdict")).toContainText(
    "mehr Energie",
  );
  expect(
    await page.evaluate(
      () => document.documentElement.scrollWidth <= innerWidth,
    ),
  ).toBe(true);
  await page.screenshot({
    path: "docs/screenshots/energy-comparison-mobile.png",
  });
});
