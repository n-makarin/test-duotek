<template>
  <div class="error">
    <h1 v-if="error.statusCode === 404">
      Page not found
    </h1>
    <h1 v-else>
      An error occurred
    </h1>
    <nuxt-link class="error__back" to="/">
      Home page
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  layout: 'default'
}
</script>

<style lang="scss" scoped>
.error {
  padding-bottom: 160px;
  &__back {
    display: inline-block;
    margin-top: 20px;
    margin-bottom: 50px;
    color: black;
    opacity: .5;
    &:hover {
      opacity: 1;
    }
  }
}
</style>
