/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      aspectRatio: {
        "258/256": "290 / 251",
      },
      colors: {
        sportsee: {
          grey: "#FBFBFB",
          bgGraphique: "#282D30",
          textGrey: "#74798C",
        },
      },

      fontFamily: {
        sans: ["Roboto", "sans-serif"],
      },
      fontWeight: {
        light: 300,
        normal: 400,
        medium: 500,
        bold: 700,
      },
    },
  },
  plugins: [],
};
