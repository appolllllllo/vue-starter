<template>
    <ul class="nav-links">
        <NavItem
        v-for="(item, index) in navItems"
        :key="index"
        :href="item.href"
        :label="item.label"
        >
        </NavItem>
    </ul>
</template>

<script setup>
import NavItem from '@/components/portfolio-page/header/NavItem.vue'

let navItems = [
    {
        href: "#about",
        label: "Обо мне"
    },
    {
        href: "#projects",
        label: "IT-проекты"
    },
    {
        href: "#literature",
        label: "Книги"
    },
    {
        href: "#chimera",
        label: "ХИМЕРА"
    }
];
</script>