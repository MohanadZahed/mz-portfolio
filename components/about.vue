<template>
  <h3 class="mb-5 text-primary-800">{{ $t('about') }}</h3>
  <p class="pb-8">{{ $t('description') }}</p>
  <div class="grid gap-2">
    <div class="info-wrapper">
      <UIcon name="i-icon-park-outline-international" dynamic class='icon' />
      {{ $t('german') }}
    </div>
    <div class="info-wrapper">
      <UIcon name="i-iconoir-birthday-cake" dynamic class='icon' />
      1991
    </div>
    <div class="info-wrapper">
      <UIcon name="i-f7-placemark" dynamic class='icon' />
      {{ $t('address') }}
    </div>
    <div class="info-wrapper">
      <UIcon name="i-cil-education" dynamic class='icon' />
      {{ $t('education') }}
    </div>
    <div class="info-wrapper">
      <UIcon name="i-heroicons-language-solid" dynamic class='icon' />
      <div>
        {{ $t('languages') }}:<br>
        {{ $t('arabicLan') }}<br>
        {{ $t('englishLan') }}<br>
        {{ $t('germanLan') }}<br>
      </div>
    </div>
    <div class="info-wrapper">
      <UIcon name="i-mdi-email-outline" dynamic class='icon' />
      <link-compoent :link="{title: 'mzahed-p@outlook.com', url: 'mailto:mzahed-p@outlook.com', isTargetBlank: true}"/>
    </div>
    <div class="info-wrapper">
      <UIcon name="i-brandico-linkedin-rect" dynamic class='icon' />
      <link-compoent :link="{title: 'www.linkedin.com/in/m-zahed', url: 'https://www.linkedin.com/in/m-zahed', isTargetBlank: true}"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
.info-wrapper {
  @apply flex gap-2 items-start
}

.icon {
  @apply min-h-4 min-w-4 mt-1
}

</style>
<script setup lang="ts">
</script>
