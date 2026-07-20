"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "../../hooks/use-in-view";
import { ease } from "../../lib/motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  blur?: boolean;
  stagger?: boolean;
  staggerDelay?: number;
}

const directionMap = {
  up: { y: 48, x: 0 },
  down: { y: -48, x: 0 },
  left: { x: 48, y: 0 },
  right: { x: -48, y: 0 },
  none: { x: 0, y: 0 },
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  blur = true,
  stagger = false,
}: ScrollRevealProps) {
  const { ref, isInView } = useInView();
  const prefersReduced = useReducedMotion();
  const offset = directionMap[direction];

  if (prefersReduced) {
    return <div ref={ref} className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: {
          opacity: 0,
          ...offset,
          filter: blur ? "blur(4px)" : "blur(0px)",
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.7,
            delay,
            ease: ease.out,
            staggerChildren: stagger ? 0.06 : 0,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
