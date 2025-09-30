/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B88A2D",
        accent: "#2E7F6E",
        ink: "#0B1320",
        surface: "#F7F5F0",
        card: "#FFFFFF",
        muted: "#ECE8DD", // string keeps /opacity utilities working
        success: "#1F8A5B",
        warning: "#E0A100",
        danger: "#D64545"
      },
      boxShadow: {
        atelier: "0 10px 30px rgba(16,38,73,0.08)"
      }
    }
  },
  plugins: []
};
