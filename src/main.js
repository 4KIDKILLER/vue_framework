import Vue from 'vue';
import App from './App'

import Routes from './router/Router';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router: Routes,
}).$mount('#app');
