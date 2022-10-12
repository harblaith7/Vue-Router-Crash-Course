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
      path: '/home',
      redirect: { name: 'home' }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/car/:id',
      name: 'car',
      component: () => import('../views/CarView.vue'),
      children: [
        {
          path: 'dealer',
          component: () => import('../views/DealerView.vue')
        },
        {
          path: 'manufactorer',
          component: () => import('../views/ManufactorerView.vue')
        }
      ]
    },
    { 
      path: '/:pathMatch(.*)*',
      name: 'NotFound', 
      component: () => import('../views/NotFoundView.vue')
    },
  ]
})

export default router
