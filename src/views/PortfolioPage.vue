<template>
  <Header/>
  <Hero/>
  <About/>
  <Projects/>
  <Literature/>
  <main>
    <h1>This is portfolio page</h1>
  </main>
</template>

<script setup>
import About from '@/components/portfolio-page/about/About.vue';
import Header from '@/components/portfolio-page/header/Header.vue'
import Hero from '@/components/portfolio-page/hero/Hero.vue';
import Projects from '@/components/portfolio-page/projects/Projects.vue';
import Literature from '@/components/portfolio-page/literature/Literature.vue';
</script>