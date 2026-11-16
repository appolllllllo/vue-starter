<template>
    <div class="section-header">
        <span class="section-label">
            {{ order }} / {{ label }}
        </span>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
    order: {
        type: String,
        required: true,
    }
})
</script>

<style scoped>
.section-header {
    margin-bottom: 60px;
    text-align: left;
}

.section-label {
    color: #c90000;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 4px;
    margin-bottom: 20px;
    display: block;
}
</style>