import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Dashboard",
    name: "Dashboard",
    component: () => import("../views/Dashboard.vue")
  },
  {
    path: "/Profile",
    name: "Profile",
    component: () => import("../views/Profile.vue")
  },
  {
    path: "/Store",
    name: "Store",
    component: () => import("../views/Store/Store.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
