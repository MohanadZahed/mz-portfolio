<template>
  <div>
    <UCard class="mb-5">
      <template #header>
        <h3 class="text-primary-800">PROFESSIONAL</h3>
      </template>

      <ul class="mt-2 pl-3.5 text-sm leading-normal list-disc grid sm:grid-cols-2" aria-label="Activities">
        <li v-for="(value, key) in professionalSkillsTranslations" :key="key">
          {{ $t(key) }}
        </li>
      </ul>
    </UCard>

    <UCard class="mb-5">
      <template #header>
        <h3 class="text-primary-800">WEB DEVELOPMENT</h3>
      </template>

      <ul class="mt-2 pl-3.5 text-sm leading-normal list-disc grid sm:grid-cols-2" aria-label="Activities">
        <li v-for="tool in webDevelopmentTools" :key="tool">
          {{ tool }}
        </li>
      </ul>
    </UCard>
    <tech-skill-list/>
  </div>

</template>
<script setup lang="ts">
import { professionalSkillsTranslations } from '~/translations/en/professional-skills';
import { webDevelopmentTools } from '~/constants';

definePageMeta({
  title: 'skills' + ' | Angular | SAP Composable Storefront | SAP Spartacus | Vue | Nuxt'
})
</script>
