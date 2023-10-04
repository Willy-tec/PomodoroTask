<script setup lang="ts">
import Quoting from './components/Quoting.vue';
import TaskList from './components/TaskList.vue';
import Settings from './components/Settings.vue';
import Pomodoro from './components/Pomodoro.vue';
</script>

<template>
  <div id="app">
    <img  src="./assets/engrenage.svg" alt="engrenage" class="setting_icon">
    <Pomodoro></Pomodoro> 
    <Settings></Settings>
    <TaskList></TaskList>
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
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 100%;
}
.setting_icon{
  position: absolute;
  top: 0;
  right: 0;
  width: 2em;
  height: 2em;
  margin: .5em;
  cursor: pointer;
}
</style>
