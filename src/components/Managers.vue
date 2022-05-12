<template>
  <div class="managers">

    

  <!-- <img alt="" class="fotoprueba" :src="imagenesManager()[0]" />  -->



    <h3 class="titulo">¡Los Managers te hacen la vida más facil!</h3>
    <p>
      Contrata a managers para que <br />
      recolecten los negocios por ti
    </p>

    <div class="contenedor-managers">
      <h3 class="titulo" v-if="!todosComprados">Managers disponibles</h3>

      <Manager
        v-for="(item, i) in managersDisponibles"
        :key="i"
        v-bind="item"
      ></Manager>

      <h3 class="titulo" v-if="algunoComprado && !todosComprados">
        Managers Adquiridos
      </h3>
      <h3 class="titulo" v-if="algunoComprado && todosComprados">
        Has adquirido todos los Managers
      </h3>
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
const { managersDisponibles, managersAdquiridos } = storeToRefs(store);

const algunoComprado = computed(() => {
  return managersAdquiridos.value.length > 0 ? true : false;
});
const todosComprados = computed(() => {
  return managersDisponibles.value.length === 0 ? true : false;
});
</script >

<style lang="scss">
.managers {
  text-align: center;

  & > p {
    color: white;
  }
}

.fotoprueba{
  width: 40px;
  height: 40px;
  border: 2px solid red;
}

.contenedor-managers {
  margin: 1rem 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.titulo {
  margin-bottom: 10px;
  color: rgb(255, 248, 41);
}
</style>