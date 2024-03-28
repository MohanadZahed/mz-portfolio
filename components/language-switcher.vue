<template>
  <button class="mr-2" @click="setLocale('en')" :class="{'active': locale === 'en'}">EN</button>
  <button @click="setLocale('de')" :class="{'active': locale === 'de'}">DE</button>
</template>

<script setup>
const { locale, setLocale } = useI18n()

console.log('locale: ', locale);
</script>

<style scoped lang="scss">

button {
  @apply text-lg font-normal text-primary-200

  /**/
}

button.active {
  @apply underline text-secondary font-semibold;
}
</style>
