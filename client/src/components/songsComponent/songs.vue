<template>
    <div>
        <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm12 md10>
                        <shared-panel title="Songs">
                            <v-btn slot="action" light medium absolute right middle fab @click="addSong()">
                                <v-icon>add</v-icon>
                            </v-btn>
                            <v-row class="songs">
                                <v-col sm="12" md="4" v-for="song in songs" :key="song._id">
                                    <v-card>
                                        <v-img height="200px" :src="song.coverArt"></v-img>
                                        <v-card-title class="align-end fill-height">{{song.title}} - {{ song.artist }}</v-card-title>
                                        <v-card-text><strong>Genre: </strong> {{ song.genre }}</v-card-text>
                                        <v-card-text class="v-card__text2"><strong>Album: </strong> {{ song.album }}</v-card-text>
                                        <v-card-actions>
                                            <v-btn icon>
                                                <v-icon>favorite</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>share</v-icon>
                                            </v-btn>
                                            <v-btn icon>
                                                <v-icon>bookmark</v-icon>
                                            </v-btn>
                                            <v-spacer></v-spacer>
                                            <v-btn icon @click="viewSong(song)">
                                                <v-icon> keyboard_arrow_right </v-icon>
                                            </v-btn>
                                        </v-card-actions>
                                    </v-card>
                                </v-col>
                            </v-row>
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
        methods: {
            addSong() {
                this.$router.push({name: 'createSong'});
            },
            viewSong(song) {
                this.$router.push({name: 'viewSong', params: {id: song._id}});
            }
        },
    }
</script>

<style lang="scss" scoped>
    .songs {
        padding: 30px;
    }
    .v-card__text {
        padding: 16px 16px 8px;
    }
    .v-card__text2 {
        padding: 0px 16px;
    }
</style>