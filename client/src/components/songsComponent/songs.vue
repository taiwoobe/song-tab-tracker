<template>
    <div>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm12 md10>
                        <song-search></song-search>
                        <songs-panel></songs-panel>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import songSearch from './songSearch'
import songsPanel from './songPanel'
import songServices from '../../services/songsService'
    export default {
        components: {
            songSearch,
            songsPanel
        },
        data() {
            return {
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>