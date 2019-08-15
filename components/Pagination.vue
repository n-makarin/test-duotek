<template>
  <div class="pagination">
    <div class="pagination__row">
      <div
        v-for="(button, key) in rowButtons"
        :key="key"
        :class="getButtonClassList(key)"
      >
        <button>{{ button }}</button>
      </div>
    </div>
    <div class="pagination__next-button">
      <button>Следующая</button>
    </div>
    <div class="pagination__last-button">
      <button>Последняя</button>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    value: {
      type: Number,
      default: 0
    },
    pagesAmount: {
      type: Number,
      required: true
    }
  },
  computed: {
    rowButtons () {
      const buttons = []
      let count = 0
      while (count < this.pagesAmount) {
        buttons.push(count + 1)
        count++
      }
      return buttons
    }
  },
  methods: {
    getButtonClassList (key) {
      const mainClass = 'pagination-row__item'
      const selected = '_selected'
      return [ mainClass, { [mainClass + selected]: key === this.value } ]
    }
  }
}

</script>

<style lang="scss" scoped>
</style>
