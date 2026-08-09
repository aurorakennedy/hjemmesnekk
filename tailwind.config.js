/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        rock: "'Rock 3D', cursive",
        quicksand: "'Quicksand', sans-serif;",
        vs: "VT323",
        typewriter: "'Special Elite', system-ui;",
      },
    },
  },
  plugins: [],
};
