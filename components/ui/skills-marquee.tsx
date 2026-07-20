"use client";

import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { topSkills } from "../../lib/data/skills";

export function SkillsMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);

  useEffect(() => {
    if (containerRef.current) {
      setContainerWidth(containerRef.current.offsetWidth);
    }
  }, []);

  const duplicated = [...topSkills, ...topSkills, ...topSkills];

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-4"
    >
      <div className="absolute left-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-r from-background to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 z-10 bg-gradient-to-l from-background to-transparent pointer-events-none" />

      <motion.div
        className="flex gap-4 whitespace-nowrap"
        animate={{
          x: [0, -(containerWidth / 2)],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 25,
            ease: "linear",
          },
        }}
      >
        {duplicated.map((skill, i) => (
          <span
            key={`${skill}-${i}`}
            className="inline-flex items-center px-4 py-2 rounded-lg border border-border bg-surface text-sm text-text-secondary font-mono"
          >
            {skill}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
