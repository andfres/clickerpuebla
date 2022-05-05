<template>
  <div class="manager">
    <div class="manager-img">
       <img alt="" class="" :src="`/img/managers/${imagen}.png`" /> 
      

    </div>

    <div class="manager-centro">
      <h4>{{ nombre }}</h4>
      <p>administra {{ nombreProductor }}</p>
      <p>{{precio}}$</p>
    </div>
    <button v-if="disponible" class="contratar" @click="contratar" :disabled="disabled">Contratar!</button>
  </div>
</template>

<script setup>

import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/store";
import { animacionDinero, wait } from "../utils/funciones";


const store = useStore();
const { mensaje } = storeToRefs(store);
const { sePuedeComprar, comprar , autoRecolectar , cambiarMensaje, quitarDisponible } = store;

const props = defineProps({
  nombre: {
    type: String,
    default: "Gnomos",
  },
  foto: {
    type: String,
    default: "",
  },
  precio: {
    type: Number,
    default: 1000,
  },
  nombreProductor: {
    type: String,
    default: "",
  },
  imagen: {
    type: String,
    default: "1",
  },
    disponible: {
    type: Boolean,
    default: false,
  },
});



const disabled = computed(() => {
  return !sePuedeComprar(props.precio)
});


const contratar = (e) => {
  autoRecolectar(props.nombreProductor);
  comprar(props.precio);
  animacionDinero(e.target, props.precio ,false);
  // mensaje.value = `
  // <p class="nombreProductor">${props.nombreProductor}</p>
  // <p><strong>autorecolección</strong> on</p>`;
  quitarDisponible(props.nombre)
};

</script>

<style lang="scss">

@import "@/scss/_variables.scss";
.manager {

  display: flex;
  width: 100%;
  min-width: 350px;
  max-width: 400px;
  height: min-content;
  padding: 5px;
  
  gap: 10px;
  align-items: center;
  background-color: $color-fondo-productor;
  border-top: 4px solid rgba(17, 21, 42, 0.256);
  border-bottom: 4px solid rgba(255, 253, 233, 0.879);

  .manager-img {
    
    flex: 0 0 100px;
    border-radius: 10%;
    border: 4px solid rgb(255, 255, 255);
    background-color: rgba(240, 240, 240, 0.678);

    img {
      width: 100%;
      display: block;  
    }
  }

  .manager-centro {
    flex: 1;
    text-align: center;
    padding: 10px;

    h4{
      margin-bottom: 5px;
      font-size: 1.4rem;
    }
  }
  .contratar {
    max-height: 30px;
    padding: 5px;
    background-color: $base-color;
  }
}
</style>