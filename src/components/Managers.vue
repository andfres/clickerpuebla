<template>
  <div class="managers">
    <h3 class="titulo">Los Managers te hacen la vida más facil</h3>
    <p>Contrata a managers para que <br> recolecten los negocios por ti</p>
    

      <!-- <div class="contenedor-managers">
      <Manager
      v-for="(item, i) in managers"
      :key="i"
      v-bind="item"
      :imagen="i+1+''"
      
    ></Manager>
    </div> -->

    
    <div class="contenedor-managers">
      <h2 v-if="!todosComprados">Managers disponibles</h2>
      <!-- <h2 v-else>Todos los managers adquiridos</h2> -->
      <Manager
      v-for="(item, i) in managersDisponibles"
      :key="i"
      v-bind="item"
    ></Manager>


     <h2 v-if="algunoComprado && !todosComprados ">Managers Adquiridos</h2>
     <h2 v-if="algunoComprado && todosComprados ">Has adquirido todos los Managers</h2>
    <Manager
      v-for="(item, i) in managersAdquiridos"
      :key="i"
      v-bind="item"
    ></Manager>
    </div> 

 
  </div>
</template>

<script setup>

import Manager from "@/components/Manager.vue";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";
import { ref, computed, toRefs, onMounted, watch } from "vue";


const store = useStore();
const { managersDisponibles , managersAdquiridos } = storeToRefs(store);

 const algunoComprado = computed(()=>{
  return  (managersAdquiridos.value.length > 0) ? true : false
 })
 const todosComprados = computed(()=>{
  return  (managersDisponibles.value.length === 0) ? true : false
 })



</script>

<style>


.managers{
  text-align: center;
}
.titulo{
  color: white;
  
}
.contenedor-managers {
 margin: 1rem 0;
 box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  
 
}
</style>