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
const enterpriseService = r => require.ensure([], () => r(require('../components/enterprise/enterprise-service')), 'enterpriseService')
const resumeReceivedDetails = r => require.ensure([], () => r(require('../components/enterprise/resume-received-details')), 'resumeReceivedDetails')
const companyDetails =  r => require.ensure([], () => r(require('../components/company-details')), 'companyDetails')
const jobDetails =  r => require.ensure([], () => r(require('../components/job-details')), 'jobDetails')
const recruitEditor =  r => require.ensure([], () => r(require('../components/recruit-editor')), 'recruitEditor')
const recruitBuild =  r => require.ensure([], () => r(require('../components/recruit-bulid')), 'recruitBuild')
const resumeSearch =  r => require.ensure([], () => r(require('../components/resume-search')), 'resumeSearch')

const articleEditor =  r => require.ensure([], () => r(require('../components/article/article-editor')), 'articleEditor')
const articleDetails =  r => require.ensure([], () => r(require('../components/article/article-details')), 'articleDetails')
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
        name:'jobSearch',
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
        path: 'enterpriseService',
        component: enterpriseService
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
      ,{
        name:'resumeReceivedDetails', 
        path:'resumeReceivedDetails',
        component:resumeReceivedDetails
      }
      ,{
        name:'resumeSearch', 
        path:'resumeSearch',
        component:resumeSearch
      }
      ,{
        name:'articleEditor', 
        path:'articleEditor',
        component:articleEditor
      }
      ,{
        name:'articleDetails', 
        path:'articleDetails',
        component:articleDetails
      }
    ]
  },
  
];

export default new Router({
  routes
})