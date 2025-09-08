// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
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
  plugins: [],
};
