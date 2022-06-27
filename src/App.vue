<template>
  <Header></Header>
  <main>
    <RouterView />
  </main>

  <Footer></Footer>
</template>

<script setup>
import { ref } from "vue";
import { onBeforeMount, onMounted } from "@vue/runtime-core";
import Header from "@/components/layaouts/Header.vue";
import Footer from "@/components/layaouts/Footer.vue";






// console.log("DEV", import.meta.env.VITE_DEV)
//  if (import.meta.env.VITE_DEV !== true) {
//    console.log = function () {};
//  }



</script>

<style lang="scss">
@import "@/scss/_variables.scss";

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-user-select: none; /* Safari */
  -moz-user-select: none; /* Firefox */
  -ms-user-select: none; /* IE10+/Edge */
  user-select: none; /* Standard */

  -webkit-user-drag: none;
  user-select: none;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;

  text-decoration: none;
}

.contenedor_prueba {
  padding: 1rem;
  .prueba {
    margin-right: 1rem;
    padding: 5px;
  }
}

body {
  background-image: url("/src/assets/fondo.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh;
  font-family: $fuente-principal;

  #app {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    main {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }

  button {
    font-family: $fuente-principal;
  }
}
</style>
