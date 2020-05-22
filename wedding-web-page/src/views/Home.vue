<template>
  <v-container fluid pa-0 ma-0>
    <div class="home">
      <img width="100%" src="../assets/homepage/fp-picture4.png">
    </div>
    <div>
      <Countdown end="September 26, 2020"></Countdown>
    </div>

  </v-container>
</template>

<script>
import Countdown from './../components/Countdown'
export default {
  components: {
    Countdown
  }
}
</script>

<style scoped>
.home{
  padding: 0;
}
#clock{
  border-top: 0;
  background: #f7e7ce;
  color: #8c5151;
}
</style>
