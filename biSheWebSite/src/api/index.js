import axios from 'axios'
import { baseUrl } from '../config'
/**
 * 用户注册
 */
export const accountRegister = (params) => axios.post(baseUrl+"user/register",params);
/**
 * 用户登录
 */
export const accountLogin = (params) => axios.post(baseUrl+"user/login",params);
/**
 * 用户退出
 */
export const accountLogout = () => axios.post(baseUrl+"user/logout");

/**
 * 得到招聘信息 综合条件
 */
export const getRecruitList = (params) => axios.post(baseUrl+"recruit/getrecruit",params);

/**
 * 得到招聘信息ById
 */
export const getRecruitById = (recruitId) => axios.get(baseUrl+"recruit/getrecruitbyid?recruitId="+recruitId);

/**
 * 得到招聘信息ByCompanyId
 */
export const getRecruitByCompanyId = (params) => axios.post(baseUrl+"recruit/getrecruitbycompanyid",params);

/**
 * 判断收藏是否存在
 */
export const collectionIsExist = (recruitId,jobSeekerId) => axios.get(baseUrl+"collection/isexist?recruitId="+recruitId+"&jobSeekerId="+jobSeekerId);


/**
 * 收藏取消
 */
export const collectionRecruit = (recruitId,jobSeekerId) => axios.get(baseUrl+"recruit/collectionrecruit?recruitId="+recruitId+"&jobSeekerId="+jobSeekerId);


/**
 * 得到城市信息
 */
export const getCityList = (pyCode) => axios.get(baseUrl+"city/getCityList?pyCode="+pyCode);

/**
 * 得到公司信息ById
 */
export const getCompanyInfoById = (companyId) => axios.get(baseUrl+"company/getcompanyInfobyid?id="+companyId);



/**
 * 新建简历
 */
export const bulidResume = (params) => axios.post(baseUrl+"resume/addresume",params);

/**
 * 年收入
 */
export const addAnnualIncome = (params) => axios.post(baseUrl+"resume/addannualIncome",params);

/**
 * 新建工作意向
 */
export const addJobIntention = (params) => axios.post(baseUrl+"resume/addJobIntention",params);

/**
 * 新建工作意向
 */
export const getResumeAllById = (params) => axios.post(baseUrl+"resume/getAllById",params);