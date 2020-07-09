import Vue from "vue";

import App from "./App.vue";

new Vue({ el: "#root", template: "<App />", components: { App } });

if (module.hot) {
  module.hot.accept();
}