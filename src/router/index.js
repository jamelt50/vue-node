import Vue from "vue";
import VueRouter from "vue-router";
import { getToken } from "../services/AuthServices";

Vue.use(VueRouter);

const routes = [
  {
    path: "/login",
    name: "login",
    beforeEnter: (to, from, next) => {
      const token = getToken();

      if (token) {
        next({ name: "wall" });
      } else {
        next();
      }
    },
    component: () => import("../views/c-login-page.vue"),
  },
  {
    path: "/register",
    name: "register",
    beforeEnter: (to, from, next) => {
      const token = getToken();

      if (token) {
        next({ name: "wall" });
      } else {
        next();
      }
    },
    component: () => import("../views/c-register-page.vue"),
  },
  {
    path: "/wall",
    name: "wall",
    component: () => import("../views/c-wall-page.vue"),
    beforeEnter: (to, from, next) => {
      const token = getToken();

      if (token === "" || token === null || token === undefined) {
        next({ name: "login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/messages",
    name: "messages",
    component: () => import("../views/c-messages-page.vue"),
    beforeEnter: (to, from, next) => {
      const token = getToken();

      if (token === "" || token === null || token === undefined) {
        next({ name: "login" });
      } else {
        next();
      }
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("../views/c-profile-page.vue"),
    beforeEnter: (to, from, next) => {
      const token = getToken();

      if (token === "" || token === null || token === undefined) {
        next({ name: "login" });
      } else {
        next();
      }
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
