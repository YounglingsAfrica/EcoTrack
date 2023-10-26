/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#2ECC40",
        darkGreen: "#143601",
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-gradient": {
          background: "linear-gradient(90deg, #2ECC40, #143601)",
          "-webkit-background-clip": "text",
          "-moz-background-clip": "system",
          "background-clip": "text",
          "color": "transparent",
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

