/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1B8F77", // main Orgopros green
          dark: "#166A5B",    // darker shade for hover/focus
          light: "#A7E9DD",   // lighter background tint
        },
        accent: {
          DEFAULT: "#FFD166", // secondary accent (warm highlight)
        },
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.6s ease-out forwards",
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
