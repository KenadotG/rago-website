

import Home from '../components/pages/Home.vue'
import Contact from '../components/Pages/Contact.vue'

import { createRouter, createWebHistory } from 'vue-router'

let routes = [
  {
    path: '/',
    name: '/',
    component: Home,
  },
  {
    path: '/',
    name: '/',
    component: Home,
  },
  {
    path: '/Contact',
    name: '/Contact',
    component: Contact,
  }
]

const router = createRouter({
  history: createWebHistory(''),
  routes,
  linkActiveClass: 'active',
})

export default router