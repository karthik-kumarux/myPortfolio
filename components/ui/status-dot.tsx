"use client";

import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";

interface StatusDotProps {
  label?: string;
  className?: string;
  color?: string;
}

export function StatusDot({ label, className, color = "#4FD1C5" }: StatusDotProps) {
  const prefersReduced = useReducedMotion();

  const dot = (
    <motion.span
      className={cn("inline-block w-1.5 h-1.5 rounded-full flex-shrink-0", className)}
      style={{
        backgroundColor: color,
        boxShadow: `0 0 6px ${color}66`,
      }}
      animate={prefersReduced ? {} : { opacity: [0.4, 1, 0.4], scale: [1, 1.2, 1] }}
      transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
    />
  );

  if (!label) return dot;

  return (
    <span className="inline-flex items-center gap-2">
      {dot}
      <span className="text-sm text-text-secondary">{label}</span>
    </span>
  );
}
