export default defineNuxtConfig({
  future: { compatibilityVersion: 4 },
  compatibilityDate: '2025-07-15',
  css: ['~/assets/scss/main.scss'],
  devtools: { enabled: true },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    'nuxt-studio'
  ],
  ssr: true,
  nitro: {
    prerender: {
      routes: ['/']
    }
  },
  studio: {
    enabled: true,
    git: {
      provider: 'github'
    }
  }
})
