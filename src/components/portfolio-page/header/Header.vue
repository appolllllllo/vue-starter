<template>
  <nav>
    <a href="#top" class="logo">ТА</a>
    <Nav />
  </nav>
</template>

<script setup>
import Nav from '@/components/portfolio-page/header/Nav.vue'
</script>

<style scoped>
nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 30px 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.9);
  backdrop-filter: blur(10px);
}

.logo {
  font-weight: 800;
  font-size: 1.2rem;
  letter-spacing: 3px;
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

.logo:hover {
  color: #c90000;
}

@media (max-width: 1024px) {
  nav {
    padding: 20px 30px;
  }
}
</style>