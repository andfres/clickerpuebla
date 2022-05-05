

<template>
  <div>
    <!-- <img alt="foto" class="" :src="`${base}img/edificios/aserradero.png`" /> -->
  </div>
  <div class="productor">
    <div class="recolectar">
      <button
        class="boton-recolectar"
        :disabled="!listoRecolectar"
        @click="recolectar"
      >
        <img alt="" class="" :src="`${base}img/edificios/${imagen}`" />
      </button>

      <!-- <img alt="" class="" :src="require(`@assets/img/edificios/${imagen}`)" />   -->

      <p v-if="animarRecolectar" class="recolectado">+ {{ produccion }}</p>
    </div>

    <div class="centro">
      <div class="centro-datos">
        <div class="contenedor_nombre">
          <p class="nombre">{{ nombre }}</p>
          <span class="lvl">Lvl: {{ nivel }}</span>
        </div>

        <!-- <div class="contenedor_nombre">
          <p class="produccion">Genera: {{ produccion }} 💰</p>
          <p v-if="autoRecolectar" class="lvl">Auto recolección on</p>
        </div>  -->

        <div class="barra">
          <div v-if="listoRecolectar" class="barra-datos">
            <span>listo para recolectar</span>
          </div>
          <div v-else class="barra-datos">
            <div>
              <span>{{ produccion }} 💰</span>
              <span> {{ tiempoFalta }}</span>
            </div>
          </div>

          <div
            class="barra-interna"
            :style="{ width: porcentaje * 100 + '%' }"
          ></div>
        </div>

        <button class="boton-mejorar" @click="mejorar" :disabled="disabled">
          Mejorar💰 {{ coste }}

          <!-- no borrar este div, si se quita renderiza todo el botton y los números flotantes desaparecen -->
          <div></div>
        </button>
      </div>

      <!--fin centrodatos -->
    </div>
    <!--fin centro -->
  </div>
  <!--fin productor -->
</template>


<script setup>
import { ref, computed, toRefs, onMounted, watch } from "vue";
import { useStore } from "@/store/store";
import { animacionDinero, wait } from "../utils/funciones";
const store = useStore();
const base = import.meta.env.BASE_URL;

const { sePuedeComprar, comprar, cambiarMensaje } = store;

const props = defineProps({
  nombre: {
    type: String,
    default: "Gnomos",
  },
  imagen:  String,
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

const { produccionInicial, costeInicial, autoRecolectar, nombre, nivel } =
  toRefs(props);

const tiempo = ref(props.tiempo);
const tiempoActual = ref(0);
const lastUpdate = ref(Date.now());
const listoRecolectar = ref(false);
const animarRecolectar = ref(false);
const animarComprar = ref(false);

//** computed */
const produccion = computed(() => {
  return produccionInicial.value * nivel.value;
});

const coste = computed(() => {
  return Math.trunc(costeInicial.value * Math.pow(nivel.value, MULTIPLICADOR));
});

const disabled = computed(() => {
  return !sePuedeComprar(coste.value);
});

const porcentaje = computed(() => {
  return tiempoActual.value / props.tiempo;
});

const tiempoFalta = computed(() => {
  let segundosFaltan = Math.round(props.tiempo - tiempoActual.value);

  var date = new Date(null);
  date.setSeconds(segundosFaltan);
  //var result = date.toISOString().substr(11, 8);

  let resultado = "";

  let horas = date.getUTCHours();
  if (horas > 0) resultado = horas + "h ";

  let minutos = date.getUTCMinutes();
  if (minutos > 0) resultado += minutos + "m ";

  let segundos = date.getUTCSeconds();
  resultado += segundos + "s";

  return resultado;
});

const recolectar = () => {
  store.recursos += produccion.value;
  lastUpdate.value = Date.now();
  tiempoActual.value = 0;
  listoRecolectar.value = false;

  animarRecolect();
};

const animarRecolect = async () => {
  animarRecolectar.value = true;
  await wait(1000);
  animarRecolectar.value = false;
};

const updateTiempo = async () => {
  await wait(100);

  if (!listoRecolectar.value) {
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
  updateTiempo();
};

onMounted(() => {
  updateTiempo();
});

watch(autoRecolectar, (val) => {
  if (listoRecolectar.value) {
    recolectar();
  }
});

watch(tiempo, (val) => {
  lastUpdate.value = Date.now();
  tiempoActual.value = 0;
});

const mejorar = (e) => {
  let targ = e.target;
  store.recursos -= coste.value;
  store.subirNivel(nombre.value);
  animacionDinero(targ, coste.value, false);
};
</script>


<style lang="scss"  >
@import "@/scss/_variables.scss";
@import "@/scss/_animaciones.scss";

button,
.productor {
  font-size: 14px;
}
.productor {
  min-width: 350px;
  max-width: 400px;
  min-height: 100px;
  display: flex;
  padding: 5px;
  --height: min-content;
  font-weight: bolder;
  filter: drop-shadow(-2px 4px 1px #00000047);

  .recolectar {
    display: flex;
    position: relative;
    z-index: 2;
    --flex: 1 1 20%;

    min-width: 20px;
    min-height: 20px;
    .boton-recolectar {
      border: 2px solid orange;
      border-radius: 50%;
      animation: infinite resplandorAnimation 1s;
      background-color: $color-fondo-productor;
      min-width: 20px;
      min-height: 20px;

      img {
        --width: 100px;
      }
    }

    .boton-recolectar:disabled {
      border: 2px solid transparent;
      animation: none;
    }

    .recolectado {
      position: absolute;
      width: max-content;
      top: 50%;
      right: 50%;
      color: rgb(132, 255, 132);
      animation: 1 animacionDinero 1s;
    }
  }

  .centro {
    --width: 100%;
    flex: 1 1 80%;
    display: flex;
    align-items: center;
  }

  .centro-datos {
    flex: 1 0;
    height: 85%;
    margin-left: -20px;
    padding: 0 10px 0 30px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6%;
    background-color: $color-fondo-productor;

    .contenedor_nombre {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
    }
    .nombre {
      font-family: "Lexend Deca", sans-serif;
      font-size: 1.2em;
      color: rgb(255, 255, 255);
      text-shadow: 1px 1px 1px black, -1px -1px 1px black, -1px 1px 1px black,
        1px -1px 1px black;
    }
    .lvl {
      color: grey;
    }

    .produccion {
      margin-bottom: 3px;
    }
    .barra {
      text-align: center;
      border: 2px solid green;
      position: relative;
      height: max(1.4rem, 20%);
      min-height: 10px;

      border-radius: 5px;
      color: rgb(15, 15, 15);

      .barra-interna,
      .barra-datos {
        position: absolute;
        height: 100%;
        width: 100%;
        max-width: 100%;
        top: 0;
        left: 0;
        border-radius: 3px;
      }
      .barra-interna {
        background-color: greenyellow;
        box-shadow: inset 0px -9px rgba(0, 0, 255, 0.1);
      }

      .barra-datos {
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;

        div {
          width: 90%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          span {
            --border: 1px solid red;
          }
        }
      }
    }
  }

  .boton-mejorar {
    background-color: $base-color;
    border-radius: 5px;
    height: max(1.4rem, 20%);
    box-shadow: inset 0px -9px rgba(0, 0, 255, 0.1);
    position: relative;
  }
}

@keyframes resplandorAnimation {
  0%,
  100% {
    box-shadow: 0px 0px 7px orange;
  }
  50% {
    box-shadow: 0px 0px 0px orangered;
  }
}
</style>