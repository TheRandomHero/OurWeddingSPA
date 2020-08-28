<template>
  <v-container fluid  pa-0 ma-0>
      <div >
        <img class="home" :src="screenSize">
      </div>
      <v-row>
        <v-col>
          <v-row justify="center">
            <div class="date stamp">2020.
            Szeptember 26.</div>
          </v-row>
          <v-row justify="center">
            <div class="new-date">
              Az új dátum: <br>
              2021. Június 25.
            </div>
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
    width: 100%;
  }
.date{
  font-family: 'Pattaya';
  font-size: 2em;
  display:inline-block;
  vertical-align:top;
  box-sizing:border-box;
  position:relative;
}

.new-date{
  font-family: 'Pattaya';
  font-size: 2em;
  display:inline-block;
  position:relative;
  margin-top: 40px;
  text-align: center;
}

.stamp::after {
  content: "ELHALASZTVA";
  position: absolute;
  z-index: 1;
  transform: rotate(12deg);
	font-size: 2rem;
	font-weight: 700;
  color: #D23;
  border: 0.5rem double #D23;
	display: block;
  top: -10px;
  top: 0px;
	padding: 0.25rem 1rem;
	text-transform: uppercase;
	border-radius: 1rem;
	font-family: 'Courier';
	-webkit-mask-image: url('https://s3-us-west-2.amazonaws.com/s.cdpn.io/8399/grunge.png');
  -webkit-mask-size: 944px 604px;
}
</style>
