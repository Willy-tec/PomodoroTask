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
// const currentTimer = computed(()=>{
//     switch(actualState.value){
//         case TimerState.WORK:
//             return {min:0, sec:2}
//         case TimerState.BREAK:
//             return {min:0, sec:3}
//         case TimerState.LONG_BREAK:
//             return {min:0, sec:6}
//     }
// })
</script>


<template>
<Timer @timer-success="changeState"  :min='currentTimer.min' :sec="currentTimer.sec"></Timer>
<!-- <Timer @timer-success="changeState" v-if="actualState==TimerState.BREAK" :min='settings.breakTime' :sec="0"></Timer>
<Timer @timer-success="changeState" v-if="actualState==TimerState.LONG_BREAK" :min='settings.longBreakTime' :sec="0"></Timer> -->
</template>