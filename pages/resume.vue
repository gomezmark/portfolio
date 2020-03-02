<template>
  <v-container 
    class="py-0"
    grid-list-lg 
  >
    <v-snackbar
      v-model="snackbar"
      :multi-line="multiLine"
      top
      right
      color="error"
    >
      This page is under construction
      <v-btn
        color="white"
        text
        @click="snackbar = false"
      >
        Close
      </v-btn>
    </v-snackbar>

    <u-animate-container>
      <u-animate
        name="slideInDown"
        delay="0.3s"
        duration="1s"
        :iteration="1"
        :offset="1"
        animateClass="animated"
        :begin="false" 
      >
        <v-layout
          row
          justify-center
          align-center
        >
          <v-flex 
            lg9
            md12
            sm12
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
                  <h2 class="ml-3 grey--text">Software Engineer / Frontend Developer</h2>
                  <div class="pf-img-hr pf-right"></div>
                  <h1 class="ml-3 display-2">MARK ANTHONY GOMEZ</h1>
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
                          mx-0
                          mb-3
                          flex-nowrap
                        >
                          <v-icon>fa-map-marker-alt</v-icon>
                          <span class="ml-2">San Antoio, Los Banos, Laguna, Philippines 4030</span>
                        </v-layout>
                        <v-layout
                          row
                          mx-0
                          mb-3
                          flex-nowrap
                        >
                          <v-icon>fa-phone-alt</v-icon>
                          <span class="ml-2">(+63) 995 845 7317</span>
                        </v-layout>
                        <v-layout
                          row
                          mx-0
                          mb-3
                          flex-nowrap
                        >
                          <v-icon>fa-envelope</v-icon>
                          <span class="ml-2">gomez.mark29@gmail.com</span>
                        </v-layout>
                        <!--  -->
                        <v-divider class="my-5"></v-divider>
            
                      </v-card-text>
                    </v-card>
                    <v-spacer></v-spacer>
                    <v-card 
                      dark
                      color="transparent"
                      flat>
                      <v-card-text>
                        <!-- social -->
                        <social></social>
                      </v-card-text>
                    </v-card>
                  </div>
                </v-flex>
                <v-flex md8>
                  <div class="px-3">
                    <v-layout row wrap>
                      <v-btn
                        depressed
                        rounded
                        color="accent"
                        @click="window = 1">Working Experience
                      </v-btn>
                      <v-btn
                        class="mx-2"
                        depressed
                        rounded
                        color="accent"
                        @click="window = 2">Education
                      </v-btn>
                      <v-btn
                        class="mx-2"
                        depressed
                        rounded
                        color="accent"
                        @click="window = 3">Certifications
                      </v-btn>
                    </v-layout>
                    <div class="my-3">
                      <v-divider></v-divider>
                    </div>

                    <v-window v-model="window">
                      <v-window-item 
                        class="pf-window-container"
                        :value="1">
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
                      </v-window-item>
                      <v-window-item 
                        class="pf-window-container"
                        :value="2">
                        <!-- educational content -->
                        <v-layout row wrap mt-5>
                          <v-flex md12 xs12>
                            <p class="headline accent--text">Education</p>
                          </v-flex>
                          <v-flex
                            md12
                            xs12
                            mb-2
                            v-for="(item, key) in education"
                            :key="`education-${key}`">
                            <p class="title mb-1">{{ item.title }}</p>
                            <span>{{ item.school }}</span>
                            <p class="f-14 grey--text">{{ item.year }}</p>
                          </v-flex>
                        </v-layout>
                      </v-window-item>
                      <v-window-item 
                        class="pf-window-container"
                        :value="3">
                        <certifications></certifications>
                      </v-window-item>
                    </v-window>
                  </div>
                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
      </u-animate>
    </u-animate-container>

    <u-animate-container>
      <u-animate
        name="slideInDown"
        delay="0.5s"
        duration="1s"
        :iteration="1"
        :offset="1"
        animateClass="animated"
        :begin="false" 
      >
        <div 
          id="portfolio"
          class="my-5 pf-portfolio">
          <v-layout row wrap>
            <v-flex xs12>
              <p class="text-sm-center display-3 pr-title">Portfolio</p>
            </v-flex>
          </v-layout>
          <div class="my-3">
            <v-divider></v-divider>
          </div>
          <v-layout row wrap justify-center>
            <v-flex xs12>
              <portfolio></portfolio>
            </v-flex>
          </v-layout>
        </div>
      </u-animate>
    </u-animate-container>
  </v-container>

</template>

<script>
import Logo from '~/components/Logo.vue'
import Social from '~/components/Social.vue'
import Portfolio from '~/components/Portfolio.vue'
import Certifications from '~/components/Certifications.vue'

// mount with component
import {UAnimateContainer, UAnimate} from 'vue-wow'

export default {
  data () {
    return {
      window: 1,
      snackbar: true,
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
    Social,
    Portfolio,
    Certifications
  }
}
</script>
