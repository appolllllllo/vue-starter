<template>
    <a
        :href="href"
        :target="target"
        :class="['ui-button', { 'ui-button--small': size === 'small' }]"
    >
        {{ label }}
    </a>
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
    },
    size: {
        type: String,
        required: false,
        default: "default"
    }
})
</script>

<style scoped>
.ui-button {
    display: inline-block;
    padding: 18px 52px;
    background: #c90000;
    color: #fff;
    text-decoration: none;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: 600;
    border: 2px solid #c90000;
    cursor: pointer;
    transition: background 0.4s ease, color 0.4s ease, transform 0.4s ease;
}

.ui-button--small {
    padding: 12px 28px;
    font-size: 0.75rem;
    letter-spacing: 2px;
}

.ui-button:hover {
    background: transparent;
    color: #c90000;
    transform: translateY(-3px);
}

.ui-button:focus-visible {
    outline: 2px solid #c90000;
    outline-offset: 3px;
}
</style>