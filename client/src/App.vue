<template>
<div id="app">
  <v-app>
    <page-header></page-header>
    <router-view/>
  </v-app>
</div>
</template>

<script>
import PageHeader from './components/HeaderComponent/header.vue'
export default {
  components: {
    PageHeader
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
body {
  margin: 0;
}
a {
  text-decoration: none;
  &:hover {
    text-decoration: none;
  }
}
</style>
