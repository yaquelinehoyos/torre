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
  text-align: center;
  color: get-opacity($color-white, 0.9);
}

.float {
  position: fixed;
  width: 60px;
  height: 60px;
  bottom: 20px;
  right: 10px;
  background-color: $primary-color;
  color: $background-color;
  font-size: 25px;
  border-radius: 50px;
  text-align: center;
  outline: none;
  border: none;
}

.my-float {
  margin-top: 22px;
}
</style>
