<template>
  <div>
    <about />
    <UDivider class="py-10"/>
    <div>
      <experience-list />
    </div>
    <UDivider class="py-10"/>
    <projects-list :limit="3"/>
    <link-compoent :link="{isInternal: true, title: $t('viewAllProjects'), url: '/projects'}"/>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'about'
})
</script>
