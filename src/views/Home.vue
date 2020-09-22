<template>
  <div class="home">
    <nav-bar></nav-bar>
    <v-container>
    <v-row>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Locación" outlined ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-text-field label="Cargo" outlined ></v-text-field>
         </v-col>
      <v-col cols="12" sm="6" md="3">
        <v-btn><v-icon>mdi-magnify</v-icon>Buscar</v-btn>
    </v-col>
    </v-row>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import {mapActions, mapState} from 'vuex'

export default {
  name: 'Home',
  components: {  
  },
   computed: {
    ...mapState(['jobs', 'job'])
  },
  methods: {
      ...mapActions(['getJobs', 'getJob']),

      filter(){
        
      }
    
  },
}
</script>
