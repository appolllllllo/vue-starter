<template>
  <Header/>
  <HeroSection/>
  <About/>
  <ProjectsSection/>
  <LiteratureSection/>
  <Chimera/>
  <ContactsSection/>
  <Footer/>
</template>

<script setup>
import { onMounted } from 'vue';
import About from '@/components/portfolio-page/about/About.vue';
import Header from '@/components/portfolio-page/header/Header.vue'
import HeroSection from '@/components/portfolio-page/hero/HeroSection.vue';
import ProjectsSection from '@/components/portfolio-page/projects/ProjectsSection.vue';
import LiteratureSection from '@/components/portfolio-page/literature/LiteratureSection.vue';
import Chimera from '@/components/portfolio-page/chimera/Chimera.vue';
import ContactsSection from '@/components/portfolio-page/contacts/ContactsSection.vue';
import Footer from '@/components/portfolio-page/footer/Footer.vue';

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .literature-item').forEach(el => {
    observer.observe(el);
  });
});
</script>