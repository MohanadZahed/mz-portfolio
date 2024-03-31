<template>
  <NuxtLink v-if="link.isInternal" :to="link.url" class="group/link">
    {{ link.title }}
    <UIcon name="i-carbon-arrow-up-right" dynamic class="link-arrow-icon"/>
  </NuxtLink>

  <a
      v-else
      class="group/link"
      :href="link.url"
      :target="link.isInternal ? '_self' : '_blank'"
      :rel="link.rel"
  >
    {{ link.title }}
    <UIcon
        name="i-carbon-arrow-up-right"
        dynamic
        class="link-arrow-icon"
    />
  </a>
</template>

<script setup lang="ts">
import type { Link } from '~/models/general';

const props = defineProps<{
  link: Link,
}>()
</script>

<style scoped lang="scss">

.link-arrow-icon {
  @apply h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none;
}

</style>
