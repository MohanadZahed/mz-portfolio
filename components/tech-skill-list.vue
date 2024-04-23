<template>
  <div>
    <UCard>
      <template #header>
        <h3 class="text-primary-800">Technical</h3>
      </template>

      <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }" multiple>
        <template #default="{ item, index, open }">
          <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700 px-0 py-3 sm:p-5" :ui="{ rounded: 'rounded-none' }">
            <template #leading>
              <div class="w-6 h-6 rounded-full bg-secondary flex items-center justify-center -my-1">
                <UIcon dynamic :name="item.icon" class="w-4 h-4 text-white dark:text-gray-900" />
              </div>
            </template>

            <span class="truncate text-base lg:text-lg">{{ item.label }}</span>

            <template #trailing>
              <UIcon
                  name="i-heroicons-chevron-right-20-solid"
                  class="w-5 h-5 ms-auto transform transition-transform duration-200"
                  :class="[open && 'rotate-90']"
              />
            </template>
          </UButton>
        </template>

        <template #item="{ item }">
        </template>

        <template #frontend>
          <div class="skills-wrapper">
            <tech-skill-element v-for="skill in techSkillList.Frontend" :key="skill.name" :skill="skill" class="tech-skill-element"/>
          </div>
        </template>

        <template #backend>
          <div class="skills-wrapper">
            <tech-skill-element v-for="skill in techSkillList.Backend" :key="skill.name" :skill="skill" class="tech-skill-element"/>
          </div>
        </template>

        <template #devops>
          <div class="skills-wrapper">
            <tech-skill-element v-for="skill in techSkillList.DevOps" :key="skill.name" :skill="skill" class="tech-skill-element"/>
          </div>
        </template>
      </UAccordion>
    </UCard>
  </div>
</template>


<script setup lang="ts">
import { techSkillList } from "~/constants.ts";
import { professionalSkillsTranslations } from '~/translations/en/professional-skills';

const items = [{
  label: 'Frontend',
  icon: 'i-lucide-file-code-2',
  defaultOpen: true,
  slot: 'frontend'
},
  {
    label: 'Backend',
    icon: 'i-icon-park-solid-database-code',
    defaultOpen: true,
    slot: 'backend'
  },
  {
    label: 'DevOps',
    icon: 'i-solar-infinity-broken',
    defaultOpen: true,
    slot: 'devops'
  }]

</script>

<style scoped lang="scss">

.tech-skill-element {
  @apply w-full;
}

.skills-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(121px, 1fr));
  @apply gap-8 sm:px-5 my-6;
}

@media screen and (min-width: 1024px) {
  .skills-wrapper {
    grid-template-columns: repeat(auto-fit, minmax(186px, 1fr));
  }
}

</style>
