import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/intake',
    name: 'Intake',
    component: () => import(/* webpackChunkName: "intake" */ '../views/Intake.vue')
  },
  {
    path: '/survivors',
    name: 'Survivors',
    component: () => import(/* webpackChunkName: "survivors" */ '../views/Survivors.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
