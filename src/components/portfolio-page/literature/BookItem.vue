<template>
  <li class="literature-item">
    <a
      :href="href"
      class="literature-item-title"
      target="_blank"
      rel="noopener noreferrer">
      {{ title }}
   </a>
    <span class="literature-item-year">{{ year }}</span>
  </li>
</template>

<script setup>
defineProps({
  href: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  }
})</script>

<style scoped>
.literature-item {
  padding: 30px 0;
  border-bottom: 1px solid #222;
  display: flex;
  justify-content: space-between;
  align-items: center;

  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}

.literature-item.fade-in {
  opacity: 1;
  transform: translateY(0);
}

.literature-item:hover {
  padding-left: 20px;
  color: #c90000;
}

.literature-item-title {
  text-decoration: none;
  color: inherit;
  display: inline-block;
  transition: color 0.3s;
  font-size: 1.3rem;
  font-weight: 600;
}

.literature-item-year {
  color: #c90000;
  font-size: 0.9rem;
}

.literature-item:nth-child(1) { transition-delay: 0.1s; }
.literature-item:nth-child(2) { transition-delay: 0.2s; }
.literature-item:nth-child(3) { transition-delay: 0.3s; }
.literature-item:nth-child(4) { transition-delay: 0.4s; }
.literature-item:nth-child(5) { transition-delay: 0.5s; }
.literature-item:nth-child(6) { transition-delay: 0.6s; }
</style>