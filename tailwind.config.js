/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Bellota Text', ...fontFamily.sans],
    },
    extend: {
      colors: {
        "theme-primary": "#515CBB",
        "theme-secondary": "#ADADAD",
        "theme-tertiary": "#494949",
      },
      fontFamily: {        
        cookie: ['Cookie', 'cursive'],
        capriola: ['Capriola', 'sans'],
        bellotaHeading: ['Bellota', 'sans'],
        bellotaBody: ['Bellota Text', 'sans'],
      },
      fontSize: {
        'base': '1.05rem'
      },
      maxWidth: {
        'layoutMax': '90rem'
      },
    },
  },
  plugins: [require('@tailwindcss/typography'),],
};
