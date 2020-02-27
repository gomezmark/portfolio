<template>
  <v-app>
    <v-app-bar
      app
      dark
      color="dark darken-3"
      hide-on-scroll
    > 
      <nuxt-link to="/">
        <logo></logo>
      </nuxt-link>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn 
          text>About Me
        </v-btn>
        <v-btn 
          text>Working Experience
        </v-btn>
        <v-btn
          to="#portfolio"
          text>Portfolio
        </v-btn>
        <v-btn
          outlined
          depressed
          to="#portfolio"
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
  }
}
</script>
