<template>
  <v-layout row wrap justify-center align-center>
    <v-flex md10>
      <v-carousel
        cycle
        height="700"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item, i) in list"
          :key="i"
        >
          <v-card>
            <v-card-text>
              <v-layout column wrap>
                <p>{{ item.title }}</p>
                <v-img
                  :src="item.image"
                ></v-img>
              </v-layout>
            </v-card-text>
          </v-card>
        </v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          id: 1,
          title: 'Hotelsakeed',
          description: '',
          image: './hotelsakeed.png'
        },
        {
          id: 2,
          title: 'Asia-Pacific Multilingual Education Working Group',
          description: '',
          image: './mle.jpg'
        }
      ]
    }
  }
}
</script>