<template>
  <UModal
      v-model="isOpen"
      :ui="{ width: 'w-full sm:max-w-6xl', container: 'flex min-h-full items-center justify-center text-center'}"
  >
    <UCard>
      <template v-if="videoTitle" #header>
      {{ videoTitle }}
      </template>

      <video controls>
        <source :src="video" type="video/mp4">
        Your browser does not support HTML video.
      </video>
    </UCard>
  </UModal>
</template>

<script setup>
const props = defineProps({
  modelValue: Boolean,
  video: String,
  videoTitle: String,
})

const emit = defineEmits(['update:modelValue'])

const isOpen = computed({
  get: () => props.modelValue,
  set: (value) => {
    emit('update:modelValue', value)
  }
})
</script>
