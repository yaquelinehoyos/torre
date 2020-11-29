<template>
  <div class="post" @click="goToPost">
    <template v-if="!thereIsData">
      <img src="../assets/spinner.gif" width="50" height="50"/>
    </template>
    <template v-else>
      <b-avatar :src="post.img" size="3.5rem"></b-avatar>
      <div class="post__content">
        <div class="post__content__title">
          <span class="post__content__title--name">{{ post.name }}</span>
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
          <b-avatar :src="author.person.picture" size="1.5rem"></b-avatar
          ><span class="post__content__author--name"> {{ post.author }}</span>
        </div>
        <template v-for="topic in post.topics">
          <div v-bind:key="topic" class="post__content--topic">{{ topic }}</div>
        </template>
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
    </template>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object
  },
  data() {
    return {
      author: null,
      thereIsData: false
    }
  },
  async created() {
    await this.$store.dispatch("getAuthor", this.post.author)
    this.author = this.$store.getters["author"]
    this.thereIsData = true
  },
  methods: {
    goToPost() {
      this.$router.push({ name: "Post", params: { id: this.post.id } });
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
      @include topic;
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
