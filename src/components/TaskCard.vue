<script lang="ts" setup>
const props = defineProps<{ id: number, done: boolean, description: string }>()
</script>


<template> 
             <div class="task" :class="{active: props.done}" >
                <div class="task_id">
                    <h2>{{ props.id }} : </h2>
                </div>
                <div class="task_description">
                    <h2>{{props.description}}</h2>
                </div>
                <div class="task_icon_container">
                    <div class="task_checkmark" >
                        <h2 >{{ props.done ?   '&#x2713;':'&#x231B;' }}</h2>
                    </div>
                    <button class="task_trashbin" @click="$emit('deleteCard')">
                        <h2>&#x1F5D1;</h2>
                    </button>
                </div>
            </div>

</template>

<style scoped>

.task{
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

.task.active .task_checkmark > h2{
    color: green;
}
.task_checkmark > h2{
    color: red;
    font-size: 2em;
    margin:.2em;
}
button.task_trashbin{
    font-size: 2em;
    margin:.2em;
    cursor: pointer;
}
button.task_trashbin:hover{
    color: red;
}
.task_icon_container{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}
.task.active{
    background-image: repeating-linear-gradient(135deg,
    rgba(1, 1, 1, .1),rgba(1, 1, 1, .1) 1%,white 1%,  white 2%);
}
h2{
    margin: 0;
    padding: 0;
}
</style>