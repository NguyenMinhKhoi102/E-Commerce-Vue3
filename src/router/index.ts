import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: "/:pathMatch(.*)*",
    name: "notfound",
    component: () => import("@/views/NotFoundPage.vue"),
  },
  {
    path: '/signin',
    name: 'signin',
    component: () => import('@/views/customer/SignIn.vue')
  },
  {
    path: '/signup',
    name: 'signup',
    component: () => import('@/views/customer/SignUp.vue')
  },
  {
    path: '/admin/signin',
    name: 'admin.signin',
    component: () => import('@/views/admin/SignIn.vue'),
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/customer/Layout.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/customer/Home.vue'),
      }
    ]
  },
  {
    path: '/admin',
    name: 'admin.layout',
    component: () => import('@/views/admin/Layout.vue'),
    children: [
      {
        path: '/admin',
        name: 'admin.dashboard',
        component: () => import('@/views/admin/Dashboard.vue'),
      },
      {
        path: '/admin/category',
        name: 'admin.category',
        component: () => import('@/views/admin/Category.vue'),
      },
      {
        path: '/admin/product',
        name: 'admin.product',
        component: () => import('@/views/admin/Product.vue'),
      }


    ]
  }

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
