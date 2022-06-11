<template>
  <div class="logro">
    <div v-if="!logrado" class="img">
      <img alt="" :src="`${imagenesLogros.bloqueado}`" draggable="false" />
    </div>

    <div v-else class="img">
      <img alt="" :src="`${imagenesLogros[imagen]}`" draggable="false" />
    </div>

    <div class="contenedor_titulo">
      <div class="titulo_interior">{{ titulo }}</div>
      <div class="descripcion">{{ descripcion }}</div>
    </div>
    <!-- <div class="coumun">comun?</div> -->

    <div v-if="fecha" class="contenedorFecha">
      <div class="fecha">{{ fecha.dia }}</div>
      <div class="fecha">{{ fecha.hora }}</div>
    </div>
  </div>
</template>

<script setup>
import imagenesLogros from "@/assets/img/logros";

const props = defineProps({
  logrado: Boolean,
  titulo: String,
  descripcion: String,
  imagen: String,
  fecha: Object,
});
</script>

<style scoped lang="scss">
@import "@/scss/_variables.scss";

.logro {
  display: flex;
  width: 100%;
  padding: 5px;
  border-radius: 10px;

  gap: 5px;
  align-items: center;
  background-color: $color-secundario;
  box-shadow: -2px 4px 1px #00000047;

  .img {
    flex: 0 0 70px;
    border-radius: 10px;
    border: 3px solid rgb(255, 255, 255);
    background-color: rgb(227, 227, 227);

    img {
      width: 70px;
      height: 70px;
      /* width: 100%; */
      display: block;
      border-radius: 10px;
    }
  }

  .contenedorFecha {
    margin-left: auto;
  }
}
</style>