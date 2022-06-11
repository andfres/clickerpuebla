<template>
  <div class="managers">
    <h3 class="titulo">Mejoras</h3>
    <p>Las mejoras aumentan la eficiencia de los edificios</p>

    <div class="contenedor-columnas">

      <Mejora
        v-for="(item, i) in primerasMejorasDisponibles"
        :key="i"
        v-bind="item"
      ></Mejora>

    </div>
  </div>
</template>

<script setup>
import Mejora from "@/components/Mejora.vue";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";



// import { storeToRefs } from "pinia";
// import { ref, computed, toRefs, onMounted, watch } from "vue";

const store = useStore();

// const { , managersAdquiridos } = storeToRefs(store);

const {mejoras , mejorasDisponibles, primerasMejorasDisponibles} = storeToRefs(store);

</script>

<style lang="scss">
</style>