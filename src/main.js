import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
// import VueX from "vuex";
import "bootstrap/dist/css/bootstrap.min.css";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("./components/AlbumList"),
  },
  {
    path: "/:id",
    component: () => import("./components/AlbumDetail"),
  },
];

const router = new VueRouter({
  routes,
});

new Vue({
  render: (h) => h(App),
  router,
}).$mount("#app");
