import Vue from 'vue'
import App from './App.vue'
import Vuex from "vuex"; //  vuex添加
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(Vuex)
Vue.use(ElementUI);

import router from "./router/index";

router.beforeEach((to,form,next)=>{
  next()
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
