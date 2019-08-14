<template>
  <div class="navigation">
    <ul>
      <li
        v-for="(link, key) in linkList"
        :key="key"
        class="navigation__link"
      >
        <nuxt-link
          class="navigation__link-internal"
          active-class="navigation__link-internal_active"
          :to="link.path"
        >
          {{ link.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data: () => ({
    linkList: [
      { name: 'проекты', path: 'projects' },
      { name: 'задачи', path: '#' },
      { name: 'новости', path: '#' },
      { name: 'вакансии', path: '#' },
      { name: 'контакты', path: '#' }
    ]
  })
}
</script>

<style lang="scss" scoped>
.navigation {
  &__link {
    display: inline-block;
    margin-right: 20px;
    text-transform: capitalize;

    &:last-child {
      margin-right: 0;
    }

    &-internal {
      font-size: 15px;
      color: black;
      font-weight: normal;
      &_active {
        font-weight: bolder
      }
    }
  }
}
</style>
