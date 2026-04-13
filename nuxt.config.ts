// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/i18n'],
  i18n: {
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ru', name: 'Русский', file: 'ru.json' },
      { code: 'uz', name: 'O\'zbek', file: 'uz.json' }
    ],
    defaultLocale: 'en',
    lazy: true,
    langDir: 'app/locales/',
    strategy: 'no_prefix'
  }
})
