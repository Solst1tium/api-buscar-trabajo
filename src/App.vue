<template>
  <v-app>
    <v-main>
      <router-view></router-view>
    </v-main>
        <NavBar/>
    <Footer></Footer>
  </v-app>
</template>

<script>
import Footer from './components/Footer'
import NavBar from './components/NavBar'

export default {
  name: 'App',

  components: {
    Footer,
    NavBar
    
  },

  data: () => ({
    //
  }),
};
</script>
