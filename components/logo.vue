<template>
  <div class="relative">
    <NuxtLink :to="localPath('/')" class="flex items-center double-pica text-primary-900">
      <div class="text-end">
        <h1>Mohana</h1>
        <h1>Zahe</h1>
      </div>
      <h1 class="d">D</h1>
    </NuxtLink>
    <ClientOnly>
      <ColorModeSelector class="absolute bottom-1"/>
    </ClientOnly>
  </div>

</template>

<script setup lang="ts">
const localPath = useLocalePath();
</script>

<style scoped lang="scss">
.d {
  font-size: 4.9rem;
  transform: translateY(2px);
}

</style>
