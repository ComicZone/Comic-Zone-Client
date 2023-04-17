/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Pages/**/*.{js,jsx}"],
  theme: {
    fontFamily: {
      comicy: ["Comicy", "cursive"],
      monument: ['"Monument Extended"', "sans-serif"],
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      colors: {
        brightRed: "#FB1A1A",
      },
    },
  },
  plugins: [],
};
