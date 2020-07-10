import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Főoldal',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Galéria',
    component: () => import('../views/Gallery.vue')
  },
  {
    path: '/gallery/:group',
    name: 'Fotók',
    props: true,
    component: () => import('../views/GallerySlide.vue')
  },
  {
    path: '/info',
    name: 'Helyszínek',
    component: () => import('../views/Information.vue')
  },
  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/Program.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
