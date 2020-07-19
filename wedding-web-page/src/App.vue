<template>
  <v-app>
  <nav-drawer />
    <v-content>
      <transition name="fade" mode="out-in">
        <router-view class="view"></router-view>
      </transition>
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
  overflow: hidden;
  width: 100vw;
}

.fade-enter, .fade-leave-to{
  opacity: 0;
  transform: translateY(5em);
}

.fade-enter-active, .fade-leave-active {
  transition: all .3s ease;
}
</style>
