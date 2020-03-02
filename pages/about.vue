<template>
    <div>
        <div class="pf-about-container toolbar white--text">
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
                        <v-img src="./sagada.jpg"></v-img>
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
        <div class="pf-about-container toolbar my-5 py-5">
            <v-container grid-list-lg>
                <v-layout row wrap>
                    
                    <v-flex md8>
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
                    <v-flex md4 text-sm-center>
                        <v-img 
                            height="400"
                            src="../running.jpg"
                            contain></v-img>
                    </v-flex>
                </v-layout>
            </v-container>
        </div>
    </div>
</template>