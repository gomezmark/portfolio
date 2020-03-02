<template>
    <div class="toolbar white--text pf-maintenance-container">
        <v-container grid-list-md>
            <v-layout row wrap>
                <v-flex xs12 sm12 text-sm-center>
                    <p class="pf-display-3">Sorry!</p>
                    <p class="pf-display-1 grey--text">Page Is Not Yet Available</p>
                    <p class="grey--text">I am still working on it.</p>
                </v-flex>
                <v-flex xs12 sm12 md12 text-sm-center>
                    <v-btn 
                        depressed
                        outlined
                        large
                        color="accent"
                        to="/">
                        Get me out of here
                    </v-btn>
                </v-flex>
            </v-layout> 
        </v-container>
    </div>
</template>

<script>
export default {
    layout: 'plain'
}
</script>