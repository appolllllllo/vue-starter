<template>
    <li>
        <a :href="href">{{ label }}</a>
    </li>
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