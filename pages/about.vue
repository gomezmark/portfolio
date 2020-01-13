<template>
  <v-container 
    class="py-0 primary"
    grid-list-lg 
  >
    <v-layout
      row
      justify-center
      align-center
    >
      <v-flex 
        md9
      >
        <v-card>
          <v-layout
            row wrap align-center
          >
            <v-flex 
              class="relative"
              md4 
              py-0
            >
              <div class="pf-img-hr"></div>
              <div 
                class="primary py-5" 
                style="height:100%;">
                <v-img 
                  max-height="200"
                  max-width="200"
                  src="./display_photo.png"
                  style="margin:30px auto;">
                </v-img>
              </div>
            </v-flex>
            <v-flex md8 class="relative">
              <div class="pf-img-hr pf-right"></div>
              <h1 class="ml-3">MARK ANTHONY GOMEZ</h1>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex 
              md4
              py-0
              class=""
            >
              <div 
                class="primary px-3"
                style="height:100%">
                <v-card
                  :elevation="0"
                  color="transparent"
                  flat
                  dark>
                  <v-card-text>
                    <ul class="mb-5">
                      <li
                        v-for="(item, key) in objectives"
                        :key="`key-${key}`"
                      >
                        {{ item }}
                      </li>
                    </ul>
                    <v-layout
                      row
                      align-center
                      mx-0
                      wrap
                    >
                      <v-flex md2>
                        <v-icon>map</v-icon>
                      </v-flex>
                      <v-flex md10>
                        San Antoio, Los Banos, Laguna, Philippines 4030
                      </v-flex>
                      <v-flex md2>
                        <v-icon>call</v-icon>
                      </v-flex>
                      <v-flex md10>
                        (+63) 995 845 7317
                      </v-flex>
                      <v-flex md2>
                        <v-icon>email</v-icon>
                      </v-flex>
                      <v-flex md10>
                        gomez.mark29@gmail.com
                      </v-flex>
                    </v-layout>
                    <!--  -->
                    <v-divider class="my-5"></v-divider>
                    <!-- educational content -->
                    <v-layout row wrap mt-5>
                      <v-flex md12>
                        <p class="headline white--text">Education</p>
                      </v-flex>
                      <v-flex
                        md12
                        mb-2
                        v-for="(item, key) in education"
                        :key="`education-${key}`">
                        <p class="title mb-1 white--text">{{ item.title }}</p>
                        <span>{{ item.school }}</span>
                        <p>{{ item.year }}</p>
                      </v-flex>
                    </v-layout>
                  </v-card-text>
                </v-card>
              </div>
            </v-flex>
            <v-flex md8>
              <div class="px-3">
                <h3 class="title primary--text">Working Experience</h3>
                <div class="my-3">
                  <v-divider></v-divider>
                </div>
                <v-timeline>
                <v-timeline-item
                  v-for="(year, i) in experience"
                  :key="i"
                  small
                >
                  <template v-slot:opposite>
                    <span
                      :class="`headline font-weight-bold`"
                      v-text="year.year"
                    ></span>
                  </template>
                  <div class="py-4">
                    <h2 :class="`headline font-weight-light mb-4`">{{ year.title }}</h2>
                    <ul>
                      <li
                        class="f-14"
                        v-for="(item, key) in year.description"
                        :key="`${year.year}-${key}`"
                      >
                        {{ item }}
                      </li>
                    </ul>
                  </div>
                </v-timeline-item>
              </v-timeline>
              </div>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <div class="my-5 pf-portfolio">
      <v-layout row wrap>
        <v-flex xs12>
          <p class="text-sm-center display-3">Portfolio</p>
        </v-flex>
      </v-layout>
    </div>
  </v-container>

</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'

export default {
  data () {
    return {
      experience: [
        {
          color: 'cyan',
          year: '2017 - PRESENT',
          title: "Software Engineer",
          company: "Leandev Inc",
          description: [
            'Team Lead / Scrum master in small team for Hotel Reservation and Project Orange (prototype)',
            'Contact person with various suppliers such Priceline, YrbookingPro and Yrbooking',
            'Develop and deliver quality and efficient application',
            'Contributor on Backend team on delivering minimum tasks'
          ],
          technologies: ['Vue.js', 'Nuxt.js', 'jQuery', 'Node.js', 'Express.js', 'html', 'css', 'javascript', 'css', 'php'],
          others: ['git', 'jira']
        },
        {
          color: 'green',
          year: '2015 - 2017',
          title: "Jr. Web Developer",
          company: "Leandev Inc",
          description: [
            'Front Developer for FlyAkeed (Flight Reservation and Ticketing Application)',
            'Deliver and develop assigned tasks'
          ],
          technologies: ['jQuery', 'html', 'css'],
          others: ['grunt']
        },
        {
          color: 'pink',
          year: '2014 - 2015',
          title: 'Software Developer',
          company: 'EHS Philippines',
          description: [
            'Former Name: Hoya Manufacturing Philippines Inc.',
            'Handling In-house operation applications such Barcoding and Evnvelope printing system, Product Precision Inspection System, etc',
            'Maintining HR related systems such as Timesheet, Shuttle reservation system, etc'

          ],
          technologies: ['VB.Net', 'VB 6.0', 'C#', 'VBA', 'php', 'html', 'css']
        },
        {
          color: 'amber',
          year: '2012 - 2014',
          title: 'Lecturer | Instructor',
          company: 'Informatics Computer Institute Los Banos Branch',
          description: [
            'Deliver minor and major subjects',
            'Assess and execute programs provided on the cirriculum'
          ],
          others: []
        },
        {
          color: 'orange',
          year: 'Freelance',
          title: 'Photographer',
          company: '',
          description: [],
          others: []
        },
      ],
      objectives: [
        'To apply my knowledge and skills to become a global leader in the corporate world',
        'To broaden my skills and develop new set skill'
      ],
      education: [
        {
          title: 'Bachelor of Computer Science',
          school: 'Informatics College Northgate',
          year: '2011 - 2013'
        },
        {
          title: 'International Advanced Diploma in Computer Studies',
          school: 'Informatics Computer Institute Los Banos',
          year: '2008 - 2010'
        },
        {
          title: 'Secondary Education',
          school: 'Trace College',
          year: '2004 - 2008'
        },
      ]
    }
  },
  components: {
    Logo,
    VuetifyLogo
  }
}
</script>
