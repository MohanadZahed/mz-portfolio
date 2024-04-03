<template>
  <header
      class="z-50 mb-10 md:mb-0 col-span-2 sticky top-0  md:max-h-screen  md:py-24  w-full md:w-auto"
  >
    <div class="header-upper-part py-2 md:py-0 rounded-b-lg justify-between md:items-start items-center md:flex-col flex md:h-full" :class="{ 'is-hidden': isHidden, 'not-on-top': !isOnTop }">
      <div>
        <div class="logo-wrapper">
          <Logo />
          <h2 class="mt-2 sm:mt-3 md:mb-10 text-base sm:text-lg md:text-xl font-normal md:whitespace-nowrap">{{ $t('position') }}</h2>
        </div>
        <Menu class="hidden md:block mb-10"/>
      </div>

      <div class="md:mt-auto">
        <div class="mb-2 text-end md:text-start flex gap-2.5 md:block flex-row-reverse">
          <ClientOnly>
            <div class="md:mb-2">
              <ColorModeSelector />
            </div>
          </ClientOnly>
          <div>
            <language-switcher />
          </div>
        </div>

        <link-compoent :link="{title: $t('showCV'), url: pdf, isTargetBlank: true, rel: 'noreferrer noopener'}" class="whitespace-nowrap" />
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
let isOnTop = ref(true);
let lastScrollTop = 0
const threshold = 35;

const handleScroll = () => {
  const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
  isOnTop.value = currentScrollPosition <= threshold;

  if (currentScrollPosition < 0) {
    return
  }
  if (Math.abs(currentScrollPosition - lastScrollTop) < threshold) {
    return
  }
  isHidden.value = currentScrollPosition > lastScrollTop
  lastScrollTop = currentScrollPosition
}
</script>


<style scoped lang="scss">
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
    transition: transform  0.3s ease-out, box-shadow  0.3s ease-out;

    &.is-hidden {
      transform: translateY(-100%);
    }

    &.not-on-top {
      box-shadow: 0 5px 7px -2px rgba(0,0,0,0.84);
    }
  }

  .content-wrapper {
    @apply container px-3
  }
}
</style>
