<template>
    <v-text-field label="Search Song" v-validate="'required'" name="search" v-model="searchSong"></v-text-field>
    <!-- <shared-panel title="Search Songs" class="search-panel">
        <v-card>
            <v-text-field label="Search Song" v-validate="'required'" name="search" v-model="search"></v-text-field>
        </v-card>
    </shared-panel> -->
</template>

<script>
    export default {
        data() {
            return {
                searchSong: ''
            }
        },
        watch: {
            searchSong(value) {
                const route = {
                    name: 'songs'
                }
                if (this.searchSong !== '') {
                    route.query = {
                        search: this.searchSong
                    }
                }
                this.$router.push(route);
            },
            '$route.query.search': {
                immediate: true,
                handler(value) {
                    this.searchSong = value
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
.search-panel {
    margin-bottom: 20px;
    .v-card {
        padding: 16px;
    }
}
</style>