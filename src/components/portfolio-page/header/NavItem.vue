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

<style scoped>
a {
    color: #fff;
    text-decoration: none;
    font-size: 0.85rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    transition: color 0.3s;
    position: relative;
}

a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 1px;
    background: #c90000;
    transition: width 0.3s;
}

a:hover::after {
    width: 100%;
}

a:hover {
    color: #c90000;
}
</style>