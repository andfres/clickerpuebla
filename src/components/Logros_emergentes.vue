<template>
  <div class="contenedor_logros_emergentes">
    <Logro_emergente
      v-for="(item, i) in logrosRecientes"
      :key="i"
      v-bind="item"
    >
    </Logro_emergente>

    <button v-if="varios" @click="borrar" class="cerrar-varios">X</button>
  </div>
</template>

<script setup>
import Logro_emergente from "@/components/Logro_emergente.vue";

import { computed } from "vue";
import { useStore } from "@/store/store";
import { storeToRefs } from "pinia";

const store = useStore();
const { logrosRecientes } = storeToRefs(store);
const { borrarTodoslogrosRecientes } = store;

const borrar = () => {
  borrarTodoslogrosRecientes();
};



 const varios = computed(()=>{
   if (logrosRecientes.value.length >= 2 ) return true;
   return false; 
 })

</script>

<style lang="scss">
#app {
  position: relative;

  .contenedor_logros_emergentes {
    
    width: 100%;
    position: fixed;
    bottom: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
  }

  .cerrar-varios{
    transform: translate(130px, -10px);
    pointer-events: initial; 

  }
}

.contenedor_logros_emergentes{
  pointer-events: none; 
}


</style>


