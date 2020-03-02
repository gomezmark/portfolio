<template>
  <div>
    <v-container class="mb-3">
      <template v-for="(item, key) in certificates.slice(0, limit)">
        <div
          class="py-5"
          :key="`cert-div-${key}`"
          v-if="key !== 0">
          <v-divider></v-divider>
        </div>
        <v-layout 
          :key="`cert-${key}`"
          row 
          flex-nowrap
          align-start
        >
          <div style="width:60px">
            <v-img
              :src="item.logo ? item.logo : './empty_certificate.png'"
              width="50"
              height="50"
              contain>
            </v-img>
          </div>
          <div class="ml-3">
            <p class="title primary--text">{{ item.title }}</p>
            <div>
              <p class="mb-0">{{ item.issuedBy }}</p>
              <p 
                v-if="item.certId"
                class="mb-0 grey--text">
                Certification Id: {{ item.certId }}
              </p>
              <p 
                v-if="item.issuingDate && item.expirationDate"
                class="mb-0 grey--text f-14">{{ item.issuingDate}} - {{ item.expirationDate }}</p>
            </div>
          </div>
        </v-layout>
      </template>
    </v-container>
    <v-layout row wrap v-if="certificates.length > 5">
      <v-flex xs12 text-sm-center>
        <template v-if="limit !== certificates.length">
          <v-btn 
            outlined
            color="primary"
            @click="viewMore">
            View More
          </v-btn>
        </template>
        <template v-else>
          <v-btn 
            outlined
            color="primary"
            @click="limit = 5">
            View Less
          </v-btn>
        </template>
      </v-flex>
    </v-layout>
  </div>

</template>

<script>
export default {
  data () {
    return {
      limit: 5,
      certificates: [
        {
          title: 'How To Conquer your Fears and Fulfill your Dreams',
          issuedBy: 'Udemy',
          certId: '',
          issuingDate: 'Feb 2012',
          expirationDate: '',
          logo: './udemy.png'
        },
        {
          title: 'How To Conquer your Fears and Fulfill your Dreams',
          issuedBy: 'Udemy',
          certId: '',
          issuingDate: 'Feb 2012',
          expirationDate: '',
          logo: './udemy.png'
        }
      ]
    }
  },
  methods: {
    viewMore () {
      this.limit = this.certificates.length
    }
  }
}
</script>