<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="toolbar"
      hide-on-scroll
    > 
      <nuxt-link to="/">
        <logo></logo>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn 
          @click="scrollToAbout"
          text>About Me
        </v-btn>
        <v-btn 
          @click="scrollToExperience"
          text>Working Experience
        </v-btn>
        <v-btn
          @click="scrollToPortfolio"
          text>Portfolio
        </v-btn>
        
        <v-btn
          outlined
          depressed
          download
          href="./CV_GOMEZ_2020.pdf"
          text>
          Resume
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
        <nuxt />
    </v-content>
  </v-app>
</template>

<script>
import Logo from '~/components/Logo.vue'
import { eventHub } from '~/utils/eventHub.js'
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  components: {
    Logo
  },
  methods: {
    scrollToAbout () {
      eventHub.$emit('scroll-to-about')
    },
    scrollToExperience () {
      eventHub.$emit('scroll-to-experience')
    },
    scrollToPortfolio () {
      eventHub.$emit('scroll-to-portfolio')
    }
  }
}
</script>
