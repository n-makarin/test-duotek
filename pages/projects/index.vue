<template>
  <div class="page page-projects">
    <h1>Лента проектов</h1>
    <tape :project-list="paginatedProjectList" class="page-projects__tape" />
    <pagination
      v-model="selectedPaginationPage"
      :pages-amount="paginationPagesAmount"
      class="page-projects__pagination"
    />
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
  data: () => ({
    paginationItemsToShow: 4
  }),
  computed: {
    selectedPaginationPage: {
      get () {
        return this.$store.getters['project/selectedPage']
      },
      set (newValue, oldValue) {
        this.$store.dispatch('project/setSelectedPage', newValue)
      }
    },
    paginationPagesAmount () {
      return Math.ceil(this.projectList.length / this.paginationItemsToShow)
    },
    paginatedProjectList () {
      if (!this.projectList || this.projectList.length === 0) { return null }
      const start = this.selectedPaginationPage * this.paginationItemsToShow
      return this.projectList.slice(start, start + this.paginationItemsToShow)
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
  padding-bottom: 162px;
  &__tape {
    margin-bottom: 78px;
  }
}
</style>
