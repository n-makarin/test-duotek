<template>
  <div class="page page-projects">
    <h1>Лента проектов</h1>
    <tape :project-list="paginatedProjectList" class="page-projects__tape" />
    <pagination class="page-projects__pagination" />
  </div>
</template>

<script>
import axios from 'axios'
import Tape from '@/components/projects/Tape'
import Pagination from '@/components/Pagination'

export default {
  scrollToTop: true,
  components: {
    Tape,
    Pagination
  },
  computed: {
    paginatedProjectList () {
      if (!this.projectList || this.projectList.length === 0) { return null }
      const itemsToShow = 4
      const selectedPage = this.$store.getters['project/selectedPage']
      const start = selectedPage * itemsToShow
      return this.projectList.slice(start, start + itemsToShow)
    }
  },
  asyncData () {
    const endpoint = 'https://my-json-server.typicode.com/n-makarin/test-duotek/'
    return axios.get(endpoint + 'projectList')
      .catch((err) => {
        console.error(err)
      })
      .then((res) => {
        return { projectList: res.data }
      })
  }
}
</script>

<style lang="scss" scoped>
.page-projects {
  &__tape {
    margin-bottom: 78px;
  }
}
</style>
