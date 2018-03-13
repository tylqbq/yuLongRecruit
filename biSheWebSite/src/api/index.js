import axios from 'axios'
import { baseUrl } from '../config'
/**
 * 用户登录
 */
export const accountLogin = (params) => axios.post(baseUrl+"login",params);
