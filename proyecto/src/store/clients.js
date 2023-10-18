import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    clients: [],
    id: null
  },
  getters: {
    clients(state){
      return state.clients
    }
  },
  mutations: {
    loadClients(state, data){
      state.clients = data
    },
    deleteRegister(state, id){
      state.id = id
    }
  },
  actions: {
    async loadClients({commit}){
      try{
        const res = await axios.get("http://localhost:8081/api/clients")
        var data = res.data.body
        console.log(data)
        commit('loadClients', data)
      } catch(err){
        console.log(err)
      }
    },
    async deleteRegister({commit, dispatch}, id){
      console.log(id)
      const settings = {
        method: 'DELETE',
        headers: {'Content-Type': "application/json"},
      }
      try {
        const res = await axios.delete(`http://localhost:8081/api/clients/${id}`, settings)
        dispatch('loadClients')
      } catch(err) {
        console.log(err)
      }
    },
    async createRegister({commit, dispatch}, data){
      console.log(data, "====== AQUI SE ESTA AGREGANDO LA INFORMACION")
      const settings = {
        headers: JSON.stringify( {"Content-Type": "application/json"}),
        body: JSON.stringify(data)
      }
      try{
        const res = await axios.post(`http://localhost:8081/api/clients`, settings)
        dispatch('loadClients')
      } catch(err){
        console.log(err, "error")
      }
    }

},
}
