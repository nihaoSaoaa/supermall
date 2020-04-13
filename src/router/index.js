import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Cart = () => import('views/cart/Cart')
const Category = () => import ('views/category/Category')
const Home = () => import ('views/home/Home')
const profile = () => import ('views/profile/Profile')
const detail = () => import ('views/detail/Detail')

const download = () => import (/* webpackChunkName: "profile" */'views/profile/ChildrenViews/download/DownLoad.vue')
const login = () => import (/* webpackChunkName: "profile" */'views/profile/ChildrenViews/login/Login.vue')
const message = () => import (/* webpackChunkName: "profile" */'views/profile/ChildrenViews/messageBoard/MessageBoard.vue')
const reward = () => import (/* webpackChunkName: "profile" */'views/profile/ChildrenViews/reward/Reward.vue')


const router = new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/category',
      component: Category
    },
    {
      path: '/profile',
      component: profile, 
      children: [
        {
          path: 'download',
          component: download
        },
        {
          path: 'login',
          component: login
        },
        {
          path: 'message',
          component: message,
          meta: {
            login: true
          }
        },
        {
          path: 'reward',
          component: reward
        },
      ]
    },
    {
      path: '/detail/:iid',
      component: detail
    }
  ],
  mode: 'history'
})

export default router;

