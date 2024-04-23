<template>
  <div class="md:flex md:container mx-auto md:px-7 min-h-dvh">
    <header-component />
    <div class="flex-1 md:pl-10 lg:pl-16 md:py-24 pb-16 mb-16 md:mb-0 content-wrapper">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const route = useRoute()

const i18nHead = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})

const description = computed(() => t('seo.description'));
const title = computed(() => `Mohanad Zahed | ${t(route.meta.title)}`);

  useSeoMeta({
  description: description,
  ogTitle: title,
  ogDescription: description,
  ogImage: '/logo.png',
  ogUrl: 'https://www.mohanadzahed.com',
  twitterTitle: title,
  twitterDescription: description,
  twitterImage: '/logo.png',
  twitterCard: 'summary'
})

useHead({
  htmlAttrs: {
    lang: i18nHead.value.htmlAttrs.lang,
  },
  titleTemplate: title,
  link: [
    ...(i18nHead.value.link || []),
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
    },
    {
      rel: 'icon',
      type: 'image/ico',
      href: '/favicon.ico'
    }
  ],
  meta: [...(i18nHead.value.meta || [])]
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
  width: 100vw;
  @apply text-primary-500 bg-body overflow-x-hidden;
}

@media (max-width: 767px) {
  .content-wrapper {
    @apply container px-3
  }
}
</style>
