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

export function createRouter() {
  const router = new VueRouter({
    mode: 'history',
    routes: [
      {
        path: '/',
        name: 'home',
        redirect: '/templete',
        component: () => import(/* webpackChunkName: 'home' */'@/App.vue')
      },
      {
        path: '/templete',
        name: 'templete',
        component: () => import(/* webpackChunkName: 'templete' */'@/pages/templete/index.vue')
      },
      {
        path: '/templeteTest',
        name: 'templeteTest',
        component: () => import(/* webpackChunkName: 'test' */'@/pages/templete/test.vue')
      },
      notFound,
      defaultPage
    ]
  });
  return router;
}
