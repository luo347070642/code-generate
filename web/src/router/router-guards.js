import { isNavigationFailure } from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

NProgress.configure({ showSpinner: false })

export function createRouterGuards(router) {
  router.beforeEach((to, from, next) => {
    NProgress.start() // start progress bar
    const token = localStorage.getItem('token') || true
    if (token) {
      if (to.path === '/login') {
        next(from)
        NProgress.done()
      } else {
        next()
      }
    } else {
      if (to.path === '/login') {
        next()
      } else {
        next('/login')
        NProgress.done()
      }
    }
  })

  router.afterEach((to, from, failure) => {
    if (isNavigationFailure(failure)) {
      console.warn('failed navigation', failure)
    }
    NProgress.done() // finish progress bar
  })

  router.onError(error => {
    console.error(error, '路由错误')
  })
}
