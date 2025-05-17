// router/index.js

import Vue from 'vue'
import VueRouter from 'vue-router'
import {getToken} from "@/plugins/cookie";
// import App from "@/App.vue";


// import Home from '../components/Home'
// import Course from '../components/Course'
// import Layout from "@/components/Layout.vue";
// import Login from '../components/Login'
// import Flex from "@/components/Flex.vue";
// import MiShop from "@/components/MiShop.vue";
// import ElementUi from "@/components/ElementUi.vue";


Vue.use(VueRouter)

const router = new VueRouter({
    routes: [


        {
            path: '/login',
            name: "Login",
            component: ()=> import('../views/Login.vue'),
        },

        {
            path: '/',
            name: "Layout",
            /*component: Home*/
            component:()=>import('../views/Layout.vue'),
            children:[
                {
                    path:'',
                    redirect:'task',
                },

                {
                    path:'task',
                    name:'Task',
                    component:()=>import('../views/task/TaskLayout.vue'),
                    children:[
                        {
                          path: '/',
                          redirect: 'activity'
                        },

                        {
                            path:'activity',
                            name:'Activity',
                            component:()=>import('../views/task/Activity.vue'),
                            children:[

                                {
                                    path:'/',
                                    redirect:'activitylist'
                                },

                                {
                                    path:'activitylist',
                                    name:'ActivityList',
                                    component:()=>import('../views/task/List.vue'),
                                },

                                {
                                    path:'create',
                                    name:'ActivityCreate',
                                    component:()=>import('../views/task/ActivityCreate.vue'),
                                },
                            ]
                        },

                        {
                            path:'promo',
                            name:'Promo',
                            component:()=>import('../views/task/Promo.vue')
                        },

                        {
                            path:'stat',
                            name:'Stat',
                            component:()=>import('../views/task/Stat.vue')
                        },

                        {
                            path:'fans',
                            name:'Fans',
                            component:()=>import('../views/task/Fans.vue')
                        },
                    ],
                },

                {
                    path:'msg',
                    name:'Msg',
                    component:()=>import('../views/msg/MsgLayout.vue'),
                    children:[
                        {
                          path: '/',
                          redirect: 'push'
                        },

                        {
                            path:'push',
                            name:'Push',
                            component:()=>import('../views/msg/Push.vue')
                        },

                        {
                            path:'sop',
                            name:'Sop',
                            component:()=>import('../views/msg/Sop.vue')
                        },
                    ],
                },

                {
                    path:'auth',
                    name:'Auth',
                    component:()=>import('../views/auth/AuthLayout.vue')
                },

                {
                    path:'/test',
                    name:'Test',
                    component:()=>import('../views/Test.vue'),
                },

            ]

        },

        {
            path: '/*',
            component: () => import('../views/404.vue'),
        },


    ]
})

router.beforeEach((to, from, next) => {
    let token=getToken();

    //如果已登录则继续访问页面
    if(token){
        next();
        return;
    }

    //如果未登录 访问登录页面
    if(to.name==='Login'){
        next();
        return;
    }

    //跳转登录界面
    next({name: 'Login'});

})




export default router