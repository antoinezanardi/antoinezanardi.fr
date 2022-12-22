import { library, config } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { defineNuxtPlugin } from "#imports";

config.autoAddCss = false;
library.add(fas);
library.add(fab);

export default defineNuxtPlugin(nuxtApp => {
  nuxtApp.vueApp.component("FontAwesomeIcon", FontAwesomeIcon);
});