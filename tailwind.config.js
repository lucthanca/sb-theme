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
      },
      animation: {
        fade: 'fadeOut 5s ease-in-out',
      },
      keyframes: theme => ({
        fadeOut: {
            '0%': {opacity: 0},
           '20%': {opacity: 1},
           '33%': {opacity: 1},
           '53%':{opacity: 0},
           '100%': {opacity: 0}
        },
        scrollX: {
          '0%': {
            transform: 'translateX(0%)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          } 
        },
        shimmerX: {
          '100%': {
            transform: 'translateX(0%)'
          } 
        },
        slideDown : {
          '100%': {
            transform: 'translateY(-100%)'
          },
          '0%': {
            transform: 'translateY(0)'
          } 
        },
        pingHotspot : {
          '0%': {
            transform: 'scale(1)'
          },
          '50%': {
            transform: 'scale(2.3)'
          },
          '100%': {
            transform: 'scale(1)'
          } 
        }
      }),
      animation: {
        'shimmerX_5s': 'shimmerX 5s ease-out',  
        'shimmerX_6s': 'shimmerX 6s ease-out',  
        'shimmerX_7s': 'shimmerX 7s ease-out',
        'shimmerX_8s': 'shimmerX 8s ease-out',
        'shimmerX_9s': 'shimmerX 9s ease-out',
        'shimmerX_10s': 'shimmerX 10s ease-out',
        'slideDown': 'slideDown 3s ease-out'
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

