import { defineStore } from "pinia";

const a = ["aa ", "aaabbbbo"];
export const useProductoresStore = defineStore({
  id: "productores",
  state: () => ({
    productores: [...a],
  }),
  actions: {
    autoRecolectar(nombre) {
      this.productores.some((ele) => {
        if (ele.nombre === nombre.value) {
          ele.autoRecolectar = true;
        }
      });
    },

    duplicarVelocidad(nombre){
      this.productores.some(ele=>{
        if (ele.nombre === nombre.value ){

          if (ele.tiempo <= 1 ) {
            ele.produccionInicial = ele.produccionInicial * 2;
          }else{
            ele.tiempo = Math.round(ele.tiempo/2);
          }
          
        }
      })
    },
  },
});
