<template>
  <div class="header">
    <Logo />
    <Navigation class="header__navigation" />
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
.header {
  display: flex;
  align-items: center;
  padding: 42px 0;

  &__navigation {
    margin-left: auto;
  }
}
</style>
