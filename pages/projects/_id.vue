<template>
  <div class="page page-projects__id projects-id">
    <div class="projects-id__main">
      <h1 class="projects-id__main__title">
        {{ project.title }}
      </h1>
      <div class="projects-id__main__text">
        {{ project.text }}
      </div>
    </div>
    <hr>
  </div>
</template>

<script>

export default {
  computed: {
    project () {
      return this.$store.getters['project/data']
    }
  }
}
</script>

<style lang="scss" scoped>
.projects-id {

  &__main {

    &__text {
      line-height: 22px;
    }
  }
  hr {
    height: 1px;
    margin: 40px 0;
    border: none;
    background-color: $light-grey;
  }
}
</style>
