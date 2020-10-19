import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

Vue.use(Vuex)

const vuexPersist = new VuexPersist({
  key: 'token_desafiopitang',
  storage: window.localStorage
})


const Store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    token: null,
    login: { attempts: 0, datetime: null }
  },
  mutations: {
    token(state, token) {
      state.token = token
    },
    login_attempts(state) {
      state.login.attempts++
    },
    login_datetime(state, datetime) {
      state.login.datetime = datetime
    }
  },
  actions: {
  },
  getters: {
    user: state => {
      return state.token
    }
  },
  modules: {
  }
})

export default Store
