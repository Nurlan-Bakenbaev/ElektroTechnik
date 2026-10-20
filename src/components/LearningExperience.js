"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { MotionConfig } from "motion/react";
import "lenis/dist/lenis.css";

let activeScroller = null;

/** One scrolling controller for wheels, reading anchors and route changes. */
export function scrollToReadingTarget(target, { immediate = false } = {}) {
  if (activeScroller) {
    activeScroller.scrollTo(target, {
      immediate,
      offset: typeof target === "number" ? 0 : -28,
    });
    return;
  }
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior = immediate || reduce ? "instant" : "smooth";
  if (typeof target === "number") window.scrollTo({ top: target, behavior });
  else target?.scrollIntoView({ behavior, block: "start" });
}

export default function LearningExperience({ children }) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const configure = () => {
      activeScroller?.destroy();
      activeScroller = null;
      // Preserve fully native scrolling when the user prefers reduced motion.
      if (!preference.matches)
        activeScroller = new Lenis({
          autoRaf: true,
          lerp: 0.12,
          smoothWheel: true,
          syncTouch: false,
          anchors: false,
          stopInertiaOnNavigate: true,
          prevent: (node) => node.hasAttribute?.("data-lenis-prevent"),
        });
    };
    configure();
    preference.addEventListener("change", configure);
    const modalObserver = new MutationObserver(() => {
      if (document.body.style.overflow === "hidden") activeScroller?.stop();
      else activeScroller?.start();
    });
    modalObserver.observe(document.body, {
      attributes: true,
      attributeFilter: ["style"],
    });
    return () => {
      modalObserver.disconnect();
      preference.removeEventListener("change", configure);
      activeScroller?.destroy();
      activeScroller = null;
    };
  }, []);
  return (
    <MotionConfig
      reducedMotion="user"
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </MotionConfig>
  );
}
