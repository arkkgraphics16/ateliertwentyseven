import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        accent: "var(--color-accent)",
        ink: "var(--color-ink)",
        surface: "var(--color-surface)",
        card: "var(--color-card)",
        muted: "var(--color-muted)",
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        danger: "var(--color-danger)"
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"]
      },
      boxShadow: {
        brass: "0 10px 30px rgba(16,38,73,0.08)"
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(to bottom, #FAF8F3, #FEFCF7, #FFFFFF)"
      }
    }
  },
  plugins: []
};

export default config;
