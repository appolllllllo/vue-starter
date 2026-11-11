<template>
<li class="literature-item">
    <a :href="href" class="literature-item-title" target="_blank" rel="noopener noreferrer">{{title}}</a>
    <span class="literature-item-year">{{year}}</span>
</li>
</template>

<script setup>
defineProps({
    href: {
        type: String,
        required: true,
    },
        title: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    }
})</script>