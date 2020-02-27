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
    <div>
      <page-container>
        <v-layout row wrap>
          <v-flex md3>
            <v-timeline>
              <v-timeline-item v-for="(year, i) in experience" :key="i" small>
                <template v-slot:opposite left>
                  <span :class="`headline font-weight-bold`" v-text="year.year"></span>
                </template>
              </v-timeline-item>
            </v-timeline>
          </v-flex>
          <v-flex xs12 md9>
            <v-window v-model="window">
              <v-window-item class="pf-window-container" :value="1">
                <div class="py-4">
                  <h2 :class="`headline font-weight-light mb-4`">{{ year.title }}</h2>
                  <ul>
                    <li
                      class="f-14"
                      v-for="(item, key) in year.description"
                      :key="`${year.year}-${key}`"
                    >{{ item }}</li>
                  </ul>
                </div>
              </v-window-item>
            </v-window>
          </v-flex>
        </v-layout>
      </page-container>
    </div>
    <!-- working experience -->
  </div>
</template>

<script>
import PageContainer from "~/components/tools/PageContainer.vue";
export default {
  data() {
    return {
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
      ]
    };
  },
  components: {
    PageContainer
  }
};
</script>