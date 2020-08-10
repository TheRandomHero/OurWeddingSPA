<template>
    <v-container fluid fill-height class="gallery-slide">   
      <v-row>
          <v-col>
              <v-row justify="space-around">
                  <v-card v-for="(url,index) in images" :key="index" height="250" class="image-cards" max-width="400">
                      <img :src="url" @click="show(index)" height="250" style="max-width:400px;">
                  </v-card>
                  <VueEasyLightbox
                  :visible="visible"
                  :imgs="images"
                  :index="index"
                  @hide="handleHide"
                  ></VueEasyLightbox>
              </v-row>
          </v-col>
      </v-row>
    </v-container>
</template>
<script>
import VueEasyLightbox from 'vue-easy-lightbox'
import axios from 'axios'

export default {
    data() {
    return {
     images: [],
     visible:false,
     index:0,
     

    }
  },
     props:{
       group: String
     }
,
     created: function() {
    axios.get('https://res.cloudinary.com/weddingphotos/image/list/' + this.group +'.json')
    .then((res) => {
      this.images = res.data.resources.map(t => 
        
        `https://res.cloudinary.com/weddingphotos/image/upload/v${t.version}/${t.public_id}.jpg`
        
      )
    })
  },
   methods: {
    show(index) {
      this.visible = true
      this.index = index;
    },
    handleHide() {
      this.visible = false
    }
  },
  components:{
      VueEasyLightbox
  }
}
</script>

<style scoped>
  .gallery-slide{
    overflow: hidden;
  }
  .image-cards{
    margin: 20px;
  }
</style>
