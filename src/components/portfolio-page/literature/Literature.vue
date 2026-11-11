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

let books = [
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