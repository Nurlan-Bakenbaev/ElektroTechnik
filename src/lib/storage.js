export function loadProfileFromStorage(key) {
  try {
    const stored =
      globalThis.localStorage && globalThis.localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    // Bubble up a simple error for the caller to handle
    throw new Error("Speicher konnte nicht gelesen werden");
  }
}

export function saveProfileToStorage(key, profile) {
  try {
    if (!globalThis.localStorage)
      throw new Error("Kein localStorage verfügbar");
    globalThis.localStorage.setItem(key, JSON.stringify(profile));
  } catch (e) {
    throw new Error("Speichern fehlgeschlagen");
  }
}

export function removeAttemptKeys(prefix = "volt-academy:attempt:") {
  try {
    if (!globalThis.localStorage) return;
    const ls = globalThis.localStorage;
    const keys = [];
    for (let i = 0; i < ls.length; i++) keys.push(ls.key(i));
    keys
      .filter((k) => typeof k === "string" && k.startsWith(prefix))
      .forEach((k) => ls.removeItem(k));
  } catch (e) {
    // best-effort removal; swallow errors
  }
}
