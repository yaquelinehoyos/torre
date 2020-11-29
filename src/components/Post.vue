<template>
  <div class="post">
    <b-avatar src="https://placekitten.com/300/300" size="3.5rem"></b-avatar>
    <div class="post__content">
      <div class="post__content__title">
        <span class="post__content__title--name">Post name</span>
        <span class="post__content__title--date"
          ><i class="fas fa-calendar-alt"></i> 11/27/2020</span
        >
      </div>
      <span class="post__content--field"
        >Sumary:<br />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua...
      </span>
      <div class="post__content__author">
        <b-avatar src="https://placekitten.com/300/300" size="1.5rem"></b-avatar
        ><span class="post__content__author--name"> Author's Name</span>
      </div>
      <div class="post__content--topic">Software development</div>
      <div class="post__content--topic">Frontend</div>
      <div class="post__content__options">
        <button class="post__content__options--button">
          <i class="fas fa-thumbs-up"></i>
        </button>
        <button class="post__content__options--button">
          <i class="fas fa-thumbs-down"></i>
        </button>
        <button class="post__content__options--button">ASK A QUESTION</button>
        <button class="post__content__options--button-view" @click="goToPost">
          VIEW
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  methods: {
    goToPost() {
      this.$router.push({ name: "Post", params: { id: 123456 } });
    }
  }
};
</script>

<style lang="scss" scoped>
.post {
  @include card;
  width: 100%;
  display: grid;
  grid-template-columns: 15% 85%;
  cursor: pointer;
  &__content {
    &__title {
      display: flex;
      justify-content: space-between;
      align-items: center;
      &--name {
        font-size: 16px;
        color: $primary-color;
      }
      &--date {
        font-size: 14px;
        color: get-opacity($color-white, 0.65);
      }
    }
    &--field {
      margin: 3px 0;
      font-size: 14px;
      color: get-opacity($color-white, 0.65);
    }
    &__author {
      margin: 8px 0;
      font-size: 16px;
      font-weight: 700;
      color: get-opacity($color-white, 0.9);
      &--name {
        margin-left: 5px;
      }
    }
    &--topic {
      margin: 12px 0;
      background: none;
      border: 1px solid #c2c2c2;
      border-radius: 2px;
      color: hsla(0, 0%, 100%, 0.9);
      display: inline-block;
      height: 32px;
      line-height: 100%;
      margin-right: 6px;
      padding: 8px 16px;
    }
    &__options {
      margin: 16px 0px;
      text-align: right;
      &--button {
        @include primary-button($background-button, $primary-color);
      }
      &--button-view {
        @include primary-button($primary-color, $background-color);
      }
    }
  }
}
</style>
