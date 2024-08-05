import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'material-icons/iconfont/material-icons.css';
import '@/assets/styles/all.scss';
//import * as bootstrap from 'bootstrap'

const app = createApp(App)

app.use(router)
app.mount('#app')