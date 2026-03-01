import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        /* Dark Financial Terminal Palette */
        huy: {
          bg: "#0a0a0f",
          "bg-alt": "#111118",
          card: "#1a1a2e",
          gold: "#d4a017",
          "gold-light": "#f5c842",
          "gold-dark": "#b8860b",
          text: "#e4e4e7",
          muted: "#a1a1aa",
          border: "rgba(255, 255, 255, 0.1)",
          success: "#22c55e",
          danger: "#ef4444",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
