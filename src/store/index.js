import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    searchView: null,
    user: null,
    filters: null,
    trending: null,
    author: null,
    post: null
  },
  mutations: {
    setSearchView(state, newSearchView) {
      state.searchView = newSearchView;
    },
    setUser(state, newUser) {
      state.user = newUser;
    },
    setFilters(state, newFilters) {
      state.filters = newFilters;
    },
    setTrending(state, newTrending) {
      state.trending = newTrending;
    },
    setAuthor(state, newAuthor) {
      state.author = newAuthor;
    },
    setPost(state, newPost) {
      state.post = newPost;
    }
  },
  getters: {
    searchView(state) {
      return state.searchView;
    },
    user(state) {
      return state.user;
    },
    filters(state) {
      return state.filters;
    },
    trending(state) {
      return state.trending
    },
    author(state) {
      return state.author
    },
    post(state) {
      return state.post
    }
  },
  actions: {
    async getUser({
      commit
    }, username) {
      let response;
      try {
        response = await axios.get(process.env.VUE_APP_BACK_ROUTE + `/bio/${username}`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (err) {
        console.info(err);
      }
      commit("setUser", response.data.message);
      return response;
    },

    async getAuthor({
      commit
    }, username) {
      let response;
      try {
        response = await axios.get(process.env.VUE_APP_BACK_ROUTE + `/bio/${username}`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (err) {
        console.info(err);
      }
      commit("setAuthor", response.data.message);
      return response;
    },

    async getFilters({
      commit
    }) {
      let response;
      try {
        response = await axios.get(process.env.VUE_APP_BACK_ROUTE + `/content/filters`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (err) {
        console.info(err);
      }
      commit("setFilters", response.data.message);
      return response;
    },

    async getTrending({
      commit
    }) {
      let response;
      try {
        response = await axios.get(process.env.VUE_APP_BACK_ROUTE + `/content/trending`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (err) {
        console.info(err);
      }
      commit("setTrending", response.data.message);
      return response;
    },

    async getPostById({
      commit
    }, id) {
      let response;
      try {
        response = await axios.get(process.env.VUE_APP_BACK_ROUTE + `/content/post-by-id/${id}`, {
          headers: {
            "Content-Type": "application/json"
          }
        });
      } catch (err) {
        console.info(err);
      }
      commit("setPost", response.data.message);
      return response;
    }
  },
  modules: {}
});