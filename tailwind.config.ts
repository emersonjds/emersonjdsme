import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-16px)" },
        },
        "float-medium": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
        "float-fast": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "pulse-soft": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.9" },
        },
        "rotate-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "glow-breathing": {
          "0%, 100%": {
            boxShadow:
              "0 0 20px rgba(124, 58, 237, 0.2), inset 0 1px 0 rgba(255, 255, 255, 0.05)",
          },
          "50%": {
            boxShadow:
              "0 0 40px rgba(124, 58, 237, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
          },
        },
        /* PREMIUM ADDITIONS */
        "morph-slow": {
          "0%": { borderRadius: "20%" },
          "50%": { borderRadius: "60%" },
          "100%": { borderRadius: "20%" },
        },
        "slide-reveal": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "float-orbit": {
          "0%": { transform: "translate(0, 0) rotate(0deg)" },
          "25%": { transform: "translate(10px, -5px) rotate(90deg)" },
          "50%": { transform: "translate(0, -10px) rotate(180deg)" },
          "75%": { transform: "translate(-10px, -5px) rotate(270deg)" },
          "100%": { transform: "translate(0, 0) rotate(360deg)" },
        },
        "glow-pulse-intense": {
          "0%, 100%": { boxShadow: "0 0 10px rgba(124, 58, 237, 0.3)" },
          "50%": { boxShadow: "0 0 50px rgba(124, 58, 237, 0.8)" },
        },
        "scale-bounce": {
          "0%": { transform: "scale(0.95)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
        "shine-wave": {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        "text-shadow-glow": {
          "0%, 100%": { textShadow: "0 0 10px rgba(124, 58, 237, 0.3)" },
          "50%": { textShadow: "0 0 30px rgba(124, 58, 237, 0.8)" },
        },
        "scale-in-up": {
          "0%": { opacity: "0", transform: "scale(0.95) translateY(20px)" },
          "100%": { opacity: "1", transform: "scale(1) translateY(0)" },
        },
        "blur-in": {
          "0%": { opacity: "0", filter: "blur(10px)" },
          "100%": { opacity: "1", filter: "blur(0)" },
        },
        "rotate-tilt": {
          "0%, 100%": { transform: "rotateX(0deg) rotateY(0deg)" },
          "50%": { transform: "rotateX(5deg) rotateY(5deg)" },
        },
        "parallax-y": {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(20px)" },
        },
      },
      animation: {
        /* Base */
        "float-slow": "float-slow 5s ease-in-out infinite",
        "float-medium": "float-medium 3s ease-in-out infinite",
        "float-fast": "float-fast 2s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 8s linear infinite",
        "glow-breathing": "glow-breathing 2.5s ease-in-out infinite",
        /* Premium */
        "morph-slow": "morph-slow 6s ease-in-out infinite",
        "slide-reveal": "slide-reveal 0.8s ease-out",
        "float-orbit": "float-orbit 6s linear infinite",
        "glow-pulse-intense": "glow-pulse-intense 3s ease-in-out infinite",
        "scale-bounce": "scale-bounce 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "shine-wave": "shine-wave 2.5s infinite",
        "text-shadow-glow": "text-shadow-glow 2s ease-in-out infinite",
        "scale-in-up": "scale-in-up 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)",
        "blur-in": "blur-in 0.8s ease-out",
        "rotate-tilt": "rotate-tilt 4s ease-in-out infinite",
        "parallax-y": "parallax-y 6s ease-in-out infinite",
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        "smooth-out": "cubic-bezier(0.215, 0.61, 0.355, 1)",
        "bounce-in": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        spring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
      colors: {
        gradient: {
          primary: "linear-gradient(135deg, #7c3aed, #ec4899)",
          secondary: "linear-gradient(135deg, #3b82f6, #8b5cf6)",
          accent: "linear-gradient(135deg, #ec4899, #f14f38)",
        },
        overlay: {
          soft: "rgba(124, 58, 237, 0.05)",
          medium: "rgba(124, 58, 237, 0.1)",
          strong: "rgba(124, 58, 237, 0.2)",
        },
      },
      spacing: {
        section: "120px",
      },
      fontSize: {
        clamp: "clamp(1rem, 2vw, 1.25rem)",
      },
      lineHeight: {
        tight: "1.1",
        snug: "1.3",
        normal: "1.5",
        relaxed: "1.75",
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
        normal: "0em",
        wide: "0.025em",
        wider: "0.05em",
        widest: "0.1em",
      },
    },
  },
  plugins: [],
};

export default config;
