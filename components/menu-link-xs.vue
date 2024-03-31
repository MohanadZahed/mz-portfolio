<template>
  <NuxtLink :to="link.url" class="link flex flex-col justify-around items-center py-4" active-class="active">
    <UIcon :name="link.icon" dynamic class="ui-icon mb-2 text-xl text-primary-50"/>
    <span class="nav-text text-xs font-bold uppercase tracking-widest text-primary-50">{{ link.xsTitle ? $t(link.xsTitle) : $t(link.title)}}</span>
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
  &.active {
    background: radial-gradient(circle, rgba(235, 238, 222, 1) 0%, rgba(235, 238, 222, 0) 80%);
    .nav-text,
    .ui-icon {
      @apply text-secondary;
    }
  }
}

.dark {
  a {
    &.active {
      background: radial-gradient(circle, rgba(29,58,72,1) 0%, rgba(235, 238, 222, 0) 80%);
    }
  }
}
</style>
