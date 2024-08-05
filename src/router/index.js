import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import HelloWorld from '../views/HelloWorld.vue'

const router = createRouter({
    //history: createWebHistory(''),
    history: createWebHashHistory(),
    routes: [
      {
        path: '/',
        name: 'index',
        component: HelloWorld
      }
    ]
  })
  
  export default router