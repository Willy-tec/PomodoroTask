<script setup lang="ts">
import { ref } from 'vue'
const time = ref(0)
const startTime = ref(0)
const isPlaying = ref(false)
const props = defineProps<{ min: number }>()
const timerStr = ref((props.min ?`${props.min}`:"25") +" : 00")

function computeTime(timer:number){
    const minutes = (timer - 1 )- Math.floor(time.value/1000/60) % 60
    const seconds = 59 - Math.floor(time.value/1000) % 60
    return `${minutes} : ${seconds < 10 ? '0' : ''}${seconds}`
}

setInterval(() => {
    if (isPlaying.value) {
        time.value = Date.now() - startTime.value
        timerStr.value = computeTime(props.min)
    }
}, 100)

function setTimer() {
    isPlaying.value = !isPlaying.value
if(time.value == 0){
    startTime.value = Date.now()
}
else{
    startTime.value = Date.now()-time.value
}
}
</script>

<template>
<div class="Timer">
    <div class = "card"> {{ timerStr }}</div>
    <button class="button_play" @click="setTimer ">{{isPlaying ? 'Pause': 'Play'}}</button>
</div>
</template>

<style scoped> 
</style>
```