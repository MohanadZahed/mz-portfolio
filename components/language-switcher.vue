<template>
  <button class="mr-2" @click="setLocale('en')" :class="{'active': locale === 'en'}">EN</button>
  <button @click="setLocale('de')" :class="{'active': locale === 'de'}">DE</button>
</template>

<script setup>
const { locale, setLocale } = useI18n()

// TODO: REMOVE
// eslint-disable-next-line no-console
console.log('init locale: ', locale.value);
watch(locale, (newValue, oldValue) => {
  console.log('oldValue:', oldValue)
  console.log('newValue:', newValue)
})
</script>

<style scoped lang="scss">

button {
  @apply text-lg font-normal text-primary-200
}

button.active {
  @apply underline text-secondary font-semibold;
}
</style>
