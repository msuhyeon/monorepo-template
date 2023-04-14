import eslintPlugin from 'vite-plugin-eslint';

export default defineNuxtConfig({
  css: ['~/assets/css/base.scss'],
  buildModules: ['nuxt-vite', '@nuxtjs/style-resources'],
  app: {
    head: {
      htmlAttrs: {
        lang: 'ko',
      },
      title: 'msh',
      meta: [{ charset: 'utf-8' }],
    },
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          sourceMap: true,
          additionalData: `
                          @import "@/assets/css/common/variables.scss";
                          @import "@/assets/css/common/mixins.scss"; 
                      `,
        },
      },
    },
    // '@fortawesome/fontawesome-svg-core/styles.css',

    modules: [
      [
        '@fullpage/nuxt-fullpage',
        {
          activeSection: 0,
          mouseWheelSensitivity: 120,
          showIndicators: false,
        },
      ],
    ],
    plugins: [
      eslintPlugin({
        failOnError: false,
        cache: false,
      }),
    ],
  },
});
