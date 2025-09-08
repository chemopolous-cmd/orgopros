// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: [
    "bg-brand-dark",
    "bg-brand-teal",
    "hover:bg-brand-tealHover",
    "text-brand-teal",
    "text-brand-navy",
    "border-brand-teal",
    "border-brand-navy/60",
  ],
  theme: { /* ...same as before... */ },
  plugins: [],
};
