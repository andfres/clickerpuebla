<template>
  <div class="logro">

    <div v-if="!logrado">
      <img class="img" alt=""  :src="`${imagenesLogros.bloqueado}`" />
    </div>

    <div v-else>
      <img class="img" alt=""  :src="`${imagenesLogros[imagen]}`" />
    </div>

    
    <div class="contenedor_titulo">
      <div class="titulo">{{ titulo }}</div>
      <div class="descripcion">{{ descripcion }}</div>
    </div>
    <!-- <div class="coumun">comun?</div> -->
    <div class="fecha">fecha: {{ fecha }}</div>



  </div>
</template>

<script setup>
import  imagenesLogros  from "@/assets/img/logros";
import { boolean } from "yup/lib/locale";

// console.log("imagenesLogros", imagenesLogros);

const props = defineProps({
  logrado: Boolean,
  titulo: String,
  descripcion: String,
  imagen: String,
  fecha: String
});

// console.log("logradoResultado", props.logradoResultado);


</script>

<style scoped lang="scss">
.logro {
  background-color: white;
  display: flex;
  gap: 10px;
  padding: 10px;

  .img {
    width: 40px;
    height: 40px;
    border: 1px solid red;
  }

  .contenedor_titulo {



    .titulo {
      color: red;
    }
  }

}
</style>