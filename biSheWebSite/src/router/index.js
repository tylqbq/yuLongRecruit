import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import App from '../App'
Vue.use(Router)

const index = r => require.ensure([], () => r(require('../components/index')), 'index')
const jobSearch = r => require.ensure([], () => r(require('../components/job-search')), 'jobSearch')
const personalCenter = r => require.ensure([], () => r(require('../components/personal-center')), 'personalCenter')
const regionalChannel = r => require.ensure([], () => r(require('../components/regional-channel')), 'regionalChannel')
const workplaceCounseling = r => require.ensure([], () => r(require('../components/workplace-counseling')), 'workplaceCounseling')
const enterpriseService = r => require.ensure([], () => r(require('../components/enterprise-service')), 'enterpriseService')

const routes = [
  {
    path: '/',
    component: App,
    children: [
      {
        path: '',
        component: Home,
        children:[
          {
            path: 'index',
            component: index
          },{
            path: 'jobSearch',
            component: jobSearch
          },{
            path: 'personalCenter',
            component: personalCenter
          },{
            path: 'regionalChannel',
            component: regionalChannel
          },{
            path: 'workplaceCounseling',
            component: workplaceCounseling
          },{
            path: 'enterpriseService',
            component: enterpriseService
          }
        ]
      },
      
    ]
  },
  
];

export default new Router({
  routes
})