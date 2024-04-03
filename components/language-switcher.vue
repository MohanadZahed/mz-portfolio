<template>
  <button class="mr-2" @click="setLocale('en')" :class="{'active': selectedLang === 'en'}">EN</button>
  <button @click="setLocale('de')" :class="{'active': selectedLang === 'de'}">DE</button>
</template>

<script setup>
const { locale, setLocale } = useI18n()
const selectedLang = ref('');
setTimeout(() => {
  selectedLang.value = locale.value;
}, 100);

watch(locale, () => {
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
