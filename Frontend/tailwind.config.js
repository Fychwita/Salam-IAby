/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}", // Ajoutez tous les types de fichiers que vous utilisez
  ],
  theme: {
    extend: {
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        'slide-up': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'fade-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)'
          }
        },
        'ken-burns': {
          '0%': {
            transform: 'scale(1.1) translate(0, 0)'
          },
          '50%': {
            transform: 'scale(1.2) translate(-1%, -1%)'
          },
          '100%': {
            transform: 'scale(1.1) translate(0, 0)'
          }
        },
        'gradient-shift': {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          }
        },
        'rotate-in': {
          '0%': { 
            opacity: '0',
            transform: 'rotateX(-90deg) translateY(50px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'rotateX(0) translateY(0)'
          }
        },
        'shine': {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' }
        }
      },
      animation: {
        'fade-in': 'fade-in 1s ease-out forwards',
        'slide-up': 'slide-up 0.5s ease-out forwards',
        'fade-up': 'fade-up 0.5s ease-out forwards',
        'ken-burns': 'ken-burns 20s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 15s ease infinite',
        'rotate-in': 'rotate-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards',
        'shine': 'shine 3s infinite'
      },
      transform: {
        'rotate-y-12': 'rotateY(12deg)',
      },
      perspective: {
        '1000': '1000px',
      }
    },
  },
  plugins: [],
};

