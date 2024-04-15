<template>
  <nav class="z-50 fixed inset-x-0 bottom-0 w-full rounded-t-xl bg-header overflow-hidden">
    <ul class="flex items-center">
      <li v-for="link in menuLinks" :key="link.title" class="flex-1" :class="{ active: isLinkActive(link.url) }">
        <menu-link-xs :link="link"/>
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

<style scoped lang="scss">
nav {
  box-shadow: 0px -5px 7px -4px rgba(0,0,0,0.84);
}

$borderRadius: 10px;
$spacer: 1rem;
$linkHeight: $spacer * 2.5;
$timing: 250ms;
$transition: $timing ease all;

nav{
  ul{
    position: relative;
  }
  li{
    &:last-child{
      &:before{
        content: '';
        position: absolute;
        opacity: 0;
        z-index: -1;
        left: 0;
        width: 25%;
        height: 3px;
        transition: $timing ease-out all;

        @apply bg-secondary
      }
    }

    @for $i from 1 to 12 {
      &:first-child:nth-last-child(#{$i}),
      &:first-child:nth-last-child(#{$i}) ~ li {
        &.active {
          ~ li:last-child:before {
            opacity: 1;
          }
        }
        &:last-child.active:before {
          opacity: 1;
        }
        @for $j from 1 to $i {
          &:nth-child(#{$j}).active, {
            ~ li:last-child:before {
              left: calc(100% / $i) * ($j - 1);
            }
          }
        }
        &:last-child.active:before, {
          left: calc(100% / $i) * ($i - 1);
        }
      }
    }
  }
}
</style>
