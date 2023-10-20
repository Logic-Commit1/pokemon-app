/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fire: "#f08030",
        water: "#6890f0",
        grass: "#78c850",
        poison: "#bb4abb",
        flying: "#a890f0",
        bug: "#a8b820",
        normal: "#bcbcae",
      },
      maxWidth: {
        1300: "1300px",
      },
    },
  },
  plugins: [],
};
