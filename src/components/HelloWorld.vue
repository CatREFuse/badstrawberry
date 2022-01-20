<template>
  <div
    class="fixed top-0 left-0 text-[3rem] leading-[3rem] md:leading-[6rem] md:text-[6rem] text-left flex flex-col items-start h-screen selection:bg-[rgba(255,255,255,0.9)] selection:text-zinc-900 hero"
  >
    <h1 class="font-['Noto_Sans_SC'] font-bold" v-text-hover>坏草莓交互小组</h1>
    <h1 class="font-['Noto_Sans_JP'] font-[400]" v-text-hover>バッド・ストロベリー設計</h1>
    <h1 class="font-['Noto_Sans_TC'] font-bold" v-text-hover>壞草莓交互設計</h1>
    <h1 class="font-thin" v-text-hover>UX Bad Strawberry</h1>

    <div class="flex-1 hidden md:block"></div>
    <transition name="fade" tag="ul" mode="out-in">
      <img
        v-if="bigIcon == 'logo'"
        src="../assets/logo.svg"
        class="brightness-[200] h-[150px] md:h-[240px]"
        key="1"
      />
      <img
        v-else="bigIcon == 'quasar'"
        src="../assets/quasar.svg"
        class="h-[150px] md:h-[240px]"
        key="2"
      />
    </transition>
  </div>

  <div
    class="fixed bottom-0 right-0 text-[3rem] leading-[3rem] md:text-[6rem] md:leading-[6rem] font-medium"
  >
    <div class="flex flex-row items-center gap-6">
      <a
        href="https://quasar.bad-strawberry.com"
        v-dot-hover
        class="hover:underline transition-all"
        @mouseenter="bigIcon = Logo.quasar"
        @mouseleave="bigIcon = Logo.logo"
      >Quasar</a>
      <BoxIcon name="bx-right-arrow-alt" full size="xxl"></BoxIcon>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import BoxIcon from '../widgets/box-icon.vue';

enum Logo {
  logo = 'logo',
  quasar = 'quasar',
}

let bigIcon = ref(Logo.logo);

</script>

<style lang='scss' scoped>
.in-dark {
  filter: brightness(3000%);
}

// .hero h1 {
//   background-color: white;
//   color: black;
// }
</style>