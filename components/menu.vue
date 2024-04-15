<template>
  <nav class="navbar">
    <ul class="flex flex-col">
      <li v-for="link in menuLinks" :key="link.title" :class="{ active: isLinkActive(link.url) }">
        <menu-link :link="link"/>
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
$linkHeight: $spacer * 2.5;
$timing: 250ms;
$transition: $timing ease all;

.navbar{
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
        top: 0;
        left: -1rem;
        width: 100%;
        height: $linkHeight;
        border-radius: $borderRadius * 1.75;
        transition: $timing ease-out all;

        @apply bg-secondary/20 dark:bg-secondary/10
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
              top: calc(100% / $i) * ($j - 1);
            }
          }
        }
        &:last-child.active:before, {
          top: calc(100% / $i) * ($i - 1);
        }
      }
    }
  }
}

</style>
