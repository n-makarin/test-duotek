<template>
  <div class="tape">
    <div
      v-for="(project, key) in projectList"
      :key="key"
      class="tape__project"
    >
      <div class="tape__project__title" @mousedown="setProjectData(project.id)">
        <nuxt-link
          :to="getPath(project.id)"
          class="tape-project-title__internal"
        >
          {{ project.title }}
        </nuxt-link>
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
  },
  methods: {
    getPath (id) {
      return 'projects/' + id
    },
    setProjectData (id) {
      this.$store.dispatch('project/setData', id)
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
    }
    &__text {
      margin-bottom: 25px;
      font-size: 15px;
      line-height: 22px;
    }
    &__date {
      font-size: 15px;
      color: $grey;
    }
  }
  &-project {
    &-title {
      &__internal {
        font-size: 25px;
        font-weight: bold;
        color: black;
        &:hover {
          opacity: .7;
        }
      }
    }
  }
}
</style>
