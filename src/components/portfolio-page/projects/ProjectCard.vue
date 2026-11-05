<template>
    <div class="project-card">
        <h3 class="project-title">{{ title }}</h3>
        <p class="project-desc">{{ desc }}</p>
        <div class="tech-tags">
            <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
    </div>
</template>

<script setup>
defineProps({
    title: {
        type: String,
        required: true,
    },
    desc: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    }
})
</script>