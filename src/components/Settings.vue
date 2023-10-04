<script setup lang="ts">
import { Settings } from '@/types/setting'
import { ref } from 'vue'
import { getSettings, setSettings } from '../services/localstore';

const props = defineProps<{visible:boolean}>()
const settings = ref<Settings>(getSettings())  

// watch(settings, () => {
//     setSettings(settings.value)
// },{deep:true} )

</script>


<template>
<div class="Settings" :class="{visible: props.visible}" >
    <form @submit="setSettings(settings)">
        <div class="container">
            <label for="WorkTime">Travail</label>
            <input type="number" id="WorkTime" name="WorkTime" min="0" max="60" v-model="settings.workTime">
        </div>
        <div class="container">
            <label for="BreakTime">Pause</label>
            <input type="number" id="BreakTime" name="BreakTime" min="0" max="60" v-model="settings.breakTime">
        </div>
        <div class="container">
            <label for="LongBreakTime">Longue pause</label>
            <input type="number" id="LongBreakTime" name="LongBreakTime" min="0" max="60" v-model="settings.longBreakTime">
        </div>
        <div class="container">
            <label for="LongBreakInterval">Cycles de travail</label>
            <input type="number" id="LongBreakInterval" name="LongBreakInterval" min="0" max="60" v-model="settings.longBreakInterval">
        </div>
        <div class="container">
            <label for="Volume">Volume</label>
            <input type="range" id="Volume" name="Volume" min="0" max="100" v-model="settings.volume">
        </div>
        <div class="container">
            <label for="animation">Animation</label>
            <input type="checkbox" id="animation" name="animation" v-model="settings.animation">
        </div>
        <div class="container">
            <input type="submit" value="Save">
            <input type="button" value="Cancel" @click="$emit('quitWithoutSubmit')">
        </div>
    </form>
</div>
</template>

<style scoped>
.container{
    display: flex;
    justify-content: space-between;
    gap: 1em;
}
form{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    color: black;
    height: 250px;
    position: absolute;
    transform: translate(-50%, -50%);
    background-color: white;
    border: 2px solid #333333;
    border-radius: 4px;
    box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.5);
    padding: 1em;
}
div.Settings{
    display: none;
}
div.Settings.visible{
    display: flex;
}
input[type=number]{
    max-width: 50px;
}
</style>