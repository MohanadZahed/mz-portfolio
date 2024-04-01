<template>
  <div
      class="group relative grid pb-1 transition-all sm:grid-cols-6 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
    <div
        class="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-white/50 dark:lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
    <div class="z-10 sm:col-span-6">
      <div class="font-medium leading-snug text-slate-200">
        <a
            v-if="project.url"
            class="font-medium leading-tight text-primary-800 hover:text-secondary focus-visible:text-secondary  group/link text-base"
            :href="project.url" target="_blank" rel="noreferrer noopener"
            :aria-label="project.title"
        >
          <project-element-header :project="project" />
        </a>
        <button
            v-else-if="project.video"
            class="inline-flex items-baseline font-medium leading-tight text-primary-800 hover:text-secondary focus-visible:text-secondary  group/link text-base"
            rel="noreferrer noopener"
            :aria-label="project.title"
            @click="openVideoModal(project)"
        >
          <project-element-header :project="project" />
        </button>
        <div
            v-else
            class="inline-flex items-baseline font-medium leading-tight text-primary-800 group/link text-base"
            rel="noreferrer noopener"
            :aria-label="project.title"
        >
          <project-element-header :project="project" />
        </div>
      </div>
      <p class="mt-2 text-sm leading-normal hyphens-auto enable-link-style" v-html="$t(project.description)"></p>
      <ul v-if="project.links" class="mt-2 flex flex-wrap" aria-label="Related links">
        <li v-for="link in project.links" :key="link.title" class="mr-4"><a
            class="relative mt-2 inline-flex items-center text-sm font-medium text-primary-950 hover:text-secondary focus-visible:text-secondary"
            :href="link.url" target="_blank" rel="noreferrer noopener">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1 h-3 w-3"
               aria-hidden="true">
            <path
                d="M12.232 4.232a2.5 2.5 0 013.536 3.536l-1.225 1.224a.75.75 0 001.061 1.06l1.224-1.224a4 4 0 00-5.656-5.656l-3 3a4 4 0 00.225 5.865.75.75 0 00.977-1.138 2.5 2.5 0 01-.142-3.667l3-3z"></path>
            <path
                d="M11.603 7.963a.75.75 0 00-.977 1.138 2.5 2.5 0 01.142 3.667l-3 3a2.5 2.5 0 01-3.536-3.536l1.225-1.224a.75.75 0 00-1.061-1.06l-1.224 1.224a4 4 0 105.656 5.656l3-3a4 4 0 00-.225-5.865z"></path>
          </svg>
          <span> {{ link.title }}</span></a>
        </li>
      </ul>
      <ul class="mt-2 flex flex-wrap" aria-label="Technologies used">
        <li v-for="tech in project.techStack" :key="tech" class="mr-1.5 mt-2">
          <div
              class="flex items-center rounded-full bg-secondary/20 dark:bg-secondary/10 px-3 py-1 text-xs font-medium leading-5 text-secondary ">
            {{ tech }}
          </div>
        </li>
      </ul>
    </div>

    <video-modal v-model="isOpen" :video="video" :video-title="videoTitle"/>
  </div>
</template>


<script setup lang="ts">
import type { Project } from '~/models/general';

const props = defineProps<{
  project: Project
}>()

const isOpen = ref(false)
const video = ref('')
const videoTitle = ref('')

const openVideoModal = (project: Project) => {
  video.value = project.video;
  videoTitle.value = project.videoTitle;
  isOpen.value = true;
}
</script>


<style lang="scss">
.enable-link-style {
  a {
    transition: all .3s ease-out;
    @apply font-medium text-primary-950 hover:text-secondary focus-visible:text-secondary hover:underline focus-visible:underline;
  }
}
</style>
