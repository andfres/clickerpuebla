import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import Registro from "../views/Registro.vue";
import Login from "../views/Login.vue";
import Zapatero from "../components/Zapatero.vue";
import Managers from "../components/Managers.vue";
import Mejoras from "../components/Mejoras.vue";
import AboutView from "../views/AboutView.vue";
import Productores from "@/components/Productores.vue";

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
      component: AboutView,
    },
    {
      path: "/registro",
      name: "registro",
      component: Registro,
    },
    {
      path: "/login",
      name: "login",
      component: Login,
    },

    {
      path: "/game",
      name: "game",
      component: GameView,
      children: [
        {
          path: "",
          component: Zapatero,
        },
        {
          path: "managers",
          component: Managers,
        },
        {
          path: "mejoras",
          component: Mejoras,
        },
  
      ],
    },
  ],
});


export default router;
