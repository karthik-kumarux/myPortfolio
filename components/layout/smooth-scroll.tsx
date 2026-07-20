"use client";

import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setReady(true);
      return;
    }

    const lenis = new Lenis({
      duration: 1.0,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    setReady(true);

    return () => {
      lenis.destroy();
    };
  }, []);

  // Pause/resume Lenis during page transitions (handled by template.tsx)
  useEffect(() => {
    if (!lenisRef.current) return;
    // Lenis needs to recalculate on route changes
    const handleRouteChange = () => {
      setTimeout(() => lenisRef.current?.resize(), 100);
    };
    window.addEventListener("popstate", handleRouteChange);
    return () => window.removeEventListener("popstate", handleRouteChange);
  }, []);

  if (!ready) return <>{children}</>;

  return <>{children}</>;
}
