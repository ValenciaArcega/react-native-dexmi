/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "selector",
  content: ["./App.{js,jsx,ts,tsx}", "./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        p100: "#edf2ff",
        p200: "#dbe4ff",
        p300: "#bac8ff",
        p400: "#91a7ff",
        p500: "#748ffc",
        p600: "#4d5877",
        p700: "#364366",
        p800: "#202E55",
        p900: "#1d294d",

        s100: "#dcecbf",
        s200: "#acd26b",
        s300: "#a1cb55",
        s400: "#95c540",
        s500: "#89BE2B",
        s600: "#7bab27",
        s700: "#6e9822",
      },
    },
  },
  plugins: [],
}
