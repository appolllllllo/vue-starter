<template>
    <section id="chimera" class="chimera">
        <SectionHeader order="04" label="AI-проект"/>
        <div class="chimera-content">
            <h2 class="chimera-title">ХИМЕРА</h2>
            <p class="chimera-description">
                Экспериментальный проект, в котором я реализую концепцию Human-AI Collaboration. Использую ИИ как
                соавтора для создания музыкальных произведений. Моя цель — не заменить человека, а расширить границы
                того, что мы называем искусством.
            </p>
            <UiButton href="https://band.link/h1mera_project/" label="Слушать" target="_blank"/>
        </div>
    </section>
    </template>

<script setup lang="ts">
import SectionHeader from "@/components/portfolio-page/molecules/SectionHeader.vue";
import UiButton from "@/components/portfolio-page/ui/UiButton.vue";
</script>

<style scoped>
.chimera {
    text-align: center;
    position: relative;
    overflow: hidden;
    padding: 120px 60px 100px;
}

.chimera-content {
    position: relative;
    z-index: 1;
    max-width: 600px;
    margin: 0 auto;
}

.chimera-title {
    font-size: 6rem;
    font-weight: 800;
    letter-spacing: 20px;
    margin-bottom: 30px;
    color: #c90000;
    font-family: 'Times New Roman', Times, serif;
}

.chimera-description {
    font-size: 1.2rem;
    color: #888;
    margin: 0 auto 50px;
    line-height: 1.8;
}

@media (max-width: 1024px) {
    .chimera {
        padding: 80px 30px 100px;
    }

    .chimera-title {
        font-size: 3rem;
        letter-spacing: 10px;
    }
}
</style>