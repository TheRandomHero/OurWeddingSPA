<template>
  <v-container fluid>
    <v-subheader>
      <p>Melinda és Attila</p>
    </v-subheader>
    <div class="home">
      <img alt="Vue logo" src="../assets/logo.png">
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
  text-align: center;
}

#clock{
  border-top: 0;
  background: #f7e7ce;
  color: #8c5151;
}
</style>
