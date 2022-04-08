import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

import { useAuthStore } from '@/stores/auth-store'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.config.globalProperties.$auth = useAuthStore();
app.mount('#app')

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.js"
// import "./assets/app.css"
// import "./assets/base.css"