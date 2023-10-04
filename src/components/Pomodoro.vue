<script setup lang="ts">
import { getSettings } from '../services/localstore';
import Timer from './Timer.vue';
import { computed, ref } from 'vue'
import  {TimerState} from '../types/pomodoro'

const settings =ref(getSettings())
const actualState = ref<TimerState>(TimerState.WORK)
const workCycleComplete = ref(0)

function changeState(){
    if(actualState.value == TimerState.WORK){
        workCycleComplete.value++
        if(workCycleComplete.value % settings.value.longBreakInterval == 0){
            actualState.value = TimerState.LONG_BREAK
            workCycleComplete.value = 0
        }
        else{
            actualState.value = TimerState.BREAK
        }
    }
    else actualState.value = TimerState.WORK
}
const currentTimer = computed(()=>{
    switch(actualState.value){
        case TimerState.WORK:
            return {min:settings.value.workTime, sec:0}
        case TimerState.BREAK:
            return {min:settings.value.breakTime, sec:0}
        case TimerState.LONG_BREAK:
            return {min:settings.value.longBreakTime, sec:0}
    }
})
</script>


<template>
<Timer @timer-success="changeState"  :min='currentTimer.min' :sec="currentTimer.sec" :audio-volume="settings.volume/100" :confetti="settings.animation"></Timer>
</template>