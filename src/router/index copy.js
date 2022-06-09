import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
//import GameView from "../views/GameView.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },

    {
      path: "/game",
      name: "game",
      //component: GameView,
       component: () => import("../views/GameView.vue"),
      children: [
        {
          path: "",
          component: () => import("../components/TrabajoLimpiaBotas.vue"),
        },
        {
          path: "managers",
          component: () => import("../components/Managers.vue"),
        },
        {
          path: "mejoras",
          component: () => import("../components/Mejoras.vue"),
        },
      ],
    },
  ],
});

export default router;
