<template>
  <div class="managers">
    <h3 class="titulo">Los Managers te hacen la vida más facil</h3>
    <p>Contrata a un manager para que maneje los negocios por ti</p>

      <div class="contenedor-managers">
      <Manager
      v-for="(item, i) in managers"
      :key="i"
      v-bind="item"
      :imagen="i+1+''"
      
    ></Manager>
    </div>


  </div>
</template>

<script setup>

import Manager from "@/components/Manager.vue";
import { useStore } from "@/store/store";

const store = useStore();

const productores = store.productores;
const nombreProductores = productores.map((ele) => ele.nombre);

const generarManagers = () => {
  const array = [];
  const nombreManager= ["alfredo", "eustaquio", "juanete", "sebas", "eldelbar", "jarolin"]
  for (let [i, nombreProductor] of nombreProductores.entries()) {

    const objeto = {}
    objeto["nombreProductor"] = nombreProductor;
    objeto["nombreManager"] = nombreManager[i];
    objeto["precio"] = 100000* i+100 ;
    
    array.push(objeto)
      

  }
  return array;
};

const managers = generarManagers();

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