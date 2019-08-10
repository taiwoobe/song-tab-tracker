<template>
    <div>
        <v-content>
            <v-container grid-list-xl>
                <v-layout wrap>
                    <v-flex>
                        <shared-panel title="Song Metadata">
                            <v-card-text>
                                <v-text-field label="Title" v-validate="'required'" name="title" v-model="song.title"></v-text-field>
                                <span>{{ errors.first('title') }}</span>
                                <v-text-field label="Artist" v-validate="'required'" v-model="song.artist"></v-text-field>
                                <v-text-field label="Genre" v-validate="'required'" v-model="song.genre"></v-text-field>
                                <v-text-field label="Cover Art URL" v-validate="'required'" v-model="song.coverArt"></v-text-field>
                                <v-text-field label="YouTube ID" v-validate="'required'" v-model="song.youtubeId"></v-text-field>
                            </v-card-text>
                        </shared-panel>
                    </v-flex>
                    <v-flex xs12 sm6 md6>
                        <shared-panel title="Song Content">
                            <v-card-text>
                                <v-textarea label="Lyrics" v-validate="'required'" v-model="song.lyrics"></v-textarea>
                                <v-textarea label="Tab" v-validate="'required'" v-model="song.tab"></v-textarea>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="primary" type="submit" @click="createSong">Create Song</v-btn>
                            </v-card-actions>
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
        name: 'createSong',
        components: {
            sharedPanel
        },
        data() {
            return {
                song: {
                    title: '',
                    artist: '',
                    genre: '',
                    album: '',
                    coverArt: '',
                    youtubeId: '',
                    lyrics: '',
                    tab: ''       
                }
            }
        },
        methods: {
            async createSong() {
                try {
                    const response = await songService.createNewSong(this.song);
                    this.song = {};
                } catch (error) {
                    console.log(error);
                }
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>