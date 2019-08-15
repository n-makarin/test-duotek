<template>
  <div class="pagination">
    <div class="pagination__row">
      <div
        v-for="(button, key) in rowButtons"
        :key="key"
        class="pagination-row__item"
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
    selectedPage: {
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
  }
}

</script>

<style lang="scss" scoped>
</style>
