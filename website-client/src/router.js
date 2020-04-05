import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const notFound = {
  path: '*',
  redirect: '/'
}
const defaultPage = {
  path: '/',
  redirect: {
    name: ''
  }
}

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/pageList',
      component: () => import(/* webpackChunkName: 'home' */'@/App.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import(/* webpackChunkName: 'templete' */'@/pages/edit/index.vue')
    },
    {
      path: '/pageList',
      name: 'pageList',
      component: () => import(/* webpackChunkName: 'templete' */'@/pages/pageList/index.vue')
    },
    notFound,
    defaultPage
  ]
});

export default router
