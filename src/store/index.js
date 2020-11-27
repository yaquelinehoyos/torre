import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchView: null
  },
  mutations: {
    setSearchView(state, newSearchView) {
      state.searchView = newSearchView
    }
  },
  getters: {
    searchView(state) {
      return state.searchView
    }
  },
  actions: {},
  modules: {}
});