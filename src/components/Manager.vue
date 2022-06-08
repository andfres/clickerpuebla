<template>
  <div class="manager">

    <!-- <div class="manager-img">
      <img alt="" class="" :src="`${base}img/managers/${imagen}.png`" />
    </div> -->

    <div class="manager-img">
      <img alt="" class="" :src="imagenesManager()[imagen - 1]" draggable="false"/>
    </div>

    <div class="manager-centro">
      <h4>{{ nombre }}</h4>
      <p>administra {{ nombreProductor }}</p>
      <p>{{ precio }}$</p>
    </div>

    <button
      v-if="disponible"
      class="contratar"
      @click="contratar"
      :disabled="disabled"
    >
      Contratar!
    </button>
  </div>
</template>

<script setup>
import  imagenesManager  from "@/assets/img/managers";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/store";
import { animacionDinero, wait } from "../utils/funciones";
const base = import.meta.env.BASE_URL;

const store = useStore();
const { mensaje } = storeToRefs(store);
const {
  sePuedeComprar,
  comprar,
  autoRecolectar,
  cambiarMensaje,
  contratarManager,
} = store;

const props = defineProps({
  nombre: String,
  foto: String,
  precio: Number,
  nombreProductor: String,
  imagen:  String,

  disponible: {
    type: Boolean,
    default: true,
  },
});

const disabled = computed(() => {
  return !sePuedeComprar(props.precio);
});

const contratar = (e) => {
  comprar(props.precio);
  animacionDinero(e.target, props.precio, false);

  // mensaje.value = `
  // <p class="nombreProductor">${props.nombreProductor}</p>
  // <p><strong>autorecolección</strong> on</p>`;

  contratarManager(props.nombre);
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
  padding: 3px 5px;
  border-radius: 10px;

  gap: 10px;
  align-items: center;
  background-color: $color-fondo-productor;


    box-shadow: -2px 4px 1px #00000047;


  .manager-img {
    flex: 0 0 85px;
   border-radius: 10px;
    border: 3px solid rgb(255, 255, 255);
    background-color: rgb(227, 227, 227);

    img {
      width: 85px;
      height: 85px;
      /* width: 100%; */
      display: block;
      border-radius: 10px;
    }
  }

  .manager-centro {
    flex: 1;
    text-align: center;
    padding: 10px;

    h4 {
      margin-bottom: 5px;
      font-size: 1.4rem;
    }
  }
  .contratar {
    max-height: 30px;
    padding: 5px;
    background-color: $base-color;
    border-radius: 10px;
  }
}
</style>