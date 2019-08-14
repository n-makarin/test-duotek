<template>
  <div class="footer">
    <div class="footer__navigation">
      <div
        v-for="(column, key) in linkList"
        :key="key"
        class="footer-navigation__column"
      >
        <nuxt-link
          v-for="(link, k) in column"
          :key="k"
          :to="link.path"
          class="footer-navigation__link link"
        >
          {{ link.name }}
        </nuxt-link>
      </div>
    </div>
    <div class="footer__copyrights">
      © 2018 Впроекте
    </div>
  </div>
</template>

<script>

export default {
  data: () => ({
    linkList: [
      [
        { name: 'о сервисе', path: 'any' },
        { name: 'заказчикам', path: 'any' },
        { name: 'исполнителям', path: 'any' },
        { name: 'самозанятым', path: 'any' }
      ],
      [
        { name: 'партнерская программа', path: 'any' },
        { name: 'реклама на сайте', path: 'any' },
        { name: 'помощь', path: 'any' }
      ],
      [
        { name: 'о нас', path: 'any' },
        { name: 'история компании', path: 'any' },
        { name: 'реквизиты', path: 'any' },
        { name: 'частным лицам', path: 'any' }
      ],
      [
        { name: 'партнерская программа', path: 'any' },
        { name: 'реклама на сайте', path: 'any' },
        { name: 'помощь', path: 'any' }
      ]
    ]
  })
}
</script>

<style lang="scss" scoped>

.footer {
  padding-bottom: 66px;
  &__navigation {
    display: flex;
    justify-content: space-between;
    margin-bottom: 106px;
  }
  &__copyrights {
    font-size: 13px;
    color: $grey;
  }

  &-navigation {
    /* 1, 3 column */
    &__column:nth-child(1), &__column:nth-child(3) {
      .link:first-child {
        margin-bottom: 20px;
        opacity: .7;
      }
    }
    /* 2, 4 column */
    &__column:nth-child(2), &__column:nth-child(4) {
      .link:first-child {
        margin-top: 34px;
      }
    }
    &__link {
      display: block;
      margin-bottom: 15px;
      color: black;
      font-size: 13px;
      opacity: .5;
      &:first-letter {
        text-transform: uppercase;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
}
</style>
