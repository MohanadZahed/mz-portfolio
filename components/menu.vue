<template>
  <nav class="navbar">
    <ul class="flex flex-col">
      <li v-for="(link, index) in menuLinks" :key="link.title" :class="{ active: isLinkActive(link.url) }" class="flex justify-between items-stretch">
        <menu-link :link="link"/>
        <div v-if="index === menuLinks.length -1 " class="high-lighter flex justify-between items-center">
          <div class="marker"></div>
          <div class="rounding">
          </div>
        </div>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import {menuLinks} from "~/constants.ts";
const route = useRoute()

const isLinkActive = (url) => {
  let newRoute = route.fullPath.replace(/^\/de/, '') || '/';
  return url === newRoute
}

</script>

<style lang="scss" scoped>
$borderRadius: 10px;
$spacer: 1rem;
$linkHeight: $spacer * 3;
$timing: 250ms;
$transition: $timing ease all;

.navbar{
  margin-right: -1.5rem;
  ul{
    position: relative;
  }
  li{
    height: $linkHeight;

    .high-lighter {
      content: '';
      position: absolute;
      opacity: 0;
      z-index: -1;
      top: 0;
      left: -5px;
      width: 103%;
      height: $linkHeight;
      transition: $timing ease-out all;
      padding-right: 2px;
      @apply rounded-r-md bg-body
    }

    .marker {
      opacity: 0;
      width: 0.3rem;
      height: $linkHeight;
      transition: $timing ease-out all;

      @apply bg-secondary
    }

    .rounding {
      @apply bg-body;
      height: 5rem;
      width: 2.5rem;
      position: relative;

      &:before {
        content: "";
        width: 2.5rem;
        height: 2.5rem;
        position: absolute;
        top: calc($linkHeight / 2) * -1;
        border-bottom-right-radius: 23px;
        @apply bg-header
      }

      &:after {
        content: "";
        width: 40px;
        height: 40px;
        position: absolute;
        bottom: calc($linkHeight / 2) * -1;
        border-top-right-radius: 23px;
        @apply bg-header
      }
    }


    @for $i from 1 to 12 {
      &:first-child:nth-last-child(#{$i}),
      &:first-child:nth-last-child(#{$i}) ~ li {
        &.active {
          ~ li:last-child .high-lighter,
          ~ li:last-child .high-lighter .marker{
            opacity: 1;
          }
        }
        &:last-child.active .high-lighter,
        &:last-child.active .high-lighter .marker {
          opacity: 1;
        }
        @for $j from 1 to $i {
          &:nth-child(#{$j}).active, {
            ~ li:last-child .high-lighter{
              top: calc(100% / $i) * ($j - 1);
            }
          }
        }
        &:last-child.active .high-lighter{
          top: calc(100% / $i) * ($i - 1);
        }
      }
    }
  }
}

</style>
