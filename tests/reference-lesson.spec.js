import { test, expect } from "@playwright/test";

async function open(page) {
  await page.emulateMedia({ reducedMotion: "reduce" });
  const basePath = new URL(
    process.env.PLAYWRIGHT_BASE_URL || "http://127.0.0.1:3000",
  ).pathname.replace(/\/$/, "");
  await page.goto(`${basePath}/#/lesson/ohm`);
  await expect(
    page.getByRole("heading", { name: "Strom verstehen. Mit einem Dreh." }),
  ).toBeVisible();
}
const guidance = (page) =>
  page.getByRole("complementary", { name: "Lernbegleitung" });
const next = (page) =>
  guidance(page).getByRole("button", { name: "Weiter", exact: true }).click();
async function select(page, option) {
  const panel = guidance(page)
    .locator(".ohm-check")
    .filter({ has: page.getByRole("radio", { name: option, exact: true }) });
  await panel.getByRole("radio", { name: option, exact: true }).check();
  await panel
    .getByRole("button", { name: "Antwort prüfen", exact: true })
    .click();
}

test("reference lesson performs a real experiment, retains state and checks equivalent units", async ({
  page,
}) => {
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  await open(page);
  await next(page);
  await select(page, "Ladung pro Zeit");
  await next(page);
  await page
    .getByRole("button", { name: "Schalter geschlossen", exact: true })
    .click();
  await expect(page.getByLabel("STROMSTÄRKE", { exact: true })).toHaveText(
    "0 A",
  );
  await expect(page.getByLabel("QUELLENSPANNUNG", { exact: true })).toHaveText(
    "12 V",
  );
  await page
    .getByRole("button", { name: "Schalter offen", exact: true })
    .click();
  await next(page);
  await select(page, "I halbiert sich.");
  await next(page);
  await next(page);
  await expect(guidance(page).getByRole("alert")).toContainText(
    "Schließe zuerst",
  );
  const slider = page.getByRole("slider", { name: /Widerstand R/ });
  await slider.focus();
  await slider.press("Home");
  await page
    .getByRole("button", { name: "Messwert übernehmen", exact: true })
    .click();
  for (let i = 0; i < 6; i++) await slider.press("ArrowRight");
  await page
    .getByRole("button", { name: "Messwert übernehmen", exact: true })
    .click();
  for (let i = 0; i < 12; i++) await slider.press("ArrowRight");
  await expect(page.getByLabel("STROMSTÄRKE", { exact: true })).toHaveText(
    "0,5 A",
  );
  await page
    .getByRole("button", { name: "Messwert übernehmen", exact: true })
    .click();
  await expect(page.locator(".ohm-measurements tbody tr")).toHaveCount(3);
  await expect(page.locator(".ohm-measurements tbody tr").last()).toContainText(
    "0,5",
  );
  await page.reload();
  await expect(
    guidance(page).getByRole("heading", { name: "Messen statt raten" }),
  ).toBeVisible();
  await expect(slider).toHaveValue("24");
  await expect(page.locator(".ohm-measurements tbody tr")).toHaveCount(3);
  await next(page);
  await next(page);
  await page.getByRole("button", { name: "R", exact: true }).click();
  await expect(page.locator(".ohm-concept")).toContainText("Ohm (Ω)");
  await next(page);
  await select(page, "Stromstärke I");
  await select(page, "Spannung durch Widerstand teilen");
  const result = guidance(page).getByRole("textbox");
  await result.fill("3000 A");
  await guidance(page)
    .getByRole("button", { name: "Antwort prüfen", exact: true })
    .click();
  await expect(guidance(page).getByRole("status").last()).toContainText(
    "Vorsatz",
  );
  await result.fill("3000 mA");
  await guidance(page)
    .getByRole("button", { name: "Erneut prüfen", exact: true })
    .click();
  await expect(guidance(page).getByRole("status").last()).toContainText(
    "Verstanden",
  );
  await next(page);
  const questions = guidance(page).locator(".ohm-check");
  for (const [index, answer] of ["500 mA", "6 V", "0,2 kΩ"].entries()) {
    await questions.nth(index).getByRole("textbox").fill(answer);
    await questions
      .nth(index)
      .getByRole("button", { name: "Antwort prüfen", exact: true })
      .click();
  }
  await next(page);
  await select(page, "In Reihe mit dem Widerstand");
  for (const [label, value] of [
    ["Spannung U", "1"],
    ["Stromstärke I", "0"],
    ["Widerstand R", "2"],
  ])
    await guidance(page)
      .getByRole("combobox", { name: label, exact: true })
      .selectOption(value);
  await guidance(page)
    .locator(".ohm-check")
    .nth(1)
    .getByRole("button", { name: "Antwort prüfen" })
    .click();
  await guidance(page).getByRole("checkbox").nth(0).check();
  await guidance(page).getByRole("checkbox").nth(1).check();
  await guidance(page)
    .locator(".ohm-check")
    .nth(2)
    .getByRole("button", { name: "Antwort prüfen" })
    .click();
  await select(page, "Die Messwerte passen zu konstanten 20 Ω.");
  await select(page, "kΩ wurden nicht in Ω umgerechnet.");
  await next(page);
  await guidance(page)
    .getByRole("textbox", { name: "Deine Erklärung" })
    .fill(
      "Bei gleicher Spannung begrenzt der größere Widerstand den Ladungsfluss pro Zeit.",
    );
  await next(page);
  await guidance(page).getByRole("button", { name: "Zum Wissenstest" }).click();
  await expect(
    page.getByRole("button", { name: "Test starten", exact: true }),
  ).toBeVisible();
  expect(errors).toEqual([]);
});

test("workspace recovers from corrupt storage and blocked writes", async ({
  page,
}) => {
  await page.addInitScript(() => {
    localStorage.setItem("volt-academy:lesson:ohm:v2", '{"version":999}');
  });
  await open(page);
  await expect(page.locator(".ohm-storage-warning")).toContainText(
    "konnte nicht geladen werden",
  );
  await expect(page.getByRole("slider", { name: /Spannung U/ })).toHaveValue(
    "12",
  );
  await page.addInitScript(() => {
    Storage.prototype.setItem = function () {
      throw new DOMException("Storage denied", "QuotaExceededError");
    };
  });
  await page.reload();
  await expect(
    page.getByRole("alert").filter({ hasText: "blockiert" }),
  ).toBeVisible();
  await expect(
    page.getByRole("heading", { name: "Die technische Frage" }),
  ).toBeVisible();
});

test("desktop, tablet and mobile workspace have real screenshot evidence and no page overflow", async ({
  page,
}) => {
  await open(page);
  for (const [label, width, height] of [
    ["desktop", 1600, 1100],
    ["tablet", 900, 1100],
    ["mobile", 375, 900],
  ]) {
    await page.setViewportSize({ width, height });
    await expect(
      page.getByRole("slider", { name: /Widerstand R/ }),
    ).toBeAttached();
    await expect
      .poll(() =>
        page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
      )
      .toBe(true);
    await page.screenshot({
      path: `docs/screenshots/ohm-${label}.png`,
      fullPage: true,
    });
  }
  await expect(page.locator(".ohm-flow")).toHaveCSS("animation-name", "none");
});
