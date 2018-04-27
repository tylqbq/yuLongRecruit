import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import App from '../App'
Vue.use(Router)

const index = r => require.ensure([], () => r(require('../components/index')), 'index')
const jobSearch = r => require.ensure([], () => r(require('../components/job-search')), 'jobSearch')
const personalCenter = r => require.ensure([], () => r(require('../components/personal-center')), 'personalCenter')
const regionalChannel = r => require.ensure([], () => r(require('../components/regional-channel')), 'regionalChannel')
const workplaceCounseling = r => require.ensure([], () => r(require('../components/workplace-counseling')), 'workplaceCounseling')
const enterpriseLogin = r => require.ensure([], () => r(require('../components/enterprise/enterprise-login')), 'enterpriseLogin')
const enterpriseRegister = r => require.ensure([], () => r(require('../components/enterprise/enterprise-register')), 'enterpriseRegister')
const companyDetails =  r => require.ensure([], () => r(require('../components/company-details')), 'companyDetails')
const jobDetails =  r => require.ensure([], () => r(require('../components/job-details')), 'jobDetails')
const recruitEditor =  r => require.ensure([], () => r(require('../components/recruit-editor')), 'recruitEditor')
const recruitBuild =  r => require.ensure([], () => r(require('../components/recruit-bulid')), 'recruitBuild')

const routes = [
  {
    path: '',
    component: Home,
    children:[
      {
        path:'/',
        component:index
      },
      {
        path: 'index',
        component: index
      },
      {
        path: 'jobSearch',
        component: jobSearch
      },
      {
        path: 'personalCenter',
        component: personalCenter
      },
      {
        path: 'regionalChannel',
        component: regionalChannel
      },
      {
        path: 'workplaceCounseling',
        component: workplaceCounseling
      },
      {
        path: 'enterpriseLogin',
        component: enterpriseLogin
      },{
        path: 'enterpriseRegister',
        component: enterpriseRegister
      },
      {
        name:'companyDetails',   
        path:'companyDetails',
        component:companyDetails
      },{
        name:'jobDetails', 
        path:'jobDetails',
        component:jobDetails
      },{
        name:'recruitEditor', 
        path:'recruitEditor',
        component:recruitEditor
      },{
        name:'recruitBuild', 
        path:'recruitBuild',
        component:recruitBuild
      }
    ]
  },
  
];

export default new Router({
  routes
})