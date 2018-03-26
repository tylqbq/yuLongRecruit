import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

const registerPage = r => require.ensure([], () => r(require('../components/register')), 'registerPage')

const routes = [
  {
    path: '/',
    component: registerPage,
    children: [
      {
        path: '',
        component: registerPage,
        children:[
          
        ]
      },
      
    ]
  },
  
];

export default new Router({
  routes
})