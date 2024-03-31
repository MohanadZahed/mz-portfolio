<template>
    <button @click="toggleMode" class="text-4xl md:text-base">
      <div class="star" :class="{ 'moon': currentMode === 'dark', 'sun': currentMode === 'light'}"></div>
    </button>
</template>

<script setup>
const showNextModelLabel = ref(false)
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

const nextModeIcon = computed(() => nextModeIcons[nextMode.value])
const currentMode = computed(() => nextModeIcons[colorMode.preference])

const toggleMode = () => colorMode.preference = nextMode.value
</script>

<style scoped lang="scss">
button {
  box-shadow: 0 0 35px 2px rgba(255,255,255,.5);
  border-radius: 28px;
}

.star{
  position:relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin: auto;
  transition: all 0.3s;
}

.moon {
  background-color: #94a3b8;
  box-shadow: 0 0 10px 3px rgba(229,229,229,0.3),
  0 0 10px 2px rgba(229,229,229,0.3),
  0 0 10px 3px rgba(229,229,229,0.3),
  0 0 3px 2px rgba(229,229,229,0.3);

  &:hover {
    background-color: #B0BCCD;
    transform: scale(1);
    animation: pulse-moon 2s infinite;
  }
}

.moon::after{
  content: "";
  background-color: rgba(162, 162, 162, 0.81);
  display: block;
  position: absolute;
  left: 17px;
  top: 5px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  box-shadow: 2px 0 0 1px rgba(98, 98, 98, 0.51),
  -3px 12px 0 -1px rgba(162, 162, 162, 0.9),
  -1px 13px 0 -1px rgba(100, 100, 100, 0.51);
}

.sun {
  background-color: #ffffc7;
  box-shadow: 0 0 10px 3px rgb(253 255 177 / 30%),
  0 0 10px 2px rgb(244 255 194 / 30%),
  0 0 10px 3px rgb(245 255 170 / 30%),
  0 0 3px 2px rgb(229 229 229 / 30%);

  &:hover {
    background-color: #ffffda;
    transform: scale(1);
    animation: pulse-sun 2s infinite;
  }
}

@keyframes pulse-moon {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 10px 3px rgba(229,229,229,0.7),
    0 0 10px 2px rgba(229,229,229,0.3),
    0 0 10px 3px rgba(229,229,229,0.3),
    0 0 3px 2px rgba(229,229,229,0.3);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 10px 10px rgba(229,229,229,0),
    0 0 10px 9px rgba(229,229,229,0),
    0 0 10px 10px rgba(229,229,229,0),
    0 0 3px 9px rgba(229,229,229,0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 10px 3px rgba(229,229,229,0),
    0 0 10px 2px rgba(229,229,229,0),
    0 0 10px 3px rgba(229,229,229,0),
    0 0 3px 2px rgba(229,229,229,0);
  }
}

@keyframes pulse-sun {
  0% {
    transform: scale(0.95);
    box-shadow: 0 0 10px 3px rgb(253 255 177 / 70%),
    0 0 10px 2px rgb(244 255 194 / 30%),
    0 0 10px 3px rgb(245 255 170 / 30%),
    0 0 3px 2px rgb(229 229 229 / 30%);
  }

  70% {
    transform: scale(1);
    box-shadow: 0 0 10px 15px rgb(253 255 177 / 0),
    0 0 10px 14px rgb(244 255 194 /0),
    0 0 10px 15px rgb(245 255 170 / 0),
    0 0 3px 14px rgb(229 229 229 / 0);
  }

  100% {
    transform: scale(0.95);
    box-shadow: 0 0 10px 3px rgb(253 255 177 / 0),
    0 0 10px 2px rgb(244 255 194 / 0),
    0 0 10px 3px rgb(245 255 170 / 0),
    0 0 3px 2px rgb(229 229 229 / 0);
  }
}

</style>
