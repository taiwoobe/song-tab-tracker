<template>
    <div>
        <v-content>
            <v-container fluid>
                <v-layout>
                    <v-flex xs12 sm6 md6 class="mx-2">
                        <song-search></song-search>
                    </v-flex>
                </v-layout>
            </v-container>
            <v-container fluid>
                <v-layout justify-center>
                    <v-flex xs12 sm6 md6 class="mx-2">
                        <songs-panel></songs-panel>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
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
    export default {
        components: {
            songSearch,
            songsPanel,
            recentlyViewedSongs
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>