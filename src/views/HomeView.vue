
<template>
  <section class="section_partida">
    <!-- <button @click="pedirDatos">cargar datos online</button> -->
    <div class="texto">
      <p>Selecciona datos guardados</p>
    </div>

    <button
      v-if="hayDatosOnline()"
      class="boton_jugar"
      @click="cargarDatosOnline"
    >
      <p>(Datos Online)</p>
      <p>recursostotales: {{ datosOnline.recursosTotales }} 💰</p>
    </button>

    <div v-if="!hayDatosOnline() && logeado()" class="texto">No hay datos online</div>

    <div v-if="!logeado()" class="texto">
      <p>Inicia sesión para cargar datos Online</p>
    </div>

    <button v-if="!datos" class="boton_jugar"
    @click="nuevaPartida">Nueva partida</button>

    <button v-if="datos" class="boton_jugar" @click="cargarDatosLocal">
      <p>(Datos Locales)</p>
      <p>Valor total: {{ recursosTotales }} 💰</p>
    </button>
  </section>
</template>

<script setup>
import { useStore } from "@/store/store";
import { useStoreOnline } from "@/store/storeOnline";
import { storeToRefs } from "pinia";

import router from "@/router";
import { RouterLink, RouterView } from "vue-router";
import { computed } from "@vue/runtime-core";
import { onMounted } from "@vue/runtime-core";

import {
  leerDatos,
  guardarDatos,
  usarDatosOnline,
  inicializarDatos,
  reiniciarJuego,
  importData
} from "@/utils/partida";
import servicios from "@/servicios";

const store = useStore();
const storeOnline = useStoreOnline();

const { recursosTotales, logeado } = store;
const { hayDatosOnline } = storeOnline;
const { datosOnline } = storeToRefs(storeOnline);

const datos = computed(() => {
  if (!leerDatos()) return false;
  return true;
});

const cargarDatosOnline = () => {
  inicializarDatos();
  usarDatosOnline();
  router.push("/game");
};

const nuevaPartida = () => {
  reiniciarJuego();
  guardarDatos();
  router.push("/game");
};


const cargarDatosLocal = () => {
  importData();
  guardarDatos();
  router.push("/game");
};

const pedirDatos = async () => {
  await servicios.recuperarDatos();
};

function isEmpty(map) {
  for (var key in map) {
    if (map.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

onMounted(async () => {
  if (logeado()) pedirDatos();
});
</script>




<style lang="scss"  >
@import "@/scss/_variables.scss";

.section_partida {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .texto {
    font-size: 2rem;
    background-color: white;
    font-size: 1rem;

    text-align: center;
  }

  .texto,
  .boton_jugar {
    padding: $margin;
    margin: $margin;
    border-radius: 10px;
    width: 70%;
    max-width: 400px;
  }

  .boton_jugar {
    font-size: 2rem;
    background-color: white;

    border: 2px solid orange;
    animation: infinite resplandorAnimation 1s;

    h2 {
      font-size: 2rem;
    }

    p {
      font-size: 1.3rem;
    }
  }
}
</style>