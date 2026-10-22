"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { List } from "lucide-react";
import { scrollToReadingTarget } from "./LearningExperience";

export default function LessonOutline({ lesson }) {
  const [active, setActive] = useState("lesson-start");
  const outline = useRef(null);
  const items = useMemo(
    () => [
      { id: "lesson-start", title: "Einstieg und Beispiel" },
      ...lesson.sections.map((section) => ({
        id: `section-${section.id}`,
        title: section.title.replace(/^\d+\.\s*/, ""),
      })),
      { id: "summary", title: "Zusammenfassung" },
    ],
    [lesson],
  );

  function offset() {
    const toolbar =
      document.querySelector(".reader-toolbar")?.getBoundingClientRect()
        .height || 0;
    const navigation = window.matchMedia("(max-width: 1280px)").matches
      ? outline.current?.getBoundingClientRect().height || 0
      : 0;
    return toolbar + navigation + 32;
  }

  useEffect(() => {
    let frame;
    const update = () => {
      frame = null;
      const line = offset() + 15;
      let id = items[0].id;
      for (const item of items) {
        const target = document.getElementById(item.id);
        if (target && target.getBoundingClientRect().top <= line) id = item.id;
      }
      setActive(id);
    };
    const schedule = () => {
      if (frame == null) frame = requestAnimationFrame(update);
    };
    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      if (frame != null) cancelAnimationFrame(frame);
    };
  }, [items]);

  function jump(id) {
    const target = document.getElementById(id);
    if (!target) return;
    if (target.tagName === "DETAILS") target.open = true;
    const heading = target.querySelector("h2") || target;
    heading.setAttribute("tabindex", "-1");
    heading.focus({ preventScroll: true });
    scrollToReadingTarget(target, { offset: -offset() });
    setActive(id);
  }

  return (
    <aside
      className="lesson-outline"
      ref={outline}
      aria-label="Inhalt dieser Lektion"
      data-lenis-prevent
    >
      <h2>
        <List size={18} aria-hidden="true" />
        In dieser Lektion
      </h2>
      <label className="outline-select">
        <span className="sr-only">Zum Abschnitt springen</span>
        <select value={active} onChange={(event) => jump(event.target.value)}>
          {items.map((item) => (
            <option key={item.id} value={item.id}>
              {item.title}
            </option>
          ))}
        </select>
      </label>
      <nav aria-label="Abschnitte der Lektion">
        {items.map((item, index) => (
          <button
            type="button"
            key={item.id}
            aria-current={active === item.id ? "location" : undefined}
            onClick={() => jump(item.id)}
          >
            <span>{String(index + 1).padStart(2, "0")}</span>
            {item.title}
          </button>
        ))}
      </nav>
      <p>
        Erst den Grundgedanken verstehen, dann am Beispiel und im Labor
        anwenden.
      </p>
    </aside>
  );
}
