import { createApp } from 'vue'
import App from './App.vue'
import router, { setupRouter } from '@/router'
import { setupStore } from '@/store'
import './index.css'

const app = createApp(App)
setupStore(app)
setupRouter(app)

router.isReady().then(() => app.mount('#app'))
