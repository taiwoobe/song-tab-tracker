<template>
    <div>
        <v-content>
            <v-container grid-list-xl>
                <v-layout wrap>
                    <v-flex>
                        <shared-panel title="Song Metadata">
                            <v-card-text>
                                <v-text-field label="Song Title" v-validate="'required'" name="title" v-model="song.title"></v-text-field>
                                <v-text-field label="Artist Name" v-validate="'required'" name="artist" v-model="song.artist"></v-text-field>
                                <v-text-field label="Country" v-validate="'required'" name="country" v-model="song.countryOfOrigin"></v-text-field>
                                <v-text-field type="number" label="Song Rating" v-validate="'required'" name="song-rating" v-model="song.rating" min="0" max="10"></v-text-field>
                                <v-text-field label="Genre" v-validate="'required'" name="genre" v-model="song.genre"></v-text-field>
                                <v-text-field label="Album" v-validate="'required'" name="album" v-model="song.album"></v-text-field>
                                <v-text-field label="Cover Art URL" v-validate="'required'" name="coverArt" v-model="song.coverArt"></v-text-field>
                                <v-text-field label="YouTube ID" v-validate="'required'" name="youtubeId" v-model="song.youtubeId"></v-text-field>
                            </v-card-text>
                        </shared-panel>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <shared-panel title="Song Content">
                            <v-card-text>
                                <v-textarea label="Lyrics" v-validate="'required'" name="lyrics" v-model="song.lyrics" rows="25"></v-textarea>
                                <v-card-actions>
                                    <v-btn color="primary" type="submit" @click="saveSong">Save Song</v-btn>
                                    <v-spacer></v-spacer>
                                    <div v-if="error">
                                        {{ error }}
                                    </div>
                                </v-card-actions>
                            </v-card-text>
                        </shared-panel>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import sharedPanel from '../shared/sharedPanel'
import songService from '../../services/songsService'
    export default {
        name: 'editSong',
        components: {
            sharedPanel
        },
        data() {
            return {
                song: {
                    title: '',
                    artist: '',
                    countryOfOrigin: '',
                    rating: '',
                    genre: '',
                    album: '',
                    coverArt: '',
                    youtubeId: '',
                    lyrics: ''
                },
                error: ''      
            }
        },
        async mounted() {
            const song_id = this.$route.params.id;
            const response = await songService.showSong(song_id);
            this.song = response.data.data;
        }, 
        methods: {
            saveSong() {
                this.error = '';
                this.$validator.validate().then(response => {
                    if (response) {
                        songService.updateSong(this.song);
                        this.song = {};
                        this.$router.push({name: 'viewSong'});
                    } else {
                        this.error = 'Please fill in all fields.'
                    }
                }).catch(error => {
                    this.error = 'Something went wrong. Please try again.';
                    console.log(error);
                });
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>