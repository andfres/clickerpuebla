import { defineStore } from "pinia";

export const useStoreOnline = defineStore({
  id: "online",
  state: () => ({
    datosOnline: {
      productores: [],
      recursosTotales: 0,
    },
  }), //Fin state

  getters: {}, //Fin getters
  actions: {
    hayDatosOnline() {
      console.log("hay datos", this.datosOnline?.recursosTotales !== 0);
      if (this.datosOnline?.recursosTotales !== 0) return true;
      return false;
    },
  }, //Fin actions
});
