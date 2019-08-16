<template>
    <shared-panel title="Song Metadata">
        <v-card class="card-body">
            <v-img height="200px" :src="song.coverArt"></v-img>
             <v-btn light medium absolute right middle fab @click="editSong(song)">
                <v-icon>edit</v-icon>
            </v-btn>
            <v-card-title class="align-end fill-height">
                {{song.title}} - {{ song.artist }}
            </v-card-title>
            <v-card-text><strong>Name of Artist: </strong> {{ song.artist }}</v-card-text>
            <v-card-text><strong>Country: </strong> {{ song.countryOfOrigin }}</v-card-text>
            <v-card-text><strong>Artist Rating: </strong> {{ song.rating }}</v-card-text>
            <v-card-text><strong>Genre: </strong> {{ song.genre }}</v-card-text>
            <v-card-text class="v-card__text2"><strong>Album: </strong> {{ song.album }}</v-card-text>
            <v-card-text class="v-card__text2"><strong>Youtube ID: </strong> {{ song.youtubeId }}</v-card-text>
        </v-card>
    </shared-panel>
</template>

<script>
    export default {
        props: [
            'song'
        ],
        methods: {
            editSong() {
                this.$router.push({name: 'editSong'});
            }
        },
    }
</script>

<style lang="scss" scoped>
    .card-body {
        padding: 20px 16px;
        max-height: 500px;
    }
    .v-card__title {
        padding: 16px 0;
    }
    .v-card__text {
        display: flex;
        padding: 0 0 10px;
    }
    strong {
        width: 45%;
    }
    button {
        margin-top: 15px;
    }

    // MEDIA QUERIES
    @media(min-width: 992px) {
        strong {
            width: 30%;
        }
    }
</style>