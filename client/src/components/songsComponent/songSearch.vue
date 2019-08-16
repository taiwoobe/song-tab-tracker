<template>
    <v-text-field label="Search Song" v-validate="'required'" name="search" v-model="searchSong"></v-text-field>
</template>

<script>
import _ from 'lodash';
    export default {
        data() {
            return {
                searchSong: ''
            }
        },
        watch: {
            searchSong: _.debounce(async function (value) {
                const route = {
                    name: 'songs'
                }
                if (this.searchSong !== '') {
                    route.query = {
                        search: this.searchSong
                    }
                }
                this.$router.push(route);
            }, 700),
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