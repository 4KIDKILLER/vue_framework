import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import Index from '../pages/home/Index';//首页
import UserInfomation from '../pages/member/UserInfomation';//用户信息

const Route = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'index',
            component: Index,
            meta: {
                keepAlive: true,
            }
        }, {
            path: '/userInfomation',
            name: 'userInfomation',
            component: UserInfomation,
        }
    ],
});

/**
 * 路由前置守卫
 */
Route.beforeEach((to, from, next) => {
    window.scrollTo(0, 0);
    next();
});

export default Route;