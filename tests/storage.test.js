import test from "node:test";
import assert from "node:assert/strict";
import {
  loadProfileFromStorage,
  saveProfileToStorage,
  removeAttemptKeys,
} from "../src/lib/storage.js";

const KEY = "test:volt-storage";

test("saveProfileToStorage writes JSON to localStorage and loadProfileFromStorage reads it back", () => {
  const store = {};
  global.localStorage = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => {
      store[k] = v;
    },
    removeItem: (k) => delete store[k],
  };
  const profile = { name: "Test", version: 1 };
  saveProfileToStorage(KEY, profile);
  const raw = global.localStorage.getItem(KEY);
  assert.equal(typeof raw, "string");
  const parsed = loadProfileFromStorage(KEY);
  assert.deepEqual(parsed, profile);
});

test("loadProfileFromStorage returns null when nothing stored", () => {
  global.localStorage = {
    getItem: () => null,
  };
  assert.equal(loadProfileFromStorage(KEY), null);
});

test("saveProfileToStorage throws when localStorage.setItem throws", () => {
  global.localStorage = {
    setItem: () => {
      throw new Error("quota");
    },
  };
  let thrown = false;
  try {
    saveProfileToStorage(KEY, { name: "x" });
  } catch (e) {
    thrown = true;
    assert.match(e.message, /Speichern fehlgeschlagen/);
  }
  assert.ok(thrown);
});

test("removeAttemptKeys removes keys with the prefix", () => {
  const store = {
    "volt-academy:attempt:1": "a",
    "volt-academy:attempt:abc": "b",
    other: "c",
  };
  global.localStorage = {
    getItem: (k) => (k in store ? store[k] : null),
    setItem: (k, v) => {
      store[k] = v;
    },
    removeItem: (k) => delete store[k],
    get length() {
      return Object.keys(store).length;
    },
    key: (i) => Object.keys(store)[i] ?? null,
  };
  removeAttemptKeys();
  assert.ok(!("volt-academy:attempt:1" in store));
  assert.ok(!("volt-academy:attempt:abc" in store));
  assert.ok("other" in store);
});
