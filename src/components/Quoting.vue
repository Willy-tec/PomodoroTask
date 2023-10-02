<script lang="ts" setup>
import { ref } from 'vue'
import quotes from '../assets/compliment.json'

const quote = ref(quotes[Math.floor(Math.random() * quotes.length)])
</script>

<template>
    <div class="card">
        <h1>{{ quote.phrase }}({{ quote.id }})</h1>
        <button type="button" @click="quote = quotes[Math.floor(Math.random() * quotes.length)]">New Quote</button>
    </div>
</template>


<style scoped>
.card{
    border: 1px solid black;
    border-radius: 4px;
    font-size: .5rem;
    background-color: azure;
    color: black;
}
</style>