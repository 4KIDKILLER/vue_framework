import Vue from 'vue';
import App from './App'
import Store from "./store";
import Routes from './router/Router';
//引入Vant依赖
import Vant from 'vant';
Vue.use(Vant);
import 'vant/lib/index.css';

/**
 * 取消控制台输出以下内容
 * You are running Vue in development mode.
 * Make sure to turn on production mode when deploying for production.
 * See more tips at https://vuejs.org/guide/deployment.html
 */
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: Store,
  router: Routes,
}).$mount('#app');
