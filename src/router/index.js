import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue';
import Home from '../views/Home.vue';
import Product from '../views/product.vue';
import Header from '../components/header.vue';
import ProductDetail from '../views/product-detail.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    components:{
      default:Login
    }
  },
  {
    path: '/home',
    name: 'Home',
    components:{
      header: Header,
     default:Home,
    }
  },
  {
    path: '/product',
    name: 'Product',
    components:{
      header: Header,
     default:Product,
    }
  },
  {
    path: '/product-detail',
    name: 'ProductDetail',
    components:{
      header: Header,
     default:ProductDetail,
    }
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
