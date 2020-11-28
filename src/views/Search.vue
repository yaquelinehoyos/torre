<template>
  <div class="home">
    <Sidebar class="home--sidebar" />
    <Sections />
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
