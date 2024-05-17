/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
export const content = [
  "./src/**/*.{liquid,js}",
  "./tailwind/pre-process-template/**/*.liquid"
];
export const theme = {
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
    },
    keyframes: theme => ({
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
  },
};
export const plugins = [
  plugin(function ({ addVariant }) {
    addVariant("promotion", ".promotion&");
    addVariant("slideshow", ".splide-slideshow &");
    addVariant("pagination-dots", ".pagination-dots &");
    addVariant("pagination-bars", ".pagination-bars &");
    addVariant("is-active-pagination", ".is-active&");
  })
];