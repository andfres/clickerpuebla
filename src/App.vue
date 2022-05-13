<script setup>
import { RouterLink, RouterView } from "vue-router";
import { ref } from "vue";
import Mensaje from "@/components/Mensaje.vue";
import { creaProductores, crearManagers } from "@/utils/creaObjetos";
import { useStore } from "@/store/store";
import {
  onBeforeMount,
  onMounted,
  onActivated,
  onServerPrefetch,
} from "@vue/runtime-core";
import ProductoresVue from "./components/Productores.vue";
import ls from "localStorage-slim";
import {imagenesManager} from "@/assets/img/managers";


ls.config.encrypt = true;

const almacenarDatosStore = (datos) => {
  const { productores, managers, recursos } = datos;
  const store = useStore();
  store.recursos = recursos;
  store.productores = [...productores];
  store.managers = [...managers];
};

//guarda datos en de la store en localStorage
const guardarDatos = () => {
  const store = useStore();
  const datos = {
    recursos: store.recursos,
    productores: store.getProductores,
    managers: store.managers,
  };

  console.log("Los datos han sido guardados");
  //window.localStorage.setItem("datos", JSON.stringify(datos));
  ls.set("datos", JSON.stringify(datos));
};

//lee Datos guardados en la localStorage
const leerDatos = () => {
  //const datos = JSON.parse(window.localStorage.getItem("datos"));
  try {
    const datos_localstorage = ls.get("datos");

    if (datos_localstorage) {
      //console.log("leyendo datos", datos_localstorage);
      return JSON.parse(datos_localstorage);
    }
    console.log("no habia datos");
    return;
  } catch (e) {
    //intentar leer datos, si estan corruptos borrarlos
    console.log("peto al leer los datos" , e);
    ls.remove('datos');
    return;
  } 
};


const datosIniciales = () => {
  const datos = {
    recursos: 100,
    productores: creaProductores(),
    managers: crearManagers(),
  };
  return datos;
};

const importData = () => {
  let datos = leerDatos();

  if (datos) {
    console.log("se han cargado datos");
  } else {
    datos = datosIniciales();
    console.log("empezando de 0", datos);
  }

  almacenarDatosStore(datos);
};

const reiniciarJuego = () => {
  almacenarDatosStore(datosIniciales());
  guardarDatos();
};

// onServerPrefetch onActivated no funciona no muestra error ni log

onBeforeMount(() => {

  importData();

  //setInterval(guardarDatos, 1000);
});


const cargando = ref(true);
const cargando_msg = ref("...")

onMounted(async() => {
  console.log("Precargar imagenes");
  // const imagenes = [
  //   "src/assets/img/managers/1.png",
  //   "src/assets/img/managers/2.png",
  //   "src/assets/img/managers/3.png",
  //   "src/assets/img/managers/4.png",
  //   "src/assets/img/managers/5.png",
  //   "src/assets/img/managers/6.png",
  // ]

  const imagenes = imagenesManager();

  for(const img of imagenes){
    const response = await fetch(img);
    await response.blob();
    console.log(response)
    cargando_msg.value = img;
  }

  cargando.value = false;
})








</script>

<template>
  <header>
   sdfsdfsdf
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/game">Game</RouterLink>
    </nav>
  </header>

  <div v-if="cargando"> Cargando {{ cargando_msg }}</div>

  <div class="contenedor_prueba">
    <button class="prueba" @click="guardarDatos">guardarStorage</button>
    <button class="prueba" @click="leerDatos">leerStorage</button>
    <button class="prueba" @click="reiniciarJuego">reiniciarJuego</button>
  </div>

  <Mensaje />
  <RouterView />
</template>

<style lang="scss">
@import "@/scss/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.contenedor_prueba {
  padding: 1rem;
  .prueba {
    margin-right: 1rem;
    padding: 5px;
  }
}

header {
  padding: 1rem;
  margin: 0.5rem;
  nav {
    color: white;

    a {
      color: white;
    }
  }
}

body {
  background-image: url("/src/assets/fondo.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  font-family: $fuente-principal;
}
</style>
