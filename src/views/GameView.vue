<script setup>
import { ref, watch } from "vue";
import { onMounted, onUnmounted } from "@vue/runtime-core";

import Banco from "@/components/Banco.vue";
import Productores from "@/components/Productores.vue";
import MenuGame from "@/components/MenuGame.vue";
import Header from "@/components/layaouts/Header.vue";
import MenuGuardar from "@/components/layaouts/MenuGuardar.vue";
import Logros_emergentes from "@/components/Logros_emergentes.vue";

import imagenesTodas from "@/assets/img";
import { guardarDatos } from "@/utils/partida";

import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

const cargando = ref(true);
const cargando_msg = ref("...");
const store = useStore();
const { recursos, logrosNoLogrados } = storeToRefs(store);

onMounted(async () => {
  console.log("Precargar imagenes");

  const imagenes = imagenesTodas();

  for (const img of imagenes) {
    const response = await fetch(img);
    await response.blob();
    // console.log(response);
    cargando_msg.value = img;
  }

  cargando.value = false;
});

//Controla si se cumplen los logros

watch(recursos, (newrecursos, oldrecursos) => {
  if (newrecursos < oldrecursos) return;
  if (logrosNoLogrados.value.length === 0) return;
  if (newrecursos >= logrosNoLogrados.value[0].cantidad) {
    const fecha = new Date();

    const day_month_year =
      fecha.getDay() + "/" + fecha.getMonth() + "/" + fecha.getFullYear();
    const hours_minutes = fecha.toLocaleTimeString("default", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    const fechaObjeto = {
      dia: day_month_year,
      hora: hours_minutes,
    };

    store.logrosRecientes = [
      ...store.logrosRecientes,
      logrosNoLogrados.value[0],
    ];
    logrosNoLogrados.value[0].fecha = fechaObjeto;
    logrosNoLogrados.value[0].logrado = true;
  }
});

// const guarDardatosTiempo = setInterval(guardarDatos, 1000);

onUnmounted(() => {
  // clearInterval(guarDardatosTiempo);
});
</script>

<template>
  <Header></Header>

  <div v-if="cargando" class="cargando">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>Cargando {{ cargando_msg }}</div>
  </div>

  <div v-else>
    <main>

      <MenuGuardar />
      <Banco class="banco"></Banco>

      <div class="columna_principal">
        <Productores />
      </div>

      <div class="columna_principal">
        <MenuGame class="memu-nav"></MenuGame>
        <router-view></router-view>
      </div>
    </main>
  </div>

  <Logros_emergentes />
</template>



<style lang="scss"  >
@import "@/scss/_variables.scss";
@import "@/scss/_spiner.scss";

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;
  width: 100%;
  border: auto;

  &>h1 {
    color: white;
  }

  .banco {
    width: 100%;
    height: min-content;
    background: linear-gradient(90deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(255, 255, 255, 1) 50%,
        rgba(255, 255, 255, 0) 100%);
    text-align: center;
    font-size: 1.5rem;
    position: sticky;
    top: 10px;
    z-index: 2;
  }

  .columna_principal {
    width: 350px;
    max-width: 100%;
    background-color: $colorPrincipal;
    border-radius: 15px;
  }

  .banco,
  .columna_principal {
    padding: $margin;
    margin: $margin;
  }

  .productores {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 7px;
  }



}

.cargando {
  margin: auto;
  color: white;
  text-align: center;
}
</style>