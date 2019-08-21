<template>
    <div>
        <v-content>
            <v-container grid-list-xl>
                <v-layout :class="{'justify-center': !isUserLoggedIn}">
                    <v-flex :class="{ md10: !isUserLoggedIn, sm12: isUserLoggedIn, lg6: isUserLoggedIn}" class="mx-2">
                        <song-search></song-search>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container grid-list-xl>
                <v-layout wrap justify-center>
                    <v-flex :class="{ md10: !isUserLoggedIn, sm12: isUserLoggedIn, lg6: isUserLoggedIn}">
                        <songs-panel></songs-panel>
                    </v-flex>
                    <v-flex :class="{ md10: !isUserLoggedIn, sm12: isUserLoggedIn, lg6: isUserLoggedIn}"  v-if="isUserLoggedIn">
                        <recently-viewed-songs></recently-viewed-songs>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import songSearch from './songSearch'
import songsPanel from './songPanel'
import recentlyViewedSongs from './recentlyViewedSongs'
import {mapState} from 'vuex'

    export default {
        components: {
            songSearch,
            songsPanel,
            recentlyViewedSongs
        },
        data() {
            return {
            }
        },
        computed: {
           ...mapState([
               'isUserLoggedIn'
           ])
        },
    }
</script>

<style lang="scss" scoped>

</style>