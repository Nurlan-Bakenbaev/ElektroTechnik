export function loadProfileFromStorage(key) {
  try {
    const stored = globalThis.localStorage && globalThis.localStorage.getItem(key);
    return stored ? JSON.parse(stored) : null;
  } catch (e) {
    // Bubble up a simple error for the caller to handle
    throw new Error("Speicher konnte nicht gelesen werden");
  }
}

export function saveProfileToStorage(key, profile) {
  try {
    if (!globalThis.localStorage) throw new Error("Kein localStorage verfügbar");
    globalThis.localStorage.setItem(key, JSON.stringify(profile));
  } catch (e) {
    throw new Error("Speichern fehlgeschlagen");
  }
}

export function removeAttemptKeys(prefix = "volt-academy:attempt:") {
  try {
    if (!globalThis.localStorage) return;
    const storage = globalThis.localStorage;
    const keys = [];
    for (let i = 0; i < storage.length; i += 1) {
      const k = storage.key(i);
      if (k && k.startsWith(prefix)) keys.push(k);
    }
    keys.forEach((k) => storage.removeItem(k));
  } catch (e) {
    // best-effort removal; swallow errors
  }
}
