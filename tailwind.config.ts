import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B88A2D",
        accent: "#2E7F6E",
        ink: "#0B1320",
        surface: "#F7F5F0",
        card: "#FFFFFF",
        muted: {
          DEFAULT: "#ECE8DD",
          60: "#ECE8DD99"
        },
        success: "#1F8A5B",
        warning: "#E0A100",
        danger: "#D64545"
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
