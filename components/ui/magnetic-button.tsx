"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  href?: string;
  external?: boolean;
  onClick?: () => void;
}

export function MagneticButton({
  children,
  className,
  href,
  external,
  onClick,
}: MagneticButtonProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setPosition({ x: x * 0.3, y: y * 0.3 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  if (href) {
    return (
      <motion.a
        ref={ref}
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onClick={onClick}
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.1 }}
        className={cn("inline-block cursor-pointer", className)}
      >
        {children}
      </motion.a>
    );
  }

  return (
    <motion.div
      ref={ref}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.1 }}
      className={cn("inline-block cursor-pointer", className)}
    >
      {children}
    </motion.div>
  );
}
