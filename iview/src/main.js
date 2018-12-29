// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import router from './router'
import iView from 'iview'

import 'iview/dist/styles/iview.css'
// import '../my-theme/index.less'

Vue.use(VueRouter)
Vue.use(iView)
// const RouterConfig = {
//   routes: router
// };

Vue.config.productionTip = false



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
