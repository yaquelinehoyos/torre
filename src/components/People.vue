<template>
    <div class="people">
        <div class="people__input-content">
            <i class="fas fa-user people__input-content--icon"></i>
            <input placeholder="Search people"/>
        </div>
        <div class="people__card">
            <h3 class="people__card--title">Ideas for your research</h3>
            <ul class="people__card--list">
                <li>People open to <a href="#">internships in Colombia</a></li>
                <li><a href="#">Mentors in Transcription</a></li>
                <li><a href="#">People who have worked or work at Torre</a></li>
                <li><a href="#">Your signalers</a></li>
                <li><a href="#">People you've signaled</a></li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name: "People"
}
</script>

<style lang="scss" scoped>
.people {
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