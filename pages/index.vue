<template>
  <div>
    <div class="grey darken-3">
      <page-container>
        <v-layout dark style="height:100vh">
          <v-flex class="text-center">
            <v-card dark color="transparent" flat>
              <v-card-text class="pf-index-card pa-5">
                <v-layout row wrap align-center justify-center>
                  <v-flex xs12 md12 text-sm-left>
                    <div class="mb-5">
                      <p class="pf-display-3 mb-5">I'm Mark Anthony Gomez</p>
                    </div>
                    <div class="text-sm-left mb-">
                      <p class="opc-5 pr-desc-line">
                        Experienced Software Engineer / Front-end developer with a
                        demonstrated history of working in web development industry.
                      </p>
                    </div>
                    <v-btn
                      dark
                      outlined
                      large
                      href="mailto:gomez.mark29@gmail.com"
                      color="accent"
                    >Get In Touch Now</v-btn>
                  </v-flex>
                </v-layout>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </page-container>
    </div>

    <!-- working experience -->
    <div 
      ref="Experience"
      class="pf-content-container">
      
        <page-container>
          <v-layout row wrap>
            <v-flex xs12 sm12 mb-5>
              <h2 class="headline font-weight-light bold">Working Experience</h2>
            </v-flex>
            <v-flex md5>
              <v-timeline>
                <v-timeline-item v-for="(year, i) in experience" :key="i" small left>
                  <template left>
                    <span
                      class="btn-pointer"
                      v-text="year.year"
                      :class="{ 'primary--text font-weight-bold' : year.id === window }"
                      @click="window = year.id"
                    ></span>
                  </template>
                </v-timeline-item>
              </v-timeline>
            </v-flex>
            <v-flex xs12 md7>
              <v-window v-model="window" vertical>
                <template v-for="(data, key) in experience">
                  <v-window-item :value="data.id" :key="`exp-${key}`" class>
                    <div class="py-4">
                      <h2 class="headline font-weight-light bold">{{ data.title }}</h2>
                      <div class="mb-3">
                        <p class="grey--text mb-0">{{ data.company }}</p>
                        <p class="grey--text f-12">{{ data.year }}</p>
                      </div>
                      <ul>
                        <li
                          class="f-14"
                          v-for="(item, key) in data.description"
                          :key="`${data.year}-${key}`"
                        >{{ item }}</li>
                      </ul>
                    </div>
                  </v-window-item>
                </template>
              </v-window>
            </v-flex>
          </v-layout>
        </page-container>
    </div>
    <!-- working experience -->

    <!-- techonologies -->
    <div class="toolbar white--text py-5">
      <page-container>
        <v-container grid-list-xs>
          <v-layout row wrap align-center>
            <v-flex md12>
              <p class="accent--text">Some of Technologies I have been using recently</p>
              <template v-for="(item, key) in technologies">
                <v-icon
                  v-if="key !== 0"
                  color="accent"
                  class="mx-3"
                  small
                  :key="`t-c-${key}`">fab fa-circle</v-icon>
                <span 
                  :key="`tech-${key}`"
                  class="grey--text">
                  {{ item }}
                </span>
              </template>
            </v-flex>
          </v-layout>
        </v-container>
      </page-container>
    </div>

    <!-- education -->
    <div class="pf-educ-container" style="background-color:#f1f1f1;">
      <page-container>
        <v-layout row wrap mb-5>
          <span
            text
            class="btn-educ-pointer"
            :class="{ 'active': credWindow === 'c1'}"
            @click="credWindow = 'c1'"
          >Education</span>
          <span
            text
            class="btn-educ-pointer"
            :class="{ 'active': credWindow === 'c2'}"
            @click="credWindow = 'c2'"
          >Certifications</span>
          <span
            text
            class="btn-educ-pointer"
            :class="{ 'active': credWindow === 'c3'}"
            @click="credWindow = 'c3'"
          >Others</span>
        </v-layout>
        <v-spacer></v-spacer>
        <div class="content-container">
          <v-layout row wrap mx-0>
            <v-flex xs12>
              <v-window v-model="credWindow">
                <v-window-item value="c1">
                  <v-layout row wrap>
                    <v-flex
                      md12
                      xs12
                      mb-2
                      v-for="(item, key) in education"
                      :key="`education-${key}`"
                    >
                      <p class="title mb-1 primary--text">{{ item.title }}</p>
                      <span>{{ item.school }}</span>
                      <p class="f-14 grey--text">{{ item.year }}</p>
                    </v-flex>
                  </v-layout>
                </v-window-item>
                <v-window-item value="c2">
                  <certifications></certifications>
                </v-window-item>
                <v-window-item value="c3">
                  <others-certifications></others-certifications>
                </v-window-item>
              </v-window>
            </v-flex>
          </v-layout>
        </div>
      </page-container>
    </div>
    <!-- education -->

    <div 
      ref="Portfolio"
      class="pf-portfolio-container">
      <page-container>
        <v-container grid-list-xl>
          <v-layout row wrap>
            <v-flex xs12 text-sm-center text-xs-center>
              <span class="headline font-weight-light bold">Portfolio</span>
            </v-flex>
          </v-layout>
          <v-layout row wrap justify-center align-center>
            <v-slide-group class="pa-4" show-arrows>
              <v-slide-item
                v-for="(item, key) in portfolio"
                :key="key"
                >
                <v-flex xs12 sm12 md12 lg8 xl8 text-sm-center>
                  <v-card 
                    class="ma-4" 
                    height="250" 
                    @click="viewPortfolio(key)">
                      <v-img 
                        :src="item.image"
                        background-position="start"
                        max-width="300"
                        max-height="250"
                        cover
                        style="margin:auto">
                      </v-img>
                  </v-card>
                </v-flex>
              </v-slide-item>
            </v-slide-group>
          </v-layout>
        </v-container>
      </page-container>
    </div>

    <div class="pf-portfolio-container toolbar">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 text-sm-center text-xs-center mb-5>
            <span class="pf-display-1 font-weight-light bold white--text">My Photography</span>
          </v-flex>
        </v-layout>
        <v-layout row wrap justify-center align-center>
          <v-slide-group v-model="model" class="pa-4" show-arrows>
            <v-slide-item
              v-for="(item, key) in photos"
              :key="key"
            >
              <v-flex xs12 md12 mb-3 text-sm-center text-xs-cener>
                <v-card 
                  class="ma-4">
                    <v-img 
                      :src="item.src"
                      background-position="start"
                      max-width="250"
                      max-height="400"
                      cover>
                    </v-img>
                </v-card>
              </v-flex>
            </v-slide-item>
          </v-slide-group>
          <v-flex xs12 sm12 md12 text-sm-center text-xs-center>
            <v-btn 
              outlined
              depressed
              large
              color="accent"
              to="/photography">
              Take a Tour  
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <!-- working as freelance -->
    <div 
      class="pf-portfolio-container toolbar darken-1 pa-5">
      <v-container grid-list-xl>
        <v-layout row wrap>
          <v-flex xs12 text-sm-center text-xs-center mb-5>
            <span class="font-weight-light bold accent--text pf-display-1">Working as Freelance</span>
          </v-flex>
          <v-flex xs12 sm12>
            <div class="white--text text-sm-center text-xs-center pf-display-1">
              <p>Do you need a website for your Business or for your Personal Blogs?</p>
              <p>Let us discuss your needs and let help you build your site.</p>
            </div>
          </v-flex>
          <v-flex xs12 md12 text-sm-center text-xs-center>
            <v-btn 
              depressed
              large
              outlined
              color="accent">Drop me a message</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>


    <div 
      ref="About"
      class="pf-about-me-container pa-5" 
      style="background-color:#f1f1f1;">
      <page-container>
        <v-container grid-list-md>
          <v-layout row wrap align-center>
            <v-flex md6 sm6 mb-3>
              <p class="pf-display-1">Myself</p>
              <p>There are more stuff I am doing about my life.</p>
              <p>Being a web devloper / programmer is just one.</p>
              <div class="text-xs-center">
                <v-btn 
                  large
                  depressed
                  color="accent"
                  to="/about">
                  <span class="toolbar--text">Know more things About Me</span>
                </v-btn>
              </div>
            </v-flex>
            <v-flex md6 sm6 mb-5>
              <div class="relative">
                <v-img src=".//sagada.jpg"></v-img>
                <div class="pf-img-label">
                  Sagada, Mountain Province
                </div>
              </div>
            </v-flex>
          </v-layout>
        </v-container>
      </page-container>
    </div>

    

    <!-- portfolio dialog -->
    <v-dialog
      v-model="portfolioDialog"
      scrollable 
      :overlay="false"
      max-width="800px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-text class="">
          <v-container grid-list-lg>
            <v-layout row wrap>
              <v-flex md8>
               <v-img :src="portfolio[pView].image"></v-img>
              </v-flex>
              <v-flex md4>
                <p class="primary--text">{{ portfolio[pView].title }}</p>
                <p>{{ portfolio[pView].description }}</p>
                <template v-for="(item, key) in portfolio[pView].technologies">
                  <v-icon
                    v-if="key !==0 "
                    :key="`d-tech-${key}`"
                    small
                    color="accent">fab fa-circle</v-icon>
                  <span
                    :key="`tech-${key}`"
                    class="grey--text f-12">
                    {{ item }}
                  </span>
                </template>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
import PageContainer from "~/components/tools/PageContainer.vue";
import Certifications from "~/components/Certifications.vue";
import OthersCertifications from "~/components/OthersCertifications.vue";

import { eventHub } from '~/utils/eventHub.js'

export default {
  data() {
    return {
      window: "e1",
      credWindow: "c1",
      experience: [
        {
          id: "e1",
          color: "cyan",
          year: "2017 - PRESENT",
          title: "Software Engineer",
          company: "Leandev Inc",
          description: [
            "Team Lead / Scrum master in small team for Hotel Reservation and Project Orange (prototype)",
            "Contact person with various suppliers such Priceline, YrbookingPro and Yrbooking",
            "Develop and deliver quality and efficient application",
            "Contributor on Backend team on delivering minimum tasks"
          ],
          technologies: [
            "Vue.js",
            "Nuxt.js",
            "jQuery",
            "Node.js",
            "Express.js",
            "html",
            "css",
            "javascript",
            "css",
            "php"
          ],
          others: ["git", "jira"]
        },
        {
          id: "e2",
          color: "green",
          year: "2015 - 2017",
          title: "Jr. Web Developer",
          company: "Leandev Inc",
          description: [
            "Front Developer for FlyAkeed (Flight Reservation and Ticketing Application)",
            "Deliver and develop assigned tasks"
          ],
          technologies: ["jQuery", "html", "css"],
          others: ["grunt"]
        },
        {
          id: "e3",
          color: "pink",
          year: "2014 - 2015",
          title: "Software Developer",
          company: "EHS Philippines",
          description: [
            "Former Name: Hoya Manufacturing Philippines Inc.",
            "Handling In-house operation applications such Barcoding and Evnvelope printing system, Product Precision Inspection System, etc",
            "Maintining HR related systems such as Timesheet, Shuttle reservation system, etc"
          ],
          technologies: ["VB.Net", "VB 6.0", "C#", "VBA", "php", "html", "css"]
        },
        {
          id: "e4",
          color: "amber",
          year: "2012 - 2014",
          title: "Lecturer | Instructor",
          company: "Informatics Computer Institute Los Banos Branch",
          description: [
            "Deliver minor and major subjects",
            "Assess and execute programs provided on the cirriculum"
          ],
          others: []
        },
        {
          color: "orange",
          year: "Freelance",
          title: "Photographer",
          company: "",
          description: [],
          others: []
        }
      ],
      education: [
        {
          title: "Bachelor of Computer Science",
          school: "Informatics College Northgate",
          year: "2011 - 2013"
        },
        {
          title: "International Advanced Diploma in Computer Studies",
          school: "Informatics Computer Institute Los Banos",
          year: "2008 - 2010"
        },
        {
          title: "Secondary Education",
          school: "Trace College",
          year: "2004 - 2008"
        }
      ],
      portfolio: [
        {
          id: 1,
          title: "Hotelsakeed",
          description: "A web application for hotel reservation. It has multiple supplier for listing of hotels and rooms available",
          technologies: ['Vue.js', 'Nuxt.js', 'Javascript', 'CSS', 'HTML', 'Express.js', 'PHP', 'Node.js', 'MySQL', 'MongoDB'],
          image: "./hotelsakeed.PNG"
        },
        {
          id: 2,
          title: "Asia-Pacific Multilingual Education Working Group",
          description: "An organization that provides quality of education for ethnolinguistic communities on different regions of Asia",
          technologies: ['Vue.js', 'Nuxt.js', 'Vuetify', 'Javascript', 'HTML', 'CSS'],
          image: "./mle.JPG"
        },
        {
          id: 3,
          title: "Flyakeed",
          description: "A web application for flight ticketing and flight reservation. The application provides an easy way of flight reservation.",
          technologies: ['jQuery', 'javascript', 'HTML', 'CSS', 'Bootstrap', 'grunt'],
          image: "./flyakeed.PNG"
        },
        {
          id: 4,
          title: "Mages Social Landing Page",
          description: "A landing page used for social media interaction",
          technologies: ['Vue.js', 'html', 'css'],
          image: "./mages.jpg"
        }
      ],
      photos: [
        {
          src: "./photography/3.jpg"
        },
        {
          src: "./photography/4.jpg"
        },
        {
          src: "./photography/5.jpg"
        },
        {
          src: "./photography/6.jpg"
        }
      ],
      portfolioDialog: false,
      pView: 0,
      technologies: [
        'Javascript',
        'Vue.js',
        'Nuxt.js',
        'CSS / CSS3',
        'HTML',
        'NodeJs',
        'Express',
        'PHP'
      ]
    };
  },
  components: {
    PageContainer,
    Certifications,
    OthersCertifications
  },
  methods: {
    viewPortfolio(item) {
      if (Object.keys(this.portfolio[item]).length) {
        this.pView = item
        this.portfolioDialog = true
      } 
    },
    scrollToAbout () {
      this.scrollToElement(this.$refs.About)
    },
    scrollToExperience () {
      this.scrollToElement(this.$refs.Experience)      
    },
    scrollToPortfolio () {
      this.scrollToElement(this.$refs.Portfolio)      
    }
  },
  mounted() {
    eventHub.$on('scroll-to-about', this.scrollToAbout)
    eventHub.$on('scroll-to-experience', this.scrollToExperience)
    eventHub.$on('scroll-to-portfolio', this.scrollToPortfolio)
  }
};
</script>z