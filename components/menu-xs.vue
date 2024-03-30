<template>
  <nav class="font-mono z-50 fixed inset-x-0 bottom-0 w-full rounded-t-xl bg-sky-200">
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
.dark {
  nav {
    background: rgb(15,24,45);
  }
}
</style>
