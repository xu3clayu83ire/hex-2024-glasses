import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LocationView from '../views/LocationView.vue'

const router = createRouter({
    //history: createWebHistory(''),
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'index',
        component: HomeView
      },
      {
        path: '/location',
        name: 'location',
        component: LocationView
      }
    ]
  })
  
  export default router