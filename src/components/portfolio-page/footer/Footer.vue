<template>
    <footer>
        <p>© {{currentYear}} Тата Апполонова. Все права защищены.</p>
    </footer>
</template>

<script setup>
let currentYear = new Date().getFullYear();
</script>