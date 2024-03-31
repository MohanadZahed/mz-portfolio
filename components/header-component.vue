<template>
  <header
      class="z-50 mb-10 md:mb-0 col-span-2 sticky top-0  md:max-h-screen  md:py-24  w-full md:w-auto"
  >
    <div class="header-upper-part justify-between md:items-start items-center md:flex-col flex md:h-full" :class="{ 'is-hidden': isHidden }">
      <div>
        <div class="logo-wrapper">
          <Logo />
          <h2 class="mt-3 md:mb-10 text-lg font-normal sm:text-xl md:whitespace-nowrap">{{ $t('position') }}</h2>
        </div>
        <Menu class="hidden md:block mb-10"/>
      </div>

      <div class="md:mt-auto">
        <div class="mb-3 text-end md:text-start">
          <language-switcher />
        </div>

        <link-compoent :link="{title: $t('showCV'), url: pdf, isTargetBlank: true, rel: 'noreferrer noopener'}"/>
      </div>
    </div>

    <Menu-xs class="md:hidden"/>
  </header>
</template>

<script setup>
const { locale } = useI18n()
const pdf = computed(() => locale.value === 'de' ? '/MohanadZahed_Lebenslauf.pdf' : '/MohanadZahed_CV_en.pdf');

onMounted(() => {
  window.addEventListener('scroll', handleScroll);

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  })
})

let isHidden = ref(false);
let lastScrollTop = 0

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  if (currentScrollPosition < 0) {
    return
  }
  if (Math.abs(currentScrollPosition - lastScrollTop) < 60) {
    return
  }
  isHidden.value = currentScrollPosition > lastScrollTop
  lastScrollTop = currentScrollPosition
}
</script>


<style scoped lang="scss">
@media (max-width: 640px) {
  .logo-wrapper {
    transform: scale(0.8);
    margin-left: -21px;
  }


}

@media (max-width: 767px) {
  .header-upper-part {
    @apply bg-sky-200 px-3
  }

  .dark {
    .header-upper-part {
      background: rgb(15,24,45);
    }
  }

  .header-upper-part {
    transition: transform 0.3s ease-out;

    &.is-hidden {
      transform: translateY(-100%);
    }
  }

  .content-wrapper {
    @apply container px-3
  }
}
</style>
