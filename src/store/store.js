import { defineStore } from "pinia";

export const useProductoresStore = defineStore({
  id: "main",
  state: () => ({
    productores: [],
    recursos: 100000,
    multiplicador: 1
  }),
  actions: {
    autoRecolectar(nombre) {
      console.log(`${nombre} auto`)
      this.productores.some((ele) => {
        if (ele.nombre === nombre) {
          ele.autoRecolectar = true;
        }
      });
    },

    duplicarVelocidad(nombre){
      this.productores.some(ele=>{
        if (ele.nombre === nombre ){

          if (ele.tiempo <= 1 ) {
            ele.produccionInicial = ele.produccionInicial * 2;
          }else{
            ele.tiempo = Math.round(ele.tiempo/2);
          }
          
        }
      })
    },


    subirNivel(nombre){
      this.productores.some((ele) => {

        if (ele.nombre === nombre) {
          ele.nivel = ele.nivel + 1 ;
        }
      });
    }
  },




});
