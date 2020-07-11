import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Protected from '../views/Protected.vue'
import storageHelper from 'storage-helper'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Főoldal',
    component: Home,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/gallery',
    name: 'Galéria',
    component: () => import('../views/Gallery.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/gallery/:group',
    name: 'Fotók',
    props: true,
    component: () => import('../views/GallerySlide.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/info',
    name: 'Helyszínek',
    component: () => import('../views/Information.vue')
    ,meta: {
      requiresAuth: true
    }
  },
  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/Program.vue')
    ,meta: {
      requiresAuth: true
    }
  },
  {
    path: '/login',
    name: 'Bejelentkezés',
    component: Protected
  },
  {
    path:'*',
    redirect:'/',
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    if (!storageHelper.getItem('user-password')) next('/login')
    else next()
  } else next()
})

export default router
