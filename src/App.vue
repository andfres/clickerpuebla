<script setup>
import { RouterLink, RouterView } from "vue-router";

//import { ref } from "vue";


import Mensaje from "@/components/Mensaje.vue";
import { creaProductores } from "@/utils/creaProductores";
import { useStore } from "@/store/store";
import { onBeforeMount } from "@vue/runtime-core";

const productoresCreados = creaProductores();
const store = useStore();

let unicaVez = true;
const guardarProductosCreados = () => {
  if (unicaVez){
    store.productores = [...productoresCreados];
    unicaVez= false;
    console.log(unicaVez)
  }
}

onBeforeMount(()=>{
   guardarProductosCreados();
})
 


</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink> |
      <RouterLink to="/about">About</RouterLink> |
      <RouterLink to="/game">Game</RouterLink>
    </nav>
  </header>

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



body{
  
  background-image: url("/src/assets/fondo.jpg");
  background-size: cover;
  background-attachment: fixed;
  height: 100vh ;
  --overflow-y: hidden;
  position: relative;

  font-family: $fuente-principal;
}




nav{
  color: white;

  a{color: white}
}
</style>
