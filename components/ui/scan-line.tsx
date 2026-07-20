"use client";

import { motion, useReducedMotion } from "framer-motion";

export function ScanLine() {
  const prefersReduced = useReducedMotion();
  if (prefersReduced) return null;

  return (
    <motion.div
      className="absolute left-0 right-0 pointer-events-none z-30"
      style={{ height: 2, background: "#4FD1C5", boxShadow: "0 0 8px rgba(79,209,197,0.4)" }}
      initial={{ top: "0%" }}
      whileInView={{ top: "100%" }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    />
  );
}
