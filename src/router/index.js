import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/cardbacks',
      name: 'cardbacks',
      component: () => import('../views/CardbacksView.vue')
    }
  ]
})

export default router
