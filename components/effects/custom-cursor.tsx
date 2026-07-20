"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export function CustomCursor() {
  const [variant, setVariant] = useState<"default" | "hover" | "text">("default");
  const [label, setLabel] = useState("");
  const prefersReduced = useReducedMotion();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 28, stiffness: 500, mass: 0.5 });
  const springY = useSpring(y, { damping: 28, stiffness: 500, mass: 0.5 });

  useEffect(() => {
    if (prefersReduced) return;
    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y, prefersReduced]);

  useEffect(() => {
    if (prefersReduced) return;
    const els = document.querySelectorAll("[data-cursor]");
    const handlers: Array<() => void> = [];
    els.forEach((el) => {
      const enter = () => {
        const cursorType = el.getAttribute("data-cursor") as "hover" | "text" | null;
        setVariant(cursorType || "hover");
        setLabel(el.getAttribute("data-cursor-text") || "");
      };
      const leave = () => setVariant("default");
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
      handlers.push(() => {
        el.removeEventListener("mouseenter", enter);
        el.removeEventListener("mouseleave", leave);
      });
    });
    return () => handlers.forEach((h) => h());
  }, [prefersReduced]);

  if (prefersReduced) return null;

  const isDefault = variant === "default";
  const isText = variant === "text";
  const size = isDefault ? 8 : isText ? 72 : 48;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[999] hidden md:flex items-center justify-center rounded-full text-white text-[10px] font-mono font-semibold tracking-wider uppercase z-50"
      style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%" }}
      animate={{ 
        width: size, 
        height: size,
        backgroundColor: isDefault ? "rgba(255, 255, 255, 1)" : isText ? "rgba(0, 0, 0, 0.5)" : "rgba(255, 255, 255, 0.03)",
        borderColor: isDefault ? "rgba(255, 255, 255, 0)" : "rgba(255, 255, 255, 0.4)",
        borderWidth: isDefault ? "0px" : "1px",
        backdropFilter: isDefault ? "blur(0px)" : "blur(8px)"
      }}
      transition={{ type: "spring", damping: 28, stiffness: 500, mass: 0.5 }}
    >
      {variant !== "default" && label}
    </motion.div>
  );
}
