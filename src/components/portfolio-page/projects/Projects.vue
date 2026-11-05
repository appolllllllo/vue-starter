<template>
<section id="projects">
        <SectionHeader label="02 / IT-проекты"/>
        <div class="projects-grid">

        <ProjectCard title="Delphis Oracle Bot" desc="Цифровая Пифия из храма Аполлона. Задай ей любой вопрос, и она ответит тебе на языке древних пророчеств: с туманными намеками и легкой долей божественного сарказма…" :tags="['JavaScript', 'Node.js']"/>

        <ProjectCard title="AI Sound Design" desc="Разработка и тестирование текстовых запросов для генерации музыки. Обработка, сведение и мастеринг сгенерированных треков для достижения коммерческого качества звука." :tags="['Prompt Engineering', 'Sound Design']"/>

         <ProjectCard title="Frontend Development" desc="Создание современных веб-приложений. Адаптивная верстка, дизайн и оптимизация производительности (UX)" :tags="['HTML', 'CSS', 'Node.js', 'JavaScript', 'Vue']"/>

        </div>
    </section>
</template>

<script setup>
import SectionHeader from '@/components/portfolio-page/molecules/SectionHeader.vue';
import ProjectCard from '@/components/portfolio-page/projects/ProjectCard.vue';
</script>