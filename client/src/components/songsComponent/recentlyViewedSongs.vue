<template>
    <shared-panel title="Recently Viewed Songs">
        <v-card class="card-body">
            <v-data-table :headers="headers" :items="recentlyViewed" :items-per-page="5"></v-data-table>
        </v-card>
    </shared-panel>
</template>

<script>
import recentlyViewedServices from '../../services/recentlyViewedServices'
import {mapState} from 'vuex'
    export default {
        data() {
            return {
                headers: [
                    {
                        text: 'Title',
                        artist: 'left',
                        value: 'name',
                    },
                    { 
                        text: 'Artist',
                        artist: 'Burna Boy',
                        value: 'calories' 
                    },
                    { 
                        text: 'Genre',
                        artist: 'Burna Boy',
                        value: 'calories' 
                    }
                ],
                recentlyViewed: []       
            }
        }, 
        computed: {
           ...mapState([
               'isUserLoggedIn'
           ])
        },  
        async mounted() {
            if(this.isUserLoggedIn) {
                const response = await recentlyViewedServices.getRecentlyViewedSongs({
                    userId: this.user._id
                });
                console.log(response.data.data);
                this.recentlyViewed = response.data.data;
            }
        },   
    }
</script>

<style lang="scss" scoped>

</style>