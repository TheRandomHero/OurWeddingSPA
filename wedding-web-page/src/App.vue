<template>
  <v-app>
  <nav-drawer/>
  <router-view></router-view>
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
