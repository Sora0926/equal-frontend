import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  darkMode: 'media',
  extract: {
    include: [
      '**/*.{tsx,css}'
    ],
    exclude: [
      'node_modules',
      '.pnpm-store',
      '.git',
      '.next'
    ],
  },
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        lora: ['var(--font-lora)'],
        kenia: ['var(--font-kenia)'],
        dancing: ['var(--font-dancing)'],
      },
    },
  },
})
