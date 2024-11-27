// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  nitro: {
    static: true,
  },
  app: {
    head: {
      titleTemplate: '%s - My Properties',
      title: 'Demo',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'A demo Nuxt.js project',
        },
      ],
    },
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  modules: ['@nuxt/ui', '@nuxt/fonts', '@nuxtjs/i18n'],
  i18n: {
    vueI18n: './i18n.config.ts',
    locales: [
      {
        code: 'en',
        language: 'en-US',
      },
      {
        code: 'th',
        language: 'th-TH',
      },
    ],
    defaultLocale: 'en',
  },
  postcss: {
    plugins: {
      'postcss-nested': {},
      'postcss-hexrgba': {},
      'postcss-import': {},
    },
  },
})
