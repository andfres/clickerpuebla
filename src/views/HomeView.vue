
<template>

  <Header></Header>

  <main>
    <h1>home</h1>
  </main>

  
  <RouterLink to="/game">
    <button>{{ mensaje_jugar}} </button>
  </RouterLink> 


</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "@vue/runtime-core";
import Header from "@/components/layaouts/Header.vue";


import { haydatos  } from "@/utils/partida"

const mensaje_jugar = computed(() => {
  if (!haydatos()) return "Nueva partida"
  return "Continuar partida"
})


</script>


<style lang="scss"  >
@import "@/scss/_variables.scss";



</style>