import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import { BootstrapVue } from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "prismjs";
import "prismjs/themes/prism.css";

Vue.config.productionTip = false;
Vue.use(BootstrapVue);

const routes = [
  {
    path: "/:id",
    component: App,
  },
];
const router = new VueRouter({ routes });

// new Vue({
//   // render: (h) => h(App),
//   router,
// }).$mount("#app");

new Vue({ el: "#app", router, render: (h) => h(App) });
