<template>
    <shared-panel title="Recently Viewed Songs">
        <v-card class="card-body">
            <v-data-table :headers="headers" :items="recentlyViewed" class="elevation-1"></v-data-table>
        </v-card>
    </shared-panel>
</template>

<script>
import {mapState} from 'vuex'
    export default {
        data() {
            return {
                headers: [
                    {
                        title: 'Dessert',
                        artist: 'left',
                        value: 'name',
                    },
                    { text: 'Calories', value: 'calories' }
                ],
                recentlyViewed: [

                ]       
            }
        }, 
        computed: {
           ...mapState([
               'isUserLoggedIn'
           ])
        },     
    }
</script>

<style lang="scss" scoped>

</style>