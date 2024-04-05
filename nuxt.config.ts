// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  css: ['~/assets/css/main.scss'],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  i18n: {
    baseUrl: 'https://mz-portfolio-lyart.vercel.app',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root'
    },
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: 'English'
      },
      {
        code: 'de',
        iso: 'de-DE',
        name: 'Deutsch'
      },
    ]
  }
})
