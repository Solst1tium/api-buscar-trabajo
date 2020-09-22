<template>
<v-container>
  <v-row>
    <v-col v-for="job in jobs" :key="job.id" cols="4">  
    <v-card  max-width="344" class="mx-auto">
      <v-list-item>
        <v-list-item-avatar color="grey"></v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title class="headline">{{job.title}}</v-list-item-title>
          <v-list-item-subtitle>Empresa: {{job.company}}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-img :src="job.company_logo"  height="194"></v-img>
      <v-card-text>
        Localidad: 
        {{job.location}}
        
      </v-card-text>
      <v-card-actions>
        <v-btn text color="deep-purple accent-4">
          Leer más
        </v-btn>
        <v-btn text color="deep-purple accent-4">
          Bookmark
        </v-btn>
        <v-spacer></v-spacer>
        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn icon>
          <v-icon>mdi-share-variant</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>  
  </v-col>
  </v-row>
</v-container>
</template>
<script>
import {mapActions, mapState} from 'vuex'
export default {
  computed: {
    ...mapState(['jobs', 'job'])
  },
  methods: {
    ...mapActions(['getJobs', 'getJob'])
  },
  created() {
    this.getJobs()
  },
  
}
</script>