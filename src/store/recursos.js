import { defineStore } from 'pinia'

export const useRecursosStore = defineStore({
  id: 'recursos',
  state: () => ({
    recursos: 100000
  })
})
