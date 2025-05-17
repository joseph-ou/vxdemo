import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import {getToken} from "@/plugins/cookie";
import router from "../router/index";
import store from "../store";

import {Message} from 'element-ui'

Vue.use(VueAxios, axios);

//
// //设置默认值
axios.defaults.baseURL = 'http://localhost:8000/api/';
// axios.defaults.headers.common['Authorization'] = getToken();//缺点 只在页面刷新时执行 所以最好使用请求拦截器
// // axios.defaults.headers.post['Content-Type'] = 'application/json';
// // axios.defaults.headers.put['Content-Type'] = 'application/json';
//
//

// 请求拦截器
axios.interceptors.request.use(function (config) {
    //在发送请求前做什么
    const token = getToken();
    if (token) {
        //表示已经登录
        config.headers['Authorization'] = token;
    }

    return config;
})

//响应拦截器
axios.interceptors.response.use(function (response) {
    console.log('----->响应',response)

    //api请求执行成功 响应状态码200自动执行
    //如果后端使用自定义状态码则在此进行验证
    if(response.data.code==='2000'){
        //重定向登录页面{login,}
        //在store里删除cookie


        store.commit('logout')
        router.replace({name: 'Login'});

        //跳转完进行页面提示
        Message.error('登录已过期，请重新登录')
        return Promise.reject();

    }

    return response;
    },function (error) {

        //token认证失败 api请求失败 响应状态码400/500 自动执行(使用默认自带验证码)
        if(error.response.status === 401) {
            //重定向
            //在store里删除cookie

            store.commit('logout')
            router.replace({name: 'Login'});
            //跳转完进行页面提示
            Message.error('登录已过期，请重新登录')



        }
        //返回错误 让axios执行错误捕获catch的函数
        return Promise.reject(error);
    }

)