import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
    state: {
        isLogin: false, //是否登录
        userInfo: null, //用户信息{username:'xxx',password:'xxx'}
        carNum:0, //购物车数量
    },
    mutations: {
        login: function (state, info) {
            state.userInfo = info;
            state.isLogin = true;

        },

        addCar:function (state) {
            state.carNum+=1;
        }

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
