import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import vueResource from 'vue-resource'
import * as VueGoogleMaps from 'vue2-google-maps'
import Cloudinary, { CldImage } from 'cloudinary-vue'
import Lightbox from 'vue-easy-lightbox'
import '@fortawesome/fontawesome-free/css/all.css'

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

Vue.use(Lightbox)


new Vue({
  router,
  vuetify,
  icons: {
    iconfont: 'fa',
  },
  render: h => h(App)
}).$mount('#app')
