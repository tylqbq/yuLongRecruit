// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/common.less'
import router from './router'
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

// router.beforeEach((to, from, next) => {
//   let status = localStorage.getItem("userName");
//   if(to.path == '/personalCenter'){
//     if (status == "" || status == null) {  // 判断用户密码状态
//       // next({
//       //   path: 'register.html' 
//       // })
//       alert("请先登录！");
//       // window.location.href = "register.html";
//     }else {
//         next();
//     }
//   }else {
//         next();
//     }
// })

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
