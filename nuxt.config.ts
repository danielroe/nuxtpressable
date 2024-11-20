// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  future: {
    compatibilityVersion: 4
  },

  css: ['@picocss/pico'],
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  runtimeConfig: {
    oauth: {
      github: {
        clientId: '',
        clientSecret: ''
      }
    }
  },
  modules: ['nuxt-tiptap-editor', 'nuxt-auth-utils'],
  $development: {
    nitro: {
      storage: {
        posts: {
          driver: 'fsLite',
          base: '.posts'
        }
      }
    }
  }
})
