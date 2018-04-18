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
 * 得到招聘信息
 */
export const getGetRecruit = (params) => axios.post(baseUrl+"recruit/getrecruit",params);

/**
 * 得到城市信息
 */
export const getCityList = (pyCode) => axios.get(baseUrl+"city/getCityList?pyCode="+pyCode);

