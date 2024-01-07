import Vue from 'vue'
import Router from 'vue-router'
import layout from '@/view/layout'
import chat from '@/view/layout/chat'
import home from '@/view/layout/home'
import gift from '@/view/layout/gift'
import story from '@/view/layout/story'
import login from '@/view/login'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: layout,
      redirect: '/home',
      children: [
        {path: '/home', component: home},
        {path: '/story', component: story},
        {path: '/gift', component: gift},
        {path: '/chat', component: chat}
      ]
    },
    {
      path: '/login',
      component: login
    }
  ]
})