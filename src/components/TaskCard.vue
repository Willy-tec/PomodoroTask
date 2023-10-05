<script lang="ts" setup>
import Popup from './Popup.vue';
import { ref } from 'vue';

const props = defineProps<{ id: number, done: boolean, description: string }>()
const popupVisible = ref(false)
const emit = defineEmits(['deleteCard', 'toggleDone'])

function showPopup() {
    popupVisible.value = true
}

function hidePopup() {
    popupVisible.value = false

}

function deleteCard() {
    emit('deleteCard', props.id)
}


</script>


<template>
    <div class="task" :class="{ active: props.done }">
        <div class="task_id">
            <h2>{{ props.id }} : </h2>
        </div>
        <div class="task_description">
            <h2>{{ props.description }}</h2>
        </div>
        <div class="task_icon_container">
            <button class="task_checkmark" @click="emit('toggleDone')">
                <h2>{{ props.done ? '&#x2713;' : '&#x231B;' }}</h2>
            </button>
            <button class="task_trashbin" @click="showPopup">
                <h2>&#x1F5D1;</h2>
            </button>
        </div>
        <Popup v-if="true" @click="hidePopup" :show="popupVisible">
            <p>Etes vous sur de vouloir supprimer ?</p>
            <div class="container">
                <button class="popup">Non</button>
                <button class="popup" @click="deleteCard">Oui</button>

            </div>
        </Popup>
    </div>
</template>

<style scoped>
.task {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    border: 2px solid #333333;
    border-radius: 4px;
    font-size: .5rem;
    color: black;
    margin: .5rem;
    padding: .5rem;
    background-color: white;
}

.task.active .task_checkmark>h2 {
    color: green;
}

.task_checkmark>h2 {
    color: red;
    font-size: 2em;
    margin: .2em;
}

button {
    font-size: 2em;
    margin: .2em;
    cursor: pointer;
}

button.task_trashbin:hover {
    color: red;
}

.task_icon_container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.task.active {
    background-image: repeating-linear-gradient(135deg,
            rgba(1, 1, 1, .1), rgba(1, 1, 1, .1) 1%, white 1%, white 2%);
}

h2 {
    margin: 0;
    padding: 0;
}

.container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

button.popup {
    border: 2px solid #333333;
    border-radius: 4px;
    color: black;
    margin: .25em;
    padding: .25em;
    width: 80%;
}
</style>