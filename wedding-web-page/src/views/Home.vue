<template>
  <v-container fluid  pa-0 ma-0>
      <div >
        <img class="home" :src="screenSize">
      </div>
      <v-row>
        <v-col>
          <v-row justify="center">
            <p class="date">2020.
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
@import url('https://fonts.googleapis.com/css2?family=Pattaya');
  .home{
    padding: 0;
    display: block;
    width: 100%;
  }
.date{
  font-family: 'Pattaya';
  font-size: 2em;
}

</style>
