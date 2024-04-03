<template>
  <nav>
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
