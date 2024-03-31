<template>
  <NuxtLink :to="link.url" class="link group flex items-center py-3" active-class="active">
    <span class="nav-indicator mr-4 h-px w-8 bg-primary-50 transition-all motion-reduce:transition-none"></span>
    <span class="nav-text text-xs font-bold uppercase tracking-widest text-primary-50">{{ $t(link.title) }}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { MenuLink } from '~/models/general';

const props = defineProps<{
  link: MenuLink
}>()
</script>

<style scoped lang="scss">
a {
  &:hover,
  &:focus-visible {
    .nav-indicator {
      @apply bg-primary-950 w-16;
    }

    .nav-text {
      @apply text-primary-950;
    }
  }

  &.active {
    .nav-indicator {
      @apply bg-secondary w-16;
    }

    .nav-text {
      @apply text-secondary;
    }
  }
}
</style>
