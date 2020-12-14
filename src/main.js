import Vue from 'vue';
import Router from './router/Router';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const Route = new VueRouter({
	Router,
})

Vue.config.productionTip = false

new Vue({
  Route,
}).$mount('#app');
