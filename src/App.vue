<script setup>
import { RouterLink, RouterView } from "vue-router";

//import { ref } from "vue";
 
import { creaProductores } from "@/utils/creaProductores";
import { storeToRefs } from "pinia";
import { useProductoresStore } from "@/store/productores";
import { onBeforeMount } from "@vue/runtime-core";

const productoresCreados = creaProductores();
const productoresStore = useProductoresStore();

let unicaVez = true;
const guardarProductosCreados = () => {
  if (unicaVez){
    productoresStore.productores = [...productoresCreados];
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
      <RouterLink to="/game/pueblo">Game</RouterLink>
    </nav>
  </header>

  <RouterView />
</template>

<style lang="scss">




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
}

nav{
  color: white;

  a{color: white}
}
</style>
