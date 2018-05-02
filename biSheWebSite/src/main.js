// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import './assets/common.less'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import moment from "moment"
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

router.beforeEach((to, from, next) => {
  let status = localStorage.getItem("userName");
  let type = localStorage.getItem("type");
  if(to.path == '/personalCenter'){
    if (status == "" || status == null) {  // 判断用户密码状态
      alert("请先登录！");
    }else {
      if(type == "jobSeeker"){
         next();
      }else{
        alert("您是企业用户，无法使用个人中心");
      }
    }
  }else if(to.path == '/enterpriseLogin'){
    if(status == "" || status == null){
         next();
    }else{
      if(type == "companyUser"){
         next('/enterpriseService');
      }else{
        next();
      }
    }
  }else{
    next();
  }
})

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
