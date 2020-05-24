import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import * as VueGoogleMaps from 'vue2-google-maps' 

require('dotenv').config()

Vue.config.productionTip = false

Vue.use(VueGoogleMaps,{
  load:{
    key: process.env.VUE_APP_MAPKEY,
    libraries: 'places'

  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
