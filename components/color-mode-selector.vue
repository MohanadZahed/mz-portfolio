<template>
  <UToggle
      size="lg"
      on-icon="i-heroicons-moon-20-solid"
      off-icon="i-heroicons-sun-solid"
      dynamic
      @click="toggleMode"
      :model-value="currentMode === 'dark'"
  />
</template>

<script setup>
const colorMode = useColorMode()

const modes = [
  'light',
  'dark'
]

const nextModeIcons = {
  light: 'light',
  dark: 'dark'
}

if(colorMode.preference === 'system') {
  colorMode.preference = nextModeIcons.dark
}

const nextMode = computed(() => {
  const currentModeIndex = modes.indexOf(colorMode.preference)
  let nextModeIndex

  if (currentModeIndex + 1 === modes.length) {
    nextModeIndex = 0
  } else {
    nextModeIndex = currentModeIndex + 1
  }

  return modes[nextModeIndex]
})

const currentMode = computed(() => nextModeIcons[colorMode.preference])

const toggleMode = () => colorMode.preference = nextMode.value
</script>
