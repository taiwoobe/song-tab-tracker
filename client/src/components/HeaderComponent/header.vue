<template>
    <v-toolbar color="primary" dark flat>
        <v-toolbar-title>
            <router-link to="/">Song Tab Tracker APP</router-link>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn class="primary" dark text @click="navigateTo({name: 'songs'})"> Browse </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
            <v-btn class="primary" dark text @click="navigateTo({name: 'login'})"> 
                Login
            </v-btn>
            <v-btn class="primary" dark text @click="navigateTo({name: 'register'})"> 
                Sign Up
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items v-else>
            <v-btn class="primary" dark text @click="logout"> Logout </v-btn>
        </v-toolbar-items>
    </v-toolbar>

</template>

<script>
    export default {
        data() {
            return {
            }
        },
        methods: {
            navigateTo(route) {
                this.$router.push(route);
            },
            logout() {
                this.$store.dispatch('setToken', null);
                this.$store.dispatch('setUser', null);
                this.$router.push('login');
            }
        },
    }
</script>

<style lang="scss" scoped>
header {
    max-height: 64px;
    a {
        color: #fff;
        button {
            height: 64px !important;
        }
    }
}
</style>