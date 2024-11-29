import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        sans: ['Lora', ...defaultTheme.fontFamily.sans],
        amiri: ['Amiri', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        dark: '#1e1e1e',
      },
      aspectRatio: {
        auto: 'auto',
        square: '1 / 1',
        video: '16 / 9',
      },
    },
  },
}
