import {
  createRouter,
  createWebHistory,
  createWebHashHistory,
} from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/job",
      name: "job",
      component: () => import("@/views/job/index.vue"),
    },
    {
      path: "/life",
      name: "life",
      component: () => import("@/views/life/index.vue"),
    },
    {
      path: "/life/me",
      name: "/life/me",
      component: () => import("@/views/life/me/index.vue"),
    },
    {
      path: "/life/idol",
      name: "/life/idol",
      component: () => import("@/views/life/idol/index.vue"),
    },
    {
      path: "/life/travel",
      name: "/life/travel",
      component: () => import("@/views/life/travel/index.jsx"),
    },
    {
      path: "/life/movies",
      name: "/life/movies",
      component: () => import("@/views/life/movies/index.jsx"),
    },
    {
      path: "/life/ootd",
      name: "/life/ootd",
      component: () => import("@/views/life/ootd/index.vue"),
    },
  ],
});

export default router;
