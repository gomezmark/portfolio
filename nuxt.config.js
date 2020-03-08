import colors from 'vuetify/es5/util/colors'

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: ''
    // base: '/sample-test/'
  }
} : {};

export default {
  mode: 'spa',
  /*
  ** Headers of the page
  */
  head: {
    // titleTemplate: '%s - ' + process.env.npm_package_name,
    title: 'Mark Gomez Portfolio',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      {
        hid: 'description',
        name: 'description',
        content: 'I am Mark Anthony Gomez, a Software Engineer / Web developer which specialize on front end development with working experience on the corporate world. I am open for business opportunites, freelance projects and management, project-based web applciation.'
      },
      { 'http-equiv': 'pragma', content: 'no-cache' },
      { 'http-equiv': 'cache-control', content: 'max-age=2628000, public' },
      { 'http-equiv': 'expires', content: '0' },
      {
        property: 'og:title',
        content: 'Mark Gomez | Software Engineer / Web developer -- Frontend | Freelance developer'
      },
      {
        property: 'og:description',
        content: 'Let me help you to build your website or application that you need either Business or Personal.'
      },
      {
        property: 'og:site_name',
        content: 'Mark Gomez | Software Engineer'
      },
      {
        property: 'og:url',
        content: 'gomezmark.com'
      },
      {
        property: 'og:type',
        content: 'website'
      },
      {
        property: 'og:image',
        content: 'https://gomezmark.com/markgomez.jpg'
      },
      {
        property: 'og:image:width',
        content: '1297'
      },
      {
        property: 'og:image:height',
        content: '653'
      }
    ],
    link: [
      { rel: 'stylesheet', type: 'css', href: 'https://fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap' },
      { rel: 'icon', type: 'image/x-icon', href: '/logo.ico' }
    ]
  },
  ...routerBase,
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  transition: {
    name: 'slide-left',
    mode: 'out-in'
  },
  /*
  ** Global CSS
  */
  css: [
    '~/assets/app.styl'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/vuetify.js', ssr: false },
    { src: '~/plugins/velocity.js', ssr: false },
    { src: '~/utils/events.js', ssr: false }
  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
  ],
  /*
  ** vuetify module configuration
  ** https://github.com/nuxt-community/vuetify-module
  */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      themes: {
        light: {
          toolbar: '#262626',
          primary: '#900c3f',
          accent: '#FFCC00'
        },
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      config.module.rules.push({
        test: /\.scss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            // Requires sass-loader@^7.0.0
            options: {
              // This is the path to your variables
              data: "@import '@/assets/variables.scss';"
            },
            // Requires sass-loader@^8.0.0
            options: {
              // This is the path to your variables
              prependData: "@import '@/assets/variables.scss';"
            },
          }
        ]
      })
    }
  }
}
