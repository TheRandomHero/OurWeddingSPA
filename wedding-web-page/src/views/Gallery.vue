<template>
<v-container fluid>
    <v-card :to="{name: 'GallerySlide', params: {group: 'Kreativ'}}">
        <img src="./../assets/kreativ.jpg" >
    </v-card>
    <v-card :to="{name: 'GallerySlide', params: {group: 'lagzi'}}">
        <img src="./../assets/lagzis.jpg" >
    </v-card>
</v-container>    
</template>
<script>
export default {
    
}
</script>
<style scoped>

</style>