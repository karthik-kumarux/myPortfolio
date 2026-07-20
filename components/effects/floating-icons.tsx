"use client";

import { useEffect, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Shield, Lock, Cpu, Globe, Server, Terminal } from "lucide-react";

const icons = [Shield, Lock, Cpu, Globe, Server, Terminal];

interface FloatingIcon {
  Icon: typeof Shield;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

export function FloatingIcons() {
  const prefersReduced = useReducedMotion();
  const iconsRef = useRef<FloatingIcon[]>([]);

  useEffect(() => {
    if (prefersReduced) return;
    iconsRef.current = icons.map((Icon) => ({
      Icon,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 20 + Math.random() * 30,
      duration: 15 + Math.random() * 20,
      delay: Math.random() * 10,
      opacity: 0.04 + Math.random() * 0.06,
    }));
  }, [prefersReduced]);

  if (prefersReduced) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden" aria-hidden="true">
      {iconsRef.current.map((item, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            opacity: item.opacity,
            color: "#4FD1C5",
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: item.duration,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <item.Icon size={item.size} />
        </motion.div>
      ))}
    </div>
  );
}
