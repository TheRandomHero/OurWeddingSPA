import Vue from 'vue'
import Cloudinary, { CldImage } from 'cloudinary-vue'

Vue.use(Cloudinary, {
  configuration: { cloudName: 'weddingphotos' },
  components: [CldImage]
})
