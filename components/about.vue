<template>
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
      <link-compoent :link="{title: 'mzahed-p@outlook.com', url: 'mailto:mzahed-p@outlook.com', isTargetBlank: true}"/>
    </div>
    <div class="info-wrapper">
      <UIcon name="i-brandico-linkedin-rect" dynamic class="h-4 w-4"/>
      <link-compoent :link="{title: 'https://www.linkedin.com/in/m-zahed', url: 'https://www.linkedin.com/in/m-zahed', isTargetBlank: true}"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-wrapper {
  @apply flex gap-2 items-center
}
</style>
