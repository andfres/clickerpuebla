<script setup>
import { RouterLink, RouterView } from "vue-router";

import Mensaje from "@/components/Mensaje.vue";
import { creaProductores, crearManagers } from "@/utils/creaObjetos";
import { useStore } from "@/store/store";
import { onBeforeMount, onMounted  , onActivated} from "@vue/runtime-core";
import ProductoresVue from "./components/Productores.vue";
import ls from "localStorage-slim";

ls.config.encrypt = false;

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
  //console.log("DATOS", datos);
  //window.localStorage.setItem("datos", JSON.stringify(datos));
  ls.set("datos", JSON.stringify(datos));
};

//lee Datos guardados en la localStorage
const leerDatos = () => {
  //const datos = JSON.parse(window.localStorage.getItem("datos"));
  const datos = JSON.parse(ls.get("datos"));

  console.log("DATOS", datos);
  return datos;
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
  guardarDatos()
};


importData();
onActivated(() => {
  
  //setInterval(guardarDatos, 1000);
  console.log("se activo")
});
</script>

<template>
  <header>
    2
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/game">Game</RouterLink>
    </nav>
  </header>

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
