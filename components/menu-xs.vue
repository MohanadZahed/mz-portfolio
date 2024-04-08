<template>
  <nav class="z-50 fixed inset-x-0 bottom-0 w-full rounded-t-xl bg-header overflow-hidden">
    <ul class="flex items-center">
      <li v-for="link in menuLinks" :key="link.title" class="flex-1">
        <menu-link-xs :link="link"/>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {menuLinks} from "~/constants.ts";
</script>

<style scoped lang="scss">
nav {
  box-shadow: 0px -5px 7px -2px rgba(0,0,0,0.84);
}
</style>
