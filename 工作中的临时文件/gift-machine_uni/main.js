import Vue from 'vue';
import App from './App';
import store from './store';

Vue.config.productionTip = false;
App.mpType = 'app';

// 引入全局uView
import uView from 'uview-ui';
Vue.use(uView);

const app = new Vue({
  store,
  ...App,
});

// 注册http请求伪实例
import ALL_REQUEST from './common/request.js';
Vue.use(ALL_REQUEST, app);

app.$mount();
