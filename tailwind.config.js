/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{liquid,js}",
    "./tailwind/pre-process-template/**/*.liquid"
  ],
  theme: {
    extend: {
      padding: {
        '75%': '75%',
        '100%': '100%',
        '133%': '133%',
        '150%': '150%'
      }
    },
  },
  plugins: [],
}

