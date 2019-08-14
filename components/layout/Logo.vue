<template>
  <div class="logo">
    <nuxt-link
      class="logo__link"
      to="/#"
    >
      компания
    </nuxt-link>
  </div>
</template>

<script>

export default {
}

</script>

<style lang="scss" scoped>
.logo {
  font-size: 25px;
  font-family: 'Montserrat', sans-serif;
  text-transform: uppercase;
  font-weight: bold;

  &__link {
    color: black;
  }
}
</style>
