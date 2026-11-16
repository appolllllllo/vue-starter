<template>
    <div class="project-card">
        <h3 class="project-title">{{ title }}</h3>
        <p class="project-description">{{ description }}</p>
        <div class="tech-tags">
            <span v-for="tag in tags":key="tag" class="tag">{{ tag }}</span>
        </div>
        <div class="project-button-wrapper">
        <UiButton
            v-if="button"
            :href="button.href"
            :label="button.label"
            :target="button.target"
            size="small"
        />
        </div>
    </div>
</template>

<script setup>
import UiButton from '@/components/portfolio-page/ui/UiButton.vue';

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

<style scoped>
.project-card {
    background: #0a0a0a;
    padding: 40px;
    border-left: 3px solid #c90000;
    transition: transform 0.3s, background 0.3s;
}

.project-card:hover {
    transform: translateY(-10px);
    background: #111;
}

.project-title {
    font-family: 'Playfair Display', serif;
    font-size: 1.8rem;
    margin-bottom: 15px;
}

.project-description {
    color: #888;
    font-size: 0.9rem;
    line-height: 1.6;
}

.tech-tags {
    display: flex;
    gap: 10px;
    margin-top: 20px;
    flex-wrap: wrap;
}

.tag {
    padding: 6px 14px;
    background: rgba(201, 0, 0, 0.1);
    color: #c90000;
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

.project-button-wrapper {
    margin-top: 25px;
}
</style>