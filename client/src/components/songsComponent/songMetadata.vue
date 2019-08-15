<template>
    <shared-panel title="Song Metadata">
        <v-card class="card-body">
            <v-img height="200px" :src="song.coverArt"></v-img>
            <v-card-title class="align-end fill-height">
                {{song.title}} - {{ song.artist.name }}
            </v-card-title>
            <v-card-text><strong>Name of Artist: </strong> {{ song.artist.name }}</v-card-text>
            <v-card-text><strong>Country: </strong> {{ song.artist.countryOfOrigin }}</v-card-text>
            <v-card-text><strong>Artist Rating: </strong> {{ song.artist.rating }}</v-card-text>
            <v-card-text><strong>Genre: </strong> {{ song.genre }}</v-card-text>
            <v-card-text class="v-card__text2"><strong>Album: </strong> {{ song.album }}</v-card-text>
            <v-card-text class="v-card__text2"><strong>Youtube ID: </strong> {{ song.youtubeId }}</v-card-text>
        </v-card>
    </shared-panel>
</template>

<script>
import sharedPanel from '../shared/sharedPanel'
    export default {
        components: {
            sharedPanel
        },
        props: [
            'song'
        ]
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

    // MEDIA QUERIES
    @media(min-width: 992px) {
        strong {
            width: 30%;
        }
    }
</style>