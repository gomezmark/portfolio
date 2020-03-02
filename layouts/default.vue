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
    <div class="pf-footer-container toolbar darken-1">
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12 md12 mb-5>
            <div class="text-sm-center white--text pf-display-1">
              <p>Let's talk about the things in your mind</p>
            </div>
            <p class="grey--text text-sm-center">Code . Travel . Game . Sleep</p>
          </v-flex>
          <v-flex xs12 md12 sm12 text-sm-center mb-5>
            <a 
              class="mx-3 pf-btn"
              href="https://www.linkedin.com/in/mark-anthony-gomez-172453141/" target="_blank">
              <v-icon 
                color="accent"
                small>fab fa-linkedin</v-icon>
            </a>
            <a 
              class="mx-3 pf-btn"
              href="https://github.com/gomezmark" target="_blank">
              <v-icon 
                color="accent"
                small>fab fa-github</v-icon>
            </a>
            <a 
              class="mx-3 pf-btn"
              href="https://www.youtube.com/channel/UCeDWkTmuk2tqQUzhARIa--A?view_as=subscriber" target="_blank">
              <v-icon 
                color="accent"
                small>fab fa-youtube</v-icon>
            </a>
            <a 
              class="mx-3 pf-btn"
              href="https://www.instagram.com/rikugomez/" target="_blank">
              <v-icon 
                color="accent"
                small>fab fa-instagram</v-icon>
            </a>
          </v-flex>
          <v-flex xs12 sm12 text-sm-center>
            <div class="grey--text f-12">
              © Mark Gomez 2020. All rights reserved
            </div>
          </v-flex>
        </v-layout>
        <v-layout row wrap align-center>
          <v-flex text-sm-left>
            <div class="mb-4">
             <nuxt-link
                small
                class="accent--text f-12"
                to="/about"
                >
                About
              </nuxt-link>
            </div>
            <div class="mb-4">

              <nuxt-link
                small
                class="accent--text f-12"
                to="/photography"
                >
                Photography
              </nuxt-link>
            </div>
            <div class="mb-4">
              <v-btn
                outlined
                depressed
                download
                href="./CV_GOMEZ_2020.pdf"
                color="accent"
                text
                small>
                Resume
              </v-btn>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>
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
