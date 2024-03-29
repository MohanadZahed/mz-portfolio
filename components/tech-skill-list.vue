<template>
  <div>
    <UCard>
      <template #header>
        <h3 class="text-primary-800">TECHNICAL</h3>
      </template>

      <UAccordion :items="items" :ui="{ wrapper: 'flex flex-col w-full' }" multiple>
        <template #default="{ item, index, open }">
          <UButton color="gray" variant="ghost" class="border-b border-gray-200 dark:border-gray-700" :ui="{ rounded: 'rounded-none', padding: { sm: 'p-5' } }">
            <template #leading>
              <div class="w-6 h-6 rounded-full bg-secondary flex items-center justify-center -my-1">
                <UIcon dynamic :name="item.icon" class="w-4 h-4 text-white dark:text-gray-900" />
              </div>
            </template>

            <span class="truncate">{{ item.label }}</span>

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
          <div class="flex gap-7 flex-wrap px-5">
            <tech-skill-element v-for="skill in techSkillList.Frontend" :key="skill.name" :skill="skill" class="tech-skill-element "/>
          </div>
        </template>

        <template #backend>
          <div class="flex gap-7 flex-wrap px-5">
            <tech-skill-element v-for="skill in techSkillList.Backend" :key="skill.name" :skill="skill" class="tech-skill-element "/>
          </div>
        </template>

        <template #devops>
          <div class="flex gap-7 flex-wrap px-5">
            <tech-skill-element v-for="skill in techSkillList.DevOps" :key="skill.name" :skill="skill" class="tech-skill-element "/>
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

@media screen and (min-width: 500px) {

  .tech-skill-element {
    @apply w-5/12;

    &:nth-child(even) {
      margin-left: auto;
    }
  }
}

</style>
