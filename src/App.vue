<script setup lang="ts">
import Quoting from './components/Quoting.vue';
import TaskList from './components/TaskList.vue';
import Settings from './components/Settings.vue';
import Pomodoro from './components/Pomodoro.vue';

import { ref } from 'vue'
const isSettingsVisible = ref(false)
</script>

<template>
  <div id="app">
    <img @click="isSettingsVisible = !isSettingsVisible"  src="./assets/engrenage.svg" alt="engrenage" class="setting_icon">
    <Pomodoro></Pomodoro> 
    <Settings :visible="isSettingsVisible" @quitWithoutSubmit="isSettingsVisible = !isSettingsVisible" ></Settings>
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
  border: 2px solid #333333;
  border-radius: 4px;
  padding: .5em;
  box-shadow: 0px 0px 4px 0px rgba(0,0,0,0.25);
  transition: box-shadow 0.1s ease-in-out;
}
.setting_icon:hover{
  box-shadow:  0px 0px 4px 0px rgba(0,0,0,0.75);

}
</style>
