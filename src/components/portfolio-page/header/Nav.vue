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

const navItems = [
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

<style scoped>
.nav-links {
    display: flex;
    gap: 40px;
    list-style: none;
    margin-right: 145px;
}

@media (max-width: 1024px) {
    .nav-links {
        gap: 20px;
        margin-right: 0;
    }
}
</style>