<template>
    <div class="jobs">
        <div class="jobs__input-content">
            <i class="fas fa-briefcase jobs__input-content--icon"></i>
            <input placeholder="Search jobs"/>
        </div>
        <div class="jobs__card">
            <h3 class="jobs__card--title">Ideas for your research</h3>
            <ul class="jobs__card--list">
                <li>Whats's <a href="#">best for you</a></li>
                <li><a href="#">Part-time employment in Colombia</a></li>
                <li>Remote: <a href="#">internships</a> or <a href="#"></a>full-time employment</li>
                <li>Jobs <a href="#">in Design that match your desired compensation</a></li>
                <li>Jobs posted by your favorite organization</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "Jobs"
}
</script>

<style lang="scss" scoped>
.jobs {
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
            letter-spacing: .01em;
            line-height: 20px;
        }
        &--list {
            font-size: 14px;
            color: get-opacity($color-white, 0.65);
            a {
                color: $primary-color;
            }
        }
    }
}

@media (max-width: 960px) {
    .people__input-content {
        width: 90%
    }
    .people__card {
        width: 90%;
    }
}
</style>