<template>
  <v-container>
    <template v-for="(item, key) in certificates">
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
</template>

<script>
export default {
  data () {
    return {
      certificates: [
        {
          title: 'National Competency IV Programming',
          issuedBy: 'TESDA',
          certId: '12130304014243',
          issuingDate: 'Jun 2012',
          expirationDate: 'Jun 2017',
          logo: './tesda.png'
        },
        {
          title: 'National Competency III Visual Graphics',
          issuedBy: 'TESDA',
          certId: '13130203011646',
          issuingDate: null,
          expirationDate: null,
          logo: './tesda.png'
        },
        {
          title: 'Certification of Attendance AUTOCAD MODULE 1',
          issuedBy: 'Informatics Computer Institute',
          certId: '057162',
          issuingDate: null,
          expirationDate: null,
          logo: null
        },
        {
          title: 'International Diploma in Computer',
          issuedBy: 'Informatics International College',
          certId: null,
          issuingDate: null,
          expirationDate: null,
          logo: null
        },
        {
          title: 'TM PLUS - Certificate of Achievement (Conduct Competency Assesment)',
          issuedBy: 'TESDA',
          certId: 'UMAK-TMPLUSB202',
          issuingDate: null,
          expirationDate: null,
          logo: './tesda.png'
        },
        {
          title: 'TM PLUS - Certificate of Achievement (Facilitate Learning Sessions)',
          issuedBy: 'TESDA',
          certId: 'UMAK-TMPLUSB200',
          issuingDate: null,
          expirationDate: null,
          logo: './tesda.png'
        },
        {
          title: 'TM PLUS - Certificate of Achievement (Maintain Training Facilities)',
          issuedBy: 'TESDA',
          certId: 'UMAK-TMPLUSB201',
          issuingDate: null,
          expirationDate: null,
          logo: './tesda.png'
        },
        {
          title: 'TM PLUS - Certificate of Achievement (Plan Traning Sessions)',
          issuedBy: 'TESDA',
          certId: 'UMAK-TMPLUSB145',
          issuingDate: null,
          expirationDate: null,
          logo: './tesda.png'
        },
        {
          title: 'TM PLUS - Certificate of Achievement (Supervise Work-Based Learning)',
          issuedBy: 'TESDA',
          certId: 'UMAK-TMPLUSB146',
          issuingDate: null,
          expirationDate: null,
          logo: './tesda.png'
        },
        {
          title: 'TM PLUS - Certificate of Achievement (TM Plues co-facilitation)',
          issuedBy: 'TESDA',
          certId: 'UMAK-TMPLUSB053',
          issuingDate: '',
          expirationDate: '',
          logo: './tesda.png'
        },
        {
          title: 'TM PLUS - Certificate of Achievement (Utilize Electronic Media in Facilitating Training)',
          issuedBy: 'TESDA',
          certId: 'UMAK-TMPLUSB199',
          issuingDate: '',
          expirationDate: '',
          logo: './tesda.png'
        },
        {
          title: 'Certification of Completion - Nuxt.js',
          issuedBy: 'Udemy',
          certId: '',
          issuingDate: '',
          expirationDate: '',
          logo: './udemy.png'
        },
      ]
    }
  }
}
</script>