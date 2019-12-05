// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/index'
import 'lib-flexible/flexible'
import  {post,get,put} from  "../src/unitls/request";
Vue.prototype.$post=post
Vue.prototype.$get=get
Vue.prototype.$put=put
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
