// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  target: 'static',

  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head: {
      viewport: 'width=device-width, initial-scale=1.0, viewport-fit=cover',
      title: 'mmERCH playground',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{ name: 'description', content: 'content' }],
    },
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
