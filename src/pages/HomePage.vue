<script setup>
import { reactive, ref } from 'vue';
import TheWelcome from '../components/TheWelcome.vue'

let num = ref(0);

function add() {
  num.value = num.value + 1;
  console.log(num.value)
}

function remove() {
  num.value = num.value - 1;
  console.log(num.value)

}
</script>

<template>
  <main>
    <TheWelcome />
    <button @click="add">+</button>
    <button @click="remove">-</button>
    <div>{{ num }}</div>
  </main>
</template>