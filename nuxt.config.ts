// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    'nuxt-tiptap-editor',
    'nuxt-auth-utils',
    '@nuxt/eslint',
  ],
  $production: {
    nitro: {
      storage: {
        posts: {
          driver: 'cloudflareKVHTTP',
          accountId: process.env.CF_ACCOUNT_ID,
          namespaceId: process.env.CF_NAMESPACE_ID,
          apiToken: process.env.CF_API_TOKEN,
        },
      },
    },
  },
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
