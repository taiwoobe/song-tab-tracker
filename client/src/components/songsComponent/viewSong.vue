<template>
    <div>
        <div v-if="song">
            <h2>The song id is {{ song_id }}</h2>
            Song title: {{ song.title }}
        </div>
    </div>
</template>

<script>
    // name: 'viewSong'
    import songServices from '../../services/songsService'
    export default {    
        data() {
            return {
                song_id: '',
                song: null
            }
        },
        async mounted() {
            this.song_id = this.$route.params.id;
            const response = await songServices.showSong(this.song_id);
            this.song = response.data.data;
        },
    }
</script>

<style lang="scss" scoped>

</style>