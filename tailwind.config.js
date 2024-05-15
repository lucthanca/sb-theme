/** @type {import('tailwindcss').Config} */
module.exports = {
  prefix: "otsb-",
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
      },
      width: {
        '250px': '250px',
        '300px': '300px',
        '400px': '400px',
        '450px': '450px',
        '550px': '550px'
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}

