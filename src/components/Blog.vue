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
        <li v-for="post in trending" v-bind:key="post.id">
          <button @click="goTo(post)">
            {{ post.name }}
          </button>
        </li>
      </ul>
    </div>
    <div class="blog__card__post" v-if="thereIsSearch">
      <div class="blog__card__post--subtitle">
        Showing results...
      </div>
      <template v-for="subject in subjects">
        <Post v-bind:key="subject.id" :post="subject" />
      </template>
    </div>
  </div>
</template>

<script>
import Post from "./Post";

export default {
  name: "Blog",
  props: {
    filter: String
  },
  components: {
    Post
  },
  data() {
    return {
      thereIsSearch: false,
      subjects: [],
      postName: null,
      trending: null
    };
  },
  watch: {
    postName() {
      if (this.postName == null || this.postName == "") {
        this.thereIsSearch = false;
        document.getElementById("blog").style.height = "calc(100vh - 220px)";
        document.getElementById("search-input").style.width = "50%";
        this.subjects = []
      }
    },
    filter: {
      immediate: true,
      deep: true,
      handler() {
        if(this.filter != null) {
          this.postName = this.filter
          this.search()
        }
      }
    }
  },
  beforeMount() {
    this.trending = this.$store.getters["trending"]
  },
  mounted() {
    document.getElementById("blog").style.height = "calc(100vh - 220px)";
    document.getElementById("search-input").style.width = "50%";
  },
  methods: {
    goTo(subject) {
      this.subjects.push(subject);
      this.thereIsSearch = true;
      this.postName = subject.name;
      this.search();
    },
    async search() {
      this.thereIsSearch = false;
      await this.$store.dispatch("filterPosts", this.postName);
      for(let i in this.$store.getters["posts"]) {
        this.subjects.push(this.$store.getters["posts"][i]);
      }
      this.thereIsSearch = true;
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
      width: 60%;
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
