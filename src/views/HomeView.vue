
<template>
  <Header></Header>

  <!-- <main>
    <h1>home</h1>
  </main> -->

  <div class="conte_boton_jugar">
    <RouterLink to="/game">
      <button class="boton_jugar">{{ mensaje_jugar }}</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { computed } from "@vue/runtime-core";
import Header from "@/components/layaouts/Header.vue";

import { leerDatos } from "@/utils/partida";

const mensaje_jugar = computed(() => {
  if (!leerDatos()) return "Nueva partida";
  return "Continuar partida";
});
</script>


<style lang="scss"  >
@import "@/scss/_variables.scss";

.conte_boton_jugar {
  text-align: center;
}
.boton_jugar {
  font-size: 2rem;
  background-color: white;
  padding: $margin;
  margin: $margin;
  border-radius: 10px;
  border: 2px solid orange;
  animation: infinite resplandorAnimation 1s;
}
</style>