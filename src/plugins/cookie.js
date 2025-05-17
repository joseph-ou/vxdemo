import Vue from 'vue'
import VueCookie from 'vue-cookie'

Vue.use(VueCookie)


export const getToken = () => {
    return Vue.cookie.get("token")
}


export const getUserName = () => {
    return Vue.cookie.get("username")
}


export const setUserToken = (username, token) => {
    //设置token的过期时间expire:'7D'是7天

    const expires = new Date(Date.now() + 10 * 1000); // 10 秒
    // const expires = 3; //
    Vue.cookie.set('username', username, {expires: expires});
    console.log(token);
    Vue.cookie.set('token', token, {expires: expires});
}

export const clearUserToken = () => {
    Vue.cookie.delete('username');
    Vue.cookie.delete('token');
}
