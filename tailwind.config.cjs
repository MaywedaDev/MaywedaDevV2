/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        body: "#0A0A0A",
        secondary: "#D9D9D9",
        accent: "#D9D9D9B2",
        "grey-100": "#464646B2",
        "grad-white": "#D9CACA",
        "grad-purple": "#9747FF",
        red: "#E11717",
        cardBg: "#1A1A1A",
        contentBg: "#464646",
      },
      fontFamily: {
        clash: ["Clash", "sans-serif"],
      },
    },
  },
  plugins: [],
};
