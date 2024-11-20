// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-tiptap-editor',
    'nuxt-auth-utils',
    '@nuxt/eslint',
  ],
  $development: {
    nitro: {
      storage: {
        posts: {
          driver: 'fsLite',
          base: '.posts',
        },
      },
    },
  },
  devtools: { enabled: true },

  css: ['@picocss/pico'],
  runtimeConfig: {
    oauth: {
      github: {
        clientId: '',
        clientSecret: '',
      },
    },
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-04-03',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
