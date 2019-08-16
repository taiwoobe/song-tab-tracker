<template>
   <shared-panel title="Song Lyrics">
        <v-card>
            <v-card-text class="lyrics-content"><pre>{{ lyrics }}</pre></v-card-text>
        </v-card>
    </shared-panel>
</template>

<script>
    export default {
        props: [
            'lyrics'
        ]
    }
</script>

<style lang="scss" scoped>
    .lyrics-content {
        padding: 16px;
        max-height: 500px;
        overflow: auto;
    }
</style>