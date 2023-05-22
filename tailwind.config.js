/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx}",
    "./index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        plusjakarta: ["Plus Jakarta Display", "sans-serif"],
      },
      colors: {
        primary: "#3E3E3E",
        secondary: "#635E59",
        tertiary: "#949494",
        white : "#FFFFFF",
        white2 : "#ECECEC",
      },
    },
  },
  plugins: [],
} 
