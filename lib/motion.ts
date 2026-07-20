// ─── Spring Presets ────────────────────────────────────────
// Tuned for premium feel — snappy but not jarring

export const spring = {
  gentle: { type: "spring" as const, stiffness: 120, damping: 14, mass: 0.8 },
  snappy: { type: "spring" as const, stiffness: 300, damping: 30, mass: 0.5 },
  bouncy: { type: "spring" as const, stiffness: 180, damping: 10, mass: 0.6 },
  magnetic: { type: "spring" as const, stiffness: 150, damping: 15, mass: 0.1 },
  smooth: { type: "spring" as const, stiffness: 60, damping: 20, mass: 1 },
};

// ─── Easing Curves ─────────────────────────────────────────
// Custom cubic-bezier curves for different motion personalities

export const ease = {
  out: [0.16, 1, 0.3, 1] as const,        // Apple-style deceleration
  inOut: [0.65, 0, 0.35, 1] as const,      // Smooth in-out
  outExpo: [0.19, 1, 0.22, 1] as const,    // Sharp deceleration
  anticipate: [0.5, -0.5, 0.3, 1.3] as const, // Back-out bounce
  lenis: [0.16, 1, 0.3, 1] as const,       // Matches Lenis expo-out scroll feel
};

// ─── Stagger Configuration ─────────────────────────────────

export const stagger = {
  fast: (index: number) => index * 0.04,
  medium: (index: number) => index * 0.08,
  slow: (index: number) => index * 0.12,
};

// ─── Scroll-Triggered Variants ─────────────────────────────

export const fadeUpVariant = {
  hidden: { opacity: 0, y: 40, filter: "blur(4px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: ease.out },
  },
};

export const fadeInVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: ease.out },
  },
};

export const scaleInVariant = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: ease.out },
  },
};

// ─── Stagger Container Variants ────────────────────────────

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

// ─── Page Transition Variants ──────────────────────────────

export const pageTransition = {
  initial: { opacity: 0, y: 8 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: ease.out },
  },
  exit: { opacity: 0, y: -8, transition: { duration: 0.3 } },
};

// ─── 3D Card Tilt Config ───────────────────────────────────

export const tiltConfig = {
  max: 8,       // max rotation degrees
  perspective: 800,
  scale: 1.02,
  speed: 400,
};

// ─── Reduced Motion Detection ──────────────────────────────

// Use in components: const prefersReduced = useReducedMotion();
// import { useReducedMotion } from "framer-motion";
// If prefersReduced → disable all motion, use instant transitions
