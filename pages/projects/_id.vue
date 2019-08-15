<template>
  <div class="page page-projects__id">
    <div class="projects-id__container">
      <h1 class="projects-id__container__title">
        {{ project.title }}
      </h1>
      <div class="projects-id__container__text">
        {{ project.text }}
      </div>
    </div>
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

  &__container {

    &__text {
      line-height: 22px;
    }
  }
}
</style>
