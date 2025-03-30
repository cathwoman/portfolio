import type { Config } from 'tailwindcss'

export default {
  important: true,
  content: [
    './.vitepress/**/*.{js,ts,vue}',
    './**/*.{md,vue}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': 'var(--vp-c-primary)',
        'secondary': 'var(--vp-c-secondary)',
        'accent': 'var(--vp-c-accent)',
        'white': 'var(--vp-c-white)',
      },
    },
  },
  variants: {},
  plugins: [],
  darkMode: 'class',
} satisfies Config

