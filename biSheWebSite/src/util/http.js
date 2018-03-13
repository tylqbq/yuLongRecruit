import axios from 'axios'
import router from '../router'

axios.defaults.baseURL= 'http://127.0.0.1:8060';

// http response 拦截器
axios.interceptors.request.use(
    config => {
        const token = getCookie("session");
        config.data = JSON.stringify(config.data);
        config.headers ={
            'Content-Type':'application/json'
        }
        return config;
    },
    error => {
     
    });
export default axios;