<template>
  <span  v-if="project.url || project.video" class="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
  <span>
    {{ project.title }}
      <UIcon v-if="project.url || project.video" name="i-carbon-arrow-up-right" dynamic class="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none translate-y-px"/>

  </span>
</template>

<script setup lang="ts">
import type { Project } from '~/models/general';

const props = defineProps<{
  project: Project
}>()
</script>
