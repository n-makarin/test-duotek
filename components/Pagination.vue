<template>
  <div class="pagination">
    <div class="pagination__row pagination-row">
      <div
        v-for="(button, key) in rowButtons"
        :key="key"
        :class="getButtonClassList(key)"
      >
        <button @click="rowButton(key)">
          {{ button }}
        </button>
      </div>
    </div>
    <div class="pagination__next-button">
      <button @click="next">
        Следующая
      </button>
    </div>
    <div class="pagination__last-button">
      <button @click="latest">
        Последняя
      </button>
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
    },
    rowButton (key) {
      if (this.value === key) { return null }
      this.$emit('input', key)
      window.scrollTo(0, 0)
    },
    next () {
      if (this.value + 1 >= this.pagesAmount) { return null }
      this.$emit('input', this.value + 1)
      window.scrollTo(0, 0)
    },
    latest () {
      if (this.value === this.pagesAmount - 1) { return null }
      this.$emit('input', this.pagesAmount - 1)
      window.scrollTo(0, 0)
    }
  }
}

</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  button {
    padding: 12px 14px;
    margin-right: 4px;
    border: none;
    background: $light-grey;
    font-size: 13px;
    border-radius: 5px;
    cursor: pointer;
  }
  &-row {
    display: flex;
    &__item {
      &_selected {
        button {
          opacity: 0.3;
        }
      }
    }
  }
  &__last-button {
    margin-right: 0;
  }
}
</style>
