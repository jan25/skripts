import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import "bootstrap/dist/css/bootstrap.css";

// For vue-prism-editor
import "prismjs";
import "prismjs/themes/prism.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);
const routes = [
  {
    path: "/:id?",
    name: "root",
    component: App,
  },
];
const router = new VueRouter({ mode: "history", routes });

const AppWrapper = { template: "<router-view></router-view>" };

new Vue({ router, render: (h) => h(AppWrapper), el: "#app" });
