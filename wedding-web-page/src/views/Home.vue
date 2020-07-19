<template>
  <v-container fluid  pa-0 ma-0>
      <div >
        <img class="home" :src="screenSize">
      </div>
      <v-row>
        <v-col>
          <v-row justify="center">
            <p>2020.
            Szeptember 26.</p>
          </v-row>
        </v-col>
      </v-row>
  </v-container>
</template>

<script>
export default {
  computed:{
    screenSize(){
      return this.$vuetify.breakpoint.smAndDown ? require('../assets/homepage/mobile_main_final.png') : require('../assets/homepage/main_final.png')
    }
  }
}
</script>

<style scoped>
  .home{
    padding: 0;
    display: block;
    width: 100%;
  }


</style>
