import axios from 'axios'
import { baseUrl } from '../config'
/**
 * 用户登录
 */
export const accountLogin = (params) => axios.post(baseUrl+"user/login",params);
/**
 * 用户退出
 */
export const accountLogout = () => axios.post(baseUrl+"user/logout");
