<template>
    <v-navigation-drawer app permanent width="350" height="100%">
        <v-img src="./../assets/ring.jpg"  class="drawer-img" height="100%" width="100%"> 
        <v-list nav class="pa-0">
            <v-list-item v-for="(item,i) in navItems" :key="i" router :to="item.route">
                <v-list-item-content>
                    <v-list-item-title>{{ item.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-img>
    </v-navigation-drawer>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        { text: 'Galéria', route: '/gallery' },
        { text: 'Információ', route: '/info' },
        { text: 'Program', route: '/program'}
      ]
    }
  }
}
</script>
<style scoped>
</style>
