<template>
  <div class="md:grid md:grid-cols-6 gap-14 lg:gap-2 md:container mx-auto md:px-7 min-h-dvh">
    <header-component />
    <div class="col-span-4 md:py-24 pb-16 mb-16 md:mb-0 content-wrapper">
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
  ogUrl: 'https://mz-portfolio-lyart.vercel.app',
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
  @apply text-primary-500;
  background: rgb(250,240,230);
  /*background: linear-gradient(156deg, rgba(250,240,230,1) 0%, rgba(255,251,248,1) 100%);*/
  background: linear-gradient(156deg,#bae6fd, #f0f9ff);
}

.dark body {
  background: rgb(15,24,45);
  background: linear-gradient(156deg, rgba(15,24,45,1) 0%, rgba(28,44,82,1) 100%);
}

@media (max-width: 767px) {
  .content-wrapper {
    @apply container px-3
  }
}
</style>
