<template>
  <div class="md:grid md:grid-cols-6 gap-14 lg:gap-2 md:container mx-auto md:px-7 min-h-dvh">
    <div class="header z-50 mb-14 md:mb-0 col-span-2 sticky top-0 flex md:max-h-screen md:flex-col md:py-24 justify-between md:items-start items-center w-full md:w-auto">
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
        > {{ $t('showCV')}}
          <UIcon name="i-carbon-arrow-up-right" dynamic class="h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 group-focus-visible/link:-translate-y-0.5 group-focus-visible/link:translate-x-0.5 motion-reduce:transition-none"/>

        </a>
      </div>
      <Menu-xs class="md:hidden"/>
    </div>
    <div class="col-span-4 md:py-24 pb-16 mb-16 md:mb-0 content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup>
const { locale } = useI18n()
const pdf = computed(() => locale.value === 'de' ? '/MohanadZahed_Lebenslauf.pdf' : '/MohanadZahed_CV_en.pdf');

useHead({
  titleTemplate: '%s - Mohanad Zahed',
  link: [
    {
      rel: 'preconnect',
      href: 'https://fonts.googleapis.com'
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Zen+Antique+Soft&display=swap',
      crossorigin: ''
    },
    {
      rel: 'stylesheet',
      href: 'https://fonts.googleapis.com/css2?family=Zen+Antique+Soft&display=swap',
      crossorigin: ''
    }
  ]
})
</script>

<style lang="scss">
body {
  font-family: 'Roboto',sans-serif;
}

.double-pica {
  font-family: "Zen Antique Soft", serif;
}

body {
  @apply text-primary-500;

  background: rgb(250,240,230);
  /*background: linear-gradient(156deg, rgba(250,240,230,1) 0%, rgba(255,251,248,1) 100%);*/
  background: linear-gradient(156deg,#bae6fd, #f0f9ff);
}

.dark body {
  background: rgb(15,24,45);
  background: linear-gradient(156deg, rgba(15,24,45,1) 0%, rgba(28,44,82,1) 100%);
}

@media (max-width: 640px) {
  .logo-wrapper {
    transform: scale(0.8);
    margin-left: -21px;
  }
}


@media (max-width: 767px) {
  .header {
    @apply bg-sky-200 px-3
  }

  .dark {
    .header {
      background: rgb(15,24,45);
    }
  }

  .content-wrapper {
    @apply container px-3
  }
}



</style>
