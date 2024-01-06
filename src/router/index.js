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
    /**
     * 工作
     */
    {
      path: "/job",
      name: "job",
      component: () => import("@/views/job/index.vue"),
    },

    /**
     * 生活
     */
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
      component: () => import("@/views/life/ootd/index.jsx"),
    },
    {
      path: "/life/running",
      name: "/life/running",
      component: () => import("@/views/life/running/index.jsx"),
    },

    /**
     * 我的 3000 Love
     */
    {
      path: "/soul",
      name: "soul",
      component: () => import("@/views/soul/index.jsx"),
    },
    {
      path: "/soul/3000love",
      name: "/soul/3000love",
      component: () => import("@/views/soul/3000love/index.jsx"),
    },
  ],
});

export default router;
