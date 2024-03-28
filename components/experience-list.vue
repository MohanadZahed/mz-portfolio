<template>
  <h3 class="mb-5 text-primary-800">{{ $t('experience') }}</h3>
  <ol class="group/list">
    <li v-for="experience in experiences" :key="experience.title" class="mb-12">
      <experience-element :experience="experience" />
    </li>
  </ol>
</template>

<script setup lang="ts">
import { experiences } from "~/constants.ts";
</script>
