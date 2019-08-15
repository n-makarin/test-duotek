<template>
  <div class="comment-list">
    <h2>Комментарии</h2>
    <div
      v-for="(comment, key) in data"
      :key="key"
      class="comment-list__item comment-list-item"
    >
      <div class="comment-list-item__wrapper">
        <div class="comment-list-item__wrapper__img" />
      </div>
      <div class="comment-list-item__wrapper">
        <div class="comment-list-item__wrapper__name">
          {{ comment.author.name }}
        </div>
        <div class="comment-list-item__wrapper__email">
          {{ comment.author.email }}
        </div>
        <div class="comment-list-item__wrapper__text">
          {{ comment.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  }
}

</script>

<style lang="scss" scoped>
.comment-list {
  h2 {
    margin-bottom: 20px;
    font-size: 20px;
  }
  &__item {
    margin-bottom: 10px;
  }
  &-item {
    display: flex;
    padding: 25px 114px 25px 20px;
    border: 1px solid $grey;
    border-radius: 5px;

    &__wrapper {
      line-height: 22px;
      &__img {
        width: 40px;
        height: 40px;
        margin-right: 8px;
      }
      &__name {
        font-size: 15px;
        line-height: inherit;
      }
      &__email {
        margin-bottom: 10px;
        font-size: 13px;
        color: $grey;
        line-height: inherit;
      }
      &__text {
        font-size: 13px;
        line-height: 18px;
      }
    }
  }
}
</style>
