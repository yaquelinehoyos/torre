<template>
  <div class="post">
    <div class="post__content">
      <h2 class="post__content--title">POST NAME</h2>
      <div class="post__content__user">
        <div class="post__content__user__info">
          <b-avatar
            src="https://placekitten.com/300/300"
            size="4.5rem"
          ></b-avatar>
          <div class="post__content__user__info__name-date">
            <span class="post__content__user__info__name-date--name"
              ><b>Author's name</b></span
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
          src="https://contxto.com/wp-content/uploads/2020/07/job-network-torre-seed-round-1-1200x900.jpg"
        />
        <span class="post__content__img--source">Image source: cntxto.com</span>
      </div>
      <div class="post__content--text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.<br /><br />
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
        illo inventore veritatis et quasi architecto beatae vitae dicta sunt
        explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut
        odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum
        quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam
        eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat
        voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam
        corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse
        quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
        voluptas nulla pariatur?<br /><br />
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi sint occaecati cupiditate non provident,
        similique sunt in culpa qui officia deserunt mollitia animi, id est
        laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita
        distinctio. Nam libero tempore, cum soluta nobis est eligendi optio
        cumque nihil impedit quo minus id quod maxime placeat facere possimus,
        omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem
        quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet
        ut et voluptates repudiandae sint et molestiae non recusandae. Itaque
        earum rerum hic tenetur a sapiente delectus, ut aut reiciendis
        voluptatibus maiores alias consequatur aut perferendis doloribus
        asperiores repellat.
      </div>
      <div class="post__content__topics">
        <div class="post__content__topics--topic">Software development</div>
        <div class="post__content__topics--topic">Frontend</div>
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
        v-for="comment in comments"
        v-bind:key="comment"
      >
        <Comment />
        <hr />
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
      comments: [1, 2]
    };
  }
};
</script>

<style lang="scss" scoped>
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
