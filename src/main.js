// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Element from 'element-ui'
// import "@/styles/test.scss"
import "./element-variables.scss"
import Hello from "./components/Hello.vue";
import Dialog1 from "./components/Dialog1.vue";
import Dialog2 from "./components/Dialog2.vue";

// import  { VueCreateAPI } from './vue-create-api.js';

// Vue.use(VueCreateAPI)
Vue.use(Element)

// Vue.createAPI(Hello);
// Vue.createAPI(Dialog1);
// Vue.createAPI(Dialog2);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
