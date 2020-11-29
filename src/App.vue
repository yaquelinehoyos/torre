<template>
  <div id="app">
    <div class="spinner" v-if="!thereIsData">
      <img src="./assets/spinner.gif" width="100" height="100"/>
    </div>
    <div v-else>
      <Header />
      <button title="Generate Excel" class="float">
        <i class="fas fa-comment-alt"></i>
      </button>
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from "./components/Layout/Header";

export default {
  components: {
    Header
  },
  data() {
    return {
      thereIsData: false
    }
  },
  async created() {
    this.$store.dispatch("getFilters")
    this.$store.dispatch("getTrending")
    await this.$store.dispatch("getUser", "yaqueline150")
    this.thereIsData = true
  }
};
</script>

<style lang="scss">
#app {
  margin: 0;
  font-family: "Muli", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: get-opacity($color-white, 0.9);
}

.spinner {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.float {
  @include float-button;
}
</style>
