<template>
    <v-container fluid>
        <v-navigation-drawer app permanent>
            <v-list nav class="pa-0">
                <div class="drawer-header">
                    <router-link to="/">
                        <p>Melinda</p>
                            <span>És</span>
                        <p>Attila</p>
                    </router-link>
                </div>
                <v-list-item v-for="(item,i) in navItems" :key="i" router :to="item.route">
                    <v-list-item-content>
                        <v-list-item-title>{{ item.text }}</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </v-container>
</template>

<script>
export default {
  data () {
    return {
      navItems: [
        { text: 'Rólunk', route: '/aboutUs' },
        { text: 'Galéria', route: '/gallery' },
        { text: 'Információ', route: '/info' }
      ]
    }
  }
}
</script>
<style scoped>
.drawer-header{
    background: brown;
}
</style>
