<template>
  <div class="managers">
    <h3 class="titulo">Mejoras</h3>
    <p>Las mejoras aumentan la eficiencia de los edificios</p>

      <div class="contenedor-managers">

    </div>


  </div>
</template>

<script setup>

import { useStore } from "@/store/store";

const store = useStore();

const productores = store.productores;
const nombreProductores = productores.map((ele) => ele.nombre);




</script>

<style>


.managers{
  text-align: center;
}
.titulo{
  color: white;
  
}

</style>