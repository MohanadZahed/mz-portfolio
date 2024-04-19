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
        left: -0.5rem;
        width: 120%;
        height: $linkHeight;
        /*border-radius: $borderRadius * 1.75;*/
        transition: $timing ease-out all;

        /*background-color: #fffcfb;*/
        background-color: #121C36;
        @apply  rounded-r-md
      }

      &:after{
        content: '';
        position: absolute;
        opacity: 0;
        z-index: -1;
        top: 0;
        left: -0.5rem;
        width: 0.3rem;
        height: $linkHeight;
        transition: $timing ease-out all;

        @apply bg-secondary
      }
    }

    @for $i from 1 to 12 {
      &:first-child:nth-last-child(#{$i}),
      &:first-child:nth-last-child(#{$i}) ~ li {
        &.active {
          ~ li:last-child:before,
          ~ li:last-child:after {
            opacity: 1;
          }
        }
        &:last-child.active:before,
        &:last-child.active:after{
          opacity: 1;
        }
        @for $j from 1 to $i {
          &:nth-child(#{$j}).active, {
            ~ li:last-child:before,
            ~ li:last-child:after{
              top: calc(100% / $i) * ($j - 1);
            }
          }
        }
        &:last-child.active:before,
        &:last-child.active:after{
          top: calc(100% / $i) * ($i - 1);
        }
      }
    }
  }
}

</style>
