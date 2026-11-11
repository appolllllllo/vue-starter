<template>
    <ul class="literature-list">
        <BookItem v-for="(book, index) in books"
        :key="index"
        :title="book.title"
        :href="book.href"
        :year="book.year"
        >
        </BookItem>
    </ul>
</template>


<script setup>
import BookItem from '@/components/portfolio-page/literature/BookItem.vue';

defineProps({
    books: {
        type: Array,
        required: true,
    }
})
</script>