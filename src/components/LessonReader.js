"use client";

import { useEffect, useState } from "react";
import { Maximize2, Minimize2, Type } from "lucide-react";
import {
  DEFAULT_READER,
  READER_KEY,
  normalizeReaderPreferences,
} from "../lib/reader.js";

export default function LessonReader({ children }) {
  const [preferences, setPreferences] = useState(DEFAULT_READER);
  const [notice, setNotice] = useState("");
  useEffect(() => {
    try {
      const raw = localStorage.getItem(READER_KEY);
      if (raw && raw.length <= 1000)
        setPreferences(normalizeReaderPreferences(JSON.parse(raw)));
    } catch {
      /* Display defaults if an old preference is invalid or unavailable. */
    }
  }, []);

  function update(change) {
    const next = { ...preferences, ...change };
    setPreferences(next);
    try {
      localStorage.setItem(READER_KEY, JSON.stringify(next));
      setNotice("");
    } catch {
      setNotice(
        "Die Leseeinstellung gilt für diese Sitzung. Der Browser erlaubt das Speichern gerade nicht.",
      );
    }
  }

  return (
    <div
      className="lesson-workspace"
      data-reading-size={preferences.size}
      data-reading-focus={preferences.focus}
    >
      <div
        className="reader-toolbar"
        role="region"
        aria-label="Leseeinstellungen"
      >
        <span className="reader-toolbar-label">
          <Type size={18} aria-hidden="true" />
          Lesen
        </span>
        <div
          className="reader-size-buttons"
          role="group"
          aria-label="Schriftgröße"
        >
          <button
            type="button"
            aria-label="Standardtext, 19 Pixel"
            aria-pressed={preferences.size === "standard"}
            onClick={() => update({ size: "standard" })}
          >
            19 px
          </button>
          <button
            type="button"
            aria-label="Großer Text, 22 Pixel"
            aria-pressed={preferences.size === "large"}
            onClick={() => update({ size: "large" })}
          >
            22 px
          </button>
        </div>
        <button
          type="button"
          className="reader-focus"
          aria-pressed={preferences.focus}
          onClick={() => update({ focus: !preferences.focus })}
        >
          {preferences.focus ? (
            <Minimize2 size={17} aria-hidden="true" />
          ) : (
            <Maximize2 size={17} aria-hidden="true" />
          )}
          {preferences.focus ? "Fokus beenden" : "Lesefokus"}
        </button>
      </div>
      {notice && (
        <p className="reader-notice" role="status">
          {notice}
        </p>
      )}
      {children}
    </div>
  );
}
