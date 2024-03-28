<template>
  <NuxtLink :to="link.url" class="link flex flex-col justify-around items-center py-4" active-class="active">
    <UIcon :name="link.icon" dynamic class="ui-icon mb-2 text-xl text-primary-50"/>
    <span class="nav-text text-xs font-bold uppercase tracking-widest text-primary-50">{{ $t(link.title) }}</span>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  link: Object
})
</script>

<style scoped lang="scss">
a {
  &.active {

    .nav-text,
    .ui-icon {
      @apply text-primary-950;
    }
  }
}
</style>
