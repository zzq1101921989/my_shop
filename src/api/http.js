import axios from "axios";


// 1. 定义基础路径
const BASE_URL = 'http://demo.itlike.com/web/xlmc/api';

const http = axios.create({
    baseURL: BASE_URL,
    timeout: 10000,
})

// 请求拦截器
http.interceptors.request.use( configs => {
    
    return configs

});

// 响应拦截器
http.interceptors.response.use( response => {

    return response;

}, error => {
    
    console.dir(error.message);

    if (error.message === 'timeout of 10000ms exceeded') {
        console.log("请求超时，请稍后再试")
    }

    return Promise.reject(error);
} );

export default http;