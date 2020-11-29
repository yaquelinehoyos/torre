<template>
  <div class="home">
    <Sidebar class="home--sidebar" v-model="filter"/>
    <Sections :key="sectionKey" :filter="filter"/>
  </div>
</template>

<script>
import Sidebar from "@/components/Layout/Sidebar";
import Sections from "@/components/Sections";

export default {
  name: "Home",
  components: {
    Sections,
    Sidebar
  },
  data() {
    return {
      filter: null,
      sectionKey: 0
    }
  },
  watch: {
    filter() {
      return this.sectionKey += 1
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  display: grid;
  grid-template-columns: 1fr 3fr;
  justify-content: center;
  align-content: center;
}

@media (max-width: 960px) {
  .home {
    grid-template-columns: 1fr;
    &--sidebar {
      display: none;
    }
  }
}
</style>
