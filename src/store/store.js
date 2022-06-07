import { defineStore } from "pinia";

export const useStore = defineStore({
  id: "main",
  state: () => ({
    productores: [],
    managers: [],
    recursos: 0,
    multiplicador: 1,
    zapatero:
    {
      genera_por_clic: 2,
      genera_al_cambiar: 15
    },
    mensaje: "<p>mensaje desde storeeeeeeeeee</p>",
    logros: [

      {
        id: 1,
        logrado: true,
        titulo: "buen inicio",
        descripcion: "almacenar 200 monedas",
        imagen: "trophy",
        fecha: "null",
        logradoFuncion: function () {
          if (this.logrado) return;
          this.fecha = "cambio fecha -----------------------------------";
          if (true) {
          }
          console.log("fecha", this.fecha)
          return true
        }
      },
      {
        id: 2,
        logrado: true,
        titulo: "el amo del pueblo",
        descripcion: "almacenar 1000 monedas",
        imagen: "trophy",
        fecha: "null",
        logradoFuncion: (() => { return true; })
      },
      {
        id: 3,
        logrado: true,
        titulo: "el amo del pueblo",
        descripcion: "almacenar 1000 monedas",
        imagen: "trophy",
        fecha: "null",
        logradoFuncion: (() => { return true; })
      },
    ]
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

    // getProductores: (state) => {
    //   return state.productores;
    // },

    getDatosGuardarProductores: (state) => {
      const array = state.productores.map(ele => {
        return ele.nivel;
      })
      return array;
    },

    getDatosGuardarManagers: (state) => {
      const array = state.managers.map(ele => {
        return ele;
      })
      return array;
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

    quitarDisponible(nombre) {
      this.managers.some((ele) => {
        if (ele.nombre === nombre) {
          ele.disponible = false;
          console.log(nombre + " ya no disponible");
        }
      });
    },


    settearFecha(id) { }
  }, //Fin actions
});
