import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/pages/HomePage.vue'
import CheckListPage from '@/pages/CheckListPage.vue'
import PortfolioPage from '@/pages/PortfolioPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutPage.vue'),
    // },
    {
      path: '/',
      name: 'portfolio',
      component: PortfolioPage
    },
    {
      path: '/checklist',
      name: 'checklist',
      component: CheckListPage
    }
  ],
})

export default router
