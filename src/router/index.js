import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/home.vue'
import Libros from '@/views/libros.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/libros', name: 'Libros', component: Libros },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
