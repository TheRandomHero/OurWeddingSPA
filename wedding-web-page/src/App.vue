<template>
  <v-app>
  <nav-drawer />
    <v-content style=" background: #fcf8f5;">
      <router-view class="view"></router-view>
    </v-content>
  </v-app>
</template>

<script>
import navBar from './components/NavBar'
export default {
  name: 'App',

  components: {
    navDrawer: navBar
  },

  data: () => ({
    //
  })
}
</script>

<style scoped>
.view{
  display:relative;
}
</style>
