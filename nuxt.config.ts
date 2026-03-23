export default defineNuxtConfig({
  app: {
    baseURL: '/1serve/',
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/1serve/favicon.ico' }
      ]
    }
  },
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
      routes: ['/'],
      crawlLinks: true,
      failOnError: false
    }
  },
  studio: {
    repository: {
      provider: 'github',
      owner: 'mtimshin',
      repo: '1serve',
      branch: 'master'
    }
  }
})
