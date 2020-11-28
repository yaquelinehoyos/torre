<template>
  <div class="blog">
    <div class="blog__input-content">
      <i class="fas fa-file-alt blog__input-content--icon"></i>
      <input
        v-model="postName"
        placeholder="Search blog"
        v-on:keyup.enter="search"
      />
    </div>
    <div v-if="!thereIsSearch" class="blog__card">
      <h3 class="blog__card--title">Trending on torre</h3>
      <ul class="blog__card--list">
        <li>
          <button @click="goTo('Building large-applications in Vue')">
            Building large-applications in Vue
          </button>
        </li>
        <li>
          <button>Best Frontend Frameworks of 2020 for Web Development</button>
        </li>
        <li>
          <button>Which Backend Framework Is Right for Your Project?</button>
        </li>
        <li><button>FastAPI - The Good, the bad and the ugly</button></li>
        <li><button>When to use Sass mixins, extends and variables</button></li>
      </ul>
    </div>
    <div v-if="thereIsSearch">
      <template v-for="subject in subjects">
        <Post v-bind:key="subject" />
      </template>
    </div>
  </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "Blog",
  components: {
    Post
  },
  data() {
    return {
      thereIsSearch: false,
      subjects: [1],
      postName: null
    };
  },
  watch: {
    postName() {
      if (this.postName == null || this.postName == "") {
        this.thereIsSearch = false;
      }
    }
  },
  methods: {
    goTo(subject) {
      this.thereIsSearch = true;
      this.postName = subject;
      this.search();
    },
    search() {
      this.thereIsSearch = true;
      console.info(this.postName);
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
      button {
        @include button-link;
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
