<template>
  <div>
    <about />

    <div class="my-14">
      <experience-list />
    </div>

    <projects-list :limit="3"/>
    <link-compoent :link="{isInternal: true, title: $t('viewAllProjects'), url: '/projects'}"/>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'about'
})
</script>
