import { createApp } from "vue";
import App from "./App.vue";
import "bootstrap";
import "aos";
import "bootstrap/dist/css/bootstrap.min.css";
import "aos/dist/aos.css";
import "./assets/css/main.css";
import "./assets/css/custom.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/scripts/now-ui-kit.js";
import "./assets/scripts/main";

const portfolioApp = createApp(App);
portfolioApp.mount("#app");