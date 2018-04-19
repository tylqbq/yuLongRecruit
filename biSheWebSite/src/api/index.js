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
 * 得到城市信息
 */
export const getCityList = (pyCode) => axios.get(baseUrl+"city/getCityList?pyCode="+pyCode);

/**
 * 得到公司信息ById
 */
export const getCompanyInfoById = (companyId) => axios.get(baseUrl+"company/getcompanyInfobyid?id="+companyId);


