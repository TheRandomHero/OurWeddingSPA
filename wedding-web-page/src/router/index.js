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
      title: 'Melinda és Attila nagy napja',
      requiresAuth: true
    }
  },
  {
    path: '/gallery',
    name: 'Galéria',
    component: () => import('../views/Gallery.vue'),
    meta: {
      title: 'Melinda és Attila nagy napja',
      requiresAuth: true
    }
  },
  {
    path: '/gallery/:group',
    name: 'Fotók',
    props: true,
    component: () => import('../views/GallerySlide.vue'),
    meta: {
      title: 'Melinda és Attila nagy napja',
      requiresAuth: true
    }
  },
  {
    path: '/info',
    name: 'Helyszínek',
    component: () => import('../views/Information.vue')
    ,meta: {
      title: 'Melinda és Attila nagy napja',
      requiresAuth: true
    }
  },
  {
    path: '/program',
    name: 'Program',
    component: () => import('../views/Program.vue')
    ,meta: {
      title: 'Melinda és Attila nagy napja',
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
