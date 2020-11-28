<template>
  <div class="blog">
    <div class="blog__input-content">
      <i class="fas fa-file-alt blog__input-content--icon"></i>
      <input placeholder="Search blog" />
    </div>
    <div v-if="!thereIsSearch" class="blog__card">
      <h3 class="blog__card--title">Trending on torre</h3>
      <ul class="blog__card--list">
        <li><a href="#">Building large-applications in Vue</a></li>
        <li><a href="#">Best Frontend Frameworks of 2020 for Web Development</a></li>
        <li><a href="#">Which Backend Framework Is Right for Your Project?</a></li>
        <li><a href="#">FastAPI - The Good, the bad and the ugly</a></li>
        <li><a href="#">When to use Sass mixins, extends and variables</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Blog",
  data() {
      return {
          thereIsSearch: false
      }
  }
};
</script>

<style lang="scss" scoped>
.blog {
  height: calc(100vh - 220px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__input-content {
    &--icon {
      font-size: 18px;
      margin: 0 auto;
      align-self: center;
      color: get-opacity($color-white, 0.65);
    }
    @include search-input;
  }
  &__card {
    @include card;
    text-align: left;
    &--title {
      font-size: 16px;
      font-weight: 400;
      letter-spacing: 0.01em;
      line-height: 20px;
    }
    &--list {
      font-size: 14px;
      color: get-opacity($color-white, 0.65);
      a {
        color: $primary-color;
      }
    }
  }
}

@media (max-width: 960px) {
  .blog__input-content {
    width: 90%;
  }
  .blog__card {
    width: 90%;
  }
}
</style>
