import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    jobs: [],
    job: undefined,
    location: '',
    description: ''
  },
  mutations: {
    GET_JOBS(state, jobs){
      state.jobs = jobs
    },
    GET_JOB(state, job){
    state.job = job
  },
  /*
    GET_LOCATION(){
      
    }*/

  },

  actions: {
   
    getJobs({commit}){
      axios.get('https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json').then ((response) => {
        commit('GET_JOBS', response.data)
      })
    },
    getJob({commit}, id){
      axios.get(`https://corsanywhere.herokuapp.com/https://jobs.github.com/positions.json${id}`).then((response) => {
        commit('GET_JOB', response.data)

      })
    }
  },
  modules: {
  }
})
