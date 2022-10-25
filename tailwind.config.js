/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "theme-primary": "#515CBB",
        "theme-secondary": "#ADADAD",
        "theme-tertiary": "#494949",
      },
      fontSize: {
        'base': '1.05rem'
      },
      maxWidth: {
        'layoutMax': '90rem'
      },
    },
  },
  plugins: [],
};
