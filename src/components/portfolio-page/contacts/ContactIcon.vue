<template>
    <a :href="href" class="contact-icon-link" :data-tooltip="tooltip" rel="noopener noreferrer" :target="target">
        <slot></slot>
    </a>
    </template>

<script setup>
defineProps({
    href: {
        type: String,
        required: true,
    },
    tooltip: {
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