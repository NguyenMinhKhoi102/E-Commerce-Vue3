import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/customer/NotFoundPage.vue"),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('../views/customer/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('../views/customer/SignUp.vue')
  },
  {
    path: '/',
    name: 'home',
    component: () => import('../views/customer/Home.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
