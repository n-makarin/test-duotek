<template>
  <div class="comment-list">
    <h2>Комментарии</h2>
    <div v-if="commentList">
      <div
        v-for="(comment, key) in commentList"
        :key="key"
        class="comment-list__item comment-list-item"
      >
        <div class="comment-list-item__wrapper">
          <div class="comment-list-item__wrapper__img">
            <img :src="comment.author.photoUrl" alt="avatar">
          </div>
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
    <div v-else>
      Нет комментариев
    </div>
    <div class="comment-list__more-btn">
      <button v-show="canLoadMoreComments" @click="showMoreCommets">
        Показать еще
      </button>
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
  },
  data: () => ({
    commentsToShow: 3,
    commentsToLoad: 3
  }),
  computed: {
    commentList () {
      if (!this.data || this.data.length === 0) { return null }
      return this.data.slice(0, this.commentsToShow)
    },
    canLoadMoreComments () {
      if (!this.data || this.data.length === 0) { return null }
      return this.data.length >= this.commentsToShow
    }
  },
  methods: {
    showMoreCommets () {
      this.commentsToShow = this.commentsToShow + this.commentsToLoad
    }
  }
}

</script>

<style lang="scss" scoped>
.comment-list {
  margin-bottom: 138px;
  h2 {
    margin-bottom: 20px;
    font-size: 20px;
  }
  &__item {
    margin-bottom: 10px;
  }
  &__more-btn {
    margin-top: 35px;
    text-align: center;
    button {
      display: inline-flex;
      align-items: center;
      padding: 13px 50px 12px 49px;
      background: $light-grey;
      border: none;
      border-radius: 5px;
      font-size: 13px;
      cursor: pointer;
      transition: background .3s;
      &:hover {
        background: $light-grey - 5;
      }
      &:hover:before {
        transform: rotate(-30deg);
      }
      &:before {
        content: '';
        display: inline-block;
        margin-right: 8px;
        width: 12px;
        height: 12px;
        background-image: url(/icons/upload.svg);
        transform: rotate(0deg);
        transition: transform .3s;
      }
    }
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
        border-radius: 50%;
        overflow: hidden;
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
