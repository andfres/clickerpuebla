<template>
  <div class="contenedor-formularios">
    <Registro />
  </div>
</template>


<script setup>
import Registro from "@/components/forms/Registro.vue";
</script>

<style  lang="scss">
@import "@/scss/_variables.scss";

.contenedor-formularios {
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
