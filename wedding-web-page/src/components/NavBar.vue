<template>
<v-container fluid>
    <v-navigation-drawer  v-model="drawer" app :permanent="$vuetify.breakpoint.lgAndUp" width="350" height="100%">
        <v-img src="./../assets/engageRings.jpg" position="unset" height="100%">
        <v-list nav class="pa-0">
            <v-list-item v-for="(item,i) in navItems" :key="i" router :to="item.route">
                <v-list-item-content>
                    <v-list-item-title class="nav-draw">{{ item.text }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
            <v-list-item v-if="this.$vuetify.breakpoint.mdAndDown">
              <v-list-item-content class="nav-draw">
                <i @click="drawer = !drawer" style="text-alig: center" class="fa fa-times" aria-hidden="true"></i>
              </v-list-item-content>
            </v-list-item>
        </v-list>
        </v-img>
    </v-navigation-drawer>
  <v-content>
    <v-toolbar flat>
      <v-spacer></v-spacer>
      <v-toolbar-title class="header-content">{{ this.$route.name }}</v-toolbar-title>
      <v-app-bar-nav-icon @click="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
    </v-toolbar>
  </v-content>
</v-container>

</template>

<script>
export default {
  data () {
    return {
      drawer: this.$vuetify.breakpoint.mdAndUp,
      navItems: [
        { text: 'Főoldal', route: '/' },
        { text: 'Program', route: '/program' },
        { text: 'Helyszínek', route: '/info' },
        { text: 'Galéria', route: '/gallery' },
      ]
    }
  }
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Amatic+SC');
.nav-draw{
  color: whitesmoke;
  font-family: 'Amatic SC';
  text-align: center;
  font-size: 3rem;
}

.header-content{
  font-family: 'Amatic SC';
  font-size: 3rem;
  font-weight: 1000;
  
}


</style>
