<template>
  <v-app>
    <v-app-bar
      app
      hide-on-scroll
    >
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn 
          text>About Me
        </v-btn>
        <v-btn 
          text>Working Experience
        </v-btn>
        <v-btn 
          text>Portfolio
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-content>
      <v-container class="pa-0">
        <nuxt />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
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
  }
}
</script>
