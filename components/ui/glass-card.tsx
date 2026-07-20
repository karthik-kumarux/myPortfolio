"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";
import { ScanLine } from "./scan-line";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  elevated?: boolean;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  shimmer?: boolean;
  scanLine?: boolean;
}

export function GlassCard({
  children,
  className,
  elevated = false,
  hover = true,
  padding = "md",
  shimmer = true,
  scanLine = false,
}: GlassCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [shimmerPos, setShimmerPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || prefersReduced) return;
    const rect = ref.current.getBoundingClientRect();
    setShimmerPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  const paddingStyles = {
    none: "",
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  return (
    <motion.div
      ref={ref}
      className={cn(
        elevated ? "glass-elevated" : "glass",
        paddingStyles[padding],
        hover && "hover:border-border-strong transition-all duration-300",
        "relative overflow-hidden",
        className
      )}
      whileHover={hover && !prefersReduced ? { y: -3 } : undefined}
      transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Reflection shimmer */}
      {shimmer && !prefersReduced && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-0 opacity-0 transition-opacity duration-500"
          animate={{ opacity: isHovered ? 1 : 0 }}
          style={{
            background: `radial-gradient(600px circle at ${shimmerPos.x}% ${shimmerPos.y}%, rgba(255,255,255,0.03) 0%, transparent 50%)`,
          }}
        />
      )}

      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
