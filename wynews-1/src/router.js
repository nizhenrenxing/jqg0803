import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/Detail',
      name: 'Detail',
      component: () => import('./views/Detail.vue')
    },
    {
      path: '/Orlist',
      name: 'Orlist',
      component: () => import('./views/Orlist.vue')
    },
    {
      path: '/Fun',
      name: 'Fun',
      component: () => import('./views/Fun.vue')
    },
    {
      path: '/Money',
      name: 'Money',
      component: () => import('./views/Money.vue')
    },
    {
      path: '/War',
      name: 'War',
      component: () => import('./views/War.vue')
    },
    {
      path: '/Sport',
      name: 'Sport',
      component: () => import('./views/Sport.vue')
    },
    {
      path: '/Tech',
      name: 'Tech',
      component: () => import('./views/Tech.vue')
    },
    {
      path: '/Phone',
      name: 'Phone',
      component: () => import('./views/Phone.vue')
    },
    {
      path: '/Digtal',
      name: 'Digtal',
      component: () => import('./views/Digtal.vue')
    },
    {
      path: '/Fashion',
      name: 'Fashion',
      component: () => import('./views/Fashion.vue')
    },
    {
      path: '/Game',
      name: 'Game',
      component: () => import('./views/Game.vue')
    },
    {
      path: '/Edu',
      name: 'Edu',
      component: () => import('./views/Edu.vue')
    },
    {
      path: '/Health',
      name: 'Health',
      component: () => import('./views/Health.vue')
    },
    {
      path: '/Travel',
      name: 'Travel',
      component: () => import('./views/Travel.vue')
    }
  ]
})
