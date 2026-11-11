<template>
<section id="projects">
        <SectionHeader order="02" label="IT-проекты"/>
        <div class="projects-grid">

        <ProjectCard 
            v-for="(card, index) in projectCards"
            :key="index"
            :title="card.title"
            :description="card.description"
            :button="card.button"
            :tags="card.tags"
        >
        </ProjectCard>

        </div>
    </section>
</template>

<script setup>
import SectionHeader from '@/components/portfolio-page/molecules/SectionHeader.vue';
import ProjectCard from '@/components/portfolio-page/projects/ProjectCard.vue';

let projectCards = [
    {
        title: "Delphis Oracle Bot",
        description: "Цифровая Пифия из храма Аполлона. Задай ей любой вопрос, и она ответит тебе на языке древних пророчеств: с туманными намеками и легкой долей божественного сарказма…",
        tags: ['JavaScript', 'Node.js'],
        button: {
            href: "https://t.me/delphis_oracle_bot",
            label: "Задать вопрос",
            target: "_blank",
        }
    },
    {
        title: "AI Sound Design",
        description: "Разработка и тестирование текстовых запросов для генерации музыки. Обработка, сведение и мастеринг сгенерированных треков для достижения коммерческого качества звука.",
        tags: ['Prompt Engineering', 'Sound Design']
    },
    {
        title: "Frontend Development",
        description: "Создание современных веб-приложений. Адаптивная верстка, дизайн и оптимизация производительности (UX)",
        tags: ['HTML', 'CSS', 'Node.js', 'JavaScript', 'Vue']
    }
];
</script>

