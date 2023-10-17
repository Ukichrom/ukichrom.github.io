// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit'
const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  devtools: { enabled: true },

  target: 'static',
  router: {
    base: '/ukichrom.github.io/', //eg:- /crstnmac.github.io/
  },

  app: {
    head: {
      title: 'Portfolio | Mathilde',
      meta: [
        { name: 'description', content: 'Portfolio de Mathilde' }
      ]
    },
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
