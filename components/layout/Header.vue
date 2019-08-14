<template>
  <div class="header">
    <Logo />
    <Navigation />
  </div>
</template>

<script>
import Navigation from '@/components/layout/Navigation'
import Logo from '@/components/layout/Logo'

export default {
  components: {
    Navigation,
    Logo
  }
}
</script>

<style lang="scss" scoped>
</style>
