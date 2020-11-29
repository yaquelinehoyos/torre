<template>
  <div class="comment">
    <div class="comment__user">
      <b-avatar src="https://placekitten.com/300/300" size="3rem"></b-avatar>
      <div class="comment__user__name-date">
        <span class="comment__user__name-date--name">User name</span><br />
        <div class="comment__user__name-date--date">
          <i class="fas fa-calendar-alt"></i> 11/27/2020
        </div>
      </div>
    </div>
    <div class="comment--text">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
      est laborum.
    </div>
  </div>
</template>

<script>
export default {
  name: "Comment"
};
</script>

<style lang="scss" scoped>
.comment {
  margin: 18px 0px;
  &__user {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: row;
    &__name-date {
      margin-left: 14px;
      &--name {
        font-size: 16px;
        color: get-opacity($color-white, 0.9);
      }
      &--date {
        font-size: 14px;
        color: get-opacity($color-white, 0.35);
      }
    }
  }
  &--text {
    margin: 12px 0px;
    font-size: 14px;
    color: get-opacity($color-white, 0.65);
  }
}
</style>
