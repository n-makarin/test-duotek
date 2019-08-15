<template>
  <div class="page page-projects">
    <h1>Лента проектов</h1>
    <tape :project-list="projectList" class="page-projects__tape" />
    <pagination class="page-projects__pagination" />
  </div>
</template>

<script>
import axios from 'axios'
import Tape from '@/components/projects/Tape'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Tape,
    Pagination
  },
  asyncData () {
    const endpoint = 'https://my-json-server.typicode.com/n-makarin/test-duotek/'
    return axios.get(endpoint + 'projectList')
      .then((res) => {
        return { projectList: res.data }
      })
  } }
</script>

<style lang="scss" scoped>
.page-projects {
  &__tape {
    margin-bottom: 78px;
  }
}
</style>
