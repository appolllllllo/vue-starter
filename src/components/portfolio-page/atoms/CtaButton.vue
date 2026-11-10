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
    target: {
        type: String,
        required: false,
        default: "_self",
    }
})
</script>