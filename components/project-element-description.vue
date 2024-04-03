<template>
  <p ref="descriptionRef" class="mt-2 text-sm leading-normal hyphens-auto enable-link-style"></p>
</template>

<script setup lang="ts">

const props = defineProps<{
  content: string,
}>()

const descriptionRef = ref<HTMLElement | null>(null);

watchEffect(() => {
  if (descriptionRef.value) {
    descriptionRef.value.innerHTML = props.content;
  }
});
</script>



<style lang="scss">
.enable-link-style {
  a {
    transition: all .3s ease-out;
    @apply font-medium text-primary-950 hover:text-secondary focus-visible:text-secondary hover:underline focus-visible:underline;
  }
}
</style>
