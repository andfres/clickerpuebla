
<template>
  <section class="section_partida">
    <button @click="pedirDatos">cargar datos online</button>
    <div class="texto">
      <p>Selecciona datos guardados</p>
    </div>
    <div>
      haydatosonline
      {{ hayDatosOnline }}
    </div>
    <button
      v-if="hayDatosOnline"
      class="boton_jugar"
      @click="cargarDatosOnline"
    >
      <p>(Datos Online)</p>
      <p>Valor total: {{ store.datosOnline.dineroTotal }} 💰</p>
      <p>recursostotales??? {{ store.datosOnline.recursosTotales }} 💰</p>
    </button>

    <div v-if="!logeado()" class="texto">
      <p>Inicia sesión para cargar datos Online</p>
    </div>

    <button v-if="!datos" class="boton_jugar">Nueva partida</button>

    <button v-if="datos" class="boton_jugar" @click="cargarDatosLocal">
      <p>(Datos Locales)</p>
      <p>Valor total: {{ recursosTotales }} 💰</p>
    </button>
  </section>
</template>

<script setup>
import { onMounted } from "@vue/runtime-core";

import { useStore } from "@/store/store";
import router from "@/router";

import { RouterLink, RouterView } from "vue-router";
import { computed } from "@vue/runtime-core";
import {
  leerDatos,
  guardarDatos,
  usarDatosOnline,
  inicializarDatos,
} from "@/utils/partida";
import servicios from "@/servicios";

const store = useStore();

const { recursosTotales, datosOnline, logeado } = store;

const datos = computed(() => {
  if (!leerDatos()) return false;
  return true;
});

function isEmpty(map) {
  for (var key in map) {
    if (map.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

const hayDatosOnline = computed(() => {
  // return !isEmpty(datosOnline.productores);

  if (datosOnline.hasOwnProperty("logros")) {
    return true;
  }

  return false;
});

const cargarDatosOnline = () => {
  usarDatosOnline();

  router.push("/game");
};

const cargarDatosLocal = () => {
  guardarDatos();
  router.push("/game");
};

// onMounted(async () => {
//   if (logeado())
// });

const pedirDatos = async () => {
  await servicios.recuperarDatos();
};
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