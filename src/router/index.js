

import Home from '../components/Pages/Home.vue'
import Contact from '../components/Pages/Contact.vue'
import About from '../components/Pages/About.vue'
import Company from '../components/Pages/Company.vue'

import { createRouter, createWebHistory } from 'vue-router'

let routes = [
  {
    path: '/',
    name: '/',
    component: Home,
  },
  {
    path: '/About',
    name: '/About',
    component: About,
  },
  {
    path: '/Company',
    name: '/Company',
    component: Company,
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