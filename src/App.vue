<script setup>
import { RouterLink, RouterView } from "vue-router";

import Mensaje from "@/components/Mensaje.vue";
import { creaProductores, crearManagers } from "@/utils/creaObjetos";
import { useStore } from "@/store/store";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import ProductoresVue from "./components/Productores.vue";
import ls from "localStorage-slim";

ls.config.encrypt = true;

const almacenarDatosStorage = (datos) => {
  const { productores, managers, recursos } = datos;
  const store = useStore();
  store.recursos = recursos;
  store.productores = [...productores];
  store.managers = [...managers];
};

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

  almacenarDatosStorage(datos);
};

const reiniciarJuego = () => {
  almacenarDatosStorage(datosIniciales());
};

onMounted(() => {
  importData();
  setInterval(guardarDatos, 30000);
});
</script>

<template>
  <header>
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
    <div class="flex"> 
      <div>
          <h1>novedadades</h1>

    <ul>
      <li>Los datos se guardan automaticamente cada 30 segundos</li>
      <li>Los datos de la localStorage han sido ofuscados</li>
      <li>Creado script "deploy.sh" para la automaticación del despliegue</li>
    </ul>
</div>

<div>
    <h1>To do</h1>
    <ul>
      <li>Modal + teleport</li>
      <li>loggin + vuelidate?</li>
    </ul>
</div>
    </div>
    <p></p>
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
  border: 1px solid red;
  color: white;
  background-color: black;
  padding: 1rem;
  .prueba {
    margin-right: 1rem;
    padding: 5px;
  }
  .flex{
    display: flex;
    gap: 3rem;
  }
}

header {
  padding: 1rem;
  margin: 0.5rem;
}

body {
  background-image: url("/src/assets/fondo.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  --overflow-y: hidden;
  position: relative;

  font-family: $fuente-principal;
}

nav {
  color: white;

  a {
    color: white;
  }
}
</style>
