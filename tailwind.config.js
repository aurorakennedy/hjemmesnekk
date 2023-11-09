/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        rock: "'Rock 3D', cursive",
        playpen: "'Playpen Sans', cursive;",
        handwriting: " 'Annie Use Your Telescope', cursive",
      },
    },
  },
  plugins: [],
};
