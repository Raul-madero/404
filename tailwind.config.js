/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/index.html", "./src/**/*.html,js"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'black-title': '#333',
        'white': '#FFF',
        'dark-text': '#4F4F4F',
        'gray-text': '#BDBDBD'
      },
      fontFamily: {
        Inconsolata: ['"Inconsolata"', "sans-serif"],
        SpaceMono: ['"Space Mono"', "sans-serif"]
      }
    },
  },
  plugins: [],
}

