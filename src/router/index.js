import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const Cart = () => import('views/cart/Cart')
const Category = () => import ('@/views/category/Category')
const Home = () => import ('@/views/home/Home')
const profile = () => import ('@/views/profile/Profile')
const detail = () => import ('@/views/detail/Detail')

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
      component: profile
    },
    {
      path: '/detail:iid',
      component: detail
    }
  ],
  mode: 'history'
})

export default router;

