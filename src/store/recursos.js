import { defineStore } from 'pinia'

export const useRecursosStore = defineStore({
  id: 'recursos',
  state: () => ({
    recursos: 100000,
    multiplicador: 1

  }),

  actions: {
    comprar(cantidad){
      this.recursos = this.recursos - cantidad
      console.log("cantidad", cantidad);

  },
  
  }
})
