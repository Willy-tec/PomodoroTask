<script setup lang='ts'>
import { defineProps, toRef, watch } from 'vue'

const props = defineProps({
    show: {
        type: Boolean,
        default: false
    }
})

const show = toRef(props, 'show')

watch(show, (val: boolean) => {
    if (val) {
        emit('show')
    } else {
        emit('hide')
    }
})

const emit = (eventName: string) => {
    return (payload?: any) => {
        const event = new CustomEvent(eventName, { detail: payload })
        window.dispatchEvent(event)
    }
}
</script>

<template>
    <div class="popup" v-if="props.show">
        <div class="popup-content">
            <slot></slot>
        </div>
    </div>
</template>

<style scoped>
.popup {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999;
}

.popup-content {
    background-color: white;
    padding: 20px;
    border-radius: 4px;
    font-size: 2em;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
