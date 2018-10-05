// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueSmoothScroll from 'vue2-smooth-scroll';
import "bootstrap";
import "aos";
import "@fortawesome/fontawesome-free-webfonts/css/fontawesome.css";
import "@fortawesome/fontawesome-free-webfonts/css/fa-brands.css";
import "@fortawesome/fontawesome-free-webfonts/css/fa-regular.css";
import "@fortawesome/fontawesome-free-webfonts/css/fa-solid.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css"
import "@/assets/css/main.css";
import "@/assets/css/custom.css";
import "@/assets/scripts/now-ui-kit.js";
import "@/assets/scripts/main";
import "@/assets/scripts/custom";

Vue.config.productionTip = false;
Vue.use(vueSmoothScroll);

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
