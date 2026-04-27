/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: "#FF6B00",
        "india-green": "#128807",
        navy: "#1A3C6E",
      },
      fontFamily: {
        sans: ["var(--font-noto)", "Noto Sans", "sans-serif"],
        devanagari: ["var(--font-devanagari)", "Noto Sans Devanagari", "sans-serif"],
      },
    },
  },
  plugins: [],
};
