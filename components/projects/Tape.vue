<template>
  <div class="tape">
    <div
      v-for="(project, key) in projectList"
      :key="key"
      class="tape__project"
    >
      <nuxt-link :to="getPath(key)" class="tape__project__title">
        {{ project.title }}
      </nuxt-link>
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
  },
  methods: {
    getPath (key) {
      return 'projects/' + String(key + 1)
    }
  }
}

</script>

<style lang="scss" scoped>
.tape {

  &__project {
    padding: 25px 32px;
    margin-bottom: 10px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    &:last-child {
      margin-bottom: 0;
    }
    &__title {
      display: inline-block;
      margin-bottom: 25px;
      font-size: 25px;
      font-weight: bold;
      color: black;
      &:hover {
        opacity: .7;
      }
    }
    &__text {
      margin-bottom: 25px;
      font-size: 15px;
    }
    &__date {
      font-size: 15px;
      color: $grey;
    }
  }
}
</style>
