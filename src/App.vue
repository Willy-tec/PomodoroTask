<script setup lang="ts">
import Timer from './components/Timer.vue';
import Quoting from './components/Quoting.vue';
</script>

<template>
  <div id="app">
    <Timer :min=25></Timer>
    <Quoting></Quoting>
  </div>
</template>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fbfbfb;
}
</style>
