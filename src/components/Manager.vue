<template>
  <div class="columna">
    <div class="img">
      <img
        alt=""
        class=""
        :src="imagenesManager()[imagen - 1]"
        draggable="false"
      />
    </div>

    <div class="contenedor_titulo">
      <div class="titulo_interior">{{ nombre }}</div>
      <div class="descripcion">administra {{ nombreProductor }}</div>
    </div>

    <button
      v-if="!contratado"
      class="boton-comprar"
      @click="contratar"
      :disabled="disabled"
    >
      Contratar!
      <p>{{ precio }} 💰</p>
    </button>
  </div>
</template>

<script setup>
import imagenesManager from "@/assets/img/managers";
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useStore } from "@/store/store";
import { animacionDinero, wait } from "../utils/funciones";

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
  imagen: String,
  contratado: Boolean,
  id: Number
});

const disabled = computed(() => {
  return !sePuedeComprar(props.precio);
});

const contratar = (e) => {
  comprar(props.precio);

  animacionDinero(e.target, props.precio, "gasto");
  contratarManager(props.nombre);

  // mensaje.value = `
  // <p class="nombreProductor">${props.nombreProductor}</p>
  // <p><strong>autorecolección</strong> on</p>`;
};
</script>

<style lang="scss">
@import "@/scss/_variables.scss";

.columna {
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
}


.contenedor_titulo{
  flex: 1;
}
.boton-comprar {
  text-align: center;
  padding: 5px;
  background-color: $base-color;
  border-radius: 10px;
  margin-left: auto;

  &:hover:enabled {
    background-color: rgb(238, 109, 229);
  }

  &:disabled {
    background-color: rgb(201, 145, 207);
  }
}

.titulo_interior {
  margin-bottom: 5px;
  font-size: 1.4rem;
  color: rgb(190, 5, 97);
}




.managers,
.logros,
.mejoras,
.conte_trabajo {
  & > p {
    color: white;
  }
  text-align: center;
}




</style>