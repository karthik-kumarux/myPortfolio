"use client";

import { cn } from "../../lib/utils";
import { motion } from "framer-motion";

interface TechChipProps {
  label: string;
  active?: boolean;
  size?: "sm" | "md";
  className?: string;
}

export function TechChip({
  label,
  active = false,
  size = "md",
  className,
}: TechChipProps) {
  return (
    <motion.span
      className={cn(
        "inline-flex items-center rounded-lg border font-mono transition-colors duration-200",
        size === "sm" ? "px-2 py-0.5 text-xs" : "px-2.5 py-1 text-xs",
        active
          ? "border-accent/40 bg-accent-muted text-accent"
          : "border-border bg-surface text-text-secondary hover:border-border-strong hover:text-text-primary",
        className
      )}
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.15 }}
    >
      {label}
    </motion.span>
  );
}
