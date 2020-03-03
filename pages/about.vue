<template>
    <div>
        <div class="pf-about-container intro toolbar white--text">
            <v-container grid-list-xs>
                <v-layout row wrap>
                    <v-flex xs12 md6>
                        <p class="pf-display-1">About Myself</p>

                        <p>
                            I am software developer, I have started using .NET software and MsSQL. Now, I am web developer 
                            which specialize on frontend.
                        </p>
                        <p>
                            This is curreny carreer and pursuing my goal as Project Consultant. But there are lot of things
                            to know and I am open for new possibilies and new world to be explored.
                        </p>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>

        <!-- hike -->
        <div class="pf-about-container">
            <v-container grid-list-lg>
                <v-layout row wrap>
                    <v-flex xs12 md5>
                        <v-slide-group class="pa-4" show-arrows>
                            <v-slide-item
                                v-for="(item, key) in mountains"
                                :key="key"
                            >
                                <v-card 
                                    class="ma-4"
                                    width="300"
                                    flat
                                    color="transparent">
                                    <v-img 
                                    :src="item.image"
                                    background-position="start"
                                    max-width="100%"
                                    height="300"
                                    contain>
                                    </v-img>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-flex>
                    <v-flex xs12 md7>
                        <p class="pf-display-1">Adventures of the Mountains</p>
                        <p class="mb-5">
                            During long weekends and opportunity, I go to travel and hike mountains.
                            Conquering each summit and breathing the air on the top are the bests.
                        </p>
                        <div class="grey--text italic text-xs-center text-sm-cente">
                            <p class="bold">
                                ETIQUTTE 101
                            </p>
                            <p class="mb-0">
                                Leave nothing but footprints
                            </p>
                            <p class="mb-0">
                                Take nothing but pictures
                            </p>
                            <p class="mb-0">
                                Kill nothing but Time
                            </p>
                        </div>

                    </v-flex>
                    
                </v-layout>

            </v-container>
        </div>

        <!-- running -->
        <div class="pf-about-container toolbar my-5 pa-5">
            <v-container grid-list-lg>
                <v-layout row wrap align-center>
                    <v-flex md7>
                        <div class="white--text">
                            <p class="pf-display-1">Shoes on the Road</p>
                            <p>
                                I also do physical activities, this includes RUNNING.
                            </p>
                            <p>
                                I started to run in a small distance for about 3 kilometers. Until it become longer and longer distance. Last 2018, I joined in a full marathon held in Manila. This was farthest I've so far.
                            </p>
                        </div>
                    </v-flex>
                    <v-flex md5 xs12 text-sm-center>
                        <v-slide-group 
                            class="pa-4" show-arrows
                            max="1">
                            <v-slide-item
                                v-for="(item, key) in running"
                                :key="key"
                            >
                                <v-card 
                                    class="ma-4"
                                    width="300"
                                    flat
                                    color="transparent">
                                    <v-img 
                                        :src="item.image"
                                        background-position="start"
                                        max-width="100%"
                                        height="350"
                                        contain>
                                    </v-img>
                                </v-card>
                            </v-slide-item>
                        </v-slide-group>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>

        <!-- food -->
        <div class="pf-about-container my-5 py-5">
            <v-container grid-list-xs>
                <v-layout row wrap align-center mb-5>
                    <v-flex md12 xs12>
                        <p class="pf-display-1">Are you Hungry? Let's Eat!</p>
                        <p class="grey--text">Some of the dishes from my menu</p>
                    </v-flex>
                    <template v-for="(item, key) in foods">
                        <v-flex
                            :key="`food-${key}`"
                             md4 sm6 xs12>
                            <v-img
                                :src="item.image"></v-img>
                        </v-flex>
                    </template>
                </v-layout>
                <v-layout>
                  <v-flex xs12 sm12 md12 text-sm-center text-xs-center mb-5>
                    <v-btn color="accent"
                      depressed
                      large
                      to="/"
                      >
                      <span class="toolbar--text">Go to Home</span>
                    </v-btn>
                  </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            mountains: [
                {
                    image: "./sagada.jpg"
                },
                {
                    image: "./pamintinan.jpg"
                },
                {
                    image: "./daraitan.jpg"
                }
            ],
            running: [
                {
                    image: "../running.jpg"
                },
                {
                    image: "../running2.jpg"
                }
            ],
            foods: [
                {
                    image: "../food/1.jpg"
                },
                {
                    image: "../food/2.jpg"
                },
                {
                    image: "../food/3.jpg"
                },
                {
                    image: "../food/4.jpg"
                },
                {
                    image: "../food/5.jpg"
                },
                {
                    image: "../food/6.jpg"
                }
            ]
        }
    }
}
</script>