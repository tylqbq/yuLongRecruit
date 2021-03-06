// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Register from './Register.vue'
import router from './router/registerRouter.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VueResource from 'vue-resource';
import echarts from 'echarts'
Vue.use(VueResource)
Vue.use(ElementUI)
Vue.prototype.$echarts = echarts 
Vue.config.productionTip = false
Vue.prototype.$ajax = axios
/* eslint-disable no-new */
new Vue({
  el: '#register',
  router,
  template: '<Register/>',
  components: { Register }
})
