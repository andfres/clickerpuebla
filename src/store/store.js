import { defineStore } from "pinia";

import creaObjetos from "@/utils/creaObjetos";
const { creaProductores, creaManagers, creaLogros, creaMejoras } = creaObjetos;

export const useStore = defineStore({
  id: "main",
  state: () => ({

    datosOnline: {
      productores: []
    },

    recursos: 0,
    recursosTotales: 0,
    productores: creaProductores(),
    managers: creaManagers(),
    logros: creaLogros(),
    mejoras: creaMejoras(),

    multiplicador: 1,
    zapatero: {
      genera_por_clic: 1,
      genera_al_cambiar: 15,
    },
    fantasmas: {
      vida_maxima: 10,
      genera_al_matar: 50,
      damage_sword: 1,
    },
    mejoras_mostrar: 6,
    ultimo_trabajo: "fantasmas",
    logrosRecientes: [],
    usuario: {
      nombre: "",
      username: "",
      email: "",
      roles: [],
      tokenDeAcceso: "",
    },
    location: "localhost:8080/api",
    clasificacion: [],
    mensajeOk: false,

    // "nombre": "a",
    // "username": "a",
    // "email": "a@gmail.com",
    // "dinero": 0,
    // "tokenDeAcceso"
  }), //Fin state

  getters: {
    managersDisponibles: (state) => {
      return state.managers.filter((m) => m.contratado === false);
    },
    managersAdquiridos: (state) => {
      return state.managers.filter((m) => m.contratado === true);
    },

    getDatosGuardarProductores: (state) => {
      const array = state.productores.map((ele) => {
        return {  id: ele.id , nivel: ele.nivel };
      });
      return array;
    },

    getDatosGuardarManagers: (state) => {
      const array = state.managers.map((ele) => {
        return { id: ele.id , contratado: ele.contratado };
      });
      return array;
    },

    getDatosGuardarLogros: (state) => {
      const array = state.logros.map((ele) => {
        return {
          id: ele.id ,
          logrado: ele.logrado,
          fecha: ele.fecha,
        };
      });
      return array;
    },

    getDatosGuardarMejoras: (state) => {
      const array = state.mejoras.map((ele) => {
        return {
          id: ele.id, 
          adquirida: ele.adquirida,
          parametros: ele.parametros,
        };
      });
      return array;
    },

    logrosLogrados: (state) => {
      return state.logros.filter((logro) => logro.logrado === true);
    },
    logrosNoLogrados: (state) => {
      return state.logros.filter((logro) => logro.logrado === false);
    },

    mejorasDisponibles: (state) => {
      return state.mejoras.filter((mejora) => mejora.adquirida === false);
    },

    primerasMejorasDisponibles: (state) => {
      const array = state.mejoras.filter(
        (mejora) => mejora.adquirida === false
      );

      array.sort((a, b) => a.precio - b.precio);
      return array.slice(0, state.mejoras_mostrar);
    },
  }, //Fin getters
  actions: {
    sePuedeComprar(cantidad) {
      return this.recursos >= cantidad;
    },

    comprar(cantidad) {
      this.recursos =    this.recursos - cantidad;
    },

    recolectar(cantidad) {
      this.recursos =  this.recursos + cantidad;
      this.recursosTotales =  this.recursosTotales + cantidad;
    },

    duplicarVelocidad(nombre, cantidad) {
      this.productores.some((ele) => {
        //si el nombre no coincide retorna
        try {
          if (ele.nombre !== nombre) return;

          // si el tiempo es menor a 1, aumenta la produccion
          if (ele.tiempo <= 1) {
            ele.produccionInicial += Math.round(
              (ele.produccionInicial * cantidad) / 100
            );

            //si el tiempo aun es mas de 1
          } else {
            let tiempo = ele.tiempo;
            //se calcula de nuevo el tiempo
            tiempo = Math.round((tiempo * 100) / (cantidad + 100));

            //si fuese a ser menor
            if (tiempo < 1) {
              const sobra = 1 - tiempo;
              //aumentamos la produccion necesaria hasta que el tiempo solo fuese 1 segundo
              ele.produccionInicial += ele.produccionInicial * (sobra * 100);
              ele.tiempo = 1;
            }

            //si no fuese a llegar a menos de 1, se aplcia el tiempo
            else {
              ele.tiempo = tiempo;
            }
          }
        } catch (e) {
          console.log(e);
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

    completarLogro(id) {
      this.logros.some((ele) => {
        if (ele.id === id) {
          ele.logrado = true;
          console.log(id + " logrado");
        }
      });
    },

    comprarMejora(id) {
      this.mejoras.some((ele) => {
        if (ele.id === id) {
          ele.adquirida = true;
          console.log("mejora" + id + " comprada");
        }
      });
    },

    mejorar_cepillo_clic(cantidad) {
      this.zapatero.genera_por_clic += cantidad;
    },

    mejorar_espada(cantidad) {
      this.fantasmas.damage_sword += cantidad;
    },

    borrarlogrosRecientes(id) {
      this.logrosRecientes = this.logrosRecientes.filter((ele) => {
        if (ele.id !== id) {
          return ele;
        }
      });
    },

    borrarTodoslogrosRecientes() {
      this.logrosRecientes = [];
    },

    accesoPermitido() {
      return this.usuario.roles.some((ele) => {
        return ele.nombre === "ROLE_ADMIN";
      });
    },

    logeado() {
      if (this.usuario.nombre != "") return true;
      return false;
    },

 

  }, //Fin actions
});
