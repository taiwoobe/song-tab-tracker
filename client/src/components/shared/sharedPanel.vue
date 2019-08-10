<template>  
    <v-card class="elevation-12">
        <v-toolbar color="primary" dark flat>
            <v-toolbar-title>{{ title }}</v-toolbar-title>
            <v-spacer></v-spacer>
            <slot name="action"></slot>
        </v-toolbar>
        <slot>
            No slot defined yet.
        </slot>
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
            }
        },
        props: [
            'title'
        ]
    }
</script>

<style lang="scss" scoped>
</style>