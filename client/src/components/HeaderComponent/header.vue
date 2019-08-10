<template>
    <v-toolbar color="primary" dark flat>
        <v-toolbar-title>
            <router-link to="/">Song Tab Tracker APP</router-link>
        </v-toolbar-title>
        <v-toolbar-items>
            <v-btn class="primary" dark text> Browse </v-btn>
        </v-toolbar-items>
        <v-spacer></v-spacer>
        <v-toolbar-items v-if="!$store.state.isUserLoggedIn">
            <v-btn class="primary" dark text @click="navigateToLogin"> 
                Login
            </v-btn>
            <v-btn class="primary" dark text @click="navigateToRegister"> 
                Sign Up
            </v-btn>
        </v-toolbar-items>
        <v-toolbar-items v-else>
            <v-btn class="primary" dark text> Logout </v-btn>
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
            navigateToLogin() {
                this.$router.push('login');
            },
            navigateToRegister() {
                this.$router.push('register');
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