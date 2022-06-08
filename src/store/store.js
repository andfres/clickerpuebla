import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    productores: [],
    managers: [],
    recursos: 9,
    multiplicador: 1,
    zapatero:
    {
      genera_por_clic: 2,
      genera_al_cambiar: 15
    },
    mensaje: "<p>mensaje desde storeeeeeeeeee</p>",
    logros: [],

    mejoras: [
      {
        id: 1,
        adquirida: false,
        precio: 40,
        aplica: (() =>  duplicarVelocidad("Granero"))
      }
    ],
    


  }), //Fin state

  getters: {

    managersDisponibles: (state) => {
      return state.managers.filter((m) => m.contratado === false);
    },
    managersAdquiridos: (state) => {
      return state.managers.filter((m) => m.contratado === true);
    },

    getDatosGuardarProductores: (state) => {
      const array = state.productores.map(ele => {
        return {nivel: ele.nivel};
      })
      return array;
    },

    getDatosGuardarManagers: (state) => {
      const array = state.managers.map(ele => {
        return {contratado: ele.contratado};
      })
      return array;
    },

    getDatosGuardarLogros: (state) => {
      const array = state.logros.map(ele => {
        return {
          logrado: ele.logrado,
          fecha: ele.fecha
        };
      })
      return array;
    },

    logrosLogrados: (state) => {
      return state.logros.filter((logro) => logro.logrado === true);
    },
    logrosNoLogrados: (state) => {
      return state.logros.filter((logro) => logro.logrado === false);
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

    completarLogro (id){
      this.logros.some((ele) => {
        if (ele.id === id) {
          ele.logrado = true;
          console.log(id + " logrado");
        }
      });
    } 
  }, //Fin actions
});
