<template>
  <div class="header">
    <b-navbar type="dark" variant="dark" class="header__nav">
      <b-navbar-nav>
        <b-button class="header__nav--option"
          ><i class="fas fa-bars"></i
        ></b-button>
        <span class="header__nav--logo"><b>torre</b></span>
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#">{{ user.name }}</b-nav-item>
        <b-avatar class="header__nav--avatar" :src="user.picture"></b-avatar>
      </b-navbar-nav>
    </b-navbar>
    <hr />
    <div class="header__search">
      <h2 class="header__search--title">Search</h2>
    </div>
    <div class="header__sections">
      <div class="header__sections--sidebar-space"></div>
      <button
        id="people-button"
        class="header__sections--section"
        @click="changeView('people')"
      >
        PEOPLE
      </button>
      <button
        id="jobs-button"
        class="header__sections--section"
        @click="changeView('jobs')"
      >
        JOBS
      </button>
      <button
        id="blog-button"
        class="header__sections--section"
        @click="changeView('blog')"
      >
        BLOG
      </button>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Header",
  data() {
    return {
      buttonsName: ["people", "jobs", "blog"],
      user: null
    };
  },
  computed: {
    ...mapState(["searchView"])
  },
  watch: {
    searchView() {
      for (let i in this.buttonsName) {
        if (this.buttonsName[i] == this.$store.getters["searchView"]) {
          document
            .getElementById(`${this.buttonsName[i]}-button`)
            .classList.add("active-button");
        } else {
          document
            .getElementById(`${this.buttonsName[i]}-button`)
            .classList.remove("active-button");
        }
      }
    }
  },
  created() {
    this.user = this.$store.getters["user"].person;
  },
  mounted() {
    this.$store.commit("setSearchView", "blog");
  },
  methods: {
    changeView(view) {
      this.$store.commit("setSearchView", view);
      if (this.$route.path != "/") {
        this.$router.push({ name: "Search" });
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.bg-dark {
  background-color: $background-color !important;
  color: get-opacity($color-white, 0.9) !important;
}

.navbar {
  padding: 0.5rem 0px;
}

.header {
  background-color: $background-color !important;
  &__nav {
    height: 56px;
    &--option {
      background-color: inherit;
      border-radius: 50%;
      border-color: $background-color;
      height: 40px;
      line-height: 24px;
      margin: 0 6px;
      min-width: 40px;
      padding: 8px;
      width: 40px;
      margin-right: 24px;
      font-size: 18px;
      color: get-opacity($color-white, 0.65) !important;
      &:hover {
        background-color: get-opacity($color-white, 0.15);
        color: inherit;
      }
    }
    &--logo {
      font-size: 25px;
      letter-spacing: 0.09em;
    }
    &--avatar {
      margin: 0px 15px;
    }
    a {
      color: get-opacity($color-white, 0.65) !important;
    }
  }
  hr {
    margin: 0px !important;
    background-color: get-opacity($color-white, 0.15);
  }
  &__search {
    height: 56px;
    background-color: $background-color !important;
    color: get-opacity($color-white, 0.9) !important;
    margin-top: 8px;
    padding: 0px 8px;
    &--title {
      margin-left: 8px !important;
      font-size: 20px;
      font-weight: 400;
      margin: 0;
      color: inherit;
      letter-spacing: 0.005em;
      line-height: 28px;
      text-align: left;
    }
  }
  &__sections {
    height: 56px;
    background-color: $background-color;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-content: center;
    box-shadow: 0 1.5px 1.5px rgba(0, 0, 0, 0.4);
    &--section {
      @include header-button;
    }
  }
}

.active-button {
  outline: none;
  background-color: rgba(1, 1, 1, 0.1);
  color: $primary-color;
  border-bottom: 2.5px solid $primary-color;
}

@media (max-width: 960px) {
  .header__sections {
    grid-template-columns: repeat(3, 1fr);
    &--sidebar-space {
      display: none;
    }
  }
}
</style>
