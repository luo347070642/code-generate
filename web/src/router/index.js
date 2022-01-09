import { createRouter, createWebHistory } from 'vue-router'
import { createRouterGuards } from './router-guards'

const index = () => import(/* webpackChunkName: "layout" */ '@/views/index.vue')
const ResultMsg = () => import(/* webpackChunkName: "layout" */ '@/components/ResultMsg/index.vue')
export const routes = [
  {
    path: '/',
    redirect: '/index'
  },
  {
    path: '/index',
    name: 'index',
    component: index
  },
  { path: '/403', name: '403', component: ResultMsg, meta: { subTitle: '对不起，您无权访问此页面。' } },
  { path: '/500', name: '500', component: ResultMsg, meta: { subTitle: '对不起，服务器是错误的。' } },
  { path: '/:pathMatch(.*)*', name: '404', component: ResultMsg, meta: { subTitle: '对不起，您访问的页面不存在。' } }
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
