/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B88A2D",  // Brass
        accent: "#2E7F6E",   // Sage Teal
        ink: "#0B1320",      // Deep Navy
        surface: "#F7F5F0",  // Ivory
        card: "#FFFFFF",     // White
        muted: "#ECE8DD",    // Bone (as a string so /opacity works)
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
