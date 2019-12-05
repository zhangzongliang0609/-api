import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import xxl from  "../../view/chinese"
import rank from  "../../view/ranking"
import move from  "../../view/movie"
import next from  "../../view/next"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'xxl',
      component: xxl
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path: '/move',
      name: 'move',
      component: move
    },  {
      path: '/next',
      name: 'next',
      component: next
    },

  ]
})
