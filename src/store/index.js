import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchView: null,
    subjects: [{
        name: "Building large-applications in Vue",
        author: "John Doe"
      },
      {
        name: "Best Frontend Frameworks of 2020 for Web Development",
        author: "Jane Doe"
      },
      {
        name: "Which Backend Framework Is Right for Your Project?",
        author: "John Doe"
      },
      {
        name: "FastAPI - The Good, the bad and the ugly",
        author: "Jane Doe"
      },
      {
        name: "When to use Sass mixins, extends and variables",
        author: "John Doe"
      }
    ]
  },
  mutations: {
    setSearchView(state, newSearchView) {
      state.searchView = newSearchView;
    }
  },
  getters: {
    searchView(state) {
      return state.searchView;
    }
  },
  actions: {},
  modules: {}
});