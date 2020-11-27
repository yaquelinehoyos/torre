<template>
  <div class="header">
    <b-navbar type="dark" variant="dark" class="header__nav">
      <b-navbar-nav>
        <b-button class="header__nav--option"
          ><i class="fas fa-bars"></i
        ></b-button>
        <span class="header__nav--logo"><b>torre</b></span>
      </b-navbar-nav>
    </b-navbar>
    <hr />
    <div class="header__search">
      <h2 class="header__search--title">Search</h2>
    </div>
    <div class="header__sections">
      <div></div>
      <button class="header__sections--section">PEOPLE</button>
      <button class="header__sections--section">JOBS</button>
      <button class="header__sections--section">BLOG</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.bg-dark {
  background-color: $background-color !important;
  color: get-opacity($color-white, 0.9) !important;
}

.navbar {
  padding: 0.5rem 0px;
}

.header {
  &__nav {
    height: 56px;
    &--option {
      background-color: inherit;
      border-radius: 50%;
      border-color: $background-color;
      height: 40px;
      line-height: 24px;
      margin: 0 6px;
      min-width: 40px;
      padding: 8px;
      width: 40px;
      margin-right: 24px;
      font-size: 18px;
      color: get-opacity($color-white, 0.65) !important;
      &:hover {
        background-color: get-opacity($color-white, 0.15);
        color: inherit;
      }
    }
    &--logo {
      font-size: 25px;
    }
  }
  hr {
    margin: 0px !important;
    background-color: get-opacity($color-white, 0.15);
  }
  &__search {
    height: 56px;
    color: get-opacity($color-white, 0.9) !important;
    margin-top: 8px;
    padding: 0px 8px;
    &--title {
      margin-left: 8px !important;
      font-size: 20px;
      font-weight: 400;
      margin: 0;
      color: inherit;
      letter-spacing: 0.005em;
      line-height: 28px;
      text-align: left;
    }
  }
  &__sections {
    height: 56px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: center;
    align-content: center;
    box-shadow: 0 1.5px 1.5px rgba(0, 0, 0, 0.4);
    &--section {
      height: 53.5px;
      margin: 0px 8px;
      border: none;
      border-bottom: 2.5px solid $background-color;
      background-color: inherit;
      color: get-opacity($color-white, 0.9);
      &:hover {
        background-color: rgba(1, 1, 1, 0.1);
      }
      &:focus {
        outline: none;
        background-color: rgba(1, 1, 1, 0.1);
        color: $primary-color;
        border-bottom: 2.5px solid $primary-color;
      }
    }
  }
}
</style>
