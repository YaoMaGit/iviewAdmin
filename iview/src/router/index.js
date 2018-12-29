import Vue from 'vue'
import Router from 'vue-router'
import content_page from '@/components/content_page'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'content_page',
      component: content_page
    }
  ]
})
