<template>
  <v-layout
    dark
    class="primary"
    style="height:100vh">
    <v-flex class="text-center">
      <v-card dark color="transparent" flat>
        <v-card-text
          class="pf-index-card pa-5">
          <v-layout row wrap  align-center>
            <v-flex xs12 md3>
              <v-img
                src="./display_photo.png"
                max-width="250"
                max-height="250"
                >
              </v-img>
            </v-flex>
            <v-flex xs12 md9 text-sm-left>
              <p class="display-3">Hi!</p>
              <p class="display-2">I'm Mark Anthony Gomez</p>
              <p class="display-1">I am a Software Engineer / Frontend developer in the Philippines!</p>
              <div class="my-5">
                <v-divider></v-divider>
              </div>
              <v-btn
                dark
                large
                to="/about"
                color="accent">Learm More
              </v-btn>
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  layout: 'plain'
}
</script>