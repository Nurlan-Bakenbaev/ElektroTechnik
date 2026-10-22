"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Compass, X } from "lucide-react";
import { tourSteps } from "../data/site-tour.js";
import { scrollToReadingTarget } from "./LearningExperience";

export default function SiteTour({ onClose, onMenuChange }) {
  const [index, setIndex] = useState(0);
  const [box, setBox] = useState(null);
  const [unavailable, setUnavailable] = useState(false);
  const dialog = useRef(null);
  const heading = useRef(null);
  const panel = useRef(null);
  const step = tourSteps[index];

  useEffect(() => {
    const element = dialog.current;
    element.showModal();
    return () => element.close();
  }, []);

  useEffect(() => {
    const expected = `#/${step.route}`;
    if (location.hash !== expected) location.hash = expected;
    let frame;
    let target;
    let attempts = 0;
    let ready = false;
    setBox(null);
    setUnavailable(false);

    // Wait for hash navigation, responsive menu and React's page mount.
    function locate() {
      onMenuChange(Boolean(step.menu));
      target = document.querySelector(step.target);
      if (!target || !target.getBoundingClientRect().width) {
        if (++attempts < 180) frame = requestAnimationFrame(locate);
        else setUnavailable(true);
        return;
      }
      if (step.activate) document.querySelector(step.activate)?.click();
      target.scrollIntoView({ block: "center", behavior: "instant" });
      if (!step.menu && !target.closest(".reader-toolbar")) {
        scrollToReadingTarget(target, { immediate: true, offset: -110 });
      }
      ready = true;
      const until = performance.now() + 450;
      function settle() {
        measure();
        if (performance.now() < until) frame = requestAnimationFrame(settle);
      }
      frame = requestAnimationFrame(settle);
    }
    function measure() {
      if (!ready || !target?.isConnected) return;
      const rect = target.getBoundingClientRect();
      const padding = 7;
      const bottom = Math.min(innerHeight - 12, rect.bottom + padding);
      const top = Math.max(8, rect.top - padding);
      const left = Math.max(8, rect.left - padding);
      const right = Math.min(innerWidth - 8, rect.right + padding);
      if (right - left < 24 || bottom - top < 16) return;
      const height = panel.current?.getBoundingClientRect().height || 300;
      const below = innerHeight - bottom - 24 >= height;
      setBox({
        top,
        left,
        width: Math.max(0, right - left),
        height: Math.max(0, bottom - top),
        panelTop: below ? bottom + 18 : Math.max(12, innerHeight - height - 16),
      });
    }
    frame = requestAnimationFrame(locate);
    const observer = new ResizeObserver(() => {
      if (ready) measure();
    });
    if (panel.current) observer.observe(panel.current);
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", measure, true);
    heading.current?.focus({ preventScroll: true });
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", measure, true);
    };
  }, [step, onMenuChange]);

  return (
    <dialog
      className="site-tour"
      ref={dialog}
      aria-labelledby="tour-title"
      aria-describedby="tour-description"
      onCancel={(event) => {
        event.preventDefault();
        onClose(false);
      }}
      onKeyDown={(event) => {
        if (event.key !== "Tab") return;
        const controls = [
          ...event.currentTarget.querySelectorAll("button:not(:disabled)"),
        ];
        const first = controls[0],
          last = controls.at(-1);
        if (
          event.shiftKey &&
          (document.activeElement === first ||
            document.activeElement === heading.current)
        ) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }}
      data-lenis-prevent
    >
      {box && (
        <div
          className="tour-spotlight"
          aria-hidden="true"
          style={{
            top: box.top,
            left: box.left,
            width: box.width,
            height: box.height,
          }}
        />
      )}
      <section
        className="tour-panel"
        ref={panel}
        style={{ top: box?.panelTop }}
      >
        <div className="tour-topline">
          <span>
            <Compass size={18} aria-hidden="true" /> WEBSITE-TOUR
          </span>
          <button
            type="button"
            className="tour-close"
            aria-label="Website-Tour schließen"
            onClick={() => onClose(false)}
          >
            <X size={21} />
          </button>
        </div>
        <p className="tour-counter">
          Schritt {index + 1} von {tourSteps.length}
        </p>
        <div
          key={index}
          className="tour-copy"
          aria-live="polite"
          aria-atomic="true"
        >
          <h2 id="tour-title" ref={heading} tabIndex={-1}>
            {step.title}
          </h2>
          <p id="tour-description">{step.text}</p>
        </div>
        {unavailable && (
          <p className="tour-unavailable" role="status">
            Die Markierung ist gerade nicht verfügbar. Du kannst mit dem
            nächsten Schritt fortfahren.
          </p>
        )}
        <div className="tour-progress" aria-hidden="true">
          <span
            style={{ width: `${((index + 1) / tourSteps.length) * 100}%` }}
          />
        </div>
        <div className="tour-actions">
          <button
            type="button"
            disabled={index === 0}
            onClick={() => setIndex((value) => value - 1)}
          >
            <ArrowLeft size={17} /> Zurück
          </button>
          <button
            type="button"
            className="tour-next"
            onClick={() =>
              index === tourSteps.length - 1
                ? onClose(true)
                : setIndex((value) => value + 1)
            }
          >
            {index === tourSteps.length - 1 ? "Tour beenden" : "Weiter"}
            <ArrowRight size={17} />
          </button>
        </div>
        <p className="tour-hint">
          Esc zum Schließen · Danach kehrst du zu deiner Ausgangsseite zurück.
        </p>
      </section>
    </dialog>
  );
}
