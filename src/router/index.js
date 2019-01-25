import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import List from '@/components/User'

Vue.use(Router)

export default new Router({
  mode:"history",
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login,
      meta:{auth:true}
    },
    {
      path: '/list',
      name: 'List',
      component: List,
      meta:{auth:true}
    },
  ]
})
