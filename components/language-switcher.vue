<template>
  <button class="mr-2" @click="setLocale('en')" :class="{'active': selectedLang === 'en'}">EN</button>
  <button @click="setLocale('de')" :class="{'active': selectedLang === 'de'}">DE</button>
</template>

<script setup>
const { locale, setLocale } = useI18n()

// TODO: REMOVE
// eslint-disable-next-line no-console
console.log('init locale: ', locale.value);
const selectedLang = ref('');
setTimeout(() => {
  selectedLang.value = locale.value;
}, 1000);

watch(locale, (newValue, oldValue) => {
  console.log('oldValue:', oldValue)
  console.log('newValue:', newValue)
  selectedLang.value = locale.value;
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
