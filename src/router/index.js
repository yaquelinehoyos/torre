import Vue from "vue";
import VueRouter from "vue-router";
import Search from "../views/Search.vue";
import Post from "../views/Post.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Search",
    component: Search
  },
  {
    path: "/post/:id",
    name: "Post",
    component: Post
  }
];

const router = new VueRouter({
  mode: "history",
  routes
});

export default router;
