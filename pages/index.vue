<template>
  <div>
    <p class="pb-8">{{ $t('description') }}</p>
    <div class="my-14">
      <experience-list />
    </div>

    <projects-list :limit="3"/>
    <NuxtLink to="/projects" class="font-medium leading-tight text-primary-950 hover:text-secondary focus-visible:text-secondary font-semibold group/link text-base">
      {{ $t('viewAllProjects') }}
      <UIcon name="i-carbon-arrow-up-right" dynamic class="h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none"/>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
import { menuLinks } from "~/constants.ts";
</script>
