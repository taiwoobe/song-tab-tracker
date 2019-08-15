<template>
    <div>
        <h2>the product id is {{ song_id }}</h2>
        <!-- <div class="col-md-12" v-for="(song_id,index) in songs" :key="index">
        <div v-if="song_id == product.productId">
        <h1>{{song.title}}</h1>
        </div>
        </div> -->
    </div>
</template>

<script>
    name: 'viewSong'
    export default {
        data() {
            return {
                song_id: this.$route.params.id,
            }
        },
    }
</script>

<style lang="scss" scoped>

</style>