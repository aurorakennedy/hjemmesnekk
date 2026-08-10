/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        rock: "'Rock 3D', regular",
        quicksand: "'Quicksand', sans-serif;",
        vs: "VT323",
        typewriter: "'Special Elite', system-ui;",
        hand: "'Gochi Hand', cursive",
      },
    },
  },
  plugins: [],
};
