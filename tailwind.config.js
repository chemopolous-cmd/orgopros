/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: "#00172C",
          navy: "#002D42",
          teal: "#09667A",
          tealHover: "#128092",
        },
      },
    },
  },
  plugins: [],
};
