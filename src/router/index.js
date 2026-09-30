import { createRouter, createWebHashHistory } from 'vue-router'
import Libros from '@/views/libros.vue'

const routes = [
  { path: '/', redirect: '/libros' },
  { path: '/libros', name: 'Libros', component: Libros },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('@/views/NotFound.vue') }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router