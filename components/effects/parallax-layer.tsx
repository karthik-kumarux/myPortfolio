"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

interface ParallaxLayerProps {
  children: React.ReactNode;
  speed?: number; // 0.1 (slow) to 0.5 (fast). Default: 0.2
  direction?: "up" | "down";
  className?: string;
}

export function ParallaxLayer({
  children,
  speed = 0.2,
  direction = "up",
  className,
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const factor = direction === "up" ? -speed * 200 : speed * 200;
  const y = useTransform(scrollYProgress, [0, 1], prefersReduced ? [0, 0] : [factor, -factor]);

  return (
    <motion.div ref={ref} className={cn("relative", className)} style={{ y }}>
      {children}
    </motion.div>
  );
}
