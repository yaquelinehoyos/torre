<template>
  <div class="blog-section">
    <People v-if="showPeople" />
    <Jobs v-if="showJobs" />
    <Blog v-if="showBlog" />
  </div>
</template>

<script>
import { mapState } from "vuex";
import People from "./People";
import Jobs from "./Jobs";
import Blog from "./Blog";

export default {
  name: "BlogSection",
  components: {
    People,
    Jobs,
    Blog
  },
  data() {
    return {
      showPeople: false,
      showJobs: false,
      showBlog: false
    };
  },
  computed: {
    ...mapState(["searchView"])
  },
  watch: {
    searchView() {
      this.checkView();
    }
  },
  mounted() {
    this.checkView();
  },
  methods: {
    checkView() {
      if (this.$store.getters["searchView"] == "people") {
        this.showPeople = true;
        this.showJobs = false;
        this.showBlog = false;
      } else if (this.$store.getters["searchView"] == "jobs") {
        this.showPeople = false;
        this.showJobs = true;
        this.showBlog = false;
      } else if (this.$store.getters["searchView"] == "blog") {
        this.showPeople = false;
        this.showJobs = false;
        this.showBlog = true;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-section {
  background-color: black;
  padding: 24px 16px;
}
</style>
