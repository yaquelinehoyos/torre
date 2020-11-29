<template>
  <div class="post">
    <div class="spinner" v-if="!thereIsData">
      <img src="../assets/spinner.gif" width="50" height="50"/>
    </div>
    <div v-else>
      <div class="post__content">
        <h2 class="post__content--title">{{ post.name }}</h2>
        <div class="post__content__user">
          <div class="post__content__user__info">
            <b-avatar
              :src="author.person.picture"
              size="4.5rem"
            ></b-avatar>
            <div class="post__content__user__info__name-date">
              <span class="post__content__user__info__name-date--name"
                ><b>{{ author.person.name }}</b></span
              ><br />
              <div class="post__content__user__info__name-date--date">
                <i class="fas fa-calendar-alt"></i> 11/27/2020
              </div>
            </div>
          </div>
          <div class="post__content__user__info--social-media">
            <button><i class="fab fa-twitter"></i></button>
            <button><i class="fab fa-facebook"></i></button>
            <button><i class="fab fa-instagram"></i></button>
          </div>
        </div>
        <div class="post__content__img">
          <img
            :src="post.img"
          />
          <span class="post__content__img--source">Image source</span>
        </div>
        <div class="post__content--text" v-html="post.text"></div>
        <div class="post__content__topics">
          <div class="post__content__topics--topic" v-for="topic in post.topics" v-bind:key="topic">{{ topic }}</div>
        </div>
        <div class="post__content__options">
          <button class="post__content__options--button">
            <i class="fas fa-thumbs-up"></i>
          </button>
          <button class="post__content__options--button">
            <i class="fas fa-thumbs-down"></i>
          </button>
        </div>
        <hr />
        <div
          class="post__content__coments"
          v-for="i in comments"
          v-bind:key="i"
        >
          <Comment />
          <hr />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Comment from "@/components/Comment";

export default {
  name: "Post",
  components: {
    Comment
  },
  data() {
    return {
      comments: 2,
      post: null,
      thereIsData: false,
      author: null
    };
  },
  async beforeMount() {
    let id = this.$route.params.id
    await this.$store.dispatch("getPostById", id)
    this.post = this.$store.getters["post"]
    await this.$store.dispatch("getAuthor", this.post.author)
    this.author = this.$store.getters["author"]
    this.thereIsData = true
  }
};
</script>

<style lang="scss" scoped>
.spinner {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.post {
  background-color: black;
  padding: 3% 20%;
  &__content {
    @include card;
    padding: 5%;
    &--title {
      text-align: center;
      font-size: 30px;
      font-weight: 700;
      letter-spacing: 0.02em;
    }
    &__user {
      margin-top: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      &__info {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex-direction: row;
        &__name-date {
          margin-left: 24px;
          &--name {
            background-color: $primary-color;
            color: $background-color;
            padding: 5px;
            border-radius: 3px;
          }
          &--date {
            margin-top: 8px;
            font-size: 14px;
            color: get-opacity($color-white, 0.35);
          }
        }
        &--social-media {
          button {
            @include primary-button($background-button, $primary-color);
            font-size: 20px;
          }
        }
      }
    }
    &__img {
      margin-top: 30px;
      text-align: center;
      img {
        width: 100%;
        height: auto;
      }
      &--source {
        font-size: 14px;
        color: get-opacity($color-white, 0.35);
      }
    }
    &--text {
      margin-top: 24px;
      text-align: justify;
      color: get-opacity($color-white, 0.65);
    }
    &__topics {
      margin-top: 24px;
      &--topic {
        @include topic;
      }
    }
    &__options {
      margin: 16px 0px;
      text-align: right;
      &--button {
        @include primary-button($background-button, $primary-color);
      }
    }
    hr {
      background-color: get-opacity($color-white, 0.15);
    }
  }
}

@media (max-width: 1400px) {
  .post {
    padding: 3% 10%;
  }
}

@media (max-width: 800px) {
  .post {
    padding: 3% 5%;
  }
  .post__content {
    &--title {
      font-size: 20px;
    }
    &__user {
      flex-direction: column;
      &__info--social-media {
        margin-top: 20px;
      }
    }
  }
}
</style>
