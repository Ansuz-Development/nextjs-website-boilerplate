const plugin = require("tailwindcss/plugin");
const colors = require("tailwindcss/colors");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/*.js",
  ],
  theme: {
    colors: {
      ...colors,
    },
  },
  plugins: [
    plugin(function ({addComponents, theme}) {
      const screens = theme("screens", {});
      addComponents([
        {
          ".container": {width: "100%"},
        },
        {
          [`@media (min-width: ${screens.sm})`]: {
            ".container": {
              "max-width": "40rem",
            },
          },
        },
        {
          [`@media (min-width: ${screens.md})`]: {
            ".container": {
              "max-width": "48rem",
            },
          },
        },
        {
          [`@media (min-width: ${screens.lg})`]: {
            ".container": {
              "max-width": "64rem",
            },
          },
        },
        {
          [`@media (min-width: ${screens.xl})`]: {
            ".container": {
              "max-width": "80rem",
            },
          },
        },
        {
          [`@media (min-width: ${screens["2xl"]})`]: {
            ".container": {
              "max-width": "80rem",
            },
          },
        },
      ]);
    }),
  ],
};
