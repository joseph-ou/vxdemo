import Vue from 'vue'
import App from './App.vue'

import './plugins/axios'
import './plugins/cookie'


import router from './router'
import store from './store'
import './plugins/element.js'
// import HighChartsVue from 'highcharts-vue'


// import 'element-ui/lib/theme-chalk/index.css';
// //全局引入elementui
// import ElementUI from 'element-ui';
// Vue.use(ElementUI);

// 局部引入elementui

// import {Button,Select} from "element-ui";


// Vue.component(Button.name, Button);
// Vue.component(Select.name, Select);
// Vue.use(Button);
// Vue.use(Select);



Vue.config.productionTip = false


new Vue({
  router,
  store,
  mode: 'history',

  render: h => h(App),
}).$mount('#app')
