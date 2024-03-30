<template>
  <div>
    <h3 class="mb-5 text-primary-800">{{ $t('about') }}</h3>
    <p class="pb-8">{{ $t('description') }}</p>
    <div class="grid gap-2">
      <div class="info-wrapper">
        <UIcon name="i-icon-park-outline-international" dynamic class="h-4 w-4"/>
        {{ $t('german') }}
      </div>
      <div class="info-wrapper">
        <UIcon name="i-iconoir-birthday-cake" dynamic class="h-4 w-4"/>
        1991
      </div>
      <div class="info-wrapper">
        <UIcon name="i-f7-placemark" dynamic class="h-4 w-4"/>
        {{ $t('address') }}
      </div>
      <div class="info-wrapper">
        <UIcon name="i-mdi-email-outline" dynamic class="h-4 w-4"/>
        <a class="link" href="mailto:mzahed-p@outlook.com" target="_blank">mzahed-p@outlook.com</a>
      </div>
      <div class="info-wrapper">
        <UIcon name="i-brandico-linkedin-rect" dynamic class="h-4 w-4"/>
        <a class="link" href="https://www.linkedin.com/in/m-zahed" target="_blank">www.linkedin.com/in/m-zahed</a>
      </div>
    </div>
    <div class="my-14">
      <experience-list />
    </div>

    <projects-list :limit="3"/>
    <NuxtLink to="/projects" class="font-medium leading-tight text-primary-950 hover:text-secondary focus-visible:text-secondary group/link text-base">
      {{ $t('viewAllProjects') }}
      <UIcon name="i-carbon-arrow-up-right" dynamic class="h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none"/>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped lang="scss">
.info-wrapper {
  @apply flex gap-2 items-center
}
</style>
