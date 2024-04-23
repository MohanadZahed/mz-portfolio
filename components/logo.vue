<template>
  <div>
    <NuxtLink :to="localPath('/')" class="flex items-center double-pica text-primary-900">
        <h1 class="text-xl sm:text-2xl md:text-3xl lg:text-4xl">Mohanad Zahed</h1>
    </NuxtLink>
    <h2 class="sm:mt-3 md:mb-10 text-sm sm:text-lg lg:text-xl font-normal md:whitespace-nowrap">{{ $t('position') }}</h2>
  </div>
</template>

<script setup lang="ts">
const localPath = useLocalePath();
</script>

<style scoped lang="scss">

</style>
