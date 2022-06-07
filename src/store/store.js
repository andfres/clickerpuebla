import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    productores: [],
    managers: [],
    recursos: 999999999999999999999999,
    multiplicador: 1,
    mensaje: "<p>mensaje desde storeeeeeeeeee</p>",
  }), //Fin state

  getters: {
    managersChicas: (state) => {
      return state.managers.filter(
        (m) => m.nombre === "Maria" || m.nombre === "Ana"
      );
    },

    managersDisponibles: (state) => {
      return state.managers.filter((m) => m.contratado === false);
    },
    managersAdquiridos: (state) => {
      return state.managers.filter((m) => m.contratado === true);
    },

    getProductores: (state) => {
      return state.productores;
    },
  }, //Fin getters
  actions: {
    sePuedeComprar(cantidad) {
      return this.recursos >= cantidad;
    },

    comprar(cantidad) {
      this.recursos = this.recursos - cantidad;
    },

    recolectar(cantidad) {
      this.recursos = this.recursos + cantidad;
    },

    duplicarVelocidad(nombre) {
      this.productores.some((ele) => {
        if (ele.nombre === nombre) {
          if (ele.tiempo <= 1) {
            ele.produccionInicial = ele.produccionInicial * 2;
          } else {
            ele.tiempo = Math.round(ele.tiempo / 2);
          }
        }
      });
    },

    subirNivel(nombre) {
      this.productores.some((ele) => {
        if (ele.nombre === nombre) {
          ele.nivel = ele.nivel + 1;
        }
      });
    },



    contratarManager(nombre) {
      this.managers.some((ele) => {
        if (ele.nombre === nombre) {
          ele.contratado = true;
          console.log(nombre + " contratado");
        }
      });
    },
  }, //Fin actions
});
