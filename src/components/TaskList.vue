<script lang="ts" setup>
import TaskCard from './TaskCard.vue';
import {getTaskList, setTaskList} from '../services/localstore.ts'
import { ref, watch } from 'vue';

const tasklist = ref(getTaskList())

const addingTask = ref(false);
const taskValue = ref("")

function deleteCard(id:number){
    tasklist.value.tasks = tasklist.value.tasks.filter(e => e.id != id)
}

function addTask(message:string){
    tasklist.value.tasks.push({id: tasklist.value.lastId++, done: false, description: message})
    addingTask.value = !addingTask.value
    taskValue.value = ""
}

// Observe and Save any changes to the tasklist
watch(tasklist.value, () => {
    setTaskList(tasklist.value)
})

</script>


<template> 
 <div class="Tasklist">
    <div class="Tasklist_container">
        <TaskCard v-for="task in tasklist.tasks.filter(e => !e.done).sort((a,b) => a.id - b.id)" :id=task.id :done=task.done :description=task.description @click="task.done = !task.done"  @deleteCard="deleteCard(task.id)"></TaskCard>
        <TaskCard v-for="task in tasklist.tasks.filter(e => e.done).sort((a,b) => a.id - b.id)" :id=task.id :done=task.done :description=task.description @click="task.done = !task.done" @deleteCard="deleteCard(task.id)"></TaskCard>
    </div>
    <div class="tasklist_button_container">
        <button v-if="!addingTask" type="button" @click="addingTask = !addingTask" >Add Task</button>
        <input v-if="addingTask"  v-model="taskValue" type="text" @change="addTask(taskValue)" @focusout="addingTask=false"  />
    </div>
 </div>
</template>

<style scoped>
.Tasklist{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border: 2px solid #333333;
    border-radius: 4px;
    font-size: 1.5rem;
    color: black;
    margin: 1.5rem;
    padding: 1.5rem;
    width: 80%;
    background-color: #ffeed4;
}
.Tasklist_container{
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 40vh;
    overflow-y: scroll;
}
.tasklist_button_container{
    display: flex;
    flex-direction: row;
    width: 100%;
}
.tasklist_button_container  *{
    padding: .5em;
    margin-top: .5em;
    border: 2px solid #333333;
    border-radius: 4px;
    font-size: 1.5rem;
    color: black;
    background-color: white;
    width: 100%;

}
</style>../services/localstore.ts