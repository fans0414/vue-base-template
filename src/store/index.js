import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    isSignIn: false,
    token: '',
    userInfo: {},
  },
  mutations: {
    changeIsSignIn(state, val) {
      state.isSignIn = val;
    },
    setToken(state, val) {
      state.token = val;
    },
    setUserInfo(state, user) {
      state.userInfo = user;
    },
  },
  actions: {
  },
  modules: {
  },
});
