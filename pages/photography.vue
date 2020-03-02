<template>
  <div>
    <div class="pf-photography-container toolbar">
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12 sm12 md12 text-sm-left>
            <div class="white--text">
              <p class="pf-display-1">Discovering my interests and hobbies.</p>
              <p class="grey--text">
                I've started my photography as passion during my college.
                Then, If I have time I do portraits and food photography.
              </p>
              <p
                class="grey--text"
              >It is good and health warning experience to take photos of some memorable moments.</p>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="my-5">
        <v-container grid-list-xs>

        <v-layout row wrap>
            <v-flex xs12 sm12 md12>
                <p class="text-sm-center pf-display-1">Portraits</p>
            </v-flex>

          <template v-for="(item, key) in photos">
            <v-flex :key="`p-list-${key}`" md3>
              <v-img 
                :src="item.src" 
                max-width="100%" 
                contain></v-img>
            </v-flex>
          </template>
        </v-layout>
        </v-container>

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      photos: [
        {
          src: "../photography/3.jpg"
        },
        {
          src: "../photography/4.jpg"
        },
        {
          src: "../photography/5.jpg"
        },
        {
          src: "../photography/6.jpg"
        },
        {
          src: "../photography/7.jpg"
        },
        {
          src: "../photography/8.jpg"
        },
        {
          src: "../photography/9.jpg"
        },
        {
          src: "../photography/10.jpg"
        },
        {
          src: "../photography/11.jpg"
        },
        {
          src: "../photography/12.jpg"
        },
        {
          src: "../photography/13.jpg"
        },
        {
          src: "../photography/14.jpg"
        }
      ]
    };
  }
};
</script>