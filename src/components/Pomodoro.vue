<script setup lang="ts">
import { getSettings } from '../services/localstore';
import Timer from './Timer.vue';
import { computed, ref } from 'vue'
import { TimerState } from '../types/pomodoro'

const settings = ref(getSettings())
const running = ref(false)
const actualState = ref<TimerState>(TimerState.WORK)
const workCycleComplete = ref(0)

const counter = ref({
    work: 0,
    break: 0,
    longBreak: 0
})
// 🌅·💻·🚶·💻·🚶·💻·🚶·💻·🍵·💻·🚶·💻·🚶·💻·🚶·💻·🍵·💻

function changeState() {
    running.value = true
    switch (actualState.value) {
        case TimerState.WORK:
            counter.value.work++
            break
        case TimerState.BREAK:
            counter.value.break++
            break
        case TimerState.LONG_BREAK:
            counter.value.longBreak++
            break
    }

    if (actualState.value == TimerState.WORK) {
        workCycleComplete.value++

        if (workCycleComplete.value % settings.value.longBreakInterval == 0) {
            actualState.value = TimerState.LONG_BREAK
            workCycleComplete.value = 0
        }
        else {
            actualState.value = TimerState.BREAK
        }
    }
    else actualState.value = TimerState.WORK
}
const currentTimer = computed(() => {
    if (settings.value.debug) return {
        min: 0, sec: 2
    }
    switch (actualState.value) {
        case TimerState.WORK:
            return { min: settings.value.workTime, sec: 0 }
        case TimerState.BREAK:
            return { min: settings.value.breakTime, sec: 0 }
        case TimerState.LONG_BREAK:
            return { min: settings.value.longBreakTime, sec: 0 }
    }
})
const getActualStatement = () => {
    switch (actualState.value) {
        case TimerState.WORK:
            return "On se met au boulot ! 💻"
        case TimerState.BREAK:
            return "Une petite pause s'impose ! 🚶‍♀️"
        case TimerState.LONG_BREAK:
            return "C'est l'heure de la grande pause ! 🍵"
    }
}

</script>


<template>
    <h2>{{ getActualStatement() }}</h2>
    <Timer :key="actualState" @timer-success="changeState" :min='currentTimer.min' :sec="currentTimer.sec"
        :audio-volume="settings.volume / 100" :confetti="settings.animation" :running="running"></Timer>
    <p>💻: {{ counter.work }}</p>
    <p>🚶‍♀️: {{ counter.break }}</p>
    <p>🍵: {{ counter.longBreak }}</p>
    <p>Travail accompli: {{ counter.work * settings.workTime }}mn</p>
</template>

<style scoped>
h2 {
    font-size: 2em;
    text-align: center;
    color: black;
    margin: .5em;
}

p {
    color: black;
    font-size: 1.5em;
    margin: 0;
    padding: 0;
}
</style>