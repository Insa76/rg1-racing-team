import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        background: "#050505",

        surface: "#101010",

        card: "#181818",

        primary: "#E10600",

        secondary: "#FFFFFF",

        muted: "#A3A3A3",

        border: "#2B2B2B",

        success: "#22C55E",

        warning: "#F59E0B",

        danger: "#DC2626",
      },

      fontFamily: {
        heading: ["var(--font-anton)", "sans-serif"],

        body: [
          "var(--font-inter)",
          "system-ui",
          "sans-serif",
        ],
      },

      letterSpacing: {
        racing: "0.05em",
      },

      borderRadius: {
        xl: "1rem",

        "2xl": "1.5rem",

        "3xl": "2rem",
      },

      boxShadow: {
        glow:
          "0 0 40px rgba(225,6,0,.25)",

        card:
          "0 10px 40px rgba(0,0,0,.45)",
      },
    },
  },

  plugins: [],
};

export default config;