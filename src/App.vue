<script setup>
import { ref } from "vue";
import { onBeforeMount, onMounted } from "@vue/runtime-core";

import { importData } from "@/utils/partida";
import { getAll } from "@/servicios/users";

// const f = async () => {
//   console.log("obteniendo todos");
//   getAll();
// };

// f();


onMounted(() => {
  importData();
});


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

  button{
    font-family: $fuente-principal;
  }
}
</style>
