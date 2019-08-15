<template>
    <shared-panel title="Youtube Video">
        <v-card class="card-body">
            <youtube :video-id="youtubeId" player-width="100%"></youtube>
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
            'youtubeId'
        ]
    }
</script>

<style lang="scss" scoped>
    .card-body {
        padding: 20px 16px;
    }
    .v-card__text {
        padding: 0 0 10px;
    }
    // MEDIA QUERIES
</style>