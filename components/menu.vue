<template>
  <nav class="font-mono">
    <ul class="flex flex-col">
      <li v-for="link in menuLinks" :key="link.title">
        <menu-link :link="link"/>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {menuLinks} from "~/constants.ts";
</script>

<style scoped>
.link {
  /*@apply p-1 hover:bg-gray-200 dark:hover:bg-gray-800 text-2xl md:text-base*/
}
</style>
