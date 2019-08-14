<template>
  <div class="page page-projects">
    <h1>Лента проектов</h1>
    <tape :project-list="projectList" class="page-projects__tape" />
    <pagination class="page-projects__pagination" />
  </div>
</template>

<script>
import Tape from '@/components/projects/Tape'
import Pagination from '@/components/Pagination'

export default {
  components: {
    Tape,
    Pagination
  },
  data: () => ({
    // temporarly data
    projectList: [
      {
        title: 'Помощник инженера ПТО',
        text: 'Консультации для клиентов, относительно требований ПБ к их объекту. Ведение переговоров и встречи с клиентами. Полное обследования объектов на предмет... Отличное знание и понимание нормативной базы в области ПБ, умение ею пользоваться оперативно.',
        date: {
          created: 1529678640,
          edited: 1529752200
        }
      },
      {
        title: 'Инженер по тестированию / QA Engineer',
        text: 'Консультации для клиентов, относительно требований ПБ к их объекту. Ведение переговоров и встречи с клиентами. Полное обследования объектов на предмет... Отличное знание и понимание нормативной базы в области ПБ, умение ею пользоваться оперативно.',
        date: {
          created: 1529678690,
          edited: 1529752500
        }
      }
    ]
  })
}
</script>

<style lang="scss" scoped>
.page-projects {
  h1 {
    margin: 40px 0;
  }
  &__tape {
    margin-bottom: 78px;
  }
}
</style>
