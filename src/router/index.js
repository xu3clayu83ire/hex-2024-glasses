import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    //history: createWebHistory(''),
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'index',
        component: HomeView
      }
    ]
  })
  
  export default router