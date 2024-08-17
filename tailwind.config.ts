import type { Config } from 'tailwindcss'

export default {
  content: [
    './.vitepress/**/*.{js,ts,vue}',
    './**/*.{md,vue}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
} satisfies Config

