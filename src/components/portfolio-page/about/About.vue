<template>
    <section id="about" class="about">
        <SectionHeader order="01" label="Обо мне"/>
        <div class="about-grid">
            <div class="about-text">
                <p>
                    Меня зовут <strong>Тата Апполонова</strong>. Я живу на пересечении двух миров —
                    между живым дыханием поэзии и холодной точностью кода.
                </p>
                <p>
                    Пишу стихи, рассказы, разрабатываю цифровые продукты и развиваю музыкальный
                    AI-проект <span class="highlight-bold">ХИМЕРА</span>.
                    Убеждена в том, что программирование — это новая форма современного искусства.
                    Верю, что воображение и интуиция так же важны, как логика и критическое мышление.
                </p>
                <p>
                    Не разделяю людей на «технарей» и «гуманитариев»,<br>
                    потому что знаю: <span class="highlight-italic">определить — значит
                        ограничить.</span>
                </p>
            </div>
            <div class="about-image">
                <img src="@/assets/images/about-image.jpg" alt="Тата Апполонова — писатель и программист">
            </div>
        </div>
    </section>
</template>

<script setup>
import SectionHeader from '@/components/portfolio-page/molecules/SectionHeader.vue';
</script>

<style scoped>
.highlight-bold {
    color: #c90000;
    font-weight: 600;
}
.highlight-italic {
    color: #c90000;
    font-style: italic;
}
</style>