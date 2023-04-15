/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/Pages/**/*.{js,jsx}"],
  theme: {
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
