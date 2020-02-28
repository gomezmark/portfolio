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
                    <p class="display-3 mb-2">I'm Mark Anthony Gomez</p>
                    
                    <div class="text-sm-left">
                      <p class="display-1">
                        Experienced Software Engineer / Front-end developer with a
                        demonstrated history of working in web development industry.
                      </p>
                    </div>
                    <v-btn dark outlined large to="/about" color="white">Learm More</v-btn>
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
          <v-flex xs12 sm12 mb-5 >
            <h2 class="headline font-weight-light bold">Working Experience</h2>
          </v-flex>
          <v-flex md4>
            <v-timeline>
              <v-timeline-item 
                v-for="(year, i) in experience" 
                :key="i" 
                small
                left>
                <template left>
                  <span 
                    class="btn-pointer" v-text="year.year"
                    :class="{ 'primary--text font-weight-bold' : year.id === window }"
                    @click="window = year.id">
                  </span>
                </template>
              </v-timeline-item>
            </v-timeline>
          </v-flex>
          <v-flex xs12 md8>
            <v-window 
              v-model="window"
              vertical>
              <template v-for="(data, key) in experience">
                <v-window-item 
                  :value="data.id"
                  :key="`exp-${key}`"
                  class="" 
                  >
                  <div class="py-4">
                    <h2 
                      class="headline font-weight-light bold">{{ data.title }}</h2>
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
    <div class="pf-content-container" style="background-color:#f1f1f1;">
      <page-container>
        <v-layout row wrap mb-3>
          <v-btn text 
            color="primary"
            @click="credWindow = 'c1'">Education</v-btn>
          <v-btn text 
            color="primary"
            @click="credWindow = 'c2'">Certifications</v-btn>
          <v-btn text 
            color="primary"
            @click="credWindow = 'c3'">Others</v-btn>
        </v-layout>
        <v-spacer></v-spacer>
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
                    :key="`education-${key}`">
                    <p class="title mb-1">{{ item.title }}</p>
                    <span>{{ item.school }}</span>
                    <p class="f-14 grey--text">{{ item.year }}</p>
                  </v-flex>
                </v-layout>
              </v-window-item>
              <v-window-item value="c2">
                <certifications></certifications>
              </v-window-item>

            </v-window>
          </v-flex>
        </v-layout>

      </page-container>
    </div>
    <!-- education -->
  </div>
</template>

<script>
import PageContainer from "~/components/tools/PageContainer.vue";
import Certifications from '~/components/Certifications.vue'

export default {
  data() {
    return {
      window: 'e1',
      credWindow: 'c1',
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
    };
  },
  components: {
    PageContainer,
    Certifications
  }
};
</script>