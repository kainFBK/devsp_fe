import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import imgloader from '@/components/imgloader'
import urlsend from '@/components/urlsend'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/imgloader',
      name: 'imgloader',
      component: imgloader
    },
    {
      path: '/urlsend',
      name: 'urlsend',
      component: urlsend
    }
  ]
})
