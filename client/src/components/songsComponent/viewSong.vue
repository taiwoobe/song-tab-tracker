<template>
    <div v-if="song">
         <v-content>
            <v-container fluid fill-height>
                <v-layout align-center justify-center>
                    <v-flex xs12 sm12 md12>
                        <v-row class="songs">
                            <v-col sm="12" md="6">
                                <song-metadata :song="song"></song-metadata>
                            </v-col>
                            <v-col sm="12" md="6">
                                <lyrics-metadata :lyrics="song.lyrics"></lyrics-metadata>
                            </v-col>
                            <v-col sm="12" md="6">
                                <youtube-metadata :youtubeId="song.youtubeId"></youtube-metadata>
                            </v-col>
                        </v-row>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
    import songMetadata from '../songsComponent/songMetadata'
    import lyricsMetadata from '../songsComponent/lyricsMetadata'
    import youtubeMetadata from '../songsComponent/youtubeMetadata'
    import songService from '../../services/songsService'
    import recentlyViewedServices from '../../services/recentlyViewedServices'
    import {mapState} from 'vuex'
    export default {   
        name: 'viewSong',
        components: {
            songMetadata,
            lyricsMetadata,
            youtubeMetadata
        },
        data() {
            return {
                song_id: '',
                song: {}
            }
        },
        computed: {
           ...mapState([
               'isUserLoggedIn',
               'user'
           ])
        },
        async mounted() {
            this.song_id = this.$route.params.id;
            const response = await songService.showSong(this.song_id);
            this.song = response.data.data;

            if (this.isUserLoggedIn) {
                recentlyViewedServices.addNewHistory({
                    songId: this.song_id,
                    userId: this.user._id
                })
            }
        },
    }
</script>

<style lang="scss" scoped>
    .songs {
        padding: 5px;
    }

// MEDIA QUERIES

</style>