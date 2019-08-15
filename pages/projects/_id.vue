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
        :data="commentList"
      />
    </div>
    <div v-else>
      <h1>Project with id "{{ projectId }}" not found</h1>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import CommentList from '@/components/CommentList'

export default {
  scrollToTop: true,
  components: {
    CommentList
  },
  computed: {
    projectId () {
      return this.$route.params.id
    },
    ...mapGetters({
      project: 'project/data',
      commentList: 'project/commentList'
    })
  },
  mounted () {
    this.$store.dispatch('project/setData', this.projectId)
    this.$store.dispatch('project/setCommentList', this.projectId)
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
