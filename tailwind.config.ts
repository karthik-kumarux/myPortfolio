import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        surface: {
          DEFAULT: "#0A0A0A",
          elevated: "#111111",
          overlay: "#1A1A1A",
        },
        border: {
          subtle: "rgba(255,255,255,0.03)",
          DEFAULT: "rgba(255,255,255,0.08)",
          strong: "rgba(255,255,255,0.15)",
        },
        text: {
          primary: "#EDEDED",
          secondary: "#A1A1AA",
          muted: "#71717A",
        },
        accent: {
          DEFAULT: "#D4D4D8",
          hover: "#FFFFFF",
          muted: "rgba(255,255,255,0.05)",
        },
        cta: {
          DEFAULT: "#FFFFFF",
          hover: "#E5E5E5",
        },
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
      fontSize: {
        "display-xl": ["4.5rem", { lineHeight: "1.05", letterSpacing: "-0.04em", fontWeight: "700" }],
        "display-lg": ["3.5rem", { lineHeight: "1.1", letterSpacing: "-0.03em", fontWeight: "700" }],
        "display-md": ["2.5rem", { lineHeight: "1.15", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-sm": ["1.75rem", { lineHeight: "1.25", letterSpacing: "-0.01em", fontWeight: "600" }],
      },
      boxShadow: {
        "glass": "0 4px 24px rgba(0,0,0,0.4)",
        "card": "0 1px 3px rgba(0,0,0,0.5), 0 4px 12px rgba(0,0,0,0.3)",
        "elevated": "0 8px 32px rgba(0,0,0,0.5)",
        "glow-accent": "0 0 30px rgba(79,209,197,0.15)",
      },
      backdropBlur: {
        glass: "20px",
      },
      borderRadius: {
        "xl": "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "pulse-subtle": "pulseSubtle 3s ease-in-out infinite",
        "gradient-shift": "gradientShift 8s ease infinite",
        "float": "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        pulseSubtle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.7" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
