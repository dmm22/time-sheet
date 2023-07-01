/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      text: "#1a161d",
      primaryBg: "#fcfcfd",
      secondaryBg: "#F7F7F7",
      primary: "#6488be",
      secondary: "#edebf0",
    },
    fontFamily: {
      sans: ["Karla", "Montserrat", "sans-serif"],
      serif: ["Montserrat", "serif"],
    },
  },
  plugins: [],
}
