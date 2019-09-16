import Vue from "vue";
import App from "./App.vue";
import VueSmoothScroll from "vue2-smooth-scroll";
import "bootstrap";
import "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./assets/css/main.css";
import "./assets/css/custom.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scripts/now-ui-kit.js";
import "./assets/scripts/main";

Vue.config.productionTip = false;
Vue.use(VueSmoothScroll);

new Vue({
    render: h => h(App),
}).$mount("#app");