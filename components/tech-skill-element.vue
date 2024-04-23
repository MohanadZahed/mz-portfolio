<template>
  <div>
    <h2 class=" lg:mb-1 text-sm lg:text-base text-primary-700">{{ skill.name }}</h2>
    <UTooltip :text="skill.skillLevel" :popper="{ arrow: true }">
      <div class="flex gap-3 lg:gap-4">
        <div class="w-8 h-1 lg:w-10 lg:h-1.5 rounded bg-secondary"></div>
        <div class="w-8 h-1 lg:w-10 lg:h-1.5 rounded bg-primary-50"
             :class="{ 'bg-secondary': skill.skillLevel === SkillLevel.INTERMEDIATE || skill.skillLevel === SkillLevel.EXPERT}"></div>
        <div class="w-8 h-1 lg:w-10 lg:h-1.5 rounded bg-primary-50"
             :class="{ 'bg-secondary': skill.skillLevel === SkillLevel.EXPERT}"></div>
      </div>
    </UTooltip>
  </div>
</template>


<script setup lang="ts">
import type { TechSkill } from '~/models/general';
import { SkillLevel } from '~/models/general';

const props = defineProps<{
  skill: TechSkill
}>()
</script>

<style scoped>
</style>
