import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,
  state: {
    token: null,
    user: null,
    isUserLoggedIn: false
  },
  getters: {
    isUserLoggedIn (state) {
      console.log(state.isUserLoggedIn)
      return state.isUserLoggedIn
    }
  },
  mutations: {
    setUser (state, user) {
      state.user = user
    },
    setToken (state, token) {
      state.token = token
      if (token) {
        state.isUserLoggedIn = true
      }
    }
  },
  actions: {
    setUser ({commit}, user) {
      commit('setUser', user)
    },
    setToken ({commit}, token) {
      commit('setToken', token)
    }
  }
})
