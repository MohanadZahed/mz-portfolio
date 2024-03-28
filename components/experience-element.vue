<template>
  <div class="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 ">
    <header class="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2" :aria-label="$t(experience.date)">
      {{ $t(experience.date) }}
    </header>
    <div class="z-10 sm:col-span-6">
      <div class="flex justify-between flex-wrap gap-x-5 gap-y-2">
        <h3 class="job-title font-medium leading-snug text-primary-950 items-baseline group/link text-base" :style="{'min-width': experience.titleMinWidth}">
          {{ $t(experience.title) }}
        </h3>
        <h3 class="font-medium leading-snug text-primary-950 items-baseline group/link text-base text-end">
          {{ experience.company }}
        </h3>
      </div>

      <ul class="mt-2 pl-3.5 text-sm leading-normal list-disc" aria-label="Activities">
        <li v-for="activity in experience.activities" :key="activity">
          {{ $t(activity) }}
        </li>
      </ul>
    </div>
  </div>
</template>


<script setup lang="ts">
import type { Experience } from '~/models/general';

const props = defineProps<{
  experience: Experience
}>()
</script>

<style scoped>
/*.job-title {
  min-width: 12.125rem;
}*/
</style>
