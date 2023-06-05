export default defineNuxtConfig({
  target: 'static',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      title: 'mmERCH playground',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'content' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1, viewport-fit=cover',
        },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        {
          name: 'apple-mobile-web-app-status-bar-style',
          content: 'black-translucent',
        },
        { name: 'theme-color', content: '#F5FFF5' },
      ],
    },
  },

  modules: ['nuxt-svgo'],
  svgo: {
    defaultImport: 'component',
    autoImportPath: './assets/icons/',
  },

  vite: {
    css: {
      preprocessorOptions: {
        sass: {
          additionalData: '@import "@/assets/styles/vars/variables.sass"',
        },
      },
    },
  },

  css: [
    '~/assets/styles/reset.css',
    '~/assets/styles/main.sass',
    '~/assets/styles/typography.sass',
  ],
});
