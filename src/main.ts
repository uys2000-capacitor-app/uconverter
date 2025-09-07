import './assets/main.css'
import 'material-design-icons/iconfont/material-icons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import { setULogger } from '@uys2000/u-logger'

setULogger(true)

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
