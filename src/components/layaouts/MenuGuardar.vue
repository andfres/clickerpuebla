<template>
  <div class="contenedor_prueba">
    <button class="prueba" @click="guardarDatos">guardarStorage</button>
    <button class="prueba" @click="leerDatos">leerStorage</button>
    <button class="prueba" @click="reiniciarJuego">reiniciarJuego</button>
  </div>
</template>

<script setup>
import { leerDatos , guardarDatos, reiniciarJuego} from "@/utils/partida"

</script>



<style lang="scss">
</style>