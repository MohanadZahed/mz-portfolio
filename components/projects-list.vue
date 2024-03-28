<template>
  <h3 class="mb-5 text-primary-800">{{ $t('projects') }}</h3>
    <ol class="group/list">
      <li v-for="project in projectsList" :key="project.title" class="mb-12">
        <project-element :project="project" />
      </li>
    </ol>
</template>

<script setup lang="ts">
import { projects } from "~/constants.ts";

const props = defineProps({
  limit: {
    type: Number,
    default: null
  }
})

const projectsList = computed(() => {
  if(props.limit) {
    return projects.slice(0, props.limit)
  }
  return projects;
})
</script>
