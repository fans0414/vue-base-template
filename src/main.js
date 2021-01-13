import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import setAxios from '@/conf/setAxios';
import App from './App.vue';
import router from './router';
import store from './store';
import '@/assets/css/global.css';
import '@/assets/scss/reset.scss';

setAxios();
Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.prototype.$http = axios;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
