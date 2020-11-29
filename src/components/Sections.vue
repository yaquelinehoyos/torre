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
  height: calc(100vh - 176px);
  overflow-y: scroll;
}

.blog-section::-webkit-scrollbar-track {
  background-color: #e9ecef;
}

.blog-section::-webkit-scrollbar {
  width: 5px;
  background-color: #f5f5f5;
}

.blog-section::-webkit-scrollbar-thumb {
  border-radius: 20px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
  background-color: rgba(0, 0, 0, 0.1);
}
</style>
