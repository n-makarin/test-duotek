<template>
  <div class="tape">
    <div
      v-for="(project, key) in projectList"
      :key="key"
      class="tape__project"
    >
      <div class="tape__project__title">
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
        {{ getProjectDate(project.date.created, project.date.edited) }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

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
    /**
     * Returns date of creating and editing in required format
     * @param {Number|String} created Creation date timestamp
     * @param {Number|String} edited Editing date timestamp
     * @returns {String}
     */
    getProjectDate (created, edited) {
      created = Number(created) * 1000
      edited = Number(edited) * 1000
      const at = 'в'
      const space = ' '
      const changed = 'изменена'
      let editedResult = null
      let result = null
      const creationDate = moment(created).format('DD MM YYYY')
      const creationTime = moment(created).format('hh:mm')
      const createdResult = creationDate + space + at + space + creationTime
      if (edited) {
        const editingnDate = moment(edited).format('DD MM YYYY')
        const editingnTime = moment(edited).format('hh:mm')
        editedResult = ',' + space + changed + space + editingnDate + space + at + space + editingnTime
      }
      result = editedResult ? createdResult + editedResult : createdResult
      return result
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
