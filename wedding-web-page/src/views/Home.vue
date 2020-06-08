<template>
  <v-container fluid pa-0 ma-0>
    <div class="home">
      <img width="100%" src="../assets/homepage/fp-picture4.png">
    </div>
    <v-row>
      <v-col cols="8" offset="2">
        <v-row justify="space-between">
          <v-btn class="mx-2" @click="api()">Rólunk</v-btn>
          <v-btn class="mx-2" href="/info">További információ</v-btn>
          <v-btn class="mx-2" href="/gallery">Galéria megtekintése</v-btn>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  
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
