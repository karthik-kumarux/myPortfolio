"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";

interface ScrollLinkedRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ScrollLinkedReveal({ children, className }: ScrollLinkedRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.3"],
  });

  const y = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [80, 0]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const blur = useTransform(scrollYProgress, [0, 1], [8, 0]);
  const filter = useTransform(blur, (v) => `blur(${v}px)`);

  return (
    <motion.div ref={ref} className={className} style={{ y, opacity, filter }}>
      {children}
    </motion.div>
  );
}
