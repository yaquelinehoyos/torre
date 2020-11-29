<template>
  <div class="post container">
    <h2 class="post--title">Soy un post</h2>
  </div>
</template>

<script>
export default {
  name: "Post"
};
</script>

<style lang="scss" scoped>
.post {
  padding: 50px 24px;
  &--title {
    text-align: center;
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 0.05em;
    color: get-opacity($color-white, 0.9);
  }
}
</style>
