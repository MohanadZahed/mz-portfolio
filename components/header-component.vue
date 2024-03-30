<template>
  <header class="header z-50 mb-14 md:mb-0 col-span-2 sticky top-0 flex md:max-h-screen md:flex-col md:py-24 justify-between md:items-start items-center w-full md:w-auto">
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

      <a
          class="font-medium leading-tight text-primary-950 hover:text-secondary focus-visible:text-secondary group/link text-base"
          :href="pdf"
          target="_blank"
          rel="noreferrer noopener"
      >
        {{ $t('showCV')}}
        <UIcon
            name="i-carbon-arrow-up-right"
            dynamic
            class="h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none"
        />
      </a>
    </div>
    <Menu-xs class="md:hidden"/>
  </header>
</template>

<script setup>
const { locale } = useI18n()
const pdf = computed(() => locale.value === 'de' ? '/MohanadZahed_Lebenslauf.pdf' : '/MohanadZahed_CV_en.pdf');
</script>

<style scoped lang="scss">

</style>
