/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", "./**/*.{html,js}"],

  theme: {
    screens: {
      tablet: "800px",
      desktop: "1280px",
    },
    fontFamily: {
      "dm-sans": ['"DM Sans"', "sans-serif"],
      "crimson-text": ['"Crimson Text"', "serif"],
      "roboto-mono": ['"Roboto Mono"', "sans-serif"],
    },
  },
  plugins: [],
};
