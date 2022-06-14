<template>
  <h3 class="titulo"> Clasificacion Jugadores</h3>

  <div class="userClasi cabecera">
    <div class="nick">
      <p> NickName </p>
    </div>

    <div class="dinero">
      <p> Dinero </p>
    </div>

  </div>


  <JugadorClasi v-for="(item, i) in clasificacion" :key="i" v-bind="item"></JugadorClasi>
</template>

<script setup>

import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";
import JugadorClasi from "./JugadorClasi.vue";
import { getClasi } from "@/servicios/getClasi";


import { onMounted } from "vue";


const store = useStore();
const { clasificacion } = storeToRefs(store);



// onMounted(() => {
//   getClasi();
// });


</script>

<style>

.cabecera{
  margin-bottom: 10px;
}
</style>