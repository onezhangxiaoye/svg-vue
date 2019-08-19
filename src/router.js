import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-svg',
      name: 'about',
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/ssvg',
      name: 'ssvg',
      component: () => import(/* webpackChunkName: "about" */ './views/Ssvg.vue')
    },
    {
      path: '/svgTest',
      name: 'SvgTest',
      component: () => import(/* webpackChunkName: "about" */ './views/SvgTest.vue')
    },
    {
      path: '/animaition',
      name: 'animaition',
      component: () => import(/* webpackChunkName: "about" */ './views/Animaition.vue')
    },
  ]
})
