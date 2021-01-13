import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignIn: false,
    token: '',
  },
  mutations: {
    setToken(state, val) {
      console.log();
      state.token = val;
    },
    changeIsSignIn(state, val) {
      state.isSignIn = val;
    },
  },
  actions: {
  },
  modules: {
  },
});
