<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
/*.page-enter-active,
.page-leave-active {
  transition: all 0.2s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0.5;
  filter: grayscale(1);
}*/

.page-enter-active,
.page-leave-active {
  transition: all .2s cubic-bezier(0.75, 0.25, 0, 1.05);
}
.page-enter-from {
  transform: translateX(-40px);
  opacity: 0
}

.page-leave-to {
  filter: blur(1rem);
  transform: translateX(40px);
  opacity: 0;
}

@media (max-width: 767px) {
  .page-enter-from {
    transform: translateY(15px);
  }

  .page-leave-to {
    filter: blur(0.5rem);
    transform: translateY(15px);
  }
}
</style>
