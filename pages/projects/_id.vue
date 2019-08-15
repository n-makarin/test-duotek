<template>
  <div class="page page-projects__id">
    {{ id }}
  </div>
</template>

<script>

export default {
  computed: {
    id () {
      return this.$store.getters['project/id']
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
