<template>
  <div>
    <h2 class="mb-1 text-lg text-primary-700">{{ skill.name }}</h2>
    <UTooltip :text="skill.skillLevel" :popper="{ arrow: true }">
      <div class="flex gap-4">
        <div class="w-10 h-1.5 rounded bg-secondary"></div>
        <div class="w-10 h-1.5 rounded bg-primary-50"
             :class="{ 'bg-secondary': skill.skillLevel === SkillLevel.INTERMEDIATE || skill.skillLevel === SkillLevel.EXPERT}"></div>
        <div class="w-10 h-1.5 rounded bg-primary-50"
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
