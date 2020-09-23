<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <v-card-title><b>Filtros de búsqueda:</b></v-card-title>
        <form>
            <v-text-field
              v-model="location"
              :error-messages="nameErrors"
              :counter="10"
              label="Locacion"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            
            <v-checkbox
              v-model="fullTime"
              :error-messages="checkboxErrors"
              label="Full Time"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
            <v-checkbox
              v-model="partTime"
              :error-messages="checkboxErrors"
              label="Part Time"
              required
              @change="$v.checkbox.$touch()"
              @blur="$v.checkbox.$touch()"
            ></v-checkbox>
            <v-btn color="deep-purple darken-4" dark class="mr-4" @click="submit">Filtrar</v-btn>
        </form>
      </v-col>
      <v-col v-for="job in jobs" :key="job.id" cols="3">
          <v-card class="mx-auto" max-width="400">
            <v-img class="align-center" height="180px" :src="job.company_logo">
            </v-img>
 
            <v-card-title class="pb-2">{{job.title}}</v-card-title>
 
            <v-card-text class="text--primary">
              <p><v-icon color="deep-purple darken-4" class="pr-2">mdi-clock</v-icon><b>Jornada</b> {{job.type}}</p>
              <p><v-icon color="deep-purple darken-4" class="pr-2">mdi-map-marker</v-icon><b>Lugar</b> {{job.location}}</p>
              <p><v-icon color="deep-purple darken-4" class="pr-2">mdi-account-star</v-icon><b>Empresa</b> {{job.company}}</p>
              <div><v-icon color="deep-purple darken-4" class="pr-2">mdi-border-color</v-icon><b>Descripción</b> {{job.description.substring(0, 100)}}...</div>
            </v-card-text>
 
            <v-card-actions>
              <v-btn color="deep-purple darken-4" :href="job.url" text>Ver empleo <v-icon color="deep-purple darken-4">mdi-arrow-right-thick</v-icon></v-btn>
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