<template>
    <section id="literature" class="literature">
        <SectionHeader order="03" label="Книги"/>
        <div class="literature-content">
            <div class="literature-quote">
                «Я в большей степени фаталист, но считаю, что с судьбой можно и нужно взаимодействовать.»
            </div>
            <LiteratureList :books="books"/>
        </div>
    </section>
    </template>

<script setup>
import SectionHeader from '@/components/portfolio-page/molecules/SectionHeader.vue';
import LiteratureList from '@/components/portfolio-page/literature/LiteratureList.vue';

const books = [
    {
        title: "Повесть «Лишние»",
        href: "https://www.litres.ru/66860168/",
        year: "2021"
    },
    {
        title: "Рассказ «Тверская»",
        href: "https://www.litres.ru/67263599/",
        year: "2022"
    },
    {
        title: "Пьеса «Ногтитюрн»",
        href: "https://www.litres.ru/book/tata-appolonova/nogtiturn-68005772/",
        year: "2022"
    },
    {
        title: "Рассказ «Эрик Рыжий»",
        href: "https://www.litres.ru/book/tata-appolonova/erik-ryzhiy-69273112/",
        year: "2023"
    },
    {
        title: "Рассказ «Дубленка»",
        href: "https://www.litres.ru/74396624/",
        year: "2026"
    },
    {
        title: "Рассказ «Жёлтый аккорд»",
        href: "https://www.litres.ru/74519464/",
        year: "2026"
    },
]
</script>

<style scoped>
.literature {
    background: #0a0a0a;
    padding: 120px 60px;
}

.literature-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 80px;
    align-items: center;
}

.literature-quote {
    font-family: 'Playfair Display', serif;
    font-size: 2.3rem;
    line-height: 1.4;
    color: #fff;
    border-left: 3px solid #c90000;
    padding-left: 40px;
}

@media (max-width: 1024px) {
    .literature {
        padding: 80px 30px;
    }

    .literature-content {
        grid-template-columns: 1fr;
        gap: 60px;
    }
}
</style>