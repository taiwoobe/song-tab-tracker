<template>
    <div>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm8 md4>
                        <shared-panel title="Songs">
                            <v-btn slot="action" light medium absolute right middle fab to="songs/create">
                                <v-icon>add</v-icon>
                            </v-btn>
                            <v-card-text>
                                <div v-for="song in songs" :key="song._id">
                                    {{song.title}} - {{song.artist}}
                                </div>
                            </v-card-text>
                        </shared-panel>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import sharedPanel from '../shared/sharedPanel';
import songServices from '../../services/songsService'
    export default {
        components: {
            sharedPanel
        },
        data() {
            return {
                songs: null
            }
        },
        async mounted() {
            const response  = await songServices.getAllSongs();
            this.songs = response.data.data;
        },
    }
</script>

<style lang="scss" scoped>

</style>