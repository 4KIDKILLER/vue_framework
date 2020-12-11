import Vue from "vue";
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
    {
        path:"/",
        redirect: '/index',
    }
];
const route = new VueRouter({
    routes,
});

export default route;
