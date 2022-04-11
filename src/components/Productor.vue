

<template>
  <div class="productor">
    <div class="contenedor_img">
      <!-- <img alt="Vue logo" class="logo" :src="require(`${imagen}`)" />  -->
      <img alt="Vue logo" class="logo" :src="`src/assets/${imagen}`" />
    </div>

    <div class="recolectar">
      <span v-if="autoRecolectar" class="lvl">
        autoRecolecion: {{ autoRecolectar }}
      </span>

      <button v-else :disabled="!listoRecolectar" @click="recolectar">
        Recolectar
      </button>
    </div>

    <div class="centro">
      <div class="contenedor_nombre">
        <p class="nombre">{{ nombre }}</p>
        <span class="lvl">Lvl: {{ nivel }}</span>
      </div>

      <div class="contenedor_nombre">
        <p class="produccion">Genera: {{ produccion }} 💰</p>
      </div>

      <div  class="barra">
        <div class="barra-datos">
          {{ tiempoFalta }}
        </div>
        <div
          class="barra-interna"
          :style="{ width: porcentaje * 100 + '%' }">
        </div>
      </div>





    </div>

    <div class="boton">
      <button @click="mejorar" :disabled="disabled">
        <div>💰 {{ coste }}</div>
        <div><span> Upgrade </span></div>
      </button>
    </div>
  </div>


            <!-- {{ tiempoActual }} / {{ tiempo }} -->
          <!-- {{ Math.round(porcentaje * 100) }} % -->
</template>


<script setup>
import { ref, computed, toRefs, onMounted, watch } from "vue";
import { useRecursosStore } from "@/store/recursos";

import { storeToRefs } from "pinia";
import { useProductoresStore } from "@/store/productores";

const productoresStore = useProductoresStore();
const { productores } = storeToRefs(productoresStore);

const recursosStore = useRecursosStore();

const props = defineProps({
  nombre: {
    type: String,
    default: "Gnomos",
  },
  imagen: {
    type: String,
    default: "logo.svg",
  },
  nivel: {
    type: Number,
    default: 1,
  },
  produccionInicial: {
    type: Number,
    default: 5,
  },
  costeInicial: {
    type: Number,
    default: 50,
  },
  tiempo: {
    type: Number,
    default: 1,
  },
  autoRecolectar: {
    type: Boolean,
    default: false,
  },
});

const MULTIPLICADOR = 1.17;

const { produccionInicial, costeInicial, autoRecolectar } = toRefs(props);
const nivel = ref(props.nivel);
const tiempoActual = ref(0);
const lastUpdate = ref(Date.now());
const listoRecolectar = ref(false);

//** computed */
const produccion = computed(() => {
  return produccionInicial.value * nivel.value;
});

const coste = computed(() => {
  return Math.trunc(costeInicial.value * Math.pow(nivel.value, MULTIPLICADOR));
});

const disabled = computed(() => {
  let disabled = recursosStore.recursos > coste.value ? false : true;
  return disabled;
});

const porcentaje = computed(() => {
  return tiempoActual.value / props.tiempo;
});

const tiempoFalta = computed(() => {
  return Math.round(props.tiempo - tiempoActual.value);
});

const mejorar = () => {
  recursosStore.recursos -= coste.value;
  nivel.value++;
};

const recolectar = () => {
  recursosStore.recursos += produccion.value;
  lastUpdate.value = Date.now();
  tiempoActual.value = 0;
  listoRecolectar.value = false;
};

const wait = (timeToDelay) =>
  new Promise((resolve) => setTimeout(resolve, timeToDelay));

const updateTiempo = async () => {
  while (true) {
    await wait(100);
    if (listoRecolectar.value) continue;
    const elapsed = Date.now() - lastUpdate.value;
    tiempoActual.value = elapsed / 1000;
    if (elapsed > props.tiempo * 1000) {
      lastUpdate.value = Date.now();
      listoRecolectar.value = true;
      tiempoActual.value = props.tiempo;

      if (autoRecolectar.value) {
        recolectar();
      }
    }
  }
};

onMounted(() => {
  updateTiempo();
});

watch(props.tiempo, (val) => {
  lastUpdate.value = Date.now();
  tiempoActual.value = 0;
});

watch(autoRecolectar, (val) => {
  if (listoRecolectar.value) {
    recolectar();
  }
});
</script>


<style lang="scss"  >
@import "@/scss/_variables.scss";
.productor {
  min-width: 350px;
  background-color: rgb(244, 255, 214);
  display: flex;
  gap: 10px;
  padding: 5px;
  font-weight: bolder;

  .contenedor_img {
    flex: 0 0 50px;

    img {
      height: 100%;
      width: 100%;
      padding: 2px;
    }
  }

  .recolectar {
    font-size: 10px;
  }

  .centro {
    flex: 1 1 200px;
    color: grey;
    display: flex;
    flex-direction: column;
    .contenedor_nombre {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    .nombre {
      font-size: 1.1rem;
      color: black;
    }
    .lvl {
      font-size: 0.8rem;
      color: grey;
    }

    .produccion {
      font-size: 0.7rem;
      margin-bottom: 3px;
    }
    .barra {
      font-size: 0.7rem;
      text-align: center;
      border: 2px solid green;
      position: relative;
      height: 1rem;

      .barra-interna, .barra-datos {
        position: absolute;
        height: 100%;
        width: 100%;
        max-width: 100%;
        top: 0;
        left: 0;
      }
      .barra-interna {
        background-color: greenyellow;
      }

      .barra-datos {
        z-index: 1;
      }
    }
  }

  .boton {
    min-width: 90px;
    margin-left: auto;

    button {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      border: none;
      color: white;

      div {
        text-align: right;
        width: 100%;
      }

      div:nth-of-type(1) {
        background-color: $base-color-dark;
        padding: 2px;
      }
      div:nth-of-type(2) {
        background-color: $base-color;

        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: inset 2px 2px $base-color-lingten;
      }
    }
  }
}
</style>