/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{liquid,js}",
    "./tailwind/pre-process-template/**/*.liquid"
  ],
  theme: {
    extend: {
      padding: {
        '100%': '100%'
      }
    },
  },
  plugins: [],
}

