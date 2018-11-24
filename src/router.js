import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      component: Index,
      children:[
        {
          path: '',
          name: 'index',
          component: () => import('./views/index/Index.vue')
        },
        {
          path: 'category',
          name: 'category',
          component: () => import('./views/index/category.vue')
        },
        {
          path: 'cart',
          name: 'cart',
          component: () => import('./views/index/Cart.vue')
        },
        {
          path: 'profile',
          name: 'profile',
          component: () => import('./views/index/Profile.vue')
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
