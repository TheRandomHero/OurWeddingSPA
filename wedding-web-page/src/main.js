import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps'
import Cloudinary, { CldImage } from 'cloudinary-vue'

require('dotenv').config()

Vue.config.productionTip = false
Vue.use(vueResource)

Vue.use(Cloudinary, {
  configuration: {
    cloudName: 'weddingphotos',
    apiKey: process.env.VUE_APP_PHOTOAPIKEY,
    apiSecret: process.env.VUE_APP_PHOTOSECRETKEY
  },
  components: [ CldImage ]
})

Vue.use(VueGoogleMaps, {
  load: {
    key: process.env.VUE_APP_MAPKEY,
    libraries: 'places'

  }
})

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
