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
      },
      animation: {
        "float-slow": "float-slow 5s ease-in-out infinite",
        "float-medium": "float-medium 3s ease-in-out infinite",
        "float-fast": "float-fast 2s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2s ease-in-out infinite",
        "rotate-slow": "rotate-slow 8s linear infinite",
        "glow-breathing": "glow-breathing 2.5s ease-in-out infinite",
      },
      spacing: {
        section: "120px",
      },
    },
  },
  plugins: [],
};

export default config;
