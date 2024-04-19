<template>
  <NuxtLink :to="localPath(link.url)" class="link group flex items-center py-3 flex-1" active-class="active">
    <UIcon :name="'i-ic-baseline-less-than'" dynamic class="bracket nav-text text-xl font-bold uppercase tracking-widest text-primary-500"/>
    <span class="nav-text text-xs font-bold uppercase tracking-widest text-primary-500">{{ $t(link.title) }}</span>
    <UIcon :name="'i-mdi-slash-forward'" dynamic class="bracket nav-text text-lg font-bold uppercase tracking-widest text-primary-500"/>
    <UIcon :name="'i-ic-baseline-greater-than'" dynamic class="bracket right-bracket nav-text text-xl font-bold uppercase tracking-widest text-primary-500"/>
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
  &:hover,
  &:focus-visible {
    .nav-indicator {
      @apply bg-secondary w-16;
    }

    .nav-text {
      @apply text-secondary;
    }
  }

  &.active {
    .nav-indicator {
      @apply bg-secondary w-16;
    }

    .nav-text {
      @apply text-secondary;
    }

    .bracket {
      opacity: 1;
    }
  }
}

.bracket {
  opacity: 0;
  transition: all 0.5s;
}

.right-bracket {
  transform: translateX(-0.5rem);
}
</style>
