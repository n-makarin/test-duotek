<template>
  <div class="tape">
    <div
      v-for="(project, key) in projectList"
      :key="key"
      class="tape__project"
    >
      <div class="tape__project__title">
        {{ project.title }}
      </div>
      <div class="tape__project__text">
        {{ project.text }}
      </div>
      <div class="tape__project__date">
        {{ project.date.created }}
        {{ project.date.edited }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    projectList: {
      type: Array,
      required: true
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
