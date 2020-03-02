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
                      to="mailto:gomez.mark29@gmail.com"
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
    <div class="pf-content-container">
      <page-container>
        <v-layout row wrap>
          <v-flex xs12 sm12 mb-5>
            <h2 class="headline font-weight-light bold">Working Experience</h2>
          </v-flex>
          <v-flex md4>
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
          <v-flex xs12 md8>
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

    <div class="pf-portfolio-container">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 text-sm-center>
            <span class="headline font-weight-light bold">Portfolio</span>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-slide-group v-model="model" class="pa-4" show-arrows>
              <v-slide-item
                v-for="(item, key) in portfolio"
                :key="key"
              >
                <v-card 
                  class="ma-4" 
                  height="250" 
                  width="300" 
                  @click="viewPortfolio(key)">
                    <v-img 
                      :src="item.image"
                      background-position="start"
                      max-width="300"
                      max-height="250"
                      cover>
                    </v-img>
                </v-card>
              </v-slide-item>
            </v-slide-group>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="pf-portfolio-container toolbar">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 text-sm-center mb-5>
            <span class="pf-display-1 font-weight-light bold white--text">My Photography</span>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12 md12 mb-3>
            <v-slide-group v-model="model" class="pa-4" show-arrows>
              <v-slide-item
                v-for="(item, key) in photos"
                :key="key"
              >
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
              </v-slide-item>
            </v-slide-group>
          </v-flex>
          <v-flex xs12 sm12 md12 text-sm-center>
            <v-btn 
              outlined
              depressed
              large
              color="accent">
              Take a Tour  
            </v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <!-- working as freelance -->
    <div class="pf-portfolio-container toolbar darken-1">
      <v-container>
        <v-layout row wrap>
          <v-flex xs12 text-sm-center mb-5>
            <span class="font-weight-light bold accent--text pf-display-1">Working as Freelance</span>
          </v-flex>
          <v-flex xs12 sm12>
            <div class="white--text text-sm-center pf-display-1">
              <p>Do you need a website for your Business or for your Personal Blogs?</p>
              <p>Let us discuss your needs and let help you build your site.</p>
            </div>
          </v-flex>
          <v-flex xs12 md12 text-sm-center>
            <v-btn 
              depressed
              large
              outlined
              color="accent">Drop me a message</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </div>


    <div class="pf-about-me-container" style="background-color:#f1f1f1;">
      <v-container grid-list-xs>
        <v-layout row wrap align-center>
          <v-flex md6 sm6>
            <p class="pf-display-1">Myself</p>
            <p>There are more stuff I am doing about my life.</p>
            <p>Being a web devloper / programmer is just one.</p>
            <v-btn 
              large
              depressed
              color="accent">
              <span class="toolbar--text">Know more things About Me</span>
            </v-btn>
          </v-flex>
          <v-flex md6 sm6>
            <div class="relative">
              <v-img src=".//sagada.jpg"></v-img>
              <div class="pf-img-label">
                Sagada, Mountain Province
              </div>
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <div class="pf-footer-container toolbar darken-1">
      <v-container grid-list-xs>
        <v-layout row wrap>
          <v-flex xs12 md12 mb-5>
            <div class="text-sm-center white--text pf-display-1">
              <p>Let's talk about the things in your mind</p>
            </div>
            <p class="grey--text text-sm-center">Code . Travel . Game . Sleep</p>
          </v-flex>
          <v-flex xs12 md12 sm12 text-sm-center mb-3>
            <a 
              class="mx-3 outlined"
              href="https://www.linkedin.com/in/mark-anthony-gomez-172453141/" target="_blank">
              <v-icon 
                color="accent"
                small>fab fa-linkedin</v-icon>
            </a>
            <a 
              class="mx-3"
              href="https://github.com/gomezmark" target="_blank">
              <v-icon 
                color="accent"
                small>fab fa-github</v-icon>
            </a>
            <a 
              class="mx-3"
              href="https://www.youtube.com/channel/UCeDWkTmuk2tqQUzhARIa--A?view_as=subscriber" target="_blank">
              <v-icon 
                color="accent"
                small>fab fa-youtube</v-icon>
            </a>
            <a 
              class="mx-3"
              href="https://www.instagram.com/rikugomez/" target="_blank">
              <v-icon 
                color="accent"
                small>fab fa-instagram</v-icon>
            </a>
          </v-flex>
          <v-flex xs12 sm12 text-sm-center>
            <div class="grey--text f-12">
              © Mark Gomez 2020. All rights reserved
            </div>
          </v-flex>
        </v-layout>
      </v-container>
    </div>

    <!-- portfolio dialog -->
    <v-dialog
      v-model="portfolioDialog"
      scrollable 
      :overlay="false"
      max-width="700px"
      transition="dialog-transition"
    >
      <v-card>
        <v-card-text class="pa-0">
          <v-container grid-list-xs>
            <v-layout row wrap>
              <v-flex md8>
               <v-img :src="portfolio[pView].image"></v-img>
              </v-flex>
              <v-flex md4>
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
          description: "",
          image: "./hotelsakeed.PNG"
        },
        {
          id: 2,
          title: "Asia-Pacific Multilingual Education Working Group",
          description: "",
          image: "./mle.JPG"
        },
        {
          id: 3,
          title: "Flyakeed",
          description: "",
          image: "./flyakeed.PNG"
        },
        {
          id: 4,
          title: "Mages Social Landing Page",
          description: "",
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
      pView: 0
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
    }
  }
};
</script>z