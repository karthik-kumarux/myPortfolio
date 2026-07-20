"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

interface RedactRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function RedactReveal({ text, className, delay = 0 }: RedactRevealProps) {
  const prefersReduced = useReducedMotion();
  const words = text.split(" ");

  if (prefersReduced) return <span className={className}>{text}</span>;

  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={i}
          className="relative inline-block"
          style={{ overflow: "hidden", verticalAlign: "top" }}
        >
          <span className="invisible">{word}&nbsp;</span>
          <motion.span
            className="absolute inset-0 bg-accent origin-right"
            style={{ zIndex: 2 }}
            initial={{ scaleX: 1 }}
            whileInView={{ scaleX: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{
              duration: 0.7,
              delay: delay + i * 0.06,
              ease: [0.76, 0, 0.24, 1],
            }}
          />
          <span className="absolute inset-0" style={{ zIndex: 1 }}>
            {word}&nbsp;
          </span>
        </span>
      ))}
    </span>
  );
}
