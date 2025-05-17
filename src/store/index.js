import Vue from 'vue'
import Vuex from 'vuex'
import {getUserName, getToken, setUserToken, clearUserToken} from '@/plugins/cookie'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        username:getUserName(),
        token:getToken(),

        isLogin: false, //是否登录
        userInfo: null, //用户信息{username:'xxx',password:'xxx'}
        carNum:0, //购物车数量
    },
    mutations: {
        //对username和token进行解包 可以{username,token}
        login: function (state, data) {
            state.username = data.name;
            state.token = data.token;
            setUserToken(state.username, state.token);

        },

        addCar:function (state) {
            state.carNum+=1;
        },

        logout:function (state) {
            state.username='';
            state.token='';
            clearUserToken();
        },

    },
    actions: {
        //做异步操作时使用actions dispatch
        fetchAsync:function () {
            setTimeout(function (context) {
                context.commit('fetchAsync');
            },1000)
        }
    }
})
