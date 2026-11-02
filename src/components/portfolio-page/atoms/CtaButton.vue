<template>
    <a :href="href" class="cta-button">{{label}}</a>
</template>

<script setup>
defineProps({
    href: {
        type: String,
        required: true,
    },
    label: {
        type: String,
        required: true,
    },
})
</script>