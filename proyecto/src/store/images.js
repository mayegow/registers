import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
  namespaced: true,
  state: {
    images: []
  },
  getters: {
    images(state){
      return state.images
    }
  },
  mutations: {
    loadImages(state, data){
      state.images = data
    }
  },
  actions: {
    async loadImages({commit}){
      try{

          const res = await fetch("https://picsum.photos/v2/list?page=2&limit=100")
          const data = await res.json()
          commit("loadImages", data)
      }
      catch (err){
          console.log(err)
      }
  }
  },
}
