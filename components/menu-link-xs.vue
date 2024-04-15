<template>
  <NuxtLink :to="localPath(link.url)" class="link flex flex-col justify-around items-center py-4" active-class="active">
    <UIcon :name="link.icon" dynamic class="ui-icon mb-2 text-xl text-primary-70"/>
    <span class="nav-text text-xs font-bold uppercase tracking-widest text-primary-70">{{ link.xsTitle ? $t(link.xsTitle) : $t(link.title)}}</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import type { MenuLink } from '~/models/general';
const localPath = useLocalePath();

const props = defineProps<{
  link: MenuLink
}>()
</script>

<style scoped lang="scss">
a {
  transition: all 250ms;
  &.active {
    @apply bg-secondary/10;

    .nav-text,
    .ui-icon {
      @apply text-secondary;
    }
  }
}
</style>
