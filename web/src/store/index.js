import { createStore, createLogger } from 'vuex'
import modules from '@/store/modules'

export const key = Symbol()
const plugins = import.meta.env.DEV
  ? [
      createLogger({
        filter(mutation, stateBefore, stateAfter) {
          const notNeedDebugs = ['lockscreen/setLockTime', 'lockscreen/setLock']
          return !notNeedDebugs.includes(mutation.type)
        }
      })
    ]
  : []

const store = createStore({
  plugins,
  modules
})

export function setupStore(app) {
  app.use(store, key)
  console.log(store, 'vuex')
}

export default store
