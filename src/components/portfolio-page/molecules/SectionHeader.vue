<template>
    <div class="section-header">
        <span class="section-label">{{ label }}</span>
    </div>
</template>

<script setup>
defineProps({
    label: {
        type: String,
        required: true,
    },
})
</script>