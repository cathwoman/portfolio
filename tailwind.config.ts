import type { Config } from 'tailwindcss'

export default {
  important: true,
  content: [
    './.vitepress/**/*.{js,ts,vue}',
    './**/*.{md,vue}',
  ],
  theme: {
    extend: {
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "50%": {
            borderColor: "transparent"
          },
          "100%": {
            borderColor: "white"
          }
        },
      },
      animationDelay: {
        '0': '0s',
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'typing': "typing 2s steps(20) infinite alternate, blink .7s infinite"
      },
    },
  },
  variants: {
    extend: {
      animationDelay: ['responsive'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.animate-delay-200': {
          'animation-delay': '200ms',
        },
        '.animate-delay-400': {
          'animation-delay': '400ms',
        },
        '.animate-delay-600': {
          'animation-delay': '600ms',
        },
        '.animate-delay-800': {
          'animation-delay': '800ms',
        },
        '.animate-delay-1000': {
          'animation-delay': '1000ms',
        },
      };
      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
  darkMode: 'class',
} satisfies Config

