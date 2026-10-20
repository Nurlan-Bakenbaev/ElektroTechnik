"use client";

import { motion, useReducedMotion } from "motion/react";

/** A single entrance; reading content stays still afterwards. */
export function Reveal({ as = "div", children, delay = 0, ...props }) {
  const reduced = useReducedMotion();
  const Element = motion[as];
  return (
    <Element
      {...props}
      initial={reduced ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.06 }}
      transition={{
        duration: reduced ? 0 : 0.42,
        delay: reduced ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Element>
  );
}

export function AnimatedProgress({ value }) {
  const reduced = useReducedMotion();
  return (
    <motion.span
      initial={false}
      animate={{ width: `${value}%` }}
      transition={{ duration: reduced ? 0 : 0.65, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
