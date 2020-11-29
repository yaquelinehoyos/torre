<template>
  <div id="app">
    <Header />
    <button title="Generate Excel" class="float">
      <i class="fas fa-comment-alt"></i>
    </button>
    <router-view />
  </div>
</template>

<script>
import Header from "./components/Layout/Header";

export default {
  components: {
    Header
  }
  // created() {
  //   this.$store.dispatch("getUser", "yaqueline150")
  // }
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

.float {
  @include float-button;
}
</style>
