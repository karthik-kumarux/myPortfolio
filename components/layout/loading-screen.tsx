"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <motion.div
            className="flex flex-col items-center gap-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.4 }}
          >
            {/* Geometric mark: two overlapping squares */}
            <motion.div
              className="relative w-16 h-16"
              animate={{ rotate: [0, 90, 180, 270, 360] }}
              transition={{ duration: 2, ease: "easeInOut", times: [0, 0.3, 0.6, 0.8, 1] }}
            >
              <motion.div
                className="absolute inset-0 border-2 border-accent rounded-lg"
                animate={{ scale: [0.8, 1, 1, 0.8], opacity: [0.5, 1, 0.5, 0.5] }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
              <motion.div
                className="absolute inset-2 border-2 border-cta rounded-md rotate-45"
                animate={{ scale: [1, 0.8, 1, 1], opacity: [0.3, 0.6, 1, 0.3] }}
                transition={{ duration: 2, ease: "easeInOut" }}
              />
            </motion.div>

            <motion.p
              className="text-sm font-mono text-text-muted tracking-widest uppercase"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              Initializing
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
