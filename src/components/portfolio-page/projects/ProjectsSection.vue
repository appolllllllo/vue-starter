<template>
    <section id="projects" class="projects">
        <SectionHeader order="02" label="IT-проекты" />
        <div class="projects-grid">

            <ProjectCard
                v-for="(card, index) in projectCards"
                :key="index"
                :title="card.title"
                :description="card.description"
                :button="card.button"
                :tags="card.tags"
            />
        </div>
    </section>
</template>

<script setup>
import SectionHeader from '@/components/portfolio-page/molecules/SectionHeader.vue';
import ProjectCard from '@/components/portfolio-page/projects/ProjectCard.vue';

const projectCards = [
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

<style scoped>
.projects {
    padding: 120px 60px;
    position: relative;
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-top: 60px;
}

@media (max-width: 1024px) {
    .projects {
        padding: 80px 30px;
    }

    .projects-grid {
        grid-template-columns: 1fr;
    }
}
</style>