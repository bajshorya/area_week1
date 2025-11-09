/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      tablet: "800px",
      desktop: "1280px",
    },
    color: {
      primary: "",
    },
    fontFamily: {
      "dm-sans": ['"DM Sans"', "sans-serif"],
      "crimson-text": ['"Crimson Text"', "serif"],
    },
  },
  plugins: [],
};
