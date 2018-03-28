import Vue from 'vue'
import Router from 'vue-router'
import App from '../App.vue'
Vue.use(Router)

const registerPage = r => require.ensure([], () => r(require('../components/submit/register')), 'registerPage')
const login = r => require.ensure([], () => r(require('../components/submit/login')), 'login')

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: registerPage,
      },
      {
        path: 'login',
        component: login,
      }
    ]
  }
]

export default new Router({
  routes
})