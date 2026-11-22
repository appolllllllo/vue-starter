<script setup>
import { ref, watch } from 'vue';

const tasks = ref(JSON.parse(localStorage.getItem('tasks')) || []);
const newTask = ref("");

watch(tasks, (newTasks) => {
    localStorage.setItem('tasks', JSON.stringify(newTasks))
}, { deep: true });
function addTask() {
    const text = newTask.value.trim();
    if (!text) {
        return;
    }

    tasks.value.push({
        id: Date.now(),
        text: text,
        done: false
    });

    newTask.value = "";
}

function removeTask(id) {
    tasks.value = tasks.value.filter(task => task.id !== id)
}
</script>

<template>
    <div class="container">
        <h2 class="title">Чек-лист</h2>
        <p class="counter">Количество задач на сегодня: {{ tasks.length }}</p>

        <div class="input-row">
            <input class="input" v-model="newTask" placeholder="Что сделать?">
            <button class="btn-add" @click="addTask">Добавить</button>
        </div>
        <ul class="list">
            <li
                v-for="task in tasks"
                :key="task.id" class="item"
                :class="{ done: task.done }">
                <label class="label">
                    <input class="checkbox" type="checkbox" v-model="task.done" />
                    <span class="text" :style="{ textDecoration: task.done ? 'line-through' : 'none' }">
                        {{ task.text }}
                    </span>
                </label>
                <button class="btn-delete" @click="removeTask(task.id)">✕</button>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.container {
    max-width: 440px;
    margin: 60px auto;
    padding: 32px;
    background: rgba(255, 255, 255, 0.03);
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 16px;
}

.title {
    font-size: 24px;
    font-weight: 600;
    letter-spacing: -0.02em;
    margin-bottom: 8px;
}

.counter {
    font-size: 14px;
    color: rgba(255, 255, 255, 0.5);
    margin-bottom: 28px;
}

.input-row {
    display: flex;
    gap: 10px;
    margin-bottom: 24px;
}

.input {
    flex: 1;
    min-width: 0;
    padding: 12px 16px;
    font-family: inherit;
    font-size: 15px;
    color: #fff;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.12);
    border-radius: 10px;
    outline: none;
    transition: border-color 0.2s, background 0.2s;
}

.input::placeholder {
    color: rgba(255, 255, 255, 0.35);
}

.input:focus {
    border-color: rgba(255, 255, 255, 0.4);
    background: rgba(255, 255, 255, 0.06);
}

.btn-add {
    padding: 12px 22px;
    font-family: inherit;
    font-size: 15px;
    font-weight: 500;
    color: #000;
    background: #fff;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    white-space: nowrap;
    transition: opacity 0.2s, transform 0.1s;
}

.btn-add:hover {
    opacity: 0.85;
}

.btn-add:active {
    transform: scale(0.98);
}

.list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.item {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 14px 16px;
    background: rgba(255, 255, 255, 0.04);
    border: 1px solid rgba(255, 255, 255, 0.06);
    border-radius: 10px;
    transition: background 0.2s, border-color 0.2s;
}

.item:hover {
    background: rgba(255, 255, 255, 0.07);
    border-color: rgba(255, 255, 255, 0.12);
}

.item.done {
    background: rgba(255, 255, 255, 0.02);
}

.label {
    display: flex;
    align-items: center;
    gap: 12px;
    flex: 1;
    min-width: 0;
    cursor: pointer;
}

.checkbox {
    width: 18px;
    height: 18px;
    flex-shrink: 0;
    accent-color: #fff;
    cursor: pointer;
}

.text {
    font-size: 15px;
    line-height: 1.4;
    color: rgba(255, 255, 255, 0.9);
    word-break: break-word;
    transition: color 0.2s;
}

.item.done .text {
    color: rgba(255, 255, 255, 0.3);
    text-decoration: line-through;
}

.btn-delete {
    flex-shrink: 0;
    width: 28px;
    height: 28px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: inherit;
    font-size: 16px;
    line-height: 1;
    color: #ff4444;
    background: transparent;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: color 0.2s, background 0.2s;
}

.btn-delete:hover {
    color: #ff6b6b;
    background: rgba(255, 107, 107, 0.1);
}

.empty {
    text-align: center;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.35);
    padding: 24px 0;
}
</style>