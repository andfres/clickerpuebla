<template>
  <div class="columna">
    <!-- <div class="img">
      <img alt="" :src="`${imagenesLogros[imagen]}`" draggable="false" />
    </div> -->

    <div class="contenedor_titulo">
      <div class="titulo_interior">{{ titulo }}</div>
      <div class="descripcion">{{ descripcion }}</div>
    </div>

    <button
      v-if="!adquirida"
      class="boton-comprar"
      @click="contratar"
      :disabled="disabled"
    >
      Comprar
      <p>{{ precio }} 💰</p>
    </button>
  </div>
</template>

<script setup>
import imagenesLogros from "@/assets/img/logros";

import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/store";
import { animacionDinero, wait } from "../utils/funciones";
import { number } from "yup/lib/locale";
import aplicarMejora from "@/utils/aplicarMejora.js";


const store = useStore();
const { mensaje } = storeToRefs(store);

const { comprar , sePuedeComprar, comprarMejora } = store;

const disabled = computed(() => {
  return !sePuedeComprar(props.precio);
});

// console.log("imagenesLogros", imagenesLogros);

const props = defineProps({
  id: Number,
  adquirida: Boolean,
  titulo: String,
  descripcion: String,
  imagen: String,
  precio: Number,
  parametros: Object,
});

const contratar = (e) => {
  comprar(props.precio);
  animacionDinero(e.target, props.precio, "gasto" );
  comprarMejora(props.id);
  aplicarMejora(props.parametros);

};
</script>



<style  lang="scss">
</style>