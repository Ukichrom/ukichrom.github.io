// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Portfolio | Mathilde',
      meta: [
        { name: 'description', content: 'Portfolio de Mathilde' }
      ]
    },
    baseURL: 'ukichrom.github.io',
    buildAssetsDir: 'assets'
  },

  alias: {
    'styled-system': resolve('./styled-system')
  },

  css: [
    '@/assets/css/global.css',
  ],

  postcss: {
    plugins: {
      '@pandacss/dev/postcss': {},
    }
  }
})
