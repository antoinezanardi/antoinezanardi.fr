// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import "bootstrap";
import "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"
import "@/assets/css/main.css";
import "@/assets/css/custom.css";
import "@/assets/scripts/now-ui-kit.js";
import "@/assets/scripts/main";
import "@/assets/scripts/custom";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
