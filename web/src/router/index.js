import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuards } from './router-guards'
export const routes = [
  {
    path: '/',
    name: 'app',
    redirect: '/home',
    component: () => import(/* webpackChunkName: "layout" */ '@/App.vue'),
    meta: {
      title: '首页'
    }
  }
]
const router = createRouter({
  history: createWebHistory(''),
  routes
})

export function setupRouter(app) {
  app.use(router)
  createRouterGuards(router)
}

export default router
