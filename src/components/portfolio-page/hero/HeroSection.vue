<template>
  <section class="hero">
    <div class="hero-content">
      <h1 class="hero-title">
        <span class="split-text">
          <span class="split-text-line">ТАТА</span>
          <span class="split-text-line">АППОЛОНОВА</span>
        </span>
      </h1>
      <p class="hero-description">
        Писатель, программист, создатель AI-проекта ХИМЕРА.
        Трансформирую реальность через слово и алгоритмы.
      </p>
      <UiButton href="#contacts" label="Связаться" />
    </div>

    <div class="hero-visual">
      <div class="hero-image">
        <img src="@/assets/images/hero-image.jpg" alt="Тата Апполонова" loading="eager">
      </div>
    </div>
  </section>
</template>

<script setup>
import UiButton from '@/components/portfolio-page/ui/UiButton.vue';
</script>

<style scoped>
.hero {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  padding: 120px 60px 60px;
  gap: 40px;
  position: relative;
  overflow: hidden;
  background: #000;
}

.hero-content {
  z-index: 2;
}

.hero-title {
  font-family: 'Times New Roman', Times, serif;
  font-size: 5.2rem;
  font-weight: 700;
  line-height: 1.05;
  margin-bottom: 30px;
  letter-spacing: -3px;
}

.split-text-line {
  display: block;
}

.hero-description {
  font-size: 1.15rem;
  color: #aaa;
  max-width: 650px;
  line-height: 1.65;
  margin-bottom: 45px;
}

.hero-visual {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image {
  width: 100%;
  max-width: 520px;
  aspect-ratio: 4 / 5;
  overflow: hidden;
  border-radius: 6px;
  box-shadow: 0 50px 120px rgba(201, 0, 0, 0.4);
  transition: transform 0.6s ease;
}

.hero-image:hover {
  transform: scale(1.03);
}

.hero-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center 20%;
  display: block;
}
</style>