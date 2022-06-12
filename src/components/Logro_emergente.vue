<template>
  <div class="logro_emergente">
    <div class="img">
      <img alt="" :src="`${imagenesLogros[imagen]}`" draggable="false" />
    </div>

    <div class="contenedor_titulo">
      <div>Logro desbloqueado</div>
      <div class="titulo_interior1">{{ titulo }}</div>
      <div class="descripcion1">{{ descripcion }}</div>
    </div>


    <button @click="borrar"  class="cerrar">X</button>
  </div>
</template>

<script setup>

import imagenesLogros from "@/assets/img/logros";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
//const { borrarlogrosRecientes } = storeToRefs(store);
const { borrarlogrosRecientes } = store;

const props = defineProps({
  id: Number,
  titulo: String,
  descripcion: String,
  imagen: String,
});

console.log("props.id", props.id);

const borrar = () => {
  borrarlogrosRecientes(props.id);

}

</script>



<style scoped lang="scss">
@import "@/scss/_variables.scss";

.logro_emergente {
  
  color: white;
  display: flex;
  width: min(250px, 70%);
  padding: 7px;
  border-radius: 10px;

  gap: 7px;
  align-items: center;
  background-color: rgb(45, 45, 45);
  box-shadow: -2px 4px 1px #00000047;

  .img {
    flex: 0 0 40px;
    border-radius: 10px;
    --background-color: rgb(227, 227, 227);
    padding: 3px;

    img {

       width: 100%;
      display: block;
      border-radius: 10px;
    }
  }

  .contenedorFecha {
    margin-left: auto;
  }

  .cerar{
    background-color: none;
    
  }
}
</style>


