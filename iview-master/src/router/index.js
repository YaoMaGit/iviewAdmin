import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', redirect: { name: 'view' } },
    {
      path: '/view',
      name: 'view',
      component: resolve => require(['../view'], resolve),
      redirect: { name: 'assets' },
      children: [
        {
          path: '/assets',
          name: 'assets',
          component: resolve => require(['@/pages/assets_page'], resolve),
          redirect: { name: 'assets_report' },
          children: [
            {
              path: 'assets_report',
              name: 'assets_report',
              component: resolve => require(['@/pages/assets_report'], resolve),
            },
            {
              path: 'assets_items',
              name: 'assets_items',
              component: resolve => require(['@/pages/assets_items'], resolve),
            },
            {
              path: 'assets_detail',
              name: 'assets_detail',
              component: resolve => require(['@/pages/assets_detail'], resolve),
            }
          ]
        },
        {
          path: '/content_page',
          name: 'content_page',
          component: resolve => require(['@/pages/content_page'], resolve)
        },
        {
          path: '/content_page2',
          name: 'content_page2',
          component: resolve => require(['@/pages/content_page2'], resolve)
        }
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: resolve => require(['../login'], resolve)
    },

  ]
})
router.beforeEach(function(to, from, next){
  let login = localStorage.getItem('token')
  let path = to.path
  console.log('xxx')
  if (path === '/login') {
    next()
    return
  }
  if (login) {
    if (path === '/') {
      next({
        name: 'view'
      })
    } else {
      next()
    }
  } else {
    next({
      name: 'login'
    })
  }

})


export default router



