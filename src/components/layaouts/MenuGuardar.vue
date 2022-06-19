<template>
  <div class="contenedor_prueba">
    <button v-if="store.accesoPermitido()" class="prueba" @click="guardarDatosServidor">
      Guardar Datos Servidor
    </button>
    <button class="prueba" @click="guardarDatos">Guardar Datos Local</button>
    <button class="prueba" @click="leerDatos">Leer Datos Locales</button>
    <button class="prueba" @click="reiniciarJuego">Reiniciar Juego</button>
  </div>
</template>

<script setup>
import {
  leerDatos,
  guardarDatos,
  guardarDatosServidor,
  reiniciarJuego,
} from "@/utils/partida";

import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";
import { computed } from "@vue/runtime-core";

const store = useStore();


// const accesoPermitido = computed(()=>{
//   if(usuario.value.rol === "ADMIN") return true;
//   return false;
// })



</script>



<style lang="scss">
</style>