<template>
  <div class="sidebar">
    <h2 class="sidebar--title">Filter blog by</h2>
    <div class="sidebar__list">
      <div class="sidebar__list__subject">
        <h3 class="sidebar__list__subject--subtitle">Frontend</h3>
        <div class="sidebar__list__subject--item">
          <a href="#">Vue</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">React</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">Angular</a>
        </div>
      </div>

      <div class="sidebar__list__subject">
        <h3 class="sidebar__list__subject--subtitle">Backend</h3>
        <div class="sidebar__list__subject--item">
          <a href="#">Laravel</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">Django</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">Fastapi</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">Ruby on Rails</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">Flask</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">Node js</a>
        </div>
      </div>

      <div class="sidebar__list__subject">
        <h3 class="sidebar__list__subject--subtitle">Computer science</h3>
        <div class="sidebar__list__subject--item">
          <a href="#">History</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">Theoretical computer science</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">Computer systems and computational processes</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">Artificial intelligence</a>
        </div>
        <div class="sidebar__list__subject--item">
          <a href="#">Applied computer science</a>
        </div>
      </div>

      <div class="sidebar__list__subject">
        <h3 class="sidebar__list__subject--subtitle">Language(s)</h3>
        <div class="sidebar__list__subject--item">
          <div class="sidebar__list__subject--item--language">
            <input placeholder="Language(s)" />
          </div>
          <button>GO</button>
        </div>
      </div>

      <div class="sidebar__list__subject">
        <h3 class="sidebar__list__subject--subtitle">Author</h3>
        <div class="sidebar__list__subject--item">
          <div class="sidebar__list__subject--item--language">
            <input placeholder="Author" />
          </div>
          <button>GO</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar"
};
</script>

<style lang="scss" scoped>
.sidebar {
  padding-top: 24px;
  text-align: left;
  overflow-y: scroll;
  height: calc(100vh - 168px);
  &--title {
    background: hsla(0, 0%, 100%, 0.06);
    margin: 0;
    padding: 12px 16px;
    color: get-opacity($color-white, 0.9);
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.005em;
    line-height: 28px;
  }
  &__list {
    padding: 0px 16px 16px 16px;
    &__subject {
      margin-bottom: 36px;
      &--subtitle {
        margin: 16px 0px;
        font-weight: 600;
        color: inherit;
        font-size: 16px;
        letter-spacing: 0.01em;
        line-height: 20px;
      }
      &--item {
        padding-bottom: 8px;
        display: flex;
        align-items: center;
        a {
          color: $primary-color;
        }
        &--language {
          background-color: $background-color;
          padding: 8px 16px 4px;
          border: 1px solid rgba($color-white, 0.65);
          border-radius: 5px;
          flex-grow: 1;
          input {
            @include input;
          }
          &:hover {
            border: 1px solid rgba($color-white, 0.9);
          }
        }
        button {
          @include primary-button;
        }
      }
    }
  }
}
</style>
