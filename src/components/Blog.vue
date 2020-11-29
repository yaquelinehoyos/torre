<template>
  <div class="blog" id="blog">
    <div class="blog__input-content" id="search-input">
      <i class="fas fa-file-alt blog__input-content--icon"></i>
      <input
        v-model="postName"
        placeholder="Search post"
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
    <div class="blog__card__post" v-if="thereIsSearch">
      <div class="blog__card__post--subtitle">
        Showing results 1-20 of around 50
      </div>
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
      subjects: [1, 2, 3, 4, 5, 6, 7],
      postName: null
    };
  },
  watch: {
    postName() {
      if (this.postName == null || this.postName == "") {
        this.thereIsSearch = false;
        document.getElementById("blog").style.height = "calc(100vh - 220px)";
        document.getElementById("search-input").style.width = "50%";
      }
    }
  },
  mounted() {
    document.getElementById("blog").style.height = "calc(100vh - 220px)";
    document.getElementById("search-input").style.width = "50%";
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
      document.getElementById("blog").style.height = "auto";
      document.getElementById("search-input").style.width = "80%";
    }
  }
};
</script>

<style lang="scss" scoped>
.blog {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  &__input-content {
    &--icon {
      font-size: 16px;
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
    &__post {
      width: 50%;
      &--subtitle {
        color: hsla(0, 0%, 100%, 0.65);
        margin: 40px 0px 18px 0px;
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
    &__post {
      width: 90%;
    }
  }
}
</style>
