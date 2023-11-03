/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        'hand':['Patrick Hand','cursive'],
        'mono':['Roboto Mono','monospace'],
        'right' :['Righteous','monospace']
      }
    },
  },
  plugins: [],
}