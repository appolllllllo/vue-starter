<template>
  <section id="about" class="about">
    <SectionHeader order="01" label="Обо мне" />
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
          потому что знаю: <span class="highlight-italic">определить — значит ограничить.</span>
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

.about {
  background: #0a0a0a;
  padding: 120px 60px;
}

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.about-text {
  font-size: 1.05rem;
  line-height: 1.7;
  color: #aaa;
}

.about-text p {
  margin-bottom: 20px;
}

.about-text p:last-child {
  margin-bottom: 0;
}

.about-image {
  align-self: center;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 25px 100px rgba(253, 253, 253, 0.3);
  transition: transform 0.6s ease;
}

.about-image:hover {
  transform: scale(1.03);
}

.about-image img {
  width: 100%;
  max-height: 500px;
  height: auto;
  object-fit: cover;
  display: block;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
  transition: box-shadow 0.6s ease;
}

.about-image:hover img {
  box-shadow:
    0 20px 50px rgba(0, 0, 0, 0.6),
    0 0 50px rgba(255, 255, 255, 0.25),
    0 0 100px rgba(255, 255, 255, 0.1);
}

@media (max-width: 1024px) {
  .about {
    padding: 80px 30px;
  }

  .about-grid {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 768px) {
  .about-grid {
    gap: 40px;
  }

  .about-image {
    order: -1;
    max-height: 350px;
  }
}
</style>