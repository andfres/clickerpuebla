import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    productores: [],
    managers: [],
    recursos: 100000000000,
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
      return state.managers.filter((m) => m.disponible === true);
    },
    managersAdquiridos: (state) => {
      return state.managers.filter((m) => m.disponible === false);
    },
  }, //Fin getters
  actions: {

    sePuedeComprar(cantidad) {
      return this.recursos > cantidad;
    },

    comprar(cantidad) {
      this.recursos = this.recursos - cantidad;
    },

    recolectar(cantidad) {
      this.recursos = this.recursos + cantidad;
    },



    autoRecolectar(nombre) {
      this.productores.some((ele) => {
        if (ele.nombre === nombre) {
          ele.autoRecolectar = true;
        }
      });
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

    quitarDisponible(nombre){
      this.managers.some(ele => {
        if (ele.nombre === nombre){
          ele.disponible = false
          console.log(nombre + " ya no disponible")
        }
      })
    }
  }, //Fin actions
});
