<template>
  <v-container fluid fill-height pa-0 ma-0>
        <div >
          <img v-bind:class="[screenSize ? 'mobile-home' : 'home']" src="../assets/homepage/main3.png">
        </div>
  </v-container>
</template>

<script>
export default {
  computed:{
    screenSize(){
      console.log(this.$vuetify.breakpoint.smAndDown)
      return this.$vuetify.breakpoint.smAndDown
    }
  }
}
</script>

<style scoped>
  .home{
    padding: 0;
    display: block;
    margin-left: 20%;
  }

  .mobile-home{
    padding: 0;
    width: 100%;
  }

</style>
