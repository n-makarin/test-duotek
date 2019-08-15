<template>
  <div class="page page-projects__id projects-id">
    <div v-if="project">
      <div class="projects-id__main">
        <h1 class="projects-id__main__title">
          {{ project.title }}
        </h1>
        <div class="projects-id__main__text">
          {{ project.text }}
        </div>
      </div>
      <hr>
      <comment-list
        :data="project.commentList"
      />
    </div>
    <div v-else>
      <h1>Project with id "{{ projectId }}" not found</h1>
    </div>
  </div>
</template>

<script>
import CommentList from '@/components/CommentList'

export default {
  components: {
    CommentList
  },
  computed: {
    projectId () {
      return this.$route.params.id
    },
    project () {
      return this.$store.getters['project/data']
    }
  },
  mounted () {
    this.$store.dispatch('project/setData', this.projectId)
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
    margin: 40px 0 30px 0;
    border: none;
    background-color: $light-grey;
  }
}
</style>
