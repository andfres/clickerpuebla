<script setup>
import { ref, watch } from "vue";
import { onMounted, onUnmounted } from "@vue/runtime-core";

import Banco from "@/components/Banco.vue";
import Productores from "@/components/Productores.vue";
import MenuGame from "@/components/MenuGame.vue";
import Header from "@/components/layaouts/Header.vue";
import MenuGuardar from "@/components/layaouts/MenuGuardar.vue";

import imagenesTodas from "@/assets/img";
import { guardarDatos } from "@/utils/partida";

import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

const cargando = ref(true);
const cargando_msg = ref("...");

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
const store = useStore();
const { recursos, logrosNoLogrados } = storeToRefs(store);
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

  <div v-if="cargando">
    <div class="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div>Cargando {{ cargando_msg }}</div>
  </div>

  <main v-else>
    <MenuGuardar></MenuGuardar>
    <Banco class="banco"></Banco>

    <Productores></Productores>

    <div class="menu">
      <MenuGame class="menu-nav"></MenuGame>
      <router-view class=""></router-view>
    </div>
  </main>
</template>



<style lang="scss"  >
@import "@/scss/_variables.scss";
@import "@/scss/_spiner.scss";

main {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  position: relative;

  & > h1 {
    color: white;
  }


  .productores{
    gap: 7px;
  }

  .productores,
  .menu {
    //flex:  0 300px;
    width: 350px;
        background-color: $colorPrincipal;
    border-radius: 15px;
  }

  .banco,
  .menu,
  .productores,
  .routerview,
  .modal {
    padding: $margin;
    margin: $margin;
  }



  .banco {
    width: 100%;
    height: min-content;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 50%,
      rgba(255, 255, 255, 0) 100%
    );
    text-align: center;
    font-size: 1.5rem;

    margin: $margin;
    position: sticky;
    top: 10px;

    z-index: 2;
  }

  .productores {
    display: flex;
    flex-direction: column;
    align-items: center;
    --max-width: 400px;
  }
}
</style>