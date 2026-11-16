<template>
    <footer>
        <p>© {{ currentYear }} Тата Апполонова. Все права защищены.</p>
    </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear();
</script>

<style scoped>
footer {
    padding: 60px;
    text-align: center;
    border-top: 1px solid #222;
    color: #666;
    font-size: 0.85rem;
}
</style>