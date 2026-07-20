"use client";

import { useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "../../lib/utils";
import { GlassCard } from "./glass-card";

interface SpotlightCardProps {
  children: React.ReactNode;
  className?: string;
  padding?: "none" | "sm" | "md" | "lg";
}

export function SpotlightCard({ children, className, padding = "lg" }: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current || prefersReduced) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      className={cn("relative group", className)}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Spotlight glow */}
      {isHovered && !prefersReduced && (
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(79,209,197,0.12), transparent 50%)`,
          }}
        />
      )}

      {/* Border highlight */}
      <motion.div
        className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-border-strong transition-colors duration-300 z-10 pointer-events-none"
      />

      <GlassCard padding={padding} className="relative z-10" hover={false}>
        {children}
      </GlassCard>
    </div>
  );
}
