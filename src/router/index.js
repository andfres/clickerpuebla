import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GameView from "../views/GameView.vue";
import Registro from "../views/RegistroView.vue";
import Login from "../views/LoginView.vue";

import Managers from "../components/Managers.vue";
import Mejoras from "../components/Mejoras.vue";
import Productores from "@/components/Productores.vue";
import Logros from "@/components/Logros.vue";
import Clasificacion from "@/components/clasificacion/Clasificacion.vue";

import Trabajos from "../components/trabajo/Trabajos.vue";
import TrabajoLimpiaBotas from "../components/trabajo/TrabajoLimpiaBotas.vue";
import TrabajoFantasmas from "../components/trabajo/TrabajoFantasmas.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
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
          component: Trabajos,
          children: [
            {
              path: "",
              component: TrabajoLimpiaBotas,
            },
            {
              path: "zapatero",
              component: TrabajoLimpiaBotas,
            },
            {
              path: "fantasmas",
              component: TrabajoFantasmas,
            },
          
          ]
          
        },
        {
          path: "managers",
          component: Managers,
        },
        {
          path: "mejoras",
          component: Mejoras,
        },
        {
          path: "logros",
          component: Logros,
        },
        {
          path: "clasificacion",
          component: Clasificacion,
        },
  
  
      ],
    },
  ],
});


export default router;
