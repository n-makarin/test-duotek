<template>
  <div class="navigation">
    <ul>
      <li v-for="(link, key) in linkList" :key="key">
        {{ link }}
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  data: () => ({
    linkList: ['проекты', 'задачи', 'новости', 'вакансии', 'контакты']
  })
}
</script>

<style lang="scss" scoped>
</style>
