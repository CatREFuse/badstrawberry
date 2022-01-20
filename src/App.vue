<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'
import DotCursor from './widgets/dot-cursor.vue';
import useStore from './bus'
</script>

<template>
  <div class="text-white">
    <DotCursor
      follow
      :shape="useStore().hover ? 'hover' : useStore().caret ? 'caret' : 'normal'"

    ></DotCursor>
    <HelloWorld />
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100;300;400;500;700;900&family=Noto+Sans+SC:wght@100;300;400;500;700;900&family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap");
@import "./transition.scss";
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
