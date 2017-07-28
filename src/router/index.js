import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Introduction from '@/components/Introduction'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/introduction',
      name: 'Introduction',
      component: Introduction
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
