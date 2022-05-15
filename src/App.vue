<script setup>

import { ref } from "vue";
import { onBeforeMount, onMounted } from "@vue/runtime-core";

import { importData  } from "@/utils/partida"


// {almacenarDatosStore , guardarDatos , leerDatos , datosIniciales, reiniciarJuego, importData}


onBeforeMount(() => {
  importData();
});

// const cargando = ref(true);
// const cargando_msg = ref("...");

// onMounted(async () => {
//   console.log("Precargar imagenes");

//   const imagenes = imagenesTodas();

//   for (const img of imagenes) {
//     const response = await fetch(img);
//     await response.blob();
//     console.log(response);
//     cargando_msg.value = img;
//   }

//   cargando.value = false;
// });


</script>

<template>
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
