<template>
   <shared-panel title="Songs">
        <v-btn slot="action" light medium absolute right middle fab @click="addSong()">
            <v-icon>add</v-icon>
        </v-btn>
        <v-row class="songs">
            <v-col sm="12" md="6" lg="6" v-for="song in songs" :key="song._id">
                <v-card>
                    <v-img height="200px" :src="song.coverArt"></v-img>
                    <v-card-title class="align-end fill-height">
                        {{song.title}} - {{ song.artist }} 
                    </v-card-title>
                    <v-card-text><strong>Genre: </strong> {{ song.genre }}</v-card-text>
                    <v-card-text class="v-card__text2"><strong>Album: </strong> {{ song.album }}</v-card-text>
                    <v-card-actions>
                        <v-btn icon>
                            <v-icon>favorite</v-icon>
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
</template>

<script>
import songServices from '../../services/songsService'
import {mapState} from 'vuex'
    export default {
        data() {
            return {
                songs: null
            }
        },
        computed: {
           ...mapState([
               'isUserLoggedIn'
           ]) 
        },
        watch: {
            '$route.query.search': {
                immediate: true,
                async handler(value) {
                    const response  = await songServices.getAllSongs(value);
                    this.songs = response.data.data;
                }
            }
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