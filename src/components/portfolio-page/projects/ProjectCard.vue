<template>
    <div class="project-card">
        <h3 class="project-title">{{ title }}</h3>
        <p class="project-description">{{ description }}</p>
        <div class="tech-tags">
            <span v-for="tag in tags" :key="tag" class="tag">{{ tag }}</span>
        </div>
        <CtaButton
        v-if="button"
        :href="button.href"
        :label="button.label"
        :target="button.target"
        />
    </div>
</template>

<script setup>
import CtaButton from '@/components/portfolio-page/atoms/CtaButton.vue';
defineProps({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        required: true,
    },
    button: {
        type: Object,
        required: false,
        default: null,
    }
})
</script>