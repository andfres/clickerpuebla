<template>
  <div class="mejoras">
    <h3>Mejoras</h3>


    <Mejora
      v-for="(item, i) in mejoras"
      :key="i"
      :nombre="mejoras[i].nombre"
      :tipo="mejoras[i].tipo"
    ></Mejora>
    
  </div>
  <div></div>
</template>

<script setup>
import Mejora from "@/components/Mejora.vue";

import { storeToRefs } from "pinia";
import { useProductoresStore } from "@/store/productores";

const productoresStore = useProductoresStore();
//const { productores } = storeToRefs(productoresStore);

const productores = productoresStore.productores;
const nombreProductores = productores.map((ele) => ele.nombre);
const tipos = ["autorecoleccion", "dobleVelocidad"];

const generarMejoras = () => {
  const array = [];
  for (let nombre of nombreProductores) {
    for (let tipo of tipos) {
      const objeto = {};
      objeto["nombre"] = nombre;
      objeto["tipo"] = tipo;
      array.push(objeto)
    }
  }
  return array;
};

const mejoras = generarMejoras();

</script>

<style>
.mejoras {
  display: flex;
  flex-direction: column;
  padding: var(--margen);
  margin: var(--margen);
  background-color: var(--colorPrincipal);
}
</style>