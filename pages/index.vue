<template>
  <v-layout
    dark
    class="primary"
    style="height:100vh">
    <v-flex class="text-center">
      <v-card dark color="transparent" flat>
        <v-card-text
          class="pf-index-card pa-5">
          <p class="display-3">Hi!</p>
          <p class="display-2">I'm Mark Anthony Gomez</p>
          <p class="display-1">I am a Software Engineer / Frontend developer in the Philippines!</p>
          <v-btn
            to="/about"
            color="success">Learm More</v-btn>
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