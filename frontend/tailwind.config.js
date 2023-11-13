/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#2ECC40",
        darkGreen: "#143601",
        paleGreen: "#AAD576",
        // opacity 50%
        primaryGreen50: "rgba(46, 204, 64, 0.5)",
        darkGreen50: "rgba(20, 54, 1, 0.5)",
      },
      boxShadow: {
        'right-bottom': '3px 5px 20px 0 rgba(0, 0, 0, 0.5)',
    },
    },
  },
  plugins: [
    // custom gradients
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-gradient": {
          background: "linear-gradient(90deg, #2ECC40, #143601)",
          "-webkit-background-clip": "text",
          "-moz-background-clip": "system",
          "background-clip": "text",
          "color": "transparent",
        },
        ".text-gradient2": {
          background: "linear-gradient(90deg, #fff, #2ECC40)",
          "-webkit-background-clip": "text",
          "-moz-background-clip": "system",
          "background-clip": "text",
          "color": "transparent",
        }
      };
      addUtilities(newUtilities);
    },
  ],
}

