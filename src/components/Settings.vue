<script setup lang="ts">
import { Settings } from '@/types/setting'
import { ref, watch } from 'vue'
import { getSettings, setSettings } from '../services/localstore';

const settings = ref<Settings>(getSettings())  

watch(settings, () => {
    setSettings(settings.value)
},{deep:true} )

</script>


<template>
<div class="Settings">
    <form >
        <label for="WorkTime">Temps de travail</label>
        <input type="number" id="WorkTime" name="WorkTime" min="0" max="60" v-model="settings.workTime">
        <!-- <input type="number" id="WorkTime" name="WorkTime" min="0" max="60" v-model="settings.workTime"> -->
        <label for="BreakTime">Temps de pause</label>
        <input type="number" id="BreakTime" name="BreakTime" min="0" max="60" v-model="settings.breakTime">
        <label for="LongBreakTime">Temps de pause longue</label>
        <input type="number" id="LongBreakTime" name="LongBreakTime" min="0" max="60" v-model="settings.longBreakTime">
        <label for="LongBreakInterval">Nombre de cycles avant la pause longue</label>
        <input type="number" id="LongBreakInterval" name="LongBreakInterval" min="0" max="60" v-model="settings.longBreakInterval">
        <label for="Volume">Volume</label>
        <input type="range" id="Volume" name="Volume" min="0" max="100" v-model="settings.volume">
        <label for="animation">Animation</label>
        <input type="checkbox" id="animation" name="animation" v-model="settings.animation">
    </form>
</div>
</template>

<style scoped>
form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: black;
    height: 250px;
}
</style>