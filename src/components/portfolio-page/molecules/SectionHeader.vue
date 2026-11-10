<template>
    <div class="section-header">
        <span class="section-label">{{order}} / {{ label }}</span>
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