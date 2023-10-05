<script setup lang="ts">
import { ref, watch } from 'vue'
import { Timer } from '../services/timer.ts'
import confetti from 'canvas-confetti'
import audioSrc from '../assets/success.mp3'
const props = defineProps<{ min: number, sec: number, audioVolume: number, confetti: boolean }>()
const emitTimerSuccess = defineEmits(['timerSuccess'])

function playNotificationSound() {
    const audio = new Audio(audioSrc)
    audio.volume = props.audioVolume
    audio.play()
}
function triggerConfetti() {
    if (!props.confetti) return
    confetti({
        particleCount: 100,
        spread: 360,
        startVelocity: 30,
        origin: { x: 0.5, y: 0 },
    });
}

function celebrate() {
    triggerConfetti()
    playNotificationSound()
    timer.value.laps++
    emitTimerSuccess('timerSuccess')
}

const timer = ref(new Timer({ min: props.min, sec: props.sec }, celebrate))


function togglePlay() {
    if (!timer.value.isRunning && timer.value.isComplete) {
        timer.value = new Timer({ min: props.min, sec: props.sec }, celebrate)
        timer.value.startTimer()
    }
    else if (!timer.value.isRunning) {
        timer.value.startTimer()
    }
    else {
        timer.value.stopTimer()
    }
}
watch(props, () => {
    console.log('props changed')
    timer.value = new Timer({ min: props.min, sec: props.sec }, celebrate)
    timer.value.startTimer()
},)
</script>

<template>
    <div class="Timer">
        <div class="card"> {{ timer.getRemainingTime() }}</div>
        <button class="button_play" @click="togglePlay" :class="{ active: timer.isRunning }">
            <i>
                {{ timer.isRunning ? '\u23f8' : '\u25ba' }}
            </i></button>
    </div>
</template>

<style scoped> .Timer {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     align-items: center;

     font-size: 1.5rem;
     color: black;
     margin: 1.5rem;
     padding: 1.5rem;
 }

 .Timer .card {
     margin-bottom: .5em;
     padding: .5em 1em;
     border: 2px solid #333333;
     border-radius: 4px;
     background-color: white;

 }

 .Timer .button_play {
     color: black;
     border: 2px solid #333333;
     background-color: white;
     padding: 1em;
     font-size: 2em;
     cursor: pointer;
     border-radius: 50%;
     width: 2em;
     height: 2em;
     display: flex;
     justify-content: center;
     align-items: center;
 }

 .Timer .button_play i {
     position: relative;
     font-style: normal;

     transform: translate(0%, -50%);
     line-height: 1px;
 }
</style>
```